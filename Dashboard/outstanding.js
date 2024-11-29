import constant from '../Config/constant.js';
import conn from '../Config/connection.js';

const OutstandingApi = {

    // GET outstanding DATA API //
    outstandingdata: (req,res,next) => {
        
        let body = req?.body;
        let filter_data = req?.body?.filter_data ? req?.body?.filter_data : '';
        const user_id = body?.user_id ? body?.user_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'party.id-ASC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`party.id as party_id,`;

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
        if (year_id.length == 0 || year_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Year ID',Data:[] });
            next();
            return;
        }
        if (branch_id.length == 0 || branch_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Branch ID',Data:[] });
            next();
            return;
        }

        var outstandingdata = `SELECT ${All_ID_Query}party.party_name FROM erp_party as party WHERE party.user_id='${user_id}' AND party.company_id<='${company_id}' AND account_head_id IN ('26','27') AND party.is_delete_status='0' ORDER BY ${orderby} ${orderformat} ${limit_query}`;
        conn.query(outstandingdata,(error,outstandingdata) => {
            
            if (error)
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
            }
            else
            {   
                outstandingdata.forEach((outstandingvalue,index) => {
                    const child_data = [];
                    filter_data.forEach(filtervalue => {
                        
                        var taxdata = `SELECT COALESCE(SUM(purchase_tax_invoice_net_amount),0) as amount,'${filtervalue.label}' as type FROM erp_purchase_tax_invoice WHERE supplier_id='${outstandingvalue.party_id}' AND user_id='${user_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND is_delete_status='0' AND purchase_tax_invoice_entry_date >= '${filtervalue.start_date}' AND purchase_tax_invoice_entry_date <= '${filtervalue.close_date}' UNION ALL SELECT COALESCE(SUM(sale_tax_invoice_total_net_amount),0) as amount,'${filtervalue.label}' as type FROM erp_sale_tax_invoice WHERE buyer_id='${outstandingvalue.party_id}' AND user_id='${user_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND is_delete_status='0' AND sale_tax_invoice_entry_date >= '${filtervalue.start_date}' AND sale_tax_invoice_entry_date <= '${filtervalue.close_date}'`;

                        conn.query(taxdata,(error,taxdata) => {
                            if (taxdata.length > 0) 
                            {
                                child_data.push(taxdata[0]);                               
                            }
                        });
                    });
                    outstandingdata[index].data = child_data
                });
                
                setTimeout(() => {
                    res?.send({ Status:200,Count:outstandingdata?.length,Message:'Data Found',Data:outstandingdata });
                    next();
                }, 500);
            }  
        });
    },
    // GET outstanding WITH all invoice DATA API //
    outstandingchilddata: (req,res,next) => {
        
        let body = req?.body;
        const party_id = body?.party_id ? body?.party_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'party.id-ASC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`party.id as party_id,`;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;

        if (party_id.length == 0 || party_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Party ID',Data:[] });
            next();
            return;
        }

        var outstandingchilddata = `CALL get_outstanding_child_data(?,?,?)`;
        conn.query(outstandingchilddata,[party_id,from_date,to_date],(error,outstandingchildvalue) => {
            
            if (error && outstandingchildvalue[0]?.length == 0)
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
            }
            else
            {   
                outstandingchildvalue[0].forEach(element => {
                    element.invoice_date = constant.moment(element.invoice_date).format('YYYY-MM-DD');
                    element.due_on = element.due_on != null ? constant.moment(element.due_on).format('YYYY-MM-DD') : '';
                    element.over_due = constant.moment(element.invoice_date).diff(constant.moment(element.due_on),'days');
                });

                res?.send({ Status:200,Count:outstandingchildvalue[0]?.length,Message:'Data Found',Data:outstandingchildvalue[0] });
                next();
            }  
        });
    },

    // GET outstanding WITH all invoice DATA API //
    outstandingallinvoicedata: (req,res,next) => {
        
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'party.id-ASC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`party.id as party_id,`;
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
        if (year_id.length == 0 || year_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Year ID',Data:[] });
            next();
            return;
        }
        if (branch_id.length == 0 || branch_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Branch ID',Data:[] });
            next();
            return;
        }
        if (party_id.length == 0 || party_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Party ID',Data:[] });
            next();
            return;
        }

        // var outstandingallinvoicedata = `CALL get_outstanding_all_invoice_data(?,?,?,?,?,?,?)`;
        var outstandingallinvoicedata = `SELECT pur_tax.purchase_tax_invoice_date as invoice_date,pur_tax.purchase_tax_invoice_no as invoice_no,'purchase' as book,pur_tax.purchase_tax_invoice_net_amount as amount,(SELECT COALESCE(SUM(debit_note.purchase_return_total_net_amount),0) FROM erp_purchase_return as debit_note WHERE debit_note.invoice_no_id=pur_tax.id AND debit_note.purchase_return_type_id!='95' AND debit_note.is_delete_status='0') - (SELECT COALESCE(SUM(debit_note.purchase_return_total_net_amount),0) FROM erp_purchase_return as debit_note WHERE debit_note.invoice_no_id=pur_tax.id AND debit_note.purchase_return_type_id='95' AND debit_note.is_delete_status='0') as return_amt,(SELECT COALESCE(SUM(vc_child.voucher_child_balance),0) FROM erp_voucher_child as vc_child WHERE vc_child.tax_invoice_id=pur_tax.id AND vc_child.voucher_child_invoice_type='purchase' AND vc_child.is_delete_status='0') as paid,(SELECT voucher.voucher_date FROM erp_voucher as voucher LEFT JOIN erp_voucher_child as child ON child.voucher_id=voucher.id WHERE child.tax_invoice_id=pur_tax.id AND child.voucher_child_invoice_type='purchase' AND child.is_delete_status='0' ORDER BY child.id DESC LIMIT 1) as due_on FROM erp_purchase_tax_invoice as pur_tax WHERE pur_tax.user_id='${user_id}' AND pur_tax.company_id<='${company_id}' AND pur_tax.branch_id<='${branch_id}' AND pur_tax.year_id<='${year_id}' AND pur_tax.supplier_id='${party_id}' AND pur_tax.is_delete_status='0' AND DATE(pur_tax.purchase_tax_invoice_entry_date)>='${from_date}' AND DATE(pur_tax.purchase_tax_invoice_entry_date)<='${to_date}' UNION ALL SELECT journal.journal_purchase_invoice_date as invoice_date,journal.journal_purchase_invoice_no as invoice_no,'journalpurchase' as book,journal.journal_purchase_child_net_total as amount,(SELECT COALESCE(SUM(debit_note.purchase_return_total_net_amount),0) FROM erp_purchase_return as debit_note WHERE debit_note.invoice_no_id=journal.id AND debit_note.purchase_return_type_id!='95' AND debit_note.is_delete_status='0') - (SELECT COALESCE(SUM(debit_note.purchase_return_total_net_amount),0) FROM erp_purchase_return as debit_note WHERE debit_note.invoice_no_id=journal.id AND debit_note.purchase_return_type_id='95' AND debit_note.is_delete_status='0') as return_amt,(SELECT COALESCE(SUM(vc_child.voucher_child_balance),0) FROM erp_voucher_child as vc_child WHERE vc_child.tax_invoice_id=journal.id AND vc_child.voucher_child_invoice_type='journalpurchase' AND vc_child.is_delete_status='0') as paid,(SELECT voucher.voucher_date FROM erp_voucher as voucher LEFT JOIN erp_voucher_child as child ON child.voucher_id=voucher.id WHERE child.tax_invoice_id=journal.id AND child.voucher_child_invoice_type='journalpurchase' AND child.is_delete_status='0' ORDER BY child.id DESC LIMIT 1) as due_on FROM erp_journal_purchase as journal WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.branch_id<='${branch_id}' AND journal.year_id<='${year_id}' AND journal.supplier_id='${party_id}' AND journal.is_delete_status='0' AND DATE(journal.journal_purchase_entry_date)>='${from_date}' AND DATE(journal.journal_purchase_entry_date)<='${to_date}' UNION ALL SELECT mill.mill_tax_invoice_date as invoice_date,mill.mill_tax_invoice_no as invoice_no,'mill' as book,mill.mill_tax_invoice_total_net_amount as amount,0 as return_amt,(SELECT COALESCE(SUM(vc_child.voucher_child_balance),0) FROM erp_voucher_child as vc_child WHERE vc_child.tax_invoice_id=mill.id AND vc_child.voucher_child_invoice_type='mill' AND vc_child.is_delete_status='0') as paid,(SELECT voucher.voucher_date FROM erp_voucher as voucher LEFT JOIN erp_voucher_child as child ON child.voucher_id=voucher.id WHERE child.tax_invoice_id=mill.id AND child.voucher_child_invoice_type='mill' AND child.is_delete_status='0' ORDER BY child.id DESC LIMIT 1) as due_on FROM erp_mill_tax_invoice as mill WHERE mill.user_id='${user_id}' AND mill.company_id<='${company_id}' AND mill.branch_id<='${branch_id}' AND mill.year_id<='${year_id}' AND mill.mill_id='${party_id}' AND mill.is_delete_status='0' AND DATE(mill.mill_tax_invoice_entry_date)>='${from_date}' AND DATE(mill.mill_tax_invoice_entry_date)<='${to_date}' UNION ALL SELECT jober.jober_invoice_date as invoice_date,jober.jober_invoice_no as invoice_no,'jober' as book,jober.jober_invoice_total_net_amount as amount,0 as return_amt,(SELECT COALESCE(SUM(vc_child.voucher_child_balance),0) FROM erp_voucher_child as vc_child WHERE vc_child.tax_invoice_id=jober.id AND vc_child.voucher_child_invoice_type='jober' AND vc_child.is_delete_status='0') as paid,(SELECT voucher.voucher_date FROM erp_voucher as voucher LEFT JOIN erp_voucher_child as child ON child.voucher_id=voucher.id WHERE child.tax_invoice_id=jober.id AND child.voucher_child_invoice_type='jober' AND child.is_delete_status='0' ORDER BY child.id DESC LIMIT 1) as due_on FROM erp_jober_invoice as jober WHERE jober.user_id='${user_id}' AND jober.company_id<='${company_id}' AND jober.branch_id<='${branch_id}' AND jober.year_id<='${year_id}' AND jober.jober_id='${party_id}' AND jober.is_delete_status='0' AND DATE(jober.jober_invoice_entry_date)>='${from_date}' AND DATE(jober.jober_invoice_entry_date)<='${to_date}' UNION ALL SELECT sale.sale_tax_invoice_date as invoice_date,sale.sale_tax_invoice_no as invoice_no,'sale' as book,sale.sale_tax_invoice_total_net_amount as amount,(SELECT COALESCE(SUM(credit_note.sale_return_total_net_amount),0) FROM erp_sale_return as credit_note WHERE credit_note.invoice_no_id=sale.id AND credit_note.sale_return_type_id!='97' AND credit_note.is_delete_status='0') - (SELECT COALESCE(SUM(credit_note.sale_return_total_net_amount),0) FROM erp_sale_return as credit_note WHERE credit_note.invoice_no_id=sale.id AND credit_note.sale_return_type_id='97' AND credit_note.is_delete_status='0') as return_amt,(SELECT COALESCE(SUM(vc_child.voucher_child_balance),0) FROM erp_voucher_child as vc_child WHERE vc_child.tax_invoice_id=sale.id AND vc_child.voucher_child_invoice_type='sale' AND vc_child.is_delete_status='0') as paid,(SELECT voucher.voucher_date FROM erp_voucher as voucher LEFT JOIN erp_voucher_child as child ON child.voucher_id=voucher.id WHERE child.tax_invoice_id=sale.id AND child.voucher_child_invoice_type='sale' AND child.is_delete_status='0' ORDER BY child.id DESC LIMIT 1) as due_on FROM erp_sale_tax_invoice as sale WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.branch_id<='${branch_id}' AND sale.year_id<='${year_id}' AND sale.buyer_id='${party_id}' AND sale.is_delete_status='0' AND DATE(sale.sale_tax_invoice_entry_date)>='${from_date}' AND DATE(sale.sale_tax_invoice_entry_date)<='${to_date}'`;
        conn.query(outstandingallinvoicedata,(error,outstandingallinvoicevalue) => {
           
            if (error || outstandingallinvoicevalue?.length == 0)
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
            }
            else
            {   
                outstandingallinvoicevalue?.forEach(element => {
                    element.invoice_date = constant.moment(element.invoice_date).format('YYYY-MM-DD');
                    element.due_on = element.due_on != null ? constant.moment(element.due_on).format('YYYY-MM-DD') : '';
                    element.over_due = constant.moment(element.invoice_date).diff(constant.moment(element.due_on),'days');
                });

                res?.send({ Status:200,Count:outstandingallinvoicevalue?.length,Message:'Data Found',Data:outstandingallinvoicevalue});
                next();
            }  
        });
    },
};

export default OutstandingApi;


