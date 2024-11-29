import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllAccountHeadApis = {

    // INSERT AND UPDATE ACCOUNT HEAD DATA API //
    createaccounthead: (req,res,next) => {

        let body = req?.body;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const account_head_name = body?.account_head_name ? body?.account_head_name.trim().toLowerCase() : '';
        const account_head_short_name = body?.account_head_short_name ? body?.account_head_short_name.trim().toLowerCase() : '';
        const account_head_id = body?.account_head_id ? body?.account_head_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
    
        if (account_head_name == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Account Head Name',Data:[] });
            next();   
        }
        if (id > 0) 
        {
            const updateaccounthead = `CALL create_account_head(?,?,?,?,?,?,?)`;
            conn.query(updateaccounthead,[id,user_id,account_head_id,account_head_name,account_head_short_name,entry_date,update_date],(error,data) => {

                if (error)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'Account Head Updated',Data:[] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `Update Account Head With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Account Head`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createaccounthead = `CALL create_account_head(?,?,?,?,?,?,?)`;
            conn.query(createaccounthead,[id,user_id,account_head_id,account_head_name,account_head_short_name,entry_date,update_date],(error,data) => {

                if (error || data?.length == 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'Account Head Inserted',Data:data[0][0] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `Account Head Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Account Head`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET ALL ACCOUNT HEAD LISTING DATA API //
    allaccountheaddata: (req,res,next) => {
        
        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'erp_account_head.user_id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * limit;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`erp_account_head.user_id,erp_account_head.id as account_head_id,parent.id as parent_id,`;

        
        const search_account_head_name = search?.account_head_name ? search?.account_head_name.trim().toLowerCase() : '';
        const search_account_head_short_name = search?.account_head_short_name ? search?.account_head_short_name.trim().toLowerCase() : '';
        const search_parent_name = search?.parent_name ? search?.parent_name.trim().toLowerCase() : '';
    
        const ser_account_head_name = search_account_head_name != '' ? ` AND erp_account_head.account_head_name LIKE '%${search_account_head_name}%'` : '';
        const ser_account_head_short_name = search_account_head_short_name != '' ? ` AND erp_account_head.account_head_short_name LIKE '%${search_account_head_short_name}%'` : '';
        const ser_parent_name = search_parent_name != '' ? ` AND parent.account_head_name LIKE '%${search_parent_name}%'` : '';
    
        var allaccountheaddata = `SELECT ${All_ID_Query}erp_account_head.account_head_name,erp_account_head.account_head_short_name,parent.account_head_name as parent_name FROM erp_account_head LEFT JOIN erp_account_head as parent ON parent.id=erp_account_head.account_head_id WHERE erp_account_head.user_id IN ('0','${user_id}') AND erp_account_head.is_delete_status='0' AND erp_account_head.account_head_status='active' ${ser_account_head_name} ${ser_account_head_short_name} ${ser_parent_name} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(allaccountheaddata,(error,data) => {
            
            if (data?.length > 0) 
            {   
                data.forEach(element => {
                    if (element.parent_name == null) 
                    {
                        element.parent_name = `Primay Account`;
                        element.parent_id = 0;
                        element.export = constant.DefaultExportopetions;
                    }
                });
                    
                var totalaccountheadcount = `SELECT COUNT(erp_account_head.id) as Count FROM erp_account_head LEFT JOIN erp_account_head as parent ON parent.id=erp_account_head.account_head_id WHERE erp_account_head.user_id IN ('0','${user_id}') AND erp_account_head.is_delete_status='0' AND erp_account_head.account_head_status='active'${ser_account_head_name} ${ser_account_head_short_name} ${ser_parent_name}`;
        
                conn.query(totalaccountheadcount,(error,countdata) => {
                    res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0].Count,Message:'Data found',Data:data });
                    next();
                    return;
                });
            }
            else
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
            }
        });
    },

    // DELETE ACCOUNT HEAD DATA API //
    deleteaccountheaddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Accouhnt Head ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existaccountheaddata = `SELECT id as account_head_id,(SELECT COUNT(id) FROM erp_purchase_tax_invoice WHERE challan_type_id='${id}' AND is_delete_status='0') as purchase_tax_invoice_id,(SELECT COUNT(id) FROM erp_party WHERE account_head_id='${id}' AND is_delete_status='0') as party_id,(SELECT COUNT(id) FROM erp_purchase_return WHERE purchase_return_type_id='${id}' AND is_delete_status='0') as purchase_return_id FROM erp_account_head WHERE id='${id}'`;

        conn.query(existaccountheaddata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                if (data[0]?.party_id > 0 || data[0]?.purchase_tax_invoice_id > 0 || data[0]?.purchase_return_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Account Head In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deleteaccountheaddata = `CALL delete_account_head(?,?)`;
                    conn.query(deleteaccountheaddata,[id,entry_date],(error,data) => {
                        if (error) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {    
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `Account Head Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Account Head`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Account Head Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    }
};

export default AllAccountHeadApis;







       
         
		