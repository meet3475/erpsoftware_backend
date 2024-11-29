import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllPartyBrokerApis = {
    
    // INSERT AND UPDATE PARTY BROKER DATA API //
    createpartybroker: (req,res,next) => {

        let body  = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const party_group_id = body?.party_group_id ? body?.party_group_id : 0;
        const company_id  = body?.company_id ? body?.company_id  : 0;
        const state_id = body?.state_id ? body?.state_id  : 0;
        const account_head_id = body?.account_head_id ? body?.account_head_id  : 0;
        const broker_id = body?.broker_id ? body?.broker_id  : 0;
        const sales_person_id = body?.sales_person_id ? body?.sales_person_id  : 0;
        const sales_man_id = body?.sales_man_id ? body?.sales_man_id : 0;
        const transporter_id = body?.transporter_id ? body?.transporter_id : 0;
        const party_type_id = body?.party_type_id ? body?.party_type_id : 0;
        const category_id = body?.category_id ? body?.category_id : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id : 0; 
        const status_id = body?.status_id ? body?.status_id : 0;
        const tds_on_id = body?.tds_on_id ? body?.tds_on_id : 0;
        const party_name = body?.party_name ? body?.party_name.trim().toLowerCase() : '';
        const party_image = body?.party_image ? body?.party_image : '';
        const party_gst_no = body?.party_gst_no ? body?.party_gst_no.trim() : '';
        const party_address_1 = body?.party_address_1 ? body?.party_address_1.trim().toLowerCase() : '';
        const party_address_2 = body?.party_address_2 ? body?.party_address_2.trim().toLowerCase() : '';
        const party_area = body?.party_area ? body?.party_area.trim().toLowerCase() : '';
        const party_city = body?.party_city ? body?.party_city.trim().toLowerCase() : '';
        const party_pincode = body?.party_pincode ? body?.party_pincode.trim() : 0;
        const party_country = body?.party_country ? body?.party_country.trim().toLowerCase() : '';
        const party_area_code = body?.party_area_code ? body?.party_area_code.trim() : '';
        const contact_person_1 = body?.contact_person_1 ? body?.contact_person_1.trim() : '';
        const contact_person_2 = body?.contact_person_2 ? body?.contact_person_2.trim() : '';
        const contact_person_image = body?.contact_person_image ? body?.contact_person_image : '';
        const party_mobile_1 = body?.party_mobile_1 ? body?.party_mobile_1 : '';
        const party_mobile_2 = body?.party_mobile_2 ? body?.party_mobile_2 : '';
        const party_landline = body?.party_landline ? body?.party_landline : '';
        const party_email = body?.party_email ? body?.party_email.trim().toLowerCase() : '';
        const party_cc_email = body?.party_cc_email ? body?.party_cc_email.trim().toLowerCase() : '';
        const party_narration = body?.party_narration ? body?.party_narration.trim().toLowerCase() : '';
        const party_pancard_no = body?.party_pancard_no ? body?.party_pancard_no.trim() : '';
        const base_value = body?.base_value ? body?.base_value : '';
        const party_fssai = body?.party_fssai ? body?.party_fssai : '';
        const is_default = body?.is_default ? body?.is_default : 0;
        const party_opening_balance = body?.party_opening_balance ? body?.party_opening_balance : '';
        // const opening_balance_type = body?.opening_balance_type ? body?.opening_balance_type.trim().toLowerCase() : 'none';
        const opening_balance_type = body?.opening_balance_type ? body?.opening_balance_type.trim().toLowerCase() : 'dr';
        const party_discount = body?.party_discount ? body?.party_discount : 0;
        const party_auto_entry = body?.party_auto_entry ? body?.party_auto_entry : 0;
        const party_auto_email = body?.party_auto_email ? body?.party_auto_email : 0;
        const party_credit_periods = body?.party_credit_periods ? body?.party_credit_periods : '';
        const party_credit_amount = body?.party_credit_amount ? body?.party_credit_amount : '';
        const party_client_credit_date = body?.party_client_credit_date ? body?.party_client_credit_date : constant.moment().format('YYYY-MM-DD');
        const is_tds_applicable = body?.is_tds_applicable ? body?.is_tds_applicable : 0;
        const party_applicable_rate = body?.party_applicable_rate ? body?.party_applicable_rate : 0;
        const is_sms_allow = body?.is_sms_allow ? body?.is_sms_allow : 0;
        const is_tcs_applicable = body?.is_tcs_applicable ? body?.is_tcs_applicable : 0;
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
        if (id > 0) 
        {   
            const updatepartybroker = `CALL create_party_broker(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatepartybroker,[id,user_id,party_group_id,company_id,state_id,account_head_id,broker_id,sales_person_id,sales_man_id,transporter_id,party_type_id,category_id,nature_of_payment_id,status_id,tds_on_id,party_name,party_image,party_gst_no,party_address_1,party_address_2,party_area,party_city,party_pincode,party_country,party_area_code,contact_person_1,contact_person_2,contact_person_image,party_mobile_1,party_mobile_2,party_landline,party_email,party_cc_email,party_narration,party_pancard_no,base_value,party_fssai,is_default,party_opening_balance,opening_balance_type,party_discount,party_auto_entry,party_auto_email,party_credit_periods,party_credit_amount,party_client_credit_date,is_tds_applicable,party_applicable_rate,is_sms_allow,is_tcs_applicable,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'Party Updated',Data:[] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `Party Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Party Broker`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createpartybroker = `CALL create_party_broker(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createpartybroker,[id,user_id,party_group_id,company_id,state_id,account_head_id,broker_id,sales_person_id,sales_man_id,transporter_id,party_type_id,category_id,nature_of_payment_id,status_id,tds_on_id,party_name,party_image,party_gst_no,party_address_1,party_address_2,party_area,party_city,party_pincode,party_country,party_area_code,contact_person_1,contact_person_2,contact_person_image,party_mobile_1,party_mobile_2,party_landline,party_email,party_cc_email,party_narration,party_pancard_no,base_value,party_fssai,is_default,party_opening_balance,opening_balance_type,party_discount,party_auto_entry,party_auto_email,party_credit_periods,party_credit_amount,party_client_credit_date,is_tds_applicable,party_applicable_rate,is_sms_allow,is_tcs_applicable,entry_date,update_date],(error,data) => {

                if (error || data[0].length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'Party Inserted',Data:data[0][0] });
                    next();

                    if (Number(data[0][0].account_head_id) == 6 && data[0][0].party_opening_balance > 0) 
                    {
                        const depreciationrate = `CALL create_default_depreciation_rate(?,?,?,?,?,?,?,?,?)`;
                        conn.query(depreciationrate,[0,user_id,company_id,data[0][0].party_id,data[0][0].party_opening_balance,0,0,entry_date,update_date],(error,data) => {
                            
                        });
                    }

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `Party Created With This Device ID ${HeaderData.device_id}`;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Party Broker`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET PARTY BROKER DETAILS DATA API //
    getpartybrokerdetails: (req,res,next) => {

        const party_broker_id = req.body?.party_broker_id ? req.body?.party_broker_id : 0;
        const year_id = req.body?.year_id ? req.body?.year_id : 0;
        const company_id = req.body?.company_id ? req.body?.company_id : 0;

        if (party_broker_id.length == 0 || party_broker_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Party Broker ID',Data:[] });
            next();
            return;
        }
        if (year_id.length == 0 || year_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Year ID',Data:[] });
            next();
            return;
        }
        if (company_id.length == 0 || company_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter company ID',Data:[] });
            next();
            return;
        }

        var getpartybrokerdetails = `CALL get_party_broker_details(?,?,?)`;
        conn.query(getpartybrokerdetails,[party_broker_id,year_id,company_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                // data[0][0].party_client_credit_date = constant.moment(data[0][0].party_client_credit_date).format('YYYY-M-DD');

                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET PARTY BROKER LISTING DATA API //
    getpartybrokerlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'party.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const account_head_id = body?.account_head_id ? body?.account_head_id : 0;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`party.id as party_id,party.is_primary,`;

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

        const search_party_name = search?.party_name ? search?.party_name.trim().toLowerCase() : '';
        const search_party_gst_no = search?.party_gst_no ? search?.party_gst_no : '';
        const search_party_address_1 = search?.party_address_1 ? search?.party_address_1.trim().toLowerCase() : '';
        const search_party_city = search?.party_city ? search?.party_city.trim().toLowerCase() : '';
        const search_party_mobile_1 = search?.party_mobile_1 ? search?.party_mobile_1 : '';
        const search_state_name = search?.state_name ? search?.state_name.trim().toLowerCase() : '';
        const search_state_code = search?.state_code ? search?.state_code : '';
        const search_type = search?.type ? search?.type.trim().toLowerCase() : '';
        const search_party_type = search?.party_type ? search?.party_type.trim().toLowerCase() : '';

        const sea_account_head_id = account_head_id !=0 ? ` AND party.account_head_id='${account_head_id}'` : '';
        const sea_party_name =  search_party_name != '' ? ` AND party.party_name LIKE '%${search_party_name}%'` : '';
        const sea_party_gst_no =  search_party_gst_no != '' ? ` AND party.party_gst_no LIKE '%${search_party_gst_no}%'` : '';
        const sea_party_address_1 =  search_party_address_1 != '' ? ` AND party.party_address_1 LIKE '%${search_party_address_1}%'` : '';
        const sea_party_city =  search_party_city != '' ? ` AND party.party_city LIKE '%${search_party_city}%'` : '';
        const sea_party_mobile_1 =  search_party_mobile_1 != '' ? ` AND party.party_mobile_1 LIKE '%${search_party_mobile_1}%'` : '';
        const sea_state_name =  search_state_name != '' ? ` AND (state.global_name LIKE '%${search_state_name}%' OR state.global_code LIKE '%${search_state_code}%')` : '';
        const sea_type =  search_type != '' ? ` AND head.account_head_name LIKE '%${search_type}%'` : '';
        const sea_party_type =  search_party_type != '' ? ` AND type.type_name LIKE '%${search_party_type}%' AND type.type_parent_name='party'` : '';

        var getpartybrokerlistingdata = `SELECT ${All_ID_Query} party.party_name,party.party_gst_no,party.party_address_1,party.party_city,party.party_mobile_1,state.global_name as state_name,state.global_code as state_code,head.account_head_name as type,party.party_opening_balance FROM erp_party as party LEFT JOIN erp_global as state ON state.id=party.state_id LEFT JOIN erp_account_head as head ON head.id=party.account_head_id LEFT JOIN erp_type as type ON type.id=party.party_type_id WHERE party.is_delete_status='0' AND party.party_status='active' AND party.user_id IN ('0','${user_id}') ${sea_account_head_id} ${sea_party_name} ${sea_party_gst_no} ${sea_party_address_1} ${sea_party_city} ${sea_party_mobile_1} ${sea_state_name} ${sea_type} ${sea_party_type} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getpartybrokerlistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.state_name = element.state_name + `-${element.state_code}`;
                element.export = constant.DefaultExportopetions;
            });

            var totalpartybrokercount = `SELECT COUNT(party.id) as Count FROM erp_party as party LEFT JOIN erp_global as state ON state.id=party.state_id LEFT JOIN erp_account_head as head ON head.id=party.account_head_id WHERE party.is_delete_status='0' AND party.party_status='active' AND party.user_id IN ('0','${user_id}') ${sea_account_head_id} ${sea_party_name} ${sea_party_gst_no} ${sea_party_address_1} ${sea_party_city} ${sea_party_mobile_1} ${sea_state_name} ${sea_type} ${sea_party_type} `;
        
            conn.query(totalpartybrokercount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // DELETE PARTY DATA API //
    deletepartydata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid party ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }
        
        var existpartydata = `SELECT id as party_id,(SELECT COUNT(id) FROM erp_journal_purchase WHERE supplier_id='${id}' AND is_delete_status='0') as journal_purchase_id,(SELECT COUNT(id) FROM erp_journal_purchase_child WHERE supplier_id='${id}' AND is_delete_status='0') as journal_purchase_child_id,(SELECT COUNT(id) FROM erp_purchase_return WHERE supplier_id='${id}' AND is_delete_status='0') as purchase_return_supplier_id,(SELECT COUNT(id) FROM erp_purchase_return WHERE broker_id='${id}' AND is_delete_status='0') as purchase_return_broker_id,(SELECT COUNT(id) FROM erp_purchase_return WHERE haste_id='${id}' AND is_delete_status='0') as purchase_return_haste_id,(SELECT COUNT(id) FROM erp_purchase_return WHERE transporter_id='${id}' AND is_delete_status='0') as purchase_return_transporter_id,(SELECT COUNT(id) FROM erp_purchase_return WHERE buyer_id='${id}' AND is_delete_status='0') as purchase_return_buyer_id,(SELECT COUNT(id) FROM erp_purchase_return_child WHERE party_id='${id}' AND is_delete_status='0') as purchase_return_child_id,(SELECT COUNT(id) FROM erp_purchase_tax_invoice WHERE supplier_id='${id}' AND is_delete_status='0') as purchase_tax_invoice_supplier_id,(SELECT COUNT(id) FROM erp_purchase_tax_invoice WHERE broker_id='${id}' AND is_delete_status='0') as purchase_tax_invoice_broker_id,(SELECT COUNT(id) FROM erp_purchase_tax_invoice WHERE mill_id='${id}' AND is_delete_status='0') as purchase_tax_invoice_mill_id,(SELECT COUNT(id) FROM erp_voucher WHERE party_id='${id}' AND is_delete_status='0') as voucher_id,(SELECT COUNT(id) FROM erp_sale WHERE buyer_id='${id}' AND is_delete_status='0') as sale_buyer_id,(SELECT COUNT(id) FROM erp_sale_child WHERE jober_id='${id}' AND is_delete_status='0') as sale_child_jober_id,(SELECT COUNT(id) FROM erp_sale_return WHERE buyer_id='${id}' AND is_delete_status='0') as sale_return_buyer_id,(SELECT COUNT(id) FROM erp_sale_return WHERE haste_id='${id}' AND is_delete_status='0') as sale_return_haste_id,(SELECT COUNT(id) FROM erp_sale_return WHERE broker_id='${id}' AND is_delete_status='0') as sale_return_broker_id,(SELECT COUNT(id) FROM erp_sale_return_child WHERE party_id='${id}' AND is_delete_status='0') as sale_return_child_party_id,(SELECT COUNT(id) FROM erp_inventory WHERE jober_id='${id}' AND is_delete_status='0') as inventory_jober_id,(SELECT COUNT(id) FROM erp_inventory WHERE broker_id='${id}' AND is_delete_status='0') as inventory_broker_id,(SELECT COUNT(id) FROM erp_inventory WHERE haste_id='${id}' AND is_delete_status='0') as inventory_haste_id,(SELECT COUNT(id) FROM erp_inventory_receive WHERE jober_id='${id}' AND is_delete_status='0') as inventory_receive_jober_id FROM erp_party WHERE id='${id}'`;
        
        conn.query(existpartydata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                if (data[0].journal_purchase_id > 0 || data[0].journal_purchase_child_id > 0 || data[0].purchase_return_supplier_id > 0 || data[0].purchase_return_broker_id > 0 || data[0].purchase_return_haste_id > 0 || data[0].purchase_return_transporter_id > 0 || data[0].purchase_return_buyer_id > 0 || data[0].purchase_return_child_id > 0 || data[0].purchase_tax_invoice_supplier_id > 0 || data[0].purchase_tax_invoice_broker_id > 0 || data[0].purchase_tax_invoice_mill_id > 0 || data[0].voucher_id > 0 || data[0].sale_buyer_id > 0 || data[0].sale_child_jober_id > 0 || data[0].sale_return_buyer_id > 0 || data[0].sale_return_haste_id > 0 || data[0].sale_return_broker_id > 0 || data[0].sale_return_child_party_id > 0 || data[0].inventory_jober_id > 0 || data[0].inventory_broker_id > 0 || data[0].inventory_haste_id > 0 || data[0].inventory_receive_jober_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'party In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletepartydata = `CALL delete_party(?,?)`;
                    conn.query(deletepartydata,[id,entry_date],(error,data) => {
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
                            const ip = `party Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`party`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'party Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    },

    // MERGE PARTY DATA API //
    mergeparty: (req,res,next) => {

        let body  = req?.body;
        const from_id = body?.from_id ? Number(body?.from_id) : 0;
        const user_id = body?.user_id ? Number(body?.user_id) : 0;
        const to_id = body?.to_id ? body?.to_id : 0;
        const merge_amount = body?.merge_amount ? body?.merge_amount : 0;
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (from_id.length == 0 || from_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter From ID',Data:[] });
            next();
            return;
        }
        if (to_id.length == 0 || to_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter To ID',Data:[] });
            next();
            return;
        }
        if (merge_amount.length == 0 || merge_amount == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Amount ID',Data:[] });
            next();
            return;
        }

        if (from_id > 0) 
        {   
            const mergeparty = `CALL create_party_merge(?,?,?)`;
            conn.query(mergeparty,[from_id,merge_amount,entry_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Merge!!!!',Data:error });
                    next();
                    return;
                }
                else
                {
                    res?.send({ Status:200,Count:0,Message:'Party Merge',Data:[] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `Party Merge With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0]?.user_position,ip,`Party Merge`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        if (to_id > 0) 
        {
            var deletepartydata = `CALL delete_party(?,?)`;
            conn.query(deletepartydata,[to_id,entry_date],(error,data) => {
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
                    const ip = `party Deleted With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0]?.user_position,ip,`party`,entry_date],function(error,data){
                            });
                        }
                    });
                }
            });
        }
    },

    // GET PARTY AND COMPANY DETAILS DATA API //
    getpartyandcompanydetails: (req,res,next) => {

        const user_id = req.body?.user_id ? req.body?.user_id : 0;
        const company_id = req.body?.company_id ? req.body?.company_id : 0;
        const party_id = req.body?.party_id ? req.body?.party_id : 0;

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
        if (party_id.length == 0 || party_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Party ID',Data:[] });
            next();
            return;
        }

        var getpartyandcompanydetails = `CALL get_party_and_company_details(?,?,?)`;
        conn.query(getpartyandcompanydetails,[user_id,company_id,party_id],(error,data) => {
            
            if (error || data[0]?.length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },
};

export default AllPartyBrokerApis;

         
		