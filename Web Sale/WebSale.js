import conn from "../Config/connection.js";
import constant from '../Config/constant.js';
import moment from 'moment';

const WebSale = {

    createwebsale: (req, res, next) => {

        let body = req?.body;
        let id = body.id ?? 0;
        let user_id = body.user_id ?? 0;
        let party_id = body.party_id ?? 0;
        let sale_type_currency = body.sale_type_currency ?? 0;
        let invoice_date = body.invoice_date ?? 0;
        let amount_dirham = body.amount_dirham ?? 0;
        let amount_dollar = body.amount_dollar ?? 0;
        let discount_dirham = body.discount_dirham ?? 0;
        let discount_dollar = body.discount_dollar ?? 0;
        let tax_vat_per = body.tax_vat_per ?? 0;
        let tax_vat_dirham = body.tax_vat_dirham ?? 0;
        let tax_vat_dollar = body.tax_vat_dollar ?? 0;
        let total_amount_dirham = body.total_amount_dirham ?? 0;
        let total_amount_dollar = body.total_amount_dollar ?? 0;
        let remark = body.remark ?? 0;
        let items = body.items ?? [];
        console.log("items", items);
        let created_at = constant.moment().format('YYYY-MM-DD h:mm:ss');
        let updated_at = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (id > 0) {


        } else {

            let getuserlistingdata = `
                INSERT INTO sales_invoice_report SET 
                user_id='${user_id}',
                party_id='${party_id}',
                sales_type_currency='${sale_type_currency}',
                invoice_date='${invoice_date}',
                amount_dirham='${amount_dirham}',
                amount_dollar='${amount_dollar}',
                discount_dirham='${discount_dirham}',
                discount_dollar='${discount_dollar}',
                amount_after_discount_dirham='${Number(Number(amount_dirham) - Number(discount_dirham)).toFixed(2)}',
                amount_after_discount_dollar='${Number(Number(amount_dollar) - Number(discount_dollar)).toFixed(2)}',
                tax_vat_per='${tax_vat_per}',
                tax_vat_dirham='${tax_vat_dirham}',
                tax_vat_dollar='${tax_vat_dollar}',
                total_amount_dirham='${total_amount_dirham}',
                total_amount_dollar='${total_amount_dollar}',
                pending_amount_dirham='${total_amount_dirham}',
                pending_amount_dollar='${total_amount_dollar}',
                remark="${remark}",
                created_at='${created_at}',
                updated_at='${updated_at}',
                is_delete_status='0';
                SELECT * FROM sales_invoice_report WHERE id=LAST_INSERT_ID();                                    
            `;

            console.log("getuserlistingdata::", getuserlistingdata);

            conn.query(getuserlistingdata, (error, data) => {

                console.log("data::", data);
                console.log("66", data[1][0]?.id);

                if (error || data.length === 0) {
                    return res?.send({ Status: 400, Message: 'Data Not Found!!!!', Data: "Invalid Data!!!!" });
                } else {
                    const saleInvoiceId = data[1][0]?.id;
                    if (!saleInvoiceId) {
                        return res?.send({ Status: 400, Message: 'Invoice ID not found!' });
                    }

                    const itemQueries = items.map(item => {
                        return new Promise((resolve, reject) => {
                            const insertintosale_invoice_item = `
                                INSERT INTO sales_invoice_item SET
                                    sales_invoice_id = '${saleInvoiceId}',
                                    party_id = '${party_id ?? 0}',
                                    item_id = '${item?.item_id ?? 0}',
                                    item_qty = '${item?.item_qty ?? 0}',
                                    item_rate_dollar = '${item?.item_rate_dollar ?? 0}',
                                    item_rate_dirham = '${item?.item_rate_dirham ?? 0}',
                                    created_at = '${created_at}',
                                    updated_at = '${updated_at}',
                                    is_delete_status = '0';
                            `;

                            console.log("insertintosale_invoice_item", insertintosale_invoice_item);

                            conn.query(insertintosale_invoice_item, (error, data) => {
                                console.log("data", data);

                                if (error) {
                                    reject(error);
                                } else {
                                    resolve(data);
                                }
                            });
                        });
                    });

                    // Wait for all items to be inserted
                    Promise.all(itemQueries)
                        .then(() => {
                            res?.send({ Status: 200, Message: 'Sale Invoice Inserted Successfully' });
                        })
                        .catch((err) => {
                            res?.send({ Status: 500, Message: 'Error inserting Sale invoice items', Error: err });
                        });
                }
            });
        }

    },

    getsinglewebsale: (req, res, next) => {

        let body = req?.body;
        let id = body.id ?? 0;

        let getuserlistingdata = `SELECT 
        id,
        user_id,
        party_id,
        sales_type_currency,
        invoice_date,
        amount_dirham,
        amount_dollar,
        discount_dirham,
        discount_dollar,
        tax_vat_per,
        tax_vat_dirham,
        tax_vat_dollar,
        total_amount_dirham,
        total_amount_dollar,
        NULL as items,
        remark FROM sales_invoice_report WHERE id=${id};
        `;

        conn.query(getuserlistingdata, (error, data) => {

            if (error || data?.length == 0) {
                return res?.send({ Status: 400, Message: 'Data Not Found!!!!', Data: "Invalid Data!!!!" });
            }
            else {
                let getquery = `SELECT id, item_id, item_qty, item_rate_dollar, item_rate_dirham FROM sales_invoice_item WHERE sales_invoice_id=${id} AND is_delete_status='0';`
                conn.query(getquery, (error, itemData) => {
                    const result = itemData.map(row => ({
                        id: row.id,
                        item_id: row.item_id,
                        item_qty: row.item_qty,
                        item_rate_dollar: row.item_rate_dollar,
                        item_rate_dirham: row.item_rate_dirham
                    }));
                    const newData = {
                        ...data[0],
                        items: result
                    }
                    return res?.send({ Status: 200, Count: 0, Message: 'Data Found!', data: newData });
                });
            }
        });

    },
    
    getsalesapilistingdata: (req, res, next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body.user_id ?? 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'voucher.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno - 1) * total_limit;

        const limit_query = body?.is_export == true ? ' ' : `LIMIT ${total_offset},${total_limit}`;

        console.log("total_amount_dollar::", search?.total_amount_dollar);

        const search_id = search?.id ? search?.id : '';
        const search_invoice_date = search?.invoice_date ? search?.invoice_date : '';
        const search_party_name = search?.party_name ? search?.party_name.trim().toLowerCase() : '';
        const search_sales_type_currency = search?.sales_type_currency ? search?.sales_type_currency : '';
        const search_amount_dollar = search?.amount_dollar ? search?.amount_dollar : '';
        const search_discount_dollar = search?.discount_dollar ? search?.discount_dollar : '';
        const search_tax_vat_dollar = search?.tax_vat_dollar ? search?.tax_vat_dollar : '';
        const search_total_amount_dollar = search?.total_amount_dollar ?? '';
        const search_pending_amount_dollar = search?.pending_amount_dollar ?? '';
        const search_amount_dirham = search?.amount_dirham ? search?.amount_dirham : '';
        const search_discount_dirham = search?.discount_dirham ? search?.discount_dirham : '';
        const search_tax_vat_dirham = search?.tax_vat_dirham ? search?.tax_vat_dirham : '';
        const search_total_amount_dirham = search?.total_amount_dirham ?? '';
        const search_pending_amount_dirham = search?.pending_amount_dirham ?? '';
        const search_remark = search?.remark ? search?.remark.trim().toLowerCase() : '';

        const sea_id = search_id != '' ? `AND sales.id LIKE '%${search_id}%'` : '';
        const sea_invoice_date = search_invoice_date != '' ? `AND sales.invoice_date LIKE '%${search_invoice_date}%'` : '';
        const sea_party_name = search_party_name != '' ? `AND party.party_name LIKE '%${search_party_name}%'` : '';
        const sea_sales_type_currency = sales_type_currency != '' ? `AND sales.sales_type_currency LIKE '%${search_sales_type_currency}%'` : '';
        const sea_amount_dollar = search_amount_dollar != '' ? `AND sales.amount_dollar LIKE '%${search_amount_dollar}%'` : '';
        const sea_discount_dollar = search_discount_dollar != '' ? `AND sales.discount_dollar LIKE '%${search_discount_dollar}%'` : '';
        const sea_tax_vat_dollar = search_tax_vat_dollar != '' ? `AND sales.tax_vat_dollar LIKE '%${search_tax_vat_dollar}%'` : '';
        const sea_total_amount_dollar = search_total_amount_dollar != '' ? `AND sales.total_amount_dollar LIKE '%${search_total_amount_dollar}%'` : ''; 
        const sea_pending_amount_dollar = search_pending_amount_dollar != '' ? `AND sales.pending_amount_dollar LIKE '%${search_pending_amount_dollar}%'` : ''; 
        const sea_amount_dirham = search_amount_dirham != '' ? `AND sales.amount_dirham LIKE '%${search_amount_dirham}%'` : '';
        const sea_discount_dirham = search_discount_dirham != '' ? `AND sales.discount_dirham LIKE '%${search_discount_dirham}%'` : '';
        const sea_tax_vat_dirham = search_tax_vat_dirham != '' ? `AND sales.tax_vat_dirham LIKE '%${search_tax_vat_dirham}%'` : '';
        const sea_total_amount_dirham = search_total_amount_dirham != '' ? `AND sales.total_amount_dirham LIKE '%${search_total_amount_dirham}%'` : '';
        const sea_pending_amount_dirham =  search_pending_amount_dirham != '' ? `AND sales.pending_amount_dirham LIKE '%${search_pending_amount_dirham}%'` : '';
        const sea_remark = search_remark != '' ? `AND sales.remark LIKE '%${search_remark}%'` : '';

        if (user_id.length == 0 || user_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter User ID', Data: [] });
            next();
            return;
        }

        // start
        
        var getpurchaselistingdata = `SELECT
        purchase.id,
        purchase.id,
        purchase.invoice_date,
        party.party_name,
        purchase.purchase_type_currency,
        purchase.amount_dollar,
        purchase.discount_dollar,
        purchase.tax_vat_dollar,
        purchase.total_amount_dollar,
        purchase.amount_dirham,
        purchase.discount_dirham,
        purchase.total_amount_dirham,
        purchase.tax_vat_dirham,
        purchase.pending_amount_dirham,
        (
        CASE 
            WHEN (
                SELECT COUNT(*) 
                FROM erp_voucher_child AS child
                WHERE 
                    child.tax_invoice_id = purchase.id 
                    AND child.voucher_child_invoice_type = 'purchase'
                    AND child.is_delete_status = '0'
            ) > 0 THEN(
                SELECT COALESCE(
                    voucher.voucher_child_invoice_amount_dollar - SUM(voucher.voucher_child_balance_dollar), 
                    0
                )
                FROM erp_voucher_child AS voucher 
                JOIN erp_voucher AS main_voucher 
                  ON main_voucher.id = voucher.voucher_id
                WHERE 
                    voucher.tax_invoice_id = purchase.id
                    AND voucher.voucher_child_invoice_type = 'purchase'
                    AND voucher.is_delete_status = '0'
            )
             ELSE purchase.total_amount_dollar
        END
    ) AS pending_amount_dollar,
        purchase.remark,
         (
        SELECT 
            CASE WHEN COUNT(*) > 0 THEN 1 ELSE 0 END
        FROM erp_voucher_child AS child
        WHERE 
            child.tax_invoice_id = purchase.id 
            AND child.voucher_child_invoice_type = 'purchase'
            AND child.is_delete_status = '0'
    ) AS is_editable
        FROM purchase_invoice_report as purchase 
            LEFT JOIN partys as party 
                ON party.id=purchase.party_id  
                        WHERE purchase.user_id='${user_id}' AND purchase.is_delete_status='0' ${sea_id} ${sea_invoice_date} ${sea_party_name} ${sea_purchase_type_currency} ${sea_amount_dollar} ${sea_discount_dollar} ${sea_tax_vat_dollar} ${sea_total_amount_dollar} ${sea_pending_amount_dollar} ${sea_remark} ORDER BY '${orderby}' '${orderformat}' ${limit_query}`; 

        console.log("getpurchaselistingdata::", getpurchaselistingdata);


        conn.query(getpurchaselistingdata, (error, data) => {

            if (error || data?.length == 0) {
                res?.send({ Status: 400, Count: 0, Message: 'Data Not Found!!!!', Data: error });
                next();
                return;
            }

            var totalvouchercount = `
            SELECT COUNT(voucher.id) as Count
            FROM erp_voucher as voucher 
                LEFT JOIN erp_party as from_party 
                    ON from_party.id=voucher.from_party_id 
                        LEFT JOIN erp_party as to_party 
                            ON to_party.id=voucher.to_party_id 
                                WHERE 
                                voucher.user_id='${user_id}' voucher.is_delete_status='0'`;

            conn.query(totalvouchercount, (error, countdata) => {

                const newData = data.map((item) => {
                    return ({
                        ...item,
                        invoice_date: moment(item?.invoice_date).format("DD-MM-YYYY")
                    })
                })

                res?.send({ Status: 200, Count: data?.length, TotalCount: countdata?.length > 0 ? countdata[0]?.Count : countdata, Message: 'Data found', Data: newData });
                next();
                return;
            });
        });
    },

    getsaleslistingdata: (req, res, next) => {

        let body = req?.body;
        const user_id = body.user_id ?? 0;
        console.log(user_id);

        const getsaleslistingdata = `CALL saleInvoiceReport(); 
                SELECT   
                    CONCAT('ACC-', LPAD(sales.id, 2, '0')) AS invoice_no, 
                    sales.invoice_date AS date,
                    party.party_name AS party_name, 
                    sales.sales_type_currency,
                    sales.amount_dollar,
                    sales.discount_dollar,
                    sales.tax_vat_dollar,
                    sales.total_amount_dollar,
                    sales.amount_dirham,
                    sales.discount_dirham,
                    sales.total_amount_dirham,
                    sales.tax_vat_dirham,
                    sales.remark,
                    DATE_FORMAT(sales.invoice_date, '%Y-%m-%d') AS date,

                    ROUND(
                        CASE 
                            WHEN (
                                SELECT COUNT(*) 
                                FROM erp_voucher_child AS child
                                WHERE 
                                    child.tax_invoice_id = sales.id 
                                    AND child.voucher_child_invoice_type = 'sale'
                                    AND child.is_delete_status = '0'
                            ) > 0 THEN (
                                SELECT COALESCE(
                                    voucher.voucher_child_invoice_amount_dollar - 
                                    SUM(voucher.voucher_child_disc_amt_dollar) - 
                                    SUM(voucher.voucher_child_balance_dollar), 
                                    0
                                )
                                FROM erp_voucher_child AS voucher 
                                JOIN erp_voucher AS main_voucher 
                                ON main_voucher.id = voucher.voucher_id
                                WHERE 
                                    voucher.tax_invoice_id = sales.id
                                    AND voucher.voucher_child_invoice_type = 'sale'
                                    AND voucher.is_delete_status = '0'
                            )
                            ELSE sales.total_amount_dollar
                        END, 2
                    ) AS pending_amount_dollar,

                    ROUND(
                        CASE
                            WHEN (
                                SELECT COUNT(*) 
                                FROM erp_voucher_child AS child 
                                WHERE 
                                    child.tax_invoice_id = sales.id 
                                    AND child.voucher_child_invoice_type = 'sale' 
                                    AND child.is_delete_status = '0'
                            ) > 0 THEN (
                                SELECT COALESCE(
                                    voucher.voucher_child_invoice_amount_dirham - 
                                    SUM(voucher.voucher_child_disc_amt_dirham) - 
                                    SUM(voucher.voucher_child_balance_dirham), 
                                    0
                                )
                                FROM erp_voucher_child AS voucher 
                                JOIN erp_voucher AS main_voucher 
                                ON main_voucher.id = voucher.voucher_id 
                                WHERE 
                                    voucher.tax_invoice_id = sales.id 
                                    AND voucher.voucher_child_invoice_type = 'sale' 
                                    AND voucher.is_delete_status = '0'
                            )
                            ELSE sales.total_amount_dirham
                        END, 2
                    ) AS pending_amount_dirham,

                    ROUND(
                        (
                            SELECT COALESCE(SUM(voucher.voucher_child_balance_dollar), 0) 
                            FROM erp_voucher_child AS voucher 
                            WHERE voucher.tax_invoice_id = sales.id 
                            AND voucher.voucher_child_invoice_type = 'sale' 
                            AND voucher.is_delete_status = '0'
                        ), 2
                    ) AS paid_dollar,

                    ROUND(
                        (
                            SELECT COALESCE(SUM(voucher.voucher_child_balance_dirham), 0) 
                            FROM erp_voucher_child AS voucher 
                            WHERE voucher.tax_invoice_id = sales.id 
                            AND voucher.voucher_child_invoice_type = 'sale' 
                            AND voucher.is_delete_status = '0'
                        ), 2
                    ) AS paid_dirham,

                    (
                        SELECT 
                            CASE WHEN COUNT(*) > 0 THEN 1 ELSE 0 END
                        FROM erp_voucher_child AS child
                        WHERE 
                            child.tax_invoice_id = sales.id 
                            AND child.voucher_child_invoice_type = 'sale'
                            AND child.is_delete_status = '0'
                    ) AS is_editable

                FROM sales_invoice_report AS sales 
                LEFT JOIN partys AS party 
                    ON party.id = sales.party_id  
                WHERE 
                    sales.user_id = '${user_id}'
                    AND sales.is_delete_status = '0';
        `;  // Calling the stored procedure


        //         const getsaleslistingdata = `
        // SELECT 
        //     blrcl.sales_order_id AS sales_id,
        //     so.date,
        //     party.party_name,
        //     item.item_name,
        //     so.rate_dirham,
        //     so.rate_dollar,
        //     so.net_weight,
        //     so.qty,
        //     DATE_FORMAT(so.date, '%Y-%m-%d') AS date,
        //     (SELECT COUNT(*) 
        //      FROM bl_request_cet_lists 
        //      WHERE sales_order_id = so.id) AS used,
        //     (so.qty - 
        //      (SELECT COUNT(*) 
        //       FROM bl_request_cet_lists 
        //       WHERE sales_order_id = so.id)) AS remaining_container,
        //     (so.net_weight / so.qty * 
        //      (SELECT COUNT(*) 
        //       FROM bl_request_cet_lists 
        //       WHERE sales_order_id = so.id) * so.rate_dollar) AS total_amount_dollar,
        //        (so.net_weight / so.qty * 
        //      (SELECT COUNT(*) 
        //       FROM bl_request_cet_lists 
        //       WHERE sales_order_id = so.id) * so.rate_dirham) AS total_amount_dirham
        // FROM 
        //     bl_request_cet_lists AS blrcl
        // LEFT JOIN    
        //     sales_orders AS so ON blrcl.sales_order_id = so.id
        // LEFT JOIN    
        //     partys AS party ON so.party_name = party.id
        // LEFT JOIN    
        //     items AS item ON so.item_name = item.id
        // GROUP BY 
        //     blrcl.sales_order_id;`

        // console.log("getsaleslistingdata::", getsaleslistingdata);

        conn.query(getsaleslistingdata, (error, data) => {

            if (error || !data[0] || data[0].length === 0) {
                res?.send({ Status: 400, Count: 0, Message: 'Data Not Found!!!!', Data: error });
                next();
                return;
            }

            // Flatten the nested data if necessary
            const flattenedData = [...data[0], ...data[2]]; // The result from the stored procedure is usually in the first index
            // console.log("data results ::", data[2]);
            
            var totalSalesCount = `
                SELECT COUNT(*) AS Count
                FROM sales_orders AS so
                WHERE
                    so.user_id='${user_id}' AND so.is_delete_status='0';
            `;

            conn.query(totalSalesCount, (error, countdata) => {

                res?.send({
                    Status: 200,
                    Count: flattenedData?.length,
                    TotalCount: countdata?.length > 0 ? countdata[0]?.Count : countdata,
                    Message: 'Data found',
                    Data: flattenedData // Send the flattened data here
                });
                next();
                return;
            });
        });
    },
};

export default WebSale;
