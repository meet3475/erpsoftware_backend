import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllGreyIssueApis = {
    
    // INSERT grey issue by tax invoice child DATA API //
    creategreyissuebytaxinvoice: (body,headers,index_id,grey_issue_challan_id) => {

        if (index_id < 0 || index_id == undefined) return; 

        // console.log(body);
        let header_data = headers;
        const id = 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id  = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const godown_id = body?.godown_id ? body?.godown_id  : 0;
        const mill_id = body?.mill_id ? body?.mill_id : 0;
        const purchase_tax_invoice_child_id = body?.id ? body?.id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const grey_issue_prefix = '';
        const grey_issue_mill_lot_no = '';
        const grey_issue_date = constant.moment().format('YYYY-MM-DD');
        const grey_issue_taka = body?.purchase_tax_invoice_child_unit_sent ? body?.purchase_tax_invoice_child_unit_sent : 0;
        const grey_issue_meter = (Number(body?.purchase_tax_invoice_child_rate_per) == 20 && Number(body?.purchase_tax_invoice_quality_meter_average) > 0) ? body?.purchase_tax_invoice_quality_meter_average : (body?.purchase_tax_invoice_child_qty_sent ? body?.purchase_tax_invoice_child_qty_sent : 0);
        const grey_issue_weight =  (Number(body?.purchase_tax_invoice_child_rate_per) == 20 && Number(body?.purchase_tax_invoice_quality_meter_average) > 0) ? body?.purchase_tax_invoice_child_qty_sent : 0;       
        const grey_issue_remark = '';
        const grey_issue_job_type = '';
        const grey_issue_challan_no = grey_issue_challan_id;
        const is_rf = 0;
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
   
        if (Number(quality_id) > 0) 
        {   
            const creategreyissue = `CALL create_grey_issue(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(creategreyissue,[id,user_id,branch_id,company_id,year_id,godown_id,purchase_tax_invoice_child_id,quality_id,mill_id,grey_issue_prefix,grey_issue_challan_no,grey_issue_mill_lot_no,grey_issue_date,grey_issue_taka,grey_issue_meter,grey_issue_weight,grey_issue_remark,grey_issue_job_type,is_rf,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    return({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                }
                else
                {   
                    // console.log(data);
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(header_data));
                    const login_ip = `grey issue Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`grey issue`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                    return({ Status:200,Count:0,Message:'grey issue Inserted',Data:data[0] });
                }  
            });
        }             
    },

    // INSERT & UPDATE GREY ISSUE DATA API //
    creategreyissue: (req,res,next) => {

        let body  = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const year_id = body?.year_id ? body?.year_id  : 0;
        const godown_id = body?.godown_id ? body?.godown_id  : 0;
        const purchase_tax_invoice_child_id = body?.purchase_tax_invoice_child_id ? body?.purchase_tax_invoice_child_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const mill_id = body?.mill_id ? body?.mill_id  : 0;
        const grey_issue_prefix = body?.grey_issue_prefix ? body?.grey_issue_prefix : '';
        // const grey_issue_challan_no = body?.grey_issue_challan_no ? body?.grey_issue_challan_no : '';
        const grey_issue_mill_lot_no = body?.grey_issue_mill_lot_no ? body?.grey_issue_mill_lot_no : '';
        const grey_issue_date = body?.grey_issue_date ? body?.grey_issue_date.trim() : constant.moment().format('YYYY-MM-DD');
        const grey_issue_taka = body?.grey_issue_taka ? body?.grey_issue_taka : 0;
        const grey_issue_meter = body?.grey_issue_meter ? body?.grey_issue_meter : 0;
        const grey_issue_weight = body?.grey_issue_weight ? body?.grey_issue_weight : 0;
        const grey_issue_remark = body?.grey_issue_remark ? body?.grey_issue_remark.trim().toLowerCase() : '';
        const grey_issue_job_type = body?.grey_issue_job_type ? body?.grey_issue_job_type.trim().toLowerCase() : '';
        const is_rf = body?.is_rf ? body?.is_rf : 0;
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
        if (id > 0) 
        {   
            const updategreyissue = `CALL create_grey_issue(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updategreyissue,[id,user_id,branch_id,company_id,year_id,godown_id,purchase_tax_invoice_child_id,quality_id,mill_id,grey_issue_prefix,grey_issue_challan_no,grey_issue_mill_lot_no,grey_issue_date,grey_issue_taka,grey_issue_meter,grey_issue_weight,grey_issue_remark,grey_issue_job_type,is_rf,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'grey issue Updated',Data:[] });
                    next();
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `grey issue Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`grey issue`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {   
            const last_grey_issue_challan_no = `SELECT grey_issue_challan_no FROM erp_grey_issue WHERE user_id='${user_id}' AND branch_id='${branch_id}' AND company_id='${company_id}' AND year_id='${year_id}' ORDER BY id DESC LIMIT 1;`

            conn.query(last_grey_issue_challan_no,(error,lastchallanno) => {
                
                let grey_issue_challan_no = lastchallanno.length > 0 ? (id == 0 ? Number(lastchallanno[0].grey_issue_challan_no) + 1 : Number(lastchallanno[0].grey_issue_challan_no)) : 1;
                
                const creategreyissue = `CALL create_grey_issue(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(creategreyissue,[id,user_id,branch_id,company_id,year_id,godown_id,purchase_tax_invoice_child_id,quality_id,mill_id,grey_issue_prefix,grey_issue_challan_no,grey_issue_mill_lot_no,grey_issue_date,grey_issue_taka,grey_issue_meter,grey_issue_weight,grey_issue_remark,grey_issue_job_type,is_rf,entry_date,update_date],(error,data) => {

                    if (error || data[0]?.length == 0)
                    {   
                        res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                        next();
                    }
                    else
                    {    
                        res?.send({ Status:200,Count:0,Message:'grey issue Inserted',Data:data[0] });
                        next();
                
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                        const login_ip = `grey issue Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`grey issue`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                    }  
                });
            });
        }
    },

    // GET grey issue AND CHILD DETAILS DATA API //
    getgreyissuedetails: (req,res,next) => {

        const grey_issue_id = req.body?.grey_issue_id ? req.body?.grey_issue_id : 0;
        if (grey_issue_id.length == 0 || grey_issue_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter grey issue ID',Data:[] });
            next();
            return;
        }

        var getgreyissuedetails = `CALL get_grey_issue_details(?)`;
        conn.query(getgreyissuedetails,[grey_issue_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].grey_issue_date = constant.moment(data[0][0].grey_issue_date).format('YYYY-MM-DD');

                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET grey issue LISTING DATA API //
    getgreyissuelistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const supplier_id = body?.supplier_id ? body?.supplier_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'tax_child.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`tax_child.id as purchase_tax_invoice_child_id,`;

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

        const search_purchase_tax_invoice_date = search?.purchase_tax_invoice_date ? search?.purchase_tax_invoice_date : '';
        const search_purchase_tax_invoice_no = search?.purchase_tax_invoice_no ? search?.purchase_tax_invoice_no : '';
        const search_purchase_tax_invoice_lr_no = search?.purchase_tax_invoice_lr_no ? search?.purchase_tax_invoice_lr_no : '';
        const search_quality_name = search?.quality_name ? search?.quality_name.trim().toLowerCase() : '';
        const search_supplier_name = search?.supplier_name ? search?.supplier_name.trim().toLowerCase() : '';
        const search_purchase_tax_invoice_child_unit_sent = search?.purchase_tax_invoice_child_unit_sent ? search?.purchase_tax_invoice_child_unit_sent : '';
        const search_balance_unit = search?.balance_unit ? search?.balance_unit : '';
        const search_purchase_tax_invoice_child_qty_sent = search?.purchase_tax_invoice_child_qty_sent ? search?.purchase_tax_invoice_child_qty_sent : '';
        const search_balance_qty = search?.balance_qty ? search?.balance_qty : '';
        const search_purchase_tax_invoice_child_rate = search?.purchase_tax_invoice_child_rate ? search?.purchase_tax_invoice_child_rate : '';
        const search_purchase_tax_invoice_child_total = search?.purchase_tax_invoice_child_total ? search?.purchase_tax_invoice_child_total : '';
        const search_purchase_tax_invoice_child_net_meter = search?.purchase_tax_invoice_child_net_meter ? search?.purchase_tax_invoice_child_net_meter : '';
       
        const sea_purchase_tax_invoice_date = search_purchase_tax_invoice_date != '' ? ` AND pur_tax.purchase_tax_invoice_date LIKE '%${search_purchase_tax_invoice_date}%'` : '';
        const sea_purchase_tax_invoice_no = search_purchase_tax_invoice_no != '' ? ` AND pur_tax.purchase_tax_invoice_no LIKE '%${search_purchase_tax_invoice_no}%'` : '';
        const sea_purchase_tax_invoice_lr_no = search_purchase_tax_invoice_lr_no != '' ? ` AND pur_tax.purchase_tax_invoice_lr_no LIKE '%${search_purchase_tax_invoice_lr_no}%'` : '';
        const sea_quality_name = search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_supplier_name = search_supplier_name != '' ? ` AND supplier.party_name LIKE '%${search_supplier_name}%'` : '';
        const sea_purchase_tax_invoice_child_unit_sent = search_purchase_tax_invoice_child_unit_sent != '' ? ` AND tax_child.purchase_tax_invoice_child_unit_sent LIKE '%${search_purchase_tax_invoice_child_unit_sent}%'` : '';
        const sea_balance_unit = search_balance_unit != '' ? ` AND tax_child.purchase_tax_invoice_child_unit_sent LIKE '%${search_balance_unit}%'` : '';
        const sea_purchase_tax_invoice_child_qty_sent = search_purchase_tax_invoice_child_qty_sent != '' ? ` AND tax_child.purchase_tax_invoice_child_qty_sent LIKE '%${search_purchase_tax_invoice_child_qty_sent}%'` : '';
        const sea_balance_qty = search_balance_qty != '' ? ` AND tax_child.purchase_tax_invoice_child_qty_sent LIKE '%${search_balance_qty}%'` : '';
        const sea_purchase_tax_invoice_child_rate = search_purchase_tax_invoice_child_rate != '' ? ` AND tax_child.purchase_tax_invoice_child_rate LIKE '%${search_purchase_tax_invoice_child_rate}%'` : '';
        const sea_purchase_tax_invoice_child_total = search_purchase_tax_invoice_child_total != '' ? ` AND tax_child.purchase_tax_invoice_child_total LIKE '%${search_purchase_tax_invoice_child_total}%'` : '';
        const sea_purchase_tax_invoice_child_net_meter = search_purchase_tax_invoice_child_net_meter != '' ? ` AND tax_child.purchase_tax_invoice_child_net_meter LIKE '%${search_purchase_tax_invoice_child_net_meter}%'` : '';
        const sea_quality_type_id = quality_type_id > 0 ? ` AND pur_tax.quality_type_id='${quality_type_id}'` : '';
        const sea_quality_id = quality_id > 0 ? ` AND tax_child.quality_id= '${quality_id}'` : '';
        const sea_supplier_id = supplier_id > 0 ? ` AND pur_tax.supplier_id= '${supplier_id}'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(pur_tax.purchase_tax_invoice_date) >='${from_date}' AND DATE(pur_tax.purchase_tax_invoice_date) <='${to_date}'` : '';
        

        var getgreyissuelistingdata = `SELECT ${All_ID_Query} pur_tax.purchase_tax_invoice_date,pur_tax.purchase_tax_invoice_no,pur_tax.purchase_tax_invoice_lr_no,supplier.party_name as supplier_name,tax_child.quality_id,quality.quality_name,tax_child.purchase_tax_invoice_child_unit_sent,tax_child.purchase_tax_invoice_child_unit_sent - (SELECT COALESCE(SUM(grey.grey_issue_taka), 0) FROM erp_grey_issue as grey WHERE grey.purchase_tax_invoice_child_id=tax_child.id AND is_delete_status='0') as balance_unit,IF(tax_child.purchase_tax_invoice_quality_meter_average > 0,tax_child.purchase_tax_invoice_quality_meter_average,tax_child.purchase_tax_invoice_child_qty_sent) as purchase_tax_invoice_child_qty_sent,IF(tax_child.purchase_tax_invoice_quality_meter_average > 0,tax_child.purchase_tax_invoice_quality_meter_average,tax_child.purchase_tax_invoice_child_qty_sent) - (SELECT COALESCE(SUM(grey.grey_issue_meter), 0) FROM erp_grey_issue as grey WHERE grey.purchase_tax_invoice_child_id=tax_child.id AND is_delete_status='0') as balance_qty,IF(tax_child.purchase_tax_invoice_quality_meter_average > 0,tax_child.purchase_tax_invoice_child_qty_sent,tax_child.purchase_tax_invoice_child_unit_sent) - (SELECT COALESCE(SUM(grey.grey_issue_weight), 0) FROM erp_grey_issue as grey WHERE grey.purchase_tax_invoice_child_id=tax_child.id AND is_delete_status='0') as balance_weight,tax_child.purchase_tax_invoice_child_rate,tax_child.purchase_tax_invoice_child_total,tax_child.purchase_tax_invoice_child_net_meter,tax_child.purchase_tax_invoice_quality_meter_average as approx_meter,tax_child.purchase_tax_invoice_child_rate_per as rate_per,(SELECT mill_id FROM erp_grey_issue WHERE purchase_tax_invoice_child_id=tax_child.id AND is_delete_status='0' ORDER BY id DESC LIMIT 1) as last_mill_id FROM erp_purchase_tax_invoice as pur_tax LEFT JOIN erp_party as supplier ON supplier.id=pur_tax.supplier_id LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.purchase_tax_invoice_id=pur_tax.id LEFT JOIN erp_quality as quality ON quality.id=tax_child.quality_id WHERE pur_tax.user_id='${user_id}' AND pur_tax.company_id<='${company_id}' AND pur_tax.year_id<='${year_id}' AND pur_tax.branch_id<='${branch_id}' AND tax_child.purchase_tax_invoice_child_unit_sent >(SELECT COALESCE(SUM(grey.grey_issue_taka), 0) FROM erp_grey_issue as grey WHERE grey.purchase_tax_invoice_child_id=tax_child.id) AND pur_tax.is_delete_status='0' AND tax_child.is_delete_status='0' ${sea_purchase_tax_invoice_date} ${sea_purchase_tax_invoice_no} ${sea_purchase_tax_invoice_lr_no} ${sea_quality_name} ${sea_supplier_name} ${sea_purchase_tax_invoice_child_unit_sent} ${sea_balance_unit} ${sea_purchase_tax_invoice_child_qty_sent} ${sea_balance_qty} ${sea_purchase_tax_invoice_child_rate} ${sea_purchase_tax_invoice_child_total} ${sea_purchase_tax_invoice_child_net_meter} ${sea_quality_type_id} ${sea_quality_id} ${sea_supplier_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getgreyissuelistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.purchase_tax_invoice_date = constant.moment(element.purchase_tax_invoice_date).format('YYYY-MM-DD');
                element.export = constant.DefaultExportopetions;
            });
            
            var totalgreyissuecount = `SELECT COUNT(tax_child.id) as Count FROM erp_purchase_tax_invoice as pur_tax LEFT JOIN erp_party as supplier ON supplier.id=pur_tax.supplier_id LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.purchase_tax_invoice_id=pur_tax.id LEFT JOIN erp_quality as quality ON quality.id=tax_child.quality_id WHERE pur_tax.user_id='${user_id}' AND pur_tax.company_id<='${company_id}' AND pur_tax.year_id<='${year_id}' AND pur_tax.branch_id<='${branch_id}' AND tax_child.purchase_tax_invoice_child_unit_sent >(SELECT COALESCE(SUM(grey.grey_issue_taka), 0) FROM erp_grey_issue as grey WHERE grey.purchase_tax_invoice_child_id=tax_child.id) AND pur_tax.is_delete_status='0' AND tax_child.is_delete_status='0' ${sea_purchase_tax_invoice_date} ${sea_purchase_tax_invoice_no} ${sea_purchase_tax_invoice_lr_no} ${sea_quality_name} ${sea_supplier_name} ${sea_purchase_tax_invoice_child_unit_sent} ${sea_balance_unit} ${sea_purchase_tax_invoice_child_qty_sent} ${sea_balance_qty} ${sea_purchase_tax_invoice_child_rate} ${sea_purchase_tax_invoice_child_total} ${sea_purchase_tax_invoice_child_net_meter} ${sea_quality_type_id} ${sea_quality_id} ${sea_supplier_id} ${date_range_query}`;
        
            conn.query(totalgreyissuecount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // GET grey issue REPORT LISTING DATA API //
    getgreyissuereportlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const supplier_id = body?.supplier_id ? body?.supplier_id : 0;
        const mill_id = body?.mill_id ? body?.mill_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'grey_report.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`grey_report.id as grey_issue_id,tax_child.id as purchase_tax_invoice_child_id,grey_report.quality_id,grey_report.mill_id,`;

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

        const search_grey_issue_challan_no = search?.grey_issue_challan_no ? search?.grey_issue_challan_no : '';
        const search_grey_issue_date = search?.grey_issue_date ? search?.grey_issue_date : '';
        const search_purchase_tax_invoice_no = search?.purchase_tax_invoice_no ? search?.purchase_tax_invoice_no : '';
        const search_supplier_name = search?.supplier_name ? search?.supplier_name.trim().toLowerCase() : '';
        const search_quality_name = search?.quality_name ? search?.quality_name.trim().toLowerCase() : '';
        const search_mill_name = search?.mill_name ? search?.mill_name.trim().toLowerCase() : '';
        const search_grey_issue_taka = search?.grey_issue_taka ? search?.grey_issue_taka : '';
        const search_grey_issue_meter = search?.grey_issue_meter ? search?.grey_issue_meter : '';
        const search_grey_issue_weight = search?.grey_issue_weight ? search?.grey_issue_weight : '';
        const search_issue_lr_no = search?.issue_lr_no ? search?.issue_lr_no : '';
        const search_purchase_tax_invoice_lr_no = search?.purchase_tax_invoice_lr_no ? search?.purchase_tax_invoice_lr_no : '';
       
        const sea_grey_issue_challan_no = search_grey_issue_challan_no != '' ? ` AND grey_report.grey_issue_challan_no LIKE '%${search_grey_issue_challan_no}%'` : '';
        const sea_grey_issue_date = search_grey_issue_date != '' ? ` AND grey_report.grey_issue_date LIKE '%${search_grey_issue_date}%'` : '';
        const sea_purchase_tax_invoice_no = search_purchase_tax_invoice_no != '' ? ` AND tax_par.purchase_tax_invoice_no LIKE '%${search_purchase_tax_invoice_no}%'` : '';
        const sea_supplier_name = search_supplier_name != '' ? ` AND supplier.party_name LIKE '%${search_supplier_name}%'` : '';
        const sea_quality_name = search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_mill_name = search_mill_name != '' ? ` AND mill.mill_name LIKE '%${search_mill_name}%'` : '';
        const sea_grey_issue_taka = search_grey_issue_taka != '' ? ` AND grey_report.grey_issue_taka LIKE '%${search_grey_issue_taka}%'` : '';
        const sea_grey_issue_meter = search_grey_issue_meter != '' ? ` AND grey_report.grey_issue_meter LIKE '%${search_grey_issue_meter}%'` : '';
        const sea_grey_issue_weight = search_grey_issue_weight != '' ? ` AND grey_report.grey_issue_weight LIKE '%${search_grey_issue_weight}%'` : '';
        const sea_issue_lr_no = search_issue_lr_no != '' ? ` AND tax_par.purchase_tax_invoice_lr_no LIKE '%${search_issue_lr_no}%'` : '';
        const sea_purchase_tax_invoice_lr_no =  search_purchase_tax_invoice_lr_no != '' ? ` AND tax_par.purchase_tax_invoice_lr_no LIKE '%${search_purchase_tax_invoice_lr_no}%'` : '';
        const sea_quality_type_id = quality_type_id > 0 ? ` AND tax_par.quality_type_id='${quality_type_id}'` : '';
        const sea_quality_id = quality_id > 0 ? ` AND tax_child.quality_id= '${quality_id}'` : '';
        const sea_supplier_id = supplier_id > 0 ? ` AND tax_par.supplier_id= '${supplier_id}'` : '';
        const sea_mill_id = mill_id > 0 ? ` AND grey_report.mill_id= '${mill_id}'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(grey_report.grey_issue_date) >='${from_date}' AND DATE(grey_report.grey_issue_date) <='${to_date}'` : '';
        
        var getgreyissuereportlistingdata = `SELECT ${All_ID_Query} grey_report.grey_issue_prefix,grey_report.grey_issue_challan_no,grey_report.grey_issue_date,grey_report.grey_issue_taka,grey_report.grey_issue_meter,grey_report.grey_issue_weight,tax_par.purchase_tax_invoice_no,tax_par.purchase_tax_invoice_lr_no,tax_par.purchase_tax_invoice_lr_no as issue_lr_no,supplier.party_name as supplier_name,quality.quality_name,grey_report.grey_issue_remark,grey_report.grey_issue_job_type,mill.party_name as mill_name,tax_child.purchase_tax_invoice_child_unit_sent as purchase_tax_invoice_child_taka,tax_child.purchase_tax_invoice_child_unit_sent as grey_issue_taka_left,IF(tax_child.purchase_tax_invoice_quality_meter_average > 0,tax_child.purchase_tax_invoice_quality_meter_average,tax_child.purchase_tax_invoice_child_net_meter) as purchase_tax_invoice_child_meter,tax_child.purchase_tax_invoice_child_qty_sent as purchase_tax_invoice_child_weight,tax_child.purchase_tax_invoice_child_qty_sent as grey_issue_meter_left,tax_child.purchase_tax_invoice_child_unit_sent as grey_issue_weight_left,material.material_hsn as hsn_code,grey_report.is_rf,state.global_code as state_code,mill.state_id FROM erp_grey_issue as grey_report LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.id=grey_report.purchase_tax_invoice_child_id LEFT JOIN erp_purchase_tax_invoice as tax_par ON tax_par.id=tax_child.purchase_tax_invoice_id LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id LEFT JOIN erp_quality as quality ON quality.id=tax_child.quality_id LEFT JOIN erp_party as mill ON mill.id=grey_report.mill_id LEFT JOIN erp_material as material ON material.id=quality.material_id LEFT JOIN erp_global as state ON state.id=mill.state_id WHERE grey_report.user_id='${user_id}' AND grey_report.company_id<='${company_id}' AND grey_report.year_id<='${year_id}' AND grey_report.branch_id<='${branch_id}' AND grey_report.is_delete_status='0' AND tax_child.is_delete_status='0' AND tax_par.is_delete_status='0' ${sea_grey_issue_challan_no} ${sea_grey_issue_date} ${sea_purchase_tax_invoice_no} ${sea_supplier_name} ${sea_quality_name} ${sea_mill_name} ${sea_grey_issue_taka} ${sea_grey_issue_meter} ${sea_grey_issue_weight} ${sea_issue_lr_no} ${sea_purchase_tax_invoice_lr_no} ${sea_quality_type_id} ${sea_quality_id} ${sea_supplier_id} ${sea_mill_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getgreyissuereportlistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.grey_issue_date = constant.moment(element.grey_issue_date).format('YYYY-MM-DD');
                element.grey_issue_taka_left = (element.grey_issue_taka - element.grey_issue_taka_left);
                element.grey_issue_meter_left = (element.grey_issue_meter - element.grey_issue_meter_left);
                element.grey_issue_weight_left = (element.grey_issue_weight - element.grey_issue_weight_left);
                element.export = constant.DefaultExportopetions;
            });
            
            var totalgreyissuereportcount = `SELECT COUNT(tax_child.id) as Count FROM erp_grey_issue as grey_report LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.id=grey_report.purchase_tax_invoice_child_id LEFT JOIN erp_purchase_tax_invoice as tax_par ON tax_par.id=tax_child.purchase_tax_invoice_id LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id LEFT JOIN erp_quality as quality ON quality.id=tax_child.quality_id LEFT JOIN erp_party as mill ON mill.id=grey_report.mill_id LEFT JOIN erp_material as material ON material.id=quality.material_id LEFT JOIN erp_global as state ON state.id=mill.state_id WHERE grey_report.user_id='${user_id}' AND grey_report.company_id<='${company_id}' AND grey_report.year_id<='${year_id}' AND grey_report.branch_id<='${branch_id}' AND grey_report.is_delete_status='0' AND tax_child.is_delete_status='0' AND tax_par.is_delete_status='0' ${sea_grey_issue_challan_no} ${sea_grey_issue_date} ${sea_purchase_tax_invoice_no} ${sea_supplier_name} ${sea_quality_name} ${sea_mill_name} ${sea_grey_issue_taka} ${sea_grey_issue_meter} ${sea_grey_issue_weight} ${sea_issue_lr_no} ${sea_purchase_tax_invoice_lr_no} ${sea_quality_type_id} ${sea_quality_id} ${sea_supplier_id} ${sea_mill_id} ${date_range_query}`;
        
            conn.query(totalgreyissuereportcount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // DELETE Grey Issue DATA API //
     deletegreyissuedata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Grey Issue ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existgreyissuedata = `SELECT id as grey_issue_id,(SELECT COUNT(id) FROM erp_mill_receive WHERE grey_issue_id='${id}' AND is_delete_status='0') as mill_receive_id FROM erp_grey_issue WHERE id='${id}'`;

        conn.query(existgreyissuedata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.mill_receive_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Grey Issue In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletegreyissuedata = `CALL delete_grey_issue(?,?)`;
                    conn.query(deletegreyissuedata,[id,entry_date],(error,data) => {
                        if (error) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Grey Issue Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {     
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `Grey Issue Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Grey Issue`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Grey Issue Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    },
};


export default AllGreyIssueApis;
    
