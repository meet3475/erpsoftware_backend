import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllDepreciationRateApis = {
    
    // GET depreciation rate LISTING DATA API //
    getdepreciationratelistingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        
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
               
        var getdepreciationratelistingdata = `CALL get_depreciation_rate_report_data(?,?)`
        conn.query(getdepreciationratelistingdata,[user_id,company_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
                        
            res?.send({ Status:200,Count:data[0].length,Message:'Data found',Data:data[0] });
            next();
            return;
        });
    },

    // INSERT AND UPDATE depreciation rate DATA API //
    createdepreciationrate: (req,res,next) => {

        let body  = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const depreciation_rate_amount = body?.depreciation_rate_amount ? body?.depreciation_rate_amount  : 0;
        const depreciation_rate_rate = body?.depreciation_rate_rate ? body?.depreciation_rate_rate  : 0;
        const depreciation_rate_depreciation = body?.depreciation_rate_depreciation ? body?.depreciation_rate_depreciation : 0;
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter ID',Data:[] });
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
            const updatedepreciationrate = `CALL create_default_depreciation_rate(?,?,?,?,?,?,?,?,?);`
            conn.query(updatedepreciationrate,[id,user_id,company_id,party_id,depreciation_rate_amount,depreciation_rate_rate,depreciation_rate_depreciation,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'depreciation rate Updated',Data:[] });
                    next();
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `depreciation rate Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`depreciation rate`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid ID',Data:error });
            next();
        }
    },
};


export default AllDepreciationRateApis;
    
