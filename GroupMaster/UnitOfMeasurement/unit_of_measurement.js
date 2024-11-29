import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllUnitOfMeasurementApis = {

    // INSERT AND UPDATE UNIT OF MEASUREMENT DATA API //
    createunitofmeasurement: (req,res,next) => {
 
        let body = req?.body;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const unit_measurement_name = body?.unit_measurement_name ? body?.unit_measurement_name.trim().toLowerCase() : '';
        const unit_measurement_symbol = body?.unit_measurement_symbol ? body?.unit_measurement_symbol.trim().toLowerCase() : '';
        const unit_measurement_no_of_decimal = body?.unit_measurement_no_of_decimal ? body?.unit_measurement_no_of_decimal.trim().toLowerCase() : '';
        const unit_measurement_invoice_base = body?.unit_measurement_invoice_base ? body?.unit_measurement_invoice_base.trim().toLowerCase() : 'pcs-sheet-unit';      
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
        if (id > 0) 
        {   
            const updateunitofmeasurement = `CALL create_unit_of_measurement(?,?,?,?,?,?,?,?,?)`;
            conn.query(updateunitofmeasurement,[id,user_id,company_id,unit_measurement_name,unit_measurement_symbol,unit_measurement_no_of_decimal,unit_measurement_invoice_base,entry_date,update_date],(error,data) => {
    
                if (error)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'Unit Of Measurement Updated',Data:[] });
                    next();
    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req.headers));
                    const login_ip = `Unit Of Measurement Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Unit Of Measurement`,entry_date],function(error,data){
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createunitofmeasurement = `CALL create_unit_of_measurement(?,?,?,?,?,?,?,?,?)`;
            conn.query(createunitofmeasurement,[id,user_id,company_id,unit_measurement_name,unit_measurement_symbol,unit_measurement_no_of_decimal,unit_measurement_invoice_base,entry_date,update_date],(error,data) => {
    
                if (error || data[0]?.length == 0)
                {
                    res.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'Unit Of Measurement Inserted',Data:data[0][0] });
                    next();
    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req.headers));
                    const login_ip = `Unit Of Measurement Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Unit Of Measurement`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET UNIT OF MEASUREMENT DETAILS DATA API //
    getunitofmeasurementdetails: (req,res,next) => {

        const unit_id = req.body?.unit_id ? req.body?.unit_id : 0;
        if (unit_id.length == 0 || unit_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Unit Of Measurement ID',Data:[] });
            next();
            return;
        }
    
        var getunitofmeasurementdetails = `CALL get_unit_of_measurement_details(?)`;
        conn.query(getunitofmeasurementdetails,[unit_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET UNIT OF MEASUREMENT LISTING DATA API //
    getunitofmeasurementlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'unit_id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`id,id as unit_id,`;

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

        const search_unit_measurement_name = search?.unit_measurement_name ? search?.unit_measurement_name.trim().toLowerCase() : '';
        const search_unit_measurement_symbol = search?.unit_measurement_symbol ? search?.unit_measurement_symbol.trim().toLowerCase() : '';
        const search_unit_measurement_no_of_decimal = search?.unit_measurement_no_of_decimal ? search?.unit_measurement_no_of_decimal.trim().toLowerCase() : '';
        const search_unit_measurement_invoice_base = search?.unit_measurement_invoice_base ? search?.unit_measurement_invoice_base.trim().toLowerCase() : '';
        const search_invoice_base = search?.invoice_base ? (search?.invoice_base.trim().toLowerCase() == 'qty' ? 'quantity' : search?.invoice_base.trim().toLowerCase()) : '';
        
                    
        const sea_unit_measurement_name =  search_unit_measurement_name != '' ? ` AND unit_measurement_name LIKE '%${search_unit_measurement_name}%'` : '';
        const sea_unit_measurement_symbol =  search_unit_measurement_symbol != '' ? ` AND unit_measurement_symbol LIKE '%${search_unit_measurement_symbol}%'` : '';
        const sea_unit_measurement_no_of_decimal =  search_unit_measurement_no_of_decimal != '' ? ` AND unit_measurement_no_of_decimal LIKE '%${search_unit_measurement_no_of_decimal}%'` : '';
        const sea_unit_measurement_invoice_base =  search_unit_measurement_invoice_base != '' ? ` AND unit_measurement_invoice_base LIKE '%${search_unit_measurement_invoice_base}%'` : '';
        const sea_invoice_base =  search_invoice_base != '' ? ` AND unit_measurement_invoice_base LIKE '%${search_invoice_base}%'` : '';
       
        var getunitofmeasurementlistingdata = `SELECT ${All_ID_Query} unit_measurement_name,unit_measurement_symbol,unit_measurement_no_of_decimal,unit_measurement_invoice_base,unit_measurement_invoice_base as invoice_base FROM erp_unit_measurement WHERE user_id IN ('0','${user_id}') AND company_id IN ('0','${company_id}') AND unit_measurement_status='active' AND is_delete_status='0' ${sea_unit_measurement_name} ${sea_unit_measurement_symbol} ${sea_unit_measurement_no_of_decimal} ${sea_unit_measurement_invoice_base} ${sea_invoice_base} ORDER BY ${orderby} ${orderformat} ${limit_query}`;
        
        conn.query(getunitofmeasurementlistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                if (element.invoice_base == 'quantity-weight') 
                {
                    element.invoice_base = 'qty';
                }
                else
                {
                    element.invoice_base = 'unit';
                }
                element.export = constant.DefaultExportopetions;
            });

            var totalgodowncount = `SELECT COUNT(id) as Count FROM erp_unit_measurement WHERE user_id IN ('0','${user_id}') AND company_id IN ('0','${company_id}') AND unit_measurement_status='active' AND is_delete_status='0' ${sea_unit_measurement_name} ${sea_unit_measurement_symbol} ${sea_unit_measurement_no_of_decimal} ${sea_unit_measurement_invoice_base} `;
        
            conn.query(totalgodowncount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // DELETE GODOWN LEVEL DATA API //
    deleteunitmeasurmentdata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Unit ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existunitmeasurmentdata = `SELECT id as unit_measurement_id,(SELECT COUNT(id) FROM erp_material WHERE material_purchase_qty='${id} AND is_delete_status='0'') as material_purchase_qty_id,(SELECT COUNT(id) FROM erp_material WHERE material_sale_qty='${id}' AND is_delete_status='0') as material_sale_qty_id,(SELECT COUNT(id) FROM erp_material WHERE material_purchase_rate='${id}' AND is_delete_status='0') as material_purchase_rate_id,(SELECT COUNT(id) FROM erp_material WHERE material_sale_rate='${id}' AND is_delete_status='0') as material_sale_rate_id,(SELECT COUNT(id) FROM erp_material WHERE material_matrix_view='${id}' AND is_delete_status='0') as material_matrix_view_id,(SELECT COUNT(id) FROM erp_material WHERE material_packing_view='${id}' AND is_delete_status='0') as material_packing_view_id FROM erp_unit_measurement WHERE id='${id}'`;

        conn.query(existunitmeasurmentdata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.material_purchase_qty_id > 0 || data[0]?.material_sale_qty_id > 0 || data[0]?.material_purchase_rate_id > 0 || data[0]?.material_sale_rate_id > 0 || data[0]?.material_matrix_view_id > 0 || data[0]?.material_packing_view_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Unit Measurment In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deleteunitmeasurmentdata = `CALL delete_unit_measurment(?,?)`;
                    conn.query(deleteunitmeasurmentdata,[id,entry_date],(error,data) => {
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
                            const login_ip = `Unit measurment Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Unit measurment`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Unit measurment Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    },
};

export default AllUnitOfMeasurementApis;