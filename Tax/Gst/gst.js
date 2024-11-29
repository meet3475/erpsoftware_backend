
import conn from "../../Config/connection.js";
import constant from "../../Config/constant.js";

const AllGstApis = {

    // GET GST DATA LISTING API //
    gstdata: (req,res,next) => {
        
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;

        var gstdata = `CALL get_gst_data(?,?,?,?,?,?)`;
        conn.query(gstdata,[user_id,company_id,branch_id,year_id,from_date,to_date],(error,gstdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Gst Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                gstdata[0][0].party_data = gstdata[1];
                gstdata[2][0].party_data = gstdata[3];
                gstdata[4][0].party_data = gstdata[5];
                gstdata[6][0].party_data = gstdata[7];
                gstdata[8][0].party_data = gstdata[9];
                gstdata[10][0].party_data = gstdata[11];
                gstdata[12][0].party_data = gstdata[13];
                gstdata[14][0].party_data = gstdata[15];
                gstdata[16][0].party_data = gstdata[17];

                const allgstdata = [
                    { 
                        heading:'sale',data:[gstdata[0][0],gstdata[2][0],gstdata[4][0]]
                    },
                    {
                        heading:'sales return',heading_child:'CDNR',data:[gstdata[6][0],gstdata[8][0],gstdata[10][0]]
                    },
                    {
                        heading:'sales return',heading_child:'CDNUR',data:[gstdata[12][0],gstdata[14][0],gstdata[16][0]]
                    },
                ];
                
                res?.send({ Status:200,Count:0,Message:'Data found',Data:allgstdata });
                next();
                return;
            }  
        });
    },

    // GET gstphase2 DATA LISTING API //
    gstphase2data: (req,res,next) => {
            
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;

        var gstphase2data = `CALL get_gstphase2_data(?,?,?,?,?,?)`;
        conn.query(gstphase2data,[user_id,company_id,branch_id,year_id,from_date,to_date],(error,gstphase2data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'gstphase2 Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                gstphase2data[0][0].party_data = gstphase2data[1];
                gstphase2data[2][0].party_data = gstphase2data[3];
                gstphase2data[4][0].party_data = gstphase2data[5];
                gstphase2data[6][0].party_data = gstphase2data[7];
                gstphase2data[8][0].party_data = gstphase2data[9];
                gstphase2data[10][0].party_data = gstphase2data[11];
                gstphase2data[12][0].party_data = gstphase2data[13];
                gstphase2data[14][0].party_data = gstphase2data[15];
                gstphase2data[16][0].party_data = [];
                gstphase2data[17][0].party_data = [];
                gstphase2data[18][0].party_data = [];

                const allgstphase2data = [
                    {
                        heading:'purchase return',heading_child:'CDNR',data:[gstphase2data[0][0],gstphase2data[2][0],gstphase2data[4][0]]
                    },
                    {
                        heading:'purchase return',heading_child:'CDNUR',data:[gstphase2data[6][0],gstphase2data[8][0],gstphase2data[10][0]]
                    },
                    { 
                        heading:'purchase',data:[gstphase2data[12][0],gstphase2data[14][0],gstphase2data[16][0],gstphase2data[17][0],gstphase2data[18][0]]
                    },
                ];
                
                res?.send({ Status:200,Count:0,Message:'Data found',Data:allgstphase2data });
                next();
                return;
            }  
        });
    },
};

export default AllGstApis;





