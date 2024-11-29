import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllSaleJoberIssueApis = {
    
    // INSERT sale jober issue by sale child DATA API //
    // createsalejoberissuebysalechild: (sale_company_id,sale_year_id,sale_branch_id,sale_godown_id,body,header) => {

    //     // if (index_id < 0 || index_id == undefined) return; 
    //     let header_data = header;
    //     const id = 0;
    //     const user_id = body?.user_id ? body?.user_id : 0;
    //     const company_id  = sale_company_id ? sale_company_id  : 0;
    //     const year_id = sale_year_id ? sale_year_id  : 0;
    //     const branch_id = sale_branch_id ? sale_branch_id : 0;
    //     const godown_id = sale_godown_id ? sale_godown_id : 0;
    //     const sale_child_id = body?.id ? body?.id  : 0;
    //     const quality_id = body?.quality_id ? body?.quality_id : 0;
    //     const jober_id = body?.jober_id ? body?.jober_id : 0;
    //     const gst_id = body?.gst_id ? body?.gst_id : 0;
    //     const sale_jober_issue_date = constant.moment().format('YYYY-MM-DD');
    //     const sale_jober_issue_meter = body?.sale_child_meter ? body?.sale_child_meter : 0;
    //     const sale_jober_issue_weight = 0;
    //     const sale_jober_issue_fold = body?.sale_child_fold ? body?.sale_child_fold : 0;       
    //     const sale_jober_issue_rate = body?.sale_child_rate ? body?.sale_child_rate : 0;
    //     const sale_jober_issue_total = body?.sale_child_total ? body?.sale_child_total : 0;
    //     const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
    //     const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
   
    //     if (Number(quality_id) > 0) 
    //     {   
    //         const lastissueinvoicenumber = `SELECT sale_jober_issue_invoice_no FROM erp_sale_jober_issue WHERE 1=1 ORDER BY id DESC`;
    //         conn.query(lastissueinvoicenumber,(error,data) => {

    //             const sale_jober_issue_invoice_no = data[0]?.sale_jober_issue_invoice_no && data[0]?.sale_jober_issue_invoice_no > 0 ? Number(data[0]?.sale_jober_issue_invoice_no) + 1 : 1;

    //             // console.log(sale_jober_issue_invoice_no);return;
    //             const createsalejoberissue = `CALL create_sale_jober_issue(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
    //             conn.query(createsalejoberissue,[id,user_id,company_id,year_id,branch_id,godown_id,sale_child_id,quality_id,jober_id,gst_id,sale_jober_issue_invoice_no,sale_jober_issue_date,sale_jober_issue_meter,sale_jober_issue_weight,sale_jober_issue_fold,sale_jober_issue_rate,sale_jober_issue_total,entry_date,update_date],(error,data) => {

    //                 if (error)
    //                 {   
    //                     return({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
    //                 }
    //                 else
    //                 {   
    //                     // INSERT USER ACTIVITY LOG IN TABLE //
    //                     const HeaderData = JSON.parse(JSON.stringify(header_data));
    //                     const login_ip = `sale jober issue Created With This Device ID ${HeaderData.device_id} `;
    //                     const loginuserdetails = `CALL get_user_details(?)`;
    //                     conn.query(loginuserdetails,[user_id],function(error,userdata){
    //                         if(userdata[0])
    //                         {   
    //                             const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
    //                             conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`sale jober issue`,entry_date],function(error,data){
                        
    //                             });
    //                         }
    //                     });
    //                     return({ Status:200,Count:0,Message:'sale jober issue Inserted',Data:data[0] });
    //                 }  
    //             });
    //         });
    //     }             
    // },

    // INSERT & UPDATE sale jober issue DATA API //
    createsalejoberissue: (req,res,next) => {
        
        let body  = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const year_id = body?.year_id ? body?.year_id  : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const godown_id = body?.godown_id ? body?.godown_id  : 0;
        const sale_child_id = body?.sale_child_id ? body?.sale_child_id  : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const jober_id = body?.jober_id ? body?.jober_id : 0;
        const gst_id = body?.gst_id ? body?.gst_id : 0;
        const sale_jober_issue_remark = body?.sale_jober_issue_remark ? body?.sale_jober_issue_remark : '';
        const sale_jober_issue_invoice_no = body?.sale_jober_issue_invoice_no ? body?.sale_jober_issue_invoice_no : 0;
        const sale_jober_issue_date = body?.sale_jober_issue_date ? body?.sale_jober_issue_date : constant.moment().format('YYYY-MM-DD');
        const sale_jober_issue_taka = body?.sale_jober_issue_taka ? body?.sale_jober_issue_taka : 0;
        const sale_jober_issue_meter = body?.sale_jober_issue_meter ? body?.sale_jober_issue_meter : 0;
        const sale_jober_issue_meter_data = body?.sale_jober_issue_meter_data ? JSON.stringify(body?.sale_jober_issue_meter_data) : '';
        const sale_jober_issue_weight = body?.sale_jober_issue_weight ? body?.sale_jober_issue_weight : 0;
        const sale_jober_issue_fold = body?.sale_jober_issue_fold ? body?.sale_jober_issue_fold : 0;   
        const sale_jober_issue_count_meter = body?.sale_jober_issue_count_meter ? body?.sale_jober_issue_count_meter : 0;   
        const sale_jober_issue_rate = body?.sale_jober_issue_rate ? body?.sale_jober_issue_rate : 0;
        const sale_jober_issue_total = body?.sale_jober_issue_total ? body?.sale_jober_issue_total : 0;
        const is_jober_issue_completed = body?.is_jober_issue_completed ? body?.is_jober_issue_completed : 0;
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
        if (sale_child_id.length == 0 || sale_child_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Sale Child ID',Data:[] });
            next();
            return;
        }
        if (sale_jober_issue_invoice_no.length == 0 || sale_jober_issue_invoice_no == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid Sale Issue Invoice No',Data:[] });
            next();
            return;
        }       

        if (id > 0) 
        {   

            const updatesalejoberissue = `CALL create_sale_jober_issue(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatesalejoberissue,[id,user_id,company_id,year_id,branch_id,godown_id,sale_child_id,quality_id,jober_id,gst_id,sale_jober_issue_remark,sale_jober_issue_invoice_no,sale_jober_issue_date,sale_jober_issue_taka,sale_jober_issue_meter,sale_jober_issue_meter_data,sale_jober_issue_weight,sale_jober_issue_fold,sale_jober_issue_count_meter,sale_jober_issue_rate,sale_jober_issue_total,is_jober_issue_completed,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'sale jober issue Updated',Data:[] });
                    next();
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `sale jober issue Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`sale jober issue`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
            
        }
        else
        {   
            const existsalejoberissue = `SELECT COUNT(id) as count FROM erp_sale_jober_receive WHERE sale_jober_issue_id ='${id}'`;
            conn.query(existsalejoberissue,(error,existdata) => {
                
                if (existdata[0]?.count <= 0) 
                {
                    const createsalejoberissue = `CALL create_sale_jober_issue(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                    conn.query(createsalejoberissue,[id,user_id,company_id,year_id,branch_id,godown_id,sale_child_id,quality_id,jober_id,gst_id,sale_jober_issue_remark,sale_jober_issue_invoice_no,sale_jober_issue_date,sale_jober_issue_taka,sale_jober_issue_meter,sale_jober_issue_meter_data,sale_jober_issue_weight,sale_jober_issue_fold,sale_jober_issue_count_meter,sale_jober_issue_rate,sale_jober_issue_total,is_jober_issue_completed,entry_date,update_date],(error,data) => {
    
                        if (error || data[0]?.length == 0)
                        {   
                            res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                            next();
                        }
                        else
                        {    
                            res?.send({ Status:200,Count:0,Message:'sale jober issue Inserted',Data:data[0] });
                            next();
                    
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const login_ip = `sale jober issue Created With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`sale jober issue`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                        }  
                    });
                }
                else
                {
                    res?.send({ Status:400,Count:0,Message:'This Entry Already Use in Jober Issue !!!!',Data:[] });
                    next();
                    return;
                }
            });
        }
    },

    // GET journal sale LISTING DATA API //
    getsalejoberissuelistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const buyer_id = body?.buyer_id ? body?.buyer_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'sale.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`child.id as sale_child_id,`;

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

        const search_sale_order_no = search?.sale_order_no ? search?.sale_order_no : '';
        const search_sale_order_date = search?.sale_order_date ? search?.sale_order_date : '';
        const search_quality_name = search?.quality_name ? search?.quality_name.trim().toLowerCase() : '';
        const search_gst_percentage = search?.gst_percentage ? search?.gst_percentage : '';
        const search_sale_child_meter = search?.sale_child_meter ? search?.sale_child_meter : '';
        const search_sale_child_fold = search?.sale_child_fold ? search?.sale_child_fold : '';
        const search_sale_child_count_meter = search?.sale_child_count_meter ? search?.sale_child_count_meter : '';
        const search_sale_child_rate = search?.sale_child_rate ? search?.sale_child_rate : '';
        const search_buyer_name = search?.buyer_name ? search?.buyer_name.trim().toLowerCase() : '';
        const search_sale_child_quality_colour = search?.sale_child_quality_colour ? search?.sale_child_quality_colour.trim().toLowerCase() : '';
        const search_sale_child_work = search?.sale_child_work ? search?.sale_child_work.trim().toLowerCase() : '';
        const search_sale_child_work_colour = search?.sale_child_work_colour ? search?.sale_child_work_colour.trim().toLowerCase() : '';
        const search_sale_child_remark = search?.sale_child_remark ? search?.sale_child_remark.trim().toLowerCase() : '';
        
                
        const sea_sale_order_no = search_sale_order_no != '' ? ` AND sale.sale_order_no LIKE '%${search_sale_order_no}%'` : '';
        const sea_sale_order_date = search_sale_order_date != '' ? ` AND sale.sale_order_date LIKE '%${search_sale_order_date}%'` : '';
        const sea_quality_name = search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_gst_percentage = search_gst_percentage != '' ? ` AND gst.gst_percentage LIKE '%${search_gst_percentage}%'` : '';
        const sea_sale_child_meter = search_sale_child_meter != '' ? ` AND child.sale_child_meter LIKE '%${search_sale_child_meter}%'` : '';
        const sea_sale_child_fold = search_sale_child_fold != '' ? ` AND child.sale_child_fold LIKE '%${search_sale_child_fold}%'` : '';
        const sea_sale_child_count_meter = search_sale_child_count_meter != '' ? ` AND child.sale_child_count_meter LIKE '%${search_sale_child_count_meter}%'` : '';
        const sea_sale_child_rate = search_sale_child_rate != '' ? ` AND child.sale_child_rate LIKE '%${search_sale_child_rate}%'` : '';
        const sea_buyer_name = search_buyer_name != '' ? ` AND buyer.party_name LIKE '%${search_buyer_name}%'` : '';
        const sea_sale_child_quality_colour = search_sale_child_quality_colour != '' ? ` AND child.sale_child_quality_colour LIKE '%${search_sale_child_quality_colour}%'` : '';
        const sea_sale_child_work = search_sale_child_work != '' ? ` AND child.sale_child_work LIKE '%${search_sale_child_work}%'` : '';
        const sea_sale_child_work_colour = search_sale_child_work_colour != '' ? ` AND child.sale_child_work_colour LIKE '%${search_sale_child_work_colour}%'` : '';
        const sea_sale_child_remark = search_sale_child_remark != '' ? ` AND child.sale_child_remark LIKE '%${search_sale_child_remark}%'` : '';        
        const sea_quality_id = quality_id > 0 ? ` AND child.quality_id='${quality_id}'` : '';
        const sea_buyer_id = buyer_id > 0 ? ` AND sale.buyer_id='${buyer_id}'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(sale.sale_order_date) >='${from_date}' AND DATE(sale.sale_order_date) <='${to_date}'` : '';
        
        var getjournalsalelistingdata = `SELECT ${All_ID_Query} sale.sale_order_no,DATE_FORMAT(sale.sale_order_date,'%d-%m-%Y') as sale_order_date,buyer.party_name as buyer_name,child.quality_id,quality.quality_name,child.gst_id,gst.gst_percentage,child.sale_child_meter,child.sale_child_fold,child.sale_child_count_meter,child.sale_child_rate,child.sale_child_amount,child.sale_child_meter - (SELECT COALESCE(SUM(sale_jober_issue_meter),0) FROM erp_sale_jober_issue WHERE sale_child_id=child.id AND is_delete_status='0') as sale_child_due_meter,child.sale_child_quality_colour,child.sale_child_work,child.sale_child_work_colour,child.sale_child_remark,state.global_code as state_code,child.sale_child_remark_2 FROM erp_sale as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_sale_child as child ON child.sale_id=sale.id LEFT JOIN erp_quality as quality ON quality.id=child.quality_id LEFT JOIN erp_gst as gst ON gst.id=child.gst_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' AND child.is_delete_status='0' AND child.sale_child_meter > (SELECT COALESCE(SUM(sale_jober_issue_meter),0) FROM erp_sale_jober_issue WHERE sale_child_id=child.id AND is_delete_status='0') AND child.is_not_to_jober='0' AND child.order_status!='cancel' AND (SELECT COUNT(id) FROM erp_sale_jober_issue WHERE sale_child_id=child.id AND is_jober_issue_completed='1') = 0 ${sea_sale_order_no} ${sea_sale_order_date} ${sea_quality_name} ${sea_gst_percentage} ${sea_sale_child_meter} ${sea_sale_child_fold} ${sea_sale_child_count_meter} ${sea_sale_child_rate} ${sea_buyer_name} ${sea_sale_child_quality_colour} ${sea_sale_child_work} ${sea_sale_child_work_colour} ${sea_quality_id} ${sea_buyer_id} ${sea_sale_child_remark} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getjournalsalelistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => { element.export = constant.DefaultExportopetions; });
            
            var totaljournalsalecount = `SELECT COUNT(sale.id) as Count FROM erp_sale as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_sale_child as child ON child.sale_id=sale.id LEFT JOIN erp_quality as quality ON quality.id=child.quality_id LEFT JOIN erp_gst as gst ON gst.id=child.gst_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' AND child.is_delete_status='0' AND child.sale_child_meter > (SELECT COALESCE(SUM(sale_jober_issue_meter),0) FROM erp_sale_jober_issue WHERE sale_child_id=child.id AND is_delete_status='0') AND child.is_not_to_jober='0' AND child.order_status!='cancel' AND (SELECT COUNT(id) FROM erp_sale_jober_issue WHERE sale_child_id=child.id AND is_jober_issue_completed='1') = 0 ${sea_sale_order_no} ${sea_sale_order_date} ${sea_quality_name} ${sea_gst_percentage} ${sea_sale_child_meter} ${sea_sale_child_fold} ${sea_sale_child_count_meter} ${sea_sale_child_rate} ${sea_buyer_name} ${sea_sale_child_quality_colour} ${sea_sale_child_work} ${sea_sale_child_work_colour} ${sea_quality_id} ${sea_buyer_id} ${sea_sale_child_remark} ${date_range_query}`;
        
            conn.query(totaljournalsalecount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // GET sale jober issue AND CHILD DETAILS DATA API //
    getsalejoberissuedetails: (req,res,next) => {

        const sale_jober_issue_id = req.body?.sale_jober_issue_id ? req.body?.sale_jober_issue_id : 0;
        if (sale_jober_issue_id.length == 0 || sale_jober_issue_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter sale jober issue ID',Data:[] });
            next();
            return;
        }

        var getsalejoberissuedetails = `CALL get_sale_jober_issue_details(?)`;
        conn.query(getsalejoberissuedetails,[sale_jober_issue_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].sale_jober_issue_date = constant.moment(data[0][0].sale_jober_issue_date).format('YYYY-MM-DD');
                data[0][0].sale_jober_issue_meter_data = (data[0][0]?.sale_jober_issue_meter_data != null && data[0][0]?.sale_jober_issue_meter_data?.length > 0) ? JSON?.parse(data[0][0]?.sale_jober_issue_meter_data) : [];

                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET sale jober issue report LISTING DATA API //
    getsalejoberissuereportlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const jober_id = body?.jober_id ? body?.jober_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'issue.sale_jober_issue_invoice_no-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`issue.id as sale_jober_issue_id,issue.sale_child_id,issue.quality_id,issue.gst_id,issue.jober_id,`;

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
        const search_sale_child_quality_colour = search?.sale_child_quality_colour ? search?.sale_child_quality_colour.trim().toLowerCase() : '';
        const search_buyer_name = search?.buyer_name ? search?.buyer_name.trim().toLowerCase() : '';
        const search_order_no = search?.order_no ? search?.order_no.trim().toLowerCase() : '';

        const search_sale_child_work = search?.sale_child_work ? search?.sale_child_work.trim().toLowerCase() : '';
        const search_sale_child_work_colour = search?.sale_child_work_colour ? search?.sale_child_work_colour.trim().toLowerCase() : '';
        const search_sale_jober_issue_count_meter = search?.sale_jober_issue_count_meter ? search?.sale_jober_issue_count_meter : '';
        
        const sea_sale_jober_issue_invoice_no = search_sale_jober_issue_invoice_no != '' ? ` AND issue.sale_jober_issue_invoice_no LIKE '%${search_sale_jober_issue_invoice_no}%'` : '';
        const sea_sale_jober_issue_date = search_sale_jober_issue_date != '' ? ` AND issue.sale_jober_issue_date LIKE '%${search_sale_jober_issue_date}%'` : '';
        const sea_sale_jober_issue_meter = search_sale_jober_issue_meter != '' ? ` AND issue.sale_jober_issue_meter LIKE '%${search_sale_jober_issue_meter}%'` : '';
        const sea_sale_jober_issue_weight = search_sale_jober_issue_weight != '' ? ` AND tax_child.sale_jober_issue_weight LIKE '%${search_sale_jober_issue_weight}%'` : '';
        const sea_sale_jober_issue_fold = search_sale_jober_issue_fold != '' ? ` AND issue.sale_jober_issue_fold LIKE '%${search_sale_jober_issue_fold}%'` : '';
        const sea_sale_jober_issue_rate = search_sale_jober_issue_rate != '' ? ` AND issue.sale_jober_issue_rate LIKE '%${search_sale_jober_issue_rate}%'` : '';
        const sea_sale_jober_issue_total = search_sale_jober_issue_total != '' ? ` AND issue.sale_jober_issue_total LIKE '%${search_sale_jober_issue_total}%'` : '';
        const sea_quality_name = search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_jober_name = search_jober_name != '' ? ` AND jober.party_name LIKE '%${search_jober_name}%'` : '';
        const sea_quality_id = quality_id > 0  ? ` AND issue.quality_id= '${quality_id}'` : '';
        const sea_jober_id = jober_id > 0  ? ` AND issue.jober_id= '${jober_id}'` : '';
        const sea_sale_child_quality_colour = search_sale_child_quality_colour != '' ? ` AND child.sale_child_quality_colour LIKE '%${search_sale_child_quality_colour}%'` : '';
        const sea_sale_child_work = search_sale_child_work != '' ? ` AND child.sale_child_work LIKE '%${search_sale_child_work}%'` : '';
        const sea_sale_child_work_colour = search_sale_child_work_colour != '' ? ` AND child.sale_child_work_colour LIKE '%${search_sale_child_work_colour}%'` : '';
        const sea_sale_jober_issue_count_meter = search_sale_jober_issue_count_meter != '' ? ` AND issue.sale_jober_issue_count_meter LIKE '%${search_sale_jober_issue_count_meter}%'` : '';
        const sea_buyer_name = search_buyer_name != '' ? ` AND buyer.party_name LIKE '%${search_buyer_name}%'` : '';
        const sea_order_no = search_order_no != '' ? ` AND sale.sale_order_no LIKE '%${search_order_no}%'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(issue.sale_jober_issue_date) >='${from_date}' AND DATE(issue.sale_jober_issue_date) <='${to_date}'` : '';
        

        var getsalejoberissuereportlistingdata = `SELECT ${All_ID_Query} sale.buyer_id,issue.sale_jober_issue_invoice_no,DATE_FORMAT(issue.sale_jober_issue_date,'%d-%m-%Y') as sale_jober_issue_date,DATE_FORMAT(issue.sale_jober_issue_date,'%Y-%m-%d') as sale_jober_issue_date_old,issue.sale_jober_issue_meter,issue.sale_jober_issue_weight,issue.sale_jober_issue_fold,issue.sale_jober_issue_rate,issue.sale_jober_issue_total,quality.quality_name,jober.party_name as jober_name,gst.gst_percentage,(child.sale_child_meter - (SELECT COALESCE(SUM(issue_meter.sale_jober_issue_meter),0) as sale_child_due_meter FROM erp_sale_jober_issue as issue_meter WHERE issue_meter.sale_child_id=child.id AND issue_meter.is_delete_status='0')) as sale_child_due_meter,child.sale_child_quality_colour,child.sale_child_work,child.sale_child_work_colour,issue.is_jober_issue_completed,(SELECT COUNT(id) FROM erp_sale_jober_receive WHERE sale_jober_issue_id=issue.id AND is_delete_status='0') as jober_receive_count,issue.sale_jober_issue_meter_data,issue.sale_jober_issue_taka,issue.sale_jober_issue_count_meter,state.global_code as state_code,buyer.party_name as buyer_name,sale.sale_order_no as order_no,child.sale_child_remark_2,issue.sale_jober_issue_remark,issue.sale_jober_issue_count_meter FROM erp_sale_jober_issue as issue LEFT JOIN erp_party as jober ON jober.id=issue.jober_id LEFT JOIN erp_gst as gst ON gst.id=issue.gst_id LEFT JOIN erp_quality as quality ON quality.id=issue.quality_id LEFT JOIN erp_sale_child as child ON child.id=issue.sale_child_id LEFT JOIN erp_sale as sale ON sale.id=child.sale_id LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_global as state ON state.id=jober.state_id WHERE issue.user_id='${user_id}' AND issue.company_id<='${company_id}' AND issue.year_id<='${year_id}' AND issue.branch_id<='${branch_id}' AND issue.is_delete_status='0' AND child.is_delete_status='0' ${sea_sale_jober_issue_invoice_no} ${sea_sale_jober_issue_date} ${sea_sale_jober_issue_meter} ${sea_sale_jober_issue_weight} ${sea_sale_jober_issue_fold} ${sea_sale_jober_issue_rate} ${sea_sale_jober_issue_total} ${sea_quality_name} ${sea_jober_name} ${sea_quality_id} ${sea_sale_child_quality_colour} ${sea_sale_child_work} ${sea_sale_child_work_colour} ${sea_jober_id} ${sea_sale_jober_issue_count_meter} ${sea_buyer_name} ${sea_order_no} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getsalejoberissuereportlistingdata,(error,data) => {

            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.sale_jober_issue_meter_data = (element?.sale_jober_issue_meter_data != null && element?.sale_jober_issue_meter_data?.length > 0) ? JSON?.parse(element?.sale_jober_issue_meter_data) : [];
                element.export = constant.DefaultExportopetions;
            });
            
            var totalsalejoberissuecount = `SELECT COUNT(issue.id) as Count FROM erp_sale_jober_issue as issue LEFT JOIN erp_party as jober ON jober.id=issue.jober_id LEFT JOIN erp_gst as gst ON gst.id=issue.gst_id LEFT JOIN erp_quality as quality ON quality.id=issue.quality_id LEFT JOIN erp_sale_child as child ON child.id=issue.sale_child_id LEFT JOIN erp_global as state ON state.id=jober.state_id WHERE issue.user_id='${user_id}' AND issue.company_id<='${company_id}' AND issue.year_id<='${year_id}' AND issue.branch_id<='${branch_id}' AND issue.is_delete_status='0' AND child.is_delete_status='0' ${sea_sale_jober_issue_invoice_no} ${sea_sale_jober_issue_date} ${sea_sale_jober_issue_meter} ${sea_sale_jober_issue_weight} ${sea_sale_jober_issue_fold} ${sea_sale_jober_issue_rate} ${sea_sale_jober_issue_total} ${sea_quality_name} ${sea_jober_name} ${sea_quality_id} ${sea_sale_child_quality_colour} ${sea_sale_child_work} ${sea_sale_child_work_colour} ${sea_jober_id} ${sea_sale_jober_issue_count_meter} ${date_range_query}`;
        
            conn.query(totalsalejoberissuecount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },
    
    // DELETE sale jober issue DATA API //
    deletesalejoberissuedata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid sale jober issue ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existsalejoberissuedata = `SELECT id as sale_jober_issue_id,(SELECT COUNT(id) FROM erp_sale_jober_receive WHERE sale_jober_issue_id='${id}' AND is_delete_status='0') as sale_jober_receive_id FROM erp_sale_jober_issue WHERE id='${id}'`;

        conn.query(existsalejoberissuedata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.sale_jober_receive_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'sale jober issue In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletesalejoberissuedata = `CALL delete_sale_jober_issue(?,?)`;
                    conn.query(deletesalejoberissuedata,[id,entry_date],(error,data) => {
                        if (error) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'sale jober issue Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {     
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `sale jober issue Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`sale jober issue`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'sale jober issue Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    },
};


export default AllSaleJoberIssueApis;
    
