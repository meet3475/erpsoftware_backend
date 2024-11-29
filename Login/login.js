import constant from '../Config/constant.js';
import conn from "../Config/connection.js";
import { v4 as uuidv4 } from 'uuid';

const AllloginApis = {

    login: (req,res,next) => {

        var is_mobile = req?.body?.is_mobile ? req?.body?.is_mobile : 0;
        var user_email = req?.body?.user_email ? req?.body?.user_email.toLowerCase().trim() : '';
        var user_password = req?.body?.user_password ? req?.body?.user_password.trim() : '';
        let year_data = req?.body?.year_data ? req?.body?.year_data : '';
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (is_mobile.length == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Type ID',Data:[] });
            next();
            return;
        }
        if (user_email.length == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Email!!',Data:[] });
            next();
            return;
        }
        if (user_password.length == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Password!!',Data:[] });
            next();
            return;
        }
        
        if (Number(is_mobile) == 1) 
        {
            if (user_email && user_password) 
            {   
                // CALL STORE PROCUDURE FUNCTION //
                var login = `CALL get_login_data(?)`;
                conn.query(login,[user_email],(error,data) => {
                
                    if (data?.length > 0 && data[0][0]?.user_email == user_email) 
                    {   
                        if (data[0][0]?.user_password == user_password) 
                        {   
                            const rootdata = data[0][0];
                          
                            if (rootdata.user_position == 'staff') 
                            {   
                                var login_user_year = `CALL login_year_data(?)`;
                                conn.query(login_user_year,[rootdata.id],(error,data) => {
                                    
                                    rootdata.year_data=data[1];
                                    rootdata.year_data = [constant.DefaultSelect,...rootdata.year_data];
                                    res?.send({ Status:200,Count:data[1]?.length,Message:'Data found',Data:rootdata });
                                    next();

                                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    const login_ip = `Login With This Device ID ${HeaderData.device_id} `;
                                    const entery_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
                                    conn.query(loginactivitylog,[rootdata.id,0,rootdata.user_position,login_ip,`login`,entery_date],(error,data) => {
                                    
                                    });
                                }); 
                            }
                            else
                            {
                                res.send({ Status:400,Count:0,Message:'User Not Found',Data:[] });
                                next();
                                return;
                            }
                        }
                        else
                        {
                            res.send({ Status:400,Count:0,Message:'Invalid Password!!',Data:[] });
                            next();
                            return;
                        }                  
                    }
                    else
                    {   
                        res.send({Status:400,Count:0,Message:'Invalid Email Address',Data:[] });
                        next();
                        return;
                    }
                });
            }
            else
            {   
                res.send({ Status:400,Count:0,Message:'Please Enter Valid Email!!',Data:[] });
                next();
            }
        }
        else
        {
            if (user_email && user_password) 
            {   
                // CALL STORE PROCUDURE FUNCTION //
                var login = `CALL get_login_data(?)`;
                conn.query(login,[user_email],(error,data) => {
                
                    if (data?.length > 0 && data[0][0]?.user_email == user_email) 
                    {   
                        if (data[0][0]?.user_password == user_password) 
                        {   
                            const rootdata = data[0][0];
                            if (rootdata) 
                            {   
                                var login_user_year = `CALL login_year_data(?)`;
                                conn.query(login_user_year,[rootdata.id],(error,data) => {
                                    
                                    rootdata.year_data=data[0];
                                    rootdata.year_data = [constant.DefaultSelect,...rootdata.year_data];
                                    rootdata.user_token = uuidv4();
                                    res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:rootdata });
                                    next();

                                    conn.query(`UPDATE erp_user SET user_token='${rootdata?.user_token}', user_update_date='${constant?.moment()?.format('YYYY-MM-DD h:mm:ss')}' WHERE id='${rootdata?.id}'`,[], (error, data) => {});

                                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    const login_ip = `Login With This Device ID ${HeaderData.device_id} `;
                                    const entery_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
                                    conn.query(loginactivitylog,[rootdata.id,0,rootdata.user_position,login_ip,`login`,entery_date],(error,data) => {});
                                }); 
                            }
                        }
                        else
                        {
                            res.send({ Status:400,Count:0,Message:'Invalid Password!!',Data:[] });
                            next();
                        }                  
                    }
                    else
                    {   
                        res.send({Status:400,Count:0,Message:'Invalid Email Address',Data:[] });
                        next();
                    }
                });
            }
            else
            {   
                res.send({ Status:400,Count:0,Message:'Please Enter Valid Email!!',Data:[] });
                next();
            }
        }

        
        if (year_data != '') 
        {
            year_data.forEach(yearvalue => {
                
                var yeardata = `SELECT COUNT(id) as count FROM erp_year WHERE year_name='${yearvalue}'`;
                conn.query(yeardata,(error,yeardata) => {
                    
                    if (yeardata[0].count <=0) 
                    {   
                        var saveyeardata = `CALL create_year(?,?,?)`;
                        conn.query(saveyeardata,[yearvalue,entry_date,update_date],(error,saveyeardata) => {

                        });
                    }
                });
            });
        }
    },

    // UPDATE Profile DATA API //
    updateprofile: (req,res,next) => {

        let body  = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_name = body?.user_name ? body?.user_name : '';
        const user_mobile = body?.user_mobile ? body?.user_mobile : 0;
        const user_whatsapp_number = body?.user_whatsapp_number ? body?.user_whatsapp_number : 0;
        const user_profile = body?.user_profile ? body?.user_profile : '';
        const user_address = body?.user_address ? body?.user_address : '';
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        
        if (id > 0) 
        {   
            const updateprofile = `CALL update_profile(?,?,?,?,?,?,?)`;
            conn.query(updateprofile,[id,user_name,user_mobile,user_whatsapp_number,user_profile,user_address,update_date],(error,data) => {
                
                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                   
                    res?.send({ Status:200,Count:0,Message:'User Updated',Data:data[0][0] });
                    next();
                                        
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `User Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[id,0,userdata[0][0]?.user_position,ip,`User`,update_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },
    
    // CHANGE PASSWORD DATA API //
    changepassword: (req,res,next) => {

        let body  = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const old_password = body?.old_password ? body?.old_password : '';
        const confirm_password = body?.new_password ? body?.new_password : 0;
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        if (old_password.length == 0 || old_password == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Old Password ',Data:[] });
            next();
            return;
        }
        
        if (id > 0) 
        {   
            const existpassword = `SELECT COUNT(id) as ids FROM erp_user WHERE id=${id} AND user_password=${old_password}`;
          
            conn.query(existpassword,(error,existpassworddata) => {
                
                if (error || existpassworddata[0].ids == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Entered Old Password Wrong!!!!',Data:error });
                    next();
                }
                else
                {   
                    const changepassword = `CALL change_password(?,?,?)`;
                    conn.query(changepassword,[id,confirm_password,update_date],(error,data) => {
                        
                        if (error)
                        {   
                            res?.send({ Status:400,Count:0,Message:'Data Not Changed!!!!',Data:error });
                            next();
                        }
                        else
                        {   
                            res?.send({ Status:200,Count:0,Message:'User Password Changed',Data:[] });
                            next();
                                                
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `User password Changed With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[id],(error,userdata) => {
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[id,0,userdata[0][0]?.user_position,ip,`User`,update_date],function(error,data){
                            
                                    });
                                }
                            });
                        }  
                    });
                }  
            });
        }
    },

    // CHECK LOGIN STATUS API //
    loginstatus: (req,res,next) => {
        let body  = req?.body;
        const id = body?.id ? Number(body?.id) : (body?.user_id ? body.user_id : 0);
        const user_token = body?.user_token ? body?.user_token : "";

        if (id.length == 0 || id == 0)
            return res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });

        if (user_token.length == 0 || user_token == 0)
            return res?.send({ Status:400,Count:0,Message:'User token required',Data:[] });
        
        if (id > 0) 
        {   
            const userData = `SELECT id, user_token, user_status FROM erp_user WHERE id='${id}'`;
            conn.query(userData,(error,data) => {
                if (error || data?.length == 0) {
                    res?.send({ Status:400,Count:0,Message:'user not found',Data:error });
                    next();
                }
                else
                {
                    if (data[0]?.user_status == 'deactive')
                    {
                        res?.send({ Status:401,Count:0,Message:'account block by admin',Data:{} });
                        next();
                    }
                    else if(data[0]?.user_token != user_token)
                    {
                        res?.send({ Status:402,Count:0,Message:'token expired',Data:{} });
                        next();
                    }
                    else
                    {
                        res?.send({ Status:200,Count:0,Message:'token valid',Data:[] });
                        next();
                    }
                }                
            });
        }
    },
};

export default AllloginApis;

