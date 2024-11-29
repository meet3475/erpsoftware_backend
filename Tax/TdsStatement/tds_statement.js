import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllTdsStatementApis = {
    
    // GET tds statement LISTING DATA API //
    gettdsstatementlistingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const tds_on_id = body?.tds_on_id ? body?.tds_on_id : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;

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

        const purchase_tds_on_id = tds_on_id > 0 ? ` AND purchase.tds_on_id= '${tds_on_id}'` : '';
        const mill_tds_on_id = tds_on_id > 0 ? ` AND mill.tds_on_id= '${tds_on_id}'` : '';
        const jober_tds_on_id = tds_on_id > 0 ? ` AND jober.tds_on_id= '${tds_on_id}'` : '';
        const purchase_nature_of_payment_id = nature_of_payment_id > 0 ? ` AND purchase.nature_of_payment_id= '${nature_of_payment_id}'` : '';
        const mill_nature_of_payment_id = nature_of_payment_id > 0 ? ` AND mill.nature_of_payment_id= '${nature_of_payment_id}'` : '';
        const jober_nature_of_payment_id = nature_of_payment_id > 0 ? ` AND jober.nature_of_payment_id= '${nature_of_payment_id}'` : '';
        const purchase_party_id = party_id > 0 ? ` AND purchase.supplier_id= '${party_id}'` : '';
        const mill_party_id = party_id > 0 ? ` AND mill.mill_id= '${party_id}'` : '';
        const jober_id = party_id > 0 ? ` AND jober.jober_id= '${party_id}'` : '';

        const purchase_date_range_query = from_date != '' ? ` AND DATE(purchase.journal_purchase_invoice_date) >='${from_date}' AND DATE(purchase.journal_purchase_invoice_date) <='${to_date}'` : '';
        const mill_date_range_query = from_date != '' ? ` AND DATE(mill.mill_tax_invoice_date) >='${from_date}' AND DATE(mill.mill_tax_invoice_date) <='${to_date}'` : '';
        const jober_date_range_query = from_date != '' ? ` AND DATE(jober.jober_invoice_date) >='${from_date}' AND DATE(jober.jober_invoice_date) <='${to_date}'` : '';
               
        var gettdsstatementlistingdata = `SELECT purchase.journal_purchase_invoice_date as invoice_date,purchase.journal_purchase_invoice_no as invoice_no,party.party_name,purchase.journal_purchase_lf_no as lf_no,voucher.voucher_no,party.party_pancard_no as pancard_no,(SELECT party.party_name FROM erp_party as party WHERE party.id=voucher.to_party_id) as tds_account,type.type_code as section,purchase.journal_purchase_child_total_taxable as total_taxable,party.party_applicable_rate as rate,purchase.journal_purchase_tds as tds_amt FROM erp_party as party LEFT JOIN erp_journal_purchase as purchase ON purchase.supplier_id=party.id LEFT JOIN erp_type as type ON type.id=party.nature_of_payment_id LEFT JOIN erp_voucher as voucher ON voucher.from_party_id=party.id LEFT JOIN erp_account_head as head ON head.id=party.nature_of_payment_id WHERE party.user_id IN ('${user_id}','0') AND party.company_id IN ('${company_id}','0') AND party.is_delete_status='0' AND purchase.user_id='${user_id}' AND purchase.company_id<='${company_id}' AND purchase.year_id<='${year_id}' AND purchase.branch_id<='${branch_id}' AND party.is_tds_applicable='1' AND purchase.is_tds_applicable='1' AND purchase.is_delete_status='0' AND voucher.user_id='${user_id}' AND voucher.branch_id<='${branch_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.voucher_type='journal' AND voucher.is_delete_status='0' AND purchase.supplier_id=voucher.from_party_id AND purchase.journal_purchase_tds=voucher.voucher_amount ${purchase_tds_on_id} ${purchase_nature_of_payment_id} ${purchase_party_id} ${purchase_date_range_query} UNION ALL SELECT mill.mill_tax_invoice_date as invoice_date,mill.mill_tax_invoice_no as invoice_no,party.party_name,mill.mill_tax_invoice_lf_no as lf_no,voucher.voucher_no,party.party_pancard_no as pancard_no,(SELECT party.party_name FROM erp_party as party WHERE party.id=voucher.to_party_id AND party.is_delete_status='0') as tds_account,type.type_code as section,mill.mill_tax_invoice_total_taxable_amount as total_taxable,party.party_applicable_rate as rate,mill.mill_tax_invoice_total_tds as tds_amt FROM erp_party as party LEFT JOIN erp_mill_tax_invoice as mill ON mill.mill_id=party.id LEFT JOIN erp_type as type ON type.id=party.nature_of_payment_id LEFT JOIN erp_voucher as voucher ON voucher.from_party_id=party.id LEFT JOIN erp_account_head as head ON head.id=party.nature_of_payment_id WHERE party.user_id IN ('${user_id}','0') AND party.company_id IN ('${company_id}','0') AND party.is_delete_status='0' AND mill.user_id='${user_id}' AND mill.company_id<='${company_id}' AND mill.year_id<='${year_id}' AND mill.branch_id<='${branch_id}' AND party.is_tds_applicable='1' AND mill.is_tds_applicable='1' AND mill.is_delete_status='0' AND voucher.user_id='${user_id}' AND voucher.branch_id<='${branch_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.voucher_type='journal' AND voucher.is_delete_status='0' AND mill.mill_id=voucher.from_party_id AND mill.mill_tax_invoice_total_tds=voucher.voucher_amount ${mill_tds_on_id} ${mill_nature_of_payment_id} ${mill_party_id} ${mill_date_range_query} UNION ALL SELECT jober.jober_invoice_date as invoice_date,jober.jober_invoice_no as invoice_no,party.party_name,jober.jober_invoice_lf_no as lf_no,voucher.voucher_no,party.party_pancard_no as pancard_no,(SELECT party.party_name FROM erp_party as party WHERE party.id=voucher.to_party_id) as tds_account,type.type_code as section,jober.jober_invoice_total_taxable as total_taxable,party.party_applicable_rate as rate,jober.jober_invoice_total_tds as tds_amt FROM erp_party as party LEFT JOIN erp_jober_invoice as jober ON jober.jober_id=party.id LEFT JOIN erp_jober_invoice_child as jober_child ON jober_child.jober_invoice_id=jober.id LEFT JOIN erp_type as type ON type.id=party.nature_of_payment_id LEFT JOIN erp_voucher as voucher ON voucher.from_party_id=party.id LEFT JOIN erp_account_head as head ON head.id=party.nature_of_payment_id WHERE party.user_id IN ('${user_id}','0') AND party.company_id IN ('${company_id}','0') AND party.is_delete_status='0' AND jober.user_id='${user_id}' AND jober.company_id<='${company_id}' AND jober.year_id<='${year_id}' AND jober.branch_id<='${branch_id}' AND party.is_tds_applicable='1' AND jober.is_tds_applicable='1' AND jober.is_delete_status='0' AND voucher.user_id='${user_id}' AND voucher.branch_id<='${branch_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.voucher_type='journal' AND voucher.is_delete_status='0' AND jober.jober_id=voucher.from_party_id AND jober.jober_invoice_total_tds=voucher.voucher_amount ${jober_tds_on_id} ${jober_nature_of_payment_id} ${jober_id} ${jober_date_range_query}`;

        conn.query(gettdsstatementlistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            data.forEach(tdsstatementdata => {
                tdsstatementdata.invoice_date = constant.moment(tdsstatementdata.invoice_date).format('YYYY-MM-DD');
                tdsstatementdata.export = constant.DefaultExportopetions;
            });
            
            res?.send({ Status:200,Count:data?.length,Message:'Data found',Data:data });
            next();
            return;
        });
    },
};


export default AllTdsStatementApis;
    
