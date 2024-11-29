import constant from '../Config/constant.js';
import conn from "../Config/connection.js";

const AllUserApis = {
    
    // INSERT AND UPDATE USER DATA API //
    createuser: (req,res,next) => {

        let body  = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_name = body?.user_name ? body?.user_name.trim().toLowerCase() : '';
        const user_email = body?.user_email ? body?.user_email : '';
        const user_mobile = body?.user_mobile ? body?.user_mobile : '';
        const user_profile = body?.user_profile ? body?.user_profile : '';
        const user_position = body?.user_position ? body?.user_position.trim().toLowerCase() : '';
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');       

        if (id > 0) 
        {   
            const updateuser = `CALL create_user(?,?,?,?,?,?,?,?)`;
            conn.query(updateuser,[id,user_name,user_email,user_mobile,user_profile,user_position,entry_date,update_date],(error,data) => {
                
                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'USER Updated',Data:[] });
                    next();
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `USER Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[id,0,userdata[0][0].user_position,ip,`USER`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createuser = `CALL create_user(?,?,?,?,?,?,?,?)`;
            conn.query(createuser,[id,user_name,user_email,user_mobile,user_profile,user_position,entry_date,update_date],(error,data) => {
                
                if (error || data[0]?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'USER Inserted',Data:data[0][0] });
                    next();
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `USER Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[id,0,userdata[0][0].user_position,ip,`USER`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        } 
    },

    // GET USER AND CHILD DETAILS DATA API //
    getjournalpurchasedetails: (req,res,next) => {

        const journal_purchase_id = req.body?.journal_purchase_id ? req.body?.journal_purchase_id : 0;
        if (journal_purchase_id.length == 0 || journal_purchase_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter USER ID',Data:[] });
            next();
            return;
        }

        var getjournalpurchasedetails = `CALL get_journal_purchase_details(?)`;
        conn.query(getjournalpurchasedetails,[journal_purchase_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].journal_purchase_invoice_date = constant.moment(data[0][0].journal_purchase_invoice_date).format('YYYY-MM-DD');
                
                data[1].forEach(element => {
                    element.journal_purchase_child_sgst_amt = (element.journal_purchase_child_sgst_amt + (element.journal_purchase_child_sgst/100) * element.journal_purchase_child_taxable).toFixed(2);
                    element.journal_purchase_child_cgst_amt = (element.journal_purchase_child_cgst_amt + (element.journal_purchase_child_cgst/100) * element.journal_purchase_child_taxable).toFixed(2);
                    element.journal_purchase_child_igst_amt = (element.journal_purchase_child_igst_amt + (element.journal_purchase_child_igst/100) * element.journal_purchase_child_taxable).toFixed(2);
                });

                data[0][0].journal_child_data = data[1];

                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET USER AND CHILD LISTING DATA API //
    getuserlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'user.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        // const from_date = body?.from_date ? body?.from_date : '';
        // const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        // const is_export = body?.is_export ? body?.is_export : '';
        // const export_type = body?.export_type ? body?.export_type : '';
        // const limit_query = is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        // const All_ID_Query = is_export == true ? ' ' :`parent.id,parent.id as journal_purchase_id,`;


        // if (export_type == '') 
        // {
            const search_user_name = search?.user_name ? search?.user_name.trim().toLowerCase() : '';
            const search_user_email = search?.user_email ? search?.user_email.trim().toLowerCase() : '';
            const search_user_mobile = search?.user_mobile ? search?.user_mobile.trim() : '';
            
            const sea_user_name = search_user_name != '' ? ` AND user.user_name LIKE '%${search_user_name}%'` : '';
            const sea_user_email = search_user_email != '' ? ` AND user.user_email LIKE '%${search_user_email}%'` : '';
            const sea_user_mobile = search_user_mobile != '' ? ` AND user.user_mobile LIKE '%${search_user_mobile}%'` : '';
            // const date_range_query = from_date != '' ? ` AND DATE(parent.journal_purchase_invoice_date) >='${from_date}' AND DATE(parent.journal_purchase_invoice_date) <='${to_date}'` : '';
            

            var getuserlistingdata = `SELECT user.id as user_id,user.* FROM erp_user as user  ${sea_user_name} ${sea_user_email} ${sea_user_mobile} ORDER BY ${orderby} ${orderformat}`; 

            conn.query(getuserlistingdata,(error,data) => {
                
                if (error || data?.length == 0) 
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }

                // data.forEach(element => {
                //     element.journal_purchase_invoice_date = constant.moment(element.journal_purchase_invoice_date).format('YYYY-MM-DD');
                //     element.export = constant.DefaultExportopetions;
                // });
                
                var totaluser = `SELECT COUNT(user.id) as Count FROM erp_user as user  ${sea_user_name} ${sea_user_email} ${sea_user_mobile} ORDER BY ${orderby} ${orderformat}`;
            
                conn.query(totaluser,(error,countdata) => {
                    
                    res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                    next();
                    return;
                });
            });
        // }
        // else
        // {   
        //     const is_rcm_query = is_rcm > 0 ? ` AND parent.is_rcm>='1'` : '';
            
        //     let getjournalpurchaseexportdata = (export_type == 'all-asc') ? `SELECT parent.supplier_id,parent.journal_purchase_invoice_date as invoice_date,parent.journal_purchase_lf_no as lf_no,supplier.party_gst_no as gst_no,parent.journal_purchase_invoice_no as invoice_no,parent.journal_purchase_tds as tds,parent.journal_purchase_child_net_total as net_amount,parent.journal_purchase_child_total_taxable as taxable,parent.journal_purchase_child_total_sgst as sgst,parent.journal_purchase_child_total_cgst as cgst,parent.journal_purchase_child_total_igst as igst,supplier.party_name as supplier_name,state.global_code as state_code,supplier.state_id FROM erp_journal_purchase as parent LEFT JOIN erp_party as supplier ON supplier.id=parent.supplier_id LEFT JOIN erp_global as state ON state.id=supplier.state_id WHERE parent.is_delete_status='0' AND parent.user_id='${user_id}' AND parent.company_id<='${company_id}' AND parent.year_id<='${year_id}' AND parent.branch_id<='${branch_id}' ${is_rcm_query} ORDER BY ${orderby} ${orderformat}` : `SELECT child.supplier_id,parent.journal_purchase_invoice_date as invoice_date,parent.journal_purchase_lf_no as lf_no,supplier.party_gst_no as gst_no,parent.journal_purchase_invoice_no as invoice_no,supplier.party_name as supplier_name,buyer.party_name as description,child.journal_purchase_child_hsn as hsn,gst.gst_percentage,child.journal_purchase_child_taxable as taxable,(parent.journal_purchase_child_total_sgst + (child.journal_purchase_child_sgst/100) * child.journal_purchase_child_taxable) as sgst,(parent.journal_purchase_child_total_cgst + (child.journal_purchase_child_cgst/100) * child.journal_purchase_child_taxable) as cgst,(parent.journal_purchase_child_total_igst + (child.journal_purchase_child_igst/100) * child.journal_purchase_child_taxable) as igst,child.journal_purchase_child_unit as unit,child.journal_purchase_child_qty as qty,child.journal_purchase_child_rate as rate,child.journal_purchase_child_disc_amount as disc_amt,child.journal_purchase_child_amount as amount,child.journal_purchase_child_total as net_amount FROM erp_journal_purchase as parent LEFT JOIN erp_party as supplier ON supplier.id=parent.supplier_id LEFT JOIN erp_global as state ON state.id=supplier.state_id LEFT JOIN erp_journal_purchase_child as child ON child.journal_purchase_id=parent.id LEFT JOIN erp_party as buyer ON buyer.id=child.supplier_id LEFT JOIN erp_gst as gst ON gst.id=child.gst_id WHERE parent.is_delete_status='0' AND parent.user_id='${user_id}' AND parent.company_id<='${company_id}' AND parent.year_id<='${year_id}' AND parent.branch_id<='${branch_id}' ${is_rcm_query} ORDER BY ${orderby} ${orderformat}`;

        //     conn.query(getjournalpurchaseexportdata,(error,data) => {

        //         if (error || data?.length == 0) 
        //         {   
        //             res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
        //             next();
        //             return;
        //         }
        //         else
        //         {   
        //             data?.forEach(element => {
        //                 element.invoice_date = constant.moment(element.invoice_date).format('YYYY-MM-DD');
        //             });

        //             res?.send({ Status:200,Count:data?.length,Message:'Data found',Data:data });
        //             next();
        //             return;
        //         } 
        //     });
        // }
    },

    // INSERT AND UPDATE USER CHILD DATA API //
    createuserchild: (journal_id,req,headers) => {

        let body  = req;
        let header_data = headers;
    
        body.forEach((data,index) => {
            const id = data?.id ? Number(data?.id) : 0;
            const user_id = data?.user_id ? data?.user_id : 0;
            const journal_purchase_id = journal_id ? journal_id : 0;
            const supplier_id = data?.supplier_id ? data?.supplier_id : 0;
            const gst_id = data?.gst_id ? data?.gst_id : 0;
            const journal_purchase_child_remark = data?.journal_purchase_child_remark ? data?.journal_purchase_child_remark.trim().toLowerCase() : '';
            const journal_purchase_child_hsn = data?.journal_purchase_child_hsn ? data?.journal_purchase_child_hsn.trim().toLowerCase() : '';
            const journal_purchase_child_unit = data?.journal_purchase_child_unit ? data?.journal_purchase_child_unit : 0;
            const journal_purchase_child_qty = data?.journal_purchase_child_qty ? data?.journal_purchase_child_qty : 0;
            const journal_purchase_child_rate_per_type = data?.journal_purchase_child_rate_per_type ? data?.journal_purchase_child_rate_per_type : 'unit';
            const journal_purchase_child_rate = data?.journal_purchase_child_rate ? data?.journal_purchase_child_rate : 0;
            const journal_purchase_child_amount = data?.journal_purchase_child_amount ? data?.journal_purchase_child_amount : 0;
            const journal_purchase_child_disc_per = data?.journal_purchase_child_disc_per ? data?.journal_purchase_child_disc_per : 0;
            const journal_purchase_child_disc_amount = data?.journal_purchase_child_disc_amount ? data?.journal_purchase_child_disc_amount : 0;
            const journal_purchase_child_taxable = data?.journal_purchase_child_taxable ? data?.journal_purchase_child_taxable : 0;
            const journal_purchase_child_sgst = data?.journal_purchase_child_sgst ? data?.journal_purchase_child_sgst : 0;
            const journal_purchase_child_cgst = data?.journal_purchase_child_cgst ? data?.journal_purchase_child_cgst : 0;
            const journal_purchase_child_igst = data?.journal_purchase_child_igst ? data?.journal_purchase_child_igst : 0;
            const journal_purchase_child_total = data?.journal_purchase_child_total ? data?.journal_purchase_child_total : 0;
            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

            if (id > 0) 
            {   
                const updateuserchild = `CALL create_user_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updateuserchild,[id,user_id,journal_purchase_id,supplier_id,gst_id,journal_purchase_child_remark,journal_purchase_child_hsn,journal_purchase_child_unit,journal_purchase_child_qty,journal_purchase_child_rate_per_type,journal_purchase_child_rate,journal_purchase_child_amount,journal_purchase_child_disc_per,journal_purchase_child_disc_amount,journal_purchase_child_taxable,journal_purchase_child_sgst,journal_purchase_child_cgst,journal_purchase_child_igst,journal_purchase_child_total,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    }
                    else
                    {                          
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `USER Child Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`USER Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return({ Status:200,Count:0,Message:'USER Child Updated',Data:[] });
                    }  
                });
            }
            else
            {
                const createuserchild = `CALL create_user_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createuserchild,[id,user_id,journal_purchase_id,supplier_id,gst_id,journal_purchase_child_remark,journal_purchase_child_hsn,journal_purchase_child_unit,journal_purchase_child_qty,journal_purchase_child_rate_per_type,journal_purchase_child_rate,journal_purchase_child_amount,journal_purchase_child_disc_per,journal_purchase_child_disc_amount,journal_purchase_child_taxable,journal_purchase_child_sgst,journal_purchase_child_cgst,journal_purchase_child_igst,journal_purchase_child_total,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return { Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error };
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `USER Child Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails,[user_id],(error,userdata) => {

                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`USER Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return { Status:200,Count:0,Message:'USER Child Inserted',Data:data[0] };
                    }  
                });
            }
        });
    },

    // DELETE USER DATA API //
    deletejournalpurchasedata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid USER ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        // var existjournalpurchasedata = `SELECT id as journal_purchase_id,(SELECT COUNT(id) FROM erp_journal_purchase_child WHERE journal_purchase_id='${id}' AND is_delete_status='0') as journal_purchase_child_id FROM erp_journal_purchase WHERE id='${id}'`;

        // conn.query(existjournalpurchasedata,(error,data) => {
        //     if (error) 
        //     {   
        //         res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
        //         next();
        //         return;
        //     }
        //     else
        //     {
        //         if (data[0]?.journal_purchase_child_id > 0)
        //         {
        //             res?.send({ Status:400,Count:0,Message:'USER In Use can not delete',Data:[] });
        //             next();
        //             return;
        //         }
        //         else
        //         {
                    var deletejournalpurchasedata = `CALL delete_journal_purchase(?,?)`;
                    conn.query(deletejournalpurchasedata,[id,entry_date],(error,data) => {
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
                            const ip = `USER Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`USER`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'USER Deleted Successfully',Data:[] });
                            
                            // DELETE DEFAULT VOUCHER //
                            res?.send(AllVoucherApis.deletedefaultvoucherdata(id,`journalpurchase`,user_id,req?.headers));
                            next();
                            return;
                        }
                    });
        //         }
        //     }
        // });
    },

    // DELETE USER CHILD DATA API //
    deletejournalpurchasechilddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'USER Child Deleted Successfully',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var deletejournalpurchasechilddata = `CALL delete_journal_purchase_child(?,?)`;
        conn.query(deletejournalpurchasechilddata,[id,entry_date],(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'USER child Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {     
                // INSERT USER ACTIVITY LOG IN TABLE //
                const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                const ip = `USER Child Deleted With This Device ID ${HeaderData.device_id} `;
                const loginuserdetails = `CALL get_user_details(?)`;
                conn.query(loginuserdetails,[user_id],function(error,userdata){
                    if(userdata[0])
                    {   
                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`USER Child`,entry_date],function(error,data){
                
                        });
                    }
                });
                res?.send({ Status:200,Count:1,Message:'USER Child Deleted Successfully',Data:[] });
                next();
                return;
            }
        });
    }
};


export default AllUserApis;
    
