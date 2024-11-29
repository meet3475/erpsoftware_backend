import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";
import AllVoucherApis from '../../Accounting/Voucher/voucher.js';

const AllSaleTaxInvoiceApis = {
    
    // INSERT AND UPDATE sale tax invoice DATA API //
    createsaletaxinvoice: (req,res,next) => {

        let body  = req?.body;
        let child_data = req?.body?.sale_tax_invoice_child_data;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const godown_id = body?.godown_id ? body?.godown_id : 0;
        const buyer_id = body?.buyer_id ? body?.buyer_id : 0;
        const tds_on_id = body?.tds_on_id ? body?.tds_on_id : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id  : 0;
        const status_id = body?.status_id ? body?.status_id : 0;
        const sale_tax_invoice_status_id = body?.sale_tax_invoice_status_id ? body?.sale_tax_invoice_status_id : 0;
        const account_head_id = body?.account_head_id ? body?.account_head_id : 0;
        const account_type_party_id = body?.account_type_party_id ? body?.account_type_party_id : 0;
        const transporter_id = body?.transporter_id ? body?.transporter_id : 0;
        const sale_id = body?.sale_id ? body?.sale_id : 0;
        const sale_tax_invoice_no = body?.sale_tax_invoice_no ? body?.sale_tax_invoice_no : 0;
        const sale_tax_invoice_lf_no = body?.sale_tax_invoice_lf_no ? body?.sale_tax_invoice_lf_no : '';
        const sale_tax_invoice_bale_marka = body?.sale_tax_invoice_bale_marka ? body?.sale_tax_invoice_bale_marka : '';
        const sale_tax_invoice_date = body?.sale_tax_invoice_date ? body?.sale_tax_invoice_date : constant.moment().format('YYYY-MM-DD');
        const sale_tax_invoice_total_meter = body?.sale_tax_invoice_total_meter ? body?.sale_tax_invoice_total_meter : 0;
        const sale_tax_invoice_total_total = body?.sale_tax_invoice_total_total ? body?.sale_tax_invoice_total_total : 0;
        const sale_tax_invoice_total_disc_amount = body?.sale_tax_invoice_total_disc_amount ? body?.sale_tax_invoice_total_disc_amount : 0;
        const sale_tax_invoice_total_freight = body?.sale_tax_invoice_total_freight ? body?.sale_tax_invoice_total_freight : 0;
        const sale_tax_invoice_total_fless = body?.sale_tax_invoice_total_fless ? body?.sale_tax_invoice_total_fless : 0;
        const sale_tax_invoice_total_taxable = body?.sale_tax_invoice_total_taxable ? body?.sale_tax_invoice_total_taxable : 0;
        const sale_tax_invoice_total_sgst = body?.sale_tax_invoice_total_sgst ? body?.sale_tax_invoice_total_sgst : 0;
        const sale_tax_invoice_total_cgst = body?.sale_tax_invoice_total_cgst ? body?.sale_tax_invoice_total_cgst : 0;
        const sale_tax_invoice_total_igst = body?.sale_tax_invoice_total_igst ? body?.sale_tax_invoice_total_igst : 0;
        const sale_tax_invoice_total_amount = body?.sale_tax_invoice_total_amount ? body?.sale_tax_invoice_total_amount : 0;
        const is_tds_applicable = body?.is_tds_applicable ? body?.is_tds_applicable : 0;
        const sale_tax_invoice_tds_applicable_rate = body?.sale_tax_invoice_tds_applicable_rate ? body?.sale_tax_invoice_tds_applicable_rate : 0;
        const sale_tax_invoice_tds_with_total_net_amount = body?.sale_tax_invoice_tds_with_total_net_amount ? body?.sale_tax_invoice_tds_with_total_net_amount : 0;       
        const sale_tax_invoice_tcs_per = body?.sale_tax_invoice_tcs_per ? body?.sale_tax_invoice_tcs_per : 0;
        const sale_tax_invoice_tcs_amt = body?.sale_tax_invoice_tcs_amt ? body?.sale_tax_invoice_tcs_amt : 0;
        const sale_tax_invoice_round_off = body?.sale_tax_invoice_round_off ? body?.sale_tax_invoice_round_off : 0;
        const sale_tax_invoice_total_net_amount = body?.sale_tax_invoice_total_net_amount ? body?.sale_tax_invoice_total_net_amount : 0;
        const sale_tax_invoice_image = body?.sale_tax_invoice_image ? body?.sale_tax_invoice_image : '';
        const is_direct_created = body?.is_direct_created ? body?.is_direct_created : 0;
        const sale_tax_invoice_credit_days = body?.sale_tax_invoice_credit_days ? body?.sale_tax_invoice_credit_days : 0;
        const sale_tax_invoice_payment_date = body?.sale_tax_invoice_payment_date ? body?.sale_tax_invoice_payment_date : '';
        const order_status = body?.order_status ? body?.order_status : 'pending';
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
            const updatesaletaxinvoice = `CALL create_sale_tax_invoice(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatesaletaxinvoice,[id,user_id,company_id,year_id,branch_id,godown_id,buyer_id,tds_on_id,nature_of_payment_id,status_id,sale_tax_invoice_status_id,account_head_id,account_type_party_id,transporter_id,sale_id,sale_tax_invoice_no,sale_tax_invoice_lf_no,sale_tax_invoice_bale_marka,sale_tax_invoice_date,sale_tax_invoice_total_meter,sale_tax_invoice_total_total,sale_tax_invoice_total_disc_amount,sale_tax_invoice_total_freight,sale_tax_invoice_total_fless,sale_tax_invoice_total_taxable,sale_tax_invoice_total_sgst,sale_tax_invoice_total_cgst,sale_tax_invoice_total_igst,sale_tax_invoice_total_amount,is_tds_applicable,sale_tax_invoice_tds_applicable_rate,sale_tax_invoice_tds_with_total_net_amount,sale_tax_invoice_tcs_per,sale_tax_invoice_tcs_amt,sale_tax_invoice_round_off,sale_tax_invoice_total_net_amount,sale_tax_invoice_image,is_direct_created,sale_tax_invoice_credit_days,sale_tax_invoice_payment_date,order_status,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'sale tax invoice Updated',Data:[] });
                    next();
                    
                    if (child_data && child_data?.length > 0) 
                    {
                        // CALL JOURNAL PUCHASE CHILD API //
                        res?.send(AllSaleTaxInvoiceApis.createsaletaxinvoicechild(id,child_data,req?.headers));
                        next();
                    }
                                        
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `sale tax invoice Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`sale tax invoice`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {   
            const createsaletaxinvoice = `CALL create_sale_tax_invoice(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createsaletaxinvoice,[id,user_id,company_id,year_id,branch_id,godown_id,buyer_id,tds_on_id,nature_of_payment_id,status_id,sale_tax_invoice_status_id,account_head_id,account_type_party_id,transporter_id,sale_id,sale_tax_invoice_no,sale_tax_invoice_lf_no,sale_tax_invoice_bale_marka,sale_tax_invoice_date,sale_tax_invoice_total_meter,sale_tax_invoice_total_total,sale_tax_invoice_total_disc_amount,sale_tax_invoice_total_freight,sale_tax_invoice_total_fless,sale_tax_invoice_total_taxable,sale_tax_invoice_total_sgst,sale_tax_invoice_total_cgst,sale_tax_invoice_total_igst,sale_tax_invoice_total_amount,is_tds_applicable,sale_tax_invoice_tds_applicable_rate,sale_tax_invoice_tds_with_total_net_amount,sale_tax_invoice_tcs_per,sale_tax_invoice_tcs_amt,sale_tax_invoice_round_off,sale_tax_invoice_total_net_amount,sale_tax_invoice_image,is_direct_created,sale_tax_invoice_credit_days,sale_tax_invoice_payment_date,order_status,entry_date,update_date],(error,data) => {

                if (error || data[0]?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Sale Tax Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'sale tax invoice Inserted',Data:data[0][0] });
                    next();
                    
                    if (child_data && child_data?.length > 0) 
                    {
                        // CALL JOURNAL PUCHASE CHILD API //
                        res?.send(AllSaleTaxInvoiceApis.createsaletaxinvoicechild(data[0][0].sale_tax_invoice_id,child_data,req?.headers));
                    }
                    if (data[0][0].is_tds_applicable == '1' && data[0][0].sale_tax_invoice_total_tds > 0) 
                    {
                        // CALL VOUCHER DEFAULT API //                                
                        res?.send(AllVoucherApis.createdefaultvoucher(data[0][0].user_id,data[0][0].branch_id,data[0][0].company_id,data[0][0].year_id,data[0][0].buyer_id,data[0][0].tds_on_id,data[0][0].sale_tax_invoice_total_tds,data[0][0].sale_tax_invoice_id,req?.headers,`sale`));
                    }
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `sale tax invoice Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`sale tax invoice`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });        
        }
    },

    // UPDATE sale tax invoice transporter and lf no DATA API //
    updatesaletaxinvoice: (req,res,next) => {

        let body  = req?.body;
        
        const user_id = body?.user_id ? body?.user_id : 0;
        const id = body?.id ? Number(body?.id) : 0;
        const transporter_id = body?.transporter_id ? body?.transporter_id : 0;
        const sale_tax_invoice_lf_no = body?.sale_tax_invoice_lf_no ? body?.sale_tax_invoice_lf_no : '';
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
       
        if (id > 0) 
        {   
            const updatesaletaxinvoice = `CALL update_sale_tax_invoice(?,?,?,?)`;
            conn.query(updatesaletaxinvoice,[id,transporter_id,sale_tax_invoice_lf_no,entry_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'sale tax invoice Updated',Data:[] });
                    next();
                                                            
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `sale tax invoice Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`sale tax invoice`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {   
            res?.send({ Status:400,Count:0,Message:'Enter valid sale tax id',Data:[] });
            next();
        }
    },

    // GET sale tax invoice AND CHILD DETAILS DATA API //
    getsaletaxinvoicedetails: (req,res,next) => {

        const sale_tax_invoice_id = req.body?.sale_tax_invoice_id ? req.body?.sale_tax_invoice_id : 0;
        if (sale_tax_invoice_id.length == 0 || sale_tax_invoice_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter sale tax invoice ID',Data:[] });
            next();
            return;
        }

        var getsaletaxinvoicedetails = `CALL get_sale_tax_invoice_details(?)`;
        conn.query(getsaletaxinvoicedetails,[sale_tax_invoice_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].sale_tax_invoice_date = constant.moment(data[0][0].sale_tax_invoice_date).format('YYYY-MM-DD');
                
                data[1].forEach((element, index) => {
                    // element.hsn_code = '';
                    conn.query(`SELECT material_hsn as hsn_code FROM erp_material INNER JOIN erp_quality ON erp_material.id=erp_quality.material_id WHERE erp_quality.id='${element?.quality_id}'`,[],(errorQuality,hsnData) => {
                        element.hsn_code = (errorQuality || hsnData?.length == 0) ? '' : hsnData[0]?.hsn_code
                    })
                    element.sale_tax_invoice_child_sgst_amt = element.sale_tax_invoice_child_sgst_amt + (element.sale_tax_invoice_child_sgst/100) * element.sale_tax_invoice_child_taxable;
                    element.sale_tax_invoice_child_cgst_amt = element.sale_tax_invoice_child_cgst_amt + (element.sale_tax_invoice_child_cgst/100) * element.sale_tax_invoice_child_taxable;
                    element.sale_tax_invoice_child_igst_amt = element.sale_tax_invoice_child_igst_amt + (element.sale_tax_invoice_child_igst/100) * element.sale_tax_invoice_child_taxable;
                    element.sale_tax_invoice_child_meter_data = JSON.parse(element.sale_tax_invoice_child_meter_data);
                });
                
                setTimeout(() => {
                    data[0][0].sale_tax_invoice_child_data = data[1];
                    res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                    next();
                    return;
                }, 250)
            } 
        });
    },

    // GET sale tax invoice LISTING DATA API //
    getsaletaxinvoicelistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'sale.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const buyer_id = body?.buyer_id ? body?.buyer_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`sale.id,sale_child.id as sale_child_id,sale.buyer_id,sale_child.quality_id,buyer.state_id,buyer.nature_of_payment_id,buyer.status_id,buyer.tds_on_id,sale.transporter_id,`;

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

        const search_sale_order_no = search?.sale_order_no ? search?.sale_order_no : '';
        const search_sale_order_date = search?.sale_order_date ? search?.sale_order_date : '';
        const search_buyer_name = search?.buyer_name ? search?.buyer_name.trim().toLowerCase() : '';
        const search_quality_name = search?.quality_name ? search?.quality_name.trim().toLowerCase() : '';
        const search_quality_colour = search?.quality_colour ? search?.quality_colour.trim().toLowerCase() : '';
        const search_work = search?.work ? search?.work.trim().toLowerCase() : '';
        const search_work_colour = search?.work_colour ? search?.work_colour.trim().toLowerCase() : '';
        const search_sale_child_meter = search?.sale_child_meter ? search?.sale_child_meter : '';
        const search_sale_child_rate = search?.sale_child_rate ? search?.sale_child_rate : '';
        const search_sale_child_taxable = search?.sale_child_taxable ? search?.sale_child_taxable : '';
        const search_sale_child_amount = search?.sale_child_amount ? search?.sale_child_amount : '';
        
        const sea_buyer_id = buyer_id > 0 ? ` AND sale.buyer_id='${buyer_id}'` : '';
        const sea_quality_id = quality_id > 0 ? ` AND sale_child.quality_id='${quality_id}'` : '';
        const sea_sale_order_no = search_sale_order_no != '' ? ` AND sale.sale_order_no LIKE '%${search_sale_order_no}%'` : '';
        const sea_sale_order_date = search_sale_order_date != '' ? ` AND sale.sale_order_date LIKE '%${search_sale_order_date}%'` : '';
        const sea_buyer_name = search_buyer_name != '' ? ` AND buyer.party_name LIKE '%${search_buyer_name}%'` : '';
        const sea_quality_name = search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_quality_colour = search_quality_colour != '' ? ` AND sale_child.sale_child_quality_colour LIKE '%${search_quality_colour}%'` : '';
        const sea_work = search_work != '' ? ` AND sale_child.sale_child_work LIKE '%${search_work}%'` : '';
        const sea_work_colour = search_work_colour != '' ? ` AND sale_child.sale_child_work_colour LIKE '%${search_work_colour}%'` : '';
        const sea_sale_child_meter = search_sale_child_meter != '' ? ` AND sale_child.sale_child_meter LIKE '%${search_sale_child_meter}%'` : '';
        const sea_sale_child_rate = search_sale_child_rate != '' ? ` AND sale_child.sale_child_rate LIKE '%${search_sale_child_rate}%'` : '';
        const sea_sale_child_taxable = search_sale_child_taxable != '' ? ` AND sale_child.sale_child_taxable LIKE '%${search_sale_child_taxable}%'` : '';
        const sea_sale_child_amount = search_sale_child_amount != '' ? ` AND sale_child.sale_child_amount LIKE '%${search_sale_child_amount}%'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(sale.sale_order_date) >='${from_date}' AND DATE(sale.sale_order_date) <='${to_date}'` : '';
        
        var getsaletaxinvoicelistingdata = `SELECT ${All_ID_Query} sale.sale_order_no,DATE_FORMAT(sale.sale_order_date, '%d-%m-%Y') as sale_order_date,buyer.party_name as buyer_name,quality.quality_name,sale_child.sale_child_quality_colour as quality_colour,sale_child.sale_child_work as work,sale_child.sale_child_work_colour as work_colour,sale_child.sale_child_meter,sale_child.sale_child_rate,sale_child.sale_child_taxable,sale_child.sale_child_amount,'0' as sale_tax_invoice_id,buyer.is_tds_applicable,buyer.party_applicable_rate,sale_child.sale_child_meter - (SELECT COALESCE(SUM(sale_tax_invoice_child_meter),0) FROM erp_sale_tax_invoice_child WHERE sale_child_id=sale_child.id AND is_delete_status='0') as due_meter,state.global_code as state_code,buyer.party_gst_no,sale.sale_total_net_amount FROM erp_sale as sale LEFT JOIN erp_sale_child as sale_child ON sale_child.sale_id=sale.id LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_quality as quality ON quality.id=sale_child.quality_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' AND sale_child.order_status!='cancel' AND sale_child.sale_child_meter > (SELECT COALESCE(SUM(sale_tax_invoice_child_meter),0) FROM erp_sale_tax_invoice_child WHERE sale_child_id=sale_child.id AND is_delete_status='0') AND (SELECT COUNT(id) FROM erp_sale_tax_invoice_child WHERE sale_child_id=sale_child.id AND is_delete_status='0' AND is_completed='1')='0' ${sea_buyer_id} ${sea_quality_id} ${sea_sale_order_no} ${sea_sale_order_date} ${sea_buyer_name} ${sea_quality_name} ${sea_quality_colour} ${sea_work} ${sea_work_colour} ${sea_sale_child_meter} ${sea_sale_child_rate} ${sea_sale_child_taxable} ${sea_sale_child_amount} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;
        
        conn.query(getsaletaxinvoicelistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                // element.sale_order_date = constant.moment(element.sale_order_date).format('YYYY-MM-DD');
                element.export = constant.DefaultExportopetions;
            });
            
            var totalsaletaxinvoicelistingdatacount = `SELECT COUNT(sale.id) as Count FROM erp_sale as sale LEFT JOIN erp_sale_child as sale_child ON sale_child.sale_id=sale.id LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_quality as quality ON quality.id=sale_child.quality_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' AND sale_child.order_status!='cancel' AND sale_child.sale_child_meter > (SELECT COALESCE(SUM(sale_tax_invoice_child_meter),0) FROM erp_sale_tax_invoice_child WHERE sale_child_id=sale_child.id AND is_delete_status='0') AND (SELECT COUNT(id) FROM erp_sale_tax_invoice_child WHERE sale_child_id=sale_child.id AND is_delete_status='0' AND is_completed='1')='0' ${sea_buyer_id} ${sea_quality_id} ${sea_sale_order_no} ${sea_sale_order_date} ${sea_buyer_name} ${sea_quality_name} ${sea_quality_colour} ${sea_work} ${sea_work_colour} ${sea_sale_child_meter} ${sea_sale_child_rate} ${sea_sale_child_taxable} ${sea_sale_child_amount} ${date_range_query}`;
        
            conn.query(totalsaletaxinvoicelistingdatacount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // GET sale tax invoice report LISTING DATA API //
    getsaletaxinvoicereportlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const buyer_id = body?.buyer_id ? body?.buyer_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'sale.id-DESC';
        const order_status = body?.order_status ? body?.order_status : '';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const is_export = body?.is_export ? body?.is_export : 0;
        const export_type = body?.export_type ? body?.export_type : '';
        const limit_query = is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        // const All_ID_Query = is_export == true ? `sale.sale_tax_invoice_bale_marka,(SELECT SUM(sale_tax_invoice_child_unit) FROM erp_sale_tax_invoice_child WHERE sale_tax_invoice_id=sale.id AND is_delete_status='0') as sale_tax_invoice_total_unit,(SELECT SUM(sale_tax_invoice_child_count_meter) FROM erp_sale_tax_invoice_child WHERE sale_tax_invoice_id=sale.id AND is_delete_status='0') as sale_tax_invoice_total_net_meter,state.global_code as state_code,buyer.party_mobile_1,sale.sale_tax_invoice_total_sgst,sale.sale_tax_invoice_total_cgst,sale.sale_tax_invoice_total_igst,(SELECT COUNT(id) FROM erp_sale_tax_invoice_child WHERE sale_tax_invoice_id=sale.id AND is_delete_status='0') as child_count,` :`sale.id,`;

        const All_ID_Query = is_export == true ? `sale.sale_tax_invoice_bale_marka,state.global_code as state_code,buyer.party_mobile_1,sale.sale_tax_invoice_total_sgst,sale.sale_tax_invoice_total_cgst,sale.sale_tax_invoice_total_igst,(SELECT COUNT(id) FROM erp_sale_tax_invoice_child WHERE sale_tax_invoice_id=sale.id AND is_delete_status='0') as child_count,` :`sale.id,`;

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
        // OLD CODE CHILD WISE //
        // if (export_type == '') 
        // {  
        //     const search_sale_tax_invoice_no = search?.sale_tax_invoice_no ? search?.sale_tax_invoice_no : '';
        //     const search_sale_tax_invoice_date = search?.sale_tax_invoice_date ? search?.sale_tax_invoice_date : '';
        //     const search_buyer_name = search?.buyer_name ? search?.buyer_name.trim().toLowerCase() : '';
        //     const search_sale_tax_invoice_total_meter = search?.sale_tax_invoice_total_meter ? search?.sale_tax_invoice_total_meter : '';
        //     const search_sale_tax_invoice_total_disc_amount = search?.sale_tax_invoice_total_disc_amount ? search?.sale_tax_invoice_total_disc_amount : '';
        //     const search_sale_tax_invoice_total_taxable = search?.sale_tax_invoice_total_taxable ? search?.sale_tax_invoice_total_taxable : '';
        //     const search_sale_tax_invoice_total_net_amount = search?.sale_tax_invoice_total_net_amount ? search?.sale_tax_invoice_total_net_amount : '';
        //     const search_sale_tax_invoice_total_freight = search?.sale_tax_invoice_total_freight ? search?.sale_tax_invoice_total_freight : '';
        //     const search_sale_tax_invoice_total_fless = search?.sale_tax_invoice_total_fless ? search?.sale_tax_invoice_total_fless : '';
            
        //     const search_quality_name = search?.quality_name ? search?.quality_name : '';
        //     const search_sale_tax_invoice_child_quality_colour = search?.sale_tax_invoice_child_quality_colour ? search?.sale_tax_invoice_child_quality_colour : '';
        //     const search_sale_tax_invoice_child_work = search?.sale_tax_invoice_child_work ? search?.sale_tax_invoice_child_work : '';
        //     const search_sale_tax_invoice_child_work_colour = search?.sale_tax_invoice_child_work_colour ? search?.sale_tax_invoice_child_work_colour : '';
        //     const search_sale_tax_invoice_child_remark = search?.sale_tax_invoice_child_remark ? search?.sale_tax_invoice_child_remark : '';
        //     const search_sale_tax_invoice_bale_marka = search?.sale_tax_invoice_bale_marka ? search?.sale_tax_invoice_bale_marka : '';
        //     const search_sale_tax_invoice_lf_no = search?.sale_tax_invoice_lf_no ? search?.sale_tax_invoice_lf_no : '';
        //     const search_sale_tax_invoice_child_meter = search?.sale_tax_invoice_child_meter ? search?.sale_tax_invoice_child_meter : '';
        //     const search_sale_tax_invoice_child_fold = search?.sale_tax_invoice_child_fold ? search?.sale_tax_invoice_child_fold : '';
        //     const search_sale_tax_invoice_child_count_meter = search?.sale_tax_invoice_child_count_meter ? search?.sale_tax_invoice_child_count_meter : '';
        //     const search_sale_tax_invoice_child_unit = search?.sale_tax_invoice_child_unit ? search?.sale_tax_invoice_child_unit : '';
        //     const search_sale_tax_invoice_child_rate = search?.sale_tax_invoice_child_rate ? search?.sale_tax_invoice_child_rate : '';
        //     const search_sale_tax_invoice_child_disc_amt = search?.sale_tax_invoice_child_disc_amt ? search?.sale_tax_invoice_child_disc_amt : '';
        //     const search_sale_tax_invoice_child_freight = search?.sale_tax_invoice_child_freight ? search?.sale_tax_invoice_child_freight : '';
        //     const search_sale_tax_invoice_child_fless = search?.sale_tax_invoice_child_fless ? search?.sale_tax_invoice_child_fless : '';
        //     const search_sale_tax_invoice_child_taxable = search?.sale_tax_invoice_child_taxable ? search?.sale_tax_invoice_child_taxable : '';
        //     const search_sale_tax_invoice_child_sgst = search?.sale_tax_invoice_child_sgst ? search?.sale_tax_invoice_child_sgst : '';
        //     const search_sale_tax_invoice_child_cgst = search?.sale_tax_invoice_child_cgst ? search?.sale_tax_invoice_child_cgst : '';
        //     const search_sale_tax_invoice_child_igst = search?.sale_tax_invoice_child_igst ? search?.sale_tax_invoice_child_igst : '';
        //     const search_sale_tax_invoice_child_amount = search?.sale_tax_invoice_child_amount ? search?.sale_tax_invoice_child_amount : '';

        //     const sea_sale_tax_invoice_no = search_sale_tax_invoice_no != '' ? ` AND sale.sale_tax_invoice_no LIKE '%${search_sale_tax_invoice_no}%'` : '';
        //     const sea_sale_tax_invoice_date = search_sale_tax_invoice_date != '' ? ` AND sale.sale_tax_invoice_date LIKE '%${search_sale_tax_invoice_date}%'` : '';
        //     const sea_buyer_name = search_buyer_name != '' ? ` AND buyer.party_name LIKE '%${search_buyer_name}%'` : '';
        //     const sea_sale_tax_invoice_total_meter = search_sale_tax_invoice_total_meter != '' ? ` AND sale.sale_tax_invoice_total_meter LIKE '%${search_sale_tax_invoice_total_meter}%'` : '';
        //     const sea_sale_tax_invoice_total_disc_amount = search_sale_tax_invoice_total_disc_amount != '' ? ` AND sale.sale_tax_invoice_total_disc_amount LIKE '%${search_sale_tax_invoice_total_disc_amount}%'` : '';
        //     const sea_sale_tax_invoice_total_taxable = search_sale_tax_invoice_total_taxable != '' ? ` AND sale.sale_tax_invoice_total_taxable LIKE '%${search_sale_tax_invoice_total_taxable}%'` : '';
        //     const sea_sale_tax_invoice_total_net_amount = search_sale_tax_invoice_total_net_amount != '' ? ` AND sale.sale_tax_invoice_total_net_amount LIKE '%${search_sale_tax_invoice_total_net_amount}%'` : '';
        //     const sea_sale_tax_invoice_total_freight = search_sale_tax_invoice_total_freight != '' ? ` AND sale.sale_tax_invoice_total_freight LIKE '%${search_sale_tax_invoice_total_freight}%'` : '';
        //     const sea_sale_tax_invoice_total_fless = search_sale_tax_invoice_total_fless != '' ? ` AND sale.sale_tax_invoice_total_fless LIKE '%${search_sale_tax_invoice_total_fless}%'` : '';
        //     const sea_buyer_id = buyer_id > 0 ? ` AND sale.buyer_id LIKE '%${buyer_id}%'` : '';
        //     const sea_order_status = order_status == 'cancel' ? ` AND sale.order_status='${order_status}'` : ` AND sale.order_status!='cancel'`;

        //     const sea_quality_name = search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        //     const sea_sale_tax_invoice_child_quality_colour = search_sale_tax_invoice_child_quality_colour != '' ? ` AND child.sale_tax_invoice_child_quality_colour LIKE '%${search_sale_tax_invoice_child_quality_colour}%'` : '';
        //     const sea_sale_tax_invoice_lf_no = search_sale_tax_invoice_lf_no != '' ? ` AND sale.sale_tax_invoice_lf_no LIKE '%${search_sale_tax_invoice_lf_no}%'` : '';
        //     const sea_sale_tax_invoice_child_work = search_sale_tax_invoice_child_work != '' ? ` AND child.sale_tax_invoice_child_work LIKE '%${search_sale_tax_invoice_child_work}%'` : '';
        //     const sea_sale_tax_invoice_child_work_colour = search_sale_tax_invoice_child_work_colour != '' ? ` AND child.sale_tax_invoice_child_work_colour LIKE '%${search_sale_tax_invoice_child_work_colour}%'` : '';
        //     const sea_sale_tax_invoice_child_remark = search_sale_tax_invoice_child_remark != '' ? ` AND child.sale_tax_invoice_child_remark LIKE '%${search_sale_tax_invoice_child_remark}%'` : '';
        //     const sea_sale_tax_invoice_bale_marka = search_sale_tax_invoice_bale_marka != '' ? ` AND sale.sale_tax_invoice_bale_marka LIKE '%${search_sale_tax_invoice_bale_marka}%'` : '';
        //     const sea_sale_tax_invoice_child_meter = search_sale_tax_invoice_child_meter != '' ? ` AND child.sale_tax_invoice_child_meter LIKE '%${search_sale_tax_invoice_child_meter}%'` : '';
        //     const sea_sale_tax_invoice_child_fold = search_sale_tax_invoice_child_fold != '' ? ` AND child.sale_tax_invoice_child_fold LIKE '%${search_sale_tax_invoice_child_fold}%'` : '';
        //     const sea_sale_tax_invoice_child_count_meter = search_sale_tax_invoice_child_count_meter != '' ? ` AND child.sale_tax_invoice_child_count_meter LIKE '%${search_sale_tax_invoice_child_count_meter}%'` : '';
        //     const sea_sale_tax_invoice_child_unit = search_sale_tax_invoice_child_unit != '' ? ` AND child.sale_tax_invoice_child_unit LIKE '%${search_sale_tax_invoice_child_unit}%'` : '';
        //     const sea_sale_tax_invoice_child_rate = search_sale_tax_invoice_child_rate != '' ? ` AND child.sale_tax_invoice_child_rate LIKE '%${search_sale_tax_invoice_child_rate}%'` : '';
        //     const sea_sale_tax_invoice_child_disc_amt = search_sale_tax_invoice_child_disc_amt != '' ? ` AND child.sale_tax_invoice_child_disc_amt LIKE '%${search_sale_tax_invoice_child_disc_amt}%'` : '';
        //     const sea_sale_tax_invoice_child_freight = search_sale_tax_invoice_child_freight != '' ? ` AND child.sale_tax_invoice_child_freight LIKE '%${search_sale_tax_invoice_child_freight}%'` : '';
        //     const sea_sale_tax_invoice_child_fless = search_sale_tax_invoice_child_fless != '' ? ` AND child.sale_tax_invoice_child_fless LIKE '%${search_sale_tax_invoice_child_fless}%'` : '';
        //     const sea_sale_tax_invoice_child_taxable = search_sale_tax_invoice_child_taxable != '' ? ` AND child.sale_tax_invoice_child_taxable LIKE '%${search_sale_tax_invoice_child_taxable}%'` : '';
        //     const sea_sale_tax_invoice_child_sgst = search_sale_tax_invoice_child_sgst != '' ? ` AND child.sale_tax_invoice_child_sgst LIKE '%${search_sale_tax_invoice_child_sgst}%'` : '';
        //     const sea_sale_tax_invoice_child_cgst = search_sale_tax_invoice_child_cgst != '' ? ` AND child.sale_tax_invoice_child_cgst LIKE '%${search_sale_tax_invoice_child_cgst}%'` : '';
        //     const sea_sale_tax_invoice_child_igst = search_sale_tax_invoice_child_igst != '' ? ` AND child.sale_tax_invoice_child_igst LIKE '%${search_sale_tax_invoice_child_igst}%'` : '';
        //     const sea_sale_tax_invoice_child_amount = search_sale_tax_invoice_child_amount != '' ? ` AND child.sale_tax_invoice_child_amount LIKE '%${search_sale_tax_invoice_child_amount}%'` : '';
        //     const date_range_query = from_date != '' ? ` AND DATE(sale.sale_tax_invoice_date) >='${from_date}' AND DATE(sale.sale_tax_invoice_date) <='${to_date}'` : '';
            
        //     var getsaletaxinvoicelistingdata = `SELECT ${All_ID_Query} sale.buyer_id,child.quality_id,sale.sale_tax_invoice_no,sale.sale_tax_invoice_date,buyer.party_name as buyer_name,sale.sale_tax_invoice_total_meter,sale.sale_tax_invoice_total_disc_amount,sale.sale_tax_invoice_total_taxable,sale.sale_tax_invoice_total_net_amount,sale.sale_tax_invoice_total_freight,sale.sale_tax_invoice_total_fless,transporter.party_name as transporter_name,transporter.party_gst_no as transporter_gst_no,sale.sale_tax_invoice_lf_no,quality.quality_name,child.sale_tax_invoice_child_quality_colour,child.sale_tax_invoice_child_work,child.sale_tax_invoice_child_work_colour,child.sale_tax_invoice_child_remark, sale.sale_tax_invoice_bale_marka,child.sale_tax_invoice_child_meter,child.sale_tax_invoice_child_fold,child.sale_tax_invoice_child_count_meter,child.sale_tax_invoice_child_unit,child.sale_tax_invoice_child_rate,child.sale_tax_invoice_child_disc_amt,child.sale_tax_invoice_child_freight,child.sale_tax_invoice_child_fless,child.sale_tax_invoice_child_taxable,child.sale_tax_invoice_child_sgst,child.sale_tax_invoice_child_cgst,child.sale_tax_invoice_child_igst,child.sale_tax_invoice_child_amount FROM erp_sale_tax_invoice_child as child LEFT JOIN erp_sale_tax_invoice as sale ON child.sale_tax_invoice_id=sale.id LEFT JOIN erp_quality as quality ON quality.id=child.quality_id LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_party as transporter ON transporter.id=sale.transporter_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' AND child.is_delete_status='0' ${sea_sale_tax_invoice_no} ${sea_sale_tax_invoice_date} ${sea_buyer_name} ${sea_sale_tax_invoice_total_meter} ${sea_sale_tax_invoice_total_disc_amount} ${sea_sale_tax_invoice_total_taxable} ${sea_sale_tax_invoice_total_net_amount} ${sea_buyer_id} ${sea_sale_tax_invoice_total_freight} ${sea_sale_tax_invoice_total_fless} ${sea_order_status} ${sea_quality_name} ${sea_sale_tax_invoice_child_quality_colour} ${sea_sale_tax_invoice_lf_no} ${sea_sale_tax_invoice_child_work} ${sea_sale_tax_invoice_child_work_colour} ${sea_sale_tax_invoice_child_remark} ${sea_sale_tax_invoice_bale_marka} ${sea_sale_tax_invoice_child_meter} ${sea_sale_tax_invoice_child_fold} ${sea_sale_tax_invoice_child_count_meter} ${sea_sale_tax_invoice_child_unit} ${sea_sale_tax_invoice_child_rate} ${sea_sale_tax_invoice_child_disc_amt} ${sea_sale_tax_invoice_child_freight} ${sea_sale_tax_invoice_child_fless} ${sea_sale_tax_invoice_child_taxable} ${sea_sale_tax_invoice_child_sgst} ${sea_sale_tax_invoice_child_cgst} ${sea_sale_tax_invoice_child_igst} ${sea_sale_tax_invoice_child_amount} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        //     conn.query(getsaletaxinvoicelistingdata,(error,data) => {
                
        //         if (error || data?.length == 0) 
        //         {   
        //             res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
        //             next();
        //             return;
        //         }
                
        //         data.forEach(element => {
        //             element.sale_tax_invoice_date = constant.moment(element.sale_tax_invoice_date).format('YYYY-MM-DD');
        //             element.export = constant.DefaultExportopetions;
        //         });
                
        //         var totalsaletaxinvoicecount = `SELECT COUNT(sale.id) as Count FROM erp_sale_tax_invoice_child as child LEFT JOIN erp_sale_tax_invoice as sale ON child.sale_tax_invoice_id=sale.id LEFT JOIN erp_quality as quality ON quality.id=child.quality_id LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_party as transporter ON transporter.id=sale.transporter_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' ${sea_sale_tax_invoice_no} ${sea_sale_tax_invoice_date} ${sea_buyer_name} ${sea_sale_tax_invoice_total_meter} ${sea_sale_tax_invoice_total_disc_amount} ${sea_sale_tax_invoice_total_taxable} ${sea_sale_tax_invoice_total_net_amount} ${sea_buyer_id} ${sea_sale_tax_invoice_total_freight} ${sea_sale_tax_invoice_total_fless} ${sea_order_status} ${sea_quality_name} ${sea_sale_tax_invoice_child_quality_colour} ${sea_sale_tax_invoice_lf_no} ${sea_sale_tax_invoice_child_work} ${sea_sale_tax_invoice_child_work_colour} ${sea_sale_tax_invoice_child_remark} ${sea_sale_tax_invoice_bale_marka} ${sea_sale_tax_invoice_child_meter} ${sea_sale_tax_invoice_child_fold} ${sea_sale_tax_invoice_child_count_meter} ${sea_sale_tax_invoice_child_unit} ${sea_sale_tax_invoice_child_rate} ${sea_sale_tax_invoice_child_disc_amt} ${sea_sale_tax_invoice_child_freight} ${sea_sale_tax_invoice_child_fless} ${sea_sale_tax_invoice_child_taxable} ${sea_sale_tax_invoice_child_sgst} ${sea_sale_tax_invoice_child_cgst} ${sea_sale_tax_invoice_child_igst} ${sea_sale_tax_invoice_child_amount} ${date_range_query}`;
            
        //         conn.query(totalsaletaxinvoicecount,(error,countdata) => {
                    
        //             res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
        //             next();
        //             return;
        //         });
        //     });
        // } 
        // else 
        // {   
        //     let getsaleinvoiceexportdata = (export_type == 'all-asc') ? `SELECT sale.id as sale_invoice_id,sale.sale_tax_invoice_bale_marka as bale_marka,(SELECT SUM(sale_tax_invoice_child_unit) FROM erp_sale_tax_invoice_child WHERE sale_tax_invoice_id=sale.id AND is_delete_status='0') as sale_tax_invoice_total_unit,(SELECT SUM(sale_tax_invoice_child_count_meter) FROM erp_sale_tax_invoice_child WHERE sale_tax_invoice_id=sale.id AND is_delete_status='0') as sale_tax_invoice_total_net_meter,state.global_code as state_code,buyer.party_mobile_1,sale.sale_tax_invoice_total_sgst as sgst,sale.sale_tax_invoice_total_cgst as cgst,sale.sale_tax_invoice_total_igst as igst,(sale.sale_tax_invoice_total_sgst + sale.sale_tax_invoice_total_cgst + sale.sale_tax_invoice_total_igst) as total_tax,(SELECT COUNT(id) FROM erp_sale_tax_invoice_child WHERE sale_tax_invoice_id=sale.id AND is_delete_status='0') as child_count,sale.buyer_id,sale.sale_tax_invoice_no as invoice_no,sale.sale_tax_invoice_date as invoice_date,buyer.party_name as buyer_name,sale.sale_tax_invoice_total_meter,sale.sale_tax_invoice_total_disc_amount,sale.sale_tax_invoice_total_taxable,sale.sale_tax_invoice_total_net_amount,sale.sale_tax_invoice_total_freight,sale.sale_tax_invoice_total_fless,transporter.party_name as transporter_name,transporter.party_gst_no as transporter_gst_no,sale.sale_tax_invoice_lf_no,NULL as child_data FROM erp_sale_tax_invoice as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_party as transporter ON transporter.id=sale.transporter_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' ORDER BY ${orderby} ${orderformat}` : '' ;

        //     conn.query(getsaleinvoiceexportdata,(error,data) => {

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

        //                 var getsaletaxinvoicelistingdata = `SELECT quality.quality_name,sale_child.sale_tax_invoice_child_unit as unit,sale_child.sale_tax_invoice_child_meter as qty FROM erp_sale_tax_invoice_child as sale_child LEFT JOIN erp_quality as quality ON quality.id=sale_child.quality_id WHERE sale_child.sale_tax_invoice_id='${element.sale_invoice_id}' AND sale_child.is_delete_status='0'`;

        //                 conn.query(getsaletaxinvoicelistingdata,(error,childdata) => {
                            
        //                     if (childdata?.length > 0) 
        //                     {   
        //                         element.child_data = childdata;
        //                     }
        //                 });
        //             });
        //             setTimeout(() => {
        //                 res?.send({ Status:200,Count:data?.length,Message:'Data found',Data:data });
        //                 next();
        //                 return;
        //             }, 500);
        //         } 
        //     });
        // }

        if (export_type == '') 
        {  
            const search_sale_tax_invoice_no = search?.sale_tax_invoice_no ? search?.sale_tax_invoice_no : '';
            const search_sale_tax_invoice_date = search?.sale_tax_invoice_date ? search?.sale_tax_invoice_date : '';
            const search_sale_tax_invoice_eway_bill_no = search?.sale_tax_invoice_eway_bill_no ? search?.sale_tax_invoice_eway_bill_no : '';
            const search_sale_tax_invoice_eway_bill_date = search?.sale_tax_invoice_eway_bill_date ? search?.sale_tax_invoice_eway_bill_date : '';
            const search_buyer_name = search?.buyer_name ? search?.buyer_name.trim().toLowerCase() : '';
            const search_sale_tax_invoice_total_meter = search?.sale_tax_invoice_total_meter ? search?.sale_tax_invoice_total_meter : '';
            const search_sale_tax_invoice_total_taxable = search?.sale_tax_invoice_total_taxable ? search?.sale_tax_invoice_total_taxable : '';
            const search_sale_tax_invoice_total_net_amount = search?.sale_tax_invoice_total_net_amount ? search?.sale_tax_invoice_total_net_amount : '';
            const search_sale_tax_invoice_bale_marka = search?.sale_tax_invoice_bale_marka ? search?.sale_tax_invoice_bale_marka : '';
            const search_sale_tax_invoice_lf_no = search?.sale_tax_invoice_lf_no ? search?.sale_tax_invoice_lf_no : '';
            const search_sale_tax_invoice_lr_no = search?.sale_tax_invoice_lr_no ? search?.sale_tax_invoice_lr_no : '';
            

            const sea_sale_tax_invoice_no = search_sale_tax_invoice_no != '' ? ` AND sale.sale_tax_invoice_no LIKE '%${search_sale_tax_invoice_no}%'` : '';
            const sea_sale_tax_invoice_date = search_sale_tax_invoice_date != '' ? ` AND sale.sale_tax_invoice_date LIKE '%${search_sale_tax_invoice_date}%'` : '';
            const sea_sale_tax_invoice_eway_bill_no = search_sale_tax_invoice_eway_bill_no != '' ? ` AND sale.sale_tax_invoice_eway_bill_no LIKE '%${search_sale_tax_invoice_eway_bill_no}%'` : '';
            const sea_sale_tax_invoice_eway_bill_date = search_sale_tax_invoice_eway_bill_date != '' ? ` AND sale.sale_tax_invoice_eway_bill_date LIKE '%${search_sale_tax_invoice_eway_bill_date}%'` : '';
            const sea_buyer_name = search_buyer_name != '' ? ` AND buyer.party_name LIKE '%${search_buyer_name}%'` : '';
            const sea_sale_tax_invoice_total_meter = search_sale_tax_invoice_total_meter != '' ? ` AND sale.sale_tax_invoice_total_meter LIKE '%${search_sale_tax_invoice_total_meter}%'` : '';
            const sea_sale_tax_invoice_total_taxable = search_sale_tax_invoice_total_taxable != '' ? ` AND sale.sale_tax_invoice_total_taxable LIKE '%${search_sale_tax_invoice_total_taxable}%'` : '';
            const sea_sale_tax_invoice_total_net_amount = search_sale_tax_invoice_total_net_amount != '' ? ` AND sale.sale_tax_invoice_total_net_amount LIKE '%${search_sale_tax_invoice_total_net_amount}%'` : '';
            const sea_sale_tax_invoice_lf_no = search_sale_tax_invoice_lf_no != '' ? ` AND sale.sale_tax_invoice_lf_no LIKE '%${search_sale_tax_invoice_lf_no}%'` : '';
            const sea_sale_tax_invoice_lr_no = search_sale_tax_invoice_lr_no != '' ? ` AND sale.sale_tax_invoice_lr_no LIKE '%${search_sale_tax_invoice_lr_no}%'` : '';
            const sea_buyer_id = buyer_id > 0 ? ` AND sale.buyer_id LIKE '%${buyer_id}%'` : '';
            const sea_order_status = order_status == 'cancel' ? ` AND sale.order_status='${order_status}'` : ` AND sale.order_status!='cancel'`;
            const sea_sale_tax_invoice_bale_marka = search_sale_tax_invoice_bale_marka != '' ? ` AND sale.sale_tax_invoice_bale_marka LIKE '%${search_sale_tax_invoice_bale_marka}%'` : '';
            const date_range_query = from_date != '' ? ` AND DATE(sale.sale_tax_invoice_date) >='${from_date}' AND DATE(sale.sale_tax_invoice_date) <='${to_date}'` : '';
            
            var getsaletaxinvoicelistingdata = `SELECT ${All_ID_Query} sale.buyer_id,sale.sale_tax_invoice_no,DATE_FORMAT(sale.sale_tax_invoice_date, '%d-%m-%Y') as sale_tax_invoice_date,sale.sale_tax_invoice_eway_bill_no,sale.sale_tax_invoice_eway_bill_date,buyer.party_name as buyer_name,sale.sale_tax_invoice_total_meter,sale.sale_tax_invoice_total_taxable,sale.sale_tax_invoice_total_net_amount,transporter.party_name as transporter_name,transporter.party_gst_no as transporter_gst_no,sale.sale_tax_invoice_lf_no,sale.sale_tax_invoice_lr_no,sale.sale_tax_invoice_bale_marka,buyer.party_gst_no FROM erp_sale_tax_invoice as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_party as transporter ON transporter.id=sale.transporter_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' ${sea_sale_tax_invoice_no} ${sea_sale_tax_invoice_date} ${sea_sale_tax_invoice_eway_bill_no} ${sea_sale_tax_invoice_eway_bill_date} ${sea_buyer_name} ${sea_sale_tax_invoice_total_meter} ${sea_sale_tax_invoice_total_taxable} ${sea_sale_tax_invoice_total_net_amount} ${sea_buyer_id} ${sea_order_status} ${sea_sale_tax_invoice_lf_no} ${sea_sale_tax_invoice_lr_no} ${sea_sale_tax_invoice_bale_marka} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

            conn.query(getsaletaxinvoicelistingdata,(error,data) => {
                
                if (error || data?.length == 0) 
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                
                data.forEach(element => {
                    // element.sale_tax_invoice_date = constant.moment(element.sale_tax_invoice_date).format('YYYY-MM-DD');
                    element.sale_tax_invoice_eway_bill_date = element.sale_tax_invoice_eway_bill_date == null ? '' : constant.moment(element.sale_tax_invoice_eway_bill_date).format('YYYY-MM-DD');
                    element.export = constant.DefaultExportopetions;
                });
                
                var totalsaletaxinvoicecount = `SELECT COUNT(sale.id) as Count FROM erp_sale_tax_invoice as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_party as transporter ON transporter.id=sale.transporter_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' ${sea_sale_tax_invoice_no} ${sea_sale_tax_invoice_date} ${sea_sale_tax_invoice_eway_bill_no} ${sea_sale_tax_invoice_eway_bill_date} ${sea_buyer_name} ${sea_sale_tax_invoice_total_meter} ${sea_sale_tax_invoice_total_taxable} ${sea_sale_tax_invoice_total_net_amount} ${sea_buyer_id} ${sea_order_status} ${sea_sale_tax_invoice_lf_no} ${sea_sale_tax_invoice_lr_no} ${sea_sale_tax_invoice_bale_marka} ${date_range_query}`;
            
                conn.query(totalsaletaxinvoicecount,(error,countdata) => {
                    
                    res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                    next();
                    return;
                });
            });
        } 
        else 
        {   
            let getsaleinvoiceexportdata = (export_type == 'all-asc') ? `SELECT sale.id as sale_invoice_id,sale.sale_tax_invoice_bale_marka as bale_marka,(SELECT SUM(sale_tax_invoice_child_unit) FROM erp_sale_tax_invoice_child WHERE sale_tax_invoice_id=sale.id AND is_delete_status='0') as sale_tax_invoice_total_unit,(SELECT SUM(sale_tax_invoice_child_count_meter) FROM erp_sale_tax_invoice_child WHERE sale_tax_invoice_id=sale.id AND is_delete_status='0') as sale_tax_invoice_total_net_meter,state.global_code as state_code,buyer.party_mobile_1,sale.sale_tax_invoice_total_sgst as sgst,sale.sale_tax_invoice_total_cgst as cgst,sale.sale_tax_invoice_total_igst as igst,(sale.sale_tax_invoice_total_sgst + sale.sale_tax_invoice_total_cgst + sale.sale_tax_invoice_total_igst) as total_tax,(SELECT COUNT(id) FROM erp_sale_tax_invoice_child WHERE sale_tax_invoice_id=sale.id AND is_delete_status='0') as child_count,sale.buyer_id,sale.sale_tax_invoice_no as invoice_no,DATE_FORMAT(sale.sale_tax_invoice_date, '%d-%m-%Y') as invoice_date,buyer.party_name as buyer_name,sale.sale_tax_invoice_total_meter,sale.sale_tax_invoice_total_disc_amount,sale.sale_tax_invoice_total_taxable,sale.sale_tax_invoice_total_net_amount,sale.sale_tax_invoice_total_freight,sale.sale_tax_invoice_total_fless,transporter.party_name as transporter_name,transporter.party_gst_no as transporter_gst_no,sale.sale_tax_invoice_lf_no,NULL as child_data FROM erp_sale_tax_invoice as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_party as transporter ON transporter.id=sale.transporter_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' ORDER BY ${orderby} ${orderformat}` : '' ;

            conn.query(getsaleinvoiceexportdata,(error,data) => {

                if (error || data?.length == 0) 
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    data?.forEach(element => {
                        // element.invoice_date = constant.moment(element.invoice_date).format('YYYY-MM-DD');

                        var getsaletaxinvoicelistingdata = `SELECT quality.quality_name,sale_child.sale_tax_invoice_child_unit as unit,sale_child.sale_tax_invoice_child_meter as qty FROM erp_sale_tax_invoice_child as sale_child LEFT JOIN erp_quality as quality ON quality.id=sale_child.quality_id WHERE sale_child.sale_tax_invoice_id='${element.sale_invoice_id}' AND sale_child.is_delete_status='0'`;

                        conn.query(getsaletaxinvoicelistingdata,(error,childdata) => {
                            
                            if (childdata?.length > 0) 
                            {   
                                element.child_data = childdata;
                            }
                        });
                    });
                    setTimeout(() => {
                        res?.send({ Status:200,Count:data?.length,Message:'Data found',Data:data });
                        next();
                        return;
                    }, 500);
                } 
            });
        }

    },

    // INSERT AND UPDATE sale tax invoice CHILD DATA API //
    createsaletaxinvoicechild: (sale_invoice_id,req,headers) => {

        let body  = req;
        let header_data = headers;
    
        body.forEach((data,index) => {
            const id = data?.id ? Number(data?.id) : 0;
            const user_id = data?.user_id ? data?.user_id : 0;
            const sale_tax_invoice_id = sale_invoice_id ? sale_invoice_id : 0;
            const quality_id = data?.quality_id ? data?.quality_id : 0;
            const jober_id = data?.jober_id ? data?.jober_id : 0;
            const order_status_id = data?.order_status_id ? data?.order_status_id : 0;
            const gst_id = data?.gst_id ? data?.gst_id : 0;
            const sale_child_id = data?.sale_child_id ? data?.sale_child_id : 0;
            const sale_tax_invoice_child_remark = data?.sale_tax_invoice_child_remark ? data?.sale_tax_invoice_child_remark.trim().toLowerCase() : '';
            const sale_tax_invoice_child_quality_colour = data?.sale_tax_invoice_child_quality_colour ? data?.sale_tax_invoice_child_quality_colour.trim().toLowerCase() : '';
            const sale_tax_invoice_child_work = data?.sale_tax_invoice_child_work ? data?.sale_tax_invoice_child_work.trim().toLowerCase() : 0;
            const sale_tax_invoice_child_work_colour = data?.sale_tax_invoice_child_work_colour ? data?.sale_tax_invoice_child_work_colour.trim().toLowerCase() : '';
            const sale_tax_invoice_child_unit = data?.sale_tax_invoice_child_unit ? data?.sale_tax_invoice_child_unit : 0;
            const sale_tax_invoice_child_meter = data?.sale_tax_invoice_child_meter ? data?.sale_tax_invoice_child_meter : 0;
            const sale_tax_invoice_child_meter_data = data?.sale_tax_invoice_child_meter_data ? JSON.stringify(data?.sale_tax_invoice_child_meter_data) : '';
            const sale_tax_invoice_child_weight = data?.sale_tax_invoice_child_weight ? data?.sale_tax_invoice_child_weight : 0;
            const sale_tax_invoice_child_fold = data?.sale_tax_invoice_child_fold ? data?.sale_tax_invoice_child_fold : 0;
            const sale_tax_invoice_child_count_meter = data?.sale_tax_invoice_child_count_meter ? data?.sale_tax_invoice_child_count_meter : 0;
            const sale_tax_invoice_child_rate = data?.sale_tax_invoice_child_rate ? data?.sale_tax_invoice_child_rate : 0;
            const sale_tax_invoice_child_rate_per = data?.sale_tax_invoice_child_rate_per ? data?.sale_tax_invoice_child_rate_per : 0;
            const sale_tax_invoice_child_help = data?.sale_tax_invoice_child_help ? data?.sale_tax_invoice_child_help : '';
            const sale_tax_invoice_child_total = data?.sale_tax_invoice_child_total ? data?.sale_tax_invoice_child_total : 0;
            const sale_tax_invoice_child_disc_per = data?.sale_tax_invoice_child_disc_per ? data?.sale_tax_invoice_child_disc_per : 0;
            const sale_tax_invoice_child_disc_amt = data?.sale_tax_invoice_child_disc_amt ? data?.sale_tax_invoice_child_disc_amt : 0;
            const sale_tax_invoice_child_freight = data?.sale_tax_invoice_child_freight ? data?.sale_tax_invoice_child_freight : 0;
            const sale_tax_invoice_child_fless = data?.sale_tax_invoice_child_fless ? data?.sale_tax_invoice_child_fless : 0;
            const sale_tax_invoice_child_taxable = data?.sale_tax_invoice_child_taxable ? data?.sale_tax_invoice_child_taxable : 0;
            const sale_tax_invoice_child_sgst = data?.sale_tax_invoice_child_sgst ? data?.sale_tax_invoice_child_sgst : 0;
            const sale_tax_invoice_child_cgst = data?.sale_tax_invoice_child_cgst ? data?.sale_tax_invoice_child_cgst : 0;
            const sale_tax_invoice_child_igst = data?.sale_tax_invoice_child_igst ? data?.sale_tax_invoice_child_igst : 0;
            const sale_tax_invoice_child_amount = data?.sale_tax_invoice_child_amount ? data?.sale_tax_invoice_child_amount : 0;
            const is_completed = data?.is_completed ? data?.is_completed : 0;
            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

            if (id > 0) 
            {   
                const updatesaletaxinvoicechild = `CALL create_sale_tax_invoice_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updatesaletaxinvoicechild,[id,user_id,sale_tax_invoice_id,quality_id,jober_id,order_status_id,gst_id,sale_child_id,sale_tax_invoice_child_remark,sale_tax_invoice_child_quality_colour,sale_tax_invoice_child_work,sale_tax_invoice_child_work_colour,sale_tax_invoice_child_unit,sale_tax_invoice_child_meter,sale_tax_invoice_child_meter_data,sale_tax_invoice_child_weight,sale_tax_invoice_child_fold,sale_tax_invoice_child_count_meter,sale_tax_invoice_child_rate,sale_tax_invoice_child_rate_per,sale_tax_invoice_child_help,sale_tax_invoice_child_total,sale_tax_invoice_child_disc_per,sale_tax_invoice_child_disc_amt,sale_tax_invoice_child_freight,sale_tax_invoice_child_fless,sale_tax_invoice_child_taxable,sale_tax_invoice_child_sgst,sale_tax_invoice_child_cgst,sale_tax_invoice_child_igst,sale_tax_invoice_child_amount,is_completed,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    }
                    else
                    {                          
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `sale tax invoice Child Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0]?.user_position,ip,`sale tax invoice Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return({ Status:200,Count:0,Message:'sale tax invoice Child Updated',Data:[] });
                    }  
                });
            }
            else
            {
                const createsaletaxinvoicechild = `CALL create_sale_tax_invoice_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createsaletaxinvoicechild,[id,user_id,sale_tax_invoice_id,quality_id,jober_id,order_status_id,gst_id,sale_child_id,sale_tax_invoice_child_remark,sale_tax_invoice_child_quality_colour,sale_tax_invoice_child_work,sale_tax_invoice_child_work_colour,sale_tax_invoice_child_unit,sale_tax_invoice_child_meter,sale_tax_invoice_child_meter_data,sale_tax_invoice_child_weight,sale_tax_invoice_child_fold,sale_tax_invoice_child_count_meter,sale_tax_invoice_child_rate,sale_tax_invoice_child_rate_per,sale_tax_invoice_child_help,sale_tax_invoice_child_total,sale_tax_invoice_child_disc_per,sale_tax_invoice_child_disc_amt,sale_tax_invoice_child_freight,sale_tax_invoice_child_fless,sale_tax_invoice_child_taxable,sale_tax_invoice_child_sgst,sale_tax_invoice_child_cgst,sale_tax_invoice_child_igst,sale_tax_invoice_child_amount,is_completed,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return { Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error };
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `sale tax invoice Child Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails,[user_id],(error,userdata) => {

                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0]?.user_position,ip,`sale tax invoice Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });                       
                        return { Status:200,Count:0,Message:'sale tax invoice Child Inserted',Data:data[0] };
                    }  
                });
            }
        });
    },

    // DELETE sale tax invoice DATA API //
    deletesaletaxinvoicedata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Sale tax ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        // var existsaletaxinvoicedata = `SELECT id as sale_tax_invoice_id,(SELECT COUNT(id) FROM erp_sale_tax_invoice_child WHERE sale_tax_invoice_id='${id}' AND is_delete_status='0') as sale_tax_invoice_child_id FROM erp_sale_tax_invoice WHERE id='${id}'`;

        // conn.query(existsaletaxinvoicedata,(error,data) => {
        //     if (error) 
        //     {   
        //         res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
        //         next();
        //         return;
        //     }
        //     else
        //     {
        //         if (data[0]?.sale_tax_invoice_child_id > 0)
        //         {
        //             res?.send({ Status:400,Count:0,Message:'sale tax In Use can not delete',Data:[] });
        //             next();
        //             return;
        //         }
        //         else
        //         {
                    var deletesaletaxinvoicedata = `CALL delete_sale_tax_invoice(?,?)`;
                    conn.query(deletesaletaxinvoicedata,[id,entry_date],(error,data) => {
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
                            const ip = `sale tax Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`sale tax`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'sale tax Deleted Successfully',Data:[]});

                            // DELETE DEFAULT VOUCHER //
                            res?.send(AllVoucherApis.deletedefaultvoucherdata(id,`sale`,user_id,req?.headers));
                            next();
                            return;
                        }
                    });
        //         }
        //     }
        // });
    },

    // DELETE sale tax invoice DATA API //
    deletesaletaxinvoicechilddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'sale Tax child Deleted Successfully',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var deletesaletaxinvoicechilddata = `CALL delete_sale_tax_invoice_child(?,?)`;
        conn.query(deletesaletaxinvoicechilddata,[id,entry_date],(error,data) => {
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
                const ip = `sale tax child Deleted With This Device ID ${HeaderData.device_id} `;
                const loginuserdetails = `CALL get_user_details(?)`;
                conn.query(loginuserdetails,[user_id],function(error,userdata){
                    if(userdata[0])
                    {   
                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        conn.query(loginactivitylog,[user_id,0,userdata[0][0]?.user_position,ip,`sale tax child`,entry_date],function(error,data){
                
                        });
                    }
                });
                res?.send({ Status:200,Count:1,Message:'sale tax child Deleted Successfully',Data:[] });
                next();
                return;
            }
        });
    },    
};


export default AllSaleTaxInvoiceApis;
    
