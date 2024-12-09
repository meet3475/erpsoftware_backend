import conn from "../Config/connection.js";

const WebSale = {
    getsaleslistingdata: (req, res, next) => {

        let body = req?.body;
        const user_id = body.user_id ?? 0;
        console.log(user_id);

        const getsaleslistingdata = `CALL saleInvoiceReport()`;  // Calling the stored procedure

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

        console.log("getsaleslistingdata::", getsaleslistingdata);

        conn.query(getsaleslistingdata, (error, data) => {

            if (error || !data[0] || data[0].length === 0) {
                res?.send({ Status: 400, Count: 0, Message: 'Data Not Found!!!!', Data: error });
                next();
                return;
            }

            // Flatten the nested data if necessary
            const flattenedData = data[0]; // The result from the stored procedure is usually in the first index

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
