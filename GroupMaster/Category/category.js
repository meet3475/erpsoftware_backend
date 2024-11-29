import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllCategoryApis = {

    // INSERT AND UPDATE CATEGORY DATA API //
    createcategory: (req,res,next) => {

        let body = req?.body;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const category_name = body?.category_name ? body?.category_name.trim().toLowerCase() : '';
        const category_type = body?.category_type ? body?.category_type.trim().toLowerCase() : '';
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (category_name == '') 
        {
            res.send({ Status:400,Count:0,Message:'Enter Category Name',Data:[] });
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
        if (id > 0) 
        {
            const updatecategory = `CALL update_category(?,?,?,?,?,?,?)`;
            conn.query(updatecategory,[id,user_id,company_id,category_name,category_type,entry_date,update_date],(error,data) => {

                if (error)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'Category Updated',Data:[] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `Category Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Category`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createcategory = `CALL create_category(?,?,?,?,?,?,?)`;
            conn.query(createcategory,[id,user_id,company_id,category_name,category_type,entry_date,update_date],(error,data) => {

                if (error || data[0]?.length == 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'Category Inserted',Data:data[0][0] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `Category Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Category`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // DELETE CATEGORY DATA API //
    deletecategorydata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid category ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }
        
        var existcategorydata = `SELECT id as category_id,(SELECT COUNT(id) FROM erp_party WHERE category_id='${id}') as party_id FROM erp_category WHERE id='${id}'`;
        conn.query(existcategorydata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.party_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Category In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletecategorydata = `CALL delete_category(?,?)`;
                    conn.query(deletecategorydata,[id,entry_date],(error,data) => {
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
                            const login_ip = `Category Updated With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Category`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Category Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });        
    },
};

export default AllCategoryApis;



