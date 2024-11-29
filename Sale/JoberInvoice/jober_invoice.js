import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";
import AllVoucherApis from '../../Accounting/Voucher/voucher.js';

const AllJoberInvoiceApis = {
    
    // INSERT AND UPDATE jober invoice DATA API //
    createjoberinvoice: (req,res,next) => {

        let body  = req?.body;
        let child_data = req?.body?.jober_invoice_child_data;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const year_id = body?.year_id ? body?.year_id  : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const godown_id = body?.godown_id ? body?.godown_id : 0;
        const jober_invoice_account_type = body?.jober_invoice_account_type ? body?.jober_invoice_account_type : 0;
        const sale_jober_receive_id = body?.sale_jober_receive_id ? body?.sale_jober_receive_id : 0;
        const account_head_id = body?.account_head_id ? body?.account_head_id  : 0;
        const tds_on_id = body?.tds_on_id ? body?.tds_on_id : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id : 0;
        const status_id = body?.status_id ? body?.status_id : 0;
        const jober_id = body?.jober_id ? body?.jober_id : 0;
        const jober_invoice_no = body?.jober_invoice_no ? body?.jober_invoice_no : '';
        const jober_invoice_date = body?.jober_invoice_date ? body?.jober_invoice_date : constant.moment().format('YYYY-MM-DD');
        const jober_invoice_lf_no = body?.jober_invoice_lf_no ? body?.jober_invoice_lf_no : '';
        const jober_invoice_total_meter = body?.jober_invoice_total_meter ? body?.jober_invoice_total_meter : 0;
        const jober_invoice_total_weight = body?.jober_invoice_total_weight ? body?.jober_invoice_total_weight : 0;
        const jober_invoice_total_total = body?.jober_invoice_total_total ? body?.jober_invoice_total_total : 0;
        const jober_invoice_total_disc_amt = body?.jober_invoice_total_disc_amt ? body?.jober_invoice_total_disc_amt : 0;
        const jober_invoice_total_taxable = body?.jober_invoice_total_taxable ? body?.jober_invoice_total_taxable : 0;
        const jober_invoice_total_sgst = body?.jober_invoice_total_sgst ? body?.jober_invoice_total_sgst : 0;
        const jober_invoice_total_cgst = body?.jober_invoice_total_cgst ? body?.jober_invoice_total_cgst : 0;
        const jober_invoice_total_igst = body?.jober_invoice_total_igst ? body?.jober_invoice_total_igst : 0;
        const is_tds_applicable = body?.is_tds_applicable ? body?.is_tds_applicable : 0;
        const jober_invoice_applicable_rate = body?.jober_invoice_applicable_rate ? body?.jober_invoice_applicable_rate : 0;
        const jober_invoice_total_tds = body?.jober_invoice_total_tds ? body?.jober_invoice_total_tds : 0;
        const jober_invoice_total_included_tax_amount = body?.jober_invoice_total_included_tax_amount ? body?.jober_invoice_total_included_tax_amount : 0;
        const jober_invoice_total_round_off = body?.jober_invoice_total_round_off ? body?.jober_invoice_total_round_off : 0;
        const jober_invoice_total_net_amount = body?.jober_invoice_total_net_amount ? body?.jober_invoice_total_net_amount : 0;
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
            const updatejoberinvoice = `CALL create_jober_invoice(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatejoberinvoice,[id,user_id,company_id,year_id,branch_id,godown_id,jober_invoice_account_type,sale_jober_receive_id,account_head_id,tds_on_id,nature_of_payment_id,status_id,jober_id,jober_invoice_no,jober_invoice_date,jober_invoice_lf_no,jober_invoice_total_meter,jober_invoice_total_weight,jober_invoice_total_total,jober_invoice_total_disc_amt,jober_invoice_total_taxable,jober_invoice_total_sgst,jober_invoice_total_cgst,jober_invoice_total_igst,is_tds_applicable,jober_invoice_applicable_rate,jober_invoice_total_tds,jober_invoice_total_included_tax_amount,jober_invoice_total_round_off,jober_invoice_total_net_amount,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'jober invoice Updated',Data:[] });
                    next();

                    if (child_data && child_data?.length > 0) 
                    {
                        // CALL jober INVOICE CHILD API //
                        res?.send(AllJoberInvoiceApis.createjoberinvoicechild(id,child_data,req?.headers));
                        next();
                    }

                    // DELETE DEFAULT VOUCHER //
                    res?.send(AllVoucherApis.deletedefaultvoucherdata(id,`jober`,user_id,req?.headers));
                    next();

                    if (is_tds_applicable == '1' && jober_invoice_total_tds > 0) 
                    {
                        // CALL VOUCHER DEFAULT API //                      
                        res?.send(AllVoucherApis.createdefaultvoucher(user_id,branch_id,company_id,year_id,jober_id,tds_on_id,jober_invoice_total_tds,id,req?.headers,`jober`));
                    }
                                        
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `jober invoice Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`jober invoice`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {   
            const createjoberinvoice = `CALL create_jober_invoice(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createjoberinvoice,[id,user_id,company_id,year_id,branch_id,godown_id,jober_invoice_account_type,sale_jober_receive_id,account_head_id,tds_on_id,nature_of_payment_id,status_id,jober_id,jober_invoice_no,jober_invoice_date,jober_invoice_lf_no,jober_invoice_total_meter,jober_invoice_total_weight,jober_invoice_total_total,jober_invoice_total_disc_amt,jober_invoice_total_taxable,jober_invoice_total_sgst,jober_invoice_total_cgst,jober_invoice_total_igst,is_tds_applicable,jober_invoice_applicable_rate,jober_invoice_total_tds,jober_invoice_total_included_tax_amount,jober_invoice_total_round_off,jober_invoice_total_net_amount,entry_date,update_date],(error,data) => {

                if (error || data[0]?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    data.forEach(element => {
                        element.jober_invoice_date = constant.moment(element.jober_invoice_date).format('YYYY-MM-DD');
                    });
                    res?.send({ Status:200,Count:0,Message:'jober invoice Inserted',Data:data[0] });
                    next();
                    
                    if (child_data && child_data?.length > 0) 
                    {
                        // CALL jober INVOICE CHILD API //
                        res?.send(AllJoberInvoiceApis.createjoberinvoicechild(data[0][0].jober_invoice_id,child_data,req?.headers));
                    }
                    if (data[0][0].is_tds_applicable == '1' && data[0][0].jober_invoice_total_tds > 0) 
                    {
                        // CALL VOUCHER DEFAULT API //                        
                        res?.send(AllVoucherApis.createdefaultvoucher(data[0][0].user_id,data[0][0].branch_id,data[0][0].company_id,data[0][0].year_id,data[0][0].jober_id,data[0][0].tds_on_id,data[0][0].jober_invoice_total_tds,data[0][0].jober_invoice_id,req?.headers,`jober`));
                    }
                    
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `jober invoice Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`jober invoice`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET jober invoice DETAILS DATA API //
    getjoberinvoicedetails: (req,res,next) => {

        const jober_invoice_id = req.body?.jober_invoice_id ? req.body?.jober_invoice_id : 0;

        if (jober_invoice_id.length == 0 || jober_invoice_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter jober invoice ID',Data:[] });
            next();
            return;
        }

        var getjoberinvoicedetails = `CALL get_jober_invoice_details(?)`;
        conn.query(getjoberinvoicedetails,[jober_invoice_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].jober_invoice_date = constant.moment(data[0][0].jober_invoice_date).format('YYYY-MM-DD');

                data[1].forEach(element => {
                    element.jober_invoice_child_sgst_amt = (element.jober_invoice_child_sgst_amt + (element.jober_invoice_child_sgst/100) * element.jober_invoice_child_taxable).toFixed(2);
                    element.jober_invoice_child_cgst_amt = (element.jober_invoice_child_cgst_amt + (element.jober_invoice_child_cgst/100) * element.jober_invoice_child_taxable).toFixed(2);
                    element.jober_invoice_child_igst_amt = (element.jober_invoice_child_igst_amt + (element.jober_invoice_child_igst/100) * element.jober_invoice_child_taxable).toFixed(2);
                });

                data[0][0].jober_invoice_child_data = data[1];

                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET jober invoice LISTING DATA API //
    getjoberinvoicelistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body?.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const jober_id = body?.jober_id ? body?.jober_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'receive.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`receive.id as jober_receive_id,jober.nature_of_payment_id,jober.status_id,jober.tds_on_id,jober.state_id,`;

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

        const search_sale_jober_receive_invoice_no = search?.sale_jober_receive_invoice_no ? search?.sale_jober_receive_invoice_no : '';
        const search_sale_jober_receive_date = search?.sale_jober_receive_date ? search?.sale_jober_receive_date : '';
        const search_quality_name = search?.quality_name ? search?.quality_name.trim().toLowerCase() : '';
        const search_jober_name = search?.jober_name ? search?.jober_name.trim().toLowerCase() : '';
        const search_sale_jober_receive_meter = search?.sale_jober_receive_meter ? search?.sale_jober_receive_meter : '';
        const search_sale_jober_receive_weight = search?.sale_jober_receive_weight ? search?.sale_jober_receive_weight : '';
        const search_sale_jober_receive_fold = search?.sale_jober_receive_fold ? search?.sale_jober_receive_fold : '';
        const search_sale_jober_receive_rate = search?.sale_jober_receive_rate ? search?.sale_jober_receive_rate : '';
        const search_sale_jober_receive_shortage = search?.sale_jober_receive_shortage ? search?.sale_jober_receive_shortage : '';
        
        const sea_sale_jober_receive_invoice_no = search_sale_jober_receive_invoice_no != '' ? ` AND receive.sale_jober_receive_invoice_no LIKE '%${search_sale_jober_receive_invoice_no}%'` : '';
        const sea_sale_jober_receive_date = search_sale_jober_receive_date != '' ? ` AND receive.sale_jober_receive_date LIKE '%${search_sale_jober_receive_date}%'` : '';
        const sea_quality_name = search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_jober_name = search_jober_name != '' ? ` AND jober.party_name LIKE '%${search_jober_name}%'` : '';
        const sea_sale_jober_receive_meter = search_sale_jober_receive_meter != '' ? ` AND receive.sale_jober_receive_meter LIKE '%${search_sale_jober_receive_meter}%'` : '';
        const sea_sale_jober_receive_weight = search_sale_jober_receive_weight != '' ? ` AND receive.sale_jober_receive_weight LIKE '%${search_sale_jober_receive_weight}%'` : '';
        const sea_sale_jober_receive_fold = search_sale_jober_receive_fold != '' ? ` AND receive.sale_jober_receive_fold LIKE '%${search_sale_jober_receive_fold}%'` : '';
        const sea_sale_jober_receive_rate = search_sale_jober_receive_rate != '' ? ` AND receive.sale_jober_receive_rate LIKE '%${search_sale_jober_receive_rate}%'` : '';
        const sea_sale_jober_receive_shortage = search_sale_jober_receive_shortage != '' ? ` AND receive.sale_jober_receive_shortage LIKE '%${search_sale_jober_receive_shortage}%'` : '';
        const sea_quality_id = quality_id > 0 ? ` AND receive.quality_id='${quality_id}'` : '';
        const sea_jober_id = jober_id > 0 ? ` AND receive.jober_id='${jober_id}'` : '';    
        const date_range_query = from_date != '' ? ` AND DATE(receive.sale_jober_receive_date) >='${from_date}' AND DATE(receive.sale_jober_receive_date) <='${to_date}'` : '';


        var getjoberinvoicelistingdata = `SELECT ${All_ID_Query} receive.sale_jober_receive_invoice_no,receive.sale_jober_receive_date,quality.quality_name,receive.jober_id,jober.party_name as jober_name,receive.sale_jober_receive_meter,receive.sale_jober_receive_weight,receive.sale_jober_receive_fold,receive.sale_jober_receive_rate,receive.sale_jober_receive_shortage,jober.is_tds_applicable,jober.party_applicable_rate,state.global_code as state_code,jober.party_gst_no FROM erp_sale_jober_receive as receive LEFT JOIN erp_party as jober ON jober.id=receive.jober_id LEFT JOIN erp_quality as quality ON quality.id=receive.quality_id LEFT JOIN erp_global as state ON state.id=jober.state_id WHERE receive.user_id='${user_id}' AND receive.company_id<='${company_id}' AND receive.year_id<='${year_id}' AND receive.branch_id<='${branch_id}' AND receive.id NOT IN (SELECT jober_child.jober_receive_id FROM erp_jober_invoice_child as jober_child LEFT JOIN erp_jober_invoice as jober_par ON jober_par.id=jober_child.jober_invoice_id WHERE jober_par.user_id='${user_id}' AND jober_par.company_id<='${company_id}' AND jober_par.year_id<='${year_id}' AND jober_par.branch_id<='${branch_id}' AND jober_child.is_delete_status='0' AND jober_par.is_delete_status='0') AND receive.is_delete_status='0' ${sea_sale_jober_receive_invoice_no} ${sea_sale_jober_receive_date} ${sea_quality_name} ${sea_jober_name} ${sea_sale_jober_receive_meter} ${sea_sale_jober_receive_weight} ${sea_sale_jober_receive_fold} ${sea_sale_jober_receive_rate} ${sea_sale_jober_receive_shortage} ${sea_quality_id} ${sea_jober_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getjoberinvoicelistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.sale_jober_receive_date = constant.moment(element.sale_jober_receive_date).format('YYYY-MM-DD');
                element.export = constant.DefaultExportopetions;
            });
            
            var totaljoberinvoicecount = `SELECT COUNT(receive.id) as Count FROM erp_sale_jober_receive as receive LEFT JOIN erp_party as jober ON jober.id=receive.jober_id LEFT JOIN erp_quality as quality ON quality.id=receive.quality_id LEFT JOIN erp_global as state ON state.id=jober.state_id WHERE receive.user_id='${user_id}' AND receive.company_id<='${company_id}' AND receive.year_id<='${year_id}' AND receive.branch_id<='${branch_id}' AND receive.id NOT IN (SELECT jober_child.jober_receive_id FROM erp_jober_invoice_child as jober_child LEFT JOIN erp_jober_invoice as jober_par ON jober_par.id=jober_child.jober_invoice_id WHERE jober_par.user_id='${user_id}' AND jober_par.company_id<='${company_id}' AND jober_par.year_id<='${year_id}' AND jober_par.branch_id<='${branch_id}' AND jober_child.is_delete_status='0' AND jober_par.is_delete_status='0') AND receive.is_delete_status='0' ${sea_sale_jober_receive_invoice_no} ${sea_sale_jober_receive_date} ${sea_quality_name} ${sea_jober_name} ${sea_sale_jober_receive_meter} ${sea_sale_jober_receive_weight} ${sea_sale_jober_receive_fold} ${sea_sale_jober_receive_rate} ${sea_sale_jober_receive_shortage} ${sea_quality_id} ${sea_jober_id} ${date_range_query}`;
        
            conn.query(totaljoberinvoicecount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // GET jober invoice REPORT LISTING DATA API //
    getjoberinvoicereportlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        const jober_id = body?.jober_id ? body?.jober_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'jober_par.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const type = body?.type ? body?.type : '';
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`jober_par.id as jober_invoice_id,`;
        const type_query_table = type == 'detail' ? `LEFT JOIN erp_quality as quality ON quality.id=jober_child.quality_id` : '';
        const type_query_colums = type == 'detail' ? `quality.quality_name,jober_child.jober_invoice_child_meter as meter,jober_child.jober_invoice_child_rate as rate,jober_child.jober_invoice_child_amount as amount,jober_child.jober_invoice_child_disc_amt as disc_amt,` : '';

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

        const search_jober_invoice_no = search?.jober_invoice_no ? search?.jober_invoice_no : '';
        const search_jober_invoice_date = search?.jober_invoice_date ? search?.jober_invoice_date : '';
        const search_jober_invoice_lf_no = search?.jober_invoice_lf_no ? search?.jober_invoice_lf_no : '';
        const search_jober_invoice_total_meter = search?.jober_invoice_total_meter ? search?.jober_invoice_total_meter : '';
        const search_jober_invoice_total_weight = search?.jober_invoice_total_weight ? search?.jober_invoice_total_weight : '';
        const search_jober_invoice_total_total = search?.jober_invoice_total_total ? search?.jober_invoice_total_total : '';
        const search_jober_invoice_total_taxable = search?.jober_invoice_total_taxable ? search?.jober_invoice_total_taxable : '';
        const search_jober_invoice_total_sgst = search?.jober_invoice_total_sgst ? search?.jober_invoice_total_sgst : '';
        const search_jober_invoice_total_cgst = search?.jober_invoice_total_cgst ? search?.jober_invoice_total_cgst : '';
        const search_jober_invoice_total_igst = search?.jober_invoice_total_igst ? search?.jober_invoice_total_igst : '';
        const search_jober_invoice_total_included_tax_amount = search?.jober_invoice_total_included_tax_amount ? search?.jober_invoice_total_included_tax_amount : '';
        const search_jober_invoice_total_tds = search?.jober_invoice_total_tds ? search?.jober_invoice_total_tds.trim().toLowerCase() : '';
        const search_jober_invoice_total_net_amount = search?.jober_invoice_total_net_amount ? search?.jober_invoice_total_net_amount.trim().toLowerCase() : '';        
        
        const sea_jober_invoice_no = search_jober_invoice_no != '' ? ` AND jober_par.jober_invoice_no LIKE '%${search_jober_invoice_no}%'` : '';
        const sea_jober_invoice_date = search_jober_invoice_date != '' ? ` AND jober_par.jober_invoice_date LIKE '%${search_jober_invoice_date}%'` : '';
        const sea_jober_invoice_lf_no = search_jober_invoice_lf_no != '' ? ` AND jober_par.jober_invoice_lf_no LIKE '%${search_jober_invoice_lf_no}%'` : '';
        const sea_jober_invoice_total_meter = search_jober_invoice_total_meter != '' ? ` AND jober_par.jober_invoice_total_meter LIKE '%${search_jober_invoice_total_meter}%'` : '';
        const sea_jober_invoice_total_weight = search_jober_invoice_total_weight != '' ? ` AND jober_par.jober_invoice_total_weight LIKE '%${search_jober_invoice_total_weight}%'` : '';
        const sea_jober_invoice_total_total = search_jober_invoice_total_total != '' ? ` AND jober_par.jober_invoice_total_total LIKE '%${search_jober_invoice_total_total}%'` : '';       
        const sea_jober_invoice_total_taxable = search_jober_invoice_total_taxable != '' ? ` AND jober_par.jober_invoice_total_taxable LIKE '%${search_jober_invoice_total_taxable}%'` : '';
        const sea_jober_invoice_total_sgst = search_jober_invoice_total_sgst != '' ? ` AND jober_par.jober_invoice_total_sgst LIKE '%${search_jober_invoice_total_sgst}%'` : '';
        const sea_jober_invoice_total_cgst = search_jober_invoice_total_cgst != '' ? ` AND jober_par.purchase_tax_invoice_child_unit_sent LIKE '%${search_jober_invoice_total_cgst}%'` : '';
        const sea_jober_invoice_total_igst = search_jober_invoice_total_igst != '' ? ` AND jober_par.jober_invoice_total_igst LIKE '%${search_jober_invoice_total_igst}%'` : '';
        const sea_jober_invoice_total_included_tax_amount = search_jober_invoice_total_included_tax_amount != '' ? ` AND jober_par.jober_invoice_total_included_tax_amount LIKE '%${search_jober_invoice_total_included_tax_amount}%'` : '';
        const sea_jober_invoice_total_tds = search_jober_invoice_total_tds != '' ? ` AND jober_par.jober_invoice_total_tds LIKE '%${search_jober_invoice_total_tds}%'` : '';
        const sea_jober_invoice_total_net_amount = search_jober_invoice_total_net_amount != '' ? ` AND jober_par.jober_invoice_total_net_amount LIKE '%${search_jober_invoice_total_net_amount}%'` : '';
        const sea_quality_id = quality_id > 0 ? ` AND child.quality_id='${quality_id}'` : '';
        const sea_jober_id = jober_id > 0 ? ` AND jober_par.jober_id='${jober_id}'` : '';    
        const date_range_query = from_date != '' ? ` AND DATE(jober_par.jober_invoice_date) >='${from_date}' AND DATE(jober_par.jober_invoice_date) <='${to_date}'` : '';
        
        var getjoberinvoicereportlistingdata = `SELECT ${All_ID_Query}${type_query_colums} jober_par.jober_invoice_no,jober_par.jober_invoice_date,jober_par.jober_invoice_lf_no,jober_par.jober_invoice_total_meter,jober_par.jober_invoice_total_weight,jober_par.jober_invoice_total_total,jober_par.jober_invoice_total_taxable,jober_par.jober_invoice_total_sgst,jober_par.jober_invoice_total_cgst,jober_par.jober_invoice_total_igst,jober_par.jober_invoice_total_included_tax_amount,jober_par.jober_invoice_total_tds,jober_par.jober_invoice_total_net_amount,NULL as jober_receive_invoice_no,jober.is_tds_applicable,jober.party_applicable_rate,jober.nature_of_payment_id,jober.status_id,jober.tds_on_id,jober.state_id,jober_par.jober_id,jober.party_name as jober_name,state.global_code as state_code,jober.party_gst_no FROM erp_jober_invoice as jober_par LEFT JOIN erp_jober_invoice_child as jober_child ON jober_child.jober_invoice_id=jober_par.id LEFT JOIN erp_party as jober ON jober.id=jober_par.jober_id LEFT JOIN erp_quality as quality ON quality.id=jober_child.quality_id LEFT JOIN erp_global as state ON state.id=jober.state_id ${type_query_table} WHERE jober_par.company_id<='${company_id}' AND jober_par.year_id<='${year_id}' AND jober_par.branch_id<='${branch_id}' AND jober_par.is_delete_status='0' AND jober_child.is_delete_status='0' ${sea_jober_invoice_no} ${sea_jober_invoice_lf_no} ${sea_jober_invoice_date} ${sea_jober_invoice_total_total} ${sea_jober_invoice_total_meter} ${sea_jober_invoice_total_weight} ${sea_jober_invoice_total_taxable} ${sea_jober_invoice_total_sgst} ${sea_jober_invoice_total_cgst} ${sea_jober_invoice_total_igst} ${sea_jober_invoice_total_included_tax_amount} ${sea_jober_invoice_total_tds} ${sea_jober_invoice_total_net_amount} ${sea_jober_id} ${date_range_query} GROUP BY jober_child.jober_invoice_id ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getjoberinvoicereportlistingdata,(error,joberinvoicedata) => {
            
            if (error || joberinvoicedata?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }

            joberinvoicedata.forEach(joberinvoicedata => {

                var getjoberinvoicelistingdata = `SELECT jober_invoice_child_invoice_no FROM erp_jober_invoice_child WHERE jober_invoice_id='${joberinvoicedata.jober_invoice_id}' AND is_delete_status_id='0'`;
                
                conn.query(getjoberinvoicelistingdata,(error,challandata) => {
                    
                    const challanno = [];         
                    challandata?.forEach(element => {
                        challanno.push(Object.values(element));
                    });
                    joberinvoicedata.jober_receive_invoice_no = challanno.toString();
                });
               
                joberinvoicedata.jober_invoice_date = constant.moment(joberinvoicedata.jober_invoice_date).format('YYYY-MM-DD');
                joberinvoicedata.export = constant.DefaultExportopetions;

            });

            var totaljoberinvoicereportcount = `SELECT COUNT(jober_par.id) as Count FROM erp_jober_invoice as jober_par LEFT JOIN erp_jober_invoice_child as jober_child ON jober_child.jober_invoice_id=jober_par.id LEFT JOIN erp_party as jober ON jober.id=jober_par.jober_id LEFT JOIN erp_quality as quality ON quality.id=jober_child.quality_id LEFT JOIN erp_global as state ON state.id=jober.state_id WHERE jober_par.company_id<='${company_id}' AND jober_par.year_id<='${year_id}' AND jober_par.branch_id<='${branch_id}' AND jober_par.is_delete_status='0' AND jober_child.is_delete_status='0' ${sea_jober_invoice_no} ${sea_jober_invoice_lf_no} ${sea_jober_invoice_date} ${sea_jober_invoice_total_total} ${sea_jober_invoice_total_meter} ${sea_jober_invoice_total_weight} ${sea_jober_invoice_total_taxable} ${sea_jober_invoice_total_sgst} ${sea_jober_invoice_total_cgst} ${sea_jober_invoice_total_igst} ${sea_jober_invoice_total_included_tax_amount} ${sea_jober_invoice_total_tds} ${sea_jober_invoice_total_net_amount} ${sea_jober_id} ${date_range_query} GROUP BY jober_child.jober_invoice_id`;
        
            conn.query(totaljoberinvoicereportcount,(error,countdata) => {
                
                res?.send({ Status:200,Count:joberinvoicedata?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:joberinvoicedata });
                next();
                return;
            });
        });
    },

    // INSERT AND UPDATE jober INVOICE CHILD DATA API //
    createjoberinvoicechild: (tax_invoice_id,req,headers) => {

        let body  = req;
        let header_data = headers;
    
        body.forEach( (data,index) => {

            const id = data?.id ? Number(data?.id) : 0;
            const user_id = data?.user_id ? data?.user_id : 0;
            const jober_invoice_id = tax_invoice_id ? tax_invoice_id : 0;
            const jober_receive_id = data?.jober_receive_id ? data?.jober_receive_id : 0;
            const quality_id = data?.quality_id ? data?.quality_id : 0;
            const gst_id = data?.gst_id ? data?.gst_id : 0;
            const rate_per_id = data?.rate_per_id ? data?.rate_per_id : 0;
            const jober_invoice_child_remark = data?.jober_invoice_child_remark ? data?.jober_invoice_child_remark.trim().toLowerCase() : '';
            const jober_invoice_child_invoice_no = data?.jober_invoice_child_invoice_no ? data?.jober_invoice_child_invoice_no : 0;
            const jober_invoice_child_meter = data?.jober_invoice_child_meter ? data?.jober_invoice_child_meter : 0;
            const jober_invoice_child_weight = data?.jober_invoice_child_weight ? data?.jober_invoice_child_weight : 0;
            const jober_invoice_child_fold = data?.jober_invoice_child_fold ? data?.jober_invoice_child_fold : 0;
            const jober_invoice_child_count_meter = data?.jober_invoice_child_count_meter ? data?.jober_invoice_child_count_meter : 0;
            const jober_invoice_child_rate = data?.jober_invoice_child_rate ? data?.jober_invoice_child_rate : 0;
            const jober_invoice_child_amount = data?.jober_invoice_child_amount ? data?.jober_invoice_child_amount : 0;
            const jober_invoice_child_disc_per = data?.jober_invoice_child_disc_per ? data?.jober_invoice_child_disc_per : 0;
            const jober_invoice_child_disc_amt = data?.jober_invoice_child_disc_amt ? data?.jober_invoice_child_disc_amt : 0;
            const jober_invoice_child_taxable = data?.jober_invoice_child_taxable ? data?.jober_invoice_child_taxable : 0;
            const jober_invoice_child_sgst = data?.jober_invoice_child_sgst ? data?.jober_invoice_child_sgst : 0;
            const jober_invoice_child_cgst = data?.jober_invoice_child_cgst ? data?.jober_invoice_child_cgst : 0;
            const jober_invoice_child_igst = data?.jober_invoice_child_igst ? data?.jober_invoice_child_igst : 0;
            const jober_invoice_child_total = data?.jober_invoice_child_total ? data?.jober_invoice_child_total : 0;
            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

            if (id > 0) 
            {   
                const updatejoberinvoicechild = `CALL create_jober_invoice_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updatejoberinvoicechild,[id,user_id,jober_invoice_id,jober_receive_id,quality_id,gst_id,rate_per_id,jober_invoice_child_remark,jober_invoice_child_invoice_no,jober_invoice_child_meter,jober_invoice_child_weight,jober_invoice_child_fold,jober_invoice_child_count_meter,jober_invoice_child_rate,jober_invoice_child_amount,jober_invoice_child_disc_per,jober_invoice_child_disc_amt,jober_invoice_child_taxable,jober_invoice_child_sgst,jober_invoice_child_cgst,jober_invoice_child_igst,jober_invoice_child_total,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    }
                    else
                    {                          
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const login_ip = `jober invoice Child Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`jober invoice Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return({ Status:200,Count:0,Message:'jober invoice Child Updated',Data:[] });
                    }  
                });
            }
            else
            {
                const createjoberinvoicechild = `CALL create_jober_invoice_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createjoberinvoicechild,[id,user_id,jober_invoice_id,jober_receive_id,quality_id,gst_id,rate_per_id,jober_invoice_child_remark,jober_invoice_child_invoice_no,jober_invoice_child_meter,jober_invoice_child_weight,jober_invoice_child_fold,jober_invoice_child_count_meter,jober_invoice_child_rate,jober_invoice_child_amount,jober_invoice_child_disc_per,jober_invoice_child_disc_amt,jober_invoice_child_taxable,jober_invoice_child_sgst,jober_invoice_child_cgst,jober_invoice_child_igst,jober_invoice_child_total,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return { Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error };
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const login_ip = `jober Invoice Child Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails,[user_id],(error,userdata) => {

                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`jober Invoice Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return { Status:200,Count:0,Message:'jober Invoice Child Inserted',Data:data[0] };
                    }  
                });
            }
        });
    },

    // DELETE jober Invoice DATA API //
    deletejoberinvoicedata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid jober Invoice ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        // var existjoberinvoicedata = `SELECT id as jober_invoice_id,(SELECT COUNT(id) FROM erp_jober_invoice_child WHERE jober_invoice_id='${id}' AND is_delete_status='0') as jober_invoice_child_id FROM erp_jober_invoice WHERE id='${id}'`;

        // conn.query(existjoberinvoicedata,(error,data) => {
        //     if (error) 
        //     {   
        //         res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
        //         next();
        //         return;
        //     }
        //     else
        //     {
        //         if (data[0]?.jober_invoice_child_id > 0)
        //         {
        //             res?.send({ Status:400,Count:0,Message:'jober Invoice In Use can not delete',Data:[] });
        //             next();
        //             return;
        //         }
        //         else
        //         {
                    var deletejoberinvoicedata = `CALL delete_jober_invoice(?,?)`;
                    conn.query(deletejoberinvoicedata,[id,entry_date],(error,data) => {
                        if (error) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'jober Invoice Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {    
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `jober Invoice  Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`jober Invoice `,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'jober Invoice Deleted Successfully',Data:[]});
                            
                            // DELETE DEFAULT VOUCHER //
                            res?.send(AllVoucherApis.deletedefaultvoucherdata(id,`jober`,user_id,req?.headers));
                            next();
                            return;
                        }
                    });
                // }
        //     }
        // });
    },

    // DELETE jober Invoice CHILD DATA API //
    deletejoberinvoicechilddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'jober Invoice Child Deleted Successfully!!!',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var deletejoberinvoicechilddata = `CALL delete_jober_invoice_child(?,?)`;
        conn.query(deletejoberinvoicechilddata,[id,entry_date],(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Jober Invoice Child Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {     
                // INSERT USER ACTIVITY LOG IN TABLE //
                const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                const ip = `jober Invoice  Deleted With This Device ID ${HeaderData.device_id} `;
                const loginuserdetails = `CALL get_user_details(?)`;
                conn.query(loginuserdetails,[user_id],function(error,userdata){
                    if(userdata[0])
                    {   
                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`jober Invoice `,entry_date],function(error,data){
                
                        });
                    }
                });
                res?.send({ Status:200,Count:1,Message:'jober Invoice Child Deleted Successfully',Data:[] });
                next();
                return;
            }
        });        
    }
};


export default AllJoberInvoiceApis;
    
