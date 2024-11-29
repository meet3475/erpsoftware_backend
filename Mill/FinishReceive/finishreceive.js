import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllfinishreceiveApis = {
    
    // INSERT AND UPDATE finish recevice DATA API //
    createfinishreceive: (req,res,next) => {

        let body  = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const year_id = body?.year_id ? body?.year_id  : 0;
        const godown_id = body?.godown_id ? body?.godown_id  : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const mill_id = body?.mill_id ? body?.mill_id  : 0;
        const grey_issue_id = body?.grey_issue_id ? body?.grey_issue_id : 0;
        const mill_receive_mill_challan_no = body?.mill_receive_mill_challan_no ? body?.mill_receive_mill_challan_no : '';
        const mill_receive_date = body?.mill_receive_date ? body?.mill_receive_date : constant.moment().format('YYYY-MM-DD');
        const mill_receive_taka = body?.mill_receive_taka ? body?.mill_receive_taka : 0;
        const mill_receive_qty = body?.mill_receive_qty ? body?.mill_receive_qty : 0;
        const mill_receive_weight = body?.mill_receive_weight ? body?.mill_receive_weight : 0;
        const mill_grey_issue_taka = body?.mill_grey_issue_taka ? body?.mill_grey_issue_taka : 0;
        const mill_grey_issue_meter = body?.mill_grey_issue_meter ? body?.mill_grey_issue_meter : 0;
        const mill_grey_issue_weight = body?.mill_grey_issue_weight ? body?.mill_grey_issue_weight : 0;
        const mill_receive_width = body?.mill_receive_width ? body?.mill_receive_width : 0;
        const mill_receive_remark = body?.mill_receive_remark ? body?.mill_receive_remark.trim().toLowerCase() : '';
        const mill_receive_shortage = body?.mill_receive_shortage ? body?.mill_receive_shortage : 0;
        const mill_receive_mill_lot_no = body?.mill_receive_mill_lot_no ? body?.mill_receive_mill_lot_no : 0;
        const mill_receive_lot_completed = body?.mill_receive_lot_completed ? body?.mill_receive_lot_completed : 0;
        const is_grey_return = body?.is_grey_return ? body?.is_grey_return : 0;
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
            const updatefinishreceive = `CALL create_finish_receive(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatefinishreceive,[id,user_id,branch_id,company_id,year_id,godown_id,quality_id,mill_id,grey_issue_id,mill_receive_mill_challan_no,mill_receive_date,mill_receive_taka,mill_receive_qty,mill_receive_weight,mill_grey_issue_taka,mill_grey_issue_meter,mill_grey_issue_weight,mill_receive_width,mill_receive_remark,mill_receive_shortage,mill_receive_mill_lot_no,mill_receive_lot_completed,is_grey_return,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'finish recevice Updated',Data:[] });
                    next();
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `finish recevice Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`finish recevice`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {   
            const createfinishreceive = `CALL create_finish_receive(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createfinishreceive,[id,user_id,branch_id,company_id,year_id,godown_id,quality_id,mill_id,grey_issue_id,mill_receive_mill_challan_no,mill_receive_date,mill_receive_taka,mill_receive_qty,mill_receive_weight,mill_grey_issue_taka,mill_grey_issue_meter,mill_grey_issue_weight,mill_receive_width,mill_receive_remark,mill_receive_shortage,mill_receive_mill_lot_no,mill_receive_lot_completed,is_grey_return,entry_date,update_date],(error,data) => {

                if (error || data?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {   
                    data.forEach(element => {
                        element.mill_receive_date = constant.moment(element.mill_receive_date).format('YYYY-MM-DD');
                    });

                    res?.send({ Status:200,Count:0,Message:'finish recevice Inserted',Data:data[0] });
                    next();
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `finish recevice Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`finish recevice`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET finish recevice DETAILS DATA API //
    getfinishreceivedetails: (req,res,next) => {

        const finish_receive_id = req.body?.finish_receive_id ? req.body?.finish_receive_id : 0;

        if (finish_receive_id.length == 0 || finish_receive_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter finish recevice ID',Data:[] });
            next();
            return;
        }

        var getfinishreceivedetails = `CALL get_finish_receive_details(?)`;
        conn.query(getfinishreceivedetails,[finish_receive_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].mill_receive_date = constant.moment(data[0][0].mill_receive_date).format('YYYY-MM-DD');

                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET finish recevice LISTING DATA API //
    getfinishreceivelistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const mill_id = body?.mill_id ? body?.mill_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'grey.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`grey.id as grey_issue_id,grey.mill_id,tax_child.quality_id,tax_child.quality_id as grey_quality_id,`;

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
        const search_purchase_tax_invoice_no = search?.purchase_tax_invoice_no ? search?.purchase_tax_invoice_no : '';
        const search_purchase_tax_invoice_lr_no = search?.purchase_tax_invoice_lr_no ? search?.purchase_tax_invoice_lr_no : '';
        const search_grey_issue_date = search?.grey_issue_date ? search?.grey_issue_date : '';
        const search_quality_name = search?.quality_name ? search?.quality_name.trim().toLowerCase() : '';
        const search_mill_name = search?.mill_name ? search?.mill_name.trim().toLowerCase() : '';
        const search_grey_issue_taka = search?.grey_issue_taka ? search?.grey_issue_taka : '';
        const search_grey_issue_meter = search?.grey_issue_meter ? search?.grey_issue_meter : '';
        const search_grey_issue_mill_lot_no = search?.grey_issue_mill_lot_no ? search?.grey_issue_mill_lot_no : '';
        const search_due_taka = search?.due_taka ? search?.due_taka : '';
        const search_due_meter = search?.due_meter ? search?.due_meter : '';
        const search_grey_issue_weight = search?.grey_issue_weight ? search?.grey_issue_weight : '';
        const search_purchase_tax_invoice_child_rate = search?.purchase_tax_invoice_child_rate ? search?.purchase_tax_invoice_child_rate : '';
        const search_purchase_tax_invoice_child_total = search?.purchase_tax_invoice_child_total ? search?.purchase_tax_invoice_child_total : '';
        const search_grey_issue_remark = search?.grey_issue_remark ? search?.grey_issue_remark.trim().toLowerCase() : '';
        
        const sea_grey_issue_challan_no = search_grey_issue_challan_no != '' ? ` AND grey.grey_issue_challan_no LIKE '%${search_grey_issue_challan_no}%'` : '';
        const sea_purchase_tax_invoice_no = search_purchase_tax_invoice_no != '' ? ` AND tax_par.purchase_tax_invoice_no LIKE '%${search_purchase_tax_invoice_no}%'` : '';
        const sea_purchase_tax_invoice_lr_no = search_purchase_tax_invoice_lr_no != '' ? ` AND tax_par.purchase_tax_invoice_lr_no LIKE '%${search_purchase_tax_invoice_lr_no}%'` : '';
        const sea_grey_issue_date = search_grey_issue_date != '' ? ` AND grey.grey_issue_date LIKE '%${search_grey_issue_date}%'` : '';
        const sea_quality_name = search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_mill_name = search_mill_name != '' ? ` AND mill.party_name LIKE '%${search_mill_name}%'` : '';
        const sea_grey_issue_taka = search_grey_issue_taka != '' ? ` AND grey.grey_issue_taka LIKE '%${search_grey_issue_taka}%'` : '';
        const sea_grey_issue_meter = search_grey_issue_meter != '' ? ` AND grey.grey_issue_meter LIKE '%${search_grey_issue_meter}%'` : '';
        const sea_grey_issue_mill_lot_no = search_grey_issue_mill_lot_no != '' ? ` AND grey.purchase_tax_invoice_child_qty_sent LIKE '%${search_grey_issue_mill_lot_no}%'` : '';
        const sea_due_taka = search_due_taka != '' ? ` AND grey.grey_issue_taka LIKE '%${search_due_taka}%'` : '';
        const sea_due_meter = search_due_meter != '' ? ` AND grey.grey_issue_meter LIKE '%${search_due_meter}%'` : '';
        const sea_grey_issue_weight = search_grey_issue_weight != '' ? ` AND grey.grey_issue_weight LIKE '%${search_grey_issue_weight}%'` : '';
        const sea_purchase_tax_invoice_child_rate = search_purchase_tax_invoice_child_rate != '' ? ` AND tax_child.purchase_tax_invoice_child_rate LIKE '%${search_purchase_tax_invoice_child_rate}%'` : '';
        const sea_purchase_tax_invoice_child_total = search_purchase_tax_invoice_child_total != '' ? ` AND tax_child.purchase_tax_invoice_child_total LIKE '%${search_purchase_tax_invoice_child_total}%'` : '';
        const sea_grey_issue_remark = search_grey_issue_remark != '' ? ` AND grey.grey_issue_remark LIKE '%${search_grey_issue_remark}%'` : '';
        const sea_quality_type_id = quality_type_id > 0 ? ` AND tax_par.quality_type_id='${quality_type_id}'` : '';
        const sea_quality_id = quality_id > 0 ? ` AND tax_child.quality_id= '${quality_id}'` : '';
        const sea_mill_id = mill_id > 0 ? ` AND grey.mill_id= '${mill_id}'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(grey.grey_issue_date) >='${from_date}' AND DATE(grey.grey_issue_date) <='${to_date}'` : '';
        
        var getfinishreceivelistingdata = `SELECT ${All_ID_Query} grey.grey_issue_challan_no,tax_par.purchase_tax_invoice_no,tax_par.purchase_tax_invoice_lr_no,grey.grey_issue_date,quality.quality_name,mill.party_name as mill_name,grey.grey_issue_taka,grey.grey_issue_meter,grey.grey_issue_weight,grey.grey_issue_mill_lot_no,(grey.grey_issue_taka - COALESCE((SELECT SUM(mill_receive_taka) as mill_receive_taka FROM erp_mill_receive WHERE grey_issue_id=grey.id AND is_delete_status='0'),0)) as due_taka,(grey.grey_issue_meter - COALESCE((SELECT SUM(mill_receive_qty) as mill_receive_qty FROM erp_mill_receive WHERE grey_issue_id=grey.id AND is_delete_status='0'),0)) as due_meter,(grey.grey_issue_weight - COALESCE((SELECT SUM(mill_receive_weight) as mill_receive_weight FROM erp_mill_receive WHERE grey_issue_id=grey.id AND is_delete_status='0'),0)) as due_weight,tax_child.purchase_tax_invoice_child_rate,tax_child.purchase_tax_invoice_child_rate_per,tax_child.purchase_tax_invoice_child_total,grey.grey_issue_remark,(SELECT mill_receive_mill_lot_no FROM erp_mill_receive WHERE grey_issue_id=grey.id AND is_delete_status='0' ORDER BY id DESC LIMIT 1) as last_mill_lot_no,tax_child.purchase_tax_invoice_quality_meter_average as approx_meter,tax_child.purchase_tax_invoice_child_rate_per as rate_per,quality.quality_meter,state.global_code as state_code,mill.state_id FROM erp_grey_issue as grey LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.id=grey.purchase_tax_invoice_child_id LEFT JOIN erp_purchase_tax_invoice as tax_par ON tax_par.id=tax_child.purchase_tax_invoice_id LEFT JOIN erp_quality as quality ON quality.id=tax_child.quality_id LEFT JOIN erp_party as mill ON mill.id=grey.mill_id LEFT JOIN erp_global as state ON state.id=mill.state_id WHERE grey.user_id='${user_id}' AND grey.company_id<='${company_id}' AND grey.year_id<='${year_id}' AND grey.branch_id<='${branch_id}' AND grey.is_delete_status='0' AND tax_child.is_delete_status='0' AND tax_par.is_delete_status='0' ${sea_grey_issue_challan_no} ${sea_purchase_tax_invoice_no} ${sea_purchase_tax_invoice_lr_no} ${sea_grey_issue_date} ${sea_quality_name} ${sea_mill_name} ${sea_grey_issue_taka} ${sea_grey_issue_meter} ${sea_grey_issue_mill_lot_no} ${sea_due_taka} ${sea_due_meter} ${sea_grey_issue_weight} ${sea_purchase_tax_invoice_child_rate} ${sea_purchase_tax_invoice_child_total} ${sea_grey_issue_remark} ${sea_quality_type_id} ${sea_quality_id} ${sea_mill_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;
       
        conn.query(getfinishreceivelistingdata,(error,data) => {
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.purchase_tax_invoice_child_rate_per = Number(element.purchase_tax_invoice_child_rate_per);
                element.grey_issue_date = constant.moment(element.grey_issue_date).format('YYYY-MM-DD');
                element.due_taka = (element.due_taka).toFixed(2);
                element.due_meter = (element.due_meter).toFixed(2);
                element.export = constant.DefaultExportopetions;
            });
            
            var totalfinishreceivecount = `SELECT COUNT(grey.id) as Count FROM erp_grey_issue as grey LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.id=grey.purchase_tax_invoice_child_id LEFT JOIN erp_purchase_tax_invoice as tax_par ON tax_par.id=tax_child.purchase_tax_invoice_id LEFT JOIN erp_quality as quality ON quality.id=tax_child.quality_id LEFT JOIN erp_party as mill ON mill.id=grey.mill_id LEFT JOIN erp_global as state ON state.id=mill.state_id WHERE grey.user_id='${user_id}' AND grey.company_id<='${company_id}' AND grey.year_id<='${year_id}' AND grey.branch_id<='${branch_id}' AND grey.grey_issue_taka > COALESCE((SELECT SUM(mill_receive_taka) as mill_receive_taka FROM erp_mill_receive WHERE grey_issue_id=grey.id AND is_delete_status='0'),0) AND grey.grey_issue_meter > COALESCE((SELECT SUM(mill_receive_qty) as mill_receive_qty FROM erp_mill_receive WHERE grey_issue_id=grey.id AND is_delete_status='0'),0) AND grey.is_delete_status='0' AND tax_child.is_delete_status='0' AND tax_par.is_delete_status='0' ${sea_grey_issue_challan_no} ${sea_purchase_tax_invoice_no} ${sea_purchase_tax_invoice_lr_no} ${sea_grey_issue_date} ${sea_quality_name} ${sea_mill_name} ${sea_grey_issue_taka} ${sea_grey_issue_meter} ${sea_grey_issue_mill_lot_no} ${sea_due_taka} ${sea_due_meter} ${sea_grey_issue_weight} ${sea_purchase_tax_invoice_child_rate} ${sea_purchase_tax_invoice_child_total} ${sea_grey_issue_remark} ${sea_quality_type_id} ${sea_quality_id} ${sea_mill_id} ${date_range_query}`;
        
            conn.query(totalfinishreceivecount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // GET finish recevice REPORT LISTING DATA API //
    getfinishreceivereportlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const mill_id = body?.mill_id ? body?.mill_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'finish.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`finish.id as finish_receive_id,finish.mill_id,grey.quality_id,finish.quality_id as receive_quality_id,finish.grey_issue_id,`;

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

        const search_mill_receive_mill_challan_no = search?.mill_receive_mill_challan_no ? search?.mill_receive_mill_challan_no : '';
        const search_quality_type = search?.quality_type ? search?.quality_type : '';
        const search_mill_receive_date = search?.mill_receive_date ? search?.mill_receive_date : '';
        const search_issue_quality = search?.issue_quality ? search?.issue_quality : '';
        const search_receive_quality = search?.receive_quality ? search?.receive_quality : '';
        const search_mill_name = search?.mill_name ? search?.mill_name.trim().toLowerCase() : '';
        const search_mill_grey_issue_taka = search?.mill_grey_issue_taka ? search?.mill_grey_issue_taka : '';
        const search_mill_grey_issue_weight = search?.mill_grey_issue_weight ? search?.mill_grey_issue_weight : '';
        const search_mill_receive_taka = search?.mill_receive_taka ? search?.mill_receive_taka : '';
        const search_mill_receive_qty = search?.mill_receive_qty ? search?.mill_receive_qty : '';
        const search_grey_issue_challan_no = search?.grey_issue_challan_no ? search?.grey_issue_challan_no : '';
        const search_grey_issue_meter = search?.grey_issue_meter ? search?.grey_issue_meter : '';
        const search_grey_issue_weight = search?.grey_issue_weight ? search?.grey_issue_weight : '';
        const search_grey_issue_taka = search?.grey_issue_taka ? search?.grey_issue_taka : '';      
        const search_grey_issue_mill_lot_no = search?.grey_issue_mill_lot_no ? search?.grey_issue_mill_lot_no : '';
        const search_purchase_tax_invoice_lr_no = search?.purchase_tax_invoice_lr_no ? search?.purchase_tax_invoice_lr_no : '';
        const search_supplier_name = search?.supplier_name ? search?.supplier_name.trim().toLowerCase() : '';
        
       
        const sea_mill_receive_mill_challan_no = search_mill_receive_mill_challan_no != '' ? ` AND finish.mill_receive_mill_challan_no LIKE '%${search_mill_receive_mill_challan_no}%'` : '';
        const sea_quality_type = search_quality_type != '' ? ` AND quality_type.type_name LIKE '%${search_quality_type}%'` : '';
        const sea_mill_receive_date = search_mill_receive_date != '' ? ` AND finish.mill_receive_date LIKE '%${search_mill_receive_date}%'` : '';
        const sea_issue_quality = search_issue_quality != '' ? ` AND iss_quality.quality_name LIKE '%${search_issue_quality}%'` : '';
        const sea_receive_quality = search_receive_quality != '' ? ` AND rec_quality.quality_name LIKE '%${search_receive_quality}%'` : '';
        const sea_mill_name = search_mill_name != '' ? ` AND mill.party_name LIKE '%${search_mill_name}%'` : '';
        const sea_mill_grey_issue_taka = search_mill_grey_issue_taka != '' ? ` AND finish.mill_grey_issue_taka LIKE '%${search_mill_grey_issue_taka}%'` : '';
        const sea_mill_grey_issue_weight = search_mill_grey_issue_weight != '' ? ` AND finish.mill_grey_issue_weight LIKE '%${search_mill_grey_issue_weight}%'` : '';
        const sea_mill_receive_taka = search_mill_receive_taka != '' ? ` AND finish.mill_receive_taka LIKE '%${search_mill_receive_taka}%'` : '';
        const sea_mill_receive_qty = search_mill_receive_qty != '' ? ` AND finish.mill_receive_qty LIKE '%${search_mill_receive_qty}%'` : '';
        const sea_grey_issue_challan_no = search_grey_issue_challan_no != '' ? ` AND grey.grey_issue_challan_no LIKE '%${search_grey_issue_challan_no}%'` : '';
        const sea_grey_issue_taka = search_grey_issue_taka != '' ? ` AND grey.grey_issue_taka LIKE '%${search_grey_issue_taka}%'` : '';
        const sea_grey_issue_meter = search_grey_issue_meter != '' ? ` AND grey.grey_issue_meter LIKE '%${search_grey_issue_meter}%'` : '';
        const sea_grey_issue_weight = search_grey_issue_weight != '' ? ` AND grey.grey_issue_weight LIKE '%${search_grey_issue_weight}%'` : '';
        const sea_grey_issue_mill_lot_no = search_grey_issue_mill_lot_no != '' ? ` AND grey.grey_issue_mill_lot_no LIKE '%${search_grey_issue_mill_lot_no}%'` : '';
        const sea_purchase_tax_invoice_lr_no = search_purchase_tax_invoice_lr_no != '' ? ` AND tax_par.purchase_tax_invoice_lr_no LIKE '%${search_purchase_tax_invoice_lr_no}%'` : '';
        const sea_supplier_name = search_supplier_name != '' ? ` AND supplier.party_name LIKE '%${search_supplier_name}%'` : '';
        const sea_quality_type_id = quality_type_id > 0 ? ` AND tax_par.quality_type_id='${quality_type_id}'` : '';
        const sea_quality_id = quality_id > 0 ? ` AND tax_child.quality_id= '${quality_id}'` : '';
        const sea_mill_id = mill_id > 0 ? ` AND finish.mill_id= '${mill_id}'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(finish.mill_receive_date) >='${from_date}' AND DATE(finish.mill_receive_date) <='${to_date}'` : '';
        
        var getfinishreceivereportlistingdata = `SELECT ${All_ID_Query} finish.mill_receive_mill_challan_no,quality_type.type_name as quality_type,finish.mill_receive_date,iss_quality.quality_name as issue_quality,rec_quality.quality_name as receive_quality,mill.party_name as mill_name,finish.mill_receive_taka,finish.mill_receive_qty,grey.grey_issue_challan_no,finish.mill_grey_issue_taka,finish.mill_grey_issue_meter,finish.mill_grey_issue_weight,grey.grey_issue_mill_lot_no,tax_par.purchase_tax_invoice_lr_no,supplier.party_name as supplier_name,finish.mill_receive_weight,mill_receive_width,mill_receive_remark,mill_receive_shortage,mill_receive_mill_lot_no,mill_receive_lot_completed,is_grey_return,grey.grey_issue_taka,grey.grey_issue_meter,grey.grey_issue_weight,grey.grey_issue_date,state.global_code as state_code,mill.state_id FROM erp_mill_receive as finish LEFT JOIN erp_grey_issue as grey ON grey.id=finish.grey_issue_id LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.id=grey.purchase_tax_invoice_child_id LEFT JOIN erp_purchase_tax_invoice as tax_par ON tax_par.id=tax_child.purchase_tax_invoice_id LEFT JOIN erp_type as quality_type ON quality_type.id=tax_par.quality_type_id LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id LEFT JOIN erp_quality as iss_quality ON iss_quality.id=grey.quality_id LEFT JOIN erp_quality as rec_quality ON rec_quality.id=finish.quality_id LEFT JOIN erp_party as mill ON mill.id=finish.mill_id LEFT JOIN erp_global as state ON state.id=mill.state_id WHERE finish.user_id='${user_id}' AND finish.company_id<='${company_id}' AND finish.year_id<='${year_id}' AND finish.branch_id<='${branch_id}' AND finish.is_delete_status='0' AND grey.is_delete_status='0' AND tax_child.is_delete_status='0' AND tax_par.is_delete_status='0' ${sea_mill_receive_mill_challan_no} ${sea_quality_type} ${sea_mill_receive_date} ${sea_issue_quality} ${sea_receive_quality} ${sea_mill_name} ${sea_mill_grey_issue_taka} ${sea_mill_grey_issue_weight} ${sea_mill_receive_taka} ${sea_mill_receive_qty} ${sea_grey_issue_challan_no} ${sea_grey_issue_taka} ${sea_grey_issue_meter} ${sea_grey_issue_weight} ${sea_grey_issue_mill_lot_no} ${sea_purchase_tax_invoice_lr_no} ${sea_supplier_name} ${sea_quality_type_id} ${sea_quality_id} ${sea_mill_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getfinishreceivereportlistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.mill_receive_date = constant.moment(element.mill_receive_date).format('YYYY-MM-DD');
                element.grey_issue_date = constant.moment(element.grey_issue_date).format('YYYY-MM-DD');
                element.export = constant.DefaultExportopetions;
            });
            
            var totalfinishreceivereportcount = `SELECT COUNT(finish.id) as Count FROM erp_mill_receive as finish LEFT JOIN erp_grey_issue as grey ON grey.id=finish.grey_issue_id LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.id=grey.purchase_tax_invoice_child_id LEFT JOIN erp_purchase_tax_invoice as tax_par ON tax_par.id=tax_child.purchase_tax_invoice_id LEFT JOIN erp_type as quality_type ON quality_type.id=tax_par.quality_type_id LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id LEFT JOIN erp_quality as iss_quality ON iss_quality.id=grey.quality_id LEFT JOIN erp_quality as rec_quality ON rec_quality.id=finish.quality_id LEFT JOIN erp_party as mill ON mill.id=finish.mill_id LEFT JOIN erp_global as state ON state.id=mill.state_id WHERE finish.user_id='${user_id}' AND finish.company_id<='${company_id}' AND finish.year_id<='${year_id}' AND finish.branch_id<='${branch_id}' AND finish.is_delete_status='0' AND grey.is_delete_status='0' AND tax_child.is_delete_status='0' AND tax_par.is_delete_status='0' ${sea_mill_receive_mill_challan_no} ${sea_quality_type} ${sea_mill_receive_date} ${sea_issue_quality} ${sea_receive_quality} ${sea_mill_name} ${sea_mill_grey_issue_taka} ${sea_mill_grey_issue_weight} ${sea_mill_receive_taka} ${sea_mill_receive_qty} ${sea_grey_issue_challan_no} ${sea_grey_issue_taka} ${sea_grey_issue_meter} ${sea_grey_issue_weight} ${sea_grey_issue_mill_lot_no} ${sea_purchase_tax_invoice_lr_no} ${sea_supplier_name} ${sea_quality_type_id} ${sea_quality_id} ${sea_mill_id} ${date_range_query}`;
        
            conn.query(totalfinishreceivereportcount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // DELETE Mill Receive DATA API //
    deletemillreceivedata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Mill Receive ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existmillreceivedata = `SELECT id as mill_receive_id,(SELECT COUNT(id) FROM erp_mill_tax_invoice WHERE mill_receive_id='${id}' AND is_delete_status='0') as mill_tax_invoice_id,(SELECT COUNT(id) FROM erp_mill_tax_invoice_child WHERE mill_receive_id='${id}' AND is_delete_status='0') as mill_tax_invoice_child_id FROM erp_mill_receive WHERE id='${id}'`;

        conn.query(existmillreceivedata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.mill_tax_invoice_id > 0 || data[0]?.mill_tax_invoice_child_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Mill Receive In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletemillreceivedata = `CALL delete_mill_receive(?,?)`;
                    conn.query(deletemillreceivedata,[id,entry_date],(error,data) => {
                        if (error) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Mill Receive Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {     
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `Mill Receive Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Mill Receive`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Mill Receive Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    },
};


export default AllfinishreceiveApis;
    
