import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllMaterialApis = {

    // INSERT AND UPDATE MATERIAL DATA API //
    creatematerial: (req,res,next) => {

        let body = req?.body;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const gst_id = body?.gst_id ? body?.gst_id : 0;
        const export_gst_id = body?.export_gst_id ? body?.export_gst_id : 0;
        const material_name = body?.material_name ? body?.material_name.trim().toLowerCase() : '';
        const material_hsn = body?.material_hsn ? body?.material_hsn.trim().toLowerCase() : '';
        const material_image = body?.material_image ? body?.material_image : '';
        const material_purchase_qty = body?.material_purchase_qty ? body?.material_purchase_qty : 0;
        const material_sale_qty = body?.material_sale_qty ? body?.material_sale_qty : 0;
        const material_purchase_rate = body?.material_purchase_rate ? body?.material_purchase_rate : 0;
        const material_sale_rate = body?.material_sale_rate ? body?.material_sale_rate : 0;
        const material_matrix_view = body?.material_matrix_view ? body?.material_matrix_view : 0;
        const material_packing_view = body?.material_packing_view ? body?.material_packing_view : 0;
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (material_name == '') 
        {
            res.send({ Status:400,Count:0,Message:'Enter material Name',Data:[] });
            next();
            return; 
        }
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
        if (id > 0) 
        {
            const updatematerial = `CALL create_material(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatematerial,[id,user_id,company_id,gst_id,export_gst_id,material_name,material_hsn,material_image,material_purchase_qty,material_sale_qty,material_purchase_rate,material_sale_rate,material_matrix_view,material_packing_view,entry_date,update_date],(error,data) => {

                if (error)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'Material Updated',Data:[] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `Material Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Material`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const creatematerial = `CALL create_material(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(creatematerial,[id,user_id,company_id,gst_id,export_gst_id,material_name,material_hsn,material_image,material_purchase_qty,material_sale_qty,material_purchase_rate,material_sale_rate,material_matrix_view,material_packing_view,entry_date,update_date],(error,data) => {

                if (error || data[0]?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'material Inserted',Data:data[0][0] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `material Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`material`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET MATERIAL LISTING DATA API //
    getmateriallistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'material.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`material.id,material.id as material_id,gst.id as gst_id,export_gst.id as export_gst_id,`;
        
        if (user_id.length == 0) 
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
        
        const search_material_name = search?.material_name ? search?.material_name.trim().toLowerCase() : '';
        const search_material_hsn = search?.material_hsn ? search?.material_hsn.trim() : '';
        const search_gst_name = search?.gst_name ? search?.gst_name.trim() : '';
        const search_export_gst_name = search?.export_gst_name ? search?.export_gst_name.trim() : '';
        const search_material_purchase_qty_name = search?.material_purchase_qty_name ? search?.material_purchase_qty_name.trim().toLowerCase() : '';
        const search_material_sale_qty_name = search?.material_sale_qty_name ? search?.material_sale_qty_name.trim().toLowerCase() : '';
            
        const sea_material_name = search_material_name != '' ? ` AND material.material_name LIKE '%${search_material_name}%'` : '';
        const sea_material_hsn = search_material_hsn != '' ? ` AND material.material_hsn LIKE '%${search_material_hsn}%'` : '';
        const sea_gst_name = search_gst_name != '' ? ` AND gst.gst_name LIKE '%${search_gst_name}%'` : '';
        const sea_export_gst_name = search_export_gst_name != '' ? ` AND export_gst.gst_name LIKE '%${search_export_gst_name}%'` : '';
        const sea_material_purchase_qty_name = search_material_purchase_qty_name != '' ? ` AND purchase_qty.unit_measurement_symbol LIKE '%${search_material_purchase_qty_name}%'` : '';
        const sea_material_sale_qty_name = search_material_sale_qty_name != '' ? ` AND sale_qty.unit_measurement_symbol LIKE '%${search_material_sale_qty_name}%'` : '';
        
        var getmateriallistingdata = `SELECT ${All_ID_Query} material.material_name,material.material_hsn,material.material_image,material.material_purchase_qty,material.material_sale_qty,material.material_sale_rate,material.material_purchase_rate,material.material_matrix_view,material.material_packing_view,gst.gst_name,export_gst.gst_name as export_gst_name FROM erp_material as material LEFT JOIN erp_gst as gst ON gst.id=material.gst_id LEFT JOIN erp_gst as export_gst ON export_gst.id=material.export_gst_id WHERE material.is_delete_status='0' AND material.material_status='active' AND material.company_id<='${company_id}' ${sea_material_name} ${sea_material_hsn} ${sea_gst_name} ${sea_export_gst_name} ${sea_material_purchase_qty_name} ${sea_material_sale_qty_name} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getmateriallistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.export = constant.DefaultExportopetions;
            });
            
            var totalmaterialcount = `SELECT COUNT(material.id) as Count FROM erp_material as material LEFT JOIN erp_gst as gst ON gst.id=material.gst_id LEFT JOIN erp_gst as export_gst ON export_gst.id=material.export_gst_id WHERE material.is_delete_status='0' AND material.material_status='active' AND material.company_id<='${company_id}' ${sea_material_name} ${sea_material_hsn} ${sea_gst_name} ${sea_export_gst_name} ${sea_material_purchase_qty_name} ${sea_material_sale_qty_name}`;
        
            conn.query(totalmaterialcount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // DELETE BRAND DATA API //
    deletematerialdata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Material ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existmaterialdata = `SELECT id as material_id,(SELECT COUNT(id) FROM erp_quality WHERE material_id='${id}' AND is_delete_status='0') as quality_id FROM erp_material WHERE id='${id}'`;
        conn.query(existmaterialdata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.quality_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Material In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletematerialdata = `CALL delete_material(?,?)`;
                    conn.query(deletematerialdata,[id,entry_date],(error,data) => {
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
                            const login_ip = `Material Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Material`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Material Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    }
};

export default AllMaterialApis;
