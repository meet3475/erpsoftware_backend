import constant from'../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllGodownLevelApis = {

    // INSERT AND UPDATE GODOWN LEVEL DATA API //
    creategodownlevel: (req,res,next) => {

        let body = req?.body;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const godown_id = body?.godown_id ? body?.godown_id : 0;
        const godown_level_name = body?.godown_level_name ? body?.godown_level_name.trim().toLowerCase() :'';
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (godown_level_name == '') 
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
              
        if (id > 0) 
        {   
            const updategodownlevel = `CALL create_godown_level(?,?,?,?,?,?)`;
            conn.query(updategodownlevel,[id,user_id,godown_id,godown_level_name,entry_date,update_date],(error,data) => {
    
                if (error)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'Godown Level Updated',Data:[] });
                    next();
    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `Godown Level Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Godown Level`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const creategodownlevel = `CALL create_godown_level(?,?,?,?,?,?)`;
            conn.query(creategodownlevel,[id,user_id,godown_id,godown_level_name,entry_date,update_date],(error,data) => {
    
                if (error || data[0]?.length == 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'Godown Level Inserted',Data:data[0][0] });
                    next();
    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `Godown Level Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Godown Level`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET GODOWN LEVEL DETAILS DATA API //
    getgodownleveldetails: (req,res,next) => {

        const godown_level_id = req.body?.godown_level_id ? req.body?.godown_level_id : 0;
        if (godown_level_id.length == 0 || godown_level_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Godown Level ID',Data:[] });
            next();
            return;
        }
    
        var getgodownleveldetails = `CALL get_godown_level_details(?)`;
        conn.query(getgodownleveldetails,[godown_level_id],(error,data) => {
            
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

    // GET GODOWN LEVEL LISTING DATA API //
    getgodownlevellistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby :'godown_level_id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`level.id as godown_level_id,level.id,level.godown_id,`;

        
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        
        const search_godown_name = search?.godown_name ? search?.godown_name.trim().toLowerCase() :'';
        const search_godown_level_name = search?.godown_level_name ? search?.godown_level_name.trim().toLowerCase() :'';
         
        const sea_godown_name =  search_godown_name !='' ? ` AND god.godown_name LIKE'%${search_godown_name}%'` :'';
        const sea_godown_level_name =  search_godown_level_name !='' ? ` AND level.godown_level_name LIKE'%${search_godown_level_name}%'` :'';
       
        var getgodownlevellistingdata = `SELECT ${All_ID_Query} level.godown_level_name,god.godown_name FROM erp_godown_level as level LEFT JOIN erp_godown as god ON god.id=level.godown_id WHERE level.user_id='${user_id}' AND level.is_delete_status='0' AND god.is_delete_status='0' ${sea_godown_name} ${sea_godown_level_name} ORDER BY ${orderby} ${orderformat} ${limit_query}`;
        conn.query(getgodownlevellistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            data.forEach(element => {
                element.export = constant.DefaultExportopetions;
            });
    
            var totalgodowncount = `SELECT COUNT(level.id) as Count FROM erp_godown_level as level LEFT JOIN erp_godown as god ON god.id=level.godown_id WHERE level.user_id='${user_id}' AND level.is_delete_status='0' AND god.is_delete_status='0' ${sea_godown_name} ${sea_godown_level_name} `;
        
            conn.query(totalgodowncount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // DELETE GODOWN LEVEL DATA API //
    deletegodownleveldata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid godow nlevel ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existgodownleveldata = `SELECT id as godownlevel_id,(SELECT COUNT(id) FROM erp_opening_purchase_child WHERE godownlevel_id='${id}') as opening_purchase_child_id,(SELECT COUNT(id) FROM erp_purchase_tax_invoice_child WHERE godownlevel_id='${id}') as purchase_tax_invoice_child_id,(SELECT COUNT(id) FROM erp_purchase_return_child WHERE godownlevel_id='${id}') as purchase_return_child_id FROM erp_godownlevel WHERE id='${id}'`;

        conn.query(existgodownleveldata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.opening_purchase_child_id > 0 || data[0]?.purchase_tax_invoice_child_id > 0 || data[0]?.purchase_return_child_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'godownlevel In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletegodownleveldata = `CALL delete_godownlevel(?,?)`;
                    conn.query(deletegodownleveldata,[id,entry_date],(error,data) => {
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
                            const login_ip = `godownlevel Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`godownlevel`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'godownlevel Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    }
};

export default AllGodownLevelApis;