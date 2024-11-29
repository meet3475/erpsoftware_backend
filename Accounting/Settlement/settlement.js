import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllSettlementApis = {
    
    // GET settlement LISTING DATA API //
    getsettlementlistingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'voucher.id-DESC';
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
        if (party_id.length == 0 || party_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Year ID',Data:[] });
            next();
            return;
        }

        const settlement_array = [];

        var getsettlementlistingdata = `SELECT voucher.id as voucher_id,voucher.voucher_date,voucher.voucher_no,voucher.voucher_type,voucher.voucher_transaction_type,voucher.voucher_amount,(SELECT SUM(voucher_child_balance) FROM erp_voucher_child WHERE voucher_id=voucher.id AND voucher_child_from_invoice_type='voucher-receipt' AND is_delete_status='0' AND is_settlement='0') as voucher_child_total_amount,NULL as voucher_child_data,'voucher' as type FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.from_party_id='${party_id}' AND voucher.voucher_type='receipt' AND voucher.is_delete_status='0' AND (SELECT COUNT(id) FROM erp_voucher_child WHERE voucher_id=voucher.id AND voucher_child_from_invoice_type='voucher-receipt' AND is_delete_status='0' AND is_settlement='0') > '0' UNION ALL SELECT voucher.id as voucher_id,voucher.voucher_date,voucher.voucher_no,voucher.voucher_type,voucher.voucher_transaction_type,voucher.voucher_amount,(SELECT SUM(voucher_child_balance) FROM erp_voucher_child WHERE voucher_id=voucher.id AND voucher_child_from_invoice_type='voucher-journal' AND is_delete_status='0' AND is_settlement='0') as voucher_child_total_amount,NULL as voucher_child_data,'voucher' as type FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.from_party_id='${party_id}' AND voucher.voucher_type='journal' AND voucher.is_delete_status='0' AND (SELECT COUNT(id) FROM erp_voucher_child WHERE voucher_id=voucher.id AND is_delete_status='0' AND voucher_child_from_invoice_type='voucher-journal' AND is_settlement='0') > '0' UNION ALL SELECT voucher.id as voucher_id,voucher.voucher_date,voucher.voucher_no,voucher.voucher_type,voucher.voucher_transaction_type,voucher.voucher_amount,(SELECT SUM(voucher_child_balance) FROM erp_voucher_child WHERE voucher_id=voucher.id AND voucher_child_from_invoice_type='voucher-payment' AND is_delete_status='0' AND is_settlement='0') as voucher_child_total_amount,NULL as voucher_child_data,'voucher' as type FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.to_party_id='${party_id}' AND voucher.voucher_type IN ('payment') AND voucher.is_delete_status='0' AND (SELECT COUNT(id) FROM erp_voucher_child WHERE voucher_id=voucher.id AND is_delete_status='0' AND voucher_child_from_invoice_type='voucher-payment' AND is_settlement='0') > '0'`;

        conn.query(getsettlementlistingdata,(error,voucherdata) => {
            
            // if (error || voucherdata?.length == 0) 
            // {   
            //     res?.send({ Status:400,Count:0,Message:'settlement Data Not Found!!!!',Data:error });
            //     next();
            //     return;
            // }
            if (voucherdata?.length > 0) 
            {   
                voucherdata.forEach(element => {
                       
                    var voucherchilddata = `SELECT voucher_child.id as voucher_child_id,voucher_child.voucher_child_invoice_date,voucher_child.voucher_child_invoice_type,voucher_child.voucher_child_invoice_no,voucher_child.voucher_child_balance FROM erp_voucher_child as voucher_child WHERE voucher_child.user_id='${user_id}' AND voucher_child.voucher_id='${element.voucher_id}' AND voucher_child.party_id='${party_id}' AND voucher_child.company_id<='${company_id}' AND voucher_child.year_id<='${year_id}' AND voucher_child.branch_id<='${branch_id}' AND voucher_child.voucher_child_from_invoice_type IN ('voucher-receipt','voucher-payment','voucher-journal') AND voucher_child.is_delete_status='0' AND voucher_child.is_settlement='0'`;

                    conn.query(voucherchilddata,(error,childdata) => {
                       
                        childdata?.forEach(childvalue => {
                            childvalue.voucher_child_invoice_date = constant.moment(childvalue.voucher_child_invoice_date).format('YYYY-MM-DD');
                        });

                        element.voucher_date = constant.moment(element.voucher_date).format('YYYY-MM-DD');
                        element.voucher_child_data = childdata;
                    });
                    settlement_array.push(element);
                });
            }
        });

        var voucherchilddata = `SELECT voucher_child.* FROM erp_voucher_child as voucher_child WHERE voucher_child.user_id='${user_id}' AND voucher_child.branch_id<='${branch_id}' AND voucher_child.company_id<='${company_id}' AND voucher_child.year_id<='${year_id}' AND voucher_child.party_id='${party_id}' AND voucher_child.voucher_child_from_invoice_type IN ('voucher-receipt','voucher-payment','voucher-journal') AND voucher_child.is_delete_status='0' AND voucher_child.is_settlement='1'`;

        conn.query(voucherchilddata,(error,childdata) => {

            if (childdata?.length > 0) 
            {   
                childdata?.forEach(childdata => {
                    childdata.voucher_child_invoice_date = constant.moment(childdata.voucher_child_invoice_date).format('YYYY-MM-DD');
                });

                const childdata_array = {
                    "type":"settlement",
                    "child_data":childdata
                }
                settlement_array.push(childdata_array);
            }
        });

        setTimeout(() => {
            res?.send({ Status:200,Count:0,Message:'Data found',Data:settlement_array});
            next();
            return;
        }, 1000);
    },

    // GET settlement LISTING DATA API //
    getunsettlementlistingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'voucher_child.id-ASC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
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
        if (party_id.length == 0 || party_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Year ID',Data:[] });
            next();
            return;
        }

        var getunsettlementlistingdata = `SELECT 'purchase' as invoice_type,tax_par.id as purchase_tax_id,tax_par.id as ref_id,tax_par.purchase_tax_invoice_no as invoice_no,tax_par.purchase_tax_invoice_date as invoice_date,COALESCE(tax_par.purchase_tax_invoice_net_amount,0) - (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=tax_par.id AND voucher.voucher_child_invoice_type='purchase' AND voucher.is_delete_status='0') as invoice_amount,'right' as type FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_party as party ON party.id=tax_par.supplier_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND tax_par.supplier_id='${party_id}' AND tax_par.purchase_tax_invoice_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=tax_par.id AND voucher.voucher_child_invoice_type='purchase' AND voucher.is_delete_status='0') AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76')))) AND party.is_delete_status='0' AND tax_par.is_delete_status='0' UNION ALL SELECT 'purchasecreditnote' as invoice_type,return_par.id as purchase_return_id,return_par.id as ref_id,return_par.purchase_return_note_no as invoice_no,return_par.purchase_return_date as invoice_date,COALESCE(return_par.purchase_return_total_net_amount,0) -(SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='purchasecreditnote' AND voucher.is_delete_status='0') as invoice_amount,'right' as type FROM erp_purchase_return as return_par LEFT JOIN erp_party as party ON party.id=return_par.supplier_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.year_id<='${year_id}' AND return_par.branch_id<='${branch_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_total_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='purchasecreditnote' AND voucher.is_delete_status='0') AND return_par.purchase_return_type_id='95' AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76','30') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76','30') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76','30')))) AND party.is_delete_status='0' AND return_par.is_delete_status='0' UNION ALL SELECT 'purchasedebitnote' as invoice_type,return_par.id as purchase_return_id,return_par.id as ref_id,return_par.purchase_return_note_no as invoice_no,return_par.purchase_return_date as invoice_date,COALESCE(return_par.purchase_return_total_net_amount,0) - (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='purchasedebitnote' AND voucher.is_delete_status='0') as invoice_amount,'left' as type FROM erp_purchase_return as return_par LEFT JOIN erp_party as party ON party.id=return_par.supplier_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.year_id<='${year_id}' AND return_par.branch_id<='${branch_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_total_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='purchasedebitnote' AND voucher.is_delete_status='0') AND return_par.purchase_return_type_id='96' AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76','30') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76','30') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76','30')))) AND party.is_delete_status='0' AND return_par.is_delete_status='0' UNION ALL SELECT 'purchasereturn' as invoice_type,return_par.id as purchase_return_id,return_par.id as ref_id,return_par.purchase_return_note_no as invoice_no,return_par.purchase_return_date as invoice_date,COALESCE(return_par.purchase_return_total_net_amount,0) - (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='purchasereturn' AND voucher.is_delete_status='0') as invoice_amount,'left' as type FROM erp_purchase_return as return_par LEFT JOIN erp_party as party ON party.id=return_par.supplier_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.year_id<='${year_id}' AND return_par.branch_id<='${branch_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_total_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='purchasereturn' AND voucher.is_delete_status='0') AND return_par.purchase_return_type_id='39' AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76','30') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76','30') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76','30')))) AND party.is_delete_status='0' AND return_par.is_delete_status='0' UNION ALL SELECT 'journalpurchase' as invoice_type,journal.id as journal_purchase_id,journal.id as ref_id,journal.journal_purchase_invoice_no as invoice_no,journal.journal_purchase_invoice_date as invoice_date,COALESCE(journal.journal_purchase_child_net_total,0) - (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=journal.id AND voucher.voucher_child_invoice_type='journalpurchase' AND voucher.is_delete_status='0') as invoice_amount,'right' as type FROM erp_journal_purchase as journal LEFT JOIN erp_party as party ON party.id=journal.supplier_id WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.year_id<='${year_id}' AND journal.branch_id<='${branch_id}' AND journal.supplier_id='${party_id}' AND journal.journal_purchase_child_net_total > (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=journal.id AND voucher.voucher_child_invoice_type='journalpurchase' AND voucher.is_delete_status='0') AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','30') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','30') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','30')))) AND party.is_delete_status='0' AND journal.is_delete_status='0' UNION ALL SELECT 'mill' as invoice_type,mill.id as mill_invoice_id,mill.id as ref_id,mill.mill_tax_invoice_no as invoice_no,mill.mill_tax_invoice_date as invoice_date,COALESCE(mill.mill_tax_invoice_total_net_amount,0) - (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=mill.id AND voucher.voucher_child_invoice_type='mill' AND voucher.is_delete_status='0') as invoice_amount,'right' as type FROM erp_mill_tax_invoice as mill LEFT JOIN erp_party as party ON party.id=mill.mill_id WHERE mill.user_id='${user_id}' AND mill.company_id<='${company_id}' AND mill.year_id<='${year_id}' AND mill.branch_id<='${branch_id}' AND mill.mill_id='${party_id}' AND mill.mill_tax_invoice_total_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=mill.id AND voucher.voucher_child_invoice_type='mill' AND voucher.is_delete_status='0') AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('73') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('73') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('73')))) AND party.is_delete_status='0' AND mill.is_delete_status='0' UNION ALL SELECT 'sale' as invoice_type,tax_par.id as sale_tax_id,tax_par.id as ref_id,tax_par.sale_tax_invoice_no as invoice_no,tax_par.sale_tax_invoice_date as invoice_date,COALESCE(tax_par.sale_tax_invoice_total_net_amount,0) - (SELECT COALESCE(SUM(voucher.voucher_child_balance),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=tax_par.id AND voucher.voucher_child_invoice_type='sale' AND voucher.is_delete_status='0') as invoice_amount,'left' as type FROM erp_sale_tax_invoice as tax_par LEFT JOIN erp_party as party ON party.id=tax_par.buyer_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND tax_par.buyer_id='${party_id}' AND tax_par.sale_tax_invoice_total_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=tax_par.id AND voucher.voucher_child_invoice_type='sale' AND voucher.is_delete_status='0') AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id='27' OR account_head_id IN (SELECT id FROM erp_account_head WHERE id='27' OR account_head_id IN (SELECT id FROM erp_account_head WHERE id='27'))) AND party.is_delete_status='0' AND tax_par.is_delete_status='0' UNION ALL SELECT 'saledebitnote' as invoice_type,return_par.id as sale_return_id,return_par.id as ref_id,return_par.sale_return_note_no as invoice_no,return_par.sale_return_date as invoice_date,COALESCE(return_par.sale_return_total_net_amount,0) - (SELECT COALESCE(SUM(voucher.voucher_child_balance),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='saledebitnote' AND voucher.is_delete_status='0') as invoice_amount,'left' as type FROM erp_sale_return as return_par LEFT JOIN erp_party as party ON party.id=return_par.buyer_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.year_id<='${year_id}' AND return_par.branch_id<='${branch_id}' AND return_par.buyer_id='${party_id}' AND return_par.sale_return_type_id='97' AND return_par.sale_return_total_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='saledebitnote' AND voucher.is_delete_status='0') AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id='27' OR account_head_id IN (SELECT id FROM erp_account_head WHERE id='27' OR account_head_id IN (SELECT id FROM erp_account_head WHERE id='27'))) AND party.is_delete_status='0' AND return_par.is_delete_status='0' UNION ALL SELECT 'salecreditnote' as invoice_type,return_par.id as sale_return_id,return_par.id as ref_id,return_par.sale_return_note_no as invoice_no,return_par.sale_return_date as invoice_date,COALESCE(return_par.sale_return_total_net_amount,0) - (SELECT COALESCE(SUM(voucher.voucher_child_balance),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='salecreditnote' AND voucher.is_delete_status='0') as invoice_amount,'right' as type FROM erp_sale_return as return_par LEFT JOIN erp_party as party ON party.id=return_par.buyer_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.year_id<='${year_id}' AND return_par.branch_id<='${branch_id}' AND return_par.buyer_id='${party_id}' AND return_par.sale_return_type_id='98' AND return_par.sale_return_total_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='salecreditnote' AND voucher.is_delete_status='0') AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id='27' OR account_head_id IN (SELECT id FROM erp_account_head WHERE id='27' OR account_head_id IN (SELECT id FROM erp_account_head WHERE id='27'))) AND party.is_delete_status='0' AND return_par.is_delete_status='0' UNION ALL SELECT 'salereturn' as invoice_type,return_par.id as sale_return_id,return_par.id as ref_id,return_par.sale_return_note_no as invoice_no,return_par.sale_return_date as invoice_date,COALESCE(return_par.sale_return_total_net_amount,0) - (SELECT COALESCE(SUM(voucher.voucher_child_balance),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='salereturn' AND voucher.is_delete_status='0') as invoice_amount,'right' as type FROM erp_sale_return as return_par LEFT JOIN erp_party as party ON party.id=return_par.buyer_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.year_id<='${year_id}' AND return_par.branch_id<='${branch_id}' AND return_par.buyer_id='${party_id}' AND return_par.sale_return_type_id='38' AND return_par.sale_return_total_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='salereturn' AND voucher.is_delete_status='0') AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id='27' OR account_head_id IN (SELECT id FROM erp_account_head WHERE id='27' OR account_head_id IN (SELECT id FROM erp_account_head WHERE id='27'))) AND party.is_delete_status='0' AND return_par.is_delete_status='0' UNION ALL SELECT 'jober' as invoice_type,jober.id as jober_invoice_id,jober.id as ref_id,jober.jober_invoice_no as invoice_no,jober.jober_invoice_date as invoice_date,COALESCE(jober.jober_invoice_total_net_amount,0) - (SELECT COALESCE(SUM(voucher.voucher_child_balance),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=jober.id AND voucher.voucher_child_invoice_type='jober' AND voucher.is_delete_status='0') as invoice_amount,'right' as type FROM erp_jober_invoice as jober LEFT JOIN erp_party as party ON party.id=jober.jober_id WHERE jober.user_id='${user_id}' AND jober.company_id<='${company_id}' AND jober.year_id<='${year_id}' AND jober.branch_id<='${branch_id}' AND jober.jober_id='${party_id}' AND jober.jober_invoice_total_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=jober.id AND voucher.voucher_child_invoice_type='jober' AND voucher.is_delete_status='0') AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('73') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('73') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('73')))) AND party.is_delete_status='0' AND jober.is_delete_status='0' UNION ALL SELECT 'voucher-receipt' as invoice_type,voucher.id as voucher_id,voucher.id as ref_id,voucher.voucher_no as invoice_no,voucher.voucher_date as invoice_date,COALESCE(voucher.voucher_amount,0) - (SELECT COALESCE(SUM(voucher_child_balance),0) FROM erp_voucher_child as voucher_child WHERE voucher_child.voucher_id=voucher.id AND voucher_child.voucher_child_from_invoice_type='voucher-receipt' AND voucher_child.is_delete_status='0' AND voucher_child.party_id='${party_id}'),'right' as type FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.from_party_id='${party_id}' AND voucher.voucher_type='receipt' AND voucher.voucher_amount > (SELECT COALESCE(SUM(voucher_child_balance),0) FROM erp_voucher_child as voucher_child WHERE voucher_child.voucher_id=voucher.id AND voucher_child.voucher_child_from_invoice_type='voucher-receipt' AND voucher_child.is_delete_status='0' AND voucher_child.party_id='${party_id}') AND voucher.is_delete_status='0' UNION ALL SELECT 'voucher-journal' as invoice_type,voucher.id as voucher_id,voucher.id as ref_id,voucher.voucher_no as invoice_no,voucher.voucher_date as invoice_date,COALESCE(voucher.voucher_amount,0) - (SELECT COALESCE(SUM(voucher_child_balance),0) FROM erp_voucher_child as voucher_child WHERE voucher_child.voucher_id=voucher.id AND voucher_child.voucher_child_from_invoice_type='voucher-journal' AND voucher_child.is_delete_status='0' AND voucher_child.party_id='${party_id}'),'left' as type FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.from_party_id='${party_id}' AND voucher.voucher_type='journal' AND voucher.is_delete_status='0' AND voucher.voucher_amount > (SELECT COALESCE(SUM(voucher_child_balance),0) FROM erp_voucher_child as voucher_child WHERE voucher_child.voucher_id=voucher.id AND voucher_child.voucher_child_from_invoice_type='voucher-journal' AND voucher_child.is_delete_status='0' AND voucher_child.party_id='${party_id}') UNION ALL SELECT 'voucher-payment' as invoice_type,voucher.id as voucher_id,voucher.id as ref_id,voucher.voucher_no as invoice_no,voucher.voucher_date as invoice_date,COALESCE(voucher.voucher_amount,0) - (SELECT COALESCE(SUM(voucher_child_balance),0) FROM erp_voucher_child as voucher_child WHERE voucher_child.voucher_id=voucher.id AND voucher_child.voucher_child_from_invoice_type='voucher-payment' AND voucher_child.is_delete_status='0' AND voucher_child.party_id='${party_id}'),'left' as type FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.to_party_id='${party_id}' AND voucher.voucher_type='payment' AND voucher.voucher_amount > (SELECT COALESCE(SUM(voucher_child_balance),0) FROM erp_voucher_child as voucher_child WHERE voucher_child.voucher_id=voucher.id AND voucher_child.voucher_child_from_invoice_type='voucher-payment' AND voucher_child.is_delete_status='0' AND voucher_child.party_id='${party_id}') AND voucher.is_delete_status='0' UNION ALL SELECT 'voucher-journal' as invoice_type,voucher.id as voucher_id,voucher.id as ref_id,voucher.voucher_no as invoice_no,voucher.voucher_date as invoice_date,COALESCE(voucher.voucher_amount,0) - (SELECT COALESCE(SUM(voucher_child_balance),0) FROM erp_voucher_child as voucher_child WHERE voucher_child.voucher_id=voucher.id AND voucher_child.voucher_child_from_invoice_type='voucher-journal' AND voucher_child.is_delete_status='0' AND voucher_child.party_id='${party_id}'),'right' as type FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.to_party_id='${party_id}' AND voucher.voucher_type='journal' AND voucher.voucher_amount > (SELECT COALESCE(SUM(voucher_child_balance),0) FROM erp_voucher_child as voucher_child WHERE voucher_child.voucher_id=voucher.id AND voucher_child.voucher_child_from_invoice_type='voucher-journal' AND voucher_child.is_delete_status='0' AND voucher_child.party_id='${party_id}') AND voucher.is_delete_status='0'`;
        
        conn.query(getunsettlementlistingdata,(error,voucherdatachild) => {
            
            if (error || voucherdatachild?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'unsettlement Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            res?.send({ Status:200,Count:voucherdatachild?.length,TotalCount:voucherdatachild[0]?.Count,Message:'Data found',Data:voucherdatachild });
            next();
            return;
        });
    },

    // INSERT AND UPDATE voucher CHILD DATA API //
    createsettlement: (req,res,next) => {

        let body  = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id  = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const voucher_id = body?.voucher_id ? body?.voucher_id : 0;
        const tax_invoice_id = body?.tax_invoice_id ? body?.tax_invoice_id : 0;           
        const voucher_child_from_invoice_type = body?.voucher_child_from_invoice_type ? body?.voucher_child_from_invoice_type : '';
        const voucher_child_invoice_type = body?.voucher_child_invoice_type ? body?.voucher_child_invoice_type : 0;
        const voucher_child_from_invoice_no = body?.voucher_child_from_invoice_no ? body?.voucher_child_from_invoice_no : 0;
        const voucher_child_invoice_no = body?.voucher_child_invoice_no ? body?.voucher_child_invoice_no : '';
        const voucher_child_from_invoice_date = body?.voucher_child_from_invoice_date ? body?.voucher_child_from_invoice_date : constant.moment().format('YYYY-MM-DD');
        const voucher_child_invoice_date = body?.voucher_child_invoice_date ? body?.voucher_child_invoice_date : constant.moment().format('YYYY-MM-DD');
        const voucher_child_from_balance = body?.voucher_child_from_balance ? Number(body?.voucher_child_from_balance) : 0;
        const voucher_child_balance = body?.voucher_child_balance ? Number(body?.voucher_child_balance) : 0;
        const is_settlement = 1;
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
        if (party_id.length == 0 || party_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Party ID',Data:[] });
            next();
            return;
        }
        
        if (id > 0) 
        {   
            const updatevoucherchild = `CALL create_settelement(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(updatevoucherchild,[id,user_id,company_id,,year_id,branch_id,party_id,voucher_id,tax_invoice_id,voucher_child_from_invoice_type,voucher_child_invoice_type,voucher_child_from_invoice_no,voucher_child_invoice_no,voucher_child_from_invoice_date,voucher_child_invoice_date,voucher_child_from_balance,voucher_child_balance,is_settlement,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {                          
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `settlement Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`settlement`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                    res?.send({ Status:200,Count:0,Message:'settlement Updated',Data:[] });
                    next();
                }  
            });
        }
        else
        {
            const createsettlement = `CALL create_settelement(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            conn.query(createsettlement,[id,user_id,company_id,year_id,branch_id,party_id,voucher_id,tax_invoice_id,voucher_child_from_invoice_type,voucher_child_invoice_type,voucher_child_from_invoice_no,voucher_child_invoice_no,voucher_child_from_invoice_date,voucher_child_invoice_date,voucher_child_from_balance,voucher_child_balance,is_settlement,entry_date,update_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {   
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `settlement Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;

                    conn.query(loginuserdetails,[user_id],(error,userdata) => {

                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0]?.user_position,ip,`settlement`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                    res?.send({ Status:200,Count:0,Message:'settlement Inserted',Data:data[0] });
                    next();
                    
                }  
            });
        }
    },
};


export default AllSettlementApis;
    
