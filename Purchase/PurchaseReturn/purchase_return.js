import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";
import AllVoucherApis from '../../Accounting/Voucher/voucher.js';

const AllPurchaseReturnApis = {

    // INSERT AND UPDATE PURCHASE RETURN DATA API //
    createpurchasereturn: (req,res,next) => {

        let body  = req?.body;
        let child_data = req?.body?.purchase_return_child_data;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id  : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const year_id = body?.year_id ? body?.year_id  : 0;
        const supplier_id = body?.supplier_id ? body?.supplier_id : 0;
        const broker_id = body?.broker_id ? body?.broker_id : 0;
        const haste_id = body?.haste_id ? body?.haste_id : 0;
        const receiving_goods_address_id = body?.receiving_goods_address_id ? body?.receiving_goods_address_id : 0;
        const invoice_no_id = body?.invoice_no_id ? body?.invoice_no_id : 0;
        const godown_id = body?.godown_id ? body?.godown_id  : 0;
        const transporter_id = body?.transporter_id ? body?.transporter_id : 0;
        const buyer_id = body?.buyer_id ? body?.buyer_id : 0;
        const tds_on_id = body?.tds_on_id ? body?.tds_on_id : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id : 0;
        const status_id = body?.status_id ? body?.status_id : 0;
        const purchase_return_type_id = body?.purchase_return_type_id ? body?.purchase_return_type_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;
        const purchase_return_account_type = body?.purchase_return_account_type ? body?.purchase_return_account_type : '';
        const purchase_return_prefix = body?.purchase_return_prefix ? body?.purchase_return_prefix.trim().toLowerCase() : '';
        const purchase_return_note_no = body?.purchase_return_note_no ? body?.purchase_return_note_no : '';
        const purchase_return_date = body?.purchase_return_date ? body?.purchase_return_date.trim() : '';
        const purchase_return_other_transporter = body?.purchase_return_other_transporter ? body?.purchase_return_other_transporter.trim().toLowerCase() : '';
        const purchase_return_lr_no = body?.purchase_return_lr_no ? body?.purchase_return_lr_no : '';
        const purchase_return_bale_marka = body?.purchase_return_bale_marka ? body?.purchase_return_bale_marka : '';
        const purchase_return_remark = body?.purchase_return_remark ? body?.purchase_return_remark.trim().toLowerCase() : '';
        const purchase_return_lf_no = body?.purchase_return_lf_no ? body?.purchase_return_lf_no : '';
        const purchase_return_days = body?.purchase_return_days ? body?.purchase_return_days : ''
        const purchase_return_document_no = body?.purchase_return_document_no ? body?.purchase_return_document_no : '';
        const purchase_return_document_date = body?.purchase_return_document_date ? body?.purchase_return_document_date : constant.moment().format('YYYY-MM-DD');
        const is_tds_applicable = body?.is_tds_applicable ? body?.is_tds_applicable : 0;
        const purchase_return_tds_applicable_rate = body?.purchase_return_tds_applicable_rate ? body?.purchase_return_tds_applicable_rate : 0;
        const purchase_return_total_tds = body?.purchase_return_total_tds ? body?.purchase_return_total_tds : 0;
        const purchase_return_total_unit_sent = body?.purchase_return_total_unit_sent ? body?.purchase_return_total_unit_sent : 0;
        const purchase_return_total_qty_sent = body?.purchase_return_total_qty_sent ? body?.purchase_return_total_qty_sent : 0;
        const purchase_return_amount = body?.purchase_return_amount ? body?.purchase_return_amount : 0;
        const purchase_return_total_disc_amt = body?.purchase_return_total_disc_amt ? body?.purchase_return_total_disc_amt : 0;
        const purchase_return_total_freight = body?.purchase_return_total_freight ? body?.purchase_return_total_freight : 0;
        const purchase_return_total_taxable = body?.purchase_return_total_taxable ? body?.purchase_return_total_taxable : 0;
        const purchase_return_total_sgst = body?.purchase_return_total_sgst ? body?.purchase_return_total_sgst : 0;
        const purchase_return_total_cgst = body?.purchase_return_total_cgst ? body?.purchase_return_total_cgst : 0;
        const purchase_return_total_igst = body?.purchase_return_total_igst ? body?.purchase_return_total_igst : 0;
        const purchase_return_total_amount = body?.purchase_return_total_amount ? body?.purchase_return_total_amount : 0;
        const purchase_return_total_tcs_per = body?.purchase_return_total_tcs_per ? body?.purchase_return_total_tcs_per : 0;
        const purchase_return_total_tcs_amt = body?.purchase_return_total_tcs_amt ? body?.purchase_return_total_tcs_amt : 0;
        const purchase_return_round_off = body?.purchase_return_round_off ? body?.purchase_return_round_off : 0;
        const purchase_return_total_net_amount = body?.purchase_return_total_net_amount ? body?.purchase_return_total_net_amount : 0;
        const purchase_return_tds_with_total_net_amount = body?.purchase_return_tds_with_total_net_amount ? body?.purchase_return_tds_with_total_net_amount : 0;
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
            const updatepurchasereturn = `CALL create_purchase_return(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatepurchasereturn,[id,user_id,branch_id,company_id,year_id,supplier_id,broker_id,haste_id,receiving_goods_address_id,invoice_no_id,godown_id,transporter_id,buyer_id,tds_on_id,nature_of_payment_id,status_id,purchase_return_type_id,quality_type_id,purchase_return_account_type,purchase_return_prefix,purchase_return_note_no,purchase_return_date,purchase_return_other_transporter,purchase_return_lr_no,purchase_return_bale_marka,purchase_return_remark,purchase_return_lf_no,purchase_return_days,purchase_return_document_no,purchase_return_document_date,is_tds_applicable,purchase_return_tds_applicable_rate,purchase_return_total_tds,purchase_return_total_unit_sent,purchase_return_total_qty_sent,purchase_return_amount,purchase_return_total_disc_amt,purchase_return_total_freight,purchase_return_total_taxable,purchase_return_total_sgst,purchase_return_total_cgst,purchase_return_total_igst,purchase_return_total_amount,purchase_return_total_tcs_per,purchase_return_total_tcs_amt,purchase_return_round_off,purchase_return_total_net_amount,purchase_return_tds_with_total_net_amount,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:' Purchase Return Updated',Data:[] });
                    next();
                    
                    if (child_data && child_data?.length > 0) 
                    {
                        // CALL PUCHASE RETURN CHILD API //
                        res?.send(AllPurchaseReturnApis.createpurchasereturnchild(id,child_data,req?.headers));
                        next();
                    }                   
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = ` Purchase Return Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,` Purchase Return`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createpurchasereturn = `CALL create_purchase_return(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createpurchasereturn,[id,user_id,branch_id,company_id,year_id,supplier_id,broker_id,haste_id,receiving_goods_address_id,invoice_no_id,godown_id,transporter_id,buyer_id,tds_on_id,nature_of_payment_id,status_id,purchase_return_type_id,quality_type_id,purchase_return_account_type,purchase_return_prefix,purchase_return_note_no,purchase_return_date,purchase_return_other_transporter,purchase_return_lr_no,purchase_return_bale_marka,purchase_return_remark,purchase_return_lf_no,purchase_return_days,purchase_return_document_no,purchase_return_document_date,is_tds_applicable,purchase_return_tds_applicable_rate,purchase_return_total_tds,purchase_return_total_unit_sent,purchase_return_total_qty_sent,purchase_return_amount,purchase_return_total_disc_amt,purchase_return_total_freight,purchase_return_total_taxable,purchase_return_total_sgst,purchase_return_total_cgst,purchase_return_total_igst,purchase_return_total_amount,purchase_return_total_tcs_per,purchase_return_total_tcs_amt,purchase_return_round_off,purchase_return_total_net_amount,purchase_return_tds_with_total_net_amount,entry_date,update_date],(error,data) => {

                if (error || data[0]?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:' Purchase Return Inserted',Data:data[0] });
                    next();
                    
                    if (child_data && child_data?.length > 0) 
                    {
                        // CALL PUCHASE RETURN CHILD API //
                        res?.send(AllPurchaseReturnApis.createpurchasereturnchild(data[0][0].purchse_return_id,child_data,req?.headers));
                    }

                    if (data[0][0].is_tds_applicable == '1' && data[0][0].purchase_return_total_tds > 0) 
                    {
                        // CALL VOUCHER DEFAULT API //
                        const purchase_return_type = data[0][0].purchase_return_type_id == '95' ? `purchasecreditnote` : `purchasedebitnote`;
                        
                        res?.send(AllVoucherApis.createdefaultvoucher(data[0][0].user_id,data[0][0].branch_id,data[0][0].company_id,data[0][0].year_id,data[0][0].supplier_id,data[0][0].tds_on_id,data[0][0].purchase_return_total_tds,data[0][0].purchse_return_id,req?.headers,purchase_return_type));
                    }
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = ` Purchase Return Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,` Purchase Return`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET PURCHASE RETURN AND CHILD DETAILS DATA API //
    getpurchasereturndetails: (req,res,next) => {

        const purchase_return_id = req.body?.purchase_return_id ? req.body?.purchase_return_id : 0;
        if (purchase_return_id.length == 0 || purchase_return_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter purchase return ID',Data:[] });
            next();
            return;
        }

        var getpurchasereturndetails = `CALL get_purchase_return_details(?)`;
        conn.query(getpurchasereturndetails,[purchase_return_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].purchase_return_document_date = constant.moment(data[0][0].purchase_return_document_date).format('YYYY-MM-DD');
                data[0][0].purchase_return_date = constant.moment(data[0][0].purchase_return_date).format('YYYY-MM-DD');
                
                data[1].forEach(element => {
                    element.purchase_return_child_sgst_amt = (element.purchase_return_child_sgst_amt + (element.purchase_return_child_sgst/100) * element.purchase_return_child_taxable).toFixed(2);
                    element.purchase_return_child_cgst_amt = (element.purchase_return_child_cgst_amt + (element.purchase_return_child_cgst/100) * element.purchase_return_child_taxable).toFixed(2);
                    element.purchase_return_child_igst_amt = (element.purchase_return_child_igst_amt + (element.purchase_return_child_igst/100) * element.purchase_return_child_taxable).toFixed(2);
                });

                data[0][0].purchase_return_child_data = data[1];

                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET PURCHASE RETURN AND CHILD LISTING DATA API //
    getpurchasereturnlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const purchase_return_type_id = body?.purchase_return_type_id ? body?.purchase_return_type_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'pur_return.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const is_export = body?.is_export ? body?.is_export : '';
        const export_type = body?.export_type ? body?.export_type : '';
        const All_ID_Query = is_export == true ? ' ' :`pur_return.id,pur_return.purchase_return_type_id,pur_return.quality_type_id,`;

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
            const search_purchase_return_note_no = search?.purchase_return_note_no ? search?.purchase_return_note_no : '';
            const search_purchase_return_date = search?.purchase_return_date ? search?.purchase_return_date : '';
            const search_purchase_return_total_unit_sent = search?.purchase_return_total_unit_sent ? search?.purchase_return_total_unit_sent.trim() : '';
            const search_purchase_return_total_qty_sent = search?.purchase_return_total_qty_sent ? search?.purchase_return_total_qty_sent.trim() : '';
            const search_purchase_return_total_taxable = search?.purchase_return_total_taxable ? search?.purchase_return_total_taxable.trim() : '';
            const search_purchase_return_total_sgst = search?.purchase_return_total_sgst ? search?.purchase_return_total_sgst.trim() : '';
            const search_purchase_return_total_cgst = search?.purchase_return_total_cgst ? search?.purchase_return_total_cgst.trim() : '';
            const search_purchase_return_total_igst = search?.purchase_return_total_igst ? search?.purchase_return_total_igst.trim() : '';
            const search_supplier_name = search?.supplier_name ? search?.supplier_name.trim().toLowerCase() : '';
            const search_buyer_name = search?.buyer_name ? search?.buyer_name.trim().toLowerCase() : '';
            const search_invoice_no = search?.invoice_no ? search?.invoice_no.trim().toLowerCase() : '';
            
            const sea_purchase_return_type_id = purchase_return_type_id > 0 ? ` AND pur_return.purchase_return_type_id='${purchase_return_type_id}'` : '';
            const sea_purchase_return_note_no = search_purchase_return_note_no != '' ? ` AND pur_return.purchase_return_note_no LIKE '%${search_purchase_return_note_no}%'` : '';
            const sea_purchase_return_date = search_purchase_return_date != '' ? ` AND pur_return.purchase_return_date LIKE '%${search_purchase_return_date}%'` : '';
            const sea_purchase_return_total_unit_sent = search_purchase_return_total_unit_sent != '' ? ` AND pur_return.purchase_return_total_unit_sent LIKE '%${search_purchase_return_total_unit_sent}%'` : '';
            const sea_purchase_return_total_qty_sent = search_purchase_return_total_qty_sent != '' ? ` AND pur_return.purchase_return_total_qty_sent LIKE '%${search_purchase_return_total_qty_sent}%'` : '';
            const sea_purchase_return_total_taxable = search_purchase_return_total_taxable != '' ? ` AND pur_return.purchase_return_total_taxable LIKE '%${search_purchase_return_total_taxable}%'` : '';
            const sea_purchase_return_total_sgst = search_purchase_return_total_sgst != '' ? ` AND pur_return.purchase_return_total_sgst LIKE '%${search_purchase_return_total_sgst}%'` : '';
            const sea_purchase_return_total_cgst = search_purchase_return_total_cgst != '' ? ` AND pur_return.purchase_return_total_cgst LIKE '%${search_purchase_return_total_cgst}%'` : '';
            const sea_purchase_return_total_igst = search_purchase_return_total_igst != '' ? ` AND pur_return.purchase_return_total_igst LIKE '%${search_purchase_return_total_igst}%'` : '';
            const sea_supplier_name = search_supplier_name != '' ? ` AND supplier.party_name LIKE '%${search_supplier_name}%'` : '';
            const sea_buyer_name = search_buyer_name != '' ? ` AND buyer.party_name LIKE '%${search_buyer_name}%'` : '';
            const sea_invoice_no = search_invoice_no != '' ? ` AND tax_invoice.purchase_tax_invoice_no LIKE '%${search_invoice_no}%'` : '';
            const date_range_query = from_date != '' ? ` AND DATE(pur_return.purchase_return_date) >='${from_date}' AND DATE(pur_return.purchase_return_date) <='${to_date}'` : '';
            
            var getpurchasereturnlistingdata = `SELECT ${All_ID_Query} pur_return.purchase_return_note_no,DATE_FORMAT(pur_return.purchase_return_date, "%d-%m-%Y") as purchase_return_date,pur_return.purchase_return_total_unit_sent,pur_return.purchase_return_total_qty_sent,pur_return.purchase_return_total_taxable,pur_return.purchase_return_total_sgst,pur_return.purchase_return_total_cgst,pur_return.purchase_return_total_igst,supplier.party_name as supplier_name,tax_invoice.purchase_tax_invoice_no as invoice_no,pur_return.purchase_return_lf_no,buyer.party_name as buyer_name,buyer.party_gst_no as buyer_gst_no,pur_return.purchase_return_remark,broker.party_name as broker_name,broker.party_gst_no as broker_gst_no,haste.party_name as haste_name,haste.party_gst_no as haste_gst_no,transporter.party_name as transporter_name,transporter.party_gst_no as transporter_gst_no,state.global_code as state_code,pur_return.purchase_return_amount,pur_return.purchase_return_total_net_amount FROM erp_purchase_return as pur_return LEFT JOIN erp_party as supplier ON supplier.id=pur_return.supplier_id LEFT JOIN erp_purchase_tax_invoice as tax_invoice ON tax_invoice.id=pur_return.invoice_no_id LEFT JOIN erp_party as buyer ON buyer.id=pur_return.buyer_id LEFT JOIN erp_party as broker ON broker.id=pur_return.broker_id LEFT JOIN erp_party as haste ON haste.id=pur_return.haste_id LEFT JOIN erp_party as transporter ON transporter.id=pur_return.transporter_id LEFT JOIN erp_global as state ON state.id=supplier.state_id WHERE pur_return.user_id='${user_id}' AND pur_return.company_id<='${company_id}' AND pur_return.branch_id<='${branch_id}' AND pur_return.year_id<='${year_id}' AND pur_return.quality_type_id='${quality_type_id}' AND pur_return.is_delete_status='0' AND tax_invoice.is_delete_status='0' ${sea_purchase_return_note_no} ${sea_purchase_return_date} ${sea_purchase_return_total_unit_sent} ${sea_purchase_return_total_qty_sent} ${sea_purchase_return_total_taxable} ${sea_purchase_return_total_sgst} ${sea_purchase_return_total_cgst} ${sea_purchase_return_total_igst} ${sea_supplier_name} ${sea_buyer_name} ${sea_invoice_no} ${sea_purchase_return_type_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

            conn.query(getpurchasereturnlistingdata,(error,data) => {
                
                if (error || data?.length == 0) 
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                
                data.forEach(element => { element.export = constant.DefaultExportopetions; });
                
                var totalpurchasereturncount = `SELECT COUNT(pur_return.id) as Count FROM erp_purchase_return as pur_return LEFT JOIN erp_party as supplier ON supplier.id=pur_return.supplier_id LEFT JOIN erp_purchase_tax_invoice as tax_invoice ON tax_invoice.id=pur_return.invoice_no_id LEFT JOIN erp_party as buyer ON buyer.id=pur_return.buyer_id LEFT JOIN erp_party as broker ON broker.id=pur_return.broker_id LEFT JOIN erp_party as haste ON haste.id=pur_return.haste_id LEFT JOIN erp_party as transporter ON transporter.id=pur_return.transporter_id LEFT JOIN erp_global as state ON state.id=supplier.state_id WHERE pur_return.user_id='${user_id}' AND pur_return.company_id<='${company_id}' AND pur_return.branch_id<='${branch_id}' AND pur_return.year_id<='${year_id}' AND pur_return.quality_type_id='${quality_type_id}' AND pur_return.is_delete_status='0' AND tax_invoice.is_delete_status='0' ${sea_purchase_return_note_no} ${sea_purchase_return_date} ${sea_purchase_return_total_unit_sent} ${sea_purchase_return_total_qty_sent} ${sea_purchase_return_total_taxable} ${sea_purchase_return_total_sgst} ${sea_purchase_return_total_cgst} ${sea_purchase_return_total_igst} ${sea_supplier_name} ${sea_buyer_name} ${sea_invoice_no} ${sea_purchase_return_type_id} ${date_range_query}`;
        
                conn.query(totalpurchasereturncount,(error,countdata) => {
                    
                    res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                    next();
                    return;
                });
            });
        }
        else
        {   
            const sea_quality_type_id = quality_type_id > 0 ? ` AND pur_return.quality_type_id='${quality_type_id}'` : '';

            let getjournalpurchaseexportdata = (export_type == 'child-all') ? `SELECT pur_return.purchase_return_note_no as note_no,DATE_FORMAT(pur_return.purchase_return_date, "%d-%m-%Y") as invoice_date,pur_return.purchase_return_total_unit_sent as unit,pur_return.purchase_return_total_qty_sent as qty,pur_return.purchase_return_total_taxable as taxable,(pur_return.purchase_return_total_sgst + (return_child.purchase_return_child_sgst/100) * return_child.purchase_return_child_taxable) as sgst,(pur_return.purchase_return_total_cgst + (return_child.purchase_return_child_cgst/100) * return_child.purchase_return_child_taxable) as cgst,(pur_return.purchase_return_total_igst + (return_child.purchase_return_child_igst/100) * return_child.purchase_return_child_taxable) as igst,supplier.party_name as supplier_name,supplier.party_gst_no as gst_no,tax_invoice.purchase_tax_invoice_no as invoice_no,pur_return.purchase_return_lf_no,buyer.party_name as buyer_name,buyer.party_gst_no as buyer_gst_no,pur_return.purchase_return_remark,broker.party_name as broker_name,broker.party_gst_no as broker_gst_no,haste.party_name as haste_name,haste.party_gst_no as haste_gst_no,transporter.party_name as transporter_name,transporter.party_gst_no as transporter_gst_no,state.global_code as state_code,quality.quality_name,pur_return.purchase_return_lf_no as lf_no,pur_return.purchase_return_remark as remark FROM erp_purchase_return as pur_return LEFT JOIN erp_purchase_return_child as return_child ON return_child.purchase_return_id=pur_return.id LEFT JOIN erp_party as supplier ON supplier.id=pur_return.supplier_id LEFT JOIN erp_purchase_tax_invoice as tax_invoice ON tax_invoice.id=pur_return.invoice_no_id LEFT JOIN erp_party as buyer ON buyer.id=pur_return.buyer_id LEFT JOIN erp_party as broker ON broker.id=pur_return.broker_id LEFT JOIN erp_party as haste ON haste.id=pur_return.haste_id LEFT JOIN erp_party as transporter ON transporter.id=pur_return.transporter_id LEFT JOIN erp_global as state ON state.id=supplier.state_id LEFT JOIN erp_quality as quality ON quality.id=return_child.quality_id WHERE pur_return.user_id='${user_id}' AND pur_return.company_id<='${company_id}' AND pur_return.branch_id<='${branch_id}' AND pur_return.year_id<='${year_id}' AND pur_return.purchase_return_type_id='${purchase_return_type_id}' AND pur_return.is_delete_status='0' AND tax_invoice.is_delete_status='0' ${sea_quality_type_id}` 
            : `SELECT child.supplier_id,DATE_FORMAT(parent.journal_purchase_invoice_date, "%d-%m-%Y") as invoice_date,parent.journal_purchase_lf_no as lf_no,supplier.party_gst_no as gst_no,parent.journal_purchase_invoice_no as invoice_no,supplier.party_name as supplier_name,buyer.party_name as description,child.journal_purchase_child_hsn as hsn,gst.gst_percentage,child.journal_purchase_child_taxable as taxable,(parent.journal_purchase_child_total_sgst + (child.journal_purchase_child_sgst/100) * child.journal_purchase_child_taxable) as sgst,(parent.journal_purchase_child_total_cgst + (child.journal_purchase_child_cgst/100) * child.journal_purchase_child_taxable) as cgst,(parent.journal_purchase_child_total_igst + (child.journal_purchase_child_igst/100) * child.journal_purchase_child_taxable) as igst,child.journal_purchase_child_unit as unit,child.journal_purchase_child_qty as qty,child.journal_purchase_child_rate as rate,child.journal_purchase_child_disc_amount as disc_amt,child.journal_purchase_child_amount as amount,child.journal_purchase_child_total as net_amount FROM erp_journal_purchase as parent LEFT JOIN erp_party as supplier ON supplier.id=parent.supplier_id LEFT JOIN erp_global as state ON state.id=supplier.state_id LEFT JOIN erp_journal_purchase_child as child ON child.journal_purchase_id=parent.id LEFT JOIN erp_party as buyer ON buyer.id=child.supplier_id LEFT JOIN erp_gst as gst ON gst.id=child.gst_id WHERE parent.is_delete_status='0' AND parent.user_id='${user_id}' AND parent.company_id<='${company_id}' AND parent.year_id<='${year_id}' AND parent.branch_id<='${branch_id}' ORDER BY ${orderby} ${orderformat}`;

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

    // INSERT AND UPDATE PURCHASE RETURN CHILD DATA API //
    createpurchasereturnchild: (return_id,req,headers) => {

        let body  = req;
        let header_data = headers;
    
        body.forEach( (data,index) => {

            const id = data?.id ? Number(data?.id) : 0;
            const user_id = data?.user_id ? data?.user_id : 0;
            const purchase_return_id = return_id ? return_id : 0;
            const quality_id = data?.quality_id ? data?.quality_id : 0;
            const party_id = data?.party_id ? data?.party_id : 0;
            const gst_id = data?.gst_id ? data?.gst_id : 0;
            const purchase_return_child_quality_meter = data?.purchase_return_child_quality_meter ? data?.purchase_return_child_quality_meter : 0;
            const purchase_return_child_quality_meter_average = data?.purchase_return_child_quality_meter_average ? data?.purchase_return_child_quality_meter_average : 0;
            const purchase_return_child_remark = data?.purchase_return_child_remark ? data?.purchase_return_child_remark.trim().toLowerCase() : '';
            const purchase_return_child_hsn = data?.purchase_return_child_hsn ? data?.purchase_return_child_hsn.trim() : '';
            const purchase_return_child_cut = data?.purchase_return_child_cut ? data?.purchase_return_child_cut : 0;
            const purchase_return_child_qty_per = data?.purchase_return_child_qty_per ? data?.purchase_return_child_qty_per : '';
            const purchase_return_child_qty = data?.purchase_return_child_qty ? data?.purchase_return_child_qty : 0;
            const purchase_return_child_unit = data?.purchase_return_child_unit ? data?.purchase_return_child_unit : 0;
            const purchase_return_child_unit_sent = data?.purchase_return_child_unit_sent ? data?.purchase_return_child_unit_sent : 0;
            const purchase_return_child_qty_sent = data?.purchase_return_child_qty_sent ? data?.purchase_return_child_qty_sent : 0;
            const purchase_return_child_meter = data?.purchase_return_child_meter ? data?.purchase_return_child_meter : 0;
            const purchase_return_child_fold = data?.purchase_return_child_fold ? data?.purchase_return_child_fold : 0;
            const purchase_return_child_net_meter = data?.purchase_return_child_net_meter ? data?.purchase_return_child_net_meter : 0;
            const purchase_return_child_rate_per = data?.purchase_return_child_rate_per ? data?.purchase_return_child_rate_per : '';
            const purchase_return_child_rate = data?.purchase_return_child_rate ? data?.purchase_return_child_rate : 0;
            const purchase_return_child_amount = data?.purchase_return_child_amount ? data?.purchase_return_child_amount : 0;
            const purchase_return_child_disc_per = data?.purchase_return_child_disc_per ? data?.purchase_return_child_disc_per : 0;
            const purchase_return_child_disc_amt = data?.purchase_return_child_disc_amt ? data?.purchase_return_child_disc_amt : 0;
            const purchase_return_child_freight = data?.purchase_return_child_freight ? data?.purchase_return_child_freight : 0;
            const purchase_return_child_taxable = data?.purchase_return_child_taxable ? data?.purchase_return_child_taxable : 0;
            const purchase_return_child_sgst = data?.purchase_return_child_sgst ? data?.purchase_return_child_sgst : 0;
            const purchase_return_child_cgst = data?.purchase_return_child_cgst ? data?.purchase_return_child_cgst : 0;
            const purchase_return_child_igst = data?.purchase_return_child_igst ? data?.purchase_return_child_igst : 0;
            const purchase_return_child_total_amount = data?.purchase_return_child_total_amount ? data?.purchase_return_child_total_amount : 0;
            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

            if (id > 0) 
            {   
                const updatepurchasereturnchild = `CALL create_purchase_return_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updatepurchasereturnchild,[id,user_id,purchase_return_id,quality_id,party_id,gst_id,purchase_return_child_quality_meter,purchase_return_child_quality_meter_average,purchase_return_child_remark,purchase_return_child_hsn,purchase_return_child_cut,purchase_return_child_qty_per,purchase_return_child_qty,purchase_return_child_unit,purchase_return_child_unit_sent,purchase_return_child_qty_sent,purchase_return_child_meter,purchase_return_child_fold,purchase_return_child_net_meter,purchase_return_child_rate_per,purchase_return_child_rate,purchase_return_child_amount,purchase_return_child_disc_per,purchase_return_child_disc_amt,purchase_return_child_freight,purchase_return_child_taxable,purchase_return_child_sgst,purchase_return_child_cgst,purchase_return_child_igst,purchase_return_child_total_amount,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    }
                    else
                    {                          
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = ` Purchase Return Child Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,` Purchase Return Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return({ Status:200,Count:0,Message:' Purchase Return Child Updated',Data:[] });
                    }  
                });
            }
            else
            {
                const createpurchasereturnchild = `CALL create_purchase_return_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createpurchasereturnchild,[id,user_id,purchase_return_id,quality_id,party_id,gst_id,purchase_return_child_quality_meter,purchase_return_child_quality_meter_average,purchase_return_child_remark,purchase_return_child_hsn,purchase_return_child_cut,purchase_return_child_qty_per,purchase_return_child_qty,purchase_return_child_unit,purchase_return_child_unit_sent,purchase_return_child_qty_sent,purchase_return_child_meter,purchase_return_child_fold,purchase_return_child_net_meter,purchase_return_child_rate_per,purchase_return_child_rate,purchase_return_child_amount,purchase_return_child_disc_per,purchase_return_child_disc_amt,purchase_return_child_freight,purchase_return_child_taxable,purchase_return_child_sgst,purchase_return_child_cgst,purchase_return_child_igst,purchase_return_child_total_amount,entry_date,update_date],(error,data) => {

                    if (error || data[0]?.length == 0)
                    {   
                        return { Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error };
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = ` Purchase Return Child Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails,[user_id],(error,userdata) => {

                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,` Purchase Return Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return { Status:200,Count:0,Message:' Purchase Return Child Inserted',Data:data[0] };
                    }  
                });
            }
        });
    },

    // DELETE Purchase Return DATA API //
    deletepurchasereturndata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Purchase Return ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        // var existpurchasereturndata = `SELECT id as purchase_return_id,(SELECT COUNT(id) FROM erp_purchase_return_child WHERE purchase_return_id='${id}' AND is_delete_status='0') as purchase_return_id FROM erp_purchase_return WHERE id='${id}'`;

        // conn.query(existpurchasereturndata,(error,data) => {
        //     if (error) 
        //     {   
        //         res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
        //         next();
        //         return;
        //     }
        //     else
        //     {
        //         if (data[0]?.purchase_return_id > 0)
        //         {
        //             res?.send({ Status:400,Count:0,Message:'Purchase Return In Use can not delete',Data:[] });
        //             next();
        //             return;
        //         }
        //         else
        //         {
                    var deletepurchasereturndata = `CALL delete_purchase_return(?,?)`;
                    conn.query(deletepurchasereturndata,[id,entry_date],(error,data) => {
                        if (error) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Purchase Return Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {     
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `Purchase Return Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Purchase Return`,entry_date],function(error,data){
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Purchase Return Deleted Successfully',Data:[] });

                            var return_type_id = `SELECT purchase_return_type_id FROM erp_purchase_return WHERE id='${id}'`;
                            conn.query(return_type_id,(error,typedata) => {

                                if (typedata[0].purchase_return_type_id == '95' || typedata[0].purchase_return_type_id == '96') 
                                {
                                    const purchase_return_type = typedata[0].purchase_return_type_id == '95' ? `purchasecreditnote` : `purchasedebitnote`;
                                    
                                    // DELETE DEFAULT VOUCHER //
                                    res?.send(AllVoucherApis.deletedefaultvoucherdata(id,purchase_return_type,user_id,req?.headers));
                                    next();
                                    return;
                                }
                            });
                        }
                    });
        //         }
        //     }
        // });
    },

    // DELETE Purchase Return CHILD DATA API //
    deletepurchasereturnchilddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Purchase Return Child Deleted Successfully',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var deletepurchasereturnchilddata = `CALL delete_purchase_return_child(?,?)`;
        conn.query(deletepurchasereturnchilddata,[id,entry_date],(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Purchase Return Child Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {     
                // INSERT USER ACTIVITY LOG IN TABLE //
                const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                const ip = `Purchase Return Deleted With This Device ID ${HeaderData.device_id} `;
                const loginuserdetails = `CALL get_user_details(?)`;
                conn.query(loginuserdetails,[user_id],function(error,userdata){
                    if(userdata[0])
                    {   
                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Purchase Return`,entry_date],function(error,data){
                
                        });
                    }
                });
                res?.send({ Status:200,Count:1,Message:'Purchase Return Child Deleted Successfully',Data:[] });
                next();
                return;
            }
        });
    }
};


export default AllPurchaseReturnApis;
    
