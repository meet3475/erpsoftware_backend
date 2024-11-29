import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllGstr2Apis = {
    
    // GET gstr2 LISTING DATA API //
    getgstr2listingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const gst_type = body?.gst_type ? body?.gst_type : '';
        const total_limit = body?.limit ? body?.limit : 10;
        // const sortby = body?.sortby ? body?.sortby : 'sale.id-ASC';
        // const exploadsorting = sortby.split("-");
        // const orderby = exploadsorting[0];
        // const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;

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
        if (gst_type.length == 0 || gst_type == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Gst Type',Data:[] });
            next();
            return;
        }
       
        var getgstr2listingdata = `CALL get_gstr2_report_data(?,?,?,?,?,?,?)`
        conn.query(getgstr2listingdata,[user_id,company_id,branch_id,year_id,gst_type,from_date,to_date],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data[0]?.forEach(element => {
                element.purchase_tax_invoice_date = constant.moment(element.purchase_tax_invoice_date).format('YYYY-MM-DD');
            });
            
            if (gst_type == 'hsn') 
            {
                data[0]?.forEach(element => {
                    element.sgst = (element.gst_percentage/2);
                    element.cgst = (element.gst_percentage/2);
                    element.igst = element.gst_percentage;
                    element.export = constant.DefaultExportopetions;

                    if (Number(element.purchase_return_type_id) == 96) 
                    {
                        element.type = 'purchase debit note';
                    }
                    else if(Number(element.purchase_return_type_id) == 39)
                    {
                        element.type = 'purchase return';
                    }
                    else if (Number(element.purchase_return_type_id) == 95)
                    {
                        element.type = 'purchase credit note';
                    }
                });
            }
                            
            res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0] });
            next();
            return;
        });
    },
};


export default AllGstr2Apis;
    
