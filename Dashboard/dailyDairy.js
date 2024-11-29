import constant from '../Config/constant.js';
import conn from '../Config/connection.js';

const DailyDairyApi = {

    // GET COUNTING OF DAILY DAIRY DATA API //
    getdailydairycountingdata: (req,res,next) => {
        
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        
        var getdailydairycountingdata = `SELECT (SELECT COALESCE(SUM(sale.sale_tax_invoice_total_net_amount),0) FROM erp_sale_tax_invoice as sale WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}') as sale_amount,(SELECT COALESCE(SUM(sale_return.sale_return_total_net_amount),0) FROM erp_sale_return as sale_return WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.year_id<='${year_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.sale_return_type_id = '38') as sale_return_amount,SUM((SELECT COALESCE(SUM(purchase.purchase_tax_invoice_net_amount),0) FROM erp_purchase_tax_invoice as purchase WHERE purchase.user_id='${user_id}' AND purchase.company_id<='${company_id}' AND purchase.year_id<='${year_id}' AND purchase.branch_id<='${branch_id}') + (SELECT COALESCE(SUM(journal.journal_purchase_child_net_total),0) FROM erp_journal_purchase as journal WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.year_id<='${year_id}' AND journal.branch_id<='${branch_id}')) as purchase_amount,(SELECT COALESCE(SUM(pur_return.purchase_return_total_net_amount),0) FROM erp_purchase_return as pur_return WHERE pur_return.user_id='${user_id}' AND pur_return.company_id<='${company_id}' AND pur_return.year_id<='${year_id}' AND pur_return.branch_id<='${branch_id}') as purchase_return_amount,(SELECT COALESCE(SUM(voucher.voucher_amount), 0) FROM erp_voucher as voucher WHERE voucher_type='receipt' AND voucher.voucher_transaction_type='cash' AND voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}') as cash_receivable_amount,(SELECT COALESCE(SUM(voucher.voucher_amount), 0) FROM erp_voucher as voucher WHERE voucher_type='payment' AND voucher.voucher_transaction_type='cash' AND voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}') as cash_payble_amount,(SELECT COALESCE(SUM(voucher.voucher_amount), 0) FROM erp_voucher as voucher WHERE voucher_type='receipt' AND voucher.voucher_transaction_type='bank' AND voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}') as bank_receivable_amount,(SELECT COALESCE(SUM(voucher.voucher_amount), 0) FROM erp_voucher as voucher WHERE voucher_type='payment' AND voucher.voucher_transaction_type='bank' AND voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}') as bank_payble_amount FROM erp_user WHERE id='${user_id}';`;

        conn.query(getdailydairycountingdata,(error,data) => {
            
            if (data?.length > 0) 
            {   
                res?.send({ Status:200,Count:data?.length,Message:'Data found',Data:data[0] });
                next();
                return;
            }
            else
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
            }
        });
    },

    // GET COUNTING OF DAILY DAIRY DATA API //
    getdashboardcountingdata: (req,res,next) => {
            
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        
        var getdashboardcountingdata = `SELECT (SELECT COALESCE(SUM(sale.sale_tax_invoice_total_net_amount),0) FROM erp_sale_tax_invoice as sale WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}') as sale_amount,(SELECT COALESCE(SUM(sale_return.sale_return_total_net_amount),0) FROM erp_sale_return as sale_return WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.year_id<='${year_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.sale_return_type_id = '38') as sale_return_amount,SUM((SELECT COALESCE(SUM(purchase.purchase_tax_invoice_net_amount),0) FROM erp_purchase_tax_invoice as purchase WHERE purchase.user_id='${user_id}' AND purchase.company_id<='${company_id}' AND purchase.year_id<='${year_id}' AND purchase.branch_id<='${branch_id}') + (SELECT COALESCE(SUM(journal.journal_purchase_child_net_total),0) FROM erp_journal_purchase as journal WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.year_id<='${year_id}' AND journal.branch_id<='${branch_id}')) as purchase_amount,(SELECT COALESCE(SUM(pur_return.purchase_return_total_net_amount),0) FROM erp_purchase_return as pur_return WHERE pur_return.user_id='${user_id}' AND pur_return.company_id<='${company_id}' AND pur_return.year_id<='${year_id}' AND pur_return.branch_id<='${branch_id}') as purchase_return_amount,(SELECT COALESCE(SUM(voucher.voucher_amount), 0) FROM erp_voucher as voucher WHERE voucher_type='receipt' AND voucher.voucher_transaction_type='cash' AND voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}') as cash_receivable_amount,(SELECT COALESCE(SUM(voucher.voucher_amount), 0) FROM erp_voucher as voucher WHERE voucher_type='payment' AND voucher.voucher_transaction_type='cash' AND voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}') as cash_payble_amount,(SELECT COALESCE(SUM(voucher.voucher_amount), 0) FROM erp_voucher as voucher WHERE voucher_type='receipt' AND voucher.voucher_transaction_type='bank' AND voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}') as bank_receivable_amount,(SELECT COALESCE(SUM(voucher.voucher_amount), 0) FROM erp_voucher as voucher WHERE voucher_type='payment' AND voucher.voucher_transaction_type='bank' AND voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}') as bank_payble_amount FROM erp_user WHERE id='${user_id}';`;

        conn.query(getdashboardcountingdata,(error,data) => {
            
            if (data?.length > 0) 
            {   
                res?.send({ Status:200,Count:data?.length,Message:'Data found',Data:data[0] });
                next();
                return;
            }
            else
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
            }
        });
    }

};

export default DailyDairyApi;







       
         
		