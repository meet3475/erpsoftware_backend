import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllSaleRegisterApis = {
    
    // GET sale register LISTING DATA API //
    getsaleregisterlistingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const total_limit = body?.limit ? body?.limit : 12;
        const sortby = body?.sortby ? body?.sortby : 'id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const filterData = body?.filter_data ? body?.filter_data : []
       
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

        const returnData = [];

        for (let index = 0; index < filterData.length; index++)
        {
            var getsaleregisterlistingdata = `SELECT DATE_FORMAT(sale_tax_invoice_entry_date, '%M-%Y') as month,COALESCE(SUM(sale_tax_invoice_total_taxable), 0) as sale_tax_invoice_total_taxable,COALESCE(SUM(sale_tax_invoice_total_sgst), 0) as sale_tax_invoice_total_sgst,COALESCE(SUM(sale_tax_invoice_total_cgst), 0) as sale_tax_invoice_total_cgst,COALESCE(SUM(sale_tax_invoice_total_igst), 0) as sale_tax_invoice_total_igst,COALESCE(SUM(sale_tax_invoice_total_sgst + sale_tax_invoice_total_cgst + sale_tax_invoice_total_igst), 0) as tax,COALESCE(SUM(sale_tax_invoice_total_amount), 0) as sale_tax_invoice_total_amount,COALESCE(SUM(sale_tax_invoice_total_net_amount), 0) as sale_tax_invoice_total_net_amount FROM erp_sale_tax_invoice WHERE user_id='${user_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND is_delete_status='0' AND sale_tax_invoice_date LIKE '${filterData[index]}%'`;

            conn.query(getsaleregisterlistingdata,(error,data) => {
                if (data[0]?.tax >= 0) {
                    returnData?.push({
                        ...data[0],
                        month:constant.moment(`${filterData[index]}01`).format('MMMM-YYYY')
                    })
                }
            });
        }
        setTimeout(() => {
            res?.send({ Status:200,Count:returnData?.length,Message:'Data found',Data: returnData});
            return;
        }, 75);

        /*
        var getsaleregisterlistingdata = `SELECT DATE_FORMAT(sale_tax_invoice_entry_date, '%M-%Y'), 0) as month,COALESCE(SUM(sale_tax_invoice_total_taxable), 0) as sale_tax_invoice_total_taxable,COALESCE(SUM(sale_tax_invoice_total_sgst), 0) as sale_tax_invoice_total_sgst,COALESCE(SUM(sale_tax_invoice_total_cgst), 0) as sale_tax_invoice_total_cgst,COALESCE(SUM(sale_tax_invoice_total_igst), 0) as sale_tax_invoice_total_igst,COALESCE(SUM(sale_tax_invoice_total_sgst + sale_tax_invoice_total_cgst + sale_tax_invoice_total_igst), 0) as tax,COALESCE(SUM(sale_tax_invoice_total_amount), 0) as sale_tax_invoice_total_amount,COALESCE(SUM(sale_tax_invoice_total_net_amount), 0) as sale_tax_invoice_total_net_amount FROM erp_sale_tax_invoice WHERE user_id='${user_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND is_delete_status='0' GROUP BY MONTH(sale_tax_invoice_entry_date) ORDER BY ${orderby} ${orderformat} LIMIT ${total_limit}`;

        conn.query(getsaleregisterlistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            var totalsaleregistercount = `SELECT COUNT(id), 0) as Count FROM erp_sale_tax_invoice WHERE user_id='${user_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND is_delete_status='0' GROUP BY MONTH(sale_tax_invoice_entry_date) `;
        
            conn.query(totalsaleregistercount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
        */
    },

    // GET SALE QUALITY REPORT LISTING DATA API //
    getsalereportlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const total_limit = body?.limit ? body?.limit : 12;
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

        const search_sale_tax_invoice_date = search?.sale_tax_invoice_date ? search?.sale_tax_invoice_date : '';
        const search_sale_tax_invoice_no = search?.sale_tax_invoice_no ? search?.sale_tax_invoice_no : '';
        const search_sale_tax_invoice_child_meter = search?.sale_tax_invoice_child_meter ? search?.sale_tax_invoice_child_meter : '';
        const search_sale_tax_invoice_child_quality_colour = search?.sale_tax_invoice_child_quality_colour ? search?.sale_tax_invoice_child_quality_colour : '';
        const search_sale_tax_invoice_child_work = search?.sale_tax_invoice_child_work ? search?.sale_tax_invoice_child_work : '';
        const search_sale_tax_invoice_child_work_colour = search?.sale_tax_invoice_child_work_colour ? search?.sale_tax_invoice_child_work_colour : '';
        const search_sale_tax_invoice_child_sgst = search?.sale_tax_invoice_child_sgst ? search?.sale_tax_invoice_child_sgst : '';
        const search_sale_tax_invoice_child_cgst = search?.sale_tax_invoice_child_cgst ? search?.sale_tax_invoice_child_cgst : '';
        const search_sale_tax_invoice_child_igst = search?.sale_tax_invoice_child_igst ? search?.sale_tax_invoice_child_igst : '';
        const search_sale_tax_invoice_child_taxable = search?.sale_tax_invoice_child_taxable ? search?.sale_tax_invoice_child_taxable : '';
        const search_sale_tax_invoice_child_amount = search?.sale_tax_invoice_child_amount ? search?.sale_tax_invoice_child_amount : '';
        const search_sale_tax_invoice_tcs_amt = search?.sale_tax_invoice_tcs_amt ? search?.sale_tax_invoice_tcs_amt : '';
        const search_jober_name = search?.jober_name ? search?.jober_name.trim().toLowerCase() : '';
        const search_quality_name = search?.quality_name ? search?.quality_name.trim().toLowerCase() : '';
        const search_buyer_name = search?.buyer_name ? search?.buyer_name.trim().toLowerCase() : '';
        
        const sea_sale_tax_invoice_date =  search_sale_tax_invoice_date != '' ? ` AND sale.sale_tax_invoice_date LIKE '%${search_sale_tax_invoice_date}%'` : '';
        const sea_sale_tax_invoice_no =  search_sale_tax_invoice_no != '' ? ` AND sale.sale_tax_invoice_no LIKE '%${search_sale_tax_invoice_no}%'` : '';
        const sea_sale_tax_invoice_child_meter =  search_sale_tax_invoice_child_meter != '' ? ` AND sale_child.sale_tax_invoice_child_meter LIKE '%${search_sale_tax_invoice_child_meter}%'` : '';
        const sea_sale_tax_invoice_child_quality_colour =  search_sale_tax_invoice_child_quality_colour != '' ? ` AND sale_child.sale_tax_invoice_child_quality_colour LIKE '%${search_sale_tax_invoice_child_quality_colour}%'` : '';
        const sea_sale_tax_invoice_child_work =  search_sale_tax_invoice_child_work != '' ? ` AND sale_child.sale_tax_invoice_child_work LIKE '%${search_sale_tax_invoice_child_work}%'` : '';
        const sea_sale_tax_invoice_child_work_colour =  search_sale_tax_invoice_child_work_colour != '' ? ` AND sale_child.sale_tax_invoice_child_work_colour LIKE '%${search_sale_tax_invoice_child_work_colour}%'` : '';
        const sea_sale_tax_invoice_child_sgst =  search_sale_tax_invoice_child_sgst != '' ? ` AND sale_child.sale_tax_invoice_child_sgst LIKE '%${search_sale_tax_invoice_child_sgst}%'` : '';
        const sea_sale_tax_invoice_child_cgst =  search_sale_tax_invoice_child_cgst != '' ? ` AND sale_child.sale_tax_invoice_child_cgst LIKE '%${search_sale_tax_invoice_child_cgst}%'` : '';
        const sea_sale_tax_invoice_child_igst =  search_sale_tax_invoice_child_igst != '' ? ` AND sale.sale_tax_invoice_child_igst LIKE '%${search_sale_tax_invoice_child_igst}%'` : '';
        const sea_sale_tax_invoice_child_taxable =  search_sale_tax_invoice_child_taxable != '' ? ` AND sale_child.sale_tax_invoice_child_taxable LIKE '%${search_sale_tax_invoice_child_taxable}%'` : '';
        const sea_sale_tax_invoice_child_amount =  search_sale_tax_invoice_child_amount != '' ? ` AND sale_child.sale_tax_invoice_child_amount LIKE '%${search_sale_tax_invoice_child_amount}%'` : '';
        const sea_sale_tax_invoice_tcs_amt =  search_sale_tax_invoice_tcs_amt != '' ? ` AND sale.sale_tax_invoice_tcs_amt LIKE '%${search_sale_tax_invoice_tcs_amt}%'` : '';
        const sea_jober_name =  search_jober_name != '' ? ` AND jober.party_name LIKE '%${search_jober_name}%'` : '';
        const sea_quality_name =  search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_buyer_name =  search_buyer_name != '' ? ` AND buyer.party_name LIKE '%${search_buyer_name}%'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(sale.sale_tax_invoice_date) >='${from_date}' AND DATE(sale.sale_tax_invoice_date) <='${to_date}'` : '';

        var getsalereportlistingdata = `SELECT sale.sale_tax_invoice_date,sale.sale_tax_invoice_no,sale_child.sale_tax_invoice_child_meter,sale_child.sale_tax_invoice_child_quality_colour,sale_child.sale_tax_invoice_child_work,sale_child.sale_tax_invoice_child_work_colour,sale_child.sale_tax_invoice_child_sgst,null as sale_tax_invoice_child_sgst_amt,sale_child.sale_tax_invoice_child_cgst,null as sale_tax_invoice_child_cgst_amt,sale_child.sale_tax_invoice_child_igst,null as sale_tax_invoice_child_igst_amt,sale_child.sale_tax_invoice_child_taxable,sale_child.sale_tax_invoice_child_amount,sale.sale_tax_invoice_tcs_amt,quality.quality_name,buyer.party_name as buyer_name,jober.party_name as jober_name FROM erp_sale_tax_invoice as sale LEFT JOIN erp_sale_tax_invoice_child as sale_child ON sale_child. sale_tax_invoice_id=sale.id LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_quality as quality ON quality.id=sale_child.quality_id LEFT JOIN erp_party as jober ON jober.id=sale_child.jober_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' AND sale_child.is_delete_status='0' ${sea_sale_tax_invoice_date} ${sea_sale_tax_invoice_no} ${sea_sale_tax_invoice_child_meter} ${sea_sale_tax_invoice_child_quality_colour} ${sea_sale_tax_invoice_child_work} ${sea_sale_tax_invoice_child_work_colour} ${sea_sale_tax_invoice_child_sgst} ${sea_sale_tax_invoice_child_cgst} ${sea_sale_tax_invoice_child_igst} ${sea_sale_tax_invoice_child_taxable} ${sea_sale_tax_invoice_child_amount} ${sea_sale_tax_invoice_tcs_amt} ${sea_jober_name} ${sea_quality_name} ${sea_buyer_name} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getsalereportlistingdata,(error,data) => {

            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            var totalsalereportcount = `SELECT COUNT(sale.id) as Count FROM erp_sale_tax_invoice as sale LEFT JOIN erp_sale_tax_invoice_child as sale_child ON sale_child. sale_tax_invoice_id=sale.id LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_quality as quality ON quality.id=sale_child.quality_id LEFT JOIN erp_party as jober ON jober.id=sale_child.jober_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' AND sale_child.is_delete_status='0' ${sea_sale_tax_invoice_date} ${sea_sale_tax_invoice_no} ${sea_sale_tax_invoice_child_meter} ${sea_sale_tax_invoice_child_quality_colour} ${sea_sale_tax_invoice_child_work} ${sea_sale_tax_invoice_child_work_colour} ${sea_sale_tax_invoice_child_sgst} ${sea_sale_tax_invoice_child_cgst} ${sea_sale_tax_invoice_child_igst} ${sea_sale_tax_invoice_child_taxable} ${sea_sale_tax_invoice_child_amount} ${sea_sale_tax_invoice_tcs_amt} ${sea_jober_name} ${sea_quality_name} ${sea_buyer_name} ${date_range_query}`;
            
            conn.query(totalsalereportcount,(error,countdata) => {

                data.forEach(element => {
                    element.sale_tax_invoice_date = constant.moment(element.sale_tax_invoice_date).format('YYYY-MM-DD');
                    element.sale_tax_invoice_child_sgst_amt = (element.sale_tax_invoice_child_sgst_amt + (element.sale_tax_invoice_child_sgst/100) * element.sale_tax_invoice_child_taxable).toFixed(2);
                    element.sale_tax_invoice_child_cgst_amt = (element.sale_tax_invoice_child_cgst_amt + (element.sale_tax_invoice_child_cgst/100) * element.sale_tax_invoice_child_taxable).toFixed(2);
                    element.sale_tax_invoice_child_igst_amt = (element.sale_tax_invoice_child_igst_amt + (element.sale_tax_invoice_child_igst/100) * element.sale_tax_invoice_child_taxable).toFixed(2);
                    element.export = constant.DefaultExportopetions; 
                });

                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },
};


export default AllSaleRegisterApis;
    
