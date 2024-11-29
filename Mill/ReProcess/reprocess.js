import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllReProcessApis = {

    // INSERT AND UPDATE reprocess DATA API //
    createreprocess: (req,res,next) => {

        let body = req?.body;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const godown_id = body?.godown_id ? body?.godown_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const mill_id = body?.mill_id ? body?.mill_id : 0;
        const mill_master_id = body?.mill_master_id ? body?.mill_master_id : 0;
        const mill_reprocess_issue_challan_no = body?.mill_reprocess_issue_challan_no ? body?.mill_reprocess_issue_challan_no : '';
        const mill_reprocess_issue_date = body?.mill_reprocess_issue_date ? body?.mill_reprocess_issue_date : constant.moment().format('YYYY-MM-DD');
        const mill_reprocess_issue_taka = body?.mill_reprocess_issue_taka ? body?.mill_reprocess_issue_taka : 0;
        const mill_reprocess_issue_meter = body?.mill_reprocess_issue_meter ? body?.mill_reprocess_issue_meter : 0;
        const mill_reprocess_issue_weight = body?.mill_reprocess_issue_weight ? body?.mill_reprocess_issue_weight : 0;
        const mill_reprocess_require_width = body?.mill_reprocess_require_width ? body?.mill_reprocess_require_width : 0;
        const mill_reprocess_require_shortage = body?.mill_reprocess_require_shortage ? body?.mill_reprocess_require_shortage : 0;
        const mill_reprocess_rate = body?.mill_reprocess_rate ? body?.mill_reprocess_rate : 0;
        const mill_reprocess_amount = body?.mill_reprocess_amount ? body?.mill_reprocess_amount : 0;
        const mill_reprocess_remark = body?.mill_reprocess_remark ? body?.mill_reprocess_remark.trim().toLowerCase() : '';
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');

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
            const updatereprocess = `CALL create_reprocess(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatereprocess,[id,user_id,branch_id,company_id,year_id,godown_id,quality_id,mill_id,mill_master_id,mill_reprocess_issue_challan_no,mill_reprocess_issue_date,mill_reprocess_issue_taka,mill_reprocess_issue_meter,mill_reprocess_issue_weight,mill_reprocess_require_width,mill_reprocess_require_shortage,mill_reprocess_rate,mill_reprocess_amount,mill_reprocess_remark,entry_date,update_date],(error,data) => {

                if (error)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'reprocess Updated',Data:[] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `reprocess Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`reprocess`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createreprocess = `CALL create_reprocess(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createreprocess,[id,user_id,branch_id,company_id,year_id,godown_id,quality_id,mill_id,mill_master_id,mill_reprocess_issue_challan_no,mill_reprocess_issue_date,mill_reprocess_issue_taka,mill_reprocess_issue_meter,mill_reprocess_issue_weight,mill_reprocess_require_width,mill_reprocess_require_shortage,mill_reprocess_rate,mill_reprocess_amount,mill_reprocess_remark,entry_date,update_date],(error,data) => {

                if (error || data[0]?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'reprocess Inserted',Data:data[0][0] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `reprocess Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`reprocess`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET reprocess LISTING DATA API //
    getreprocesslistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const mill_id = body?.mill_id ? body?.mill_id : 0;
        const mill_master_id = body?.mill_master_id ? body?.mill_master_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'reprocess.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`reprocess.id as reprocess_id,reprocess.mill_id,reprocess.quality_id,reprocess.mill_master_id,reprocess.godown_id,`;

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

        const search_mill_reprocess_issue_challan_no = search?.mill_reprocess_issue_challan_no ? search?.mill_reprocess_issue_challan_no.trim() : '';
        const search_mill_reprocess_issue_date = search?.mill_reprocess_issue_date ? search?.mill_reprocess_issue_date.trim() : '';
        const search_quality_name = search?.quality_name ? search?.quality_name.trim().toLowerCase() : '';
        const search_mill_name = search?.mill_name ? search?.mill_name.trim().toLowerCase() : '';
        const search_master_name = search?.master_name ? search?.master_name.trim().toLowerCase() : '';
        const search_mill_reprocess_issue_meter = search?.mill_reprocess_issue_meter ? search?.mill_reprocess_issue_meter.trim() : '';
        const search_mill_reprocess_require_width = search?.mill_reprocess_require_width ? search?.mill_reprocess_require_width.trim() : '';
        const search_mill_reprocess_require_shortage = search?.mill_reprocess_require_shortage ? search?.mill_reprocess_require_shortage.trim() : '';
        const search_mill_reprocess_rate = search?.mill_reprocess_rate ? search?.mill_reprocess_rate.trim() : '';
        const search_mill_reprocess_amount = search?.mill_reprocess_amount ? search?.mill_reprocess_amount.trim() : '';
        
        const sea_mill_reprocess_issue_challan_no = search_mill_reprocess_issue_challan_no != '' ? ` AND reprocess.mill_reprocess_issue_challan_no LIKE '%${search_mill_reprocess_issue_challan_no}%'` : '';
        const sea_mill_reprocess_issue_date = search_mill_reprocess_issue_date != '' ? ` AND reprocess.mill_reprocess_issue_date LIKE '%${search_mill_reprocess_issue_date}%'` : '';
        const sea_quality_name = search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_mill_name = search_mill_name != '' ? ` AND mill.party_name LIKE '%${search_mill_name}%'` : '';
        const sea_master_name = search_master_name != '' ? ` AND master.party_name LIKE '%${search_master_name}%'` : '';
        const sea_mill_reprocess_issue_meter = search_mill_reprocess_issue_meter != '' ? ` AND reprocess.mill_reprocess_issue_meter LIKE '%${search_mill_reprocess_issue_meter}%'` : '';
        const sea_mill_reprocess_require_width = search_mill_reprocess_require_width != '' ? ` AND reprocess.mill_reprocess_require_width LIKE '%${search_mill_reprocess_require_width}%'` : '';
        const sea_mill_reprocess_require_shortage = search_mill_reprocess_require_shortage != '' ? ` AND reprocess.mill_reprocess_require_shortage LIKE '%${search_mill_reprocess_require_shortage}%'` : '';
        const sea_mill_reprocess_rate = search_mill_reprocess_rate != '' ? ` AND reprocess.mill_reprocess_rate LIKE '%${search_mill_reprocess_rate}%'` : '';
        const sea_mill_reprocess_amount = search_mill_reprocess_amount != '' ? ` AND reprocess.mill_reprocess_amount LIKE '%${search_mill_reprocess_amount}%'` : '';
        const sea_mill_id = mill_id > 0 ? ` AND reprocess.mill_id='${mill_id}'` : '';
        const sea_mill_master_id = mill_master_id > 0 ? ` AND reprocess.mill_master_id='${mill_master_id}'` : '';
        const sea_quality_id = quality_id > 0 ? ` AND reprocess.quality_id='${quality_id}'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(reprocess.mill_reprocess_issue_date) >='${from_date}' AND DATE(reprocess.mill_reprocess_issue_date) <='${to_date}'` : '';
        
       
        var getreprocesslistingdata = `SELECT ${All_ID_Query} reprocess.mill_reprocess_issue_challan_no,reprocess.mill_reprocess_issue_date,quality.quality_name,mill.party_name as mill_name,master.party_name as master_name,reprocess.mill_reprocess_issue_taka,reprocess.mill_reprocess_issue_meter,reprocess.mill_reprocess_require_width,reprocess.mill_reprocess_require_shortage,reprocess.mill_reprocess_rate,reprocess.mill_reprocess_amount,reprocess.mill_reprocess_remark FROM erp_mill_reprocess as reprocess LEFT JOIN erp_quality as quality ON quality.id=reprocess.quality_id LEFT JOIN erp_party as mill ON mill.id=reprocess.mill_id LEFT JOIN erp_party as master ON master.id=reprocess.mill_master_id WHERE reprocess.user_id='${user_id}' AND reprocess.company_id<='${company_id}' AND reprocess.year_id<='${year_id}' AND reprocess.branch_id<='${branch_id}' AND reprocess.is_delete_status='0' ${sea_mill_reprocess_issue_challan_no} ${sea_mill_reprocess_issue_date} ${sea_quality_name} ${sea_mill_name} ${sea_master_name} ${sea_mill_reprocess_issue_meter} ${sea_mill_reprocess_require_width} ${sea_mill_reprocess_require_shortage} ${sea_mill_reprocess_rate} ${sea_mill_reprocess_amount} ${sea_mill_id} ${sea_mill_master_id} ${sea_quality_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;
    
        conn.query(getreprocesslistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.mill_reprocess_issue_date = constant.moment(element.mill_reprocess_issue_date).format('YYYY-MM-DD');
                element.export = constant.DefaultExportopetions;
            });

            var totalreprocesscount = `SELECT COUNT(reprocess.id) as Count FROM erp_mill_reprocess as reprocess LEFT JOIN erp_quality as quality ON quality.id=reprocess.quality_id LEFT JOIN erp_party as mill ON mill.id=reprocess.mill_id LEFT JOIN erp_party as master ON master.id=reprocess.mill_master_id WHERE reprocess.user_id='${user_id}' AND reprocess.company_id<='${company_id}' AND reprocess.year_id<='${year_id}' AND reprocess.branch_id<='${branch_id}' AND reprocess.is_delete_status='0' ${sea_mill_reprocess_issue_challan_no} ${sea_mill_reprocess_issue_date} ${sea_quality_name} ${sea_mill_name} ${sea_master_name} ${sea_mill_reprocess_issue_meter} ${sea_mill_reprocess_require_width} ${sea_mill_reprocess_require_shortage} ${sea_mill_reprocess_rate} ${sea_mill_reprocess_amount} ${sea_mill_id} ${sea_mill_master_id} ${sea_quality_id} ${date_range_query}`;
        
            conn.query(totalreprocesscount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // DELETE Reprocess DATA API //
    deletereprocessdata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter valid reprocess ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var deletereprocessdata = `CALL delete_reprocess(?,?)`;
        conn.query(deletereprocessdata,[id,entry_date],(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'reprocess Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {     
                // INSERT USER ACTIVITY LOG IN TABLE //
                const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                const ip = `Reprocess  Deleted With This Device ID ${HeaderData.device_id} `;
                const loginuserdetails = `CALL get_user_details(?)`;
                conn.query(loginuserdetails,[user_id],function(error,userdata){
                    if(userdata[0])
                    {   
                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Reprocess `,entry_date],function(error,data){
                
                        });
                    }
                });
                res?.send({ Status:200,Count:1,Message:'Reprocess Deleted Successfully',Data:[] });
                next();
                return;
            }
        });        
    }
};

export default AllReProcessApis;
