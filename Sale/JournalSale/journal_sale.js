import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";
import AllSaleJoberIssueApis from '../SaleJoberIssue/sale_jober_issue.js';

const AllJournalSaleApis = {
    
    // INSERT AND UPDATE journal sale DATA API //
    createjournalsale: (req,res,next) => {

        let body  = req?.body;
        // console.log(body);return;
        let child_data = req?.body?.sale_child_data;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const godown_id = body?.godown_id ? body?.godown_id : 0;
        const buyer_id = body?.buyer_id ? body?.buyer_id : 0;
        const tds_on_id = body?.tds_on_id ? body?.tds_on_id : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id : 0;
        const status_id = body?.status_id ? body?.status_id : 0;
        const sale_status_id = body?.sale_status_id ? body?.sale_status_id : 0;
        const account_head_id = body?.account_head_id ? body?.account_head_id : 0;
        const transporter_id = body?.transporter_id ? body?.transporter_id : 0;
        const sale_account_head_type = body?.sale_account_head_type ? body?.sale_account_head_type  : '';
        const sale_order_date = body?.sale_order_date ? body?.sale_order_date : constant.moment().format('YYYY-MM-DD');
        const sale_total_qty = body?.sale_total_qty ? body?.sale_total_qty : 0;
        const sale_total_meter = body?.sale_total_meter ? body?.sale_total_meter : 0;
        const sale_total_total = body?.sale_total_total ? body?.sale_total_total : 0;
        const sale_total_disc_amount = body?.sale_total_disc_amount ? body?.sale_total_disc_amount : 0;
        const sale_total_freight = body?.sale_total_freight ? body?.sale_total_freight : 0;
        const sale_total_fless = body?.sale_total_fless ? body?.sale_total_fless : 0;
        const sale_total_taxable = body?.sale_total_taxable ? body?.sale_total_taxable : 0;
        const sale_total_sgst = body?.sale_total_sgst ? body?.sale_total_sgst : 0;
        const sale_total_cgst = body?.sale_total_cgst ? body?.sale_total_cgst : 0;
        const sale_total_igst = body?.sale_total_igst ? body?.sale_total_igst : 0;
        const sale_total_amount = body?.sale_total_amount ? body?.sale_total_amount : 0;
        const is_tds_applicable = body?.is_tds_applicable ? body?.is_tds_applicable : 0;
        const sale_tds_applicable_rate = body?.sale_tds_applicable_rate ? body?.sale_tds_applicable_rate : 0;
        const sale_tds_with_total_net_amount = body?.sale_tds_with_total_net_amount ? body?.sale_tds_with_total_net_amount : 0;       
        const sale_tcs_per = body?.sale_tcs_per ? body?.sale_tcs_per : 0;
        const sale_tcs_amt = body?.sale_tcs_amt ? body?.sale_tcs_amt : 0;
        const sale_round_off = body?.sale_round_off ? body?.sale_round_off : 0;
        const sale_total_net_amount = body?.sale_total_net_amount ? body?.sale_total_net_amount : 0;
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
            const sale_order_no = body?.sale_order_no ? body?.sale_order_no : 0;
            const updatejournalsale = `CALL create_journal_sale(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatejournalsale,[id,user_id,branch_id,company_id,year_id,godown_id,buyer_id,tds_on_id,nature_of_payment_id,status_id,sale_status_id,account_head_id,transporter_id,sale_account_head_type,sale_order_no,sale_order_date,sale_total_qty,sale_total_meter,sale_total_total,sale_total_disc_amount,sale_total_freight,sale_total_fless,sale_total_taxable,sale_total_sgst,sale_total_cgst,sale_total_igst,sale_total_amount,is_tds_applicable,sale_tds_applicable_rate,sale_tds_with_total_net_amount,sale_tcs_per,sale_tcs_amt,sale_round_off,sale_total_net_amount,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'journal sale Updated',Data:[] });
                    next();
                    
                    if (child_data && child_data?.length > 0) 
                    {
                        // CALL JOURNAL PUCHASE CHILD API //
                        res?.send(AllJournalSaleApis.createjournalsalechild(id,company_id,year_id,branch_id,godown_id,child_data,req?.headers));
                        next();
                    }
                   
                    if (transporter_id != null) 
                    {   
                        console.log("jjkj");
                        const updatetransporter = `CALL update_transporter(?,?,?)`;
                        conn.query(updatetransporter,[buyer_id,transporter_id,entry_date],(error,data) => {
                            
                            if (error)
                            {   
                                res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                                next();
                            }
                        });
                    }
                                        
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `journal sale Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0]?.user_position,ip,`journal sale`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {   
            const lastsaleorderno = `SELECT sale_order_no FROM erp_sale WHERE is_delete_status='0' ORDER BY id DESC LIMIT 1`;

            conn.query(lastsaleorderno,(error,lastsaleorderno) => {
                
                const sale_order_no = lastsaleorderno.length > 0 ? Number(lastsaleorderno[0]?.sale_order_no) + 1 : 1;

                const createjournalsale = `CALL create_journal_sale(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createjournalsale,[id,user_id,branch_id,company_id,year_id,godown_id,buyer_id,tds_on_id,nature_of_payment_id,status_id,sale_status_id,account_head_id,transporter_id,sale_account_head_type,sale_order_no,sale_order_date,sale_total_qty,sale_total_meter,sale_total_total,sale_total_disc_amount,sale_total_freight,sale_total_fless,sale_total_taxable,sale_total_sgst,sale_total_cgst,sale_total_igst,sale_total_amount,is_tds_applicable,sale_tds_applicable_rate,sale_tds_with_total_net_amount,sale_tcs_per,sale_tcs_amt,sale_round_off,sale_total_net_amount,entry_date,update_date],(error,data) => {

                    if (error || data[0]?.length == 0)
                    {   
                        res?.send({ Status:400,Count:0,Message:' Sale Data Not Inserted!!!!',Data:error });
                        next();
                    }
                    else
                    {   
                        res?.send({ Status:200,Count:0,Message:'journal sale Inserted',Data:data[0][0] });
                        next();
                        
                        if (child_data && child_data?.length > 0) 
                        {
                            // CALL JOURNAL PUCHASE CHILD API //
                            res?.send(AllJournalSaleApis.createjournalsalechild(data[0][0].journal_sale_id,data[0][0].company_id,data[0][0].year_id,data[0][0].branch_id,data[0][0].godown_id,child_data,req?.headers));
                        }
                        
                        if (transporter_id != '') 
                        {   
                            const updatejournalsale = `CALL update_transporter(?,?,?)`;
                            conn.query(updatejournalsale,[buyer_id,transporter_id,entry_date],(error,data) => {
                                
                                if (error)
                                {   
                                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                                    next();
                                }
                            });
                        }

                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                        const ip = `journal sale Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0]?.user_position,ip,`journal sale`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                    }  
                });
            });            
        }
    },

    // GET journal sale AND CHILD DETAILS DATA API //
    getjournalsaledetails: (req,res,next) => {

        const journal_sale_id = req.body?.journal_sale_id ? req.body?.journal_sale_id : 0;
        if (journal_sale_id.length == 0 || journal_sale_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter journal sale ID',Data:[] });
            next();
            return;
        }

        var getjournalsaledetails = `CALL get_journal_sale_details(?)`;
        conn.query(getjournalsaledetails,[journal_sale_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].sale_order_date = constant.moment(data[0][0].sale_order_date).format('YYYY-MM-DD');
                
                data[1].forEach(element => {
                    element.sale_child_sgst_amt = element.sale_child_sgst_amt + (element.sale_child_sgst/100) * element.sale_child_taxable;
                    element.sale_child_cgst_amt = element.sale_child_cgst_amt + (element.sale_child_cgst/100) * element.sale_child_taxable;
                    element.sale_child_igst_amt = element.sale_child_igst_amt + (element.sale_child_igst/100) * element.sale_child_taxable;
                });

                data[0][0].sale_child_data = data[1];

                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET journal sale LISTING DATA API //
    getjournalsalelistingdata: (req,res,next) => {

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
        const All_ID_Query = body?.is_export == true ? ' ' :`sale.id,sale_child.id as sale_child_id,sale.buyer_id,sale_child.quality_id,`;

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
        const search_sale_child_remark = search?.sale_child_remark ? search?.sale_child_remark.trim().toLowerCase() : '';
        
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
        const sea_sale_child_remark = search_sale_child_remark != '' ? ` AND sale_child.sale_child_remark LIKE '%${search_sale_child_remark}%'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(sale.sale_order_date) >='${from_date}' AND DATE(sale.sale_order_date) <='${to_date}'` : '';
        
        var getjournalsalelistingdata = `SELECT ${All_ID_Query} sale.sale_order_no,DATE_FORMAT(sale.sale_order_date,'%d-%m-%Y') as sale_order_date,buyer.party_name as buyer_name,quality.quality_name,sale_child.sale_child_quality_colour as quality_colour,sale_child.sale_child_work as work,sale_child.sale_child_work_colour as work_colour,sale_child.sale_child_meter,sale_child.sale_child_rate,sale_child.sale_child_taxable,sale_child.sale_child_amount,'0' as sale_tax_invoice_id,sale_child.sale_child_remark,transporter.party_name as transporter_name,transporter.party_gst_no as transporter_gst_no,state.global_code as state_code,sale.sale_total_net_amount,sale_child.sale_child_total FROM erp_sale as sale LEFT JOIN erp_sale_child as sale_child ON sale_child.sale_id=sale.id LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_quality as quality ON quality.id=sale_child.quality_id LEFT JOIN erp_party as transporter ON transporter.id=sale.transporter_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' AND sale_child.is_delete_status='0' AND sale_child.order_status!='cancel' ${sea_buyer_id} ${sea_quality_id} ${sea_sale_order_no} ${sea_sale_order_date} ${sea_buyer_name} ${sea_quality_name} ${sea_quality_colour} ${sea_work} ${sea_work_colour} ${sea_sale_child_meter} ${sea_sale_child_rate} ${sea_sale_child_taxable} ${sea_sale_child_amount} ${sea_sale_child_remark} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;
        
        conn.query(getjournalsalelistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => { element.export = constant.DefaultExportopetions; });
            
            var totaljournalsalecount = `SELECT COUNT(sale.id) as Count FROM erp_sale as sale LEFT JOIN erp_sale_child as sale_child ON sale_child.sale_id=sale.id LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_quality as quality ON quality.id=sale_child.quality_id LEFT JOIN erp_party as transporter ON transporter.id=sale.transporter_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' AND sale_child.order_status!='cancel' ${sea_buyer_id} ${sea_quality_id} ${sea_sale_order_no} ${sea_sale_order_date} ${sea_buyer_name} ${sea_quality_name} ${sea_quality_colour} ${sea_work} ${sea_work_colour} ${sea_sale_child_meter} ${sea_sale_child_rate} ${sea_sale_child_taxable} ${sea_sale_child_amount} ${sea_sale_child_remark} ${date_range_query}`;
        
            conn.query(totaljournalsalecount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // INSERT AND UPDATE journal sale CHILD DATA API //
    createjournalsalechild: (journal_sale_id,sale_company_id,sale_year_id,sale_branch_id,sale_godown_id,req,headers) => {

        let body  = req;
        let header_data = headers;
    
        body.forEach((data,index) => {
            const id = data?.id ? Number(data?.id) : 0;
            const user_id = data?.user_id ? data?.user_id : 0;
            const company_id = sale_company_id ? sale_company_id : 0;
            const year_id = sale_year_id ? sale_year_id : 0;
            const branch_id = sale_branch_id ? sale_branch_id : 0;
            const godown_id = sale_godown_id ? sale_godown_id : 0;
            const sale_id = journal_sale_id ? journal_sale_id : 0;
            const quality_id = data?.quality_id ? data?.quality_id : 0;
            const jober_id = data?.jober_id ? data?.jober_id : 0;
            const order_status_id = data?.order_status_id ? data?.order_status_id : 0;
            const gst_id = data?.gst_id ? data?.gst_id : 0;
            const sale_child_remark = data?.sale_child_remark ? data?.sale_child_remark.trim().toLowerCase() : '';
            const sale_child_remark_2 = data?.sale_child_remark_2 ? data?.sale_child_remark_2.trim().toLowerCase() : '';
            const sale_child_quality_colour = data?.sale_child_quality_colour ? data?.sale_child_quality_colour.trim().toLowerCase() : '';
            const sale_child_work = data?.sale_child_work ? data?.sale_child_work.trim().toLowerCase() : 0;
            const sale_child_work_colour = data?.sale_child_work_colour ? data?.sale_child_work_colour.trim().toLowerCase() : 0;
            const sale_child_meter = data?.sale_child_meter ? data?.sale_child_meter : 0;
            const sale_child_fold = data?.sale_child_fold ? data?.sale_child_fold : 0;
            const sale_child_count_meter = data?.sale_child_count_meter ? data?.sale_child_count_meter : 0;
            const sale_child_rate = data?.sale_child_rate ? data?.sale_child_rate : 0;
            const sale_child_rate_per = data?.sale_child_rate_per ? data?.sale_child_rate_per : 0;
            const sale_child_help = data?.sale_child_help ? data?.sale_child_help : '';
            const sale_child_total = data?.sale_child_total ? data?.sale_child_total : 0;
            const sale_child_disc_per = data?.sale_child_disc_per ? data?.sale_child_disc_per : 0;
            const sale_child_disc_amt = data?.sale_child_disc_amt ? data?.sale_child_disc_amt : 0;
            const sale_child_freight = data?.sale_child_freight ? data?.sale_child_freight : 0;
            const sale_child_fless = data?.sale_child_fless ? data?.sale_child_fless : 0;
            const sale_child_taxable = data?.sale_child_taxable ? data?.sale_child_taxable : 0;
            const sale_child_sgst = data?.sale_child_sgst ? data?.sale_child_sgst : 0;
            const sale_child_cgst = data?.sale_child_cgst ? data?.sale_child_cgst : 0;
            const sale_child_igst = data?.sale_child_igst ? data?.sale_child_igst : 0;
            const sale_child_amount = data?.sale_child_amount ? data?.sale_child_amount : 0;
            const is_not_to_jober = data?.is_not_to_jober ? data?.is_not_to_jober : 0;
            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

            if (id > 0) 
            {   
                const updatejournalsalechild = `CALL create_journal_sale_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updatejournalsalechild,[id,user_id,sale_id,quality_id,jober_id,order_status_id,gst_id,sale_child_remark,sale_child_remark_2,sale_child_quality_colour,sale_child_work,sale_child_work_colour,sale_child_meter,sale_child_fold,sale_child_count_meter,sale_child_rate,sale_child_rate_per,sale_child_help,sale_child_total,sale_child_disc_per,sale_child_disc_amt,sale_child_freight,sale_child_fless,sale_child_taxable,sale_child_sgst,sale_child_cgst,sale_child_igst,sale_child_amount,is_not_to_jober,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    }
                    else
                    {                          
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `journal sale Child Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0]?.user_position,ip,`journal sale Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return({ Status:200,Count:0,Message:'journal sale Child Updated',Data:[] });
                    }  
                });
            }
            else
            {
                const createjournalsalechild = `CALL create_journal_sale_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createjournalsalechild,[id,user_id,sale_id,quality_id,jober_id,order_status_id,gst_id,sale_child_remark,sale_child_remark_2,sale_child_quality_colour,sale_child_work,sale_child_work_colour,sale_child_meter,sale_child_fold,sale_child_count_meter,sale_child_rate,sale_child_rate_per,sale_child_help,sale_child_total,sale_child_disc_per,sale_child_disc_amt,sale_child_freight,sale_child_fless,sale_child_taxable,sale_child_sgst,sale_child_cgst,sale_child_igst,sale_child_amount,is_not_to_jober,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return { Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error };
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `journal sale Child Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails,[user_id],(error,userdata) => {

                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0]?.user_position,ip,`journal sale Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });

                        // if (data[0][0]?.jober_id && data[0][0]?.jober_id > 0) 
                        // {
                        //     return (AllSaleJoberIssueApis.createsalejoberissuebysalechild (company_id,year_id,branch_id,godown_id,data[0][0],header_data));
                        // }
                        
                        return { Status:200,Count:0,Message:'journal sale Child Inserted',Data:data[0] };
                    }  
                });
            }
        });
    },

    // DELETE journal sale DATA API //
    deletejournalsaledata: (req,res,next) => {
        
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

        var existjournalsaledata = `SELECT id as sale_id,(SELECT COUNT(id) FROM erp_sale_child WHERE sale_id='${id}' AND is_delete_status='0' AND order_status!='cancel') as sale_child_id FROM erp_sale WHERE id='${id}'`;

        conn.query(existjournalsaledata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.sale_child_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'sale In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletejournalsaledata = `CALL delete_sale(?,?)`;
                    conn.query(deletejournalsaledata,[id,entry_date],(error,data) => {
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
                            const ip = `sale Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`sale`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'sale Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    },

    // DELETE journal sale DATA API //
    deletejournalsalechilddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'sale child Deleted Successfully',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existjournalsalechilddata = `SELECT id as sale_child_id,(SELECT COUNT(id) FROM erp_sale_jober_issue WHERE sale_child_id='${id}' AND is_delete_status='0') as sale_jober_issue_id FROM erp_sale_child WHERE id='${id}'`;

        conn.query(existjournalsalechilddata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                if (data[0]?.sale_jober_issue_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Sale Child In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletejournalsalechilddata = `CALL delete_sale_child(?,?)`;
                    conn.query(deletejournalsalechilddata,[id,entry_date],(error,data) => {
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
                            const ip = `sale child Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`sale child`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'sale child Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    },
    
    // STATUS Change journal sale DATA API //
    statuschangejournalsalechilddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const order_status = body?.order_status ? body?.order_status : '';
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'sale child Status Change Successfully',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }
        if (order_status.length == 0 || order_status == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid Status',Data:[] });
            next();
            return;
        }

        var existjournalsalechilddata = `SELECT id as sale_child_id,(SELECT COUNT(id) FROM erp_sale_jober_issue WHERE sale_child_id='${id}' AND is_delete_status='0') as sale_jober_issue_id FROM erp_sale_child WHERE id='${id}'`;

        conn.query(existjournalsalechilddata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                if (data[0]?.sale_jober_issue_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Sale Child In Use can not Change Status',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var statuschangejournalsalechilddata = `CALL change_status_sale_child(?,?,?)`;
                    conn.query(statuschangejournalsalechilddata,[id,order_status,entry_date],(error,data) => {
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
                            const ip = `sale child Status Change With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`sale child`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'sale child Status Change Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    },
    
};


export default AllJournalSaleApis;
    
