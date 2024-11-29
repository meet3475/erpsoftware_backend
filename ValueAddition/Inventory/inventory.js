import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllInventoryApis = {
    
    // INSERT AND UPDATE Inventory DATA API //
    createinventory: (req,res,next) => {

        let body  = req?.body;
        let child_data = req?.body?.inventory_child_data;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id  : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const year_id = body?.year_id ? body?.year_id  : 0;
        const godown_id = body?.godown_id ? body?.godown_id  : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;
        const jober_id = body?.jober_id ? body?.jober_id : 0;
        const jober_godown_address_id = body?.jober_godown_address_id ? body?.jober_godown_address_id : 0;
        const broker_id = body?.broker_id ? body?.broker_id : 0;
        const haste_id = body?.haste_id ? body?.haste_id : 0;
        const order_no_id = body?.order_no_id ? body?.order_no_id : 0;
        const inventory_order_no = body?.inventory_order_no ? body?.inventory_order_no : '';
        const inventory_prefix = body?.inventory_prefix ? body?.inventory_prefix : '';
        const inventory_challan_no = body?.inventory_challan_no ? body?.inventory_challan_no : '';
        const inventory_challan_date = body?.inventory_challan_date ? body?.inventory_challan_date : constant.moment().format('YYYY-MM-DD');
        const inventory_lf_no = body?.inventory_lf_no ? body?.inventory_lf_no : '';
        const inventory_remark = body?.inventory_remark ? body?.inventory_remark : '';
        const inventory_total_unit_sent = body?.inventory_total_unit_sent ? body?.inventory_total_unit_sent : 0;
        const inventory_total_qty_sent = body?.inventory_total_qty_sent ? body?.inventory_total_qty_sent : 0;
        const inventory_total_net_meter = body?.inventory_total_net_meter ? body?.inventory_total_net_meter : 0;
        const inventory_total_rate = body?.inventory_total_rate ? body?.inventory_total_rate : 0;
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
            const updateinventory = `CALL create_inventory(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updateinventory,[id,user_id,branch_id,company_id,year_id,godown_id,quality_type_id,jober_id,jober_godown_address_id,broker_id,haste_id,order_no_id,inventory_order_no,inventory_prefix,inventory_challan_no,inventory_challan_date,inventory_lf_no,inventory_remark,inventory_total_unit_sent,inventory_total_qty_sent,inventory_total_net_meter,inventory_total_rate,entry_date,update_date],(error,data) => {
                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Inventory Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'Inventory Updated',Data:[] });
                    next();
                    
                    if (child_data && child_data.length > 0) 
                    {
                        // CALL INVENTORY CHILD API //
                        res?.send(AllInventoryApis.createinventorychild(id,child_data,req?.headers));
                        next();
                    }                   
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `Inventory Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Inventory`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createinventory = `CALL create_inventory(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createinventory,[id,user_id,branch_id,company_id,year_id,godown_id,quality_type_id,jober_id,jober_godown_address_id,broker_id,haste_id,order_no_id,inventory_order_no,inventory_prefix,inventory_challan_no,inventory_challan_date,inventory_lf_no,inventory_remark,inventory_total_unit_sent,inventory_total_qty_sent,inventory_total_net_meter,inventory_total_rate,entry_date,update_date],(error,data) => {
                if (error || data[0].length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Inventory Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'Inventory Inserted',Data:data[0][0] });
                    next();
                    
                    if (child_data && child_data.length > 0) 
                    {
                        // CALL INVENTORY CHILD API //
                        res?.send(AllInventoryApis.createinventorychild(data[0][0].inventory_id,child_data,req?.headers));
                    }
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `Inventory Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Inventory`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET Inventory AND CHILD DETAILS DATA API //
    getinventorydetails: (req,res,next) => {

        const inventory_id = req.body?.inventory_id ? req.body?.inventory_id : 0;
        if (inventory_id.length == 0 || inventory_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Inventory ID',Data:[] });
            next();
            return;
        }

        var getinventorydetails = `CALL get_inventory_details(?)`;
        conn.query(getinventorydetails,[inventory_id],(error,data) => {
            
            if (error || data[0].length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].inventory_challan_date = constant.moment(data[0][0].inventory_challan_date).format('YYYY-MM-DD');
                data[0][0].inventory_child_data = data[1];

                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET Inventory AND CHILD LISTING DATA API //
    getinventorylistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const jober_id = body?.jober_id ? body?.jober_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
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
        const All_ID_Query = body?.is_export == true ? ' ' :`parent.id,parent.id as inventory_id,inventory_child.id as inventory_child_id,`;
        
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
        const sea_jober_id = jober_id > 0 ? ` AND parent.jober_id='${jober_id}'` : '';
        const sea_quality_id = quality_id > 0 ? ` AND inventory_child.quality_id='${quality_id}'` : '';
        const date_range_query = from_date != '' ? ` AND parent.inventory_challan_date >='${from_date}' AND parent.inventory_challan_date <='${to_date}'` : '';
        

        var getinventorylistingdata = `SELECT ${All_ID_Query} parent.inventory_lf_no,parent.inventory_challan_no,parent.inventory_challan_date,quality.quality_name,jober.party_name as jober_name,broker.party_name as broker_name,inventory_child.inventory_child_unit_sent,inventory_child.inventory_child_qty_sent,inventory_child.inventory_child_net_meter,parent.inventory_remark,inventory_child.inventory_child_remark,parent.order_no_id,inventory_child.inventory_child_unit_sent - (SELECT COALESCE(inventory_receive_unit_sent,0) FROM erp_inventory_receive WHERE inventory_child_id=inventory_child.id) as due_unit,inventory_child.inventory_child_qty_sent - (SELECT COALESCE(inventory_receive_qty_sent,0) FROM erp_inventory_receive WHERE inventory_child_id=inventory_child.id) as due_qty,parent.quality_type_id FROM erp_inventory as parent LEFT JOIN erp_party as jober ON jober.id=parent.jober_id LEFT JOIN erp_party as broker ON broker.id=parent.broker_id LEFT JOIN erp_inventory_child as inventory_child ON inventory_child.inventory_id=parent.id LEFT JOIN erp_quality as quality ON quality.id=inventory_child.quality_id WHERE parent.is_delete_status='0' AND parent.user_id='${user_id}' AND parent.company_id<='${company_id}' AND parent.year_id<='${year_id}' AND parent.branch_id<='${branch_id}' AND jober.is_delete_status='0' AND broker.is_delete_status='0' AND inventory_child.is_delete_status='0' AND quality.is_delete_status='0' ${sea_inventory_lf_no} ${sea_inventory_challan_no} ${sea_inventory_challan_date} ${sea_quality_name} ${sea_jober_name} ${sea_broker_name} ${sea_inventory_child_unit_sent} ${sea_inventory_child_qty_sent} ${sea_inventory_child_net_meter} ${sea_inventory_remark} ${sea_inventory_child_remark} ${sea_order_no_id} ${sea_jober_id} ${sea_quality_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`; 

        conn.query(getinventorylistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }

            data.forEach(element => {
                element.inventory_challan_date = constant.moment(element.inventory_challan_date).format('YYYY-MM-DD');
            });
            
            var totalinventorycount = `SELECT COUNT(parent.id) as Count FROM erp_inventory as parent LEFT JOIN erp_party as jober ON jober.id=parent.jober_id LEFT JOIN erp_party as broker ON broker.id=parent.broker_id LEFT JOIN erp_inventory_child as inventory_child ON inventory_child.inventory_id=parent.id LEFT JOIN erp_quality as quality ON quality.id=inventory_child.quality_id WHERE parent.is_delete_status='0' AND parent.user_id='${user_id}' AND parent.company_id<='${company_id}' AND parent.year_id<='${year_id}' AND parent.branch_id<='${branch_id}' AND jober.is_delete_status='0' AND broker.is_delete_status='0' AND inventory_child.is_delete_status='0' AND quality.is_delete_status='0' ${sea_inventory_lf_no} ${sea_inventory_challan_no} ${sea_inventory_challan_date} ${sea_quality_name} ${sea_jober_name} ${sea_broker_name} ${sea_inventory_child_unit_sent} ${sea_inventory_child_qty_sent} ${sea_inventory_child_net_meter} ${sea_inventory_remark} ${sea_inventory_child_remark} ${sea_order_no_id} ${sea_jober_id} ${sea_quality_id} ${date_range_query}`;
        
            conn.query(totalinventorycount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data.length,TotalCount:countdata[0].Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // INSERT AND UPDATE Inventory CHILD DATA API //
    createinventorychild: (inventory_par_id,req,headers) => {

        let body  = req;
        let header_data = headers;
    
        body.forEach((data,index) => {
            const id = data?.id ? Number(data?.id) : 0;
            const user_id = data?.user_id ? data?.user_id : 0;
            const inventory_id = inventory_par_id ? inventory_par_id : 0;
            const quality_id = data?.quality_id ? data?.quality_id : 0;
            const qty_per_id = data?.qty_per_id ? data?.qty_per_id : 0;
            const inventory_child_remark = data?.inventory_child_remark ? data?.inventory_child_remark.trim().toLowerCase() : '';
            const inventory_child_hsn = data?.inventory_child_hsn ? data?.inventory_child_hsn : '';
            const inventory_child_stock = data?.inventory_child_stock ? data?.inventory_child_stock : 0;
            const inventory_child_pkg = data?.inventory_child_pkg ? data?.inventory_child_pkg : 0;
            const inventory_child_unit_sent = data?.inventory_child_unit_sent ? data?.inventory_child_unit_sent : 0;
            const inventory_child_qty_sent = data?.inventory_child_qty_sent ? data?.inventory_child_qty_sent : 0;
            const inventory_child_fold = data?.inventory_child_fold ? data?.inventory_child_fold : 0;
            const inventory_child_net_meter = data?.inventory_child_net_meter ? data?.inventory_child_net_meter : 0;
            const inventory_child_rate = data?.inventory_child_rate ? data?.inventory_child_rate : 0;
            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

            if (id > 0) 
            {   
                const updateinventorychild = `CALL create_inventory_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updateinventorychild,[id,user_id,inventory_id,quality_id,qty_per_id,inventory_child_remark,inventory_child_hsn,inventory_child_stock,inventory_child_pkg,inventory_child_unit_sent,inventory_child_qty_sent,inventory_child_fold,inventory_child_net_meter,inventory_child_rate,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    }
                    else
                    {                          
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `Inventory Child Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Inventory Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return({ Status:200,Count:0,Message:'Inventory Child Updated',Data:[] });
                    }  
                });
            }
            else
            {
                const createinventorychild = `CALL create_inventory_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createinventorychild,[id,user_id,inventory_id,quality_id,qty_per_id,inventory_child_remark,inventory_child_hsn,inventory_child_stock,inventory_child_pkg,inventory_child_unit_sent,inventory_child_qty_sent,inventory_child_fold,inventory_child_net_meter,inventory_child_rate,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return { Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error };
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `Inventory Child Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails,[user_id],(error,userdata) => {

                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Inventory Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return { Status:200,Count:0,Message:'Inventory Child Inserted',Data:data[0] };
                    }  
                });
            }
        });
    },

    // DELETE Inventory DATA API //
    deleteinventorydata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Inventory ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existinventorydata = `SELECT id as inventory_id,(SELECT COUNT(id) FROM erp_inventory_child WHERE inventory_id='${id}' AND is_delete_status='0') as inventory_child_id,(SELECT COUNT(id) FROM erp_inventory_receive WHERE inventory_id='${id}' AND is_delete_status='0') as inventory_receive_id FROM erp_inventory WHERE id='${id}'`;

        conn.query(existinventorydata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.inventory_child_id > 0 || data[0]?.inventory_receive_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Inventory In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deleteinventorydata = `CALL delete_inventory(?,?)`;
                    conn.query(deleteinventorydata,[id,entry_date],(error,data) => {
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
                            const ip = `Inventory Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Inventory`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Inventory Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    },

    // DELETE Inventory CHILD DATA API //
    deleteinventorychilddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Inventory Child deleted successfully',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existinventorychilddata = `SELECT id as inventory_child_id,(SELECT COUNT(id) FROM erp_inventory_receive WHERE inventory_child_id='${id}' AND is_delete_status='0') as inventory_reprocess_id FROM erp_inventory_child WHERE id='${id}'`;

        conn.query(existinventorychilddata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.inventory_reprocess_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Inventory Child In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deleteinventorychilddata = `CALL delete_inventory_child(?,?)`;
                    conn.query(deleteinventorychilddata,[id,entry_date],(error,data) => {
                        if (error) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Inventory child Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {     
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `Inventory Child Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Inventory Child`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Inventory Child Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    },
};


export default AllInventoryApis;
    
