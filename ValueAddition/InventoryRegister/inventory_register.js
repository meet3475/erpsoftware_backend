import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllInventoryRegisterApis = {
    
    // GET inventoryregister LISTING DATA API //
    getinventoryregisterlistingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const total_limit = body?.limit ? body?.limit : 12;
        const sortby = body?.sortby ? body?.sortby : 'id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
       
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        if (company_id.length == 0 || company_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Company ID',Data:[] });
            next();
            return;
        }
        if (branch_id.length == 0 || branch_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Branch ID',Data:[] });
            next();
            return;
        }
        if (year_id.length == 0 || year_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Year ID',Data:[] });
            next();
            return;
        }

        var getinventoryregisterlistingdata = `SELECT DATE_FORMAT(inventory_invoice_entry_date, '%M-%Y') as month,SUM(inventory_invoice_total_taxable) as inventory_invoice_total_taxable,SUM(inventory_invoice_total_sgst) as inventory_invoice_total_sgst,SUM(inventory_invoice_total_cgst) as inventory_invoice_total_cgst,SUM(inventory_invoice_total_igst) as inventory_invoice_total_igst,SUM(inventory_invoice_total_sgst + inventory_invoice_total_cgst + inventory_invoice_total_igst) as tax,SUM(inventory_invoice_total_total) as inventory_invoice_total_total,SUM(inventory_invoice_total_net_amount) as inventory_invoice_total_net_amount FROM erp_inventory_invoice WHERE user_id='${user_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND is_delete_status='0' GROUP BY MONTH(inventory_invoice_entry_date) ORDER BY ${orderby} ${orderformat} LIMIT ${total_limit}`;

        conn.query(getinventoryregisterlistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            var totalinventoryregistercount = `SELECT COUNT(id) as Count FROM erp_inventory_invoice WHERE user_id='${user_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND is_delete_status='0' GROUP BY MONTH(inventory_invoice_entry_date)`;
        
            conn.query(totalinventoryregistercount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },
};


export default AllInventoryRegisterApis;
    
