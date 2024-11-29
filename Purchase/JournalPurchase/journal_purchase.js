import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";
import AllVoucherApis from '../../Accounting/Voucher/voucher.js';

const AllJournalPurchaseApis = {
    
    // INSERT AND UPDATE JOURNAL PURCHASE DATA API //
    createjournalpurchase: (req,res,next) => {

        let body  = req?.body;
        let child_data = req?.body?.journal_child_data ? req?.body?.journal_child_data : '';
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const supplier_id = body?.supplier_id ? body?.supplier_id : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id : 0;
        const status_id = body?.status_id ? body?.status_id : 0;
        const tds_on_id = body?.tds_on_id ? body?.tds_on_id : 0;
        const company_id  = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const godown_id = body?.godown_id ? body?.godown_id : 0;
        const account_head_id = body?.account_head_id ? body?.account_head_id : 0;
        const journal_purchase_account_type = body?.journal_purchase_account_type ? body?.journal_purchase_account_type : 0;
        const journal_purchase_invoice_no = body?.journal_purchase_invoice_no ? body?.journal_purchase_invoice_no : '';
        const journal_purchase_lf_no = body?.journal_purchase_lf_no ? body?.journal_purchase_lf_no : '';
        const journal_purchase_invoice_date = body?.journal_purchase_invoice_date ? body?.journal_purchase_invoice_date : constant.moment().format('YYYY-MM-DD');
        const journal_purchase_credit_days = body?.journal_purchase_credit_days ? body?.journal_purchase_credit_days : '';
        const journal_purchase_remark = body?.journal_purchase_remark ? body?.journal_purchase_remark.toLowerCase() : '';
        const is_rcm = body?.is_rcm ? body?.is_rcm : 0;
        const is_tds_applicable = body?.is_tds_applicable ? body?.is_tds_applicable : 0;
        const journal_purchase_applicable_rate = body?.journal_purchase_applicable_rate ? body?.journal_purchase_applicable_rate : 0;
        const journal_purchase_tds = body?.journal_purchase_tds ? body?.journal_purchase_tds : 0;
        const journal_purchase_tds_with_total_net_amount = body?.journal_purchase_tds_with_total_net_amount ? body?.journal_purchase_tds_with_total_net_amount : 0;
        const journal_purchase_round_off = body?.journal_purchase_round_off ? body?.journal_purchase_round_off : 0;
        const journal_purchase_total_amount = body?.journal_purchase_total_amount ? body?.journal_purchase_total_amount : 0;
        const journal_purchase_net_amount = body?.journal_purchase_net_amount ? body?.journal_purchase_net_amount : 0;
        const journal_purchase_image = body?.journal_purchase_image ? body?.journal_purchase_image : '';
                
        // PURCHASE JOURNAL MAIN TABLE UPDATE COLUM WHEN CHILD ENTERY //
        const journal_purchase_child_total_amount = body?.journal_purchase_child_total_amount ? body?.journal_purchase_child_total_amount : 0;
        const journal_purchase_child_total_disc = body?.journal_purchase_child_total_disc ? body?.journal_purchase_child_total_disc : 0;
        const journal_purchase_child_total_taxable = body?.journal_purchase_child_total_taxable ? body?.journal_purchase_child_total_taxable : 0;
        const journal_purchase_child_total_sgst = body?.journal_purchase_child_total_sgst ? body?.journal_purchase_child_total_sgst : 0;
        const journal_purchase_child_total_cgst = body?.journal_purchase_child_total_cgst ? body?.journal_purchase_child_total_cgst : 0;
        const journal_purchase_child_total_igst = body?.journal_purchase_child_total_igst ? body?.journal_purchase_child_total_igst : 0;
        const journal_purchase_tcs_percentage = body?.journal_purchase_tcs_percentage ? body?.journal_purchase_tcs_percentage : 0;
        const journal_purchase_tcs_amount = body?.journal_purchase_tcs_amount ? body?.journal_purchase_tcs_amount : 0;
        const journal_purchase_child_net_total = body?.journal_purchase_child_net_total ? body?.journal_purchase_child_net_total : 0;
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

        const invoice_no = `SELECT journal_purchase_invoice_no FROM erp_journal_purchase WHERE supplier_id='${supplier_id}' AND journal_purchase_invoice_no='${journal_purchase_invoice_no}' AND year_id='${year_id}' AND company_id='${company_id}' AND id!='${id}' AND is_delete_status='0'`;

        conn.query(invoice_no,(error,taxinvoicedata) => {

            if (taxinvoicedata && taxinvoicedata?.length > 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Invoice Number Already Exist',Data:[] });
                next();
            }
            else
            {
                if (id > 0) 
                {   
                    const updatejournalpurchase = `CALL create_journal_purchase(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                    conn.query(updatejournalpurchase,[id,user_id,supplier_id,nature_of_payment_id,status_id,tds_on_id,company_id,year_id,branch_id,godown_id,account_head_id,journal_purchase_account_type,journal_purchase_invoice_no,journal_purchase_lf_no,journal_purchase_invoice_date,journal_purchase_credit_days,journal_purchase_remark,is_rcm,is_tds_applicable,journal_purchase_applicable_rate,journal_purchase_tds,journal_purchase_tds_with_total_net_amount,journal_purchase_round_off,journal_purchase_total_amount,journal_purchase_net_amount,journal_purchase_child_total_amount,journal_purchase_child_total_disc,journal_purchase_child_total_taxable,journal_purchase_child_total_sgst,journal_purchase_child_total_cgst,journal_purchase_child_total_igst,journal_purchase_tcs_percentage,journal_purchase_tcs_amount,journal_purchase_child_net_total,journal_purchase_image,entry_date,update_date],(error,data) => {
                        
                        if (error)
                        {   
                            res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                            next();
                        }
                        else
                        {   
                            res?.send({ Status:200,Count:0,Message:'Journal Purchase Updated',Data:[] });
                            next();
                            
                            if (child_data && child_data?.length > 0) 
                            {
                                // CALL JOURNAL PUCHASE CHILD API //
                                res?.send(AllJournalPurchaseApis.createjournalpurchasechild(id,child_data,req?.headers));
                                next();
                            }
                            
                            // DELETE DEFAULT VOUCHER //
                            res?.send(AllVoucherApis.deletedefaultvoucherdata(id,`journalpurchase`,user_id,req?.headers));
                            next();
                            
                            if (is_tds_applicable == '1' && journal_purchase_tds > 0) 
                            {
                                // CALL VOUCHER DEFAULT API //
                                res?.send(AllVoucherApis.createdefaultvoucher(user_id,branch_id,company_id,year_id,supplier_id,tds_on_id,journal_purchase_tds,id,req?.headers,`journalpurchase`));
                            }

                            
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `Journal Purchase Updated With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],(error,userdata) => {
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Journal Purchase`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                        }  
                    });
                }
                else
                {
                    const createjournalpurchase = `CALL create_journal_purchase(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                    conn.query(createjournalpurchase,[id,user_id,supplier_id,nature_of_payment_id,status_id,tds_on_id,company_id,year_id,branch_id,godown_id,account_head_id,journal_purchase_account_type,journal_purchase_invoice_no,journal_purchase_lf_no,journal_purchase_invoice_date,journal_purchase_credit_days,journal_purchase_remark,is_rcm,is_tds_applicable,journal_purchase_applicable_rate,journal_purchase_tds,journal_purchase_tds_with_total_net_amount,journal_purchase_round_off,journal_purchase_total_amount,journal_purchase_net_amount,journal_purchase_child_total_amount,journal_purchase_child_total_disc,journal_purchase_child_total_taxable,journal_purchase_child_total_sgst,journal_purchase_child_total_cgst,journal_purchase_child_total_igst,journal_purchase_tcs_percentage,journal_purchase_tcs_amount,journal_purchase_child_net_total,journal_purchase_image,entry_date,update_date],(error,data) => {
                        
                        if (error || data[0]?.length == 0)
                        {   
                            res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                            next();
                        }
                        else
                        {   
                            res?.send({ Status:200,Count:0,Message:'Journal Purchase Inserted',Data:data[0][0] });
                            next();
                            
                            if (child_data && child_data?.length > 0) 
                            {
                                // CALL JOURNAL PUCHASE CHILD API //
                                res?.send(AllJournalPurchaseApis.createjournalpurchasechild(data[0][0].journal_purchse_id,child_data,req?.headers));
                            }
                            
                            if (data[0][0].is_tds_applicable == '1' && data[0][0].journal_purchase_tds > 0) 
                            {
                                 // CALL VOUCHER DEFAULT API //
                                res?.send(AllVoucherApis.createdefaultvoucher(data[0][0].user_id,data[0][0].branch_id,data[0][0].company_id,data[0][0].year_id,data[0][0].supplier_id,data[0][0].tds_on_id,data[0][0].journal_purchase_tds,data[0][0].journal_purchse_id,req?.headers,`journalpurchase`));
                            }
                            
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `Journal Purchase Created With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Journal Purchase`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                        }  
                    });
                }
            }
        });
    },

    // GET JOURNAL PURCHASE AND CHILD DETAILS DATA API //
    getjournalpurchasedetails: (req,res,next) => {

        const journal_purchase_id = req.body?.journal_purchase_id ? req.body?.journal_purchase_id : 0;
        if (journal_purchase_id.length == 0 || journal_purchase_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter JOURNAL PURCHASE ID',Data:[] });
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

    // GET JOURNAL PURCHASE AND CHILD LISTING DATA API //
    getjournalpurchaselistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const supplier_id = body?.supplier_id ? body?.supplier_id : 0;
        const is_rcm = body?.is_rcm ? body?.is_rcm : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'parent.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const is_export = body?.is_export ? body?.is_export : '';
        const export_type = body?.export_type ? body?.export_type : '';
        const limit_query = is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = is_export == true ? ' ' :`parent.id,parent.id as journal_purchase_id,`;

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

        if (export_type == '') 
        {
            const search_journal_purchase_invoice_date = search?.journal_purchase_invoice_date ? search?.journal_purchase_invoice_date : '';
            const search_journal_purchase_lf_no = search?.journal_purchase_lf_no ? search?.journal_purchase_lf_no : '';
            const search_journal_purchase_invoice_no = search?.journal_purchase_invoice_no ? search?.journal_purchase_invoice_no.trim() : '';
            const search_supplier_name = search?.supplier_name ? search?.supplier_name.trim().toLowerCase() : '';
            const search_journal_purchase_child_net_total = search?.journal_purchase_child_net_total ? search?.journal_purchase_child_net_total.trim() : '';
            const search_journal_purchase_tds = search?.journal_purchase_tds ? search?.journal_purchase_tds.trim() : '';
            const search_journal_purchase_child_total_taxable = search?.journal_purchase_child_total_taxable ? search?.journal_purchase_child_total_taxable.trim() : '';
            const search_journal_purchase_child_total_sgst = search?.journal_purchase_child_total_sgst ? search?.journal_purchase_child_total_sgst.trim() : '';
            const search_journal_purchase_child_total_cgst = search?.journal_purchase_child_total_cgst ? search?.journal_purchase_child_total_cgst.trim() : '';
            const search_journal_purchase_child_total_igst = search?.journal_purchase_child_total_igst ? search?.journal_purchase_child_total_igst.trim() : '';

            const sea_supplier_id = supplier_id > 0? ` AND parent.supplier_id='${supplier_id}'` : '';
            const sea_journal_purchase_invoice_date = search_journal_purchase_invoice_date != '' ? ` AND parent.journal_purchase_invoice_date LIKE '%${search_journal_purchase_invoice_date}%'` : '';
            const sea_journal_purchase_lf_no = search_journal_purchase_lf_no != '' ? ` AND parent.journal_purchase_lf_no LIKE '%${search_journal_purchase_lf_no}%'` : '';
            const sea_journal_purchase_invoice_no = search_journal_purchase_invoice_no != '' ? ` AND parent.journal_purchase_invoice_no LIKE '%${search_journal_purchase_invoice_no}%'` : '';
            const sea_supplier_name = search_supplier_name != '' ? ` AND supplier.party_name LIKE '%${search_supplier_name}%'` : '';
            const sea_journal_purchase_child_net_total = search_journal_purchase_child_net_total != '' ? ` AND parent.journal_purchase_child_net_total LIKE '%${search_journal_purchase_child_net_total}%'` : '';
            const sea_journal_purchase_tds = search_journal_purchase_tds != '' ? ` AND parent.journal_purchase_tds LIKE '%${search_journal_purchase_tds}%'` : '';
            const sea_journal_purchase_child_total_taxable = search_journal_purchase_child_total_taxable != '' ? ` AND parent.journal_purchase_child_total_taxable LIKE '%${search_journal_purchase_child_total_taxable}%'` : '';
            const sea_journal_purchase_child_total_sgst = search_journal_purchase_child_total_sgst != '' ? ` AND parent.journal_purchase_child_total_sgst LIKE '%${search_journal_purchase_child_total_sgst}%'` : '';
            const sea_journal_purchase_child_total_cgst = search_journal_purchase_child_total_cgst != '' ? ` AND parent.journal_purchase_child_total_cgst LIKE '%${search_journal_purchase_child_total_cgst}%'` : '';
            const sea_journal_purchase_child_total_igst = search_journal_purchase_child_total_igst != '' ? ` AND parent.journal_purchase_child_total_igst LIKE '%${search_journal_purchase_child_total_igst}%'` : '';
            const is_rcm_query = is_rcm > 0 ? ` AND parent.is_rcm>='1'` : '';
            const date_range_query = from_date != '' ? ` AND DATE(parent.journal_purchase_invoice_date) >='${from_date}' AND DATE(parent.journal_purchase_invoice_date) <='${to_date}'` : '';
            

            var getjournalpurchaselistingdata = `SELECT ${All_ID_Query} parent.supplier_id,DATE_FORMAT(parent.journal_purchase_invoice_date, "%d-%m-%Y") as journal_purchase_invoice_date,parent.journal_purchase_lf_no,parent.journal_purchase_invoice_no,parent.journal_purchase_tds,parent.journal_purchase_child_net_total,parent.journal_purchase_child_total_taxable,parent.journal_purchase_child_total_sgst,parent.journal_purchase_child_total_cgst,parent.journal_purchase_child_total_igst,supplier.party_name as supplier_name,state.global_code as state_code,supplier.state_id FROM erp_journal_purchase as parent LEFT JOIN erp_party as supplier ON supplier.id=parent.supplier_id LEFT JOIN erp_global as state ON state.id=supplier.state_id WHERE parent.is_delete_status='0' AND parent.user_id='${user_id}' AND parent.company_id<='${company_id}' AND parent.year_id<='${year_id}' AND parent.branch_id<='${branch_id}' ${sea_supplier_id} ${sea_journal_purchase_invoice_date} ${sea_journal_purchase_lf_no} ${sea_journal_purchase_invoice_no} ${sea_supplier_name} ${sea_journal_purchase_child_net_total} ${sea_journal_purchase_tds} ${sea_journal_purchase_child_total_taxable} ${sea_journal_purchase_child_total_sgst} ${sea_journal_purchase_child_total_cgst} ${sea_journal_purchase_child_total_igst} ${is_rcm_query} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`; 

            conn.query(getjournalpurchaselistingdata,(error,data) => {
                
                if (error || data?.length == 0) 
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }

                data.forEach(element => { element.export = constant.DefaultExportopetions; });
                
                var totaljournalpurchasecount = `SELECT COUNT(parent.id) as Count FROM erp_journal_purchase as parent LEFT JOIN erp_party as supplier ON supplier.id=parent.supplier_id LEFT JOIN erp_global as state ON state.id=supplier.state_id WHERE parent.is_delete_status='0' AND parent.user_id='${user_id}' AND parent.company_id<='${company_id}' AND parent.year_id<='${year_id}' AND parent.branch_id<='${branch_id}' ${sea_supplier_id} ${sea_journal_purchase_invoice_date} ${sea_journal_purchase_lf_no} ${sea_journal_purchase_invoice_no} ${sea_supplier_name} ${sea_journal_purchase_child_net_total} ${sea_journal_purchase_tds} ${sea_journal_purchase_child_total_taxable} ${sea_journal_purchase_child_total_sgst} ${sea_journal_purchase_child_total_cgst} ${sea_journal_purchase_child_total_igst} ${is_rcm_query} ${date_range_query}`;
            
                conn.query(totaljournalpurchasecount,(error,countdata) => {
                    
                    res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                    next();
                    return;
                });
            });
        }
        else
        {   
            const is_rcm_query = is_rcm > 0 ? ` AND parent.is_rcm>='1'` : '';
            
            let getjournalpurchaseexportdata = (export_type == 'all-asc') ? `SELECT parent.supplier_id,DATE_FORMAT(parent.journal_purchase_invoice_date, "%d-%m-%Y") as invoice_date,parent.journal_purchase_lf_no as lf_no,supplier.party_gst_no as gst_no,parent.journal_purchase_invoice_no as invoice_no,parent.journal_purchase_tds as tds,parent.journal_purchase_child_net_total as net_amount,parent.journal_purchase_child_total_taxable as taxable,parent.journal_purchase_child_total_sgst as sgst,parent.journal_purchase_child_total_cgst as cgst,parent.journal_purchase_child_total_igst as igst,supplier.party_name as supplier_name,state.global_code as state_code,supplier.state_id FROM erp_journal_purchase as parent LEFT JOIN erp_party as supplier ON supplier.id=parent.supplier_id LEFT JOIN erp_global as state ON state.id=supplier.state_id WHERE parent.is_delete_status='0' AND parent.user_id='${user_id}' AND parent.company_id<='${company_id}' AND parent.year_id<='${year_id}' AND parent.branch_id<='${branch_id}' ${is_rcm_query} ORDER BY ${orderby} ${orderformat}` : `SELECT child.supplier_id,DATE_FORMAT(parent.journal_purchase_invoice_date, "%d-%m-%Y") as invoice_date,parent.journal_purchase_lf_no as lf_no,supplier.party_gst_no as gst_no,parent.journal_purchase_invoice_no as invoice_no,supplier.party_name as supplier_name,buyer.party_name as description,child.journal_purchase_child_hsn as hsn,gst.gst_percentage,child.journal_purchase_child_taxable as taxable,(parent.journal_purchase_child_total_sgst + (child.journal_purchase_child_sgst/100) * child.journal_purchase_child_taxable) as sgst,(parent.journal_purchase_child_total_cgst + (child.journal_purchase_child_cgst/100) * child.journal_purchase_child_taxable) as cgst,(parent.journal_purchase_child_total_igst + (child.journal_purchase_child_igst/100) * child.journal_purchase_child_taxable) as igst,child.journal_purchase_child_unit as unit,child.journal_purchase_child_qty as qty,child.journal_purchase_child_rate as rate,child.journal_purchase_child_disc_amount as disc_amt,child.journal_purchase_child_amount as amount,child.journal_purchase_child_total as net_amount FROM erp_journal_purchase as parent LEFT JOIN erp_party as supplier ON supplier.id=parent.supplier_id LEFT JOIN erp_global as state ON state.id=supplier.state_id LEFT JOIN erp_journal_purchase_child as child ON child.journal_purchase_id=parent.id LEFT JOIN erp_party as buyer ON buyer.id=child.supplier_id LEFT JOIN erp_gst as gst ON gst.id=child.gst_id WHERE parent.is_delete_status='0' AND parent.user_id='${user_id}' AND parent.company_id<='${company_id}' AND parent.year_id<='${year_id}' AND parent.branch_id<='${branch_id}' ${is_rcm_query} ORDER BY ${orderby} ${orderformat}` ;

            conn.query(getjournalpurchaseexportdata,(error,data) => {

                if (error || data?.length == 0) 
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {
                    res?.send({ Status:200,Count:data?.length,Message:'Data found',Data:data });
                    next();
                    return;
                } 
            });
        }
    },

    // INSERT AND UPDATE JOURNAL PURCHASE CHILD DATA API //
    createjournalpurchasechild: (journal_id,req,headers) => {

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
                const updatejournalpurchasechild = `CALL create_journal_purchase_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updatejournalpurchasechild,[id,user_id,journal_purchase_id,supplier_id,gst_id,journal_purchase_child_remark,journal_purchase_child_hsn,journal_purchase_child_unit,journal_purchase_child_qty,journal_purchase_child_rate_per_type,journal_purchase_child_rate,journal_purchase_child_amount,journal_purchase_child_disc_per,journal_purchase_child_disc_amount,journal_purchase_child_taxable,journal_purchase_child_sgst,journal_purchase_child_cgst,journal_purchase_child_igst,journal_purchase_child_total,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    }
                    else
                    {                          
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `Journal Purchase Child Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Journal Purchase Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return({ Status:200,Count:0,Message:'Journal Purchase Child Updated',Data:[] });
                    }  
                });
            }
            else
            {
                const createjournalpurchasechild = `CALL create_journal_purchase_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createjournalpurchasechild,[id,user_id,journal_purchase_id,supplier_id,gst_id,journal_purchase_child_remark,journal_purchase_child_hsn,journal_purchase_child_unit,journal_purchase_child_qty,journal_purchase_child_rate_per_type,journal_purchase_child_rate,journal_purchase_child_amount,journal_purchase_child_disc_per,journal_purchase_child_disc_amount,journal_purchase_child_taxable,journal_purchase_child_sgst,journal_purchase_child_cgst,journal_purchase_child_igst,journal_purchase_child_total,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return { Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error };
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `Journal Purchase Child Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails,[user_id],(error,userdata) => {

                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Journal Purchase Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return { Status:200,Count:0,Message:'Journal Purchase Child Inserted',Data:data[0] };
                    }  
                });
            }
        });
    },

    // DELETE JOURNAL PURCHASE DATA API //
    deletejournalpurchasedata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Journal Purchase ID',Data:[] });
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
        //             res?.send({ Status:400,Count:0,Message:'Journal Purchase In Use can not delete',Data:[] });
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
                            const ip = `Journal Purchase Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Journal Purchase`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Journal Purchase Deleted Successfully',Data:[] });
                            
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

    // DELETE JOURNAL PURCHASE CHILD DATA API //
    deletejournalpurchasechilddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Journal Purchase Child Deleted Successfully',Data:[] });
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
                res?.send({ Status:400,Count:0,Message:'journal purchase child Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {     
                // INSERT USER ACTIVITY LOG IN TABLE //
                const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                const ip = `Journal Purchase Child Deleted With This Device ID ${HeaderData.device_id} `;
                const loginuserdetails = `CALL get_user_details(?)`;
                conn.query(loginuserdetails,[user_id],function(error,userdata){
                    if(userdata[0])
                    {   
                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Journal Purchase Child`,entry_date],function(error,data){
                
                        });
                    }
                });
                res?.send({ Status:200,Count:1,Message:'Journal Purchase Child Deleted Successfully',Data:[] });
                next();
                return;
            }
        });
    }
};


export default AllJournalPurchaseApis;
    
