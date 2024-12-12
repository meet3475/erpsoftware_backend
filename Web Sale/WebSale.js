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

            let getuserlistingdata = `UPDATE sales_invoice_report SET 
            user_id='${user_id}',
            party_id='${party_id}',
            sales_type_currency='${sale_type_currency}',
            invoice_date='${invoice_date}',
            amount_dirham='${amount_dirham}',
            amount_dollar='${amount_dollar}',
            amount_after_discount_dirham='${Number(Number(amount_dirham) - Number(discount_dirham)).toFixed(2)}',
            amount_after_discount_dollar='${Number(Number(amount_dollar) - Number(discount_dollar)).toFixed(2)}',
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
            updated_at='${updated_at}' WHERE id='${id}';
            `;

            conn.query(getuserlistingdata, (error, data) => {

                if (error || data?.length == 0) {
                    return res?.send({ Status: 400, Message: 'Data Not Found!!!!', Data: "Invalid Data!!!!" });
                }
                else {
                    // Now update purchase_invoice_item table if any item exists
                    let getquery = `SELECT id, item_id, item_qty, item_rate_dollar, item_rate_dirham FROM sales_invoice_item WHERE sales_invoice_id=${id}`
                    
                    conn.query(getquery, (error, oldItemData) => {

                        if (error) {
                            return res?.send({ Status: 400, Message: 'Data Not Found!!!!', Data: "Invalid Data!!!!" });
                        } else {


                            const newItemWithIds = items.map(item => item.id).filter(id => id !== undefined);
                            const filteredOldItems = oldItemData.filter(oldItem => !newItemWithIds.includes(oldItem.id));
                            console.log("filteredOldItems 76::", filteredOldItems);

                            if (filteredOldItems?.length > 0) {
                                const itemQueries = filteredOldItems.map(item => {
                                    return new Promise((resolve, reject) => {
                                        const insertintosale_invoice_item = `
                                            UPDATE sales_invoice_item SET
                                                is_delete_status = '1' WHERE id='${item?.id}';
                                        `;
                                        conn.query(insertintosale_invoice_item, (error, data) => {
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
                                        // res?.send({ Status: 200, Message: 'Purchase Invoice Inserted Successfully' });
                                    })
                                    .catch((err) => {
                                        res?.send({ Status: 500, Message: 'Error inserting sale invoice items', Error: err });
                                    });
                            }

                            const itemQueries = items.map((item, index) => {
                                return new Promise((resolve, reject) => {
                                    let updateQuery = ""
                                    if (item?.id) {
                                        updateQuery = `
                                        UPDATE sales_invoice_item SET
                                        party_id='${party_id ?? 0}', 
                                        item_id='${item?.item_id ?? 0}',
                                        item_qty='${item?.item_qty ?? 0}', 
                                        item_rate_dollar='${item?.item_rate_dollar ?? 0}', 
                                        item_rate_dirham='${item?.item_rate_dirham ?? 0}', 
                                        updated_at='${updated_at}'
                                        WHERE sales_invoice_id='${id}';
                                    `;
                                    }
                                    else {
                                        updateQuery = `
                                         INSERT INTO sales_invoice_item SET
                                             sales_invoice_id = '${id}',
                                             party_id = '${party_id ?? 0}',
                                             item_id = '${item?.item_id ?? 0}',
                                             item_qty = '${item?.item_qty ?? 0}',
                                             item_rate_dollar = '${item?.item_rate_dollar ?? 0}',
                                             item_rate_dirham = '${item?.item_rate_dirham ?? 0}',
                                             created_at = '${created_at}',
                                             updated_at = '${updated_at}',
                                             is_delete_status = '0';
                                     `;
                                    }


                                    console.log("updateQuery::", updateQuery);

                                    conn.query(updateQuery, (error, data) => {
                                        if (error) {
                                            reject(error);
                                        } else {
                                            resolve(data);
                                        }
                                    });
                                });
                            });

                            // Wait for all item updates or inserts to finish
                            Promise.all(itemQueries)
                                .then(() => {
                                    res?.send({ Status: 200, Message: 'sale Invoice and Items Updated Successfully' });
                                })
                                .catch((err) => {
                                    res?.send({ Status: 500, Message: 'Error updating sale invoice items', Error: err });
                                });
                        }
                    });
                }
            });



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
        console.log("body::", body);
        
        let id = body.id ?? 0;
        console.log("id::", id);
        
        let getuserlistingdata = `SELECT 
        id,
        user_id,
        party_id,
        sales_type_currency as sale_type_currency,
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

        console.log("getuserlistingdata", getuserlistingdata);
        

        conn.query(getuserlistingdata, (error, data) => {
            console.log("data::", data);
            
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
    
    getsaleslistingdata: (req, res, next) => {

        let body = req?.body;
        const user_id = body.user_id ?? 0;
        console.log(user_id);

        const getsaleslistingdata = `CALL saleInvoiceReport(); 
                SELECT   
                    CONCAT('ACC-', LPAD(sales.id, 2, '0')) AS invoice_no, 
                    sales.id AS id,
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


        conn.query(getsaleslistingdata, (error, data) => {

            console.log("data getsaleslistingdata ::", data);

            if (error || !data[0] || data[0].length === 0) {
                res?.send({ Status: 400, Count: 0, Message: 'Data Not Found!!!!', Data: error });
                next();
                return;
            }

            // Flatten the nested data if necessary
            // const flattenedData = data[0];
            // console.log("data results ::",  data);
            const flattenedData = [...data[0], ...data[2]]; // The result from the stored procedure is usually in the first index
            console.log("data results ::", data[2]);
            
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

    deletesaledata: (req, res, next) => {

        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;

        if (id.length == 0 || id == 0) {
            res?.send({ Status: 200, Count: 0, Message: 'Enter Valid Sale ID', Data: [] });
            next();
            return;
        }

        var deletevoucherdata = `UPDATE sales_invoice_report SET is_delete_status='1' WHERE id='${id}';`;

        conn.query(deletevoucherdata, (error, data) => {
            if (error) {
                res?.send({ Status: 400, Count: 0, Message: 'Data Not Found!!!!', Data: [] });
                next();
                return;
            }
            else {
                let getquery = `SELECT id, item_id, item_qty, item_rate_dollar, item_rate_dirham FROM sales_invoice_item WHERE sales_invoice_id=${id}`
                conn.query(getquery, (error, oldItemData) => {

                    if (error) {
                        return res?.send({ Status: 400, Message: 'Data Not Found!!!!', Data: "Invalid Data!!!!" });
                    } else {

                        const itemQueries = oldItemData.map(item => {
                            return new Promise((resolve, reject) => {
                                const insertintosale_invoice_item = `
                                            UPDATE sales_invoice_item SET
                                            is_delete_status = '1' WHERE id='${item?.id}';
                                        `;
                                conn.query(insertintosale_invoice_item, (error, data) => {
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
                                return res?.send({ Status: 200, Message: 'sale invoice Deleted Successfully' });
                            })
                            .catch((err) => {
                                res?.send({ Status: 500, Message: 'Error inserting sale invoice items', Error: err });
                            });
                    }
                })
            }
        });
    }
};

export default WebSale;
