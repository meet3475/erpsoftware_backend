import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllOpeningPurchaseApis = {
    // INSERT AND UPDATE OPENING PURCHASE DATA API //
    createopeningpurchase: (req,res,next) => {

        let body  = req?.body;
        let child_data = req?.body?.opening_child_data;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const supplier_id = body?.supplier_id ? body?.supplier_id : 0;
        const broker_id = body?.broker_id ? body?.broker_id : 0;
        const haste_id = body?.haste_id ? body?.haste_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;
        const godown_id = body?.godown_id ? body?.godown_id  : 0;
        const transporter_id = body?.transporter_id ? body?.transporter_id  : 0;
        const branch_id = body?.branch_id ? body?.branch_id  : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const year_id = body?.year_id ? body?.year_id  : 0;
        const opening_purchase_sub_order_no = body?.opening_purchase_sub_order_no ? body?.opening_purchase_sub_order_no.trim() : '';
        const opening_purchase_challan_no = body?.opening_purchase_challan_no ? body?.opening_purchase_challan_no.trim() : '';
        const opening_purchase_challan_date = body?.opening_purchase_challan_date ? body?.opening_purchase_challan_date.trim() : constant.moment().format('YYYY-MM-DD');
        const opening_purchase_delivery_days = body?.opening_purchase_delivery_days ? body?.opening_purchase_delivery_days.trim() : '';
        const opening_purchase_delivery_completion_date = body?.opening_purchase_delivery_completion_date ? body?.opening_purchase_delivery_completion_date : '';
        const opening_purchase_credit_days = body?.opening_purchase_credit_days ? body?.opening_purchase_credit_days.trim() : '';
        const opening_purchase_other_transporter = body?.opening_purchase_other_transporter ? body?.opening_purchase_other_transporter.trim().toLowerCase() : '';
        const opening_purchase_lr_no = body?.opening_purchase_lr_no ? body?.opening_purchase_lr_no.trim() : '';
        const opening_purchase_driver_name = body?.opening_purchase_driver_name ? body?.opening_purchase_driver_name.trim().toLowerCase() : '';
        const opening_purchase_driver_mobile_no = body?.opening_purchase_driver_mobile_no ? body?.opening_purchase_driver_mobile_no.trim() : '';
        const opening_purchase_driver_vehicle_no = body?.opening_purchase_driver_vehicle_no ? body?.opening_purchase_driver_vehicle_no.trim() : '';
        const opening_purchase_bela_marka = body?.opening_purchase_bela_marka ? body?.opening_purchase_bela_marka.trim() : '';
        const is_transporter_paid = body?.is_transporter_paid ? body?.is_transporter_paid : 0;
        const opening_purchase_remark = body?.opening_purchase_remark ? body?.opening_purchase_remark.trim().toLowerCase() : '';
        const opening_purchase_total_unit_sent = body?.opening_purchase_total_unit_sent ? body?.opening_purchase_total_unit_sent : 0;
        const opening_purchase_total_qty_sent = body?.opening_purchase_total_qty_sent ? body?.opening_purchase_total_qty_sent : 0;
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
            const updateopeningpurchase = `CALL create_opening_purchase(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updateopeningpurchase,[id,user_id,supplier_id,broker_id,haste_id,quality_type_id,godown_id,transporter_id,branch_id,company_id,year_id,opening_purchase_sub_order_no,opening_purchase_challan_no,opening_purchase_challan_date,opening_purchase_delivery_days,opening_purchase_delivery_completion_date,opening_purchase_credit_days,opening_purchase_other_transporter,opening_purchase_lr_no,opening_purchase_driver_name,opening_purchase_driver_mobile_no,opening_purchase_driver_vehicle_no,opening_purchase_bela_marka,is_transporter_paid,opening_purchase_remark,opening_purchase_total_unit_sent,opening_purchase_total_qty_sent,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'Party Updated',Data:[] });
                    next();

                    if (child_data && child_data.length > 0) 
                    {
                        // CALL OPENING PUCHASE CHILD API //
                        res?.send(AllOpeningPurchaseApis.createopeningpurchasechild(id,child_data,req?.headers));
                        next();
                    }
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `opening Purchase Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`opening Purchase`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createopeningpurchase = `CALL create_opening_purchase(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createopeningpurchase,[id,user_id,supplier_id,broker_id,haste_id,quality_type_id,godown_id,transporter_id,branch_id,company_id,year_id,opening_purchase_sub_order_no,opening_purchase_challan_no,opening_purchase_challan_date,opening_purchase_delivery_days,opening_purchase_delivery_completion_date,opening_purchase_credit_days,opening_purchase_other_transporter,opening_purchase_lr_no,opening_purchase_driver_name,opening_purchase_driver_mobile_no,opening_purchase_driver_vehicle_no,opening_purchase_bela_marka,is_transporter_paid,opening_purchase_remark,opening_purchase_total_unit_sent,opening_purchase_total_qty_sent,entry_date,update_date],(error,data) => {

                if (error || data[0].length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'opening Purchase Inserted',Data:data[0][0] });
                    next();
                    
                    if (child_data && child_data.length > 0) 
                    {
                        // CALL OPENING PUCHASE CHILD API //
                        res?.send(AllOpeningPurchaseApis.createopeningpurchasechild(data[0][0].opening_purchse_id,child_data,req?.headers));    
                    }
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `opening Purchase Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`opening Purchase`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET OPENING PURCHASE AND CHILD DETAILS DATA API //
    getopeningpurchasedetails: (req,res,next) => {

        const opening_purchase_id = req.body?.opening_purchase_id ? req.body?.opening_purchase_id : 0;

        if (opening_purchase_id.length == 0 || opening_purchase_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter opening PURCHASE ID',Data:[] });
            next();
            return;
        }

        var getopeningpurchasedetails = `CALL get_opening_purchase_details(?)`;
        conn.query(getopeningpurchasedetails,[opening_purchase_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].opening_purchase_challan_date = constant.moment(data[0][0].opening_purchase_challan_date).format('YYYY-MM-DD');
                data[0][0].opening_purchase_delivery_completion_date = constant.moment(data[0][0].opening_purchase_delivery_completion_date).format('YYYY-MM-DD');
                data[0][0].opening_purchase_total_unit_sent = (data[0][0].opening_purchase_total_unit_sent * 1).toFixed(3);
                data[0][0].opening_purchase_total_qty_sent = (data[0][0].opening_purchase_total_qty_sent * 1).toFixed(3);
                data[0][0].opening_child_data = data[1];

                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET OPENING PURCHASE AND CHILD LISTING DATA API //
    getopeningpurchaselistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'opening.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
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

        const search_opening_purchase_challan_no = search?.opening_purchase_challan_no ? search?.opening_purchase_challan_no : '';
        const search_opening_purchase_sub_order_no = search?.opening_purchase_sub_order_no ? search?.opening_purchase_sub_order_no : '';
        const search_opening_purchase_lr_no = search?.opening_purchase_lr_no ? search?.opening_purchase_lr_no.trim().toLowerCase() : '';
        const search_opening_purchase_challan_date = search?.opening_purchase_challan_date ? search?.opening_purchase_challan_date.trim().toLowerCase() : '';
        const search_opening_purchase_total_unit_sent = search?.opening_purchase_total_unit_sent ? search?.opening_purchase_total_unit_sent.trim().toLowerCase() : '';
        const search_opening_purchase_total_qty_sent = search?.opening_purchase_total_qty_sent ? search?.opening_purchase_total_qty_sent.trim().toLowerCase() : '';
        const search_quality_type = search?.quality_type ? search?.quality_type.trim().toLowerCase() : '';
        const search_supplier = search?.supplier ? search?.supplier.trim().toLowerCase() : '';

        const sea_opening_purchase_challan_no =  search_opening_purchase_challan_no != '' ? ` AND opening.opening_purchase_challan_no LIKE '%${search_opening_purchase_challan_no}%'` : '';
        const sea_opening_purchase_sub_order_no =  search_opening_purchase_sub_order_no != '' ? ` AND opening.opening_purchase_sub_order_no LIKE '%${search_opening_purchase_sub_order_no}%'` : '';

        const sea_opening_purchase_lr_no =  search_opening_purchase_lr_no != '' ? ` AND opening.opening_purchase_lr_no LIKE '%${search_opening_purchase_lr_no}%'` : '';
        const sea_opening_purchase_total_unit_sent =  search_opening_purchase_total_unit_sent != '' ? ` AND opening.opening_purchase_total_unit_sent LIKE '%${search_opening_purchase_total_unit_sent}%'` : '';
        const sea_opening_purchase_total_qty_sent =  search_opening_purchase_total_qty_sent != '' ? ` AND opening.opening_purchase_total_qty_sent LIKE '%${search_opening_purchase_total_qty_sent}%'` : '';
        const sea_quality_type =  search_quality_type != '' ? ` AND quality.type_name LIKE '%${search_quality_type}%'` : '';
        const sea_supplier =  search_supplier != '' ? ` AND supplier.party_name LIKE '%${search_supplier}%'` : '';
        const sea_opening_purchase_challan_date =  search_opening_purchase_challan_date != '' ? ` AND opening.opening_purchase_challan_date LIKE '%${search_opening_purchase_challan_date}%'` : '';
        const date_range_query = from_date != '' ? ` AND opening.opening_purchase_challan_date >='${from_date}' AND opening.opening_purchase_challan_date <='${to_date}'` : '';
        

        var getopeningpurchaselistingdata = `SELECT opening.id,opening.id as opening_purchase_id,opening.opening_purchase_challan_no,opening.opening_purchase_sub_order_no,opening.opening_purchase_lr_no,opening.opening_purchase_total_unit_sent,opening.opening_purchase_total_qty_sent,quality.type_name as quality_type,supplier.party_name as supplier,opening.opening_purchase_challan_date FROM erp_opening_purchase as opening LEFT JOIN erp_type as quality ON quality.id=opening.quality_type_id LEFT JOIN erp_party as supplier ON supplier.id=opening.supplier_id WHERE opening.user_id='${user_id}' AND opening.company_id<='${company_id}' AND opening.year_id<='${year_id}' AND opening.branch_id<='${branch_id}' ${sea_opening_purchase_challan_no} ${sea_opening_purchase_sub_order_no} ${sea_opening_purchase_lr_no} ${sea_opening_purchase_total_unit_sent} ${sea_opening_purchase_total_qty_sent} ${sea_quality_type} ${sea_supplier} ${sea_opening_purchase_challan_date} ${date_range_query} ORDER BY ${orderby} ${orderformat} LIMIT ${total_offset},${total_limit}`;

        conn.query(getopeningpurchaselistingdata,(error,data) => {
            
            if (error || data.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.opening_purchase_challan_date = constant.moment(element.opening_purchase_challan_date).format('YYYY-MM-DD');
            });
            
            var totalopeningpurchasecount = `SELECT COUNT(opening.id) as Count FROM erp_opening_purchase as opening LEFT JOIN erp_type as quality ON quality.id=opening.quality_type_id LEFT JOIN erp_party as supplier ON supplier.id=opening.supplier_id WHERE opening.user_id='${user_id}' AND opening.company_id<='${company_id}' AND opening.year_id<='${year_id}' AND opening.branch_id<='${branch_id}' ${sea_opening_purchase_challan_no} ${sea_opening_purchase_sub_order_no} ${sea_opening_purchase_lr_no} ${sea_opening_purchase_total_unit_sent} ${sea_opening_purchase_total_qty_sent} ${sea_quality_type} ${sea_supplier} ${sea_opening_purchase_challan_date} ${date_range_query} `;
        
            conn.query(totalopeningpurchasecount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data.length,TotalCount:countdata[0].Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // INSERT AND UPDATE OPENING PURCHASE CHILD DATA API //
    createopeningpurchasechild: (opening_id,req,headers) => {

        let body  = req;
        let header_data = headers;
    
        body.forEach( (data,index) => {

            const id = data?.id ? Number(data?.id) : 0;
            const user_id = data?.user_id ? data?.user_id : 0;
            const opening_purchase_id = opening_id ? opening_id : 0;
            const quality_id = data?.quality_id ? data?.quality_id : 0;
            const gst_id = data?.gst_id ? data?.gst_id : 0;
            const opening_purchase_child_remark = data?.opening_purchase_child_remark ? data?.opening_purchase_child_remark.trim().toLowerCase() : '';
            const opening_purchase_child_hsn = data?.opening_purchase_child_hsn ? data?.opening_purchase_child_hsn.trim() : '';
            const opening_purchase_child_qty_per = data?.opening_purchase_child_qty_per ? data?.opening_purchase_child_qty_per.trim() : '';
            const opening_purchase_child_cut = data?.opening_purchase_child_cut ? data?.opening_purchase_child_cut : 0;
            const opening_purchase_child_cut_meter = data?.opening_purchase_child_cut_meter ? data?.opening_purchase_child_cut_meter : 0;
            const opening_purchase_child_unit_sent = data?.opening_purchase_child_unit_sent ? data?.opening_purchase_child_unit_sent : 0;
            const opening_purchase_child_pkg = data?.opening_purchase_child_pkg ? data?.opening_purchase_child_pkg : 0;
            const opening_purchase_child_qty_sent = data?.opening_purchase_child_qty_sent ? data?.opening_purchase_child_qty_sent : 0;
            const opening_purchase_child_meter = data?.opening_purchase_child_meter ? data?.opening_purchase_child_meter : 0;
            const opening_purchase_child_fold = data?.opening_purchase_child_fold ? data?.opening_purchase_child_fold : 0;
            const opening_purchase_child_net_meter = data?.opening_purchase_child_net_meter ? data?.opening_purchase_child_net_meter : 0;
            const opening_purchase_child_rate = data?.opening_purchase_child_rate ? data?.opening_purchase_child_rate : 0;
            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

            if (id > 0) 
            {   
                const updateopeningpurchasechild = `CALL create_opening_purchase_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updateopeningpurchasechild,[id,user_id,opening_purchase_id,quality_id,gst_id,opening_purchase_child_remark,opening_purchase_child_hsn,opening_purchase_child_qty_per,opening_purchase_child_cut,opening_purchase_child_cut_meter,opening_purchase_child_unit_sent,opening_purchase_child_pkg,opening_purchase_child_qty_sent,opening_purchase_child_meter,opening_purchase_child_fold,opening_purchase_child_net_meter,opening_purchase_child_rate,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const login_ip = `opening Purchase Child Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`opening Purchase Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return({ Status:200,Count:0,Message:'opening Purchase Child Updated',Data:[] });
                    }  
                });
            }
            else
            {   
                const createopeningpurchasechild = `CALL create_opening_purchase_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createopeningpurchasechild,[id,user_id,opening_purchase_id,quality_id,gst_id,opening_purchase_child_remark,opening_purchase_child_hsn,opening_purchase_child_qty_per,opening_purchase_child_cut,opening_purchase_child_cut_meter,opening_purchase_child_unit_sent,opening_purchase_child_pkg,opening_purchase_child_qty_sent,opening_purchase_child_meter,opening_purchase_child_fold,opening_purchase_child_net_meter,opening_purchase_child_rate,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return { Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error };
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const login_ip = `opening Purchase Child Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails,[user_id],(error,userdata) => {
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`opening Purchase Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return { Status:200,Count:0,Message:'opening Purchase Child Inserted',Data:data[0] };
                    }  
                });
            }
        });
    },
};


export default AllOpeningPurchaseApis;
    
