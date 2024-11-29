import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllSaleJoberReceiveApis = {
    
    // INSERT & UPDATE sale jober receive DATA API //
    createsalejoberreceive: (req,res,next) => {
        
        let body  = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const year_id = body?.year_id ? body?.year_id  : 0;
        const godown_id = body?.godown_id ? body?.godown_id  : 0;
        const sale_jober_issue_id = body?.sale_jober_issue_id ? body?.sale_jober_issue_id  : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const jober_id = body?.jober_id ? body?.jober_id : 0;
        const gst_id = body?.gst_id ? body?.gst_id : 0;
        const sale_jober_receive_remark = body?.sale_jober_receive_remark ? body?.sale_jober_receive_remark : '';
        const sale_jober_receive_invoice_no = body?.sale_jober_receive_invoice_no ? body?.sale_jober_receive_invoice_no : 0;
        const sale_jober_receive_date = body?.sale_jober_receive_date ? body?.sale_jober_receive_date : constant.moment().format('YYYY-MM-DD');
        const sale_jober_receive_lf_no = body?.sale_jober_receive_lf_no ? body?.sale_jober_receive_lf_no : 0;
        const sale_jober_receive_taka = body?.sale_jober_receive_taka ? body?.sale_jober_receive_taka : 0;
        const sale_jober_receive_meter = body?.sale_jober_receive_meter ? body?.sale_jober_receive_meter : 0;
        const meter_data = body?.sale_jober_receive_meter_data ? body?.sale_jober_receive_meter_data : [];
        const sale_jober_receive_meter_data = body?.sale_jober_receive_meter_data ? JSON.stringify(body?.sale_jober_receive_meter_data) : '';
        const sale_jober_receive_weight = body?.sale_jober_receive_weight ? body?.sale_jober_receive_weight : 0;
        const sale_jober_receive_fold = body?.sale_jober_receive_fold ? body?.sale_jober_receive_fold : 0;       
        const sale_jober_receive_count_meter = body?.sale_jober_receive_count_meter ? body?.sale_jober_receive_count_meter : 0;       
        const sale_jober_receive_rate = body?.sale_jober_receive_rate ? body?.sale_jober_receive_rate : 0;
        const sale_jober_receive_shortage = body?.sale_jober_receive_shortage ? body?.sale_jober_receive_shortage : 0;
        const sale_jober_receive_total = body?.sale_jober_receive_total ? body?.sale_jober_receive_total : 0;
        const is_work_completed = body?.is_work_completed ? body?.is_work_completed : 0;
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

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
        if (jober_id.length == 0 || jober_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Jober ID',Data:[] });
            next();
            return;
        }
        if (sale_jober_issue_id.length == 0 || sale_jober_issue_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Sale Issue ID',Data:[] });
            next();
            return;
        }
        if (sale_jober_receive_invoice_no.length == 0 || sale_jober_receive_invoice_no == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid Sale Receive Invoice No',Data:[] });
            next();
            return;
        }       

        if (id > 0) 
        {   
            const updatesalejoberreceive = `CALL create_sale_jober_receive(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatesalejoberreceive,[id,user_id,company_id,year_id,branch_id,godown_id,sale_jober_issue_id,quality_id,jober_id,gst_id,sale_jober_receive_remark,sale_jober_receive_invoice_no,sale_jober_receive_date,sale_jober_receive_lf_no,sale_jober_receive_taka,sale_jober_receive_meter,sale_jober_receive_meter_data,sale_jober_receive_weight,sale_jober_receive_fold,sale_jober_receive_count_meter,sale_jober_receive_rate,sale_jober_receive_shortage,sale_jober_receive_total,is_work_completed,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'sale jober receive Updated',Data:[] });
                    next();
                    console.log('meter_data?.length :: ', meter_data?.length)
                    if (meter_data?.length > 0) {
                        const jobeIssueQuery = `UPDATE erp_sale_jober_issue SET sale_jober_issue_meter_updated_data='${sale_jober_receive_meter_data}' WHERE id='${sale_jober_issue_id}'`;
                        conn.query(jobeIssueQuery,(error,jobeIssueData) =>{})
                    }

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `sale jober receive Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`sale jober receive`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {   
            const createsalejoberreceive = `CALL create_sale_jober_receive(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createsalejoberreceive,[id,user_id,company_id,year_id,branch_id,godown_id,sale_jober_issue_id,quality_id,jober_id,gst_id,sale_jober_receive_remark,sale_jober_receive_invoice_no,sale_jober_receive_date,sale_jober_receive_lf_no,sale_jober_receive_taka,sale_jober_receive_meter,sale_jober_receive_meter_data,sale_jober_receive_weight,sale_jober_receive_fold,sale_jober_receive_count_meter,sale_jober_receive_rate,sale_jober_receive_shortage,sale_jober_receive_total,is_work_completed,entry_date,update_date],(error,data) => {

                if (error || data[0]?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {    
                    res?.send({ Status:200,Count:0,Message:'sale jober receive Inserted',Data:data[0] });
                    next();

                    if (meter_data?.length > 0) {
                        const jobIssueQuery = `UPDATE erp_sale_jober_issue SET sale_jober_issue_meter_updated_data='${sale_jober_receive_meter_data}' WHERE id='${sale_jober_issue_id}'`;
                        conn.query(jobIssueQuery,(error,jobeIssueData) =>{})
                    }
            
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `sale jober receive Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`sale jober receive`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET sale jober receive AND CHILD DETAILS DATA API //
    getsalejoberreceivedetails: (req,res,next) => {

        const sale_jober_receive_id = req.body?.sale_jober_receive_id ? req.body?.sale_jober_receive_id : 0;
        if (sale_jober_receive_id.length == 0 || sale_jober_receive_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter sale jober receive ID',Data:[] });
            next();
            return;
        }

        var getsalejoberreceivedetails = `CALL get_sale_jober_receive_details(?)`;
        conn.query(getsalejoberreceivedetails,[sale_jober_receive_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].sale_jober_receive_date = constant.moment(data[0][0].sale_jober_receive_date).format('YYYY-MM-DD');
                data[0][0].sale_jober_receive_meter_data = (data[0][0]?.sale_jober_receive_meter_data != null && data[0][0]?.sale_jober_receive_meter_data?.length > 0) ? JSON?.parse(data[0][0]?.sale_jober_receive_meter_data) : [];
                
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET sale jober receive LISTING DATA API //
    getsalejoberreceivelistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const jober_id = body?.jober_id ? body?.jober_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'issue.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`issue.id as sale_jober_issue_id,issue.gst_id,issue.jober_id,`;

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

        const search_sale_jober_issue_invoice_no = search?.sale_jober_issue_invoice_no ? search?.sale_jober_issue_invoice_no : '';
        const search_sale_jober_issue_date = search?.sale_jober_issue_date ? search?.sale_jober_issue_date : '';
        const search_sale_jober_issue_meter = search?.sale_jober_issue_meter ? search?.sale_jober_issue_meter : '';
        const search_sale_jober_issue_weight = search?.sale_jober_issue_weight ? search?.sale_jober_issue_weight : '';
        const search_sale_jober_issue_fold = search?.sale_jober_issue_fold ? search?.sale_jober_issue_fold : '';
        const search_sale_jober_issue_rate = search?.sale_jober_issue_rate ? search?.sale_jober_issue_rate : '';
        const search_sale_jober_issue_total = search?.sale_jober_issue_total ? search?.sale_jober_issue_total : '';
        const search_quality_name = search?.quality_name ? search?.quality_name.trim().toLowerCase() : '';
        const search_jober_name = search?.jober_name ? search?.jober_name.trim().toLowerCase() : '';
        const search_buyer_name = search?.buyer_name ? search?.buyer_name.trim().toLowerCase() : '';
        const search_order_no = search?.order_no ? search?.order_no.trim().toLowerCase() : '';

        const sea_sale_jober_issue_invoice_no = search_sale_jober_issue_invoice_no != '' ? ` AND issue.sale_jober_issue_invoice_no LIKE '%${search_sale_jober_issue_invoice_no}%'` : '';
        const sea_sale_jober_issue_date = search_sale_jober_issue_date != '' ? ` AND issue.sale_jober_issue_date LIKE '%${search_sale_jober_issue_date}%'` : '';
        const sea_sale_jober_issue_meter = search_sale_jober_issue_meter != '' ? ` AND issue.sale_jober_issue_meter LIKE '%${search_sale_jober_issue_meter}%'` : '';
        const sea_sale_jober_issue_weight = search_sale_jober_issue_weight != '' ? ` AND tax_child.sale_jober_issue_weight LIKE '%${search_sale_jober_issue_weight}%'` : '';
        const sea_sale_jober_issue_fold = search_sale_jober_issue_fold != '' ? ` AND issue.sale_jober_issue_fold LIKE '%${search_sale_jober_issue_fold}%'` : '';
        const sea_sale_jober_issue_rate = search_sale_jober_issue_rate != '' ? ` AND issue.sale_jober_issue_rate LIKE '%${search_sale_jober_issue_rate}%'` : '';
        const sea_sale_jober_issue_total = search_sale_jober_issue_total != '' ? ` AND issue.sale_jober_issue_total LIKE '%${search_sale_jober_issue_total}%'` : '';
        const sea_quality_name = search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_jober_name = search_jober_name != '' ? ` AND jober.party_name LIKE '%${search_jober_name}%'` : '';
        const sea_quality_id = quality_id > 0 ? ` AND issue.quality_id= '${quality_id}'` : '';
        const sea_jober_id = jober_id > 0 ? ` AND issue.jober_id= '${jober_id}'` : '';
        const sea_buyer_name = search_buyer_name != '' ? ` AND buyer.party_name LIKE '%${search_buyer_name}%'` : '';
        const sea_order_no = search_order_no != '' ? ` AND sale.sale_order_no LIKE '%${search_order_no}%'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(issue.sale_jober_issue_date) >='${from_date}' AND DATE(issue.sale_jober_issue_date) <='${to_date}'` : '';

        var getsalejoberreceivelistingdata = `SELECT ${All_ID_Query} issue.quality_id,issue.sale_jober_issue_invoice_no,DATE_FORMAT(issue.sale_jober_issue_date,'%d-%m-%Y') as sale_jober_issue_date,issue.sale_jober_issue_meter,issue.sale_jober_issue_meter - (SELECT COALESCE(SUM(sale_jober_receive_meter),0) FROM erp_sale_jober_receive WHERE sale_jober_issue_id=issue.id AND is_delete_status='0') as sale_jober_issue_due_meter,issue.sale_jober_issue_taka,issue.sale_jober_issue_taka - (SELECT SUM(receive_taka.sale_jober_receive_taka) FROM erp_sale_jober_receive AS receive_taka WHERE receive_taka.sale_jober_issue_id=issue.id AND receive_taka.is_delete_status='0') as sale_jober_receive_due_taka,issue.sale_jober_issue_weight,issue.sale_jober_issue_fold,issue.sale_jober_issue_rate,issue.sale_jober_issue_total,quality.quality_name,jober.party_name as jober_name,gst.gst_percentage,state.global_code as state_code,buyer.party_name as buyer_name,sale.sale_order_no as order_no,issue.sale_jober_issue_remark,issue.sale_jober_issue_meter_data,issue.sale_jober_issue_meter_updated_data FROM erp_sale_jober_issue as issue LEFT JOIN erp_sale_child as child ON child.id=issue.sale_child_id LEFT JOIN erp_sale as sale ON sale.id=child.sale_id LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_party as jober ON jober.id=issue.jober_id LEFT JOIN erp_gst as gst ON gst.id=issue.gst_id LEFT JOIN erp_quality as quality ON quality.id=issue.quality_id LEFT JOIN erp_global as state ON state.id=jober.state_id WHERE issue.user_id='${user_id}' AND issue.company_id<='${company_id}' AND issue.year_id<='${year_id}' AND issue.branch_id<='${branch_id}' AND issue.is_delete_status='0' AND ((SELECT COUNT(id) as id FROM erp_sale_jober_receive WHERE sale_jober_issue_id=issue.id AND is_work_completed='1' AND is_delete_status='0') = 0 AND (SELECT COALESCE(SUM(sale_jober_receive_meter),0) as sale_jober_receive_meter FROM erp_sale_jober_receive WHERE sale_jober_issue_id=issue.id AND is_delete_status='0') < issue.sale_jober_issue_meter) ${sea_sale_jober_issue_invoice_no} ${sea_sale_jober_issue_date} ${sea_sale_jober_issue_meter} ${sea_sale_jober_issue_weight} ${sea_sale_jober_issue_fold} ${sea_sale_jober_issue_rate} ${sea_sale_jober_issue_total} ${sea_quality_name} ${sea_jober_name} ${sea_quality_id} ${sea_jober_id} ${sea_buyer_name} ${sea_order_no} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getsalejoberreceivelistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.export = constant.DefaultExportopetions;
                element.sale_jober_issue_meter_data = (element?.sale_jober_issue_meter_data != null && element?.sale_jober_issue_meter_data?.length > 0) ? JSON?.parse(element?.sale_jober_issue_meter_data) : [];
                element.sale_jober_issue_meter_updated_data = (element?.sale_jober_issue_meter_updated_data != null && element?.sale_jober_issue_meter_updated_data?.length > 0) ? JSON?.parse(element?.sale_jober_issue_meter_updated_data) : [];
            });
            
            var totalsalejoberreceivecount = `SELECT COUNT(issue.id) as Count FROM erp_sale_jober_issue as issue LEFT JOIN erp_party as jober ON jober.id=issue.jober_id LEFT JOIN erp_gst as gst ON gst.id=issue.gst_id LEFT JOIN erp_quality as quality ON quality.id=issue.quality_id LEFT JOIN erp_global as state ON state.id=jober.state_id WHERE issue.user_id='${user_id}' AND issue.company_id<='${company_id}' AND issue.year_id<='${year_id}' AND issue.branch_id<='${branch_id}' AND issue.is_delete_status='0' AND ((SELECT COUNT(id) as id FROM erp_sale_jober_receive WHERE sale_jober_issue_id=issue.id AND is_work_completed='1' AND is_delete_status='0') = 0 AND (SELECT COALESCE(SUM(sale_jober_receive_meter),0) as sale_jober_receive_meter FROM erp_sale_jober_receive WHERE sale_jober_issue_id=issue.id AND is_delete_status='0') < issue.sale_jober_issue_meter) ${sea_sale_jober_issue_invoice_no} ${sea_sale_jober_issue_date} ${sea_sale_jober_issue_meter} ${sea_sale_jober_issue_weight} ${sea_sale_jober_issue_fold} ${sea_sale_jober_issue_rate} ${sea_sale_jober_issue_total} ${sea_quality_name} ${sea_jober_name} ${sea_quality_id} ${sea_jober_id} ${date_range_query}`;
        
            conn.query(totalsalejoberreceivecount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },
    
    // GET sale jober receive report LISTING DATA API //
    getsalejoberreceivereportlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const jober_id = body?.jober_id ? body?.jober_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'receive.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`receive.id as sale_jober_receive_id,receive.sale_jober_issue_id,receive.quality_id,receive.jober_id,receive.gst_id,`;

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

        const search_sale_jober_receive_invoice_no = search?.sale_jober_receive_invoice_no ? search?.sale_jober_receive_invoice_no : '';
        const search_sale_jober_receive_date = search?.sale_jober_receive_date ? search?.sale_jober_receive_date : '';
        const search_sale_jober_receive_lf_no = search?.sale_jober_receive_lf_no ? search?.sale_jober_receive_lf_no : '';       
        const search_sale_jober_receive_meter = search?.sale_jober_receive_meter ? search?.sale_jober_receive_meter : '';
        const search_sale_jober_receive_weight = search?.sale_jober_receive_weight ? search?.sale_jober_receive_weight : '';
        const search_sale_jober_receive_fold = search?.sale_jober_receive_fold ? search?.sale_jober_receive_fold : '';
        const search_sale_jober_receive_rate = search?.sale_jober_receive_rate ? search?.sale_jober_receive_rate : '';
        const search_sale_jober_receive_total = search?.sale_jober_receive_total ? search?.sale_jober_receive_total : '';
        const search_quality_name = search?.quality_name ? search?.quality_name.trim().toLowerCase() : '';
        const search_jober_name = search?.jober_name ? search?.jober_name.trim().toLowerCase() : '';
        const search_buyer_name = search?.buyer_name ? search?.buyer_name.trim().toLowerCase() : '';
        const search_sale_order_no = search?.sale_order_no ? search?.sale_order_no : '';
        const search_sale_child_quality_colour = search?.sale_child_quality_colour ? search?.sale_child_quality_colour : '';
        const search_sale_child_work = search?.sale_child_work ? search?.sale_child_work : '';
        const search_sale_child_work_colour = search?.sale_child_work_colour ? search?.sale_child_work_colour : '';
       
        const sea_sale_jober_receive_invoice_no = search_sale_jober_receive_invoice_no != '' ? ` AND receive.sale_jober_receive_invoice_no LIKE '%${search_sale_jober_receive_invoice_no}%'` : '';
        const sea_sale_jober_receive_date = search_sale_jober_receive_date != '' ? ` AND receive.sale_jober_receive_date LIKE '%${search_sale_jober_receive_date}%'` : '';
        const sea_sale_jober_receive_lf_no = search_sale_jober_receive_lf_no != '' ? ` AND receive.sale_jober_receive_lf_no LIKE '%${search_sale_jober_receive_lf_no}%'` : '';
        const sea_sale_jober_receive_meter = search_sale_jober_receive_meter != '' ? ` AND receive.sale_jober_receive_meter LIKE '%${search_sale_jober_receive_meter}%'` : '';
        const sea_sale_jober_receive_weight = search_sale_jober_receive_weight != '' ? ` AND tax_child.sale_jober_receive_weight LIKE '%${search_sale_jober_receive_weight}%'` : '';
        const sea_sale_jober_receive_fold = search_sale_jober_receive_fold != '' ? ` AND receive.sale_jober_receive_fold LIKE '%${search_sale_jober_receive_fold}%'` : '';
        const sea_sale_jober_receive_rate = search_sale_jober_receive_rate != '' ? ` AND receive.sale_jober_receive_rate LIKE '%${search_sale_jober_receive_rate}%'` : '';
        const sea_sale_jober_receive_total = search_sale_jober_receive_total != '' ? ` AND receive.sale_jober_receive_total LIKE '%${search_sale_jober_receive_total}%'` : '';
        const sea_quality_name = search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_jober_name = search_jober_name != '' ? ` AND jober.party_name LIKE '%${search_jober_name}%'` : '';
        const sea_quality_id = quality_id > 0 ? ` AND receive.quality_id= '${quality_id}'` : '';
        const sea_jober_id = jober_id > 0 ? ` AND receive.jober_id= '${jober_id}'` : '';
        const sea_buyer_name = search_buyer_name != '' ? ` AND buyer.party_name LIKE '%${search_buyer_name}%'` : '';
        const sea_order_no = search_sale_order_no != '' ? ` AND sale.sale_order_no LIKE '%${search_sale_order_no}%'` : '';
        const sea_sale_child_quality_colour = search_sale_child_quality_colour != '' ? ` AND child.sale_child_quality_colour LIKE '%${search_sale_child_quality_colour}%'` : '';
        const sea_sale_child_work = search_sale_child_work != '' ? ` AND child.sale_child_work LIKE '%${search_sale_child_work}%'` : '';
        const sea_sale_child_work_colour = search_sale_child_work_colour != '' ? ` AND child.sale_child_work_colour LIKE '%${search_sale_child_work_colour}%'` : '';

        const date_range_query = from_date != '' ? ` AND DATE(receive.sale_jober_receive_date) >='${from_date}' AND DATE(receive.sale_jober_receive_date) <='${to_date}'` : '';

        var getsalejoberreceivelistingdata = `SELECT ${All_ID_Query} receive.sale_jober_receive_invoice_no,DATE_FORMAT(receive.sale_jober_receive_date,'%d-%m-%Y') as sale_jober_receive_date,DATE_FORMAT(receive.sale_jober_receive_date,'%Y-%m-%d') as sale_jober_receive_date_old,receive.sale_jober_receive_lf_no,receive.sale_jober_receive_meter,issue.sale_jober_issue_meter - (SELECT SUM(receive_meter.sale_jober_receive_meter) FROM erp_sale_jober_receive AS receive_meter WHERE receive_meter.sale_jober_issue_id=issue.id AND receive_meter.is_delete_status='0') as sale_jober_receive_due_meter,issue.sale_jober_issue_taka - (SELECT SUM(receive_taka.sale_jober_receive_taka) FROM erp_sale_jober_receive AS receive_taka WHERE receive_taka.sale_jober_issue_id=issue.id AND receive_taka.is_delete_status='0') as sale_jober_receive_due_taka,receive.sale_jober_receive_weight,receive.sale_jober_receive_fold,receive.sale_jober_receive_rate,receive.sale_jober_receive_total,quality.quality_name,jober.party_name as jober_name,gst.gst_percentage,receive.is_work_completed,receive.sale_jober_receive_meter_data,receive.sale_jober_receive_taka,buyer.party_name as buyer_name,sale.sale_order_no,receive.sale_jober_receive_remark,child.sale_child_quality_colour,child.sale_child_work,child.sale_child_work_colour FROM erp_sale_jober_receive as receive LEFT JOIN erp_sale_jober_issue as issue ON issue.id=receive.sale_jober_issue_id LEFT JOIN erp_sale_child as child ON child.id=issue.sale_child_id LEFT JOIN erp_sale as sale ON sale.id=child.sale_id LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_party as jober ON jober.id=receive.jober_id LEFT JOIN erp_gst as gst ON gst.id=receive.gst_id LEFT JOIN erp_quality as quality ON quality.id=receive.quality_id WHERE receive.user_id='${user_id}' AND receive.company_id<='${company_id}' AND receive.year_id<='${year_id}' AND receive.branch_id<='${branch_id}' AND receive.is_delete_status='0' AND issue.is_delete_status='0' ${sea_sale_jober_receive_invoice_no} ${sea_sale_jober_receive_date} ${sea_sale_jober_receive_lf_no} ${sea_sale_jober_receive_meter} ${sea_sale_jober_receive_weight} ${sea_sale_jober_receive_fold} ${sea_sale_jober_receive_rate} ${sea_sale_jober_receive_total} ${sea_quality_name} ${sea_jober_name} ${sea_quality_id} ${sea_jober_id} ${sea_buyer_name} ${sea_order_no} ${sea_sale_child_quality_colour} ${sea_sale_child_work} ${sea_sale_child_work_colour} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getsalejoberreceivelistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.sale_jober_receive_meter_data = (element?.sale_jober_receive_meter_data != null && element?.sale_jober_receive_meter_data?.length > 0) ? JSON?.parse(element?.sale_jober_receive_meter_data) : [];

                element.export = constant.DefaultExportopetions;
            });
            
            var totalsalejoberreceivecount = `SELECT COUNT(receive.id) as Count FROM erp_sale_jober_receive as receive LEFT JOIN erp_sale_jober_issue as issue ON issue.id=receive.sale_jober_issue_id LEFT JOIN erp_sale_child as child ON child.id=issue.sale_child_id LEFT JOIN erp_sale as sale ON sale.id=child.sale_id LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_party as jober ON jober.id=receive.jober_id LEFT JOIN erp_gst as gst ON gst.id=receive.gst_id LEFT JOIN erp_quality as quality ON quality.id=receive.quality_id WHERE receive.user_id='${user_id}' AND receive.company_id<='${company_id}' AND receive.year_id<='${year_id}' AND receive.branch_id<='${branch_id}' AND receive.is_delete_status='0' AND issue.is_delete_status='0' ${sea_sale_jober_receive_invoice_no} ${sea_sale_jober_receive_date} ${sea_sale_jober_receive_lf_no} ${sea_sale_jober_receive_meter} ${sea_sale_jober_receive_weight} ${sea_sale_jober_receive_fold} ${sea_sale_jober_receive_rate} ${sea_sale_jober_receive_total} ${sea_quality_name} ${sea_jober_name} ${sea_quality_id} ${sea_jober_id} ${sea_buyer_name} ${sea_order_no} ${sea_sale_child_quality_colour} ${sea_sale_child_work} ${sea_sale_child_work_colour} ${date_range_query}`;
        
            conn.query(totalsalejoberreceivecount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // DELETE sale jober receive DATA API //
    deletesalejoberreceivedata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid sale jober receive ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var deletesalejoberreceivedata = `CALL delete_sale_jober_receive(?,?)`;
        conn.query(deletesalejoberreceivedata,[id,entry_date],(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'sale jober receive Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {     
                // INSERT USER ACTIVITY LOG IN TABLE //
                const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                const ip = `sale jober receive Deleted With This Device ID ${HeaderData.device_id} `;
                const loginuserdetails = `CALL get_user_details(?)`;
                conn.query(loginuserdetails,[user_id],function(error,userdata){
                    if(userdata[0])
                    {   
                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        conn.query(loginactivitylog,[user_id,0,userdata[0][0]?.user_position,ip,`sale jober receive`,entry_date],function(error,data){
                
                        });
                    }
                });
                res?.send({ Status:200,Count:1,Message:'sale jober receive Deleted Successfully',Data:[] });
                next();
                return;
            }
        });
    },
};


export default AllSaleJoberReceiveApis;
    
