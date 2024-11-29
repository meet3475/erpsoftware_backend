import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllGodownApis = {

    // INSERT AND UPDATE GODOWN DATA API //
    creategodown: (req,res,next) => {

        let body = req?.body;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id  = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const godown_name = body?.godown_name ? body?.godown_name.trim().toLowerCase() : '';
        const godown_address = body?.godown_address ? body?.godown_address.trim().toLowerCase() : '';
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
    
        if (godown_name == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Godown Name',Data:[] });
            next();
            return; 
        }
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
        if (id > 0) 
        {
            const updategodown = `CALL create_godown(?,?,?,?,?,?,?,?,?)`;
            conn.query(updategodown,[id,user_id,company_id,year_id,branch_id,godown_name,godown_address,entry_date,update_date],(error,data) => {
                if (error)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'Godown Updated',Data:[] });
                    next();
    
                     // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `Godown Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Godown`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const creategodown = `CALL create_godown(?,?,?,?,?,?,?,?,?)`;
            conn.query(creategodown,[id,user_id,company_id,year_id,branch_id,godown_name,godown_address,entry_date,update_date],(error,data) => {
                if (error || data[0]?.length == 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'Godown Inserted',Data:data[0][0] });
                    next();
    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `Godown Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Godown`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET GODOWN DETAILS DATA API //
    getgodowndetails: (req,res,next) => {

        const godown_id = req.body?.godown_id ? req.body?.godown_id : 0;
        if (godown_id.length == 0 || godown_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter godown ID',Data:[] });
            next();
            return;
        }
    
        var getgodowndetails = `CALL get_godown_details(?)`;
        conn.query(getgodowndetails,[godown_id],(error,data) => {
            
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

    // GET GODOWN LISTING DATA API //
    getgodownlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'godown_id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`god.id,god.id as godown_id,god.branch_id,`;

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

        const search_godown_name = search?.godown_name ? search?.godown_name.trim().toLowerCase() : '';
        const search_godown_address = search?.godown_address ? search?.godown_address.trim().toLowerCase() : '';
        const search_branch_name = search?.branch_name ? search?.branch_name.trim().toLowerCase() : '';
            
        const sea_godown_name = search_godown_name != '' ? ` AND god.godown_name LIKE '%${search_godown_name}%'` : '';
        const sea_godown_address = search_godown_address != '' ? ` AND god.godown_address LIKE '%${search_godown_address}%'` : '';
        const sea_branch_name = search_branch_name != '' ? ` AND branch.branch_name LIKE '%${search_branch_name}%'` : '';
        
        var getgodownlistingdata = `SELECT ${All_ID_Query} god.godown_name,god.godown_address,branch.branch_name FROM erp_godown as god LEFT JOIN erp_branch as branch ON branch.id=god.branch_id WHERE god.is_delete_status='0' AND branch.is_delete_status='0' AND god.user_id='${user_id}' AND god.company_id<='${company_id}' AND god.year_id<='${year_id}' ${sea_godown_name} ${sea_godown_address} ${sea_branch_name} ORDER BY ${orderby} ${orderformat} ${limit_query}`;
    
        conn.query(getgodownlistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            data.forEach(element => {
                element.export = constant.DefaultExportopetions;
            });
    
            var totalgodowncount = `SELECT COUNT(god.id) as Count FROM erp_godown as god LEFT JOIN erp_branch as branch ON branch.id=god.branch_id WHERE god.is_delete_status='0' AND branch.is_delete_status='0' AND god.user_id='${user_id}' AND god.company_id<='${company_id}' AND god.year_id<='${year_id}' ${sea_godown_name} ${sea_godown_address} ${sea_branch_name}`;
        
            conn.query(totalgodowncount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // DELETE GODOWN DATA API //
    deletegodowndata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid Godown ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }
        
        var existgodowndata = `SELECT id as godown_id,(SELECT COUNT(id) FROM erp_opening_purchase WHERE godown_id='${id}') as opening_purchase_id,(SELECT COUNT(id) FROM erp_godown_level WHERE godown_id='${id}') as godown_level_id,(SELECT COUNT(id) FROM erp_purchase_tax_invoice WHERE godown_id='${id}') as purchase_tax_invoice_id,(SELECT COUNT(id)  FROM erp_purchase_return WHERE godown_id='${id}') as purchase_return_id FROM erp_godown WHERE id='${id}' `;

        conn.query(existgodowndata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.godown_level_id > 0 || data[0]?.opening_purchase_id > 0 || data[0]?.purchase_tax_invoice_id > 0 || data[0]?.purchase_return_id > 0) 
                {
                    res?.send({ Status:400,Count:0,Message:'Godown In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletegodowndata = `CALL delete_godown(?,?)`;
                    conn.query(deletegodowndata,[id,entry_date],(error,data) => {
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
                            const login_ip = `Godown Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Godown`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Godown Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    }
};

export default AllGodownApis;