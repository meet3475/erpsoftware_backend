import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllBranchApis = {

    // INSERT AND UPDATE BRANCH DATA API //
    createbranch: (req,res,next) => {

        let body  = req?.body;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const state_id  = body?.state_id ? body?.state_id  : 0;
        const industries_id  = body?.industries_id ? body?.industries_id  : 0;
        const branch_name = body?.branch_name ? body?.branch_name.toLowerCase().trim() : '';
        const branch_address = body?.branch_address ? body?.branch_address.toLowerCase().trim() : '';
        const branch_pincode = body?.branch_pincode ? body?.branch_pincode : '';
        const branch_gst_no = body?.branch_gst_no ? body?.branch_gst_no.trim() : '';
        const branch_code = body?.branch_code ? body?.branch_code.trim() : ''; 
        const branch_mobile_1 = body?.branch_mobile_1 ? body?.branch_mobile_1.trim() : '';
        const branch_mobile_2 = body?.branch_mobile_2 ? body?.branch_mobile_2.trim() : '';
        const branch_mobile_3 = body?.branch_mobile_3 ? body?.branch_mobile_3.trim() : '';
        const branch_bill_of_supply = body?.branch_bill_of_supply ? body?.branch_bill_of_supply.trim() : '';
        const branch_tax_invoice = body?.branch_tax_invoice ? body?.branch_tax_invoice.trim() : '';
        const branch_invoice = body?.branch_invoice ? body?.branch_invoice.trim() : '';
        const branch_sales_journal = body?.branch_sales_journal ? body?.branch_sales_journal.trim() : '';
        const branch_sales_return = body?.branch_sales_return ? body?.branch_sales_return.trim() : '';
        const branch_sgst_payble = body?.branch_sgst_payble ? body?.branch_sgst_payble.trim().toLowerCase() : 'payble';
        const branch_cgst_payble = body?.branch_cgst_payble ? body?.branch_cgst_payble.trim().toLowerCase() : 'payble';
        const branch_igst_payble = body?.branch_igst_payble ? body?.branch_igst_payble.trim().toLowerCase() : 'payble';
        const branch_sgst_receivable = body?.branch_sgst_receivable ? body?.branch_sgst_receivable.trim().toLowerCase() : 'receivable';
        const branch_cgst_receivable = body?.branch_cgst_receivable ? body?.branch_cgst_receivable.trim().toLowerCase() : 'receivable';
        const branch_igst_receivable = body?.branch_igst_receivable ? body?.branch_igst_receivable.trim().toLowerCase() : 'receivable';
        const branch_interim_sgst_payble = body?.branch_interim_sgst_payble ? body?.branch_interim_sgst_payble.trim().toLowerCase() : 'payble';
        const branch_interim_cgst_payble = body?.branch_interim_cgst_payble ? body?.branch_interim_cgst_payble.trim().toLowerCase() : 'payble';
        const branch_interim_igst_payble = body?.branch_interim_igst_payble ? body?.branch_interim_igst_payble.trim().toLowerCase() : 'payble';
        const branch_interim_sgst_receivable = body?.branch_interim_sgst_receivable ? body?.branch_interim_sgst_receivable.trim().toLowerCase() : 'receivable';
        const branch_interim_cgst_receivable = body?.branch_interim_cgst_receivable ? body?.branch_interim_cgst_receivable.trim().toLowerCase() : 'receivable';
        const branch_interim_igst_receivable = body?.branch_interim_igst_receivable ? body?.branch_interim_igst_receivable.trim().toLowerCase() : 'receivable';
        const branch_sale_return_sgst = body?.branch_sale_return_sgst ? body?.branch_sale_return_sgst.trim().toLowerCase() : 'payble';
        const branch_sale_return_cgst = body?.branch_sale_return_cgst ? body?.branch_sale_return_cgst.trim().toLowerCase() : 'payble';
        const branch_sale_return_igst = body?.branch_sale_return_igst ? body?.branch_sale_return_igst.trim().toLowerCase() : 'payble';
        const branch_purchase_return_sgst = body?.branch_purchase_return_sgst ? body?.branch_purchase_return_sgst.trim().toLowerCase() : 'receivable';
        const branch_purchase_return_cgst = body?.branch_purchase_return_cgst ? body?.branch_purchase_return_cgst.trim().toLowerCase() : 'receivable';
        const branch_purchase_return_igst = body?.branch_purchase_return_igst ? body?.branch_purchase_return_igst.trim().toLowerCase() : 'receivable';
        const branch_gst_tax_payble = body?.branch_gst_tax_payble ? body?.branch_gst_tax_payble.trim().toLowerCase() : 'payble';
        const branch_tcs_payble = body?.branch_tcs_payble ? body?.branch_tcs_payble.trim().toLowerCase() : 'payble';
        const branch_tcs_receivable = body?.branch_tcs_receivable ? body?.branch_tcs_receivable.trim().toLowerCase() : 'receivable';
        const branch_shipping_charge = body?.branch_shipping_charge ? body?.branch_shipping_charge.trim() : '';
        const branch_expenses = body?.branch_expenses ? body?.branch_expenses.trim() : '';
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (id > 0) 
        {
            const updatebranch = `CALL create_branch(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatebranch,[id,user_id,company_id,state_id,industries_id,branch_name,branch_address,branch_pincode,branch_gst_no,branch_code,branch_mobile_1,branch_mobile_2,branch_mobile_3,branch_bill_of_supply,branch_tax_invoice,branch_invoice,branch_sales_journal,branch_sales_return,branch_sgst_payble,branch_cgst_payble,branch_igst_payble,branch_sgst_receivable,branch_cgst_receivable,branch_igst_receivable,branch_interim_sgst_payble,branch_interim_cgst_payble,branch_interim_igst_payble,branch_interim_sgst_receivable,branch_interim_cgst_receivable,branch_interim_igst_receivable,branch_sale_return_sgst,branch_sale_return_cgst,branch_sale_return_igst,branch_purchase_return_sgst,branch_purchase_return_cgst,branch_purchase_return_igst,branch_gst_tax_payble,branch_tcs_payble,branch_tcs_receivable,branch_shipping_charge,branch_expenses,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'Branch Updated',Data:[] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `Branch Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Branch`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {   
            const createbranch = `CALL create_branch(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createbranch,[id,user_id,company_id,state_id,industries_id,branch_name,branch_address,branch_pincode,branch_gst_no,branch_code,branch_mobile_1,branch_mobile_2,branch_mobile_3,branch_bill_of_supply,branch_tax_invoice,branch_invoice,branch_sales_journal,branch_sales_return,branch_sgst_payble,branch_cgst_payble,branch_igst_payble,branch_sgst_receivable,branch_cgst_receivable,branch_igst_receivable,branch_interim_sgst_payble,branch_interim_cgst_payble,branch_interim_igst_payble,branch_interim_sgst_receivable,branch_interim_cgst_receivable,branch_interim_igst_receivable,branch_sale_return_sgst,branch_sale_return_cgst,branch_sale_return_igst,branch_purchase_return_sgst,branch_purchase_return_cgst,branch_purchase_return_igst,branch_gst_tax_payble,branch_tcs_payble,branch_tcs_receivable,branch_shipping_charge,branch_expenses,entry_date,update_date],(error,data) => {

                if (error || data[0]?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'Branch Inserted',Data:data[0][0] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `Branch Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Branch`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET BRANCH DATA LOGIN COMPANY WISE LISTING API //
    allbranchdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'branch.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * limit;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`branch.id as branch_id,`;

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

        const search_branch_name = search?.branch_name ? search?.branch_name.trim().toLowerCase() : '';
        const search_branch_code = search?.branch_code ? search?.branch_code.trim().toLowerCase() : '';
        const search_branch_gst_no = search?.branch_gst_no ? search?.branch_gst_no.trim().toLowerCase() : '';
        const search_branch_address = search?.branch_address ? search?.branch_address.trim().toLowerCase() : '';
        const search_state_name = search?.state_name ? search?.state_name.trim().toLowerCase() : '';
        const search_state_code = search?.state_code ? search?.state_code.trim().toLowerCase() : '';

        const ser_branch_name = search_branch_name != '' ? ` AND branch.branch_name LIKE '%${search_branch_name}%'` : '';
        const ser_branch_code = search_branch_code != '' ? ` AND branch.branch_code LIKE '%${search_branch_code}%'` : '';
        const ser_branch_gst_no = search_branch_gst_no != '' ? ` AND branch.branch_gst_no LIKE '%${search_branch_gst_no}%'` : '';
        const ser_branch_address = search_branch_address != '' ? ` AND branch.branch_address LIKE '%${search_branch_address}%'` : '';
        const ser_state_name = search_state_name != '' ? ` AND state.global_name LIKE '%${search_state_name}%'` : '';
        const ser_state_code = search_state_code != '' ? ` AND state.global_code LIKE '%${search_state_code}%'` : '';

        var allbranchdata = `SELECT ${All_ID_Query} branch.branch_name,branch.branch_code,branch.branch_gst_no,branch.branch_address,state.global_name as state_name,state.global_code as state_code FROM erp_branch as branch LEFT JOIN erp_global as state ON state.id=branch.state_id WHERE branch.user_id='${user_id}' AND branch.company_id<='${company_id}' AND branch.is_delete_status='0' ${ser_branch_name} ${ser_branch_code} ${ser_branch_gst_no} ${ser_branch_address} ${ser_state_name} ${ser_state_code} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(allbranchdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data.forEach(element => {
                    element.state_name = element.state_name + `-${element.state_code}`;
                    element.export = constant.DefaultExportopetions;
                });

                var allbranchcount = `SELECT COUNT(branch.id) as Count FROM erp_branch as branch LEFT JOIN erp_global as state ON state.id=branch.state_id WHERE branch.user_id='${user_id}' AND branch.company_id<='${company_id}' AND branch.is_delete_status='0' ${ser_branch_name} ${ser_branch_code} ${ser_branch_gst_no} ${ser_branch_address} ${ser_state_name} ${ser_state_code}`;

                conn.query(allbranchcount,(error,countdata) => {
                    
                    res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                    next();
                    return;
                });
            }
        });
    },

    // GET BRANCH DETAILS DATA API //
    getbranchdetails: (req,res,next) => {

        const branch_id = req.body?.branch_id ? req.body?.branch_id : 0;
        if (branch_id.length == 0 || branch_id == 0) 
        {
            res.send({ Status:400,Count:0,Message:'Enter Branch ID',Data:[] });
            next();
            return;
        }

        var getbranchdetails = `CALL get_branch_details(?)`;
        conn.query(getbranchdetails,[branch_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // DELETE BRANCH DATA API //
    deletebranchdata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Branch ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }
        var deletebranchdata = `CALL delete_branch(?,?)`;
        conn.query(deletebranchdata,[id,entry_date],(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {     
                if (data?.length > 0 || data[0][0]?.Quality_ID > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Branch In Use can not delete',Data:[] });
                    next();
                    return;
                }
                
                // INSERT USER ACTIVITY LOG IN TABLE //
                const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                const ip = `Branch Deleted With This Device ID ${HeaderData.device_id} `;
                const loginuserdetails = `CALL get_user_details(?)`;
                conn.query(loginuserdetails,[user_id],function(error,userdata){
                    if(userdata[0])
                    {   
                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Branch`,entry_date],function(error,data){
                
                        });
                    }
                });
                res?.send({ Status:200,Count:1,Message:'Branch Deleted Successfully',Data:[] });
                next();
                return;
            }
        });
    }
};


export default AllBranchApis;


         
		