
import constant from '../Config/constant.js';
import conn from "../Config/connection.js";


const AllCompanyApis = {

    // INSERT AND UPDATE COMPANY DATA API //
    createcompany: (req,res,next) => {
        
        let body = req?.body;
        let bank_data = req?.body?.bank_data;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_name = body?.company_name ? body?.company_name.toLowerCase().trim() : '';
        const company_address = body?.company_address ? body?.company_address.toLowerCase().trim() : '';
        const year_id = body?.year_id ? body?.year_id : 0;
        const industries_id = body?.industries_id ? body?.industries_id : 0;
        const business_group = body?.business_group ? body?.business_group.toLowerCase().trim() : '';
        const company_code = body?.company_code ? body?.company_code.trim() : '';
        const company_address_2 = body?.company_address_2 ? body?.company_address_2.toLowerCase().trim() : ''; 
        const state_id = body?.state_id ? body?.state_id : 0;
        const company_phone = body?.company_phone ? body?.company_phone : '';
        const company_mobile = body?.company_mobile ? body?.company_mobile : '';
        const company_email = body?.company_email ? body?.company_email.trim().toLowerCase() : '';
        const company_open_status = body?.company_open_status ? body?.company_open_status.trim().toLowerCase() : 'open';
        const company_pan_no = body?.company_pan_no ? body?.company_pan_no : '';
        const company_tan_no = body?.company_tan_no ? body?.company_tan_no : '';
        const company_cin_no = body?.company_cin_no ? body?.company_cin_no : '';
        const company_fssai_no = body?.company_fssai_no ? body?.company_fssai_no : '';
        const company_declaration = body?.company_declaration ? body?.company_declaration.trim().toLowerCase() : '';
        const company_order_declaration = body?.company_order_declaration ? body?.company_order_declaration.trim().toLowerCase() : '';
        const company_juridiction = body?.company_juridiction ? body?.company_juridiction.trim().toLowerCase() : '';
        const company_bakup_email = body?.company_bakup_email ? body?.company_bakup_email.trim().toLowerCase() : '';
        const company_video_refereance = body?.company_video_refereance ? body?.company_video_refereance.trim().toLowerCase() : 'no';
        const company_user_entry = body?.company_user_entry ? body?.company_user_entry.trim().toLowerCase() : 'no';
        const company_email_server_config = body?.company_email_server_config ? body?.company_email_server_config.trim().toLowerCase() : 'smtp';
        const company_gmail_email = body?.company_gmail_email ? body?.company_gmail_email.trim().toLowerCase() : '';
        const company_gmail_password = body?.company_gmail_password ? body?.company_gmail_password.trim() : '';
        const company_gmail_client_id = body?.company_gmail_client_id ? body?.company_gmail_client_id.trim() : '';
        const company_gmail_client_secreate = body?.company_gmail_client_secreate ? body?.company_gmail_client_secreate.trim() : '';
        const company_challan_no = body?.company_challan_no ? body?.company_challan_no.trim().toLowerCase() : 'accounting';
        const company_outstanding = body?.company_outstanding ? body?.company_outstanding.trim().toLowerCase() : 'show';
        const company_matrix_view = body?.company_matrix_view ? body?.company_matrix_view.trim().toLowerCase() : 'no';
        const company_hide_nostock_quality_delivery = body?.company_hide_nostock_quality_delivery ? body?.company_hide_nostock_quality_delivery.trim().toLowerCase() : 'no';
        const company_delivery_quality_filter = body?.company_delivery_quality_filter ? body?.company_delivery_quality_filter.trim().toLowerCase() : 'no';
        const company_purchase_delivery_quality_filter = body?.company_purchase_delivery_quality_filter ? body?.company_purchase_delivery_quality_filter.trim().toLowerCase() : 'no';
        const company_quality_stock = body?.company_quality_stock ? body?.company_quality_stock.trim().toLowerCase() : 'godown';
        const company_rate_help_factor = body?.company_rate_help_factor ? body?.company_rate_help_factor.trim() : '';
        const company_visit_success_buffer = body?.company_visit_success_buffer ? body?.company_visit_success_buffer.trim() : '';
        const company_visit_duplication_filter_minute = body?.company_visit_duplication_filter_minute ? body?.company_visit_duplication_filter_minute.trim() : '';
        const compnay_case_limit = body?.compnay_case_limit ? body?.compnay_case_limit.trim() : '';
        const company_deafult_bank_charge_head = body?.company_deafult_bank_charge_head ? body?.company_deafult_bank_charge_head.trim() : '';
        const company_auto_frezz_days = body?.company_auto_frezz_days ? body?.company_auto_frezz_days.trim() : '';
        const company_sales_cost_percentage_for_gp = body?.company_sales_cost_percentage_for_gp ? body?.company_sales_cost_percentage_for_gp.trim() : '';
        const company_block_letter = body?.company_block_letter ? body?.company_block_letter.trim().toLowerCase() : 'lower';
        const company_auto_party_lock = body?.company_auto_party_lock ? body?.company_auto_party_lock.trim().toLowerCase() : 'no';
        const company_strict_credit_mode = body?.company_strict_credit_mode ? body?.company_strict_credit_mode.trim().toLowerCase() : 'no';
        const company_header_serch = body?.company_header_serch ? body?.company_header_serch.trim().toLowerCase() : 'none';
        const company_gst_date_config = body?.company_gst_date_config ? body?.company_gst_date_config.trim().toLowerCase() : 'current';
        const company_tcs_applicable = body?.company_tcs_applicable ? body?.company_tcs_applicable.trim().toLowerCase() : 'no';
        const company_shipping_without_gst = body?.company_shipping_without_gst ? body?.company_shipping_without_gst.trim().toLowerCase() : 'no';
        const company_proprietary = body?.company_proprietary ? body?.company_proprietary.trim().toLowerCase() : '';
        const company_website = body?.company_website ? body?.company_website.trim() : '';
        const company_invoice_watermark = body?.company_invoice_watermark ? body?.company_invoice_watermark.trim() : '';
        const company_sales_quality_rate_factor = body?.company_sales_quality_rate_factor ? body?.company_sales_quality_rate_factor.trim().toLowerCase() : 'type';
        const company_barcode_scan_config = body?.company_barcode_scan_config ? body?.company_barcode_scan_config.trim().toLowerCase() : 'qualityid'; 
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');

        
        const usecompanydata = `CALL get_use_company_data(?,?,?)`;
        conn.query(usecompanydata,[company_name,company_code,id],(error,data) => {

            if (data[0][0]?.company_name == company_name) 
            {
                res?.send({ Status:400,Count:0,Message:'This Company Name Already Use',Data:[] });
                next();
                return;
            }
            if (data[1][0]?.company_code == company_code) 
            {
                res?.send({ Status:400,Count:0,Message:'This Company Code Already Use',Data:[] });
                next();
                return;
            }

            if (id > 0) 
            {
                const updatecompanydata = `CALL update_company_data(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updatecompanydata,[id,user_id,company_name,company_address,year_id,industries_id,business_group,company_code,company_address_2,state_id,company_phone,company_mobile,company_email,company_open_status,company_pan_no,company_tan_no,company_cin_no,company_fssai_no,company_declaration,company_order_declaration,company_juridiction,company_bakup_email,company_video_refereance,company_user_entry,company_email_server_config,company_gmail_email,company_gmail_password,company_gmail_client_id,company_gmail_client_secreate,company_challan_no,company_outstanding,company_matrix_view,company_hide_nostock_quality_delivery,company_delivery_quality_filter,company_purchase_delivery_quality_filter,company_quality_stock,company_rate_help_factor,company_visit_success_buffer,company_visit_duplication_filter_minute,compnay_case_limit,company_deafult_bank_charge_head,company_auto_frezz_days,company_sales_cost_percentage_for_gp,company_block_letter,company_auto_party_lock,company_strict_credit_mode,company_header_serch,company_gst_date_config,company_tcs_applicable,company_shipping_without_gst,company_proprietary,company_website,company_invoice_watermark,company_sales_quality_rate_factor,company_barcode_scan_config,update_date],(error,data) => {

                    if (error)
                    {   
                        res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                        next();
                        return;
                    }
                    else
                    {
                        res?.send({ Status:200,Count:0,Message:'Company Updated',Data:[] });
                        next();

                        // if (bank_data && bank_data.length > 0) 
                        // {
                        //     // CALL BANK INSERT API //
                        //     res?.send(AllCompanyApis.createbank(id,user_id,year_id,bank_data,req?.headers));
                        // }
                        
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                        const ip = `Company Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Company`,entry_date],function(error,data){
                                    
                                });
                            }
                        });
                    }  
                });
            }
            else
            {
                const createcompany = `CALL create_company(?,?,?,?,?,?,?,?,?)`;
                conn.query(createcompany,[user_id,company_name,company_address,year_id,industries_id,business_group,company_code,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                        next();
                        return;
                    }
                    else
                    {   
                        // INSERT COMPANY & USER RELATION IN THE TABLE //
                        const createcompanyuserrelation = `CALL create_company_user_relation(?,?)`;
                        conn.query(createcompanyuserrelation,[user_id,data[0][0].company_id],(error,userrelationdata) => {
                        });

                        // INSERT COMPANY DEFAULT BRANCH IN THE TABLE //
                        const createdefaultbranch = `CALL create_default_branch(?,?,?,?,?,?)`;
                        conn.query(createdefaultbranch,[user_id,data[0][0].company_id,413,`main branch`,entry_date,update_date],(error,branchdata) => {
                            
                            if (branchdata[0]) 
                            {   
                                data[0][0].branch_id = branchdata[0][0].branch_id;
                                data[0][0].branch_name = branchdata[0][0].branch_name;
                                data[0][0].state_id = branchdata[0][0].state_id;
                                
                                // INSERT COMPANY YEAR IN THE TABLE //
                                const createcompanyyear = `CALL create_company_year(?,?,?,?)`;
                                conn.query(createcompanyyear,[branchdata[0][0].company_id,data[0][0].year_id,branchdata[0][0].branch_id,`1`],(error,companyyeardata) => {
                                    
                                });

                                const createdefaultgodown = `CALL create_default_godown(?,?,?,?,?,?,?)`;
                                conn.query(createdefaultgodown,[user_id,data[0][0].company_id,data[0][0].year_id,branchdata[0][0].branch_id,`main godown`,entry_date,update_date],(error,godowndata) => {
                                    
                                    data[0][0].godown_id = godowndata[0][0].godown_id;
                                    data[0][0].godown_name = godowndata[0][0].godown_name;

                                    const natureofpaymentdata = `SELECT id as nature_of_payment_id FROM erp_type WHERE type_parent_name='nature_of_payment'`;
                                    conn.query(natureofpaymentdata,(error,naturedata) => {

                                        if (naturedata && naturedata?.length > 0) 
                                        {
                                            naturedata.forEach(naturevalue => {

                                                const statusdata = `SELECT id as status_id FROM erp_status WHERE 1=1`;
                                                conn.query(statusdata,(error,statusdata) => {

                                                    if (statusdata && statusdata?.length > 0) 
                                                    {
                                                        statusdata.forEach(statusvalue => {
                                                            
                                                            const tdsratedata = `CALL create_default_tds_rate(?,?,?,?,?,?,?,?,?,?,?)`;
                                                            conn.query(tdsratedata,[0,data[0][0].user_id,data[0][0].company_id,data[0][0].branch_id,data[0][0].year_id,data[0][0].godown_id,naturevalue.nature_of_payment_id,statusvalue.status_id,0,entry_date,update_date],(error,tdsratedata) => {

                                                            });
                                                        });
                                                    }
                                                });
                                            });                                            
                                        }
                                    });

                                    res?.send({ Status:200,Count:0,Message:'Company Inserted',Data:data[0][0] });
                                    next();
                                });                               
                            }
                        });

                        const default_party_arrya = [
                            {
                                "party_name": "gst tax payable",
                                "account_head_id": 91,
                            },
                            {
                                "party_name": "tds on value addition",
                                "account_head_id": 42,
                            },
                            {
                                "party_name": "tds on mill",
                                "account_head_id": 42,
                            },
                            {
                                "party_name": "closing stock",
                                "account_head_id": 25,
                            },
                            {
                                "party_name": "opening stock",
                                "account_head_id": 47,
                            },
                            {
                                "party_name": "Sales Journal",
                                "account_head_id": 40,
                            },
                            {
                                "party_name": "value addition invoice",
                                "account_head_id": 90,
                            },
                            {
                                "party_name": "mill invoice",
                                "account_head_id": 89,
                            },
                            {
                                "party_name": "purchase journal",
                                "account_head_id": 79,
                            },
                            {
                                "party_name": "purchase return",
                                "account_head_id": 39,
                            },
                            {
                                "party_name": "invoice",
                                "account_head_id": 72,
                            },
                            {
                                "party_name": "bill of supply",
                                "account_head_id": 57,
                            },
                            {
                                "party_name": "purchase tax invoice",
                                "account_head_id": 56,
                            },
                            {
                                "party_name": "sales journal",
                                "account_head_id": 80,
                            },
                            {
                                "party_name": "sales return",
                                "account_head_id": 38,
                            },
                            {
                                "party_name": "invoice",
                                "account_head_id": 71,
                            },
                            {
                                "party_name": "bill of supply",
                                "account_head_id": 55,
                            },
                            {
                                "party_name": "sale tax invoice",
                                "account_head_id": 54,
                            },
                            {
                                "party_name": "trading account 2022-2023",
                                "account_head_id": 45,
                            },
                            {
                                "party_name": "profit and loss 2022-2023",
                                "account_head_id": 46,
                            },
                            {
                                "party_name": "tds on payment of salary",
                                "account_head_id": 42,
                            },
                            {
                                "party_name": "discount received",
                                "account_head_id": 33,
                            },
                            {
                                "party_name": "discount allowed",
                                "account_head_id": 32,
                            },
                            {
                                "party_name": "cash",
                                "account_head_id": 18,
                            },
                            {
                                "party_name": "interim igst receivable",
                                "account_head_id": 70,
                            },
                            {
                                "party_name": "interim cgst receivable",
                                "account_head_id": 69,
                            },
                            {
                                "party_name": "interim sgst receivable",
                                "account_head_id": 68,
                            },
                            {
                                "party_name": "interim igst payable",
                                "account_head_id": 67,
                            },
                            {
                                "party_name": "interim cgst payable",
                                "account_head_id": 66,
                            },
                            {
                                "party_name": "interim sgst payable",
                                "account_head_id": 65,
                            },
                            {
                                "party_name": "igst receivable",
                                "account_head_id": 64,
                            },
                            {
                                "party_name": "cgst receivable",
                                "account_head_id": 63,
                            },
                            {
                                "party_name": "sgst receivable",
                                "account_head_id": 62,
                            },
                            {
                                "party_name": "igst payable",
                                "account_head_id": 61,
                            },
                            {
                                "party_name": "cgst payable",
                                "account_head_id": 60,
                            },
                            {
                                "party_name": "sgst payable",
                                "account_head_id": 59,
                            },
                            {
                                "party_name": "grey invoice",
                                "account_head_id": 56,
                            },
                            {
                                "party_name": "discount allowed (gst)",
                                "account_head_id": 32,
                            },
                            {
                                "party_name": "depreciation",
                                "account_head_id": 48,
                            },
                            {
                                "party_name": "secure laon",
                                "account_head_id": 24,
                            },
                            {
                                "party_name": "credit note",
                                "account_head_id": 98,
                            }
                        ]

                        default_party_arrya.forEach(defualtparty => {
                            
                            // INSERT DEFAULT PARTY OF ACCOUNT HEAD RELATED //
                            const createdefaultparty = `CALL create_default_party(?,?,?,?,?,?,?)`;
                            conn.query(createdefaultparty,[user_id,data[0][0].company_id,defualtparty.account_head_id,defualtparty.party_name,1,entry_date,update_date],(error,defualtpartydata) => {

                            });
                        });

                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                        const ip = `Company CREATED With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Company`,entry_date],function(error,data){
                                    
                                });
                            }
                        });
                    }  
                });
            }
        });
    },

    // GET SELECTED YEAR COMPANY AND BRANCH DATA API //
    selectedyearcompanydata: (req,res,next) => {

        const is_mobile = req.body?.is_mobile ? req.body?.is_mobile : 0;
        const user_id = req.body?.user_id ? req.body?.user_id : 0;
        const year_id = req.body?.year_id ? req.body?.year_id : 0;
        const user_position = req.body?.user_position ? req.body?.user_position.toLowerCase() : 'admin';

        if (is_mobile.length == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Is Mobile Key',Data:[] });
            next();
            return;
        }
        if (user_id == 0 || year_id.length == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        if (year_id == 0 || year_id.length == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Year ID',Data:[] });
            next();
            return;
        }
        if (user_position.length == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter User Position',Data:[] });
            next();
            return;
        }

        if (user_position == 'staff' && is_mobile == 1) 
        {   
            var selectedyearcompanydata = `CALL selected_year_company_data(?,?)`;
            conn.query(selectedyearcompanydata,[user_id,year_id],(error,data) => {
                
                data[1] = [constant.DefaultSelect,...data[1]];
                const rootdata = data[1];
                
                var selected_year_company_branch_data = `CALL selected_year_company_branch_data(?,?)`;

                if (rootdata.length > 0) 
                {
                    for (let i = 1; i < rootdata.length; i++) 
                    {
                        conn.query(selected_year_company_branch_data,[user_id,rootdata[i].company_id], (error,data) => {
                            
                            rootdata[i].branch_data = data[1];
                            rootdata[i].branch_data = [constant.DefaultSelect,...rootdata[i].branch_data];

                            if (rootdata[i]?.branch_data.length > 0) 
                            {   
                                for (let j = 1; j < rootdata[i]?.branch_data.length; j++) 
                                {
                                    var selected_branch_godown_data = `CALL selected_branch_godown_data(?,?,?,?)`;
                                    conn.query(selected_branch_godown_data,[user_id,rootdata[i].company_id,year_id,rootdata[i]?.branch_data[j].branch_id], (error,godowndata) => {

                                        rootdata[i].branch_data[j].godown_data = godowndata[1]
                                        rootdata[i].branch_data[j].godown_data = [constant.DefaultSelect,...rootdata[i].branch_data[j].godown_data];
                                    });                                
                                }
                            }
                        });
                    }
                                
                    setTimeout(() => {
                        res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:rootdata });
                        next();
                    },500)
                }
                else
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                } 
            });
        }
        else
        {
            var selectedyearcompanydata = `CALL selected_year_company_data(?,?)`;
            conn.query(selectedyearcompanydata,[user_id,year_id], async (error,data) => {
                
                data[0] = [constant.DefaultSelect,...data[0]];
                const rootdata = data[0];
                
                var selected_year_company_branch_data = `CALL selected_year_company_branch_data(?,?)`;

                if (rootdata.length > 0) 
                {
                    for (let i = 1; i < rootdata.length; i++) 
                    {
                        conn.query(selected_year_company_branch_data,[user_id,rootdata[i].company_id], (error,data) => {
                            
                            rootdata[i].branch_data = data[0];
                            rootdata[i].branch_data = [constant.DefaultSelect,...rootdata[i].branch_data];

                            if (rootdata[i]?.branch_data.length > 0) 
                            {   
                                for (let j = 1; j < rootdata[i]?.branch_data.length; j++) 
                                {
                                    var selected_branch_godown_data = `CALL selected_branch_godown_data(?,?,?,?)`;
                                    conn.query(selected_branch_godown_data,[user_id,rootdata[i].company_id,year_id,rootdata[i]?.branch_data[j].branch_id], (error,godowndata) => {

                                        rootdata[i].branch_data[j].godown_data = godowndata[0]
                                        rootdata[i].branch_data[j].godown_data = [constant.DefaultSelect,...rootdata[i].branch_data[j].godown_data];
                                    });                                
                                }
                            }
                        });
                    }
                                
                    setTimeout(() => {
                        res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:rootdata });
                        next();
                    },500)
                }
                else
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                } 
            });
        }
    },

    // GET COMPANY DETAILS DATA API //
    getcompanydetails: (req,res,next) => {

        const company_id = req.body?.company_id ? req.body?.company_id : 0;
        if (company_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Company ID',Data:[] });
            next();
            return;
        }

        var getcompanydetails = `CALL get_company_details(?)`;
        conn.query(getcompanydetails,[company_id],(error,data) => {
            
            if (error || data[0].length == 0) 
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0][0] });
                next();
                return;
            } 
        });
    },

    // GET COMPANY LISTING DATA API //
    getloginusercompany: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'company_id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;

        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }

        const search_company_name = search?.company_name ? search?.company_name.trim().toLowerCase() : '';
        const search_company_code = search?.company_code ? search?.company_code.trim().toLowerCase() : '';
        const search_year_name = search?.year_name ? search?.year_name.trim().toLowerCase() : '';
        const search_company_address = search?.company_address ? search?.company_address.trim().toLowerCase() : '';
        const search_company_email = search?.company_email ? search?.company_email.trim().toLowerCase() : '';
        const search_company_mobile = search?.company_mobile ? search?.company_mobile.trim().toLowerCase() : '';
        const search_company_phone = search?.company_phone ? search?.company_phone.trim().toLowerCase() : '';
        
        const sea_company_name =  search_company_name != '' ? ` AND com.company_name LIKE '%${search_company_name}%'` : '';
        const sea_search_company_code =  search_company_code != '' ? ` AND com.company_code LIKE '%${search_company_code}%'` : '';
        const sea_company_address =  search_company_address != '' ? ` AND com.company_address LIKE '%${search_company_address}%'` : '';
        const sea_company_email =  search_company_email != '' ? ` AND com.company_email LIKE '%${search_company_email}%'` : '';
        const sea_company_mobile =  search_company_mobile != '' ? ` AND com.company_mobile LIKE '%${search_company_mobile}%'` : '';
        const sea_company_phone =  search_company_phone != '' ? ` AND com.company_phone LIKE '%${search_company_phone}%'` : '';
        const sea_year_name =  search_year_name != '' ? ` AND year.year_name LIKE '%${search_year_name}%'` : '';

        var getloginusercompany = `SELECT com.id as company_id,com.user_id,com.company_name,com.company_code,year.year_name,com.company_address,com.company_email,com.company_mobile,com.company_phone FROM erp_company as com LEFT JOIN erp_year as year ON year.id=com.year_id WHERE com.user_id='${user_id}' AND com.is_delete_status='0' ${sea_company_name} ${sea_search_company_code} ${sea_company_address} ${sea_company_email} ${sea_company_mobile} ${sea_company_phone} ${sea_year_name} ORDER BY ${orderby} ${orderformat} LIMIT ${total_offset},${total_limit}`;
        
        conn.query(getloginusercompany,(error,data) => {
            
            if (error || data.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(element => {
                element.company_name = element.company_name + `-${element.year_name}-${element.company_code}`;
                element.export = constant.DefaultExportopetions;
            });
           
            var totalcompanycount = `SELECT COUNT(com.id) as Count FROM erp_company as com LEFT JOIN erp_year as year ON year.id=com.year_id WHERE com.user_id='${user_id}' AND com.is_delete_status='0' ${sea_company_name} ${sea_search_company_code} ${sea_company_address} ${sea_company_email} ${sea_company_mobile} ${sea_company_phone} ${sea_year_name}`;
        
            conn.query(totalcompanycount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data.length,TotalCount:countdata[0].Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // INSERT AND UPDATE BANK DATA API //
    createbank: (Company_id,User_id,Year_id,Body,Header) => {

        let body  = Body;
        let header_data = Header;
    
        body.forEach((bankdata,index) => {
            
            const id = bankdata?.id ? bankdata?.id : 0;
            const user_id = User_id ? User_id : 0;
            const company_id = Company_id ? Company_id : 0;
            const year_id = Year_id ? Year_id : 0;
            const bank_name = bankdata?.bank_name ? bankdata?.bank_name.trim().toLowerCase() : '';
            const bank_ac_no = bankdata?.bank_ac_no ? bankdata?.bank_ac_no.trim() : '';
            const bank_branch_name = bankdata?.bank_branch_name ? bankdata?.bank_branch_name.trim().toLowerCase() : '';
            const bank_ifsc_code = bankdata?.bank_ifsc_code ? bankdata?.bank_ifsc_code.trim() : '';
            const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');

            if (id > 0) 
            {   
                const updatebank = `CALL create_bank(?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updatebank,[id,user_id,company_id,year_id,bank_name,bank_ac_no,bank_branch_name,bank_ifsc_code,entry_date,update_date],(error,data) => {

                    if (error)
                    {   
                        return({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    }
                    else
                    {                          
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `Bank Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails,[user_id],function(error,userdata){
                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Bank`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return({ Status:200,Count:0,Message:'Bank Updated',Data:[] });
                    }  
                });
            }
            else
            {
                const createbank = `CALL create_bank(?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createbank,[id,user_id,company_id,year_id,bank_name,bank_ac_no,bank_branch_name,bank_ifsc_code,entry_date,update_date],(error,data) => {

                    if (error || data.length == 0)
                    {   
                        return { Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error };
                    }
                    else
                    {   
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `Bank Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails,[user_id],(error,userdata) => {

                            if(userdata[0])
                            {   
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Bank`,entry_date],function(error,data){
                        
                                });
                            }
                        });
                        return { Status:200,Count:0,Message:'Bank Inserted',Data:data[0] };
                    }  
                });
            }
        });
    },

    // INSERT AND UPDATE COMPANY DATA API //
    createcompanyyeardefault: (req,res,next) => {
        
        let body = req?.body;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;

        const usecompanyyeardata = `SELECT COUNT(id) as id FROM erp_company_year WHERE company_id='${company_id}' AND year_id='${year_id}'`;
        conn.query(usecompanyyeardata,[company_id,year_id],(error,usecompanyyeardata) => {

            if (usecompanyyeardata[0].id <= 0) 
            {
                const createcompanyyear = `CALL create_company_year_data(?,?)`;
                conn.query(createcompanyyear,[company_id,year_id],(error,data) => {

                    if (error)
                    {   
                        res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                        next();
                        return;
                    }
                    else
                    {  
                        res?.send({ Status:200,Count:0,Message:'Data Inserted!!!!',Data:[] });
                        next();
                        return;
                    }  
                });
            }
            else
            {
                res?.send({ Status:400,Count:0,Message:'Data Already Exist',Data:[] });
                next();
                return;
            }
        });
    },

    // INSERT Party DATA To New Next Year COMPANY DATA API //
    createnextyearpartydata: (req,res,next) => {
        
        let body = req?.body;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const party_balance = body?.party_balance ? body?.party_balance : 0;
        const party_balance_type = body?.party_balance_type ? body?.party_balance_type : '';
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (party_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Party ID',Data:[] });
            next();
            return;
        }
        const exitstdata = `SELECT id FROM erp_party_opening_balance WHERE company_id='${company_id}' AND year_id='${year_id}' AND party_id='${party_id}'`;
        conn.query(exitstdata,(error,exitstingdata) => {
            
            if (error)
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                next();
                return;
            }
            else
            {
                if (exitstingdata[0]?.id && exitstingdata[0]?.id > 0) 
                {
                    const createnextyearpartydata = `CALL create_next_year_party_data(?,?,?,?,?,?,?,?)`;
                    conn.query(createnextyearpartydata,[exitstingdata[0].id,company_id,year_id,party_id,party_balance,party_balance_type,entry_date,update_date],(error,data) => {

                        if (error)
                        {   
                            res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {  
                            res?.send({ Status:200,Count:0,Message:'Data Inserted!!!!',Data:[] });
                            next();
                            return;
                        }  
                    });
                }
                else
                {
                    const createnextyearpartydata = `CALL create_next_year_party_data(?,?,?,?,?,?,?,?)`;
                    conn.query(createnextyearpartydata,[0,company_id,year_id,party_id,party_balance,party_balance_type,entry_date,update_date],(error,data) => {

                        if (error)
                        {   
                            res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {  
                            res?.send({ Status:200,Count:0,Message:'Data Inserted!!!!',Data:[] });
                            next();
                            return;
                        }  
                    });
                } 
            }           
        });
    },
};

export default AllCompanyApis;






