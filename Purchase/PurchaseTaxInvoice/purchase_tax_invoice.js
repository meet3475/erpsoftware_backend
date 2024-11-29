import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";
import AllGreyIssueApis from '../../Mill/GreyIssue/greyissue.js';
import AllVoucherApis from '../../Accounting/Voucher/voucher.js';

const AllPurchaseTaxInvoiceApis = {
    
    // INSERT AND UPDATE PURCHASE TAX INVOICE DATA API //
    createpurchasetaxinvoice: (req,res,next) => {

        let body  = req?.body;
        let child_data = req?.body?.purchase_tax_invoice_child_data;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const supplier_id = body?.supplier_id ? body?.supplier_id : 0;
        const broker_id = body?.broker_id ? body?.broker_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const year_id = body?.year_id ? body?.year_id  : 0;
        const godown_id = body?.godown_id ? body?.godown_id  : 0;
        const mill_id = body?.mill_id ? body?.mill_id  : 0;
        const challan_type_id = body?.challan_type_id ? body?.challan_type_id  : 0;
        const tds_on_id = body?.tds_on_id ? body?.tds_on_id  : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id  : 0;
        const status_id = body?.status_id ? body?.status_id  : 0;
        const account_type = body?.account_type ? body?.account_type : 0;
        const purchase_tax_invoice_lf_no = body?.purchase_tax_invoice_lf_no ? body?.purchase_tax_invoice_lf_no : '';
        const purchase_tax_invoice_no = body?.purchase_tax_invoice_no ? body?.purchase_tax_invoice_no : '';
        const purchase_tax_invoice_date = body?.purchase_tax_invoice_date ? body?.purchase_tax_invoice_date.trim() : constant.moment().format('YYYY-MM-DD');
        const purchase_tax_invoice_sub_order_number = body?.purchase_tax_invoice_sub_order_number ? body?.purchase_tax_invoice_sub_order_number : '';
        const purchase_tax_invoice_lr_no = body?.purchase_tax_invoice_lr_no ? body?.purchase_tax_invoice_lr_no : '';
        const puchase_tax_invoice_delivery_days = body?.puchase_tax_invoice_delivery_days ? body?.puchase_tax_invoice_delivery_days : '';
        const puchase_tax_invoice_bale_marka = body?.puchase_tax_invoice_bale_marka ? body?.puchase_tax_invoice_bale_marka : '';
        const puchase_tax_invoice_shipping_address = body?.puchase_tax_invoice_shipping_address ? body?.puchase_tax_invoice_shipping_address.trim().toLowerCase() : '';
        const purchase_tax_invoice_remark = body?.purchase_tax_invoice_remark ? body?.purchase_tax_invoice_remark.trim().toLowerCase() : '';
        const purchase_tax_invoice_entry_no = body?.purchase_tax_invoice_entry_no ? body?.purchase_tax_invoice_entry_no : '';
        const is_cash_payment = body?.is_cash_payment ? body?.is_cash_payment : 0;
        const is_tds_applicable = body?.is_tds_applicable ? body?.is_tds_applicable : 0;
        const puchase_tax_invoice_tds_applicable_rate = body?.puchase_tax_invoice_tds_applicable_rate ? body?.puchase_tax_invoice_tds_applicable_rate : 0;
        const puchase_tax_invoice_total_tds = body?.puchase_tax_invoice_total_tds ? body?.puchase_tax_invoice_total_tds : 0;
        const puchase_tax_invoice_tds_with_total_net_amount = body?.puchase_tax_invoice_tds_with_total_net_amount ? body?.puchase_tax_invoice_tds_with_total_net_amount : 0;
        const is_mill_issue = body?.is_mill_issue ? body?.is_mill_issue : 0;
        
        // TAX INVOICE PURCHASE MAIN TABLE UPDATE COLUM WHEN CHILD ENTERY //
        const purchase_tax_invoice_total_unit_sent = body?.purchase_tax_invoice_total_unit_sent ? body?.purchase_tax_invoice_total_unit_sent : 0;
        const purchase_tax_invoice_total_qty_sent = body?.purchase_tax_invoice_total_qty_sent ? body?.purchase_tax_invoice_total_qty_sent : 0;
        const purchase_tax_invoice_total_net_meter = body?.purchase_tax_invoice_total_net_meter ? body?.purchase_tax_invoice_total_net_meter : 0;
        const purchase_tax_invoice_total_total = body?.purchase_tax_invoice_total_total ? body?.purchase_tax_invoice_total_total : 0;
        const purchase_tax_invoice_total_disc_amt = body?.purchase_tax_invoice_total_disc_amt ? body?.purchase_tax_invoice_total_disc_amt : 0;
        const purchase_tax_invoice_total_freight = body?.purchase_tax_invoice_total_freight ? body?.purchase_tax_invoice_total_freight : 0;
        const purchase_tax_invoice_total_fless = body?.purchase_tax_invoice_total_fless ? body?.purchase_tax_invoice_total_fless : 0;
        const purchase_tax_invoice_total_insurance = body?.purchase_tax_invoice_total_insurance ? body?.purchase_tax_invoice_total_insurance : 0;
        const purchase_tax_invoice_total_taxable = body?.purchase_tax_invoice_total_taxable ? body?.purchase_tax_invoice_total_taxable : 0;
        const purchase_tax_invoice_total_sgst = body?.purchase_tax_invoice_total_sgst ? body?.purchase_tax_invoice_total_sgst : 0;
        const purchase_tax_invoice_total_cgst = body?.purchase_tax_invoice_total_cgst ? body?.purchase_tax_invoice_total_cgst : 0;
        const purchase_tax_invoice_total_igst = body?.purchase_tax_invoice_total_igst ? body?.purchase_tax_invoice_total_igst : 0;
        const purchase_tax_invoice_total_amount = body?.purchase_tax_invoice_total_amount ? body?.purchase_tax_invoice_total_amount : 0;
        const puchase_tax_invoice_tcs_per = body?.puchase_tax_invoice_tcs_per ? body?.puchase_tax_invoice_tcs_per : 0;
        const puchase_tax_invoice_tcs_amt = body?.puchase_tax_invoice_tcs_amt ? body?.puchase_tax_invoice_tcs_amt : 0;
        const purchase_tax_invoice_round_off = body?.purchase_tax_invoice_round_off ? body?.purchase_tax_invoice_round_off : 0;
        const purchase_tax_invoice_net_amount = body?.purchase_tax_invoice_net_amount ? body?.purchase_tax_invoice_net_amount : 0;
        const purchase_tax_invoice_image = body?.purchase_tax_invoice_image ? body?.purchase_tax_invoice_image : '';
        const purchase_tax_invoice_credit_days = body?.purchase_tax_invoice_credit_days ? body?.purchase_tax_invoice_credit_days : 0;
        const purchase_tax_invoice_payment_date = body?.purchase_tax_invoice_payment_date ? constant.moment(body?.purchase_tax_invoice_payment_date).format('YYYY-MM-DD') : constant.moment().format('YYYY-MM-DD');
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
        
        const tax_invoice_no = `SELECT purchase_tax_invoice_no FROM erp_purchase_tax_invoice WHERE supplier_id='${supplier_id}' AND purchase_tax_invoice_no='${purchase_tax_invoice_no}' AND year_id='${year_id}' AND company_id='${company_id}' AND id!='${id}' AND is_delete_status='0'`;

        conn.query(tax_invoice_no,(error,taxinvoicedata) => {

            if (taxinvoicedata && taxinvoicedata?.length > 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Invoice Number Already Exist In Supplier',Data:[] });
                next();
            }
            else
            {
                if (id > 0) 
                {   
                    const updatepurchasetaxinvoice = `CALL create_purchase_tax_invoice(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                    conn.query(updatepurchasetaxinvoice,[id,user_id,supplier_id,broker_id,quality_type_id,branch_id,company_id,year_id,godown_id,mill_id,challan_type_id,tds_on_id,nature_of_payment_id,status_id,account_type,purchase_tax_invoice_lf_no,purchase_tax_invoice_no,purchase_tax_invoice_date,purchase_tax_invoice_sub_order_number,purchase_tax_invoice_lr_no,puchase_tax_invoice_delivery_days,puchase_tax_invoice_bale_marka,puchase_tax_invoice_shipping_address,purchase_tax_invoice_remark,purchase_tax_invoice_entry_no,is_cash_payment,is_tds_applicable,puchase_tax_invoice_tds_applicable_rate,puchase_tax_invoice_total_tds,puchase_tax_invoice_tds_with_total_net_amount,is_mill_issue,purchase_tax_invoice_total_unit_sent,purchase_tax_invoice_total_qty_sent,purchase_tax_invoice_total_net_meter,purchase_tax_invoice_total_total,purchase_tax_invoice_total_disc_amt,purchase_tax_invoice_total_freight,purchase_tax_invoice_total_fless,purchase_tax_invoice_total_insurance,purchase_tax_invoice_total_taxable,purchase_tax_invoice_total_sgst,purchase_tax_invoice_total_cgst,purchase_tax_invoice_total_igst,purchase_tax_invoice_total_amount,puchase_tax_invoice_tcs_per,puchase_tax_invoice_tcs_amt,purchase_tax_invoice_round_off,purchase_tax_invoice_net_amount,purchase_tax_invoice_image,purchase_tax_invoice_credit_days,purchase_tax_invoice_payment_date,entry_date,update_date],(error,data) => {

                        if (error)
                        {   
                            res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                            next();
                        }
                        else
                        {   
                            res?.send({ Status:200,Count:0,Message:'purchase tax invoice Updated',Data:data[0] });
                            next();

                            // CALL PUCHASE TAX INVOICE CHILD API //
                            const last_grey_issue_challan_no = `SELECT grey_issue_challan_no FROM erp_grey_issue WHERE user_id='${user_id}' AND branch_id='${branch_id}' AND company_id='${company_id}' AND year_id='${year_id}' ORDER BY id DESC LIMIT 1;`

                            conn.query(last_grey_issue_challan_no,(error,lastchallanno) => {
                                
                                let new_child_data = child_data.map((item, index) => {
                                    
                                    let grey_issue_challan_no = lastchallanno.length > 0 ? (Number(item.id) == 0 ? Number(lastchallanno[0].grey_issue_challan_no) + 1 : Number(lastchallanno[0].grey_issue_challan_no)) : 1;
                                    // let grey_issue_challan_no = prev_challan_no;
                                    return({...item, grey_issue_challan_no });
                                    
                                });

                                res?.send(AllPurchaseTaxInvoiceApis.createpurchasetaxinvoicechild(id,new_child_data,req?.headers));
                                next();
                            });

                            // DELETE DEFAULT VOUCHER //
                            res?.send(AllVoucherApis.deletedefaultvoucherdata(id,`purchase`,user_id,req?.headers));
                            next();
                            
                            if (is_tds_applicable == '1' && puchase_tax_invoice_total_tds > 0) 
                            {
                                 // CALL VOUCHER DEFAULT API //
                                res?.send(AllVoucherApis.createdefaultvoucher(user_id,branch_id,company_id,year_id,supplier_id,tds_on_id,puchase_tax_invoice_total_tds,id,req?.headers,`purchase`));
                            }
                            
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const login_ip = `purchase taxinvoice Updated With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],(error,userdata) => {
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`purchase taxinvoice`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                        }  
                    });
                }
                else
                {   
                    const createpurchasetaxinvoice = `CALL create_purchase_tax_invoice(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                    conn.query(createpurchasetaxinvoice,[id,user_id,supplier_id,broker_id,quality_type_id,branch_id,company_id,year_id,godown_id,mill_id,challan_type_id,tds_on_id,nature_of_payment_id,status_id,account_type,purchase_tax_invoice_lf_no,purchase_tax_invoice_no,purchase_tax_invoice_date,purchase_tax_invoice_sub_order_number,purchase_tax_invoice_lr_no,puchase_tax_invoice_delivery_days,puchase_tax_invoice_bale_marka,puchase_tax_invoice_shipping_address,purchase_tax_invoice_remark,purchase_tax_invoice_entry_no,is_cash_payment,is_tds_applicable,puchase_tax_invoice_tds_applicable_rate,puchase_tax_invoice_total_tds,puchase_tax_invoice_tds_with_total_net_amount,is_mill_issue,purchase_tax_invoice_total_unit_sent,purchase_tax_invoice_total_qty_sent,purchase_tax_invoice_total_net_meter,purchase_tax_invoice_total_total,purchase_tax_invoice_total_disc_amt,purchase_tax_invoice_total_freight,purchase_tax_invoice_total_fless,purchase_tax_invoice_total_insurance,purchase_tax_invoice_total_taxable,purchase_tax_invoice_total_sgst,purchase_tax_invoice_total_cgst,purchase_tax_invoice_total_igst,purchase_tax_invoice_total_amount,puchase_tax_invoice_tcs_per,puchase_tax_invoice_tcs_amt,purchase_tax_invoice_round_off,purchase_tax_invoice_net_amount,purchase_tax_invoice_image,purchase_tax_invoice_credit_days,purchase_tax_invoice_payment_date,entry_date,update_date],(error,data) => {

                        if (error || data[0]?.length == 0)
                        {   
                            res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                            next();
                        }
                        else
                        {    
                            res?.send({ Status:200,Count:0,Message:'purchase tax invoice Inserted',Data:data[0] });
                            next();

                            // CALL PURCHASE TAX INVOICE CHILD API //
                            const last_grey_issue_challan_no = `SELECT grey_issue_challan_no FROM erp_grey_issue WHERE user_id='${user_id}' AND branch_id='${branch_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND is_delete_status='0' ORDER BY id DESC LIMIT 1;`

                            conn.query(last_grey_issue_challan_no,(error,lastchallanno) => {
                                
                                let new_child_data = child_data.map((item, index) => {
                                    let prev_challan_no = lastchallanno.length > 0 ? Number(lastchallanno[0].grey_issue_challan_no) + 1 : 1;
                                    let grey_issue_challan_no = prev_challan_no + index;
                                    return({...item, grey_issue_challan_no });
                                });
                                res?.send(AllPurchaseTaxInvoiceApis.createpurchasetaxinvoicechild(data[0][0].purchase_tax_invoice_id,new_child_data,req?.headers));
                            });
                            
                            const tax_child_data = `SELECT * FROM erp_purchase_tax_invoice_child WHERE purchase_tax_invoice_id='${data[0][0].purchase_tax_invoice_id}'`;

                            conn.query(tax_child_data,(error,childdata) => {
                            
                                data[0][0].tax_child_data = childdata;
                                
                                if (is_mill_issue > 0 && mill_id > 0) 
                                {   
                                    res?.send(AllGreyIssueApis.creategreyissuebytaxinvoice(data[0][0],req?.headers));
                                }
                            });
                            
                            if (data[0][0].is_tds_applicable == '1' && data[0][0].puchase_tax_invoice_total_tds > 0) 
                            {
                                 // CALL VOUCHER DEFAULT API //
                                res?.send(AllVoucherApis.createdefaultvoucher(data[0][0].user_id,data[0][0].branch_id,data[0][0].company_id,data[0][0].year_id,data[0][0].supplier_id,data[0][0].tds_on_id,data[0][0].puchase_tax_invoice_total_tds,data[0][0].purchase_tax_invoice_id,req?.headers,`purchase`));
                            }
                            
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const login_ip = `Purchase Tax Invoice Created With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Purchase Tax Invoice`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                        }  
                    });
                }
            }
        }); 
    },

    // GET PURCHASE TAX INVOICE AND CHILD DETAILS DATA API //
    getpurchasetaxinvoicedetails: (req,res,next) => {

        const purchase_tax_invoice_id = req.body?.purchase_tax_invoice_id ? req.body?.purchase_tax_invoice_id : 0;

        if (purchase_tax_invoice_id.length == 0 || purchase_tax_invoice_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter purchase tax invoice ID',Data:[] });
            next();
            return;
        }

        var getpurchasetaxinvoicedetails = `CALL get_purchase_tax_invoice_details(?)`;
        conn.query(getpurchasetaxinvoicedetails,[purchase_tax_invoice_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].purchase_tax_invoice_date = constant.moment(data[0][0].purchase_tax_invoice_date).format('YYYY-MM-DD');
                data[0][0].account_type = Number(data[0][0].account_type);
                data[0][0].is_tds_applicable = Number(data[0][0].is_tds_applicable);
                
                data[1].forEach(element => {
                    element.purchase_tax_invoice_child_sgst_amt = (element.purchase_tax_invoice_child_sgst_amt + (element.purchase_tax_invoice_child_sgst/100) * element.purchase_tax_invoice_child_taxable).toFixed(2);
                    element.purchase_tax_invoice_child_cgst_amt = (element.purchase_tax_invoice_child_cgst_amt + (element.purchase_tax_invoice_child_cgst/100) * element.purchase_tax_invoice_child_taxable).toFixed(2);
                    element.purchase_tax_invoice_child_igst_amt = (element.purchase_tax_invoice_child_igst_amt + (element.purchase_tax_invoice_child_igst/100) * element.purchase_tax_invoice_child_taxable).toFixed(2);
                });

                data[0][0].purchase_tax_invoice_child_data = data[1];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET PURCHASE TAX INVOICE AND CHILD LISTING DATA API //
    getpurchasetaxinvoicelistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const supplier_id = body?.supplier_id ? body?.supplier_id : 0;
        const broker_id = body?.broker_id ? body?.broker_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'pur_tax.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const is_export = body?.is_export ? body?.is_export : '';
        const export_type = body?.export_type ? body?.export_type.trim().toLowerCase() : '';
        const limit_query = is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = is_export == true ? ' ' :`pur_tax.id,pur_tax.id as purchase_tax_invoice_id,`;

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

        const search_purchase_tax_invoice_lf_no = search?.purchase_tax_invoice_lf_no ? search?.purchase_tax_invoice_lf_no : '';
        const search_purchase_tax_invoice_no = search?.purchase_tax_invoice_no ? search?.purchase_tax_invoice_no : '';
        const search_purchase_tax_invoice_date = search?.purchase_tax_invoice_date ? search?.purchase_tax_invoice_date : '';
        const search_purchase_tax_invoice_lr_no = search?.purchase_tax_invoice_lr_no ? search?.purchase_tax_invoice_lr_no : '';
        const search_purchase_tax_invoice_total_unit_sent = search?.purchase_tax_invoice_total_unit_sent ? search?.purchase_tax_invoice_total_unit_sent : '';
        const search_purchase_tax_invoice_total_qty_sent = search?.purchase_tax_invoice_total_qty_sent ? search?.purchase_tax_invoice_total_qty_sent : '';
        const search_purchase_tax_invoice_total_taxable = search?.purchase_tax_invoice_total_taxable ? search?.purchase_tax_invoice_total_taxable : '';
        const search_puchase_tax_invoice_tcs_amt = search?.puchase_tax_invoice_tcs_amt ? search?.puchase_tax_invoice_tcs_amt : '';
        const search_purchase_tax_invoice_net_amount = search?.purchase_tax_invoice_net_amount ? search?.purchase_tax_invoice_net_amount : '';
        const search_supplier_name = search?.supplier_name ? search?.supplier_name.trim().toLowerCase() : '';
        const search_broker_name = search?.broker_name ? search?.broker_name.trim().toLowerCase() : '';
        const search_challan_type = search?.challan_type ? search?.challan_type.trim().toLowerCase() : '';
        
        const sea_purchase_tax_invoice_lf_no = search_purchase_tax_invoice_lf_no != '' ? ` AND pur_tax.purchase_tax_invoice_lf_no LIKE '%${search_purchase_tax_invoice_lf_no}%'` : '';
        const sea_purchase_tax_invoice_no = search_purchase_tax_invoice_no != '' ? ` AND pur_tax.purchase_tax_invoice_no LIKE '%${search_purchase_tax_invoice_no}%'` : '';
        const sea_purchase_tax_invoice_date = search_purchase_tax_invoice_date != '' ? ` AND pur_tax.purchase_tax_invoice_date LIKE '%${search_purchase_tax_invoice_date}%'` : '';
        const sea_purchase_tax_invoice_lr_no = search_purchase_tax_invoice_lr_no != '' ? ` AND pur_tax.purchase_tax_invoice_lr_no LIKE '%${search_purchase_tax_invoice_lr_no}%'` : '';
        const sea_purchase_tax_invoice_total_unit_sent = search_purchase_tax_invoice_total_unit_sent != '' ? ` AND pur_tax.purchase_tax_invoice_total_unit_sent LIKE '%${search_purchase_tax_invoice_total_unit_sent}%'` : '';
        const sea_purchase_tax_invoice_total_qty_sent = search_purchase_tax_invoice_total_qty_sent != '' ? ` AND pur_tax.purchase_tax_invoice_total_qty_sent LIKE '%${search_purchase_tax_invoice_total_qty_sent}%'` : '';
        const sea_purchase_tax_invoice_total_taxable = search_purchase_tax_invoice_total_taxable != '' ? ` AND pur_tax.purchase_tax_invoice_total_taxable LIKE '%${search_purchase_tax_invoice_total_taxable}%'` : '';
        const sea_puchase_tax_invoice_tcs_amt = search_puchase_tax_invoice_tcs_amt != '' ? ` AND pur_tax.puchase_tax_invoice_tcs_amt LIKE '%${search_puchase_tax_invoice_tcs_amt}%'` : '';
        const sea_purchase_tax_invoice_net_amount = search_purchase_tax_invoice_net_amount != '' ? ` AND pur_tax.purchase_tax_invoice_net_amount LIKE '%${search_purchase_tax_invoice_net_amount}%'` : '';
        const sea_supplier_name = search_supplier_name != '' ? ` AND supplier.party_name LIKE '%${search_supplier_name}%'` : '';
        const sea_broker_name = search_broker_name != '' ? ` AND broker.party_name LIKE '%${search_broker_name}%'` : '';
        const sea_challan_type = search_challan_type != '' ? ` AND challan.account_head_name LIKE '%${search_challan_type}%'` : '';
        const sea_quality_type_id = quality_type_id != '' ? ` AND pur_tax.quality_type_id='${quality_type_id}'` : '';
        const sea_supplier_id = supplier_id > 0 ? ` AND pur_tax.supplier_id='${supplier_id}'` : '';
        const sea_broker_id = broker_id > 0 ? ` AND pur_tax.broker_id='${broker_id}'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(pur_tax.purchase_tax_invoice_date) >='${from_date}' AND DATE(pur_tax.purchase_tax_invoice_date) <='${to_date}'` : '';
        
        if (export_type == '') 
        {
            var getpurchasetaxinvoicelistingdata = `SELECT ${All_ID_Query} pur_tax.supplier_id,pur_tax.purchase_tax_invoice_lf_no,pur_tax.purchase_tax_invoice_no,DATE_FORMAT(pur_tax.purchase_tax_invoice_date, "%d-%m-%Y") as purchase_tax_invoice_date,pur_tax.purchase_tax_invoice_lr_no,pur_tax.purchase_tax_invoice_total_unit_sent,pur_tax.purchase_tax_invoice_total_qty_sent,pur_tax.purchase_tax_invoice_total_taxable,pur_tax.puchase_tax_invoice_tcs_amt,pur_tax.purchase_tax_invoice_net_amount,supplier.party_name as supplier_name,broker.party_name as broker_name,challan.account_head_name as challan_type,mill.party_name as mill_name,broker.party_gst_no as broker_gst_no,state.global_code as state_code,supplier.state_id,pur_tax.purchase_tax_invoice_total_sgst,pur_tax.purchase_tax_invoice_total_cgst,pur_tax.purchase_tax_invoice_total_igst,pur_tax.purchase_tax_invoice_remark,pur_tax.purchase_tax_invoice_credit_days,pur_tax.purchase_tax_invoice_payment_date FROM erp_purchase_tax_invoice as pur_tax LEFT JOIN erp_party as supplier ON supplier.id=pur_tax.supplier_id LEFT JOIN erp_party as broker ON broker.id=pur_tax.broker_id LEFT JOIN erp_account_head as challan ON challan.id=pur_tax.challan_type_id LEFT JOIN erp_party as mill ON mill.id=pur_tax.mill_id LEFT JOIN erp_global as state ON state.id=supplier.state_id WHERE pur_tax.user_id='${user_id}' AND pur_tax.company_id<='${company_id}' AND pur_tax.year_id<='${year_id}' AND pur_tax.branch_id<='${branch_id}' AND pur_tax.is_delete_status='0' ${sea_purchase_tax_invoice_lf_no} ${sea_purchase_tax_invoice_no} ${sea_purchase_tax_invoice_date} ${sea_purchase_tax_invoice_lr_no} ${sea_purchase_tax_invoice_total_unit_sent} ${sea_purchase_tax_invoice_total_qty_sent} ${sea_purchase_tax_invoice_total_taxable} ${sea_puchase_tax_invoice_tcs_amt} ${sea_purchase_tax_invoice_net_amount} ${sea_supplier_name} ${sea_broker_name} ${sea_challan_type} ${sea_quality_type_id} ${sea_supplier_id} ${sea_broker_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

            conn.query(getpurchasetaxinvoicelistingdata,(error,data) => {
                
                if (error || data?.length == 0) 
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                
                data.forEach(element => {
                    element.purchase_tax_invoice_payment_date = element.purchase_tax_invoice_payment_date != null ? constant.moment(element.purchase_tax_invoice_payment_date).format('YYYY-MM-DD') : '';                    
                    element.export = constant.DefaultExportopetions;
                });
                
                var totalpurchasetaxinvoicecount = `SELECT COUNT(pur_tax.id) as Count FROM erp_purchase_tax_invoice as pur_tax LEFT JOIN erp_party as supplier ON supplier.id=pur_tax.supplier_id LEFT JOIN erp_party as broker ON broker.id=pur_tax.broker_id LEFT JOIN erp_account_head as challan ON challan.id=pur_tax.challan_type_id LEFT JOIN erp_party as mill ON mill.id=pur_tax.mill_id LEFT JOIN erp_global as state ON state.id=supplier.state_id WHERE pur_tax.user_id='${user_id}' AND pur_tax.company_id<='${company_id}' AND pur_tax.year_id<='${year_id}' AND pur_tax.branch_id<='${branch_id}' AND pur_tax.is_delete_status='0' ${sea_purchase_tax_invoice_lf_no} ${sea_purchase_tax_invoice_no} ${sea_purchase_tax_invoice_date} ${sea_purchase_tax_invoice_lr_no} ${sea_purchase_tax_invoice_total_unit_sent} ${sea_purchase_tax_invoice_total_qty_sent} ${sea_purchase_tax_invoice_total_taxable} ${sea_puchase_tax_invoice_tcs_amt} ${sea_purchase_tax_invoice_net_amount} ${sea_supplier_name} ${sea_broker_name} ${sea_challan_type} ${sea_quality_type_id} ${sea_supplier_id} ${sea_broker_id} ${date_range_query}`;
            
                conn.query(totalpurchasetaxinvoicecount,(error,countdata) => {
                    
                    res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                    next();
                    return;
                });
            });
        }
        else
        {
            let getpurchasetaxexportdata = (export_type == 'all-asc') ? `SELECT pur_tax.supplier_id,pur_tax.purchase_tax_invoice_lf_no as lf_no,pur_tax.purchase_tax_invoice_no as invoice_no,DATE_FORMAT(pur_tax.purchase_tax_invoice_date, "%d-%m-%Y") as invoice_date,pur_tax.purchase_tax_invoice_lr_no as lr_no,pur_tax.purchase_tax_invoice_total_unit_sent as unit,pur_tax.purchase_tax_invoice_total_qty_sent as qty,pur_tax.purchase_tax_invoice_total_taxable as taxble,pur_tax.puchase_tax_invoice_tcs_amt as tcs,pur_tax.purchase_tax_invoice_net_amount as net_amount,supplier.party_name as supplier_name,supplier.party_gst_no as gst_no,broker.party_name as broker_name,challan.account_head_name as challan_type,mill.party_name as mill_name,broker.party_gst_no as broker_gst_no,state.global_code as state_code,supplier.state_id,pur_tax.purchase_tax_invoice_total_sgst as sgst,pur_tax.purchase_tax_invoice_total_cgst as cgst,pur_tax.purchase_tax_invoice_total_igst as igst,(SELECT COALESCE(SUM(child.purchase_tax_invoice_child_net_meter),0) FROM erp_purchase_tax_invoice_child as child WHERE child.purchase_tax_invoice_id=pur_tax.id AND child.is_delete_status='0') as net_meter FROM erp_purchase_tax_invoice as pur_tax LEFT JOIN erp_party as supplier ON supplier.id=pur_tax.supplier_id LEFT JOIN erp_party as broker ON broker.id=pur_tax.broker_id LEFT JOIN erp_account_head as challan ON challan.id=pur_tax.challan_type_id LEFT JOIN erp_party as mill ON mill.id=pur_tax.mill_id LEFT JOIN erp_global as state ON state.id=supplier.state_id WHERE pur_tax.user_id='${user_id}' AND pur_tax.company_id<='${company_id}' AND pur_tax.year_id<='${year_id}' AND pur_tax.branch_id<='${branch_id}' AND pur_tax.is_delete_status='0' ORDER BY ${orderby} ${orderformat}` : `SELECT pur_child.quality_id as supplier_id,pur_tax.purchase_tax_invoice_lf_no as lf_no,pur_tax.purchase_tax_invoice_no as invoice_no,DATE_FORMAT(pur_tax.purchase_tax_invoice_date, "%d-%m-%Y") as invoice_date,pur_tax.purchase_tax_invoice_lr_no as lr_no,pur_child.purchase_tax_invoice_child_unit_sent as unit,pur_child.purchase_tax_invoice_child_qty_sent as qty,pur_child.purchase_tax_invoice_child_taxable as taxble,pur_child.purchase_tax_invoice_child_rate as rate,pur_child.purchase_tax_invoice_child_total as gross_amount,pur_child.purchase_tax_invoice_child_disc_amt as disc_amt,(pur_tax.purchase_tax_invoice_total_sgst + (pur_child.purchase_tax_invoice_child_sgst/100) * pur_child.purchase_tax_invoice_child_taxable) as sgst,(pur_tax.purchase_tax_invoice_total_cgst + (pur_child.purchase_tax_invoice_child_cgst/100) * pur_child.purchase_tax_invoice_child_taxable) as cgst,(pur_tax.purchase_tax_invoice_total_igst + (pur_child.purchase_tax_invoice_child_igst/100) * pur_child.purchase_tax_invoice_child_taxable) as igst,pur_child.purchase_tax_invoice_child_amount as net_amount,supplier.party_name as supplier_name,supplier.party_gst_no as gst_no,broker.party_name as broker_name,challan.account_head_name as challan_type,mill.party_name as mill_name,broker.party_gst_no as broker_gst_no,state.global_code as state_code,supplier.state_id,quality.quality_name,pur_child.purchase_tax_invoice_child_net_meter as net_meter,pur_child.purchase_tax_invoice_child_total as gross_amount FROM erp_purchase_tax_invoice as pur_tax LEFT JOIN erp_party as supplier ON supplier.id=pur_tax.supplier_id LEFT JOIN erp_party as broker ON broker.id=pur_tax.broker_id LEFT JOIN erp_account_head as challan ON challan.id=pur_tax.challan_type_id LEFT JOIN erp_party as mill ON mill.id=pur_tax.mill_id LEFT JOIN erp_global as state ON state.id=supplier.state_id LEFT JOIN erp_purchase_tax_invoice_child as pur_child ON pur_child.purchase_tax_invoice_id=pur_tax.id LEFT JOIN erp_quality as quality ON quality.id=pur_child.quality_id WHERE pur_tax.user_id='${user_id}' AND pur_tax.company_id<='${company_id}' AND pur_tax.year_id<='${year_id}' AND pur_tax.branch_id<='${branch_id}' AND pur_tax.is_delete_status='0' ORDER BY ${orderby} ${orderformat}` ;

            conn.query(getpurchasetaxexportdata,(error,data) => {

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

    // INSERT AND UPDATE PURCHASE TAX INVOICE CHILD DATA API //
    createpurchasetaxinvoicechild: (tax_invoice_id,req,headers) => {

        let body = req;
        let header_data = headers;
        
        body.forEach((data,index) => {
           
            const id = data?.id ? Number(data?.id) : 0;
            const user_id = data?.user_id ? data?.user_id : 0;
            const purchase_tax_invoice_id = tax_invoice_id ? tax_invoice_id : 0;
            const quality_id = data?.quality_id ? data?.quality_id : 0;
            const gst_id = data?.gst_id ? data?.gst_id : 0;

            const purchase_tax_invoice_quality_meter = data?.purchase_tax_invoice_quality_meter ? data?.purchase_tax_invoice_quality_meter : 0;
            const purchase_tax_invoice_quality_meter_average = data?.purchase_tax_invoice_quality_meter_average ? data?.purchase_tax_invoice_quality_meter_average : 0;
            const purchase_tax_invoice_child_remark = data?.purchase_tax_invoice_child_remark ? data?.purchase_tax_invoice_child_remark.trim().toLowerCase() : '';
            const purchase_tax_invoice_child_hsn = data?.purchase_tax_invoice_child_hsn ? data?.purchase_tax_invoice_child_hsn.trim().toLowerCase() : '';
            const purchase_tax_invoice_child_stock = data?.purchase_tax_invoice_child_stock ? data?.purchase_tax_invoice_child_stock : '';
            const purchase_tax_invoice_child_cut = data?.purchase_tax_invoice_child_cut ? data?.purchase_tax_invoice_child_cut : 0;
            const purchase_tax_invoice_child_cut_meters = data?.purchase_tax_invoice_child_cut_meters ? data?.purchase_tax_invoice_child_cut_meters : 0;
            const purchase_tax_invoice_child_pkg = data?.purchase_tax_invoice_child_pkg ? data?.purchase_tax_invoice_child_pkg : 0;
            const purchase_tax_invoice_child_qty_per = data?.purchase_tax_invoice_child_qty_per ? data?.purchase_tax_invoice_child_qty_per : '';
            const purchase_tax_invoice_child_unit_sent = data?.purchase_tax_invoice_child_unit_sent ? data?.purchase_tax_invoice_child_unit_sent : 0;
            const purchase_tax_invoice_child_qty_sent = data?.purchase_tax_invoice_child_qty_sent ? data?.purchase_tax_invoice_child_qty_sent : 0;
            const purchase_tax_invoice_child_rate_per = data?.purchase_tax_invoice_child_rate_per ? data?.purchase_tax_invoice_child_rate_per : '';
            const purchase_tax_invoice_child_fold = data?.purchase_tax_invoice_child_fold ? data?.purchase_tax_invoice_child_fold : 0;
            const purchase_tax_invoice_child_net_meter = data?.purchase_tax_invoice_child_net_meter ? data?.purchase_tax_invoice_child_net_meter : 0;
            const purchase_tax_invoice_child_rate = data?.purchase_tax_invoice_child_rate ? data?.purchase_tax_invoice_child_rate : 0;
            const purchase_tax_invoice_child_total = data?.purchase_tax_invoice_child_total ? data?.purchase_tax_invoice_child_total : 0;
            const purchase_tax_invoice_child_disc_per = data?.purchase_tax_invoice_child_disc_per ? data?.purchase_tax_invoice_child_disc_per : 0;
            const purchase_tax_invoice_child_disc_amt = data?.purchase_tax_invoice_child_disc_amt ? data?.purchase_tax_invoice_child_disc_amt : 0;
            const purchase_tax_invoice_child_freight = data?.purchase_tax_invoice_child_freight ? data?.purchase_tax_invoice_child_freight : 0;
            const purchase_tax_invoice_child_fless = data?.purchase_tax_invoice_child_fless ? data?.purchase_tax_invoice_child_fless : 0;
            const purchase_tax_invoice_child_insurance = data?.purchase_tax_invoice_child_insurance ? data?.purchase_tax_invoice_child_insurance : 0;
            const purchase_tax_invoice_child_taxable = data?.purchase_tax_invoice_child_taxable ? data?.purchase_tax_invoice_child_taxable : 0;
            const purchase_tax_invoice_child_sgst = data?.purchase_tax_invoice_child_sgst ? data?.purchase_tax_invoice_child_sgst : 0;
            const purchase_tax_invoice_child_cgst = data?.purchase_tax_invoice_child_cgst ? data?.purchase_tax_invoice_child_cgst : 0;
            const purchase_tax_invoice_child_igst = data?.purchase_tax_invoice_child_igst ? data?.purchase_tax_invoice_child_igst : 0;
            const purchase_tax_invoice_child_amount = data?.purchase_tax_invoice_child_amount ? data?.purchase_tax_invoice_child_amount : 0;
            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const grey_issue_challan_id = data?.grey_issue_challan_no ? data?.grey_issue_challan_no : 0;

            if (id > 0) 
            {   
                const updatepurchasetaxinvoicechild = `CALL create_purchase_tax_invoice_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updatepurchasetaxinvoicechild,[id,user_id,purchase_tax_invoice_id,quality_id,gst_id,purchase_tax_invoice_quality_meter,purchase_tax_invoice_quality_meter_average,purchase_tax_invoice_child_remark,purchase_tax_invoice_child_hsn,purchase_tax_invoice_child_stock,purchase_tax_invoice_child_cut,purchase_tax_invoice_child_cut_meters,purchase_tax_invoice_child_pkg,purchase_tax_invoice_child_qty_per,purchase_tax_invoice_child_unit_sent,purchase_tax_invoice_child_qty_sent,purchase_tax_invoice_child_rate_per,purchase_tax_invoice_child_fold,purchase_tax_invoice_child_net_meter,purchase_tax_invoice_child_rate,purchase_tax_invoice_child_total,purchase_tax_invoice_child_disc_per,purchase_tax_invoice_child_disc_amt,purchase_tax_invoice_child_freight,purchase_tax_invoice_child_fless,purchase_tax_invoice_child_insurance,purchase_tax_invoice_child_taxable,purchase_tax_invoice_child_sgst,purchase_tax_invoice_child_cgst,purchase_tax_invoice_child_igst,purchase_tax_invoice_child_amount,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    }
                    else
                    {                          
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const login_ip = `purchase taxinvoice Child Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`purchase taxinvoice Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return({ Status:200,Count:0,Message:'purchase taxinvoice Child Updated',Data:[] });
                    }  
                });
            }
            else
            {
                const createpurchasetaxinvoicechild = `CALL create_purchase_tax_invoice_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createpurchasetaxinvoicechild,[id,user_id,purchase_tax_invoice_id,quality_id,gst_id,purchase_tax_invoice_quality_meter,purchase_tax_invoice_quality_meter_average,purchase_tax_invoice_child_remark,purchase_tax_invoice_child_hsn,purchase_tax_invoice_child_stock,purchase_tax_invoice_child_cut,purchase_tax_invoice_child_cut_meters,purchase_tax_invoice_child_pkg,purchase_tax_invoice_child_qty_per,purchase_tax_invoice_child_unit_sent,purchase_tax_invoice_child_qty_sent,purchase_tax_invoice_child_rate_per,purchase_tax_invoice_child_fold,purchase_tax_invoice_child_net_meter,purchase_tax_invoice_child_rate,purchase_tax_invoice_child_total,purchase_tax_invoice_child_disc_per,purchase_tax_invoice_child_disc_amt,purchase_tax_invoice_child_freight,purchase_tax_invoice_child_fless,purchase_tax_invoice_child_insurance,purchase_tax_invoice_child_taxable,purchase_tax_invoice_child_sgst,purchase_tax_invoice_child_cgst,purchase_tax_invoice_child_igst,purchase_tax_invoice_child_amount,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return { Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error };
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const login_ip = `Purchase Tax Invoice Child Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails,[user_id],(error,userdata) => {

                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`Purchase Tax Invoice Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        
                        if (data[0][0]?.is_mill_issue > 0 && data[0][0]?.mill_id > 0 && grey_issue_challan_id > 0) 
                        {
                            return AllGreyIssueApis.creategreyissuebytaxinvoice(data[0][0],header_data,index,grey_issue_challan_id);  
                        }
                        return { Status:200,Count:0,Message:'Purchase Tax Invoice Child Inserted',Data:data[0] };
                    }  
                });
            }
        });
    },

    // DELETE PURCHASE TAX INVOICE DATA API //
    deletepurchasetaxinvoicedata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Purchase Tax Invoice ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        // var existpurchasetaxinvoicedata = `SELECT id as purchase_invoice_id,(SELECT COUNT(id) FROM erp_purchase_tax_invoice_child WHERE purchase_tax_invoice_id='${id}' AND is_delete_status='0') as purchase_tax_invoice_child_id FROM erp_purchase_tax_invoice WHERE id='${id}'`;

        // conn.query(existpurchasetaxinvoicedata,(error,data) => {
        //     if (error) 
        //     {   
        //         res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
        //         next();
        //         return;
        //     }
        //     else
        //     {
        //         if (data[0]?.purchase_tax_invoice_child_id > 0)
        //         {
        //             res?.send({ Status:400,Count:0,Message:'Purchase Tax Invoice In Use can not delete',Data:[] });
        //             next();
        //             return;
        //         }
        //         else
        //         {
                    var deletepurchasetaxinvoicedata = `CALL delete_purchase_tax_invoice(?,?)`;
                    conn.query(deletepurchasetaxinvoicedata,[id,entry_date],(error,data) => {
                        if (error) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Purchase Tax Invoice Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {     
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `Purchase Tax Invoice  Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Purchase Tax Invoice `,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Purchase Tax Invoice Deleted Successfully',Data:[] });

                            // DELETE DEFAULT VOUCHER //
                            res?.send(AllVoucherApis.deletedefaultvoucherdata(id,`purchase`,user_id,req?.headers));
                            next();
                            return;
                        }
                    });
        //         }
        //     }
        // });
    },

    // DELETE PURCHASE TAX INVOICE CHILD DATA API //
    deletepurchasetaxinvoicechilddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Purchase Tax Invoice Child Deleted Successfully',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existpurchasetaxinvoicechilddata = `SELECT id as purchase_invoice_child_id,(SELECT COUNT(id) FROM erp_grey_issue WHERE purchase_tax_invoice_child_id='${id}' AND is_delete_status='0') as grey_issue_id FROM erp_purchase_tax_invoice_child WHERE id='${id}'`;

        conn.query(existpurchasetaxinvoicechilddata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.grey_issue_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Purchase Tax Invoice Child In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletepurchasetaxinvoicechilddata = `CALL delete_purchase_tax_invoice_child(?,?)`;
                    conn.query(deletepurchasetaxinvoicechilddata,[id,entry_date],(error,data) => {
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
                            const ip = `Purchase Tax Invoice  Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Purchase Tax Invoice `,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Purchase Tax Invoice Child Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    }
};


export default AllPurchaseTaxInvoiceApis;
    
