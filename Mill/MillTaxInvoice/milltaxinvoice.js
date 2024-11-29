import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";
import AllVoucherApis from '../../Accounting/Voucher/voucher.js';

const AllMillTaxInvoiceApis = {
    
    // INSERT AND UPDATE mill tax invoice DATA API //
    createmilltaxinvoice: (req,res,next) => {

        let body  = req?.body;
        let child_data = req?.body?.mill_tax_invoice_child_data;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id  = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const godown_id = body?.godown_id ? body?.godown_id : 0;
        const mill_receive_id = body?.mill_receive_id ? body?.mill_receive_id : 0;
        const account_head_id = body?.account_head_id ? body?.account_head_id : 0;
        const tds_on_id = body?.tds_on_id ? body?.tds_on_id : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id : 0;
        const status_id = body?.status_id ? body?.status_id : 0;
        const mill_id = body?.mill_id ? body?.mill_id : 0;
        const mill_tax_invoice_no = body?.mill_tax_invoice_no ? body?.mill_tax_invoice_no : '';
        const mill_tax_invoice_lf_no = body?.mill_tax_invoice_lf_no ? body?.mill_tax_invoice_lf_no : '';
        const mill_tax_invoice_date = body?.mill_tax_invoice_date ? body?.mill_tax_invoice_date : constant.moment().format('YYYY-MM-DD');
        const mill_tax_invoice_total_taka = body?.mill_tax_invoice_total_taka ? body?.mill_tax_invoice_total_taka : 0;
        const mill_tax_invoice_total_meter = body?.mill_tax_invoice_total_meter ? body?.mill_tax_invoice_total_meter : 0;
        const mill_tax_invoice_total_weight = body?.mill_tax_invoice_total_weight ? body?.mill_tax_invoice_total_weight : 0;
        const mill_tax_invoice_total_amount = body?.mill_tax_invoice_total_amount ? body?.mill_tax_invoice_total_amount : 0;
        const mill_tax_invoice_total_dis_amt = body?.mill_tax_invoice_total_dis_amt ? body?.mill_tax_invoice_total_dis_amt : 0;
        const mill_tax_invoice_total_other_charge = body?.mill_tax_invoice_total_other_charge ? body?.mill_tax_invoice_total_other_charge : 0;
        const mill_tax_invoice_total_taxable_amount = body?.mill_tax_invoice_total_taxable_amount ? body?.mill_tax_invoice_total_taxable_amount : 0;
        const mill_tax_invoice_total_sgst = body?.mill_tax_invoice_total_sgst ? body?.mill_tax_invoice_total_sgst : 0;
        const mill_tax_invoice_total_cgst = body?.mill_tax_invoice_total_cgst ? body?.mill_tax_invoice_total_cgst : 0;
        const mill_tax_invoice_total_igst = body?.mill_tax_invoice_total_igst ? body?.mill_tax_invoice_total_igst : 0;
        const mill_tax_invoice_applicable_rate = body?.mill_tax_invoice_applicable_rate ? body?.mill_tax_invoice_applicable_rate : 0;
        const mill_tax_invoice_total_tds = body?.mill_tax_invoice_total_tds ? body?.mill_tax_invoice_total_tds : 0;
        const is_tds_applicable = body?.is_tds_applicable ? body?.is_tds_applicable : 0;
        const is_invoice_base_on_grey = body?.is_invoice_base_on_grey ? body?.is_invoice_base_on_grey : 0;
        const mill_tax_invoice_total_included_tax_amount = body?.mill_tax_invoice_total_included_tax_amount ? body?.mill_tax_invoice_total_included_tax_amount : 0;
        const mill_tax_invoice_total_round_off = body?.mill_tax_invoice_total_round_off ? body?.mill_tax_invoice_total_round_off : 0;
        const mill_tax_invoice_total_net_amount = body?.mill_tax_invoice_total_net_amount ? body?.mill_tax_invoice_total_net_amount : 0;
        const mill_tax_invoice_image = body?.mill_tax_invoice_image ? body?.mill_tax_invoice_image : '';
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

        const invoice_no = `SELECT mill_tax_invoice_no FROM erp_mill_tax_invoice WHERE mill_id='${mill_id}' AND mill_tax_invoice_no='${mill_tax_invoice_no}' AND year_id='${year_id}' AND company_id='${company_id}' AND id!='${id}'`;

        conn.query(invoice_no,(error,taxinvoicedata) => {

            if (taxinvoicedata && taxinvoicedata?.length > 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Invoice Number Already Exist In Mill',Data:[] });
                next();
            }
            else    
            {
                if (id > 0) 
                {   
                    const updatemilltaxinvoice = `CALL create_mill_tax_invoice(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                    conn.query(updatemilltaxinvoice,[id,user_id,branch_id,company_id,year_id,godown_id,mill_receive_id,account_head_id,tds_on_id,nature_of_payment_id,status_id,mill_id,mill_tax_invoice_no,mill_tax_invoice_lf_no,mill_tax_invoice_date,mill_tax_invoice_total_taka,mill_tax_invoice_total_meter,mill_tax_invoice_total_weight,mill_tax_invoice_total_amount,mill_tax_invoice_total_dis_amt,mill_tax_invoice_total_other_charge,mill_tax_invoice_total_taxable_amount,mill_tax_invoice_total_sgst,mill_tax_invoice_total_cgst,mill_tax_invoice_total_igst,mill_tax_invoice_applicable_rate,mill_tax_invoice_total_tds,is_tds_applicable,is_invoice_base_on_grey,mill_tax_invoice_total_included_tax_amount,mill_tax_invoice_total_round_off,mill_tax_invoice_total_net_amount,mill_tax_invoice_image,entry_date,update_date],(error,data) => {

                        if (error)
                        {   
                            res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                            next();
                        }
                        else
                        {   
                            res?.send({ Status:200,Count:0,Message:'mill tax invoice Updated',Data:[] });
                            next();

                            if (child_data && child_data?.length > 0) 
                            {
                                // CALL MILL TAX INVOICE CHILD API //
                                res?.send(AllMillTaxInvoiceApis.createmilltaxinvoicechild(id,child_data,req?.headers));
                                next();
                            }

                            // DELETE DEFAULT VOUCHER //
                            res?.send(AllVoucherApis.deletedefaultvoucherdata(id,`mill`,user_id,req?.headers));
                            next();

                            if (is_tds_applicable == '1' && mill_tax_invoice_total_tds > 0) 
                            {
                                // CALL VOUCHER DEFAULT API //                                
                                res?.send(AllVoucherApis.createdefaultvoucher(user_id,branch_id,company_id,year_id,mill_id,tds_on_id,mill_tax_invoice_total_tds,id,req?.headers,`mill`));
                            }
                                                
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const login_ip = `mill tax invoice Updated With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],(error,userdata) => {
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`mill tax invoice`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                        }  
                    });
                }
                else
                {   
                    const createmilltaxinvoice = `CALL create_mill_tax_invoice(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                    conn.query(createmilltaxinvoice,[id,user_id,branch_id,company_id,year_id,godown_id,mill_receive_id,account_head_id,tds_on_id,nature_of_payment_id,status_id,mill_id,mill_tax_invoice_no,mill_tax_invoice_lf_no,mill_tax_invoice_date,mill_tax_invoice_total_taka,mill_tax_invoice_total_meter,mill_tax_invoice_total_weight,mill_tax_invoice_total_amount,mill_tax_invoice_total_dis_amt,mill_tax_invoice_total_other_charge,mill_tax_invoice_total_taxable_amount,mill_tax_invoice_total_sgst,mill_tax_invoice_total_cgst,mill_tax_invoice_total_igst,mill_tax_invoice_applicable_rate,mill_tax_invoice_total_tds,is_tds_applicable,is_invoice_base_on_grey,mill_tax_invoice_total_included_tax_amount,mill_tax_invoice_total_round_off,mill_tax_invoice_total_net_amount,mill_tax_invoice_image,entry_date,update_date],(error,data) => {

                        if (error || data[0]?.length == 0)
                        {   
                            res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {   
                            res?.send({ Status:200,Count:0,Message:'mill tax invoice Inserted',Data:data[0] });
                            next();
                            
                            if (child_data && child_data?.length > 0) 
                            {
                                // CALL MILL TAX INVOICE CHILD API //
                                res?.send(AllMillTaxInvoiceApis.createmilltaxinvoicechild(data[0][0].mill_tax_invoice_id,child_data,req?.headers));
                            }
                            if (data[0][0].is_tds_applicable == '1' && data[0][0].mill_tax_invoice_total_tds > 0) 
                            {
                                // CALL VOUCHER DEFAULT API //                                
                                res?.send(AllVoucherApis.createdefaultvoucher(data[0][0].user_id,data[0][0].branch_id,data[0][0].company_id,data[0][0].year_id,data[0][0].mill_id,data[0][0].tds_on_id,data[0][0].mill_tax_invoice_total_tds,data[0][0].mill_tax_invoice_id,req?.headers,`mill`));
                            }
                            
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const login_ip = `mill tax invoice Created With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`mill tax invoice`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                        }  
                    });
                }
            }
        });
    },

    // GET mill tax invoice DETAILS DATA API //
    getmilltaxinvoicedetails: (req,res,next) => {

        const mill_tax_invoice_id = req.body?.mill_tax_invoice_id ? req.body?.mill_tax_invoice_id : 0;

        if (mill_tax_invoice_id.length == 0 || mill_tax_invoice_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter mill tax invoice ID',Data:[] });
            next();
            return;
        }

        var getmilltaxinvoicedetails = `CALL get_mill_tax_invoice_details(?)`;
        conn.query(getmilltaxinvoicedetails,[mill_tax_invoice_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].mill_tax_invoice_date = constant.moment(data[0][0].mill_tax_invoice_date).format('YYYY-MM-DD');

                data[1].forEach(element => {
                    element.mill_tax_invoice_child_sgst_amt = (element.mill_tax_invoice_child_sgst_amt + (element.mill_tax_invoice_child_sgst/100) * element.mill_tax_invoice_child_taxable).toFixed(2);
                    element.mill_tax_invoice_child_cgst_amt = (element.mill_tax_invoice_child_cgst_amt + (element.mill_tax_invoice_child_cgst/100) * element.mill_tax_invoice_child_taxable).toFixed(2);
                    element.mill_tax_invoice_child_igst_amt = (element.mill_tax_invoice_child_igst_amt + (element.mill_tax_invoice_child_igst/100) * element.mill_tax_invoice_child_taxable).toFixed(2);
                });

                data[0][0].mill_tax_invoice_child_data = data[1];

                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET mill tax invoice LISTING DATA API //
    getmilltaxinvoicelistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const supplier_id = body?.supplier_id ? body?.supplier_id : 0;
        const mill_id = body?.mill_id ? body?.mill_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;
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
        const All_ID_Query = body?.is_export == true ? ' ' :`finish.id as finish_receive_id,mill.nature_of_payment_id,mill.status_id,mill.tds_on_id,supplier.id as supplier_id,finish.mill_id,mill.state_id,`;

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
        const search_mill_receive_taka = search?.mill_receive_taka ? search?.mill_receive_taka : '';
        const search_mill_receive_qty = search?.mill_receive_qty ? search?.mill_receive_qty : '';
        const search_grey_issue_challan_no = search?.grey_issue_challan_no ? search?.grey_issue_challan_no : '';
        const search_mill_receive_mill_lot_no = search?.mill_receive_mill_lot_no ? search?.mill_receive_mill_lot_no : '';
        const search_supplier_name = search?.supplier_name ? search?.supplier_name.trim().toLowerCase() : '';
        const search_mill_receive_width = search?.mill_receive_width ? search?.mill_receive_width : '';
        const search_mill_receive_shortage = search?.mill_receive_shortage ? search?.mill_receive_shortage : '';
        
        const sea_mill_receive_mill_challan_no = search_mill_receive_mill_challan_no != '' ? ` AND finish.mill_receive_mill_challan_no LIKE '%${search_mill_receive_mill_challan_no}%'` : '';
        const sea_quality_type = search_quality_type != '' ? ` AND quality_type.quality_type LIKE '%${search_quality_type}%'` : '';
        const sea_mill_receive_date = search_mill_receive_date != '' ? ` AND finish.mill_receive_date LIKE '%${search_mill_receive_date}%'` : '';
        const sea_issue_quality = search_issue_quality != '' ? ` AND iss_quality.issue_quality LIKE '%${search_issue_quality}%'` : '';
        const sea_receive_quality = search_receive_quality != '' ? ` AND rec_quality.receive_quality LIKE '%${search_receive_quality}%'` : '';
        const sea_mill_name = search_mill_name != '' ? ` AND mill.party_name LIKE '%${search_mill_name}%'` : '';
        const sea_mill_receive_taka = search_mill_receive_taka != '' ? ` AND finish.mill_receive_taka LIKE '%${search_mill_receive_taka}%'` : '';
        const sea_mill_receive_qty = search_mill_receive_qty != '' ? ` AND finish.mill_receive_qty LIKE '%${search_mill_receive_qty}%'` : '';
        const sea_grey_issue_challan_no = search_grey_issue_challan_no != '' ? ` AND grey.grey_issue_challan_no LIKE '%${search_grey_issue_challan_no}%'` : '';
        const sea_mill_receive_mill_lot_no = search_mill_receive_mill_lot_no != '' ? ` AND finish.mill_receive_mill_lot_no LIKE '%${search_mill_receive_mill_lot_no}%'` : '';
        const sea_supplier_name = search_supplier_name != '' ? ` AND supplier.party_name LIKE '%${search_supplier_name}%'` : '';
        const sea_mill_receive_width = search_mill_receive_width != '' ? ` AND supplier.mill_receive_width LIKE '%${search_mill_receive_width}%'` : '';
        const sea_mill_receive_shortage = search_mill_receive_shortage != '' ? ` AND supplier.mill_receive_shortage LIKE '%${search_mill_receive_shortage}%'` : '';
        const sea_supplier_id = supplier_id > 0 ? ` AND tax_par.supplier_id='${supplier_id}'` : '';
        const sea_mill_id = mill_id > 0 ? ` AND finish.mill_id='${mill_id}'` : '';
        const sea_quality_type_id = quality_type_id > 0 ? ` AND tax_par.quality_type_id='${quality_type_id}'` : '';
        const date_range_query = from_date != '' ? `AND DATE(finish.mill_receive_date)>='${from_date}' AND DATE(finish.mill_receive_date)<='${to_date}'` : '';
        
        var getmilltaxinvoicelistingdata = `SELECT ${All_ID_Query} finish.mill_receive_mill_challan_no,quality_type.type_name as quality_type,finish.mill_receive_date,iss_quality.quality_name as issue_quality,rec_quality.quality_name as receive_quality,mill.party_name as mill_name,finish.mill_receive_taka,finish.mill_receive_qty,grey.grey_issue_challan_no,finish.mill_receive_mill_lot_no,supplier.party_name as supplier_name,finish.mill_receive_width,finish.mill_receive_shortage,mill.is_tds_applicable,mill.party_applicable_rate,state.global_code as state_code,mill.party_gst_no FROM erp_mill_receive as finish LEFT JOIN erp_grey_issue as grey ON grey.id=finish.grey_issue_id LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.id=grey.purchase_tax_invoice_child_id LEFT JOIN erp_purchase_tax_invoice as tax_par ON tax_par.id=tax_child.purchase_tax_invoice_id LEFT JOIN erp_type as quality_type ON quality_type.id=tax_par.quality_type_id LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id LEFT JOIN erp_quality as iss_quality ON iss_quality.id=grey.quality_id LEFT JOIN erp_quality as rec_quality ON rec_quality.id=finish.quality_id LEFT JOIN erp_party as mill ON mill.id=finish.mill_id LEFT JOIN erp_global as state ON state.id=mill.state_id WHERE finish.user_id='${user_id}' AND finish.company_id<='${company_id}' AND finish.year_id<='${year_id}' AND finish.branch_id<='${branch_id}' AND finish.id NOT IN (SELECT mill_tax_child.mill_receive_id FROM erp_mill_tax_invoice_child as mill_tax_child LEFT JOIN erp_mill_tax_invoice as mill_tax_par ON mill_tax_par.id=mill_tax_child.mill_tax_invoice_id WHERE mill_tax_par.user_id='${user_id}' AND mill_tax_par.company_id<='${company_id}' AND mill_tax_par.year_id<='${year_id}' AND mill_tax_par.branch_id<='${branch_id}') AND finish.is_delete_status='0' AND grey.is_delete_status='0' AND tax_child.is_delete_status='0' AND tax_par.is_delete_status='0' ${sea_mill_receive_mill_challan_no} ${sea_quality_type} ${sea_mill_receive_date} ${sea_issue_quality} ${sea_receive_quality} ${sea_mill_name} ${sea_mill_receive_taka} ${sea_mill_receive_qty} ${sea_grey_issue_challan_no} ${sea_mill_receive_mill_lot_no} ${sea_supplier_name} ${sea_mill_receive_width} ${sea_mill_receive_shortage} ${sea_supplier_id} ${sea_mill_id} ${sea_quality_type_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getmilltaxinvoicelistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.mill_receive_date = constant.moment(element.mill_receive_date).format('YYYY-MM-DD');
                element.export = constant.DefaultExportopetions;
            });
            
            var totalmilltaxinvoicecount = `SELECT COUNT(finish.id) as Count FROM erp_mill_receive as finish LEFT JOIN erp_grey_issue as grey ON grey.id=finish.grey_issue_id LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.id=grey.purchase_tax_invoice_child_id LEFT JOIN erp_purchase_tax_invoice as tax_par ON tax_par.id=tax_child.purchase_tax_invoice_id LEFT JOIN erp_type as quality_type ON quality_type.id=tax_par.quality_type_id LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id LEFT JOIN erp_quality as iss_quality ON iss_quality.id=grey.quality_id LEFT JOIN erp_quality as rec_quality ON rec_quality.id=finish.quality_id LEFT JOIN erp_party as mill ON mill.id=finish.mill_id LEFT JOIN erp_global as state ON state.id=mill.state_id WHERE finish.user_id='${user_id}' AND finish.company_id<='${company_id}' AND finish.year_id<='${year_id}' AND finish.branch_id<='${branch_id}' AND finish.id NOT IN (SELECT mill_tax_child.mill_receive_id FROM erp_mill_tax_invoice_child as mill_tax_child LEFT JOIN erp_mill_tax_invoice as mill_tax_par ON mill_tax_par.id=mill_tax_child.mill_tax_invoice_id WHERE mill_tax_par.user_id='${user_id}' AND mill_tax_par.company_id<='${company_id}' AND mill_tax_par.year_id<='${year_id}' AND mill_tax_par.branch_id<='${branch_id}') AND finish.is_delete_status='0' AND grey.is_delete_status='0' AND tax_child.is_delete_status='0' AND tax_par.is_delete_status='0' ${sea_mill_receive_mill_challan_no} ${sea_quality_type} ${sea_mill_receive_date} ${sea_issue_quality} ${sea_receive_quality} ${sea_mill_name} ${sea_mill_receive_taka} ${sea_mill_receive_qty} ${sea_grey_issue_challan_no} ${sea_mill_receive_mill_lot_no} ${sea_supplier_name} ${sea_mill_receive_width} ${sea_mill_receive_shortage} ${sea_supplier_id} ${sea_mill_id} ${sea_quality_type_id} ${date_range_query}`;
        
            conn.query(totalmilltaxinvoicecount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // GET mill tax invoice REPORT LISTING DATA API //
    getmilltaxinvoicereportlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const mill_id = body?.mill_id ? body?.mill_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'mill_tax_par.id-DESC';
        const type = body?.type ? body?.type : '';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`mill.state_id,mill.nature_of_payment_id,mill.status_id,mill.tds_on_id,mill_tax_par.mill_tax_invoice_lf_no,`;
        const type_query_table = type == 'detail' ? `LEFT JOIN erp_quality as quality ON quality.id=mill_tax_child.quality_id` : '';
        const type_query_colums = type == 'detail' ? `quality.quality_name,mill_tax_child.mill_tax_invoice_child_taka as pcs,mill_tax_child.mill_tax_invoice_child_meter as meter,mill_tax_child.mill_tax_invoice_child_rate as rate,` : '';

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

        const search_mill_tax_invoice_no = search?.mill_tax_invoice_no ? search?.mill_tax_invoice_no : '';
        const search_quality_type = search?.quality_type ? search?.quality_type : '';
        const search_mill_tax_invoice_date = search?.mill_tax_invoice_date ? search?.mill_tax_invoice_date : '';
        const search_mill_name = search?.mill_name ? search?.mill_name.trim().toLowerCase() : '';
        const search_mill_tax_invoice_total_taka = search?.mill_tax_invoice_total_taka ? search?.mill_tax_invoice_total_taka : '';
        const search_mill_tax_invoice_total_meter = search?.mill_tax_invoice_total_meter ? search?.mill_tax_invoice_total_meter : '';
        const search_mill_tax_invoice_total_weight = search?.mill_tax_invoice_total_weight ? search?.mill_tax_invoice_total_weight : '';
        const search_mill_tax_invoice_total_taxable_amount = search?.mill_tax_invoice_total_taxable_amount ? search?.mill_tax_invoice_total_taxable_amount : '';
        const search_mill_tax_invoice_total_sgst = search?.mill_tax_invoice_total_sgst ? search?.mill_tax_invoice_total_sgst : '';
        const search_mill_tax_invoice_total_cgst = search?.mill_tax_invoice_total_cgst ? search?.mill_tax_invoice_total_cgst : '';
        const search_mill_tax_invoice_total_igst = search?.mill_tax_invoice_total_igst ? search?.mill_tax_invoice_total_igst : '';
        const search_mill_tax_invoice_total_amount = search?.mill_tax_invoice_total_amount ? search?.mill_tax_invoice_total_amount : '';
        const search_mill_tax_invoice_total_tds = search?.mill_tax_invoice_total_tds ? search?.mill_tax_invoice_total_tds.trim().toLowerCase() : '';
        const search_mill_tax_invoice_total_net_amount = search?.mill_tax_invoice_total_net_amount ? search?.mill_tax_invoice_total_net_amount.trim().toLowerCase() : '';        
        
        const sea_mill_tax_invoice_no = search_mill_tax_invoice_no != '' ? ` AND mill_tax_par.mill_tax_invoice_no LIKE '%${search_mill_tax_invoice_no}%'` : '';
        const sea_quality_type = search_quality_type != '' ? ` AND quality_type.quality_type LIKE '%${search_quality_type}%'` : '';
        const sea_mill_tax_invoice_date = search_mill_tax_invoice_date != '' ? ` AND mill_tax_par.mill_tax_invoice_date LIKE '%${search_mill_tax_invoice_date}%'` : '';
        const sea_mill_name = search_mill_name != '' ? ` AND mill.party_name LIKE '%${search_mill_name}%'` : '';
        const sea_mill_tax_invoice_total_taka = search_mill_tax_invoice_total_taka != '' ? ` AND mill_tax_par.mill_tax_invoice_total_taka LIKE '%${search_mill_tax_invoice_total_taka}%'` : '';
        const sea_mill_tax_invoice_total_meter = search_mill_tax_invoice_total_meter != '' ? ` AND mill_tax_par.mill_tax_invoice_total_meter LIKE '%${search_mill_tax_invoice_total_meter}%'` : '';
        const sea_mill_tax_invoice_total_weight = search_mill_tax_invoice_total_weight != '' ? ` AND mill_tax_par.mill_tax_invoice_total_weight LIKE '%${search_mill_tax_invoice_total_weight}%'` : '';
        const sea_mill_tax_invoice_total_taxable_amount = search_mill_tax_invoice_total_taxable_amount != '' ? ` AND mill_tax_par.mill_tax_invoice_total_taxable_amount LIKE '%${search_mill_tax_invoice_total_taxable_amount}%'` : '';
        const sea_mill_tax_invoice_total_sgst = search_mill_tax_invoice_total_sgst != '' ? ` AND mill_tax_par.mill_tax_invoice_total_sgst LIKE '%${search_mill_tax_invoice_total_sgst}%'` : '';
        const sea_mill_tax_invoice_total_cgst = search_mill_tax_invoice_total_cgst != '' ? ` AND mill_tax_par.purchase_tax_invoice_child_unit_sent LIKE '%${search_mill_tax_invoice_total_cgst}%'` : '';
        const sea_mill_tax_invoice_total_igst = search_mill_tax_invoice_total_igst != '' ? ` AND mill_tax_par.mill_tax_invoice_total_igst LIKE '%${search_mill_tax_invoice_total_igst}%'` : '';
        const sea_mill_tax_invoice_total_amount = search_mill_tax_invoice_total_amount != '' ? ` AND mill_tax_par.mill_tax_invoice_total_amount LIKE '%${search_mill_tax_invoice_total_amount}%'` : '';
        const sea_mill_tax_invoice_total_tds = search_mill_tax_invoice_total_tds != '' ? ` AND mill_tax_par.mill_tax_invoice_total_tds LIKE '%${search_mill_tax_invoice_total_tds}%'` : '';
        const sea_mill_tax_invoice_total_net_amount = search_mill_tax_invoice_total_net_amount != '' ? ` AND mill_tax_par.mill_tax_invoice_total_net_amount LIKE '%${search_mill_tax_invoice_total_net_amount}%'` : '';        
        const sea_mill_id = mill_id > 0 ? ` AND finish.mill_id='${mill_id}'` : '';
        const sea_quality_type_id = quality_type_id > 0 ? ` AND tax_par.quality_type_id='${quality_type_id}'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(mill_tax_par.mill_tax_invoice_date) >='${from_date}' AND DATE(mill_tax_par.mill_tax_invoice_date) <='${to_date}'` : '';
        
        var getmilltaxinvoicereportlistingdata = `SELECT ${All_ID_Query}${type_query_colums} mill_tax_par.id as mill_tax_invoice_id,finish.mill_id,mill_tax_par.mill_tax_invoice_no,quality_type.type_name as quality_type,mill_tax_par.mill_tax_invoice_date,mill.party_name as mill_name,mill_tax_par.mill_tax_invoice_total_taka,mill_tax_par.mill_tax_invoice_total_meter,mill_tax_par.mill_tax_invoice_total_weight,mill_tax_par.mill_tax_invoice_total_taxable_amount,mill_tax_par.mill_tax_invoice_total_sgst,mill_tax_par.mill_tax_invoice_total_cgst,mill_tax_par.mill_tax_invoice_total_igst,mill_tax_par.mill_tax_invoice_total_amount,mill_tax_par.mill_tax_invoice_total_tds,mill_tax_par.mill_tax_invoice_total_net_amount,NULL as mill_challan_no,mill.is_tds_applicable,mill.party_applicable_rate,mill.state_id,state.global_code as state_code,mill.party_gst_no FROM erp_mill_tax_invoice as mill_tax_par LEFT JOIN erp_mill_tax_invoice_child as mill_tax_child ON mill_tax_child.mill_tax_invoice_id=mill_tax_par.id LEFT JOIN erp_mill_receive as finish ON finish.id=mill_tax_child.mill_receive_id LEFT JOIN erp_grey_issue as grey ON grey.id=finish.grey_issue_id LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.id=grey.purchase_tax_invoice_child_id LEFT JOIN erp_purchase_tax_invoice as tax_par ON tax_par.id=tax_child.purchase_tax_invoice_id LEFT JOIN erp_type as quality_type ON quality_type.id=tax_par.quality_type_id LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id LEFT JOIN erp_quality as iss_quality ON iss_quality.id=grey.quality_id LEFT JOIN erp_quality as rec_quality ON rec_quality.id=finish.quality_id LEFT JOIN erp_party as mill ON mill.id=finish.mill_id LEFT JOIN erp_global as state ON state.id=mill.state_id ${type_query_table} WHERE mill_tax_par.user_id='${user_id}' AND mill_tax_par.company_id<='${company_id}' AND mill_tax_par.year_id<='${year_id}' AND mill_tax_par.branch_id<='${branch_id}' AND mill_tax_par.is_delete_status='0' AND mill_tax_child.is_delete_status='0' AND grey.is_delete_status='0' AND tax_child.is_delete_status='0' AND tax_par.is_delete_status='0' ${sea_mill_tax_invoice_no} ${sea_quality_type} ${sea_mill_tax_invoice_date} ${sea_mill_name} ${sea_mill_tax_invoice_total_taka} ${sea_mill_tax_invoice_total_meter} ${sea_mill_tax_invoice_total_weight} ${sea_mill_tax_invoice_total_taxable_amount} ${sea_mill_tax_invoice_total_sgst} ${sea_mill_tax_invoice_total_cgst} ${sea_mill_tax_invoice_total_igst} ${sea_mill_tax_invoice_total_amount} ${sea_mill_tax_invoice_total_tds} ${sea_mill_tax_invoice_total_net_amount} ${sea_mill_id} ${sea_quality_type_id} ${date_range_query} GROUP BY mill_tax_child.mill_tax_invoice_id ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getmilltaxinvoicereportlistingdata,(error,millinvoicedata) => {
            
            if (error || millinvoicedata?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }

            millinvoicedata.forEach(millinvoicedata => {

                var getmilltaxinvoicechallannolistingdata = `SELECT mill_tax_invoice_child_challan_no FROM erp_mill_tax_invoice_child WHERE mill_tax_invoice_id='${millinvoicedata.mill_tax_invoice_id}'`;
                
                conn.query(getmilltaxinvoicechallannolistingdata,(error,challandata) => {
                    
                    const challanno = [];         
                    challandata.forEach(element => {
                        challanno.push(Object.values(element));
                    });
                    millinvoicedata.mill_challan_no = challanno.toString();
                });
               
                millinvoicedata.mill_tax_invoice_date = constant.moment(millinvoicedata.mill_tax_invoice_date).format('YYYY-MM-DD');
                millinvoicedata.export = constant.DefaultExportopetions;
            });

            var totalmilltaxinvoicereportcount = `SELECT COUNT(mill_tax_par.id) as Count FROM erp_mill_tax_invoice as mill_tax_par LEFT JOIN erp_mill_tax_invoice_child as mill_tax_child ON mill_tax_child.mill_tax_invoice_id=mill_tax_par.id LEFT JOIN erp_mill_receive as finish ON finish.id=mill_tax_child.mill_receive_id LEFT JOIN erp_grey_issue as grey ON grey.id=finish.grey_issue_id LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.id=grey.purchase_tax_invoice_child_id LEFT JOIN erp_purchase_tax_invoice as tax_par ON tax_par.id=tax_child.purchase_tax_invoice_id LEFT JOIN erp_type as quality_type ON quality_type.id=tax_par.quality_type_id LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id LEFT JOIN erp_quality as iss_quality ON iss_quality.id=grey.quality_id LEFT JOIN erp_quality as rec_quality ON rec_quality.id=finish.quality_id LEFT JOIN erp_party as mill ON mill.id=finish.mill_id LEFT JOIN erp_global as state ON state.id=mill.state_id WHERE mill_tax_par.user_id='${user_id}' AND mill_tax_par.company_id<='${company_id}' AND mill_tax_par.year_id<='${year_id}' AND mill_tax_par.branch_id<='${branch_id}' AND mill_tax_par.is_delete_status='0' AND mill_tax_child.is_delete_status='0' AND grey.is_delete_status='0' AND tax_child.is_delete_status='0' AND tax_par.is_delete_status='0' ${sea_mill_tax_invoice_no} ${sea_quality_type} ${sea_mill_tax_invoice_date} ${sea_mill_name} ${sea_mill_tax_invoice_total_taka} ${sea_mill_tax_invoice_total_meter} ${sea_mill_tax_invoice_total_weight} ${sea_mill_tax_invoice_total_taxable_amount} ${sea_mill_tax_invoice_total_sgst} ${sea_mill_tax_invoice_total_cgst} ${sea_mill_tax_invoice_total_igst} ${sea_mill_tax_invoice_total_amount} ${sea_mill_tax_invoice_total_tds} ${sea_mill_tax_invoice_total_net_amount} ${sea_mill_id} ${sea_quality_type_id} ${date_range_query} GROUP BY mill_tax_child.mill_tax_invoice_id`;
        
            conn.query(totalmilltaxinvoicereportcount,(error,countdata) => {
                
                res?.send({ Status:200,Count:millinvoicedata?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:millinvoicedata });
                next();
                return;
            });
        });
    },

    // INSERT AND UPDATE MILL TAX INVOICE CHILD DATA API //
    createmilltaxinvoicechild: (tax_invoice_id,req,headers) => {

        let body  = req;
        let header_data = headers;
    
        body.forEach( (data,index) => {

            const id = data?.id ? Number(data?.id) : 0;
            const user_id = data?.user_id ? data?.user_id : 0;
            const mill_tax_invoice_id = tax_invoice_id ? tax_invoice_id : 0;
            const mill_receive_id = data?.mill_receive_id ? data?.mill_receive_id : 0;
            const quality_id = data?.quality_id ? data?.quality_id : 0;
            const gst_id = data?.gst_id ? data?.gst_id : 0;
            const mill_tax_invoice_child_count_on = data?.mill_tax_invoice_child_count_on ? data?.mill_tax_invoice_child_count_on : 0;
            const mill_tax_invoice_child_remark = data?.mill_tax_invoice_child_remark ? data?.mill_tax_invoice_child_remark.trim().toLowerCase() : '';
            const mill_tax_invoice_child_challan_no = data?.mill_tax_invoice_child_challan_no ? data?.mill_tax_invoice_child_challan_no : '';
            const mill_tax_invoice_child_taka = data?.mill_tax_invoice_child_taka ? data?.mill_tax_invoice_child_taka : 0;
            const mill_tax_invoice_child_meter = data?.mill_tax_invoice_child_meter ? data?.mill_tax_invoice_child_meter : 0;
            const mill_tax_invoice_child_weight = data?.mill_tax_invoice_child_weight ? data?.mill_tax_invoice_child_weight : 0;
            const mill_tax_invoice_child_rate_per = data?.mill_tax_invoice_child_rate_per ? data?.mill_tax_invoice_child_rate_per : 0;
            const mill_tax_invoice_child_rate = data?.mill_tax_invoice_child_rate ? data?.mill_tax_invoice_child_rate : 0;
            const mill_tax_invoice_child_amount = data?.mill_tax_invoice_child_amount ? data?.mill_tax_invoice_child_amount : 0;
            const mill_tax_invoice_child_disc_per = data?.mill_tax_invoice_child_disc_per ? data?.mill_tax_invoice_child_disc_per : 0;
            const mill_tax_invoice_child_disc_amt = data?.mill_tax_invoice_child_disc_amt ? data?.mill_tax_invoice_child_disc_amt : 0;
            const mill_tax_invoice_child_other_charge = data?.mill_tax_invoice_child_other_charge ? data?.mill_tax_invoice_child_other_charge : 0;
            const mill_tax_invoice_child_taxable = data?.mill_tax_invoice_child_taxable ? data?.mill_tax_invoice_child_taxable : 0;
            const mill_tax_invoice_child_sgst = data?.mill_tax_invoice_child_sgst ? data?.mill_tax_invoice_child_sgst : 0;
            const mill_tax_invoice_child_cgst = data?.mill_tax_invoice_child_cgst ? data?.mill_tax_invoice_child_cgst : 0;
            const mill_tax_invoice_child_igst = data?.mill_tax_invoice_child_igst ? data?.mill_tax_invoice_child_igst : 0;
            const mill_tax_invoice_child_total = data?.mill_tax_invoice_child_total ? data?.mill_tax_invoice_child_total : 0;
            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

            if (id > 0) 
            {   
                const updatemilltaxinvoicechild = `CALL create_mill_tax_invoice_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updatemilltaxinvoicechild,[id,user_id,mill_tax_invoice_id,mill_receive_id,quality_id,gst_id,mill_tax_invoice_child_count_on,mill_tax_invoice_child_remark,mill_tax_invoice_child_challan_no,mill_tax_invoice_child_taka,mill_tax_invoice_child_meter,mill_tax_invoice_child_weight,mill_tax_invoice_child_rate_per,mill_tax_invoice_child_rate,mill_tax_invoice_child_amount,mill_tax_invoice_child_disc_per,mill_tax_invoice_child_disc_amt,mill_tax_invoice_child_other_charge,mill_tax_invoice_child_taxable,mill_tax_invoice_child_sgst,mill_tax_invoice_child_cgst,mill_tax_invoice_child_igst,mill_tax_invoice_child_total,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    }
                    else
                    {                          
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const login_ip = `Mill tax invoice Child Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Mill tax invoice Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return({ Status:200,Count:0,Message:'Mill tax invoice Child Updated',Data:[] });
                    }  
                });
            }
            else
            {
                const createmilltaxinvoicechild = `CALL create_mill_tax_invoice_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createmilltaxinvoicechild,[id,user_id,mill_tax_invoice_id,mill_receive_id,quality_id,gst_id,mill_tax_invoice_child_count_on,mill_tax_invoice_child_remark,mill_tax_invoice_child_challan_no,mill_tax_invoice_child_taka,mill_tax_invoice_child_meter,mill_tax_invoice_child_weight,mill_tax_invoice_child_rate_per,mill_tax_invoice_child_rate,mill_tax_invoice_child_amount,mill_tax_invoice_child_disc_per,mill_tax_invoice_child_disc_amt,mill_tax_invoice_child_other_charge,mill_tax_invoice_child_taxable,mill_tax_invoice_child_sgst,mill_tax_invoice_child_cgst,mill_tax_invoice_child_igst,mill_tax_invoice_child_total,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return { Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error };
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const login_ip = `Mill Tax Invoice Child Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails,[user_id],(error,userdata) => {

                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Mill Tax Invoice Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return { Status:200,Count:0,Message:'Mill Tax Invoice Child Inserted',Data:data[0] };
                    }  
                });
            }
        });
    },

    // DELETE Mill Tax Invoice DATA API //
    deletemilltaxinvoicedata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Mill Tax Invoice ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        // var existmilltaxinvoicedata = `SELECT id as mill_tax_invoice_id,(SELECT COUNT(id) FROM erp_mill_tax_invoice_child WHERE mill_tax_invoice_id='${id}' AND is_delete_status='0') as mill_tax_invoice_child_id FROM erp_mill_tax_invoice WHERE id='${id}'`;

        // conn.query(existmilltaxinvoicedata,(error,data) => {
        //     if (error) 
        //     {   
        //         res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
        //         next();
        //         return;
        //     }
        //     else
        //     {
                // if (data[0]?.mill_tax_invoice_child_id > 0)
                // {
                //     res?.send({ Status:400,Count:0,Message:'Mill Tax Invoice In Use can not delete',Data:[] });
                //     next();
                //     return;
                // }
                // else
                // {
                    var deletemilltaxinvoicedata = `CALL delete_mill_tax_invoice(?,?)`;
                    conn.query(deletemilltaxinvoicedata,[id,entry_date],(error,data) => {
                        if (error) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Mill Tax Invoice Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {     
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `Mill Tax Invoice  Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Mill Tax Invoice `,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Mill Tax Invoice Deleted Successfully',Data:[]});

                            // DELETE DEFAULT VOUCHER //
                            res?.send(AllVoucherApis.deletedefaultvoucherdata(id,`mill`,user_id,req?.headers));
                            next();
                            return;
                        }
                    });
                // }
    //         }
    //     });
    },

    // DELETE Mill Tax Invoice CHILD DATA API //
    deletemilltaxinvoicechilddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Mill Tax Invoice Child Deleted Successfully!!!',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var deletemilltaxinvoicechilddata = `CALL delete_mill_tax_invoice_child(?,?)`;
        conn.query(deletemilltaxinvoicechilddata,[id,entry_date],(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Tax Invoice Child Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {     
                // INSERT USER ACTIVITY LOG IN TABLE //
                const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                const ip = `Mill Tax Invoice  Deleted With This Device ID ${HeaderData.device_id} `;
                const loginuserdetails = `CALL get_user_details(?)`;
                conn.query(loginuserdetails,[user_id],function(error,userdata){
                    if(userdata[0])
                    {   
                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Mill Tax Invoice `,entry_date],function(error,data){
                
                        });
                    }
                });
                res?.send({ Status:200,Count:1,Message:'Mill Tax Invoice Child Deleted Successfully',Data:[] });
                next();
                return;
            }
        });        
    }
};


export default AllMillTaxInvoiceApis;
    
