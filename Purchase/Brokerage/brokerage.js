import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllBrokerageAndPurchaseOutstandingApis = {
    
    // GET BROKERAGE LISTING DATA API //
    getbrokeragelistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const broker_id = body?.broker_id ? body?.broker_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'tax_par.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;

       
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

        const search_purchase_tax_invoice_no = search?.purchase_tax_invoice_no ? search?.purchase_tax_invoice_no : '';
        const search_purchase_tax_invoice_date = search?.purchase_tax_invoice_date ? search?.purchase_tax_invoice_date : '';
        const search_purchase_tax_invoice_total_unit_sent = search?.purchase_tax_invoice_total_unit_sent ? search?.purchase_tax_invoice_total_unit_sent : '';
        const search_purchase_tax_invoice_total_qty_sent = search?.purchase_tax_invoice_total_qty_sent ? search?.purchase_tax_invoice_total_qty_sent : '';
        const search_purchase_tax_invoice_total_taxable = search?.purchase_tax_invoice_total_taxable ? search?.purchase_tax_invoice_total_taxable : '';
        const search_taxable_return = search?.taxable_return ? search?.taxable_return : '';
        const search_taxable_addition = search?.taxable_addition ? search?.taxable_addition : '';
        const search_purchase_tax_invoice_net_amount = search?.purchase_tax_invoice_net_amount ? search?.purchase_tax_invoice_net_amount : '';
        const search_purchase_tax_invoice_total_total = search?.purchase_tax_invoice_total_total ? search?.purchase_tax_invoice_total_total : '';
        const search_brokerage = search?.brokerage ? search?.brokerage : '';

        const sea_purchase_tax_invoice_no = search_purchase_tax_invoice_no != '' ? ` AND tax_par.purchase_tax_invoice_no LIKE '%${search_purchase_tax_invoice_no}%'` : '';
        const sea_purchase_tax_invoice_date = search_purchase_tax_invoice_date != '' ? ` AND tax_par.purchase_tax_invoice_date LIKE '%${search_purchase_tax_invoice_date}%'` : '';
        const sea_purchase_tax_invoice_total_unit_sent = search_purchase_tax_invoice_total_unit_sent != '' ? ` AND tax_par.purchase_tax_invoice_total_unit_sent LIKE '%${search_purchase_tax_invoice_total_unit_sent}%'` : '';
        const sea_purchase_tax_invoice_total_qty_sent = search_purchase_tax_invoice_total_qty_sent != '' ? ` AND tax_par.purchase_tax_invoice_total_qty_sent LIKE '%${search_purchase_tax_invoice_total_qty_sent}%'` : '';
        const sea_purchase_tax_invoice_total_taxable = search_purchase_tax_invoice_total_taxable != '' ? ` AND tax_par.purchase_tax_invoice_total_taxable LIKE '%${search_purchase_tax_invoice_total_taxable}%'` : '';
        const sea_taxable_return = search_taxable_return != '' ? ` AND tax_par.taxable_return LIKE '%${search_taxable_return}%'` : '';
        const sea_taxable_addition = search_taxable_addition != '' ? ` AND tax_par.taxable_addition LIKE '%${search_taxable_addition}%'` : '';
        const sea_purchase_tax_invoice_net_amount = search_purchase_tax_invoice_net_amount != '' ? ` AND tax_par.purchase_tax_invoice_net_amount LIKE '%${search_purchase_tax_invoice_net_amount}%'` : '';
        const sea_purchase_tax_invoice_total_total = search_purchase_tax_invoice_total_total != '' ? ` AND tax_par.purchase_tax_invoice_total_total LIKE '%${search_purchase_tax_invoice_total_total}%'` : '';
        const sea_brokerage = search_brokerage != '' ? ` AND supplier.party_name LIKE '%${search_brokerage}%'` : '';
        const sea_party_id = party_id != '' ? ` AND tax_par.supplier_id IN ('%${party_id}%')` : '';
        const sea_broker_id = broker_id != '' ? ` AND tax_par.broker_id IN ('%${broker_id}%')` : '';
        const date_range_query = from_date != '' ? ` AND DATE(tax_par.purchase_tax_invoice_date) >='${from_date}' AND DATE(tax_par.purchase_tax_invoice_date) <='${to_date}'` : '';

        var getbrokeragelistingtotalcountdata = `SELECT tax_par.supplier_id,supplier.party_name as supplier_name,SUM(tax_par.purchase_tax_invoice_total_unit_sent) as purchase_tax_invoice_total_unit_sent_count,SUM(tax_par.purchase_tax_invoice_total_qty_sent) as purchase_tax_invoice_total_qty_sent_count,SUM(tax_par.purchase_tax_invoice_total_taxable) as purchase_tax_invoice_total_taxable_count,NULL as taxable_return_count,NULL as taxable_addition_count,SUM(tax_par.purchase_tax_invoice_net_amount) as purchase_tax_invoice_net_amount_count,SUM(tax_par.purchase_tax_invoice_total_total) as purchase_tax_invoice_total_total_count,NULL as brokerage_count,NULL as child_status,NULL as child_data FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND supplier.account_head_id='26' AND tax_par.is_delete_status='0' ${sea_party_id} ${sea_broker_id} GROUP BY tax_par.supplier_id`;

        conn.query(getbrokeragelistingtotalcountdata,(error,brokertotalcountdata) => {

            if (error || brokertotalcountdata?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data1 Not Found!!!!',Data:error });
                next();
                return;
            }

            let brokerlistingdatacount = 0;
            brokertotalcountdata.forEach(element => {
                
                var getbrokeragelistingdata = `SELECT tax_par.purchase_tax_invoice_no,tax_par.purchase_tax_invoice_date,tax_par.purchase_tax_invoice_total_unit_sent,tax_par.purchase_tax_invoice_total_qty_sent,tax_par.purchase_tax_invoice_total_taxable,NULL as taxable_return,NULL as taxable_addition,tax_par.purchase_tax_invoice_net_amount,tax_par.purchase_tax_invoice_total_total,NULL as brokerage FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND supplier.account_head_id='26' AND tax_par.supplier_id='${element.supplier_id}' AND tax_par.is_delete_status='0' ${sea_purchase_tax_invoice_no} ${sea_purchase_tax_invoice_date} ${sea_purchase_tax_invoice_total_unit_sent} ${sea_purchase_tax_invoice_total_qty_sent} ${sea_purchase_tax_invoice_total_taxable} ${sea_taxable_return} ${sea_taxable_addition} ${sea_purchase_tax_invoice_net_amount} ${sea_purchase_tax_invoice_total_total} ${sea_brokerage} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

                conn.query(getbrokeragelistingdata,(error,brokerlistingdata) => {

                    if (brokerlistingdata && brokerlistingdata?.length > 0) 
                    {   
                        brokerlistingdata.forEach(data => {
                            data.purchase_tax_invoice_date = constant.moment(data.purchase_tax_invoice_date).format('YYYY-MM-DD');
                            data.export = constant.DefaultExportopetions;
                        });

                        element.child_status = (brokerlistingdata) ? true : false;
                        element.child_data = brokerlistingdata;
                        brokerlistingdatacount += brokerlistingdata.length;
                    }                    
                });
            }); 
            
            var totalbrokeragecount = `SELECT COUNT(tax_par.id) as Count FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND supplier.account_head_id='26' AND tax_par.is_delete_status='0'`;
                
            conn.query(totalbrokeragecount,(error,countdata) => {

                res?.send({ Status:200,Count:brokerlistingdatacount,TotalCount:countdata[0]?.Count,Message:'Data found',Data:brokertotalcountdata });
                next();
                return;
            }); 
        });
    },

    // GET PURCHASE OUTSTANDING LISTING DATA API //
    getpurchaseoutstandinglistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const broker_id = body?.broker_id ? body?.broker_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'tax_par.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
       
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

        const search_purchase_tax_invoice_no = search?.purchase_tax_invoice_no ? search?.purchase_tax_invoice_no : '';
        const search_purchase_tax_invoice_date = search?.purchase_tax_invoice_date ? search?.purchase_tax_invoice_date : '';
        const search_purchase_tax_invoice_total_unit_sent = search?.purchase_tax_invoice_total_unit_sent ? search?.purchase_tax_invoice_total_unit_sent : '';
        const search_purchase_tax_invoice_total_qty_sent = search?.purchase_tax_invoice_total_qty_sent ? search?.purchase_tax_invoice_total_qty_sent : '';
        const search_purchase_tax_invoice_total_taxable = search?.purchase_tax_invoice_total_taxable ? search?.purchase_tax_invoice_total_taxable : '';
        const search_taxable_return = search?.taxable_return ? search?.taxable_return : '';
        const search_taxable_addition = search?.taxable_addition ? search?.taxable_addition : '';
        const search_purchase_tax_invoice_net_amount = search?.purchase_tax_invoice_net_amount ? search?.purchase_tax_invoice_net_amount : '';
        const search_purchase_tax_invoice_total_total = search?.purchase_tax_invoice_total_total ? search?.purchase_tax_invoice_total_total : '';
        const search_brokerage = search?.brokerage ? search?.brokerage : '';

        const sea_purchase_tax_invoice_no = search_purchase_tax_invoice_no != '' ? ` AND tax_par.purchase_tax_invoice_no LIKE '%${search_purchase_tax_invoice_no}%'` : '';
        const sea_purchase_tax_invoice_date = search_purchase_tax_invoice_date != '' ? ` AND tax_par.purchase_tax_invoice_date LIKE '%${search_purchase_tax_invoice_date}%'` : '';
        const sea_purchase_tax_invoice_total_unit_sent = search_purchase_tax_invoice_total_unit_sent != '' ? ` AND tax_par.purchase_tax_invoice_total_unit_sent LIKE '%${search_purchase_tax_invoice_total_unit_sent}%'` : '';
        const sea_purchase_tax_invoice_total_qty_sent = search_purchase_tax_invoice_total_qty_sent != '' ? ` AND tax_par.purchase_tax_invoice_total_qty_sent LIKE '%${search_purchase_tax_invoice_total_qty_sent}%'` : '';
        const sea_purchase_tax_invoice_total_taxable = search_purchase_tax_invoice_total_taxable != '' ? ` AND tax_par.purchase_tax_invoice_total_taxable LIKE '%${search_purchase_tax_invoice_total_taxable}%'` : '';
        const sea_taxable_return = search_taxable_return != '' ? ` AND tax_par.taxable_return LIKE '%${search_taxable_return}%'` : '';
        const sea_taxable_addition = search_taxable_addition != '' ? ` AND tax_par.taxable_addition LIKE '%${search_taxable_addition}%'` : '';
        const sea_purchase_tax_invoice_net_amount = search_purchase_tax_invoice_net_amount != '' ? ` AND tax_par.purchase_tax_invoice_net_amount LIKE '%${search_purchase_tax_invoice_net_amount}%'` : '';
        const sea_purchase_tax_invoice_total_total = search_purchase_tax_invoice_total_total != '' ? ` AND tax_par.purchase_tax_invoice_total_total LIKE '%${search_purchase_tax_invoice_total_total}%'` : '';
        const sea_brokerage = search_brokerage != '' ? ` AND supplier.party_name LIKE '%${search_brokerage}%'` : '';
        const sea_party_id = party_id > 0 ? ` AND tax_par.supplier_id IN ('%${party_id}%')` : '';
        const sea_broker_id = broker_id > 0 ? ` AND tax_par.broker_id IN ('%${broker_id}%')` : '';
        const date_range_query = from_date != '' ? ` AND DATE(tax_par.purchase_tax_invoice_date) >='${from_date}' AND DATE(tax_par.purchase_tax_invoice_date) <='${to_date}'` : '';

        var getpurchaseoutstandinglistingtotalcountdata = `SELECT tax_par.supplier_id,supplier.party_name as supplier_name,SUM(tax_par.purchase_tax_invoice_total_unit_sent) as purchase_tax_invoice_total_unit_sent_count,SUM(tax_par.purchase_tax_invoice_total_qty_sent) as purchase_tax_invoice_total_qty_sent_count,SUM(tax_par.purchase_tax_invoice_total_taxable) as purchase_tax_invoice_total_taxable_count,NULL as taxable_return_count,NULL as taxable_addition_count,SUM(tax_par.purchase_tax_invoice_net_amount) as purchase_tax_invoice_net_amount_count,SUM(tax_par.purchase_tax_invoice_total_total) as purchase_tax_invoice_total_total_count,NULL as brokerage_count,NULL as child_status,NULL as child_data FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND supplier.account_head_id!='26' AND tax_par.is_delete_status='0' ${sea_party_id} ${sea_broker_id} GROUP BY tax_par.supplier_id`;

        conn.query(getpurchaseoutstandinglistingtotalcountdata,(error,purchaseoutstandingtotalcountdata) => {

            if (error || purchaseoutstandingtotalcountdata?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data1 Not Found!!!!',Data:error });
                next();
                return;
            }

            let purchaseoutstandinglistingdatacount = 0;
            purchaseoutstandingtotalcountdata.forEach(element => {
                
                var getpurchaseoutstandinglistingdata = `SELECT tax_par.purchase_tax_invoice_no,tax_par.purchase_tax_invoice_date,tax_par.purchase_tax_invoice_total_unit_sent,tax_par.purchase_tax_invoice_total_qty_sent,tax_par.purchase_tax_invoice_total_taxable,NULL as taxable_return,NULL as taxable_addition,tax_par.purchase_tax_invoice_net_amount,tax_par.purchase_tax_invoice_total_total,NULL as brokerage FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND supplier.account_head_id!='26' AND tax_par.supplier_id='${element.supplier_id}' AND tax_par.is_delete_status='0' ${sea_purchase_tax_invoice_no} ${sea_purchase_tax_invoice_date} ${sea_purchase_tax_invoice_total_unit_sent} ${sea_purchase_tax_invoice_total_qty_sent} ${sea_purchase_tax_invoice_total_taxable} ${sea_taxable_return} ${sea_taxable_addition} ${sea_purchase_tax_invoice_net_amount} ${sea_purchase_tax_invoice_total_total} ${sea_brokerage} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

                conn.query(getpurchaseoutstandinglistingdata,(error,purchaseoutstandinglistingdata) => {

                    if (purchaseoutstandinglistingdata && purchaseoutstandinglistingdata?.length > 0) 
                    {   
                        purchaseoutstandinglistingdata.forEach(data => {
                            data.purchase_tax_invoice_date = constant.moment(data.purchase_tax_invoice_date).format('YYYY-MM-DD');
                            data.export = constant.DefaultExportopetions;
                        });

                        element.child_status = (purchaseoutstandinglistingdata) ? true : false;
                        element.child_data = purchaseoutstandinglistingdata;
                        purchaseoutstandinglistingdatacount += purchaseoutstandinglistingdata.length;
                    }                    
                });
            }); 
            
            var totaloutstandingcount = `SELECT COUNT(tax_par.id) as Count FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND supplier.account_head_id!='26' AND tax_par.is_delete_status='0'`;
                
            conn.query(totaloutstandingcount,(error,countdata) => {

                res?.send({ Status:200,Count:purchaseoutstandinglistingdatacount,TotalCount:countdata[0]?.Count,Message:'Data found',Data:purchaseoutstandingtotalcountdata });
                next();
                return;
            }); 
        });
    },
};


export default AllBrokerageAndPurchaseOutstandingApis;
    
