import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllTdsRateApis = {

    // INSERT AND UPDATE tdsrate DATA API //
    createtdsrate: (req,res,next) => {

        let body = req?.body;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const godown_id = body?.godown_id ? body?.godown_id : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id : 0;
        const status_id = body?.status_id ? body?.status_id : 0;
        const tds_rate = body?.tds_rate ? body?.tds_rate : 0;
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

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
        if (nature_of_payment_id.length == 0 || nature_of_payment_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Nature ID',Data:[] });
            next();
            return;
        }
        if (status_id.length == 0 || status_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Status ID',Data:[] });
            next();
            return;
        } 

        if (id > 0) 
        {
            const updatetdsrate = `CALL create_default_tds_rate(?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatetdsrate,[id,user_id,company_id,branch_id,year_id,godown_id,nature_of_payment_id,status_id,tds_rate,entry_date,update_date],(error,data) => {

                if (error)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'tds rate Updated',Data:[] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `tdsrate Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`tdsrate`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createtdsrate = `CALL create_default_tds_rate(?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createtdsrate,[id,user_id,company_id,branch_id,year_id,godown_id,nature_of_payment_id,status_id,tds_rate,entry_date,update_date],(error,data) => {

                if (error)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not created!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'tds rate created',Data:[] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `tdsrate created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`tdsrate`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

};

export default AllTdsRateApis;
