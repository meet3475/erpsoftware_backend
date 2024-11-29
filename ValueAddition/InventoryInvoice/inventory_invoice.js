import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllInventoryInvoiceApis = {
    
    // INSERT AND UPDATE inventory INVOICE DATA API //
    createinventoryinvoice: (req,res,next) => {

        let body  = req?.body;
        let child_data = req?.body?.inventory_invoice_child_data;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const year_id = body?.year_id ? body?.year_id  : 0;
        const godown_id = body?.godown_id ? body?.godown_id  : 0;
        const account_head_id = body?.account_head_id ? body?.account_head_id  : 0;
        const processor_id = body?.processor_id ? body?.processor_id  : 0;
        const tds_on_id = body?.tds_on_id ? body?.tds_on_id  : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id  : 0;
        const status_id = body?.status_id ? body?.status_id  : 0;
        const inventory_invoice_no = body?.inventory_invoice_no ? body?.inventory_invoice_no : '';
        const inventory_invoice_date = body?.inventory_invoice_date ? body?.inventory_invoice_date.trim() : constant.moment().format('YYYY-MM-DD');
        const inventory_invoice_lf_no = body?.inventory_invoice_lf_no ? body?.inventory_invoice_lf_no : '';
        const inventory_invoice_total_unit = body?.inventory_invoice_total_unit ? body?.inventory_invoice_total_unit : 0;
        const inventory_invoice_total_qty = body?.inventory_invoice_total_qty ? body?.inventory_invoice_total_qty : 0;
        const inventory_invoice_total_meter = body?.inventory_invoice_total_meter ? body?.inventory_invoice_total_meter : 0;
        const inventory_invoice_total_amount = body?.inventory_invoice_total_amount ? body?.inventory_invoice_total_amount : 0;
        const inventory_invoice_total_disc_amt = body?.inventory_invoice_total_disc_amt ? body?.inventory_invoice_total_disc_amt : 0;
        const inventory_invoice_total_freight = body?.inventory_invoice_total_freight ? body?.inventory_invoice_total_freight : 0;
        const inventory_invoice_total_freight_less = body?.inventory_invoice_total_freight_less ? body?.inventory_invoice_total_freight_less : 0;
        const inventory_invoice_total_taxable = body?.inventory_invoice_total_taxable ? body?.inventory_invoice_total_taxable : 0;
        const inventory_invoice_total_sgst = body?.inventory_invoice_total_sgst ? body?.inventory_invoice_total_sgst : 0;
        const inventory_invoice_total_cgst = body?.inventory_invoice_total_cgst ? body?.inventory_invoice_total_cgst : 0;
        const inventory_invoice_total_igst = body?.inventory_invoice_total_igst ? body?.inventory_invoice_total_igst : 0;
        const inventory_invoice_total_total = body?.inventory_invoice_total_total ? body?.inventory_invoice_total_total : 0;
        const is_invoice_base_on_grey = body?.is_invoice_base_on_grey ? body?.is_invoice_base_on_grey : 0;
        const is_tds_deduction = body?.is_tds_deduction ? body?.is_tds_deduction : 0;
        const inventory_invoice_applicable_rate = body?.inventory_invoice_applicable_rate ? body?.inventory_invoice_applicable_rate : 0;
        const inventory_invoice_total_tds = body?.inventory_invoice_total_tds ? body?.inventory_invoice_total_tds : 0;
        const inventory_invoice_total_included_tax_amount = body?.inventory_invoice_total_included_tax_amount ? body?.inventory_invoice_total_included_tax_amount : 0;
        const inventory_invoice_total_round_off = body?.inventory_invoice_total_round_off ? body?.inventory_invoice_total_round_off : 0;
        const inventory_invoice_total_net_amount = body?.inventory_invoice_total_net_amount ? body?.inventory_invoice_total_net_amount : 0;        
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
            const updateinventoryinvoice = `CALL create_inventory_invoice(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updateinventoryinvoice,[id,user_id,branch_id,company_id,year_id,godown_id,account_head_id,processor_id,tds_on_id,nature_of_payment_id,status_id,inventory_invoice_no,inventory_invoice_date,inventory_invoice_lf_no,inventory_invoice_total_unit,inventory_invoice_total_qty,inventory_invoice_total_meter,inventory_invoice_total_amount,inventory_invoice_total_disc_amt,inventory_invoice_total_freight,inventory_invoice_total_freight_less,inventory_invoice_total_taxable,inventory_invoice_total_sgst,inventory_invoice_total_cgst,inventory_invoice_total_igst,inventory_invoice_total_total,is_invoice_base_on_grey,is_tds_deduction,inventory_invoice_applicable_rate,inventory_invoice_total_tds,inventory_invoice_total_included_tax_amount,inventory_invoice_total_round_off,inventory_invoice_total_net_amount,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'inventory invoice Updated',Data:data[0] });
                    next();

                    // CALL PUCHASE TAX INVOICE CHILD API //
                    if (child_data && child_data.length > 0) 
                    {
                        res?.send(AllInventoryInvoiceApis.createinventoryinvoicechild(id,child_data,req?.headers));
                        next();
                    }
                                 
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `inventoryinvoice Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`inventoryinvoice`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {   
            const createinventoryinvoice = `CALL create_inventory_invoice(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createinventoryinvoice,[id,user_id,branch_id,company_id,year_id,godown_id,account_head_id,processor_id,tds_on_id,nature_of_payment_id,status_id,inventory_invoice_no,inventory_invoice_date,inventory_invoice_lf_no,inventory_invoice_total_unit,inventory_invoice_total_qty,inventory_invoice_total_meter,inventory_invoice_total_amount,inventory_invoice_total_disc_amt,inventory_invoice_total_freight,inventory_invoice_total_freight_less,inventory_invoice_total_taxable,inventory_invoice_total_sgst,inventory_invoice_total_cgst,inventory_invoice_total_igst,inventory_invoice_total_total,is_invoice_base_on_grey,is_tds_deduction,inventory_invoice_applicable_rate,inventory_invoice_total_tds,inventory_invoice_total_included_tax_amount,inventory_invoice_total_round_off,inventory_invoice_total_net_amount,entry_date,update_date],(error,data) => {

                if (error || data[0]?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {    
                    res?.send({ Status:200,Count:0,Message:'inventory invoice Inserted',Data:data[0] });
                    next();

                    // CALL inventory INVOICE CHILD API //
                    if (child_data && child_data.length > 0) 
                    {
                        res?.send(AllInventoryInvoiceApis.createinventoryinvoicechild(data[0][0].inventory_invoice_id,child_data,req?.headers));
                    }
                       
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const login_ip = `inventory Invoice Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`inventory Invoice`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET inventory INVOICE AND CHILD DETAILS DATA API //
    getinventoryinvoicedetails: (req,res,next) => {

        const inventory_invoice_id = req.body?.inventory_invoice_id ? req.body?.inventory_invoice_id : 0;

        if (inventory_invoice_id.length == 0 || inventory_invoice_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter inventory invoice ID',Data:[] });
            next();
            return;
        }

        var getinventoryinvoicedetails = `CALL get_inventory_invoice_details(?)`;
        conn.query(getinventoryinvoicedetails,[inventory_invoice_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0][0].inventory_invoice_date = constant.moment(data[0][0].inventory_invoice_date).format('YYYY-MM-DD');
                
                data[1].forEach(element => {
                    element.inventory_invoice_child_sgst_amt = (element.inventory_invoice_child_sgst_amt + (element.inventory_invoice_child_sgst/100) * element.inventory_invoice_child_taxable).toFixed(2);
                    element.inventory_invoice_child_cgst_amt = (element.inventory_invoice_child_cgst_amt + (element.inventory_invoice_child_cgst/100) * element.inventory_invoice_child_taxable).toFixed(2);
                    element.inventory_invoice_child_igst_amt = (element.inventory_invoice_child_igst_amt + (element.inventory_invoice_child_igst/100) * element.inventory_invoice_child_taxable).toFixed(2);
                });

                data[0][0].inventory_invoice_child_data = data[1];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET inventory INVOICE AND CHILD LISTING DATA API //
    getinventoryinvoicelistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
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
        const All_ID_Query = body?.is_export == true ? ' ' :`receive.id as receive_id,receive.jober_id,jober.nature_of_payment_id,jober.status_id,jober.tds_on_id,jober.state_id,`;

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

        const search_inventory_receive_no = search?.inventory_receive_no ? search?.inventory_receive_no : '';
        const search_inventory_lf_no = search?.inventory_lf_no ? search?.inventory_lf_no.trim() : '';
        const search_inventory_challan_no = search?.inventory_challan_no ? search?.inventory_challan_no.trim() : '';
        const search_inventory_receive_lot_no = search?.inventory_receive_lot_no ? search?.inventory_receive_lot_no.trim() : '';
        const search_inventory_receive_challan_no = search?.inventory_receive_challan_no ? search?.inventory_receive_challan_no : '';
        const search_inventory_receive_challan_date = search?.inventory_receive_challan_date ? search?.inventory_receive_challan_date : '';
        const search_issue_quality = search?.issue_quality ? search?.issue_quality.trim().toLowerCase() : '';
        const search_receive_quality = search?.receive_quality ? search?.receive_quality.trim().toLowerCase() : '';
        const search_jober_name = search?.jober_name ? search?.jober_name.trim().toLowerCase() : '';
        const search_inventory_receive_unit_sent = search?.inventory_receive_unit_sent ? search?.inventory_receive_unit_sent : '';
        const search_inventory_receive_grey_qty = search?.inventory_receive_grey_qty ? search?.inventory_receive_grey_qty : '';
        const search_inventory_receive_qty_sent = search?.inventory_receive_qty_sent ? search?.inventory_receive_qty_sent : '';
        const search_inventory_receive_remark = search?.inventory_receive_remark ? search?.inventory_receive_remark.trim().toLowerCase() : '';
        
        
        const sea_inventory_receive_no = search_inventory_receive_no != '' ? ` AND receive.inventory_receive_no LIKE '%${search_inventory_receive_no}%'` : '';
        const sea_inventory_lf_no = search_inventory_lf_no != '' ? ` AND parent.inventory_lf_no LIKE '%${search_inventory_lf_no}%'` : '';
        const sea_inventory_challan_no = search_inventory_challan_no != '' ? ` AND parent.inventory_challan_no LIKE '%${search_inventory_challan_no}%'` : '';
        const sea_inventory_receive_lot_no = search_inventory_receive_lot_no != '' ? ` AND receive.inventory_receive_lot_no LIKE '%${search_inventory_receive_lot_no}%'` : '';
        const sea_inventory_receive_challan_no = search_inventory_receive_challan_no != '' ? ` AND receive.inventory_receive_challan_no LIKE '%${search_inventory_receive_challan_no}%'` : '';
        const sea_inventory_receive_challan_date = search_inventory_receive_challan_date != '' ? ` AND receive.inventory_receive_challan_date LIKE '%${search_inventory_receive_challan_date}%'` : '';
        const sea_issue_quality = search_issue_quality != '' ? ` AND issue_quality.quality_name LIKE '%${search_issue_quality}%'` : '';
        const sea_receive_quality = search_receive_quality != '' ? ` AND receive_quality.quality_name LIKE '%${search_receive_quality}%'` : '';
        const sea_jober_name = search_jober_name != '' ? ` AND jober.party_name LIKE '%${search_jober_name}%'` : '';
        const sea_inventory_receive_unit_sent = search_inventory_receive_unit_sent != '' ? ` AND receive.inventory_receive_unit_sent LIKE '%${search_inventory_receive_unit_sent}%'` : '';
        const sea_inventory_receive_grey_qty = search_inventory_receive_grey_qty != '' ? ` AND receive.inventory_receive_grey_qty LIKE '%${search_inventory_receive_grey_qty}%'` : '';
        const sea_inventory_receive_qty_sent = search_inventory_receive_qty_sent != '' ? ` AND receive.inventory_receive_qty_sent LIKE '%${search_inventory_receive_qty_sent}%'` : '';
        const sea_inventory_receive_remark = search_inventory_receive_remark != '' ? ` AND receive.inventory_receive_remark LIKE '%${search_inventory_receive_remark}%'` : '';
        const sea_quality_id = quality_id > 0 ? ` AND receive.receive_quality_id='${quality_id}'` : '';
        const date_range_query = from_date != '' ? ` AND receive.inventory_receive_challan_date >='${from_date}' AND receive.inventory_receive_challan_date <='${to_date}'` : '';
        

        var getinventoryreceivelistingdata = `SELECT ${All_ID_Query} receive.inventory_receive_no,parent.inventory_lf_no,parent.inventory_challan_no,receive.inventory_receive_lot_no,receive.inventory_receive_challan_no,receive.inventory_receive_challan_date,issue_quality.quality_name as issue_quality,receive_quality.quality_name as receive_quality,jober.party_name as jober_name,receive.inventory_receive_unit_sent,receive.inventory_receive_grey_qty,receive.inventory_receive_qty_sent,receive.inventory_receive_remark,jober.is_tds_applicable,jober.party_applicable_rate FROM erp_inventory_receive as receive LEFT JOIN erp_inventory_child as child ON child.id=receive.inventory_child_id LEFT JOIN erp_inventory as parent ON parent.id=child.inventory_id LEFT JOIN erp_quality as issue_quality ON issue_quality.id=child.quality_id LEFT JOIN erp_quality as receive_quality ON receive_quality.id=receive.receive_quality_id LEFT JOIN erp_party as jober ON jober.id=parent.jober_id WHERE receive.is_delete_status='0' AND receive.user_id='${user_id}' AND receive.company_id<='${company_id}' AND receive.year_id<='${year_id}' AND receive.branch_id<='${branch_id}' AND receive.id NOT IN (SELECT inventory_receive_id FROM erp_inventory_invoice_child WHERE inventory_receive_id=receive.id AND is_delete_status='0') AND child.is_delete_status='0' AND parent.is_delete_status='0' AND issue_quality.is_delete_status='0' AND receive_quality.is_delete_status='0' AND jober.is_delete_status='0' ${sea_inventory_receive_no} ${sea_inventory_lf_no} ${sea_inventory_challan_no} ${sea_inventory_receive_lot_no} ${sea_inventory_receive_challan_no} ${sea_inventory_receive_challan_date} ${sea_issue_quality} ${sea_receive_quality} ${sea_jober_name} ${sea_inventory_receive_unit_sent} ${sea_inventory_receive_grey_qty} ${sea_inventory_receive_qty_sent} ${sea_inventory_receive_remark} ${sea_quality_id} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`; 

        conn.query(getinventoryreceivelistingdata,(error,data) => {
            
            if (error || data.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }

            data.forEach(element => {
                element.inventory_receive_challan_date = constant.moment(element.inventory_receive_challan_date).format('YYYY-MM-DD');
            });
            
            var totalinventoryreceivecount = `SELECT COUNT(receive.id) as Count FROM erp_inventory_receive as receive LEFT JOIN erp_inventory_child as child ON child.id=receive.inventory_child_id LEFT JOIN erp_inventory as parent ON parent.id=child.inventory_id LEFT JOIN erp_quality as issue_quality ON issue_quality.id=child.quality_id LEFT JOIN erp_quality as receive_quality ON receive_quality.id=receive.receive_quality_id LEFT JOIN erp_party as jober ON jober.id=parent.jober_id WHERE receive.is_delete_status='0' AND receive.user_id='${user_id}' AND receive.company_id<='${company_id}' AND receive.year_id<='${year_id}' AND receive.branch_id<='${branch_id}' AND receive.id NOT IN (SELECT inventory_receive_id FROM erp_inventory_invoice_child WHERE inventory_receive_id=receive.id AND is_delete_status='0') AND child.is_delete_status='0' AND parent.is_delete_status='0' AND issue_quality.is_delete_status='0' AND receive_quality.is_delete_status='0' AND jober.is_delete_status='0' ${sea_inventory_receive_no} ${sea_inventory_lf_no} ${sea_inventory_challan_no} ${sea_inventory_receive_lot_no} ${sea_inventory_receive_challan_no} ${sea_inventory_receive_challan_date} ${sea_issue_quality} ${sea_receive_quality} ${sea_jober_name} ${sea_inventory_receive_unit_sent} ${sea_inventory_receive_grey_qty} ${sea_inventory_receive_qty_sent} ${sea_inventory_receive_remark} ${sea_quality_id} ${date_range_query}`;
        
            conn.query(totalinventoryreceivecount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // GET inventory INVOICE Report LISTING DATA API //
    getinventoryinvoicereportlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'par_invoice.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`par_invoice.id as inventory_invoice_id,par_invoice.processor_id,`;

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

        const search_inventory_invoice_no = search?.inventory_invoice_no ? search?.inventory_invoice_no : '';
        const search_inventory_invoice_date = search?.inventory_invoice_date ? search?.inventory_invoice_date : '';
        const search_inventory_invoice_lf_no = search?.inventory_invoice_lf_no ? search?.inventory_invoice_lf_no : '';
        const search_jober_name = search?.jober_name ? search?.jober_name.trim().toLowerCase() : '';
        const search_inventory_invoice_total_unit = search?.inventory_invoice_total_unit ? search?.inventory_invoice_total_unit : '';
        const search_inventory_invoice_total_qty = search?.inventory_invoice_total_qty ? search?.inventory_invoice_total_qty : '';
        const search_inventory_invoice_total_taxable = search?.inventory_invoice_total_taxable ? search?.inventory_invoice_total_taxable : '';
        const search_inventory_invoice_total_total = search?.inventory_invoice_total_total ? search?.inventory_invoice_total_total : '';
        const search_inventory_invoice_total_tds = search?.inventory_invoice_total_tds ? search?.inventory_invoice_total_tds : '';
        const search_inventory_invoice_total_net_amount = search?.inventory_invoice_total_net_amount ? search?.inventory_invoice_total_net_amount.trim().toLowerCase() : '';
        
        
        const sea_inventory_invoice_no = search_inventory_invoice_no != '' ? ` AND par_invoice.inventory_invoice_no LIKE '%${search_inventory_invoice_no}%'` : '';
        const sea_inventory_invoice_date = search_inventory_invoice_date != '' ? ` AND par_invoice.inventory_invoice_date LIKE '%${search_inventory_invoice_date}%'` : '';
        const sea_inventory_invoice_lf_no = search_inventory_invoice_lf_no != '' ? ` AND par_invoice.inventory_invoice_lf_no LIKE '%${search_inventory_invoice_lf_no}%'` : '';
        const sea_jober_name = search_jober_name != '' ? ` AND jober.party_name LIKE '%${search_jober_name}%'` : '';
        const sea_inventory_invoice_total_unit = search_inventory_invoice_total_unit != '' ? ` AND par_invoice.inventory_invoice_total_unit LIKE '%${search_inventory_invoice_total_unit}%'` : '';
        const sea_inventory_invoice_total_qty = search_inventory_invoice_total_qty != '' ? ` AND par_invoice.inventory_invoice_total_qty LIKE '%${search_inventory_invoice_total_qty}%'` : '';
        const sea_inventory_invoice_total_taxable = search_inventory_invoice_total_taxable != '' ? ` AND par_invoice.inventory_invoice_total_taxable LIKE '%${search_inventory_invoice_total_taxable}%'` : '';
        const sea_inventory_invoice_total_total = search_inventory_invoice_total_total != '' ? ` AND par_invoice.inventory_invoice_total_total LIKE '%${search_inventory_invoice_total_total}%'` : '';
        const sea_inventory_invoice_total_tds = search_inventory_invoice_total_tds != '' ? ` AND par_invoice.inventory_invoice_total_tds LIKE '%${search_inventory_invoice_total_tds}%'` : '';
        const sea_inventory_invoice_total_net_amount = search_inventory_invoice_total_net_amount != '' ? ` AND par_invoice.inventory_invoice_total_net_amount LIKE '%${search_inventory_invoice_total_net_amount}%'` : '';
        const date_range_query = from_date != '' ? ` AND par_invoice.inventory_invoice_date >='${from_date}' AND par_invoice.inventory_invoice_date <='${to_date}'` : '';
        

        var getinventoryinvoicelistingdata = `SELECT ${All_ID_Query} par_invoice.inventory_invoice_no,par_invoice.inventory_invoice_date,par_invoice.inventory_invoice_lf_no,jober.party_name as jober_name,par_invoice.inventory_invoice_total_unit,par_invoice.inventory_invoice_total_qty,par_invoice.inventory_invoice_total_taxable,(par_invoice.inventory_invoice_total_sgst + par_invoice.inventory_invoice_total_cgst + par_invoice.inventory_invoice_total_igst) as total_tax,par_invoice.inventory_invoice_total_total,par_invoice.inventory_invoice_total_tds,par_invoice.inventory_invoice_total_net_amount FROM erp_inventory_invoice as par_invoice LEFT JOIN erp_party as jober ON jober.id=par_invoice.processor_id WHERE par_invoice.user_id='${user_id}' AND par_invoice.company_id<='${company_id}' AND par_invoice.year_id<='${year_id}' AND par_invoice.branch_id<='${branch_id}' AND par_invoice.is_delete_status='0' AND jober.is_delete_status='0' ${sea_inventory_invoice_no} ${sea_inventory_invoice_date} ${sea_inventory_invoice_lf_no} ${sea_jober_name} ${sea_inventory_invoice_total_unit} ${sea_inventory_invoice_total_qty} ${sea_inventory_invoice_total_taxable} ${sea_inventory_invoice_total_total} ${sea_inventory_invoice_total_tds} ${sea_inventory_invoice_total_net_amount} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getinventoryinvoicelistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.inventory_invoice_date = constant.moment(element.inventory_invoice_date).format('YYYY-MM-DD');
            });
            
            var totalinventoryinvoicecount = `SELECT COUNT(par_invoice.id) as Count FROM erp_inventory_invoice as par_invoice LEFT JOIN erp_party as jober ON jober.id=par_invoice.processor_id WHERE par_invoice.user_id='${user_id}' AND par_invoice.company_id<='${company_id}' AND par_invoice.year_id<='${year_id}' AND par_invoice.branch_id<='${branch_id}' AND par_invoice.is_delete_status='0' AND jober.is_delete_status='0' ${sea_inventory_invoice_no} ${sea_inventory_invoice_date} ${sea_inventory_invoice_lf_no} ${sea_jober_name} ${sea_inventory_invoice_total_unit} ${sea_inventory_invoice_total_qty} ${sea_inventory_invoice_total_taxable} ${sea_inventory_invoice_total_total} ${sea_inventory_invoice_total_tds} ${sea_inventory_invoice_total_net_amount} ${date_range_query}`;
            
            conn.query(totalinventoryinvoicecount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // INSERT AND UPDATE inventory INVOICE CHILD DATA API //
    createinventoryinvoicechild: (invoice_id,req,headers) => {

        let body = req;
        let header_data = headers;
        
        body.forEach((data,index) => {
           
            const id = data?.id ? Number(data?.id) : 0;
            const user_id = data?.user_id ? data?.user_id : 0;
            const inventory_invoice_id = invoice_id ? invoice_id : 0;
            const inventory_receive_id = data?.inventory_receive_id ? data?.inventory_receive_id : 0;
            const quality_id = data?.quality_id ? data?.quality_id : 0;
            const gst_id = data?.gst_id ? data?.gst_id : 0;
            const rate_per_id = data?.rate_per_id ? data?.rate_per_id : 0;
            const inventory_invoice_child_remark = data?.inventory_invoice_child_remark ? data?.inventory_invoice_child_remark.trim().toLowerCase() : '';
            const inventory_invoice_child_challan_no = data?.inventory_invoice_child_challan_no ? data?.inventory_invoice_child_challan_no : '';
            const inventory_invoice_child_unit = data?.inventory_invoice_child_unit ? data?.inventory_invoice_child_unit : '';
            const inventory_invoice_child_qty = data?.inventory_invoice_child_qty ? data?.inventory_invoice_child_qty : 0;
            const inventory_invoice_child_rate = data?.inventory_invoice_child_rate ? data?.inventory_invoice_child_rate : 0;
            const inventory_invoice_child_amount = data?.inventory_invoice_child_amount ? data?.inventory_invoice_child_amount : 0;
            const inventory_invoice_child_disc_per = data?.inventory_invoice_child_disc_per ? data?.inventory_invoice_child_disc_per : 0;
            const inventory_invoice_child_disc_amt = data?.inventory_invoice_child_disc_amt ? data?.inventory_invoice_child_disc_amt : 0;
            const inventory_invoice_child_freight = data?.inventory_invoice_child_freight ? data?.inventory_invoice_child_freight : 0;
            const inventory_invoice_child_freight_less = data?.inventory_invoice_child_freight_less ? data?.inventory_invoice_child_freight_less : 0;
            const inventory_invoice_child_taxable = data?.inventory_invoice_child_taxable ? data?.inventory_invoice_child_taxable : 0;
            const inventory_invoice_child_sgst = data?.inventory_invoice_child_sgst ? data?.inventory_invoice_child_sgst : 0;
            const inventory_invoice_child_cgst = data?.inventory_invoice_child_cgst ? data?.inventory_invoice_child_cgst : 0;
            const inventory_invoice_child_igst = data?.inventory_invoice_child_igst ? data?.inventory_invoice_child_igst : 0;
            const inventory_invoice_child_total = data?.inventory_invoice_child_total ? data?.inventory_invoice_child_total : 0;
            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            
            if (id > 0) 
            {   
                const updateinventoryinvoicechild = `CALL create_inventory_invoice_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updateinventoryinvoicechild,[id,user_id,inventory_invoice_id,inventory_receive_id,quality_id,gst_id,rate_per_id,inventory_invoice_child_remark,inventory_invoice_child_challan_no,inventory_invoice_child_unit,inventory_invoice_child_qty,inventory_invoice_child_rate,inventory_invoice_child_amount,inventory_invoice_child_disc_per,inventory_invoice_child_disc_amt,inventory_invoice_child_freight,inventory_invoice_child_freight_less,inventory_invoice_child_taxable,inventory_invoice_child_sgst,inventory_invoice_child_cgst,inventory_invoice_child_igst,inventory_invoice_child_total,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    }
                    else
                    {                          
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const login_ip = `inventory invoice Child Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`inventory invoice Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return({ Status:200,Count:0,Message:'inventory invoice Child Updated',Data:[] });
                    }  
                });
            }
            else
            {
                const createinventoryinvoicechild = `CALL create_inventory_invoice_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createinventoryinvoicechild,[id,user_id,inventory_invoice_id,inventory_receive_id,quality_id,gst_id,rate_per_id,inventory_invoice_child_remark,inventory_invoice_child_challan_no,inventory_invoice_child_unit,inventory_invoice_child_qty,inventory_invoice_child_rate,inventory_invoice_child_amount,inventory_invoice_child_disc_per,inventory_invoice_child_disc_amt,inventory_invoice_child_freight,inventory_invoice_child_freight_less,inventory_invoice_child_taxable,inventory_invoice_child_sgst,inventory_invoice_child_cgst,inventory_invoice_child_igst,inventory_invoice_child_total,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return { Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error };
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const login_ip = `inventory Invoice Child Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails,[user_id],(error,userdata) => {

                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,login_ip,`inventory Invoice Child`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        
                        return { Status:200,Count:0,Message:'inventory Invoice Child Inserted',Data:data[0] };
                    }  
                });
            }
        });
    },

    // DELETE inventory INVOICE DATA API //
    deleteinventoryinvoicedata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid inventory Invoice ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existinventoryinvoicedata = `SELECT id as inventory_invoice_id,(SELECT COUNT(id) FROM erp_inventory_invoice_child WHERE inventory_invoice_id='${id}' AND is_delete_status='0') as inventory_invoice_child_id FROM erp_inventory_invoice WHERE id='${id}'`;

        conn.query(existinventoryinvoicedata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (data[0]?.inventory_invoice_child_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'inventory Invoice In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deleteinventoryinvoicedata = `CALL delete_inventory_invoice(?,?)`;
                    conn.query(deleteinventoryinvoicedata,[id,entry_date],(error,data) => {
                        if (error) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'inventory Invoice Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {     
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `inventory Invoice  Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`inventory Invoice `,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'inventory Invoice Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    },

    // DELETE inventory INVOICE CHILD DATA API //
    deleteinventoryinvoicechilddata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'inventory Invoice Child Deleted Successfully',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var deleteinventoryinvoicechilddata = `CALL delete_inventory_invoice_child(?,?)`;
        conn.query(deleteinventoryinvoicechilddata,[id,entry_date],(error,data) => {
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
                const ip = `inventory Invoice  Deleted With This Device ID ${HeaderData.device_id} `;
                const loginuserdetails = `CALL get_user_details(?)`;
                conn.query(loginuserdetails,[user_id],function(error,userdata){
                    if(userdata[0])
                    {   
                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`inventory Invoice `,entry_date],function(error,data){
                
                        });
                    }
                });
                res?.send({ Status:200,Count:1,Message:'inventory Invoice Child Deleted Successfully',Data:[] });
                next();
                return;
            }
        });
    }
};


export default AllInventoryInvoiceApis;
    

