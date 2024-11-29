
import conn from "../../Config/connection.js";
import constant from "../../Config/constant.js";

const AllGstr3bApis = {

    // GET gstr3b DATA LISTING API //
    gstr3bdata: (req,res,next) => {
        
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;

        var gstr3bdata = `CALL get_gstr3b_data(?,?,?,?,?,?)`;
        conn.query(gstr3bdata,[user_id,company_id,branch_id,year_id,from_date,to_date],(error,gstr3bdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'gstr3b Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                const allgstr3bdata = [
                    { 
                        heading:'3.1 Details of Outward Supplies and inward supplies liable to reverse charge',
                        thead:['Nature of Supplies','Total Taxable value (₹)','Integrated Tax (₹)','Central Tax (₹)','State / UT Tax (₹)','Cess (₹)'],
                        data:[gstr3bdata[0][0],gstr3bdata[1][0],gstr3bdata[2][0],gstr3bdata[3][0],gstr3bdata[4][0]]
                    },
                    {
                        heading:'3.2 Of the supplies shown in 3.1 (a) above, details of inter-State supplies made to unregistered persons, composition taxable persons and UIN holders',
                        thead:['','Place of Supply (State/UT)','Total Taxable value (₹)','Amount of Integrated Tax (₹)'],
                        data:[gstr3bdata[5][0],gstr3bdata[6][0],gstr3bdata[7][0]]
                    },
                    {
                        heading:'4.Eligible ITC',heading_child:'(A) ITC Available (whether in full or part)',
                        thead:['Details','Integrated Tax (₹)','Central Tax (₹)','State / UT Tax (₹)','Cess (₹)'],
                        data:[gstr3bdata[8][0],gstr3bdata[9][0],gstr3bdata[10][0],gstr3bdata[11][0],gstr3bdata[12][0]]
                    },
                    {
                        heading_child:'(B) ITC Reversed',data:[gstr3bdata[13][0],gstr3bdata[14][0]]
                    },
                    {
                        heading_child:'(C) Net ITC Available (A) – (B)',data:[gstr3bdata[15][0]]
                    },
                    {
                        heading_child:'(D) Ineligible ITC',data:[gstr3bdata[16][0],gstr3bdata[17][0]]
                    },
                    { 
                        heading:'5.Values of exempt,nil-rated and non-GST inward supplies',
                        thead:['','Nature OF Supplies','Inter-State Supplies (₹)','Intra-State Supplies (₹)'],
                        data:[gstr3bdata[18][0],gstr3bdata[19][0]]
                    },
                ];
                
                res?.send({ Status:200,Count:0,Message:'Data found',Data:allgstr3bdata });
                next();
                return;
            }  
        });
    },
};

export default AllGstr3bApis;











