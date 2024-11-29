import constant from '../Config/constant.js';
import conn from '../Config/connection.js';

const DashboardApi = {

    // GET COUNTING OF DAILY DAIRY DATA API //
    getdashboardcountingdata: (req,res,next) => {
            
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        

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
        
        var getdashboardcountingdata = `CALL get_dashboard_data(?,?,?,?)`;
        conn.query(getdashboardcountingdata,[user_id,company_id,year_id,branch_id],(error,data) => {
            
            if (data?.length > 0) 
            {   
                res?.send({ Status:200,Count:data?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            }
            else
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
            }
        });
    },

    // GET DASHBOARD CHART DATA DATA API //
    getdashboardchartdata: (req,res,next) => {
            
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const filterData = body?.filter_data ? body?.filter_data : []

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
        if (filterData.length == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Date Range Must Be Required',Data:[] });
            next();
            return;
        }

        const label = [];
        const chartData = [
            {
                name:'sale',
                data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name:'purchase',
                data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ]

        for (let index = 0; index < filterData.length; index++)
        {
            label?.push(constant.moment(`${filterData[index]}01`).format('MMM'))

            var fetchData = `SELECT (SELECT COALESCE(SUM(sale_tax_invoice_total_net_amount),0) FROM erp_sale_tax_invoice WHERE 1=1 AND user_id='${user_id}' AND year_id='${year_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND is_delete_status='0' AND sale_tax_invoice_date LIKE '${filterData[index]}%') as sale,(SELECT COALESCE(SUM(purchase_tax_invoice_net_amount),0) FROM erp_purchase_tax_invoice WHERE 1=1 AND user_id='${user_id}' AND year_id='${year_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND is_delete_status='0' AND purchase_tax_invoice_date LIKE '${filterData[index]}%') as purchase`;

            conn.query(fetchData,(error,data) => {
                if (data?.length > 0) 
                {
                    chartData[0].data[index] = data[0]?.sale
                    chartData[1].data[index] = data[0]?.purchase
                }
            });
        }
        setTimeout(() => {
            res?.send({ Status:200,Count:1,Message:'Data found',Data:{
                label:label,
                data:chartData
            } });
            return;
        }, 75);
    }
};

export default DashboardApi;







       
         
		