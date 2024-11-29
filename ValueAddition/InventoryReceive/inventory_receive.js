import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllInventoryReceiveApis = {
    
    // INSERT AND UPDATE inventory receive DATA API //
    createinventoryreceive: (req,res,next) => {

        let body  = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id  : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const year_id = body?.year_id ? body?.year_id  : 0;
        const godown_id = body?.godown_id ? body?.godown_id  : 0;
        const inventory_id = body?.inventory_id ? body?.inventory_id : 0;
        const inventory_child_id = body?.inventory_child_id ? body?.inventory_child_id : 0;
        const receive_quality_id = body?.receive_quality_id ? body?.receive_quality_id : 0;
        const jober_id = body?.jober_id ? body?.jober_id : 0;
        const inventory_receive_no = body?.inventory_receive_no ? body?.inventory_receive_no : '';
        const inventory_receive_challan_no = body?.inventory_receive_challan_no ? body?.inventory_receive_challan_no : '';
        const inventory_receive_challan_date = body?.inventory_receive_challan_date ? body?.inventory_receive_challan_date : constant.moment().format('YYYY-MM-DD');
        const inventory_receive_lot_no = body?.inventory_receive_lot_no ? body?.inventory_receive_lot_no : '';
        const inventory_receive_unit_sent = body?.inventory_receive_unit_sent ? body?.inventory_receive_unit_sent : 0;
        const inventory_receive_grey_qty = body?.inventory_receive_grey_qty ? body?.inventory_receive_grey_qty : 0;
        const inventory_receive_qty_sent = body?.inventory_receive_qty_sent ? body?.inventory_receive_qty_sent : 0;
        const inventory_receive_meter = body?.inventory_receive_meter ? body?.inventory_receive_meter : 0;
        const inventory_receive_shortage = body?.inventory_receive_shortage ? body?.inventory_receive_shortage : 0;
        const inventory_receive_remark = body?.inventory_receive_remark ? body?.inventory_receive_remark : 0;
        const is_receive_completed = body?.is_receive_completed ? body?.is_receive_completed : 0;
        const is_return = body?.is_return ? body?.is_return : 0;
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
            const updateinventoryreceive = `CALL create_inventory_receive(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updateinventoryreceive,[id,user_id,branch_id,company_id,year_id,godown_id,inventory_id,inventory_child_id,receive_quality_id,jober_id,inventory_receive_no,inventory_receive_challan_no,inventory_receive_challan_date,inventory_receive_lot_no,inventory_receive_unit_sent,inventory_receive_grey_qty,inventory_receive_qty_sent,inventory_receive_meter,inventory_receive_shortage,inventory_receive_remark,is_receive_completed,is_return,entry_date,update_date],(error,data) => {
                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'inventory receive Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'inventory receive Updated',Data:[] });
                    next();
                                 
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `inventory receive Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`inventory receive`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createinventoryreceive = `CALL create_inventory_receive(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createinventoryreceive,[id,user_id,branch_id,company_id,year_id,godown_id,inventory_id,inventory_child_id,receive_quality_id,jober_id,inventory_receive_no,inventory_receive_challan_no,inventory_receive_challan_date,inventory_receive_lot_no,inventory_receive_unit_sent,inventory_receive_grey_qty,inventory_receive_qty_sent,inventory_receive_meter,inventory_receive_shortage,inventory_receive_remark,is_receive_completed,is_return,entry_date,update_date],(error,data) => {
                if (error || data[0].length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'inventory receive Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {   
                    data[0][0].inventory_receive_challan_date = constant.moment(data[0][0].inventory_receive_challan_date).format('YYYY-MM-DD');
                    res?.send({ Status:200,Count:0,Message:'inventory receive Inserted',Data:data[0][0] });
                    next();
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `inventory receive Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`inventory receive`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET Inventory Receive DETAILS DATA API //
    getinventoryreceivedetails: (req,res,next) => {

        const inventory_receive_id = req.body?.inventory_receive_id ? req.body?.inventory_receive_id : 0;

        if (inventory_receive_id?.length == 0 || inventory_receive_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter inventory receive ID',Data:[] });
            next();
            return;
        }

        var getinventoryreceivedetails = `CALL get_inventory_receive_details(?)`;
        conn.query(getinventoryreceivedetails,[inventory_receive_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].inventory_receive_challan_date = constant.moment(data[0][0].inventory_receive_challan_date).format('YYYY-MM-DD');
                
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET inventory receive LISTING DATA API //
    getinventoryreceivelistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'parent.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`parent.id,parent.id as inventory_id,inventory_child.id as inventory_child_id,inventory_child.quality_id,parent.jober_id,parent.broker_id,`;

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

        const search_inventory_lf_no = search?.inventory_lf_no ? search?.inventory_lf_no : '';
        const search_inventory_challan_no = search?.inventory_challan_no ? search?.inventory_challan_no.trim() : '';
        const search_inventory_challan_date = search?.inventory_challan_date ? search?.inventory_challan_date.trim() : '';
        const search_quality_name = search?.quality_name ? search?.quality_name.trim().toLowerCase() : '';
        const search_jober_name = search?.jober_name ? search?.jober_name.trim().toLowerCase() : '';
        const search_broker_name = search?.broker_name ? search?.broker_name.trim().toLowerCase() : '';
        const search_inventory_child_unit_sent = search?.inventory_child_unit_sent ? search?.inventory_child_unit_sent.trim() : '';
        const search_inventory_child_qty_sent = search?.inventory_child_qty_sent ? search?.inventory_child_qty_sent.trim() : '';
        const search_inventory_child_net_meter = search?.inventory_child_net_meter ? search?.inventory_child_net_meter : '';
        const search_inventory_remark = search?.inventory_remark ? search?.inventory_remark : '';
        const search_inventory_child_remark = search?.inventory_child_remark ? search?.inventory_child_remark : '';
        const search_order_no_id = search?.order_no_id ? search?.order_no_id : '';
        
        
        const sea_inventory_lf_no = search_inventory_lf_no != '' ? ` AND parent.inventory_lf_no LIKE '%${search_inventory_lf_no}%'` : '';
        const sea_inventory_challan_no = search_inventory_challan_no != '' ? ` AND parent.inventory_challan_no LIKE '%${search_inventory_challan_no}%'` : '';
        const sea_inventory_challan_date = search_inventory_challan_date != '' ? ` AND parent.inventory_challan_date LIKE '%${search_inventory_challan_date}%'` : '';
        const sea_quality_name = search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_jober_name = search_jober_name != '' ? ` AND jober.party_name LIKE '%${search_jober_name}%'` : '';
        const sea_broker_name = search_broker_name != '' ? ` AND broker.party_name LIKE '%${search_broker_name}%'` : '';
        const sea_inventory_child_unit_sent = search_inventory_child_unit_sent != '' ? ` AND inventory_child.inventory_child_unit_sent LIKE '%${search_inventory_child_unit_sent}%'` : '';
        const sea_inventory_child_qty_sent = search_inventory_child_qty_sent != '' ? ` AND inventory_child.inventory_child_qty_sent LIKE '%${search_inventory_child_qty_sent}%'` : '';
        const sea_inventory_child_net_meter = search_inventory_child_net_meter != '' ? ` AND inventory_child.inventory_child_net_meter LIKE '%${search_inventory_child_net_meter}%'` : '';
        const sea_inventory_remark = search_inventory_remark != '' ? ` AND parent.inventory_remark LIKE '%${search_inventory_remark}%'` : '';
        const sea_inventory_child_remark = search_inventory_child_remark != '' ? ` AND inventory_child.inventory_child_remark LIKE '%${search_inventory_child_remark}%'` : '';
        const sea_order_no_id = search_order_no_id != '' ? ` AND parent.order_no_id LIKE '%${search_order_no_id}%'` : '';
        const date_range_query = from_date != '' ? ` AND parent.inventory_challan_date >='${from_date}' AND parent.inventory_challan_date <='${to_date}'` : '';
        

        var getinventorylistingdata = `SELECT ${All_ID_Query} parent.inventory_lf_no,parent.inventory_challan_no,parent.inventory_challan_date,quality.quality_name,jober.party_name as jober_name,broker.party_name as broker_name,inventory_child.inventory_child_unit_sent,inventory_child.inventory_child_qty_sent,inventory_child.inventory_child_net_meter,parent.inventory_remark,inventory_child.inventory_child_remark,parent.order_no_id,inventory_child.inventory_child_unit_sent - (SELECT COALESCE(SUM(inventory_receive_unit_sent),0) FROM erp_inventory_receive WHERE inventory_child_id=inventory_child.id AND is_delete_status='0') as due_unit,inventory_child.inventory_child_qty_sent - (SELECT COALESCE(SUM(inventory_receive_qty_sent),0) FROM erp_inventory_receive WHERE inventory_child_id=inventory_child.id AND is_delete_status='0') as due_qty FROM erp_inventory as parent LEFT JOIN erp_party as jober ON jober.id=parent.jober_id LEFT JOIN erp_party as broker ON broker.id=parent.broker_id LEFT JOIN erp_inventory_child as inventory_child ON inventory_child.inventory_id=parent.id LEFT JOIN erp_quality as quality ON quality.id=inventory_child.quality_id WHERE parent.is_delete_status='0' AND parent.user_id='${user_id}' AND parent.company_id<='${company_id}' AND parent.year_id<='${year_id}' AND parent.branch_id<='${branch_id}' AND (SELECT COUNT(id) as id FROM erp_inventory_receive WHERE inventory_child_id=inventory_child.id AND is_receive_completed='1') = '0' AND jober.is_delete_status='0' AND broker.is_delete_status='0' AND inventory_child.is_delete_status='0' AND quality.is_delete_status='0' ${sea_inventory_lf_no} ${sea_inventory_challan_no} ${sea_inventory_challan_date} ${sea_quality_name} ${sea_jober_name} ${sea_broker_name} ${sea_inventory_child_unit_sent} ${sea_inventory_child_qty_sent} ${sea_inventory_child_net_meter} ${sea_inventory_remark} ${sea_inventory_child_remark} ${sea_order_no_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`; 

        conn.query(getinventorylistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }

            data?.forEach(element => {
                element.inventory_challan_date = constant.moment(element.inventory_challan_date).format('YYYY-MM-DD');
            });
            
            var totalinventorycount = `SELECT COUNT(parent.id) as Count FROM erp_inventory as parent LEFT JOIN erp_party as jober ON jober.id=parent.jober_id LEFT JOIN erp_party as broker ON broker.id=parent.broker_id LEFT JOIN erp_inventory_child as inventory_child ON inventory_child.inventory_id=parent.id LEFT JOIN erp_quality as quality ON quality.id=inventory_child.quality_id WHERE parent.is_delete_status='0' AND parent.user_id='${user_id}' AND parent.company_id<='${company_id}' AND parent.year_id<='${year_id}' AND parent.branch_id<='${branch_id}' AND (SELECT COUNT(id) as id FROM erp_inventory_receive WHERE inventory_child_id=inventory_child.id AND is_receive_completed='1') = '0' AND jober.is_delete_status='0' AND broker.is_delete_status='0' AND inventory_child.is_delete_status='0' AND quality.is_delete_status='0' ${sea_inventory_lf_no} ${sea_inventory_challan_no} ${sea_inventory_challan_date} ${sea_quality_name} ${sea_jober_name} ${sea_broker_name} ${sea_inventory_child_unit_sent} ${sea_inventory_child_qty_sent} ${sea_inventory_child_net_meter} ${sea_inventory_remark} ${sea_inventory_child_remark} ${sea_order_no_id} ${date_range_query} `;
        
            conn.query(totalinventorycount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // GET inventory receive Report LISTING DATA API //
    getinventoryreceivereportlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
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
        const All_ID_Query = body?.is_export == true ? ' ' :`receive.id as receive_id,parent.jober_id,receive.receive_quality_id,`;

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

        const search_inventory_receive_no = search?.inventory_receive_no ? search?.inventory_receive_no : '';
        const search_inventory_lf_no = search?.inventory_lf_no ? search?.inventory_lf_no.trim() : '';
        const search_inventory_challan_no = search?.inventory_challan_no ? search?.inventory_challan_no.trim() : '';
        const search_inventory_receive_lot_no = search?.inventory_receive_lot_no ? search?.inventory_receive_lot_no.trim() : '';
        const search_inventory_receive_challan_no = search?.inventory_receive_challan_no ? search?.inventory_receive_challan_no : '';
        const search_inventory_receive_challan_date = search?.inventory_receive_challan_date ? search?.inventory_receive_challan_date : '';
        const search_issue_quality = search?.issue_quality ? search?.issue_quality.trim().toLowerCase() : '';
        const search_receive_quality = search?.receive_quality ? search?.receive_quality.trim().toLowerCase() : '';
        const search_jober_name = search?.jober_name ? search?.jober_name.trim().toLowerCase() : '';
        const search_inventory_receive_unit_sent = search?.inventory_receive_unit_sent ? search?.inventory_receive_unit_sent : '';
        const search_inventory_receive_grey_qty = search?.inventory_receive_grey_qty ? search?.inventory_receive_grey_qty : '';
        const search_inventory_receive_qty_sent = search?.inventory_receive_qty_sent ? search?.inventory_receive_qty_sent : '';
        const search_inventory_receive_remark = search?.inventory_receive_remark ? search?.inventory_receive_remark.trim().toLowerCase() : '';
        
        
        const sea_inventory_receive_no = search_inventory_receive_no != '' ? ` AND receive.inventory_receive_no LIKE '%${search_inventory_receive_no}%'` : '';
        const sea_inventory_lf_no = search_inventory_lf_no != '' ? ` AND parent.inventory_lf_no LIKE '%${search_inventory_lf_no}%'` : '';
        const sea_inventory_challan_no = search_inventory_challan_no != '' ? ` AND parent.inventory_challan_no LIKE '%${search_inventory_challan_no}%'` : '';
        const sea_inventory_receive_lot_no = search_inventory_receive_lot_no != '' ? ` AND receive.inventory_receive_lot_no LIKE '%${search_inventory_receive_lot_no}%'` : '';
        const sea_inventory_receive_challan_no = search_inventory_receive_challan_no != '' ? ` AND receive.inventory_receive_challan_no LIKE '%${search_inventory_receive_challan_no}%'` : '';
        const sea_inventory_receive_challan_date = search_inventory_receive_challan_date != '' ? ` AND receive.inventory_receive_challan_date LIKE '%${search_inventory_receive_challan_date}%'` : '';
        const sea_issue_quality = search_issue_quality != '' ? ` AND issue_quality.quality_name LIKE '%${search_issue_quality}%'` : '';
        const sea_receive_quality = search_receive_quality != '' ? ` AND receive_quality.quality_name LIKE '%${search_receive_quality}%'` : '';
        const sea_jober_name = search_jober_name != '' ? ` AND jober.party_name LIKE '%${search_jober_name}%'` : '';
        const sea_inventory_receive_unit_sent = search_inventory_receive_unit_sent != '' ? ` AND receive.inventory_receive_unit_sent LIKE '%${search_inventory_receive_unit_sent}%'` : '';
        const sea_inventory_receive_grey_qty = search_inventory_receive_grey_qty != '' ? ` AND receive.inventory_receive_grey_qty LIKE '%${search_inventory_receive_grey_qty}%'` : '';
        const sea_inventory_receive_qty_sent = search_inventory_receive_qty_sent != '' ? ` AND receive.inventory_receive_qty_sent LIKE '%${search_inventory_receive_qty_sent}%'` : '';
        const sea_inventory_receive_remark = search_inventory_receive_remark != '' ? ` AND receive.inventory_receive_remark LIKE '%${search_inventory_receive_remark}%'` : '';
        const sea_quality_id = quality_id > 0 ? ` AND receive.receive_quality_id='${quality_id}'` : '';
        const date_range_query = from_date != '' ? ` AND receive.inventory_receive_challan_date >='${from_date}' AND receive.inventory_receive_challan_date <='${to_date}'` : '';
        

        var getinventoryreceivelistingdata = `SELECT ${All_ID_Query} receive.inventory_receive_no,parent.inventory_lf_no,parent.inventory_challan_no,parent.inventory_challan_date,child.inventory_child_unit_sent,child.inventory_child_qty_sent,child.inventory_child_net_meter,parent.inventory_order_no,parent.inventory_remark,receive.inventory_receive_lot_no,receive.inventory_receive_challan_no,receive.inventory_receive_challan_date,issue_quality.quality_name as issue_quality,receive_quality.quality_name as receive_quality,jober.party_name as jober_name,receive.inventory_receive_unit_sent,receive.inventory_receive_grey_qty,receive.inventory_receive_qty_sent,receive.inventory_receive_remark,child.inventory_child_unit_sent - (SELECT COALESCE(SUM(inventory_receive_unit_sent),0) FROM erp_inventory_receive WHERE id!=receive.id AND inventory_child_id=child.id AND is_delete_status='0') as due_unit,child.inventory_child_qty_sent - (SELECT COALESCE(SUM(inventory_receive_qty_sent),0) FROM erp_inventory_receive WHERE id!=receive.id AND inventory_child_id=child.id AND is_delete_status='0') as due_qty,receive.inventory_receive_shortage,receive.inventory_receive_meter,receive.is_receive_completed,receive.is_return,receive.inventory_child_id,receive.inventory_id FROM erp_inventory_receive as receive LEFT JOIN erp_inventory_child as child ON child.id=receive.inventory_child_id LEFT JOIN erp_inventory as parent ON parent.id=child.inventory_id LEFT JOIN erp_quality as issue_quality ON issue_quality.id=child.quality_id LEFT JOIN erp_quality as receive_quality ON receive_quality.id=receive.receive_quality_id LEFT JOIN erp_party as jober ON jober.id=parent.jober_id WHERE receive.is_delete_status='0' AND receive.user_id='${user_id}' AND receive.company_id<='${company_id}' AND receive.year_id<='${year_id}' AND receive.branch_id<='${branch_id}' AND child.is_delete_status='0' AND parent.is_delete_status='0' AND issue_quality.is_delete_status='0' AND receive_quality.is_delete_status='0' AND jober.is_delete_status='0' ${sea_inventory_receive_no} ${sea_inventory_lf_no} ${sea_inventory_challan_no} ${sea_inventory_receive_lot_no} ${sea_inventory_receive_challan_no} ${sea_inventory_receive_challan_date} ${sea_issue_quality} ${sea_receive_quality} ${sea_jober_name} ${sea_inventory_receive_unit_sent} ${sea_inventory_receive_grey_qty} ${sea_inventory_receive_qty_sent} ${sea_inventory_receive_remark} ${sea_quality_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`; 

        conn.query(getinventoryreceivelistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }

            data?.forEach(element => {
                element.inventory_receive_challan_date = constant.moment(element.inventory_receive_challan_date).format('YYYY-MM-DD');
                element.inventory_challan_date = constant.moment(element.inventory_challan_date).format('YYYY-MM-DD');
                
            });
            
            var totalinventoryreceivecount = `SELECT COUNT(receive.id) as Count FROM erp_inventory_receive as receive LEFT JOIN erp_inventory_child as child ON child.id=receive.inventory_child_id LEFT JOIN erp_inventory as parent ON parent.id=child.inventory_id LEFT JOIN erp_quality as issue_quality ON issue_quality.id=child.quality_id LEFT JOIN erp_quality as receive_quality ON receive_quality.id=receive.receive_quality_id LEFT JOIN erp_party as jober ON jober.id=parent.jober_id WHERE receive.is_delete_status='0' AND receive.user_id='${user_id}' AND receive.company_id<='${company_id}' AND receive.year_id<='${year_id}' AND receive.branch_id<='${branch_id}' AND child.is_delete_status='0' AND parent.is_delete_status='0' AND issue_quality.is_delete_status='0' AND receive_quality.is_delete_status='0' AND jober.is_delete_status='0' ${sea_inventory_receive_no} ${sea_inventory_lf_no} ${sea_inventory_challan_no} ${sea_inventory_receive_lot_no} ${sea_inventory_receive_challan_no} ${sea_inventory_receive_challan_date} ${sea_issue_quality} ${sea_receive_quality} ${sea_jober_name} ${sea_inventory_receive_unit_sent} ${sea_inventory_receive_grey_qty} ${sea_inventory_receive_qty_sent} ${sea_inventory_receive_remark} ${sea_quality_id} ${date_range_query}`;
        
            conn.query(totalinventoryreceivecount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // DELETE inventory receive DATA API //
    deleteinventoryreceivedata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid inventory receive ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existinventoryreceivedata = `SELECT id as inventory_receive_id,(SELECT COUNT(id) FROM erp_inventory_invoice_child WHERE inventory_receive_id='${id}' AND is_delete_status='0') as inventory_invoice_child_id FROM erp_inventory_receive WHERE id='${id}'`;

        conn.query(existinventoryreceivedata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.inventory_invoice_child_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'inventory receive In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deleteinventoryreceivedata = `CALL delete_inventory_receive(?,?)`;
                    conn.query(deleteinventoryreceivedata,[id,entry_date],(error,data) => {
                        if (error) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {     
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `inventoryreceive Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`inventoryreceive`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'inventoryreceive Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    },
};


export default AllInventoryReceiveApis;
    
