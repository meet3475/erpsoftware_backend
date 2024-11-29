import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllBrokerageAndSaleOutstandingApis = {
    
    // GET BROKERAGE LISTING DATA API //
    getsalebrokeragelistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const broker_id = body?.broker_id ? body?.broker_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'sale.id-DESC';
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

        const search_sale_tax_invoice_no = search?.sale_tax_invoice_no ? search?.sale_tax_invoice_no : '';
        const search_sale_tax_invoice_date = search?.sale_tax_invoice_date ? search?.sale_tax_invoice_date : '';
        const search_sale_tax_invoice_total_meter = search?.sale_tax_invoice_total_meter ? search?.sale_tax_invoice_total_meter : '';
        const search_sale_tax_invoice_total_total = search?.sale_tax_invoice_total_total ? search?.sale_tax_invoice_total_total : '';
        const search_sale_tax_invoice_total_taxable = search?.sale_tax_invoice_total_taxable ? search?.sale_tax_invoice_total_taxable : '';
        const search_sale_tax_invoice_total_net_amount = search?.sale_tax_invoice_total_net_amount ? search?.sale_tax_invoice_total_net_amount : '';
        const search_brokerage = search?.brokerage ? search?.brokerage : '';

        const sea_sale_tax_invoice_no = search_sale_tax_invoice_no != '' ? ` AND sale.sale_tax_invoice_no LIKE '%${search_sale_tax_invoice_no}%'` : '';
        const sea_sale_tax_invoice_date = search_sale_tax_invoice_date != '' ? ` AND sale.sale_tax_invoice_date LIKE '%${search_sale_tax_invoice_date}%'` : '';
        const sea_sale_tax_invoice_total_meter = search_sale_tax_invoice_total_meter != '' ? ` AND sale.sale_tax_invoice_total_meter LIKE '%${search_sale_tax_invoice_total_meter}%'` : '';
        const sea_sale_tax_invoice_total_total = search_sale_tax_invoice_total_total != '' ? ` AND sale.sale_tax_invoice_total_total LIKE '%${search_sale_tax_invoice_total_total}%'` : '';
        const sea_sale_tax_invoice_total_taxable = search_sale_tax_invoice_total_taxable != '' ? ` AND sale.sale_tax_invoice_total_taxable LIKE '%${search_sale_tax_invoice_total_taxable}%'` : '';
        const sea_sale_tax_invoice_total_net_amount = search_sale_tax_invoice_total_net_amount != '' ? ` AND sale.sale_tax_invoice_total_net_amount LIKE '%${search_sale_tax_invoice_total_net_amount}%'` : '';
        const sea_brokerage = search_brokerage != '' ? ` AND supplier.party_name LIKE '%${search_brokerage}%'` : '';
        const sea_party_id = party_id > 0 ? ` AND sale.buyer_id IN ('%${party_id}%')` : '';
        const date_range_query = from_date != '' ? ` AND DATE(sale.sale_tax_invoice_date) >='${from_date}' AND DATE(sale.sale_tax_invoice_date) <='${to_date}'` : '';

        var getbrokeragelistingtotalcountdata = `SELECT sale.buyer_id,buyer.party_name as buyer_name,SUM(sale.sale_tax_invoice_total_meter) as sale_tax_invoice_total_meter_count,SUM(sale.sale_tax_invoice_total_total) as sale_tax_invoice_total_total_count,SUM(sale.sale_tax_invoice_total_taxable) as sale_tax_invoice_total_taxable_count,(SELECT SUM(sale_return_total_net_amount) FROM erp_sale_return WHERE buyer_id=sale.buyer_id AND is_delete_status='0') as total_return_count,NULL as total_addition_count,SUM(sale.sale_tax_invoice_total_net_amount) as sale_tax_invoice_total_net_amount_count,NULL as brokerage_count,NULL as child_status,NULL as child_data FROM erp_sale_tax_invoice as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND buyer.account_head_id='27' AND sale.is_delete_status='0' ${sea_party_id} GROUP BY sale.buyer_id`;

        conn.query(getbrokeragelistingtotalcountdata,(error,brokertotalcountdata) => {

            if (error || brokertotalcountdata?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data1 Not Found!!!!',Data:error });
                next();
                return;
            }

            let brokerlistingdatacount = 0;
            brokertotalcountdata.forEach(element => {
                
                var getbrokeragelistingdata = `SELECT sale.sale_tax_invoice_no,sale.sale_tax_invoice_date,sale.sale_tax_invoice_total_meter,sale.sale_tax_invoice_total_total,sale.sale_tax_invoice_total_taxable,NULL as taxable_return,NULL as taxable_addition,sale.sale_tax_invoice_total_net_amount,NULL as brokerage FROM erp_sale_tax_invoice as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND buyer.account_head_id='27' AND sale.buyer_id='${element.buyer_id}' AND sale.is_delete_status='0' ${sea_sale_tax_invoice_no} ${sea_sale_tax_invoice_date} ${sea_sale_tax_invoice_total_meter} ${sea_sale_tax_invoice_total_taxable} ${sea_sale_tax_invoice_total_net_amount} ${sea_sale_tax_invoice_total_total} ${sea_brokerage} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

                conn.query(getbrokeragelistingdata,(error,brokerlistingdata) => {

                    if(brokerlistingdata && brokerlistingdata?.length > 0) 
                    {   
                        brokerlistingdata.forEach(data => {
                            data.sale_tax_invoice_date = constant.moment(data.sale_tax_invoice_date).format('YYYY-MM-DD');
                            data.export = constant.DefaultExportopetions;
                        });

                        element.child_status = (brokerlistingdata) ? true : false;
                        element.child_data = brokerlistingdata;
                        brokerlistingdatacount += brokerlistingdata.length;
                    }                    
                });
            }); 
            
            var totalbrokeragecount = `SELECT COUNT(sale.id) as Count FROM erp_sale_tax_invoice as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND buyer.account_head_id='26' AND sale.is_delete_status='0' ${sea_party_id}`;
                
            conn.query(totalbrokeragecount,(error,countdata) => {

                res?.send({ Status:200,Count:brokerlistingdatacount,TotalCount:countdata[0]?.Count,Message:'Data found',Data:brokertotalcountdata });
                next();
                return;
            }); 
        });
    },

    // GET PURCHASE OUTSTANDING LISTING DATA API //
    getsaleoutstandinglistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const broker_id = body?.broker_id ? body?.broker_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'sale.id-DESC';
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

        const search_sale_tax_invoice_no = search?.sale_tax_invoice_no ? search?.sale_tax_invoice_no : '';
        const search_sale_tax_invoice_date = search?.sale_tax_invoice_date ? search?.sale_tax_invoice_date : '';
        const search_sale_tax_invoice_total_meter = search?.sale_tax_invoice_total_meter ? search?.sale_tax_invoice_total_meter : '';
        const search_sale_tax_invoice_total_total = search?.sale_tax_invoice_total_total ? search?.sale_tax_invoice_total_total : '';
        const search_sale_tax_invoice_total_taxable = search?.sale_tax_invoice_total_taxable ? search?.sale_tax_invoice_total_taxable : '';
        const search_taxable_return = search?.taxable_return ? search?.taxable_return : '';
        const search_taxable_addition = search?.taxable_addition ? search?.taxable_addition : '';
        const search_sale_tax_invoice_total_net_amount = search?.sale_tax_invoice_total_net_amount ? search?.sale_tax_invoice_total_net_amount : '';
        const search_brokerage = search?.brokerage ? search?.brokerage : '';

        const sea_sale_tax_invoice_no = search_sale_tax_invoice_no != '' ? ` AND sale.sale_tax_invoice_no LIKE '%${search_sale_tax_invoice_no}%'` : '';
        const sea_sale_tax_invoice_date = search_sale_tax_invoice_date != '' ? ` AND sale.sale_tax_invoice_date LIKE '%${search_sale_tax_invoice_date}%'` : '';
        const sea_sale_tax_invoice_total_meter = search_sale_tax_invoice_total_meter != '' ? ` AND sale.sale_tax_invoice_total_meter LIKE '%${search_sale_tax_invoice_total_meter}%'` : '';
        const sea_sale_tax_invoice_total_total = search_sale_tax_invoice_total_total != '' ? ` AND sale.sale_tax_invoice_total_total LIKE '%${search_sale_tax_invoice_total_total}%'` : '';
        const sea_sale_tax_invoice_total_taxable = search_sale_tax_invoice_total_taxable != '' ? ` AND sale.sale_tax_invoice_total_taxable LIKE '%${search_sale_tax_invoice_total_taxable}%'` : '';
        const sea_taxable_return = search_taxable_return != '' ? ` AND sale.taxable_return LIKE '%${search_taxable_return}%'` : '';
        const sea_taxable_addition = search_taxable_addition != '' ? ` AND sale.taxable_addition LIKE '%${search_taxable_addition}%'` : '';
        const sea_sale_tax_invoice_total_net_amount = search_sale_tax_invoice_total_net_amount != '' ? ` AND sale.sale_tax_invoice_total_net_amount LIKE '%${search_sale_tax_invoice_total_net_amount}%'` : '';
        const sea_brokerage = search_brokerage != '' ? ` AND supplier.party_name LIKE '%${search_brokerage}%'` : '';
        const sea_party_id = party_id > 0 ? ` AND sale.supplier_id IN ('%${party_id}%')` : '';
        const sea_broker_id = broker_id > 0 ? ` AND sale.broker_id IN ('%${broker_id}%')` : '';
        const date_range_query = from_date != '' ? ` AND DATE(sale.sale_tax_invoice_date) >='${from_date}' AND DATE(sale.sale_tax_invoice_date) <='${to_date}'` : '';

        var getsaleoutstandinglistingtotalcountdata = `SELECT sale.buyer_id,buyer.party_name as buyer_name,SUM(sale.sale_tax_invoice_total_meter) as sale_tax_invoice_total_meter_count,SUM(sale.sale_tax_invoice_total_total) as sale_tax_invoice_total_total_count,SUM(sale.sale_tax_invoice_total_taxable) as sale_tax_invoice_total_taxable_count,(SELECT SUM(sale_return_total_net_amount) FROM erp_sale_return WHERE buyer_id=sale.buyer_id AND is_delete_status='0') as total_return_count,NULL as total_addition_count,SUM(sale.sale_tax_invoice_total_net_amount) as sale_tax_invoice_total_net_amount_count,NULL as brokerage_count,NULL as child_status,NULL as child_data FROM erp_sale_tax_invoice as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND buyer.account_head_id!='27' AND sale.is_delete_status='0' ${sea_party_id} ${sea_broker_id} GROUP BY sale.buyer_id`;

        conn.query(getsaleoutstandinglistingtotalcountdata,(error,saleoutstandingtotalcountdata) => {

            if (error || saleoutstandingtotalcountdata?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data1 Not Found!!!!',Data:error });
                next();
                return;
            }

            let saleoutstandinglistingdatacount = 0;
            saleoutstandingtotalcountdata.forEach(element => {
                
                var getsaleoutstandinglistingdata = `SELECT sale.sale_tax_invoice_no,sale.sale_tax_invoice_date,sale.sale_tax_invoice_total_meter,sale.sale_tax_invoice_total_total,sale.sale_tax_invoice_total_taxable,NULL as taxable_return,NULL as taxable_addition,sale.sale_tax_invoice_total_net_amount,NULL as brokerage FROM erp_sale_tax_invoice as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND buyer.account_head_id!='27' AND sale.buyer_id='${element.buyer_id}' AND sale.is_delete_status='0' ${sea_sale_tax_invoice_no} ${sea_sale_tax_invoice_date} ${sea_sale_tax_invoice_total_meter} ${sea_sale_tax_invoice_total_taxable} ${sea_taxable_return} ${sea_taxable_addition} ${sea_sale_tax_invoice_total_net_amount} ${sea_sale_tax_invoice_total_total} ${sea_brokerage} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

                conn.query(getsaleoutstandinglistingdata,(error,saleoutstandinglistingdata) => {

                    if (saleoutstandinglistingdata && saleoutstandinglistingdata?.length > 0) 
                    {   
                        saleoutstandinglistingdata.forEach(data => {
                            data.sale_tax_invoice_date = constant.moment(data.sale_tax_invoice_date).format('YYYY-MM-DD');
                            data.export = constant.DefaultExportopetions;
                        });

                        element.child_status = (saleoutstandinglistingdata) ? true : false;
                        element.child_data = saleoutstandinglistingdata;
                        saleoutstandinglistingdatacount += saleoutstandinglistingdata.length;
                    }                    
                });
            }); 
            
            var totaloutstandingcount = `SELECT COUNT(sale.id) as Count FROM erp_sale_tax_invoice as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND buyer.account_head_id!='26' AND sale.is_delete_status='0'`;
                
            conn.query(totaloutstandingcount,(error,countdata) => {

                res?.send({ Status:200,Count:saleoutstandinglistingdatacount,TotalCount:countdata[0]?.Count,Message:'Data found',Data:saleoutstandingtotalcountdata });
                next();
                return;
            }); 
        });
    },
};


export default AllBrokerageAndSaleOutstandingApis;
    
