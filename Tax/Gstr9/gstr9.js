import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllGstr9Apis = {
    
    // GET gstr9 LISTING DATA API //
    getgstr9listingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const type = body?.type ? body?.type : '';
        
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
        if (branch_id.length == 0 || branch_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Branch ID',Data:[] });
            next();
            return;
        }
        if (year_id.length == 0 || year_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Year ID',Data:[] });
            next();
            return;
        }
        if (type.length == 0 || type == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Type',Data:[] });
            next();
            return;
        }
        if (from_date.length == 0 || from_date == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter From Date',Data:[] });
            next();
            return;
        }
       
        var getgstr9listingdata = `CALL get_gstr9_report_data(?,?,?,?,?,?,?)`
        conn.query(getgstr9listingdata,[user_id,company_id,branch_id,year_id,type,from_date,to_date],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data[0]?.forEach(gstr9data => {
                gstr9data.invoice_date = constant.moment(gstr9data.invoice_date).format('YYYY-MM-DD');
                gstr9data.export = constant.DefaultExportopetions;
            });
            
            res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0] });
            next();
            return;
        });
    },
};


export default AllGstr9Apis;
    
