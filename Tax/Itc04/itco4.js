import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllItc04Apis = {
    
    // GET Itc04 LISTING DATA API //
    getitc04listingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const type = body?.type ? body?.type : '';
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        
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
       
        var getitc04listingdata = `CALL get_itc04_report_data(?,?,?,?,?,?,?)`
        conn.query(getitc04listingdata,[user_id,company_id,branch_id,year_id,type,from_date,to_date],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data[0]?.forEach(itc04data => {
                itc04data.challan_date = constant.moment(itc04data.challan_date).format('YYYY-MM-DD');
                if (type && type == 'jw_to_mfg') 
                {
                    itc04data.issue_challan_date = constant.moment(itc04data.issue_challan_date).format('YYYY-MM-DD');
                }
                itc04data.igst = itc04data.gst_percentage;
                itc04data.sgst = (itc04data.gst_percentage/2);
                itc04data.cgst = (itc04data.gst_percentage/2);
                itc04data.export = constant.DefaultExportopetions;
            });
            
            res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0] });
            next();
            return;
        });
    },
};


export default AllItc04Apis;
    
