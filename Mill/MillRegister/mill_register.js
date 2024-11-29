import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllMillRegisterApis = {
    
    // GET mill register LISTING DATA API //
    getmillregisterlistingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const total_limit = body?.limit ? body?.limit : 12;
        const sortby = body?.sortby ? body?.sortby : 'id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const filterData = body?.filter_data ? body?.filter_data : []
       
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
        if (year_id.length == 0 || year_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Year ID',Data:[] });
            next();
            return;
        }
        if (branch_id.length == 0 || branch_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Branch ID',Data:[] });
            next();
            return;
        }

        const returnData = [];

        for (let index = 0; index < filterData.length; index++)
        {
            var getmillregisterlistingdata = `SELECT DATE_FORMAT(mill_tax_invoice_entry_date, '%M-%Y') as month,COALESCE(SUM(mill_tax_invoice_total_taka), 0) as mill_tax_invoice_total_taka,COALESCE(SUM(mill_tax_invoice_total_meter), 0) as mill_tax_invoice_total_meter,COALESCE(SUM(mill_tax_invoice_total_taxable_amount), 0) as mill_tax_invoice_total_taxable_amount,COALESCE(SUM(mill_tax_invoice_total_sgst), 0) as mill_tax_invoice_total_sgst,COALESCE(SUM(mill_tax_invoice_total_cgst), 0) as mill_tax_invoice_total_cgst,COALESCE(SUM(mill_tax_invoice_total_igst), 0) as mill_tax_invoice_total_igst,COALESCE(SUM(mill_tax_invoice_total_sgst + mill_tax_invoice_total_cgst + mill_tax_invoice_total_igst), 0) as tax,COALESCE(SUM(mill_tax_invoice_total_amount), 0) as mill_tax_invoice_total_amount,COALESCE(SUM(mill_tax_invoice_total_net_amount), 0) as mill_tax_invoice_total_net_amount FROM erp_mill_tax_invoice WHERE user_id='${user_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND is_delete_status='0' AND mill_tax_invoice_date LIKE '${filterData[index]}%'`;

            conn.query(getmillregisterlistingdata,(error,data) => {
                if (data[0]?.tax >= 0) {
                    returnData?.push({
                        ...data[0],
                        month:constant.moment(`${filterData[index]}01`).format('MMMM-YYYY')
                    })
                }
            });
        }
        setTimeout(() => {
            res?.send({ Status:200,Count:returnData?.length,Message:'Data found',Data: returnData});
            return;
        }, 75);

        /*
        var getmillregisterlistingdata = `SELECT DATE_FORMAT(mill_tax_invoice_entry_date, '%M-%Y'), 0) as month,COALESCE(SUM(mill_tax_invoice_total_taka), 0) as mill_tax_invoice_total_taka,COALESCE(SUM(mill_tax_invoice_total_meter), 0) as mill_tax_invoice_total_meter,COALESCE(SUM(mill_tax_invoice_total_taxable_amount), 0) as mill_tax_invoice_total_taxable_amount,COALESCE(SUM(mill_tax_invoice_total_sgst), 0) as mill_tax_invoice_total_sgst,COALESCE(SUM(mill_tax_invoice_total_cgst), 0) as mill_tax_invoice_total_cgst,COALESCE(SUM(mill_tax_invoice_total_igst), 0) as mill_tax_invoice_total_igst,COALESCE(SUM(mill_tax_invoice_total_sgst + mill_tax_invoice_total_cgst + mill_tax_invoice_total_igst), 0) as tax,COALESCE(SUM(mill_tax_invoice_total_amount), 0) as mill_tax_invoice_total_amount,COALESCE(SUM(mill_tax_invoice_total_net_amount), 0) as mill_tax_invoice_total_net_amount FROM erp_mill_tax_invoice WHERE user_id='${user_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND is_delete_status='0' GROUP BY MONTH(mill_tax_invoice_entry_date) ORDER BY ${orderby} ${orderformat} LIMIT ${total_limit}`;

        conn.query(getmillregisterlistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            var totalmillregistercount = `SELECT COUNT(id), 0) as Count FROM erp_mill_tax_invoice WHERE  user_id='${user_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND is_delete_status='0' GROUP BY MONTH(mill_tax_invoice_entry_date) `;
        
            conn.query(totalmillregistercount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
        */
    },
};


export default AllMillRegisterApis;
    
