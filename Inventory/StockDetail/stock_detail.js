import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllStockDetailApis = {
    
    // GET stockdetail LISTING DATA API //
    getstockdetaillistingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        
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
        if (quality_id.length == 0 || quality_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Quality ID',Data:[] });
            next();
            return;
        }
                       
        var getstockdetaillistingdata = `CALL get_stock_detail_report_data(?,?,?,?,?)`;
        conn.query(getstockdetaillistingdata,[user_id,company_id,branch_id,year_id,quality_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            const allgetstockdetaillistingdata = [
                {
                    heading:'Grey Purchase',
                    data:[
                        {
                            "particular":"opening",
                            "data":data[0][0]
                        },
                        {
                            "particular":"grey purchase",
                            "data":data[1][0]
                        },
                        {
                            "particular":"grey return",
                            "data":data[2][0]
                        },
                        {
                            "particular":"grey sent to mill",
                            "data":data[3][0]
                        },
                        {
                            "particular":"grey at shop",
                            "data":data[4][0]
                        },
                    ]
                },
                { 
                    heading:'Mill',
                    data:[
                        {
                            "particular":"opening",
                            "data":data[5][0]
                        },
                        {
                            "particular":"grey mill sent",
                            "data":data[6][0]
                        },
                        {
                            "particular":"grey return from mill",
                            "data":data[7][0]
                        },
                        {
                            "particular":"Finish Goods receive from mill",
                            "data":data[8][0]
                        },
                        {
                            "particular":"grey balance at mill",
                            "data":data[9][0]
                        },
                    ]
                },
                { 
                    heading:'Finish',
                    data:[
                        {
                            "particular":"opening",
                            "data":data[10][0]
                        },
                        {
                            "particular":"finish purchase",
                            "data":data[11][0]
                        },
                        {
                            "particular":"Finish Goods receive from mill",
                            "data":data[12][0]
                        },
                        {
                            "particular":"finish return",
                            "data":data[13][0]
                        },
                        {
                            "particular":"goods stock at shop",
                            "data":data[14][0]
                        },
                    ]
                }
            ];
            res?.send({ Status:200,Count:0,Message:'Data found',Data:allgetstockdetaillistingdata });
            next();
            return;
        });
    },
};


export default AllStockDetailApis;
    
