import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllRegisterApis = {
    
    // GET REGISTER LISTING DATA API //
    getregisterlistingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const total_limit = body?.limit ? body?.limit : 12;
        const sortby = body?.sortby ? body?.sortby : 'id-DESC';
        const filterData = body?.filter_data ? body?.filter_data : []
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
       
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
            var getregisterlistingdata = `SELECT DATE_FORMAT(purchase_tax_invoice_date, '%M-%Y') as month,COALESCE(SUM(purchase_tax_invoice_total_taxable),0) as purchase_tax_invoice_total_taxable,COALESCE(SUM(purchase_tax_invoice_total_sgst),0) as purchase_tax_invoice_total_sgst,COALESCE(SUM(purchase_tax_invoice_total_cgst),0) as purchase_tax_invoice_total_cgst,COALESCE(SUM(purchase_tax_invoice_total_igst),0) as purchase_tax_invoice_total_igst,COALESCE(SUM(purchase_tax_invoice_total_sgst + purchase_tax_invoice_total_cgst + purchase_tax_invoice_total_igst),0) as tax,COALESCE(SUM(purchase_tax_invoice_total_amount),0) as purchase_tax_invoice_total_amount,COALESCE(SUM(purchase_tax_invoice_net_amount),0) as purchase_tax_invoice_net_amount FROM erp_purchase_tax_invoice WHERE user_id='${user_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND is_delete_status='0' AND purchase_tax_invoice_date LIKE '${filterData[index]}%'`;

            conn.query(getregisterlistingdata,(error,data) => {
                data[0].purchase_tax_invoice_total_taxable=data[0].purchase_tax_invoice_total_taxable.toFixed(2);
                data[0].purchase_tax_invoice_total_sgst=data[0].purchase_tax_invoice_total_sgst.toFixed(2);
                data[0].purchase_tax_invoice_total_cgst=data[0].purchase_tax_invoice_total_cgst.toFixed(2);
                data[0].purchase_tax_invoice_total_igst=data[0].purchase_tax_invoice_total_igst.toFixed(2);
                data[0].tax=data[0].tax.toFixed(2);
                data[0].purchase_tax_invoice_total_amount=data[0].purchase_tax_invoice_total_amount.toFixed(2);
                data[0].purchase_tax_invoice_net_amount=data[0].purchase_tax_invoice_net_amount.toFixed(2);

                if (data[0]?.tax >= 0) 
                {
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
    },

    // GET PURCHASE QUALITY REPORT LISTING DATA API //
    getpurchasereportlistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const supplier_id = body?.supplier_id ? body?.supplier_id : 0;
        const total_limit = body?.limit ? body?.limit : 12;
        const sortby = body?.sortby ? body?.sortby : 'tax_child.id-DESC';
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

        const search_purchase_tax_invoice_date = search?.purchase_tax_invoice_date ? search?.purchase_tax_invoice_date : '';
        const search_purchase_tax_invoice_no = search?.purchase_tax_invoice_no ? search?.purchase_tax_invoice_no : '';
        const search_purchase_tax_invoice_child_unit_sent = search?.purchase_tax_invoice_child_unit_sent ? search?.purchase_tax_invoice_child_unit_sent : '';
        const search_purchase_tax_invoice_child_net_meter = search?.purchase_tax_invoice_child_net_meter ? search?.purchase_tax_invoice_child_net_meter : '';
        const search_purchase_tax_invoice_child_rate = search?.purchase_tax_invoice_child_rate ? search?.purchase_tax_invoice_child_rate : '';
        const search_purchase_tax_invoice_child_total = search?.purchase_tax_invoice_child_total ? search?.purchase_tax_invoice_child_total : '';
        const search_purchase_tax_invoice_child_taxable = search?.purchase_tax_invoice_child_taxable ? search?.purchase_tax_invoice_child_taxable : '';
        const search_purchase_tax_invoice_child_amount = search?.purchase_tax_invoice_child_amount ? search?.purchase_tax_invoice_child_amount : '';
        const search_puchase_tax_invoice_tcs_amt = search?.puchase_tax_invoice_tcs_amt ? search?.puchase_tax_invoice_tcs_amt : '';
        const search_purchase_tax_invoice_lr_no = search?.purchase_tax_invoice_lr_no ? search?.purchase_tax_invoice_lr_no : '';
        const search_supplier_name = search?.supplier_name ? search?.supplier_name.trim().toLowerCase() : '';
        const search_quality_name = search?.quality_name ? search?.quality_name.trim().toLowerCase() : '';
        const search_quality_hsn = search?.quality_hsn ? search?.quality_hsn : '';
        
        const sea_purchase_tax_invoice_date =  search_purchase_tax_invoice_date != '' ? ` AND tax_par.purchase_tax_invoice_date LIKE '%${search_purchase_tax_invoice_date}%'` : '';
        const sea_purchase_tax_invoice_no =  search_purchase_tax_invoice_no != '' ? ` AND tax_par.purchase_tax_invoice_no LIKE '%${search_purchase_tax_invoice_no}%'` : '';
        const sea_purchase_tax_invoice_child_unit_sent =  search_purchase_tax_invoice_child_unit_sent != '' ? ` AND tax_child.purchase_tax_invoice_child_unit_sent LIKE '%${search_purchase_tax_invoice_child_unit_sent}%'` : '';
        const sea_purchase_tax_invoice_child_net_meter =  search_purchase_tax_invoice_child_net_meter != '' ? ` AND tax_child.purchase_tax_invoice_child_net_meter LIKE '%${search_purchase_tax_invoice_child_net_meter}%'` : '';
        const sea_purchase_tax_invoice_child_rate =  search_purchase_tax_invoice_child_rate != '' ? ` AND tax_child.purchase_tax_invoice_child_rate LIKE '%${search_purchase_tax_invoice_child_rate}%'` : '';
        const sea_purchase_tax_invoice_child_total =  search_purchase_tax_invoice_child_total != '' ? ` AND tax_child.purchase_tax_invoice_child_total LIKE '%${search_purchase_tax_invoice_child_total}%'` : '';
        const sea_purchase_tax_invoice_child_taxable =  search_purchase_tax_invoice_child_taxable != '' ? ` AND tax_child.purchase_tax_invoice_child_taxable LIKE '%${search_purchase_tax_invoice_child_taxable}%'` : '';
        const sea_purchase_tax_invoice_child_amount =  search_purchase_tax_invoice_child_amount != '' ? ` AND tax_child.purchase_tax_invoice_child_amount LIKE '%${search_purchase_tax_invoice_child_amount}%'` : '';
        const sea_puchase_tax_invoice_tcs_amt =  search_puchase_tax_invoice_tcs_amt != '' ? ` AND tax_par.puchase_tax_invoice_tcs_amt LIKE '%${search_puchase_tax_invoice_tcs_amt}%'` : '';
        const sea_purchase_tax_invoice_lr_no =  search_purchase_tax_invoice_lr_no != '' ? ` AND tax_par.purchase_tax_invoice_lr_no LIKE '%${search_purchase_tax_invoice_lr_no}%'` : '';
        const sea_supplier_name =  search_supplier_name != '' ? ` AND supplier.party_name LIKE '%${search_supplier_name}%'` : '';
        const sea_quality_name =  search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_quality_hsn =  search_quality_hsn != '' ? ` AND tax_child.quality_hsn LIKE '%${search_quality_hsn}%'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(tax_par.purchase_tax_invoice_date) >='${from_date}' AND DATE(tax_par.purchase_tax_invoice_date) <='${to_date}'` : '';

        const supplier_query = supplier_id > 0 ? ` AND tax_par.supplier_id='${supplier_id}'` : '';

        var getpurchasereportlistingdata = `SELECT tax_par.purchase_tax_invoice_date,tax_par.purchase_tax_invoice_no,tax_child.purchase_tax_invoice_child_unit_sent,tax_child.purchase_tax_invoice_child_net_meter,tax_child.purchase_tax_invoice_child_rate,tax_child.purchase_tax_invoice_child_total,tax_child.purchase_tax_invoice_child_sgst,null as purchase_tax_invoice_child_sgst_amt,tax_child.purchase_tax_invoice_child_cgst,null as purchase_tax_invoice_child_cgst_amt,tax_child.purchase_tax_invoice_child_igst,null as purchase_tax_invoice_child_igst_amt,tax_child.purchase_tax_invoice_child_taxable,tax_child.purchase_tax_invoice_child_amount,tax_par.puchase_tax_invoice_tcs_amt,tax_par.purchase_tax_invoice_lr_no,quality.quality_name,tax_child.purchase_tax_invoice_child_hsn as quality_hsn,supplier.party_name as supplier_name FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.purchase_tax_invoice_id=tax_par.id LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id LEFT JOIN erp_quality as quality ON quality.id=tax_child.quality_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND tax_par.is_delete_status='0' AND tax_child.is_delete_status='0' ${sea_purchase_tax_invoice_date} ${sea_purchase_tax_invoice_no} ${sea_purchase_tax_invoice_child_unit_sent} ${sea_purchase_tax_invoice_child_net_meter} ${sea_purchase_tax_invoice_child_rate} ${sea_purchase_tax_invoice_child_total} ${sea_purchase_tax_invoice_child_taxable} ${sea_purchase_tax_invoice_child_amount} ${sea_puchase_tax_invoice_tcs_amt} ${sea_purchase_tax_invoice_lr_no} ${sea_supplier_name} ${sea_quality_name} ${sea_quality_hsn} ${date_range_query} ${supplier_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getpurchasereportlistingdata,(error,data) => {

            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            var totalpurchasereportcount = `SELECT COUNT(tax_child.id) as Count FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_purchase_tax_invoice_child as tax_child ON tax_child.purchase_tax_invoice_id=tax_par.id LEFT JOIN erp_party as supplier ON supplier.id=tax_par.supplier_id LEFT JOIN erp_quality as quality ON quality.id=tax_child.quality_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND tax_par.is_delete_status='0' AND tax_child.is_delete_status='0' ${sea_purchase_tax_invoice_date} ${sea_purchase_tax_invoice_no} ${sea_purchase_tax_invoice_child_unit_sent} ${sea_purchase_tax_invoice_child_net_meter} ${sea_purchase_tax_invoice_child_rate} ${sea_purchase_tax_invoice_child_total} ${sea_purchase_tax_invoice_child_taxable} ${sea_purchase_tax_invoice_child_amount} ${sea_puchase_tax_invoice_tcs_amt} ${sea_purchase_tax_invoice_lr_no} ${sea_supplier_name} ${sea_quality_name} ${sea_quality_hsn} ${date_range_query} ${supplier_query}`;
            
            conn.query(totalpurchasereportcount,(error,countdata) => {

                data.forEach(element => {
                    element.purchase_tax_invoice_date = constant.moment(element.purchase_tax_invoice_date).format('YYYY-MM-DD');
                    element.purchase_tax_invoice_child_sgst_amt = (element.purchase_tax_invoice_child_sgst_amt + (element.purchase_tax_invoice_child_sgst/100) * element.purchase_tax_invoice_child_taxable).toFixed(2);
                    element.purchase_tax_invoice_child_cgst_amt = (element.purchase_tax_invoice_child_cgst_amt + (element.purchase_tax_invoice_child_cgst/100) * element.purchase_tax_invoice_child_taxable).toFixed(2);
                    element.purchase_tax_invoice_child_igst_amt = (element.purchase_tax_invoice_child_igst_amt + (element.purchase_tax_invoice_child_igst/100) * element.purchase_tax_invoice_child_taxable).toFixed(2);
                    element.export = constant.DefaultExportopetions;
                });

                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },
};


export default AllRegisterApis;
    
