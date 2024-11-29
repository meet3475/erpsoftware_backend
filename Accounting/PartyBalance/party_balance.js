import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllPartyBalanceApis = {
    
    getpartybalancelistingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'voucher.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        
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
        
        var getpartybalancelistingdata = `CALL get_party_balance_data(?,?,?,?)`;
        conn.query(getpartybalancelistingdata,[user_id,company_id,branch_id,year_id],(error,partybalancedata) => {

            if (error || partybalancedata[0]?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'party balance Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            res?.send({ Status:200,Count:partybalancedata[0]?.length,Message:'Data found',Data:partybalancedata[0] });
            next();
            return;
        });
    },  
};


export default AllPartyBalanceApis;
    
