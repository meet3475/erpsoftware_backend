import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";
import AllVoucherApis from '../../Accounting/Voucher/voucher.js';

const AllSaleReturnApis = {

    // INSERT AND UPDATE sale RETURN DATA API //
    createsalereturn: (req,res,next) => {

        let body  = req?.body;
        let child_data = req?.body?.sale_return_child_data;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id  = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const godown_id = body?.godown_id ? body?.godown_id : 0;
        const buyer_id = body?.buyer_id ? body?.buyer_id : 0;
        const haste_id = body?.haste_id ? body?.haste_id : 0;
        const broker_id = body?.broker_id ? body?.broker_id : 0;
        const delivery_party_godown_id = body?.delivery_party_godown_id ? body?.delivery_party_godown_id : 0;
        const invoice_no_id = body?.invoice_no_id ? body?.invoice_no_id : 0;
        const transporter_id = body?.transporter_id ? body?.transporter_id : 0;
        const tds_on_id = body?.tds_on_id ? body?.tds_on_id : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id : 0;
        const status_id = body?.status_id ? body?.status_id : 0;      
        const sale_return_type_id = body?.sale_return_type_id ? body?.sale_return_type_id : 0;
        const sale_tax_invoice_ids = JSON.stringify(body?.sale_tax_invoice_ids ? body?.sale_tax_invoice_ids : []);
        const sale_return_account_type = body?.sale_return_account_type ? body?.sale_return_account_type : '';
        const sale_return_prefix = body?.sale_return_prefix ? body?.sale_return_prefix : '';
        const sale_return_note_no = body?.sale_return_note_no ? body?.sale_return_note_no : '';
        const sale_return_date = body?.sale_return_date ? body?.sale_return_date : constant.moment().format('YYYY-MM-DD');
        const sale_return_other_transporter = body?.sale_return_other_transporter ? body?.sale_return_other_transporter : '';
        const sale_return_lr_no = body?.sale_return_lr_no ? body?.sale_return_lr_no : '';
        const sale_return_remark = body?.sale_return_remark ? body?.sale_return_remark.trim().toLowerCase() : '';
        const is_without_inventory = body?.is_without_inventory ? body?.is_without_inventory : 0;
        const sale_return_document_no = body?.sale_return_document_no ? body?.sale_return_document_no : '';
        const sale_return_document_date = body?.sale_return_document_date ? body?.sale_return_document_date : constant.moment().format('YYYY-MM-DD');
        const sale_return_lf_no = body?.sale_return_lf_no ? body?.sale_return_lf_no : '';
        const sale_return_days = body?.sale_return_days ? body?.sale_return_days : ''
        const is_tds_applicable = body?.is_tds_applicable ? body?.is_tds_applicable : 0;
        const sale_return_tds_applicable_rate = body?.sale_return_tds_applicable_rate ? body?.sale_return_tds_applicable_rate : 0;
        const sale_return_total_tds = body?.sale_return_total_tds ? body?.sale_return_total_tds : 0;
        const sale_return_total_unit_sent = body?.sale_return_total_unit_sent ? body?.sale_return_total_unit_sent : 0;
        const sale_return_total_qty_sent = body?.sale_return_total_qty_sent ? body?.sale_return_total_qty_sent : 0;
        const sale_return_amount = body?.sale_return_amount ? body?.sale_return_amount : 0;
        const sale_return_total_disc_amt = body?.sale_return_total_disc_amt ? body?.sale_return_total_disc_amt : 0;
        const sale_return_total_freight = body?.sale_return_total_freight ? body?.sale_return_total_freight : 0;
        const sale_return_total_taxable = body?.sale_return_total_taxable ? body?.sale_return_total_taxable : 0;
        const sale_return_total_sgst = body?.sale_return_total_sgst ? body?.sale_return_total_sgst : 0;
        const sale_return_total_cgst = body?.sale_return_total_cgst ? body?.sale_return_total_cgst : 0;
        const sale_return_total_igst = body?.sale_return_total_igst ? body?.sale_return_total_igst : 0;
        const sale_return_total_amount = body?.sale_return_total_amount ? body?.sale_return_total_amount : 0;
        const sale_return_round_off = body?.sale_return_round_off ? body?.sale_return_round_off : 0;
        const sale_return_total_net_amount = body?.sale_return_total_net_amount ? body?.sale_return_total_net_amount : 0;
        const sale_return_tds_with_total_net_amount = body?.sale_return_tds_with_total_net_amount ? body?.sale_return_tds_with_total_net_amount : 0;
        const sale_return_image = body?.sale_return_image ? body?.sale_return_image : '';
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
            const updatesalereturn = `CALL create_sale_return(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatesalereturn,[id,user_id,branch_id,company_id,year_id,godown_id,buyer_id,haste_id,broker_id,delivery_party_godown_id,invoice_no_id,transporter_id,tds_on_id,nature_of_payment_id,status_id,sale_return_type_id,sale_tax_invoice_ids,sale_return_account_type,sale_return_prefix,sale_return_note_no,sale_return_date,sale_return_other_transporter,sale_return_lr_no,sale_return_remark,is_without_inventory,sale_return_document_no,sale_return_document_date,sale_return_lf_no,sale_return_days,is_tds_applicable,sale_return_tds_applicable_rate,sale_return_total_tds,sale_return_total_unit_sent,sale_return_total_qty_sent,sale_return_amount,sale_return_total_disc_amt,sale_return_total_freight,sale_return_total_taxable,sale_return_total_sgst,sale_return_total_cgst,sale_return_total_igst,sale_return_total_amount,sale_return_round_off,sale_return_total_net_amount,sale_return_image,sale_return_tds_with_total_net_amount,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:' sale Return Updated',Data:[] });
                    next();
                    
                    if (child_data && child_data.length > 0) 
                    {
                        // CALL PUCHASE RETURN CHILD API //
                        res?.send(AllSaleReturnApis.createsalereturnchild(id,child_data,req?.headers));
                        next();
                    }
                                        
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = ` sale Return Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,` sale Return`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createsalereturn = `CALL create_sale_return(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createsalereturn,[id,user_id,branch_id,company_id,year_id,godown_id,buyer_id,haste_id,broker_id,delivery_party_godown_id,invoice_no_id,transporter_id,tds_on_id,nature_of_payment_id,status_id,sale_return_type_id,sale_tax_invoice_ids,sale_return_account_type,sale_return_prefix,sale_return_note_no,sale_return_date,sale_return_other_transporter,sale_return_lr_no,sale_return_remark,is_without_inventory,sale_return_document_no,sale_return_document_date,sale_return_lf_no,sale_return_days,is_tds_applicable,sale_return_tds_applicable_rate,sale_return_total_tds,sale_return_total_unit_sent,sale_return_total_qty_sent,sale_return_amount,sale_return_total_disc_amt,sale_return_total_freight,sale_return_total_taxable,sale_return_total_sgst,sale_return_total_cgst,sale_return_total_igst,sale_return_total_amount,sale_return_round_off,sale_return_total_net_amount,sale_return_tds_with_total_net_amount,sale_return_image,entry_date,update_date],(error,data) => {

                if (error || data[0]?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:' sale Return Inserted',Data:data[0] });
                    next();
                    
                    if (child_data && child_data.length > 0) 
                    {
                        // CALL PUCHASE RETURN CHILD API //
                        res?.send(AllSaleReturnApis.createsalereturnchild(data[0][0]?.sale_return_id,child_data,req?.headers));
                    }
                    if (data[0][0].is_tds_applicable == '1' && data[0][0].sale_return_total_tds > 0) 
                    {
                        // CALL VOUCHER DEFAULT API //
                        const sale_return_type = data[0][0].sale_return_type_id == '98' ? `salecreditnote` : `saledebitnote`;
                        
                        res?.send(AllVoucherApis.createdefaultvoucher(data[0][0].user_id,data[0][0].branch_id,data[0][0].company_id,data[0][0].year_id,data[0][0].buyer_id,data[0][0].tds_on_id,data[0][0].sale_return_total_tds,data[0][0].sale_return_id,req?.headers,sale_return_type));
                    }
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = ` sale Return Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,` sale Return`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET sale RETURN AND CHILD DETAILS DATA API //
    getsalereturndetails: (req,res,next) => {

        const sale_return_id = req.body?.sale_return_id ? req.body?.sale_return_id : 0;
        if (sale_return_id.length == 0 || sale_return_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter sale return ID',Data:[] });
            next();
            return;
        }

        var getsalereturndetails = `CALL get_sale_return_details(?)`;
        conn.query(getsalereturndetails,[sale_return_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].sale_return_document_date = constant.moment(data[0][0].sale_return_document_date).format('YYYY-MM-DD');
                data[0][0].sale_return_date = constant.moment(data[0][0].sale_return_date).format('YYYY-MM-DD');
                data[0][0].sale_tax_invoice_ids = JSON.parse(data[0][0].sale_tax_invoice_ids);
                
                
                data[1].forEach(element => {
                    element.sale_return_child_sgst_amt = (element.sale_return_child_sgst_amt + (element.sale_return_child_sgst/100) * element.sale_return_child_taxable).toFixed(2);
                    element.sale_return_child_cgst_amt = (element.sale_return_child_cgst_amt + (element.sale_return_child_cgst/100) * element.sale_return_child_taxable).toFixed(2);
                    element.sale_return_child_igst_amt = (element.sale_return_child_igst_amt + (element.sale_return_child_igst/100) * element.sale_return_child_taxable).toFixed(2);
                });

                data[0][0].sale_return_child_data = data[1];

                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET sale RETURN AND CHILD LISTING DATA API //
    getsalereturnlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const sale_return_type_id = body?.sale_return_type_id ? body?.sale_return_type_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'return_par.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`return_par.id,return_par.sale_return_type_id,`;

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

        const search_sale_return_note_no = search?.sale_return_note_no ? search?.sale_return_note_no : '';
        const search_sale_return_date = search?.sale_return_date ? search?.sale_return_date : '';
        const search_sale_return_total_unit_sent = search?.sale_return_total_unit_sent ? search?.sale_return_total_unit_sent : '';
        const search_sale_return_total_qty_sent = search?.sale_return_total_qty_sent ? search?.sale_return_total_qty_sent : '';
        const search_sale_return_total_taxable = search?.sale_return_total_taxable ? search?.sale_return_total_taxable : '';
        const search_sale_return_total_sgst = search?.sale_return_total_sgst ? search?.sale_return_total_sgst : '';
        const search_sale_return_total_cgst = search?.sale_return_total_cgst ? search?.sale_return_total_cgst : '';
        const search_sale_return_total_igst = search?.sale_return_total_igst ? search?.sale_return_total_igst : '';
        const search_buyer_name = search?.buyer_name ? search?.buyer_name.trim().toLowerCase() : '';
        
        const sea_sale_return_type_id = sale_return_type_id != '' ? ` AND return_par.sale_return_type_id='${sale_return_type_id}'` : '';
        const sea_sale_return_note_no = search_sale_return_note_no != '' ? ` AND return_par.sale_return_note_no LIKE '%${search_sale_return_note_no}%'` : '';
        const sea_sale_return_date = search_sale_return_date != '' ? ` AND return_par.sale_return_date LIKE '%${search_sale_return_date}%'` : '';
        const sea_sale_return_total_unit_sent = search_sale_return_total_unit_sent != '' ? ` AND return_par.sale_return_total_unit_sent LIKE '%${search_sale_return_total_unit_sent}%'` : '';
        const sea_sale_return_total_qty_sent = search_sale_return_total_qty_sent != '' ? ` AND return_par.sale_return_total_qty_sent LIKE '%${search_sale_return_total_qty_sent}%'` : '';
        const sea_sale_return_total_taxable = search_sale_return_total_taxable != '' ? ` AND return_par.sale_return_total_taxable LIKE '%${search_sale_return_total_taxable}%'` : '';
        const sea_sale_return_total_sgst = search_sale_return_total_sgst != '' ? ` AND return_par.sale_return_total_sgst LIKE '%${search_sale_return_total_sgst}%'` : '';
        const sea_sale_return_total_cgst = search_sale_return_total_cgst != '' ? ` AND return_par.sale_return_total_cgst LIKE '%${search_sale_return_total_cgst}%'` : '';
        const sea_sale_return_total_igst = search_sale_return_total_igst != '' ? ` AND return_par.sale_return_total_igst LIKE '%${search_sale_return_total_igst}%'` : '';
        const sea_buyer_name = search_buyer_name != '' ? ` AND buyer.party_name LIKE '%${search_buyer_name}%'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(return_par.sale_return_date) >='${from_date}' AND DATE(return_par.sale_return_date) <='${to_date}'` : '';
        
        var getsalereturnlistingdata = `SELECT ${All_ID_Query} return_par.sale_return_note_no,return_par.sale_return_date,buyer.party_name as buyer_name,buyer.party_gst_no as buyer_gst_no,return_par.sale_return_total_unit_sent,return_par.sale_return_total_qty_sent,return_par.sale_return_total_taxable,return_par.sale_return_total_sgst,return_par.sale_return_total_cgst,return_par.sale_return_total_igst,return_par.sale_return_remark,return_par.sale_return_total_net_amount,broker.party_name as broker_name,broker.party_gst_no as broker_gst_no,haste.party_name as haste_name,haste.party_gst_no as haste_gst_no,transporter.party_name as transporter_name,transporter.party_gst_no as transporter_gst_no,state.global_code as state_code,buyer.state_id FROM erp_sale_return as return_par LEFT JOIN erp_party as buyer ON buyer.id=return_par.buyer_id LEFT JOIN erp_party as broker ON broker.id=return_par.broker_id LEFT JOIN erp_party as haste ON haste.id=return_par.haste_id LEFT JOIN erp_party as transporter ON transporter.id=return_par.transporter_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.is_delete_status='0' ${sea_sale_return_note_no} ${sea_sale_return_date} ${sea_sale_return_total_unit_sent} ${sea_sale_return_total_qty_sent} ${sea_sale_return_total_taxable} ${sea_sale_return_total_sgst} ${sea_sale_return_total_cgst} ${sea_sale_return_total_igst} ${sea_buyer_name} ${sea_sale_return_type_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getsalereturnlistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.sale_return_date = constant.moment(element.sale_return_date).format('YYYY-MM-DD');
                element.export = constant.DefaultExportopetions;
            });
            
            var totalsalereturncount = `SELECT COUNT(return_par.id) as Count FROM erp_sale_return as return_par LEFT JOIN erp_party as buyer ON buyer.id=return_par.buyer_id LEFT JOIN erp_party as broker ON broker.id=return_par.broker_id LEFT JOIN erp_party as haste ON haste.id=return_par.haste_id LEFT JOIN erp_party as transporter ON transporter.id=return_par.transporter_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.is_delete_status='0' ${sea_sale_return_note_no} ${sea_sale_return_date} ${sea_sale_return_total_unit_sent} ${sea_sale_return_total_qty_sent} ${sea_sale_return_total_taxable} ${sea_sale_return_total_sgst} ${sea_sale_return_total_cgst} ${sea_sale_return_total_igst} ${sea_buyer_name} ${sea_sale_return_type_id} ${date_range_query}`;
        
            conn.query(totalsalereturncount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // INSERT AND UPDATE sale RETURN CHILD DATA API //
    createsalereturnchild: (return_id,req,headers) => {

        let body  = req;
        let header_data = headers;
    
        body.forEach((data,index) => {

            const id = data?.id ? Number(data?.id) : 0;
            const user_id = data?.user_id ? data?.user_id : 0;
            const sale_return_id = return_id ? return_id : 0;
            const quality_id = data?.quality_id ? data?.quality_id : 0;
            const party_id = data?.party_id ? data?.party_id : 0;
            const gst_id = data?.gst_id ? data?.gst_id : 0;
            const sale_tax_child_id = data?.sale_tax_child_id ? data?.sale_tax_child_id : 0;
            const sale_return_child_remark = data?.sale_return_child_remark ? data?.sale_return_child_remark.trim().toLowerCase() : '';
            const sale_return_child_quality_colour = data?.sale_return_child_quality_colour ? data?.sale_return_child_quality_colour.trim().toLowerCase() : '';
            const sale_return_child_work = data?.sale_return_child_work ? data?.sale_return_child_work.trim().toLowerCase() : '';
            const sale_return_child_work_colour = data?.sale_return_child_work_colour ? data?.sale_return_child_work_colour.trim().toLowerCase() : '';
            const sale_return_child_hsn = data?.sale_return_child_hsn ? data?.sale_return_child_hsn.trim() : '';
            const sale_return_child_cut = data?.sale_return_child_cut ? data?.sale_return_child_cut : 0;
            const sale_return_child_qty_per = data?.sale_return_child_qty_per ? data?.sale_return_child_qty_per : '';
            const sale_return_child_qty = data?.sale_return_child_qty ? data?.sale_return_child_qty : 0;
            const sale_return_child_unit_sent = data?.sale_return_child_unit_sent ? data?.sale_return_child_unit_sent : 0;
            const sale_return_child_qty_sent = data?.sale_return_child_qty_sent ? data?.sale_return_child_qty_sent : 0;
            const sale_return_child_meter = data?.sale_return_child_meter ? data?.sale_return_child_meter : 0;
            const sale_return_child_fold = data?.sale_return_child_fold ? data?.sale_return_child_fold : 0;
            const sale_return_child_net_meter = data?.sale_return_child_net_meter ? data?.sale_return_child_net_meter : 0;
            const sale_return_child_rate_per = data?.sale_return_child_rate_per ? data?.sale_return_child_rate_per : '';
            const sale_return_child_rate = data?.sale_return_child_rate ? data?.sale_return_child_rate : 0;
            const sale_return_child_amount = data?.sale_return_child_amount ? data?.sale_return_child_amount : 0;
            const sale_return_child_disc_per = data?.sale_return_child_disc_per ? data?.sale_return_child_disc_per : 0;
            const sale_return_child_disc_amt = data?.sale_return_child_disc_amt ? data?.sale_return_child_disc_amt : 0;
            const sale_return_child_freight = data?.sale_return_child_freight ? data?.sale_return_child_freight : 0;
            const sale_return_child_taxable = data?.sale_return_child_taxable ? data?.sale_return_child_taxable : 0;
            const sale_return_child_sgst = data?.sale_return_child_sgst ? data?.sale_return_child_sgst : 0;
            const sale_return_child_cgst = data?.sale_return_child_cgst ? data?.sale_return_child_cgst : 0;
            const sale_return_child_igst = data?.sale_return_child_igst ? data?.sale_return_child_igst : 0;
            const sale_return_child_total_amount = data?.sale_return_child_total_amount ? data?.sale_return_child_total_amount : 0;
            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

            if (id > 0) 
            {   
                const updatesalereturnchild = `CALL create_sale_return_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updatesalereturnchild,[id,user_id,sale_return_id,quality_id,party_id,gst_id,sale_tax_child_id,sale_return_child_remark,sale_return_child_quality_colour,sale_return_child_work,sale_return_child_work_colour,sale_return_child_hsn,sale_return_child_cut,sale_return_child_qty_per,sale_return_child_qty,sale_return_child_unit_sent,sale_return_child_qty_sent,sale_return_child_meter,sale_return_child_fold,sale_return_child_net_meter,sale_return_child_rate_per,sale_return_child_rate,sale_return_child_amount,sale_return_child_disc_per,sale_return_child_disc_amt,sale_return_child_freight,sale_return_child_taxable,sale_return_child_sgst,sale_return_child_cgst,sale_return_child_igst,sale_return_child_total_amount,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    }
                    else
                    {                          
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = ` sale Return Child Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,` sale Return Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return({ Status:200,Count:0,Message:' sale Return Child Updated',Data:[] });
                    }  
                });
            }
            else
            {
                const createsalereturnchild = `CALL create_sale_return_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createsalereturnchild,[id,user_id,sale_return_id,quality_id,party_id,gst_id,sale_tax_child_id,sale_return_child_remark,sale_return_child_quality_colour,sale_return_child_work,sale_return_child_work_colour,sale_return_child_hsn,sale_return_child_cut,sale_return_child_qty_per,sale_return_child_qty,sale_return_child_unit_sent,sale_return_child_qty_sent,sale_return_child_meter,sale_return_child_fold,sale_return_child_net_meter,sale_return_child_rate_per,sale_return_child_rate,sale_return_child_amount,sale_return_child_disc_per,sale_return_child_disc_amt,sale_return_child_freight,sale_return_child_taxable,sale_return_child_sgst,sale_return_child_cgst,sale_return_child_igst,sale_return_child_total_amount,entry_date,update_date],(error,data) => {

                    if (error || data[0]?.length == 0)
                    {   
                        return { Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error };
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = ` sale Return Child Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails,[user_id],(error,userdata) => {

                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,` sale Return Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return { Status:200,Count:0,Message:' sale Return Child Inserted',Data:data[0] };
                    }  
                });
            }
        });
    },

    // DELETE Sale Return DATA API //
    deletesalereturndata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Sale ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existsalereturndata = `SELECT id as sale_return_id,(SELECT COUNT(id) FROM erp_sale_return_child WHERE sale_return_id='${id}') as sale_return_child_id FROM erp_sale_return WHERE id='${id}'`;

        conn.query(existsalereturndata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0].sale_return_child_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'sale return In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletesalereturnchilddata = `CALL delete_sale_return(?,?)`;
                    conn.query(deletesalereturnchilddata,[id,entry_date],(error,data) => {
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
                            const ip = `sale return Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`sale return`,entry_date],function(error,data){
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'sale return Deleted Successfully',Data:[] });

                            var return_type_id = `SELECT sale_return_type_id FROM erp_sale_return WHERE id='${id}'`;
                            conn.query(return_type_id,(error,typedata) => {

                                if (typedata[0].sale_return_type_id == '98' || typedata[0].sale_return_type_id == '97') 
                                {
                                    const sale_return_type = data[0][0].sale_return_type_id == '98' ? `salecreditnote` : `saledebitnote`;
                                    
                                    // DELETE DEFAULT VOUCHER //
                                    res?.send(AllVoucherApis.deletedefaultvoucherdata(id,sale_return_type,user_id,req?.headers));
                                    next();
                                    return;
                                }
                            });
                        }
                    });
                }
            }
        });
    },

    // DELETE Sale Return Child DATA API //
    deletesalereturnchilddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Sale Return Child Deleted Successfully',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var deletesalereturnchildchilddata = `CALL delete_sale_return_child(?,?)`;
        conn.query(deletesalereturnchildchilddata,[id,entry_date],(error,data) => {
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
                const ip = `Sale Return Child Deleted With This Device ID ${HeaderData.device_id} `;
                const loginuserdetails = `CALL get_user_details(?)`;
                conn.query(loginuserdetails,[user_id],function(error,userdata){
                    if(userdata[0])
                    {   
                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Sale Return Child`,entry_date],function(error,data){
                
                        });
                    }
                });
                res?.send({ Status:200,Count:1,Message:'Sale Return Child Deleted Successfully',Data:[] });
                next();
                return;
            }
        });
    },    
};


export default AllSaleReturnApis;
    
