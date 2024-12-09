
import constant from '../Config/constant.js';
import conn from "../Config/connection.js";
import moment from 'moment';

const WebPurchase = {
    createwebpurchase: (req, res, next) => {

        let body = req?.body;
        let id = body.id ?? 0;
        let user_id = body.user_id ?? 0;
        let party_id = body.party_id ?? 0;
        let purchase_type_currency = body.purchase_type_currency ?? 0;
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

            let getuserlistingdata = `UPDATE purchase_invoice_report SET 
            user_id='${user_id}',
            party_id='${party_id}',
            purchase_type_currency='${purchase_type_currency}',
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
                    // return res?.send({ Status: 200, Count: 0, Message: 'Purchase Invoince Updated', Data: data });
                    // Now update purchase_invoice_item table if any item exists
                    let getquery = `SELECT id, item_id, item_qty, item_rate_dollar, item_rate_dirham FROM purchase_invoice_item WHERE purchase_invoice_id=${id}`
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
                                        const insertintopurchase_invoice_item = `
                                            UPDATE purchase_invoice_item SET
                                                is_delete_status = 1 WHERE id='${item?.id}';
                                        `;
                                        conn.query(insertintopurchase_invoice_item, (error, data) => {
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
                                        res?.send({ Status: 500, Message: 'Error inserting purchase invoice items', Error: err });
                                    });
                            }

                            const itemQueries = items.map((item, index) => {
                                return new Promise((resolve, reject) => {
                                    let updateQuery = ""
                                    if (item?.id) {
                                        updateQuery = `
                                        UPDATE purchase_invoice_item SET
                                        party_id='${party_id ?? 0}', 
                                        item_id='${item?.item_id ?? 0}',
                                        item_qty='${item?.item_qty ?? 0}', 
                                        item_rate_dollar='${item?.item_rate_dollar ?? 0}', 
                                        item_rate_dirham='${item?.item_rate_dirham ?? 0}', 
                                        updated_at='${updated_at}'
                                        WHERE purchase_invoice_id='${id}';
                                    `;
                                    }
                                    else {
                                        updateQuery = `
                                         INSERT INTO purchase_invoice_item SET
                                             purchase_invoice_id = '${id}',
                                             party_id = '${party_id ?? 0}',
                                             item_id = '${item?.item_id ?? 0}',
                                             item_qty = '${item?.item_qty ?? 0}',
                                             item_rate_dollar = '${item?.item_rate_dollar ?? 0}',
                                             item_rate_dirham = '${item?.item_rate_dirham ?? 0}',
                                             created_at = '${created_at}',
                                             updated_at = '${updated_at}',
                                             is_delete_status = 0;
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
                                    res?.send({ Status: 200, Message: 'Purchase Invoice and Items Updated Successfully' });
                                })
                                .catch((err) => {
                                    res?.send({ Status: 500, Message: 'Error updating purchase invoice items', Error: err });
                                });
                        }
                    });
                }
            });

        } else {

            let getuserlistingdata = `INSERT INTO purchase_invoice_report SET 
        user_id='${user_id}',
        party_id='${party_id}',
        purchase_type_currency='${purchase_type_currency}',
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
        is_delete_status='0' ;
        SELECT * FROM purchase_invoice_report WHERE id=LAST_INSERT_ID();
        `;

            conn.query(getuserlistingdata, (error, data) => {

                console.log("91", data[1][0]?.id);

                if (error || data.length === 0) {
                    return res?.send({ Status: 400, Message: 'Data Not Found!!!!', Data: "Invalid Data!!!!" });
                } else {
                    const purchaseInvoiceId = data[1][0]?.id;
                    if (!purchaseInvoiceId) {
                        return res?.send({ Status: 400, Message: 'Invoice ID not found!' });
                    }

                    const itemQueries = items.map(item => {
                        return new Promise((resolve, reject) => {
                            const insertintopurchase_invoice_item = `
                                INSERT INTO purchase_invoice_item SET
                                    purchase_invoice_id = '${purchaseInvoiceId}',
                                    party_id = '${party_id ?? 0}',
                                    item_id = '${item?.item_id ?? 0}',
                                    item_qty = '${item?.item_qty ?? 0}',
                                    item_rate_dollar = '${item?.item_rate_dollar ?? 0}',
                                    item_rate_dirham = '${item?.item_rate_dirham ?? 0}',
                                    created_at = '${created_at}',
                                    updated_at = '${updated_at}',
                                    is_delete_status = 0;
                            `;
                            conn.query(insertintopurchase_invoice_item, (error, data) => {
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
                            res?.send({ Status: 200, Message: 'Purchase Invoice Inserted Successfully' });
                        })
                        .catch((err) => {
                            res?.send({ Status: 500, Message: 'Error inserting purchase invoice items', Error: err });
                        });
                }
            });
        }

    },

    getsinglewebpurchase: (req, res, next) => {

        let body = req?.body;
        let id = body.id ?? 0;

        let getuserlistingdata = `SELECT 
        id,
        user_id,
        party_id,
        purchase_type_currency,
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
        remark FROM purchase_invoice_report WHERE id=${id};
        `;

        conn.query(getuserlistingdata, (error, data) => {

            if (error || data?.length == 0) {
                return res?.send({ Status: 400, Message: 'Data Not Found!!!!', Data: "Invalid Data!!!!" });
            }
            else {
                let getquery = `SELECT id, item_id, item_qty, item_rate_dollar, item_rate_dirham FROM purchase_invoice_item WHERE purchase_invoice_id=${id} AND is_delete_status='0';`
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

    getpurchaselistingdata: (req, res, next) => {

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
        const search_purchase_type_currency = search?.purchase_type_currency ? search?.purchase_type_currency : '';
        const search_amount_dollar = search?.amount_dollar ? search?.amount_dollar : '';
        const search_discount_dollar = search?.discount_dollar ? search?.discount_dollar : '';
        const search_tax_vat_dollar = search?.tax_vat_dollar ? search?.tax_vat_dollar : '';
        const search_total_amount_dollar = search?.total_amount_dollar ?? '';
        const search_pending_amount_dollar = search?.pending_amount_dollar ?? '';
        const search_remark = search?.remark ? search?.remark.trim().toLowerCase() : '';

        const sea_id = search_id != '' ? `AND purchase.id LIKE '%${search_id}%'` : '';
        const sea_invoice_date = search_invoice_date != '' ? `AND purchase.invoice_date LIKE '%${search_invoice_date}%'` : '';
        const sea_party_name = search_party_name != '' ? `AND party.party_name LIKE '%${search_party_name}%'` : '';
        const sea_purchase_type_currency = search_purchase_type_currency != '' ? `AND purchase.purchase_type_currency LIKE '%${search_purchase_type_currency}%'` : '';
        const sea_amount_dollar = search_amount_dollar != '' ? `AND purchase.amount_dollar LIKE '%${search_amount_dollar}%'` : '';
        const sea_discount_dollar = search_discount_dollar != '' ? `AND purchase.discount_dollar LIKE '%${search_discount_dollar}%'` : '';
        const sea_tax_vat_dollar = search_tax_vat_dollar != '' ? `AND purchase.tax_vat_dollar LIKE '%${search_tax_vat_dollar}%'` : '';
        // const sea_total_amount_dollar = search_tax_vat_dollar != '' ? `AND purchase.total_amount_dollar LIKE '%${search_total_amount_dollar}%'` : '';
        const sea_total_amount_dollar = search_total_amount_dollar != '' ? `AND purchase.total_amount_dollar LIKE '%${search_total_amount_dollar}%'` : ''; // meet change
        const sea_pending_amount_dollar = search_pending_amount_dollar != '' ? `AND purchase.pending_amount_dollar LIKE '%${search_pending_amount_dollar}%'` : ''; //meet change
        const sea_remark = search_remark != '' ? `AND purchase.remark LIKE '%${search_remark}%'` : '';

        if (user_id.length == 0 || user_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter User ID', Data: [] });
            next();
            return;
        }

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

    deletepurchasedata: (req, res, next) => {

        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;

        if (id.length == 0 || id == 0) {
            res?.send({ Status: 200, Count: 0, Message: 'Enter Valid Purchase ID', Data: [] });
            next();
            return;
        }

        var deletevoucherdata = `UPDATE purchase_invoice_report SET is_delete_status='1' WHERE id='${id}';`;

        conn.query(deletevoucherdata, (error, data) => {
            if (error) {
                res?.send({ Status: 400, Count: 0, Message: 'Data Not Found!!!!', Data: [] });
                next();
                return;
            }
            else {
                let getquery = `SELECT id, item_id, item_qty, item_rate_dollar, item_rate_dirham FROM purchase_invoice_item WHERE purchase_invoice_id=${id}`
                conn.query(getquery, (error, oldItemData) => {

                    if (error) {
                        return res?.send({ Status: 400, Message: 'Data Not Found!!!!', Data: "Invalid Data!!!!" });
                    } else {

                        const itemQueries = oldItemData.map(item => {
                            return new Promise((resolve, reject) => {
                                const insertintopurchase_invoice_item = `
                                            UPDATE purchase_invoice_item SET
                                            is_delete_status = 1 WHERE id='${item?.id}';
                                        `;
                                conn.query(insertintopurchase_invoice_item, (error, data) => {
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
                                return res?.send({ Status: 200, Message: 'purchase invoice Deleted Successfully' });
                            })
                            .catch((err) => {
                                res?.send({ Status: 500, Message: 'Error inserting purchase invoice items', Error: err });
                            });
                    }
                })
            }
        });
    },
};


export default WebPurchase;

