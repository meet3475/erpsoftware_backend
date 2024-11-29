import conn from "./connection.js";

const AlterQueryApis = {
    
    // Send Alter Query Dynamic //
    sqlquery: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const query = body?.query ? body?.query : '';
       
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
        if (query.length == 0 || query == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Alter Query ',Data:[] });
            next();
            return;
        }
    
        conn.query(query,(error,data) => {
            
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            res?.send({ Status:200,Count:1,Message:'Data found',Data:[] });
            next();
            return;
        });
    },
};


export default AlterQueryApis;
    
