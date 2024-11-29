import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllBrandApis = {

    // INSERT AND UPDATE BRAND DATA API //
    createbrand: (req,res,next) => {

        let body = req?.body;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.user_id ? body?.company_id : 0;
        const supplier_id = body?.supplier_id ? body?.supplier_id : 0;
        const brand_name = body?.brand_name ? body?.brand_name.trim().toLowerCase() : '';
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (brand_name == '') 
        {
            res.send({ Status:400,Count:0,Message:'Enter brand Name',Data:[] });
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
            const updatebrand = `CALL create_brand(?,?,?,?,?,?,?)`;
            conn.query(updatebrand,[id,user_id,company_id,supplier_id,brand_name,entry_date,update_date],(error,data) => {

                if (error)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'Brand Updated',Data:[] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `Brand Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Brand`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createbrand = `CALL create_brand(?,?,?,?,?,?,?)`;
            conn.query(createbrand,[id,user_id,company_id,supplier_id,brand_name,entry_date,update_date],(error,data) => {

                if (error || data[0]?.length == 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'Brand Inserted',Data:data[0][0] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `Brand Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Brand`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET BRAND LISTING DATA API //
    getbrandlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'brand_id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`brand.id,brand.id as brand_id,brand.supplier_id,`;

    
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
        
        const search_brand_name = search?.brand_name ? search?.brand_name.trim().toLowerCase() : '';
        const search_supplier_name = search?.supplier_name ? search?.supplier_name.trim().toLowerCase() : '';

        const sea_brand_name =  search_brand_name != '' ? ` AND brand.brand_name LIKE '%${search_brand_name}%'` : '';
        const sea_supplier_name =  search_supplier_name != '' ? ` AND party.party_name LIKE '%${search_supplier_name}%'` : '';
        
        var getbrandlistingdata = `SELECT ${All_ID_Query} brand.brand_name,party.party_name as supplier_name FROM erp_brand as brand LEFT JOIN erp_party as party ON party.id=brand.supplier_id WHERE brand.is_delete_status='0' AND brand.brand_status='active' AND brand.user_id='${user_id}' AND brand.company_id<='${company_id}' AND party.is_delete_status='0' ${sea_brand_name} ${sea_supplier_name} ORDER BY ${orderby} ${orderformat} ${limit_query}`;
    
        conn.query(getbrandlistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.export = constant.DefaultExportopetions;
            });
            
            var totalbrandcount = `SELECT COUNT(brand.id) as Count FROM erp_brand as brand LEFT JOIN erp_party as party ON party.id=brand.supplier_id WHERE brand.is_delete_status='0' AND brand.brand_status='active' AND brand.user_id='${user_id}' AND brand.company_id<='${company_id}'  ${sea_brand_name} ${sea_supplier_name} `;
        
            conn.query(totalbrandcount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // DELETE BRAND DATA API //
    deletebranddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid Brand ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existbranddata = `SELECT id as brand_id,(SELECT COUNT(id) FROM erp_quality WHERE brand_id='${id}' AND is_delete_status='0') as quality_id FROM erp_brand WHERE id='${id}'`;
        conn.query(existbranddata,(error,data) => {
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
                    res?.send({ Status:400,Count:0,Message:'Brand In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletebranddata = `CALL delete_brand(?,?)`;
                    conn.query(deletebranddata,[id,entry_date],(error,data) => {
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
                            const login_ip = `Brand Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Brand`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Brand Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    }
};

export default AllBrandApis;



