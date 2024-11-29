
import conn from "../Config/connection.js";
import constant from "../Config/constant.js";

const AllDropDownApis = {

    // GET All YEAR DROP DOWN DATA API //
    yeardata: (req,res,next) => {
    
        var yeardata = `CALL get_year_data()`;
        conn.query(yeardata,(error,data) => {
            if (data?.length > 0) 
            {   
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0] });
                next();
                return;
            }
            else
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }  
        });
    },

    // GET All TYPE BY PASSING PARENT NAME DROP DOWN DATA API //
    typedata: (req,res,next) => {
        
        let body = req?.body;
        const type_parent_name = body?.type_parent_name ? body?.type_parent_name.toLowerCase().trim() : '';
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;

        if (type_parent_name == '') 
        {   
            res?.send({ Status:400,Count:0, Message:'Enter Type Parent Name',Data:[] });
            next();
            return;
        }
        if (type_parent_name != 'industries') 
        {   
            if (user_id == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
                next();
                return;
            }
            if (company_id == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Enter Company ID',Data:[] });
                next();
                return;
            }
            if (branch_id == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Enter Branch ID',Data:[] });
                next();
                return;
            }
            if (year_id == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Enter Year ID',Data:[] });
                next();
                return;
            }
        }

        
        var typedata = `CALL get_type_data(?)`;
        conn.query(typedata,[type_parent_name],(error,data) => {
            if (data?.length > 0) 
            {   
                if (data[0][0].type_parent_name == 'nature_of_payment') 
                {   
                    let index_no = 0;
                    data[0]?.forEach((typedata,index) => {

                        typedata.label = typedata.label +`${typedata.type_code}`

                        const tdsratedata = `SELECT rate.id as tds_rate_id,rate.status_id,rate.tds_rate as rate,tds_status.status_name as label,rate.status_id as value FROM erp_status as tds_status LEFT JOIN erp_tds_rate as rate ON rate.status_id=tds_status.id WHERE rate.nature_of_payment_id='44' AND rate.user_id='2' AND rate.company_id<='1' AND rate.branch_id<='1' AND rate.year_id<='1' GROUP BY rate.status_id ORDER BY rate.status_id DESC`;
                        
                        conn.query(tdsratedata,(error,tdsratedata) => {

                            if (tdsratedata && tdsratedata.length > 0) 
                            {   
                                typedata.status_data=tdsratedata;
                            }
                            else
                            {
                                typedata.status_data=[];
                            }
                        });
                       index_no = index;
                    });
                    
                    // const lastindexno = data[0].length - 1;
                    // if (lastindexno == Number(index_no)) 
                    // {   
                        setTimeout(() => {
                            data[0] = [constant.DefaultSelect,...data[0]];
                            res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0] });
                            next();
                            return;
                        }, 200);
                    // }                                     
                }
                else
                {
                    data[0] = [constant.DefaultSelect,...data[0]];
                    res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0] });
                    next();
                    return;
                }
            }
            else
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }  
        });
    },

    // GET ALL ACCOUNT HEAD PARENT DATA API FOR DROP DOWN DATA API //
    allaccountheaddropdowndata: (req,res,next) => {
    
    var allaccountheaddropdowndata = `CALL get_account_head_dropdown_data()`;
	conn.query(allaccountheaddropdowndata,(error,data) => {
        
        if (data?.length > 0) 
        {   
            data[0]?.forEach(element => {
                
                element.label = element.account_head_name + ` [${element.account_head_short_name}]`;
                element.account_head_name = element.account_head_name + ` [${element.account_head_short_name}]`;
                
            });
            data[0] = [constant.DefaultSelect,...data[0]];
            res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0] });
            next();
            return;
        }
        else
        {
            res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
            next();
            return;
        }  
	});
    },

    // GET All STATE DROP DOWN DATA API //
    statedata: (req,res,next) => {
    
        var statedata = `CALL get_all_state_data()`;
        conn.query(statedata,(error,data) => {
            if (data?.length > 0) 
            {   
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0] });
                next();
                return;
            }
            else
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }  
        });
    },

    // GET ALL CATEGORY DROPDOWN DATA BY PASSING CATEGORY TYPE API //
    allcategorydropdowndata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const category_type = body?.category_type ? body?.category_type.trim().toLowerCase() : '';
        
        if (user_id == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        if (company_id == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter Company ID',Data:[] });
            next();
            return;
        }
        if (category_type == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Category Type',Data:[] });
            next();
            return;
        }
        
        const allcategorydropdowndata = `CALL get_all_category_dropdown_data(?,?,?)`;
        conn.query(allcategorydropdowndata,[user_id,company_id,category_type],(error,data) => {

            if (error || data?.length == 0)
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },

    // GET ALL PARTY BROKER GROUP DROPDOWN DATA BY PASSING COMPANY & USER ID API //
    allpartybrokergroupdropdown: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        
        if (user_id == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        if (company_id == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter Company ID',Data:[] });
            next();
            return;
        }
        
        const allpartybrokergroupdropdown = `CALL get_all_party_broker_group_dropdown(?,?)`;
        conn.query(allpartybrokergroupdropdown,[user_id,company_id],(error,data) => {

            if (error || data?.length == 0)
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },

    // GET ALL PARTY BROKER & TRANSPORTER DROPDOWN DATA API //
    allpartybrokertransporterdropdown: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const type_id = body?.type_id ? body?.type_id : 0;
        const sea_type_id = type_id && type_id != '' ? `AND party.account_head_id IN (${type_id})` : '';
        const party_name = body?.party_name ? body?.party_name.trim().toLowerCase() : '';
        const sea_party_name =  party_name != '' ? ` AND party.party_name LIKE '%${party_name}%'` : '';

        if (user_id == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        if (company_id == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter Company ID',Data:[] });
            next();
            return;
        }
        
        const allpartybrokertransporterdropdown = `SELECT party.id,party.id as value,party.party_name,party.party_name as label,party.account_head_id,head.account_head_name,party.party_address_1,party.state_id,party.is_tds_applicable,party.party_applicable_rate,party.nature_of_payment_id,party.status_id,party.tds_on_id,party.is_tcs_applicable,party.party_opening_balance,party.opening_balance_type,party.party_gst_no,party.party_mobile_1,party.party_address_2,party.party_mobile_2 FROM erp_party as party LEFT JOIN erp_account_head as head ON head.id=party.account_head_id WHERE party.company_id IN ('${company_id}','0') AND party.is_delete_status='0' ${sea_type_id} ${sea_party_name}`;
        
        conn.query(allpartybrokertransporterdropdown,(error,data) => {

            if (error || data?.length == 0)
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                if (data[0].party_address_1 != null) 
                {
                    data?.forEach(element => {
                        element.label = element.party_name + ` [${element.party_address_1}]`;
                    });    
                }
                
                data = [constant.DefaultSelect,...data];
                res?.send({ Status:200,Count:data?.length,Message:'Data Found',Data:data });
                next();
                return;
            }  
        });
    },

    // GET ALL PARTY BROKER DROPDOWN DATA API //
    allpartybrokerdropdown: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const keyword = body?.keyword ? body?.keyword.trim().toLowerCase() : 'all';
        
        if (user_id == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        if (company_id == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter Company ID',Data:[] });
            next();
            return;
        }

        const allpartybrokerdropdown = `CALL get_all_party_broker_dropdown(?,?)`;
        conn.query(allpartybrokerdropdown,[user_id,company_id],(error,data) => {
            
            if (keyword == 'all') 
            {   
                if (error || data[1]?.length == 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    data[1] = [constant.DefaultSelect,...data[1]];
                    res?.send({ Status:200,Count:data[1]?.length,Message:'Data Found',Data:data[1] });
                    next();
                    return;
                }
            }
            else
            {
                if (error || data?.length == 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    data[0] = [constant.DefaultSelect,...data[0]];
                    res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                    next();
                    return;
                }
            }
        });
    },

    // GET ALL STATUS DROPDOWN DATA API //
    allstatusdropdown: (req,res,next) => {
    
        const allstatusdropdown = `CALL get_all_status_dropdown()`;
        conn.query(allstatusdropdown,(error,data) => {

            if (error || data?.length == 0)
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },

    // GET ALL TDS ON DROPDOWN DATA API //
    alltdsondropdown: (req,res,next) => {

        const alltdsondropdown = `CALL get_all_tds_on_dropdown()`;
        conn.query(alltdsondropdown,(error,data) => {

            if (error || data?.length == 0)
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },

    // GET ALL GST DROPDOWN DATA API //
    allgstdropdown: (req,res,next) => {

        const allgstdropdown = `CALL get_all_gst_dropdown()`;
        conn.query(allgstdropdown,(error,data) => {

            if (error || data?.length == 0)
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0]?.forEach(element => {
                    element.gst_percentage = Number(element.gst_percentage);
                });
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },

    // GET ALL GODOWN DROPDOWN DATA API //
    allgodowndropdowndata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        
        if (user_id.length == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        if (company_id.length == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter Company ID',Data:[] });
            next();
            return;
        }
        if (year_id.length == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Year ID',Data:[] });
            next();
            return;
        }
        if (branch_id.length == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Branch ID',Data:[] });
            next();
            return;
        }
        
        const allgodowndropdowndata = `CALL get_all_godown_dropdown(?,?,?,?)`;
        conn.query(allgodowndropdowndata,[user_id,company_id,year_id,branch_id],(error,data) => {

            if (error || data?.length == 0)
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },

    // GET ALL MATERIAL DROPDOWN DATA API //
    allmaterialdropdown: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;

        if (user_id.length == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        if (company_id.length == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter Company ID',Data:[] });
            next();
            return;
        }

        const allmaterialdropdown = `CALL get_all_material_dropdown(?,?)`;
        conn.query(allmaterialdropdown,[user_id,company_id],(error,data) => {

            if (error || data?.length == 0)
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },

    // GET ALL BRAND DROPDOWN DATA API //
    allbranddropdown: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;

        if (user_id.length == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        if (company_id.length == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter Company ID',Data:[] });
            next();
            return;
        }

        const allbranddropdown = `CALL get_all_brand_dropdown(?,?)`;
        conn.query(allbranddropdown,[user_id,company_id],(error,data) => {

            if (error || data?.length == 0)
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },

    // GET ALL QUALITY DROPDOWN DATA API //
    allqualitydropdown: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;

        if (user_id.length == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        if (company_id.length == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter Company ID',Data:[] });
            next();
            return;
        }
        
        const allqualitydropdown = `CALL get_all_quality_dropdown(?,?,?)`;
        conn.query(allqualitydropdown,[user_id,company_id,quality_type_id],(error,data) => {

            if (error || data?.length == 0)
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0]?.forEach(element => {
                    element.quality_stock_value = '125.12';
                });

                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },

    // GET ALL MEASURMENT DROPDOWN DATA API //
    allmeasurmentdropdown: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;

        // const allmeasurmentdropdown = `CALL get_all_measurment_dropdown(?,?)`;
        const allmeasurmentdropdown = `SELECT id as value, unit_measurement_symbol as label FROM erp_unit_measurement WHERE user_id IN ('0',${user_id}) AND company_id IN ('0',${company_id}) AND id IN ('20','24','28') AND is_delete_status='0' AND unit_measurement_status='active'`;
        conn.query(allmeasurmentdropdown,(error,data) => {

            if (error || data?.length == 0)
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data = [constant.DefaultSelect,...data];
                res?.send({ Status:200,Count:data?.length,Message:'Data Found',Data:data });
                next();
                return;
            }  
        });
    },

    // GET ALL PURCHASE INVOICE DATA API //
    allpurchaseinvoicedropdown: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const supplier_id = body?.supplier_id ? body?.supplier_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;

        const allpurchaseinvoicedropdown = `CALL get_all_purchase_invoice_dropdown(?,?,?,?,?,?)`;
        conn.query(allpurchaseinvoicedropdown,[user_id,company_id,year_id,branch_id,supplier_id,quality_type_id],(error,data) => {

            if (error || data[0]?.length == 0)
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
            //     let countindex = 0;
            //     data[0].forEach(invoicedata => {
                   
            //         if (quality_type_id && quality_type_id > 0) 
            //         {
            //             const child_data = `SELECT * FROM erp_purchase_tax_invoice_child WHERE purchase_tax_invoice_id='${invoicedata.value}'`;
            //             conn.query(child_data,(error,childdata) => {
            //                 invoicedata.child_data = childdata;
            //             });
            //         }
            //         else
            //         {
            //             const child_data = `SELECT * FROM erp_journal_purchase_child WHERE journal_purchase_id='${invoicedata.value}'`;
            //             conn.query(child_data,(error,childdata) => {
            //                 invoicedata.child_data = childdata;
                            
            //             });
            //         }
            //    });
             
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },

    // GET ALL SALE INVOICE DATA API //
    allsaleinvoicedropdown: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const buyer_id = body?.buyer_id ? body?.buyer_id : 0;
        const sale_tax_id = body?.sale_tax_id ? body?.sale_tax_id : 0;

        if (buyer_id > 0) 
        {
            const allsaleinvoicedropdown = `CALL get_all_sale_invoice_dropdown(?,?,?,?,?)`;
            conn.query(allsaleinvoicedropdown,[user_id,company_id,year_id,branch_id,buyer_id],(error,data) => {
    
                if (error || data[0]?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    data[0] = [constant.DefaultSelect,...data[0]];
                    res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                    next();
                    return;
                }  
            });
        }
        if (sale_tax_id != '' && sale_tax_id != 0) 
        {
            const allsaleinvoicedropdown = `SELECT child.*,child.id as sale_tax_invoice_child_id,child.id as value,quality.quality_name,quality.quality_name as label,gst.gst_percentage,child.sale_tax_invoice_child_meter - (SELECT COALESCE(sum(sale_child.sale_return_child_meter),0) FROM erp_sale_return_child as sale_child WHERE sale_child.sale_tax_child_id=child.id) as due_meter FROM erp_sale_tax_invoice_child as child LEFT JOIN erp_quality as quality ON quality.id=child.quality_id LEFT JOIN erp_gst as gst ON gst.id=child.gst_id WHERE child.user_id='${user_id}' AND child.sale_tax_invoice_id IN (${sale_tax_id}) AND child.is_delete_status='0'`;
           
            conn.query(allsaleinvoicedropdown,(error,data) => {
    
                if (error || data?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    data.forEach(childvalue => {
                       childvalue.sale_tax_invoice_child_meter_data = JSON.parse(childvalue.sale_tax_invoice_child_meter_data); 
                    });
                    res?.send({ Status:200,Count:data?.length,Message:'Data Found',Data:data });
                    next();
                    return;
                }  
            });
        }
    },

    // GET ALL PURCHASE INVOICE CHILD DATA BY PASSING PARENT ID API //
    allpurchaseinvoicechilddatadropdown: (req,res,next) => {

        let body = req?.body;
        const purchase_id = body?.purchase_id ? body?.purchase_id : 0;
        const type = body?.type ? body?.type : 0;

        if (type && type == 'journal_purchase') 
        {
            const allpurchaseinvoicechilddatadropdown = `SELECT jou_child.*,gst.gst_percentage FROM erp_journal_purchase_child as jou_child LEFT JOIN erp_gst as gst ON gst.id=jou_child.gst_id WHERE journal_purchase_id IN (${purchase_id}) AND is_delete_status='0'`;
            conn.query(allpurchaseinvoicechilddatadropdown,(error,data) => {

                if (error || data?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Journal Purchase Child Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    res?.send({ Status:200,Count:data?.length,Message:'Data Found',Data:data });
                    next();
                    return;
                }  
            });
        }
        else
        {       
            const allpurchaseinvoicechilddatadropdown = `SELECT pur_child.*,quality.quality_name,gst.gst_percentage FROM erp_purchase_tax_invoice_child as pur_child LEFT JOIN erp_quality as quality ON quality.id=pur_child.quality_id LEFT JOIN erp_material as material ON material.id=quality.material_id LEFT JOIN erp_gst as gst ON gst.id=material.gst_id WHERE pur_child.purchase_tax_invoice_id IN (${purchase_id})`;
            conn.query(allpurchaseinvoicechilddatadropdown,(error,data) => {

                if (error || data?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Purchase Tax Invoice Child Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    res?.send({ Status:200,Count:data?.length,Message:'Data Found',Data:data });
                    next();
                    return;
                }  
            });
        }
    },

    // GET ALL MILL RECEIVE INVOICE DATA API //
    allmillreceivechallandropdown: (req,res,next) => {

        let body = req?.body;
        const mill_id = body?.mill_id ? body?.mill_id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const mill_receive_id = body?.mill_receive_id ? body?.mill_receive_id : 0;

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
        if (mill_id.length == 0 || mill_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Mill ID',Data:[] });
            next();
            return;
        }
        
        const multi_mill_receive_id = mill_receive_id != '' ? `AND mill_tax_child.mill_receive_id NOT IN (${mill_receive_id})` : '';
        // const allmillreceivechallandropdown = `CALL get_all_mill_receive_challan_dropdown(?,?,?,?,?,?)`;

        const allmillreceivechallandropdown = `SELECT mill_receive.id as value,mill_receive.mill_receive_mill_challan_no,mill_receive.mill_receive_mill_challan_no as label,mill_receive.mill_receive_taka,mill_receive.mill_receive_qty as mill_receive_meter,mill_receive.mill_receive_width,mill_receive.mill_receive_weight,mill_receive.quality_id,quality.quality_name,gst.id as gst_id,gst.gst_percentage,pur_qty.unit_measurement_symbol FROM erp_mill_receive as mill_receive LEFT JOIN erp_quality as quality ON quality.id=mill_receive.quality_id LEFT JOIN erp_material as material ON material.id=quality.material_id LEFT JOIN erp_gst as gst ON gst.id=material.gst_id LEFT JOIN erp_unit_measurement as pur_qty ON pur_qty.id=material.material_purchase_qty WHERE mill_receive.mill_id='${mill_id}' AND mill_receive.user_id='${user_id}' AND mill_receive.company_id<='${company_id}' AND mill_receive.year_id<='${year_id}' AND mill_receive.branch_id<='${branch_id}' AND mill_receive.id NOT IN (SELECT mill_tax_child.mill_receive_id FROM erp_mill_tax_invoice_child as mill_tax_child LEFT JOIN erp_mill_tax_invoice as mill_tax_par ON mill_tax_par.id=mill_tax_child.mill_tax_invoice_id WHERE mill_tax_par.user_id='${user_id}' AND mill_tax_par.company_id<='${company_id}' AND mill_tax_par.year_id<='${year_id}' AND mill_tax_par.branch_id<='${branch_id}' AND mill_tax_child.is_delete_status='0' AND mill_tax_par.is_delete_status='0' ${multi_mill_receive_id}) AND mill_receive.is_delete_status='0' AND quality.is_delete_status='0' AND material.is_delete_status='0';`

        conn.query(allmillreceivechallandropdown,(error,data) => {

            if (error || data?.length == 0)
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data = [constant.DefaultSelect,...data];
                res?.send({ Status:200,Count:data?.length,Message:'Data Found',Data:data });
                next();
                return;
            }  
        });
    },
    
    // GET ALL bank DROPDOWN DATA API //
    allbankdropdown: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;

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

        const allbankdropdown = `CALL get_all_bank_dropdown(?,?)`;
        conn.query(allbankdropdown,[user_id,company_id],(error,data) => {

            if (error || data[0].length == 0)
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },
    
    // GET LAST LF NUMBER BY PASSING INVOICE TYPE DATA API //
    lastlfnumber: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const invoice_type = body?.invoice_type ? body?.invoice_type : '';
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;

        
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
        if (invoice_type.length == 0 || invoice_type == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Invoice Type',Data:[] });
            next();
            return;
        }

        if (invoice_type == 'journalpurchase') 
        {
            const journalpurchaselfnumber = `SELECT COALESCE(journal_purchase_lf_no,0) as lf_no FROM erp_journal_purchase WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ORDER BY id DESC LIMIT 1 `;
            conn.query(journalpurchaselfnumber,(error,purchasedata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'purchase Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (purchasedata.length == 0) 
                    {   
                        purchasedata.push({"lf_no":'0'});
                    }
                                        
                    res?.send({ Status:200,Count:purchasedata?.length,Message:'Data Found',Data:purchasedata[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'greyinvoice' || invoice_type == 'finishinvoice') 
        {
            const quality_type_id = invoice_type == 'greyinvoice' ? 62 : 61;
            const greyinvoicelfnumber = `SELECT COALESCE(purchase_tax_invoice_lf_no,0) as lf_no FROM erp_purchase_tax_invoice WHERE quality_type_id = '${quality_type_id}' AND user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ORDER BY id DESC LIMIT 1 `;
            conn.query(greyinvoicelfnumber,(error,lfnodata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:' Grey OR Finish Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (lfnodata.length == 0) 
                    {   
                        lfnodata.push({"lf_no":'0'});
                    }
                   
                    res?.send({ Status:200,Count:lfnodata?.length,Message:'Data Found',Data:lfnodata[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'greypurchasereturn' || invoice_type == 'finishpurchasereturn' || invoice_type == 'creditpurchasereturn' || invoice_type == 'debitpurchasereturn') 
        {   
            const quality_type_id = invoice_type == 'greypurchasereturn' ? " AND quality_type_id = '62'" : (invoice_type == 'finishpurchasereturn' ? " AND quality_type_id = '61'" : (invoice_type == 'creditpurchasereturn' ? " AND purchase_return_type_id = '95'" : (invoice_type == 'debitpurchasereturn' ? " AND purchase_return_type_id = '96'" : "")));
            
            const purchasereturnlfnumber = `SELECT COALESCE(purchase_return_lf_no,0) as lf_no,COALESCE(purchase_return_note_no,0) as note_no FROM erp_purchase_return WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ${quality_type_id} ORDER BY id DESC LIMIT 1 `;

            conn.query(purchasereturnlfnumber,(error,returnedata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Return Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                   
                    if (returnedata.length == 0) 
                    {   
                        returnedata.push({"lf_no":"0","note_no":"0"});
                    }
                    if (returnedata[0].lf_no  == '') 
                    {   
                        returnedata[0].lf_no = '0'
                    }
                    if(returnedata[0].note_no  == '')
                    {
                        returnedata[0].note_no = '0'
                    }
                              
                    res?.send({ Status:200,Count:returnedata?.length,Message:'Data Found',Data:returnedata[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'voucherreceipt' || invoice_type == 'voucherpayment' || invoice_type == 'vouchercontra' || invoice_type == 'voucherjournal') 
        {   
            const voucher_type = invoice_type == 'voucherreceipt' || invoice_type == 'voucherpayment' ? "'receipt','payment'" : (invoice_type == 'vouchercontra' ? "'contra'" : (invoice_type == 'voucherjournal' ? "'journal'" : "''"));

            const voucherlfnumber = `SELECT COALESCE(voucher_lf_no,0) as lf_no,COALESCE(voucher_no,0) as voucher_no FROM erp_voucher WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' AND voucher_type IN (${voucher_type}) ORDER BY id DESC LIMIT 1 `;

            conn.query(voucherlfnumber,(error,voucherlfnumber) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Voucher Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (voucherlfnumber.length == 0) 
                    {   
                        voucherlfnumber.push({"lf_no":"0","voucher_no":"0"});
                    }
                    if (voucherlfnumber[0].lf_no  == '') 
                    {   
                        voucherlfnumber[0].lf_no = '0'
                    }
                    if(voucherlfnumber[0].voucher_no  == '')
                    {
                        voucherlfnumber[0].voucher_no = '0'
                    }

                    res?.send({ Status:200,Count:voucherlfnumber?.length,Message:'Data Found',Data:voucherlfnumber[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'millinvoice') 
        {
            const millinvoicelfnumber = `SELECT COALESCE(mill_tax_invoice_lf_no,0) as lf_no FROM erp_mill_tax_invoice WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ORDER BY id DESC LIMIT 1 `;
            conn.query(millinvoicelfnumber,(error,milledata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Mill Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (milledata.length == 0) 
                    {   
                        milledata.push({"lf_no":'0'});
                    }
                                        
                    res?.send({ Status:200,Count:milledata?.length,Message:'Data Found',Data:milledata[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'salereturn' || invoice_type == 'salecredit' || invoice_type == 'saledebit') 
        {   
            const quality_type_id = invoice_type == 'salereturn' ? 53 : (invoice_type == 'salecredit' ? 98 : (invoice_type == 'saledebit' ? 97 : 0));

            const salereturnlfnumber = `SELECT COALESCE(sale_return_lf_no,0) as lf_no FROM erp_sale_return WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND sale_return_type_id='${quality_type_id}' AND is_delete_status='0' ORDER BY id DESC LIMIT 1 `;
            conn.query(salereturnlfnumber,(error,milledata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Mill Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (milledata.length == 0) 
                    {   
                        milledata.push({"lf_no":'0'});
                    }
                                        
                    res?.send({ Status:200,Count:milledata?.length,Message:'Data Found',Data:milledata[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'greyissue') 
        {
            const greyissuelfnumber = `SELECT COALESCE(grey_issue_challan_no,0) as challan_no FROM erp_grey_issue WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ORDER BY id DESC LIMIT 1 `;
            conn.query(greyissuelfnumber,(error,greyissuedata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Grey Issue Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (greyissuedata.length == 0) 
                    {   
                        greyissuedata.push({"challan_no":'0'});
                    }
                                        
                    res?.send({ Status:200,Count:greyissuedata?.length,Message:'Data Found',Data:greyissuedata[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'salejoberissue') 
        {
            const salejoberisuueinvoicenumber = `SELECT COALESCE(sale_jober_issue_invoice_no,0) as sale_jober_issue_invoice_no FROM erp_sale_jober_issue WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ORDER BY sale_jober_issue_invoice_no DESC LIMIT 1 `;
            conn.query(salejoberisuueinvoicenumber,(error,saleissuedata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'sale Issue Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (saleissuedata.length == 0) 
                    {
                        saleissuedata.push({"sale_jober_issue_invoice_no":'0'});
                    }                                    
                    res?.send({ Status:200,Count:saleissuedata?.length,Message:'Data Found',Data:saleissuedata[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'salejoberreceive') 
        {
            const salejoberreceiveinvoicenumber = `SELECT COALESCE(sale_jober_receive_invoice_no,0) as sale_jober_receive_invoice_no FROM erp_sale_jober_receive WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ORDER BY sale_jober_receive_invoice_no DESC LIMIT 1 `;
            conn.query(salejoberreceiveinvoicenumber,(error,salereceivedata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'sale Receive Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (salereceivedata.length == 0) 
                    {
                        salereceivedata.push({"sale_jober_receive_invoice_no":'0'});
                    } 

                    res?.send({ Status:200,Count:salereceivedata?.length,Message:'Data Found',Data:salereceivedata[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'salejoberinvoice') 
        {
            const salejoberinvoicenumber = `SELECT COALESCE(jober_invoice_lf_no,0) as jober_invoice_no,COALESCE(jober_invoice_lf_no,0) as jober_invoice_lf_no FROM erp_jober_invoice WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ORDER BY jober_invoice_no DESC LIMIT 1 `;
            conn.query(salejoberinvoicenumber,(error,salejoberdata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'sale Receive Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (salejoberdata.length == 0) 
                    {
                        salejoberdata.push({"jober_invoice_no":'0',"jober_invoice_lf_no":'0'});
                    }
                    if (salejoberdata[0].jober_invoice_no == '') 
                    {
                        salejoberdata[0].jober_invoice_no = '0';
                    }
                    if (salejoberdata[0].jober_invoice_lf_no == '') 
                    {
                        salejoberdata[0].jober_invoice_lf_no = '0';
                    }

                    res?.send({ Status:200,Count:salejoberdata?.length,Message:'Data Found',Data:salejoberdata[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'saletaxinvoice') 
        {
            const saletaxinvoicenumber = `SELECT COALESCE(sale_tax_invoice_no,0) as sale_tax_invoice_no FROM erp_sale_tax_invoice WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ORDER BY sale_tax_invoice_no DESC LIMIT 1 `;
            conn.query(saletaxinvoicenumber,(error,saletaxdata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'sale Receive Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (saletaxdata.length == 0) 
                    {
                        saletaxdata.push({"sale_tax_invoice_no":'0'});
                    }
                    if (saletaxdata[0].sale_tax_invoice_no == '') 
                    {
                        saletaxdata[0].sale_tax_invoice_no = '0';
                    }

                    res?.send({ Status:200,Count:saletaxdata?.length,Message:'Data Found',Data:saletaxdata[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'inventoryissue') 
        {   
            const quality_query =  quality_type_id > 0 ? ` AND quality_type_id='${quality_type_id}'` : '';

            const inventoryinvoicenumber = `SELECT COALESCE(inventory_challan_no,0) as inventory_challan_no, COALESCE(inventory_lf_no,0) as inventory_lf_no,(SELECT COALESCE(inventory_order_no,0) FROM erp_inventory WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ${quality_query} ORDER BY id DESC LIMIT 1) as inventory_order_no FROM erp_inventory WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ORDER BY id DESC LIMIT 1 `;
            conn.query(inventoryinvoicenumber,(error,inventorydata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'inventory issue Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (inventorydata.length == 0) 
                    {
                        inventorydata.push({"inventory_order_no":'0',"inventory_challan_no":'0',"inventory_lf_no":'0'});
                    }
                    if (inventorydata[0].inventory_order_no == '') 
                    {
                        inventorydata[0].inventory_order_no = '0';
                    }
                    if (inventorydata[0].inventory_challan_no == '') 
                    {
                        inventorydata[0].inventory_challan_no = '0';
                    }
                    if (inventorydata[0].inventory_lf_no == '') 
                    {
                        inventorydata[0].inventory_lf_no = '0';
                    }

                    res?.send({ Status:200,Count:inventorydata?.length,Message:'Data Found',Data:inventorydata[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'inventoryreceive') 
        {   
            
            const inventoryreceivenumber = `SELECT COALESCE(inventory_receive_challan_no,0) as inventory_receive_challan_no,COALESCE(inventory_receive_no,0) as inventory_receive_no FROM erp_inventory_receive WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ORDER BY id DESC LIMIT 1 `;
            conn.query(inventoryreceivenumber,(error,inventoryreceivedata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'inventory receive Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (inventoryreceivedata.length == 0) 
                    {
                        inventoryreceivedata.push({"inventory_receive_no":'0',"inventory_receive_challan_no":'0'});
                    }
                    if (inventoryreceivedata[0].inventory_receive_no == '') 
                    {
                        inventoryreceivedata[0].inventory_receive_no = '0';
                    }
                    if (inventoryreceivedata[0].inventory_receive_challan_no == '') 
                    {
                        inventoryreceivedata[0].inventory_receive_challan_no = '0';
                    }

                    res?.send({ Status:200,Count:inventoryreceivedata?.length,Message:'Data Found',Data:inventoryreceivedata[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'inventoryinvoice') 
        {   
            
            const inventoryinvoicenumber = `SELECT COALESCE(inventory_invoice_no,0) as inventory_invoice_no,COALESCE(inventory_invoice_lf_no,0) as inventory_invoice_lf_no FROM erp_inventory_invoice WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ORDER BY id DESC LIMIT 1 `;
            conn.query(inventoryinvoicenumber,(error,inventoryinvoicedata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'inventory invoice Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (inventoryinvoicedata.length == 0) 
                    {
                        inventoryinvoicedata.push({"inventory_invoice_no":'0',"inventory_invoice_lf_no":'0'});
                    }
                    if (inventoryinvoicedata[0].inventory_invoice_no == '') 
                    {
                        inventoryinvoicedata[0].inventory_invoice_no = '0';
                    }
                    if (inventoryinvoicedata[0].inventory_invoice_lf_no == '') 
                    {
                        inventoryinvoicedata[0].inventory_invoice_lf_no = '0';
                    }

                    res?.send({ Status:200,Count:inventoryinvoicedata?.length,Message:'Data Found',Data:inventoryinvoicedata[0] });
                    next();
                    return;
                }  
            });
        }
        if (invoice_type == 'settelement') 
        {   
            
            const settelementnumber = `SELECT COALESCE(is_settlement,0) as is_settlement FROM erp_voucher_child WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' ORDER BY id DESC LIMIT 1 `;
            conn.query(settelementnumber,(error,settelementdata) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'settelement Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                else
                {   
                    if (settelementdata.length == 0) 
                    {
                        settelementdata.push({"is_settlement":'0'});
                    }
                    if (settelementdata[0].is_settlement == '') 
                    {
                        settelementdata[0].is_settlement = '0';
                    }

                    res?.send({ Status:200,Count:settelementdata?.length,Message:'Data Found',Data:settelementdata[0] });
                    next();
                    return;
                }  
            });
        }
    },

    // GET QUALITY WISE JOBER RATE DROPDOWN DATA API //
    allqualitywisejoberratedropdown: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;

        const allqualitywisejoberratedropdown = `CALL get_all_quality_wise_jober_rate_dropdown(?,?,?,?,?)`;
        conn.query(allqualitywisejoberratedropdown,[user_id,company_id,branch_id,year_id,quality_id],(error,data) => {


            if (error || data[0]?.length == 0)
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },

    // GET NOT ISSUE SALE JOBER LIST DROPDOWN DATA API //
    allnotissuesalejoberlistdropdown: (req,res,next) => {

        let body = req?.body;
        const sale_id = body?.sale_id ? body?.sale_id : 0;
        const sale_child_id = body?.sale_child_id ? body?.sale_child_id : 0;
        
        const allnotissuesalejoberlistdropdown = `CALL get_all_not_issue_sale_jober_list_dropdown(?,?)`;
        conn.query(allnotissuesalejoberlistdropdown,[sale_id,sale_child_id],(error,data) => {

            if (error || data[0]?.length == 0)
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data[0]?.forEach(element => {
                    element.jober_data = [];
                });
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },

    // GET ALL inventory receive challan DATA API //
    allinventoryreceivechallandropdown: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const jober_id = body?.jober_id ? body?.jober_id : 0;

        const allpurchaseinvoicedropdown = `CALL get_all_inventory_receive_challan_dropdown(?,?,?,?,?)`;
        conn.query(allpurchaseinvoicedropdown,[user_id,company_id,year_id,branch_id,jober_id],(error,data) => {

            if (error || data[0]?.length == 0)
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {                
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },

    // GET ALL invoice child data by passsing inventory receive challan DATA API //
    allinventoryinvoicechilddatabypassingreceivechallandropdown: (req,res,next) => {

        let body = req?.body;
        const jober_id = body?.jober_id ? body?.jober_id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const inventory_receive_id = body?.inventory_receive_id ? body?.inventory_receive_id : 0;

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
        if (jober_id.length == 0 || jober_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Jober ID',Data:[] });
            next();
            return;
        }
        
        const multi_inventory_receive_id = inventory_receive_id != '' ? `AND inventory_child.inventory_receive_id NOT IN (${inventory_receive_id})` : '';

        const allmillreceivechallandropdown = `SELECT inventory_receive.id as value,inventory_receive.inventory_receive_challan_no,inventory_receive.inventory_receive_challan_no as label,inventory_receive.inventory_receive_unit_sent,inventory_receive.inventory_receive_grey_qty,inventory_receive.inventory_receive_qty_sent,inventory_receive.inventory_receive_meter,inventory_receive.receive_quality_id,quality.quality_name,material.gst_id,gst.gst_percentage,inventory_child.inventory_child_rate as rate,inventory_receive.receive_quality_id FROM erp_inventory_receive as inventory_receive LEFT JOIN erp_quality as quality ON quality.id=inventory_receive.receive_quality_id LEFT JOIN erp_material as material ON material.id=quality.material_id LEFT JOIN erp_gst as gst ON gst.id=material.gst_id LEFT JOIN erp_inventory_child as inventory_child ON inventory_child.id=inventory_receive.inventory_child_id WHERE inventory_receive.jober_id='${jober_id}' AND inventory_receive.user_id='${user_id}' AND inventory_receive.company_id<='${company_id}' AND inventory_receive.year_id<='${year_id}' AND inventory_receive.branch_id<='${branch_id}' AND inventory_receive.id NOT IN (SELECT inventory_child.inventory_receive_id FROM erp_inventory_invoice_child as inventory_child LEFT JOIN erp_inventory_invoice as inventory_par ON inventory_par.id=inventory_child.inventory_invoice_id WHERE inventory_par.user_id='${user_id}' AND inventory_par.company_id<='${company_id}' AND inventory_par.year_id<='${year_id}' AND inventory_par.branch_id<='${branch_id}' ${multi_inventory_receive_id}) AND inventory_receive.is_delete_status='0';`

        conn.query(allmillreceivechallandropdown,(error,data) => {

            if (error || data?.length == 0)
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                res?.send({ Status:200,Count:data?.length,Message:'Data Found',Data:data });
                next();
                return;
            }  
        });
    },

    // GET ALL JOBER RECEIVE INVOICE DATA API //
    alljoberreceivechallandropdown: (req,res,next) => {

        let body = req?.body;
        const jober_id = body?.jober_id ? body?.jober_id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const jober_receive_id = body?.jober_receive_id ? body?.jober_receive_id : 0;

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
        if (jober_id.length == 0 || jober_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Jober ID',Data:[] });
            next();
            return;
        }
        
        const multi_jober_receive_id = jober_receive_id != '' ? `AND tax_child.jober_receive_id NOT IN (${jober_receive_id})` : '';
        
        const alljoberreceivechallandropdown = `SELECT receive.id as value,receive.sale_jober_receive_invoice_no,receive.sale_jober_receive_invoice_no as label,sale_jober_receive_invoice_no as old_label,receive.sale_jober_receive_meter,receive.sale_jober_receive_weight,receive.sale_jober_receive_rate,receive.quality_id,quality.quality_name,gst.id as gst_id,gst.gst_percentage,sale_qty.unit_measurement_symbol,receive.sale_jober_receive_total,receive.sale_jober_receive_lf_no FROM erp_sale_jober_receive as receive LEFT JOIN erp_quality as quality ON quality.id=receive.quality_id LEFT JOIN erp_material as material ON material.id=quality.material_id LEFT JOIN erp_gst as gst ON gst.id=material.gst_id LEFT JOIN erp_unit_measurement as sale_qty ON sale_qty.id=material.material_sale_qty WHERE receive.jober_id='${jober_id}' AND receive.user_id='${user_id}' AND receive.company_id<='${company_id}' AND receive.year_id<='${year_id}' AND receive.branch_id<='${branch_id}' AND receive.id NOT IN (SELECT tax_child.jober_receive_id FROM erp_jober_invoice_child as tax_child LEFT JOIN erp_jober_invoice as tax_par ON tax_par.id=tax_child.jober_invoice_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND tax_child.is_delete_status='0' AND tax_par.is_delete_status='0' ${multi_jober_receive_id}) AND receive.is_delete_status='0' AND quality.is_delete_status='0' AND material.is_delete_status='0';`

        conn.query(alljoberreceivechallandropdown,(error,data) => {

            if (error || data?.length == 0)
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {                   
                data.forEach(element => 
                {
                    element.label = element.label + `[${element.sale_jober_receive_lf_no}]`;
                });
                data = [constant.DefaultSelect,...data];
                data.label = data.label + `${data.sale_jober_receive_lf_no}`
                res?.send({ Status:200,Count:data?.length,Message:'Data Found',Data:data });
                next();
                return;
            }  
        });
    },

    // GET ALL JOBER RECEIVE INVOICE DATA API //
    allsalechildchallandropdown: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const buyer_id = body?.buyer_id ? body?.buyer_id : 0;
        const sale_child_id = body?.sale_child_id ? body?.sale_child_id : 0;

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
                
        // const multi_sale_child_id = sale_child_id != '' ? `AND sale_child.id NOT IN (SELECT tax_child.sale_child_id FROM erp_sale_tax_invoice_child as tax_child LEFT JOIN erp_sale_tax_invoice as tax_par ON tax_par.id=tax_child.sale_tax_invoice_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND tax_child.is_delete_status='0' AND tax_par.is_delete_status='0' AND tax_child.sale_child_id NOT IN (${sale_child_id}))` : '';

        const multi_sale_child_id = sale_child_id != '' ? `AND sale_child_id NOT IN (${sale_child_id}) ` : '';
        
        // const allsalechildchallandropdown = `SELECT sale.id as sale_id,sale_child.id as sale_child_id,sale_child.id as value,sale.sale_order_no,sale.sale_order_no as label,sale_child.sale_child_qty,sale_child.sale_child_meter,sale_child.sale_child_rate,sale_child.quality_id,quality.quality_name,gst.id as gst_id,gst.gst_percentage,sale_child.sale_child_total,sale_child.sale_child_quality_colour,sale_child.sale_child_work,sale_child.sale_child_work_colour,sale_child.sale_child_fold,sale_child.sale_child_count_meter,sale_child.sale_child_count_meter as old_meter,sale_child.sale_child_rate_per,sale_child.sale_child_freight,sale_child.sale_child_fless,sale_child.sale_child_taxable,sale_child.sale_child_sgst,sale_child.sale_child_cgst,sale_child.sale_child_igst,sale_child.sale_child_amount,sale_child.sale_child_disc_per,sale_child.sale_child_disc_amt,sale_child.sale_child_meter - (SELECT COALESCE(SUM(sale_tax_invoice_child_meter),0) FROM erp_sale_tax_invoice_child WHERE sale_child_id=sale_child.id AND is_delete_status='0') as due_meter FROM erp_sale as sale LEFT JOIN erp_sale_child as sale_child ON sale_child.sale_id=sale.id LEFT JOIN erp_quality as quality ON quality.id=sale_child.quality_id LEFT JOIN erp_material as material ON material.id=quality.material_id LEFT JOIN erp_gst as gst ON gst.id=material.gst_id WHERE sale.buyer_id='${buyer_id}' AND sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale_child.is_delete_status='0' AND sale.is_delete_status='0' AND quality.is_delete_status='0' AND material.is_delete_status='0' AND sale_child.sale_child_meter > (SELECT COALESCE(SUM(sale_tax_invoice_child_meter),0) FROM erp_sale_tax_invoice_child WHERE sale_child_id=sale_child.id AND is_delete_status='0')`;
        const allsalechildchallandropdown = `SELECT sale.id as sale_id,sale_child.id as sale_child_id,sale_child.id as value,sale.sale_order_no,CONCAT(sale.sale_order_no, '[', quality.quality_name, ',', sale_child.sale_child_quality_colour, ']') as label,sale_child.sale_child_qty,sale_child.sale_child_meter,sale_child.sale_child_rate,sale_child.quality_id,quality.quality_name,gst.id as gst_id,gst.gst_percentage,sale_child.sale_child_total,sale_child.sale_child_quality_colour,sale_child.sale_child_work,sale_child.sale_child_work_colour,sale_child.sale_child_fold,sale_child.sale_child_count_meter,sale_child.sale_child_count_meter as old_meter,sale_child.sale_child_rate_per,sale_child.sale_child_freight,sale_child.sale_child_fless,sale_child.sale_child_taxable,sale_child.sale_child_sgst,sale_child.sale_child_cgst,sale_child.sale_child_igst,sale_child.sale_child_amount,sale_child.sale_child_disc_per,sale_child.sale_child_disc_amt,sale_child.sale_child_meter - (SELECT COALESCE(SUM(sale_tax_invoice_child_meter),0) FROM erp_sale_tax_invoice_child WHERE sale_child_id=sale_child.id AND is_delete_status='0') as due_meter FROM erp_sale as sale LEFT JOIN erp_sale_child as sale_child ON sale_child.sale_id=sale.id LEFT JOIN erp_quality as quality ON quality.id=sale_child.quality_id LEFT JOIN erp_material as material ON material.id=quality.material_id LEFT JOIN erp_gst as gst ON gst.id=material.gst_id WHERE sale.buyer_id='${buyer_id}' AND sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale_child.sale_child_meter > (SELECT COALESCE(SUM(sale_tax_invoice_child_meter),0) FROM erp_sale_tax_invoice_child WHERE sale_child_id=sale_child.id  ${multi_sale_child_id} AND is_delete_status='0')`;
        console.log('sallsalechildchallandropdown :: ', allsalechildchallandropdown)
        conn.query(allsalechildchallandropdown,(error,data) => {

            if (error || data?.length == 0)
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                data = [constant.DefaultSelect,...data];
                res?.send({ Status:200,Count:data?.length,Message:'Data Found',Data:data });
                next();
                return;
            }  
        });
    },

    // GET All COMPANY DATA DROP DOWN API //
    companydata: (req,res,next) => {
    
        var comopanydata = `CALL get_company_data()`;
        conn.query(comopanydata,(error,data) => {
            if (data?.length > 0) 
            {   
                data[0] = [constant.DefaultSelect,...data[0]];
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data found',Data:data[0] });
                next();
                return;
            }
            else
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }  
        });
    },

    // GET Party and QUALITY Last updated rate and fold API //
    getpartyqualitywiselastratefolddata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const quality_id = body?.quality_id ? body?.quality_id : 0;
        
        if (user_id.length == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        if (company_id == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter Company ID',Data:[] });
            next();
            return;
        }
        if (branch_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Branch Id',Data:[] });
            next();
            return;
        }
        if (year_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Year Id',Data:[] });
            next();
            return;
        }
        if (party_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter party Id',Data:[] });
            next();
            return;
        }
        if (quality_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Quality Id',Data:[] });
            next();
            return;
        }
        
        const getpartyqualitywiselastratefolddata = `CALL get_party_and_quality_last_rate_fold_data(?,?,?,?,?,?)`;
        conn.query(getpartyqualitywiselastratefolddata,[user_id,company_id,branch_id,year_id,party_id,quality_id],(error,data) => {

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

    // GET Party TDS DATA API //
    getpartytdsdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id : 0;
           
        if (user_id.length == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter User ID',Data:[] });
            next();
            return;
        }
        if (company_id == 0) 
        {   
            res?.send({ Status:400,Count:0,Message:'Enter Company ID',Data:[] });
            next();
            return;
        }
        if (branch_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Branch Id',Data:[] });
            next();
            return;
        }
        if (year_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Year Id',Data:[] });
            next();
            return;
        }
        if (nature_of_payment_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Nature of Payment Id',Data:[] });
            next();
            return;
        }
        
        const getpartytdsdata = `CALL get_party_tds_data(?,?,?,?,?)`;
        conn.query(getpartytdsdata,[user_id,company_id,branch_id,year_id,nature_of_payment_id],(error,data) => {

            if (error || data[0]?.length == 0)
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {  
                res?.send({ Status:200,Count:data[0]?.length,Message:'Data Found',Data:data[0] });
                next();
                return;
            }  
        });
    },
};

export default AllDropDownApis;



