import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllLedgerApis = {
    
    getledgerlistingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const total_limit = body?.limit ? body?.limit : 1000;
        const sortby = body?.sortby ? body?.sortby : 'voucher.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * total_limit;
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
        if (party_id.length == 0 || party_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Party ID',Data:[] });
            next();
            return;
        }

        var getaccountdata = `SELECT account_head_id FROM erp_party WHERE id='${party_id}' AND is_delete_status='0'`;
        conn.query(getaccountdata,(error,accountheaddata) => {
            let accountHeadId = Number(accountheaddata[0].account_head_id)
            console.log('console accountHeadId :: ', Number(accountHeadId), [26,77,30,76,73,78].includes(accountHeadId))
            if (accountHeadId == 27) {
                let ledgerQuery = `SELECT sale_invoice.id as ref_page_id,'saletaxinvoice' as ref_page,'' as ref_type,0 as ref_type_id,'sale invoice' as particular,sale_invoice.sale_tax_invoice_no as invoice_no, DATE_FORMAT(sale_invoice.sale_tax_invoice_date, '%d-%m-%Y') as ledger_date, sale_invoice.sale_tax_invoice_total_amount as amount, sale_invoice.sale_tax_invoice_entry_date as entry_date FROM erp_sale_tax_invoice as sale_invoice WHERE sale_invoice.buyer_id='${party_id}' AND sale_invoice.user_id='${user_id}' AND sale_invoice.year_id<='${year_id}' AND sale_invoice.company_id<='${company_id}' AND sale_invoice.branch_id<='${branch_id}' AND sale_invoice.is_delete_status='0' AND sale_invoice.sale_tax_invoice_date BETWEEN '${from_date}' AND '${to_date}'
                UNION
                SELECT sale_return.id as ref_page_id,'salereturn' as ref_page,'' as ref_type,0 as ref_type_id,'sale return' as particular,sale_return.sale_return_note_no as invoice_no, DATE_FORMAT(sale_return.sale_return_date, '%d-%m-%Y') as ledger_date, -ABS(sale_return.sale_return_total_amount) as amount, sale_return.sale_return_entry_date as entry_date FROM erp_sale_return as sale_return WHERE sale_return.buyer_id='${party_id}' AND sale_return.user_id='${user_id}' AND sale_return.year_id<='${year_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.is_delete_status='0' AND sale_return.sale_return_date BETWEEN '${from_date}' AND '${to_date}'
                UNION
                SELECT voucher.id as ref_page_id,'voucher' as ref_page,voucher.voucher_type as ref_type,0 as ref_type_id,(SELECT party.party_name FROM erp_party as party WHERE CASE WHEN voucher.from_party_id='${party_id}' THEN party.id=voucher.to_party_id ELSE party.id=voucher.from_party_id END) as particular,voucher.voucher_no as invoice_no, DATE_FORMAT(voucher.voucher_date, '%d-%m-%Y') as ledger_date,(CASE WHEN voucher.from_party_id='${party_id}' THEN -ABS(voucher.voucher_amount) ELSE voucher.voucher_amount END) as amount, voucher.voucher_entry_date as entry_date FROM erp_voucher as voucher WHERE (voucher.from_party_id='${party_id}' OR voucher.to_party_id='${party_id}') AND voucher.user_id='${user_id}' AND voucher.year_id<='${year_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.is_delete_status='0' AND voucher.voucher_date BETWEEN '${from_date}' AND '${to_date}' ORDER BY entry_date ASC;`;

                conn.query(ledgerQuery,(error,data) => {

                    if (error || data?.length == 0) 
                    {   
                        res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                        next();
                        return;
                    }
                    else
                    {
                        res?.send({ Status:200,Count:data?.length,Message:'Data found',Data:data });
                        next();
                        return;
                    } 
                });
            }
            if ([26,77,30,76,73,78].includes(Number(accountHeadId))) {
                let ledgerQuery = `SELECT mill_invoice.id as ref_page_id,'milltaxinvoice' as ref_page,'' as ref_type,0 as ref_type_id,'mill invoice' as particular,mill_invoice.mill_tax_invoice_no as invoice_no, DATE_FORMAT(mill_invoice.mill_tax_invoice_date, '%d-%m-%Y') as ledger_date, mill_invoice.mill_tax_invoice_total_amount as amount, mill_invoice.mill_tax_invoice_entry_date as entry_date FROM erp_mill_tax_invoice as mill_invoice WHERE mill_invoice.mill_id='${party_id}' AND mill_invoice.user_id='${user_id}' AND mill_invoice.year_id<='${year_id}' AND mill_invoice.company_id<='${company_id}' AND mill_invoice.branch_id<='${branch_id}' AND mill_invoice.is_delete_status='0' AND mill_invoice.mill_tax_invoice_date BETWEEN '${from_date}' AND '${to_date}'
                UNION
                SELECT job_invoice.id as ref_page_id,'jobtaxinvoice' as ref_page,'' as ref_type,0 as ref_type_id,'jober invoice' as particular,job_invoice.jober_invoice_no as invoice_no, DATE_FORMAT(job_invoice.jober_invoice_date, '%d-%m-%Y') as ledger_date, job_invoice.jober_invoice_total_total as amount, job_invoice.jober_invoice_entry_date as entry_date FROM erp_jober_invoice as job_invoice WHERE job_invoice.jober_id='${party_id}' AND job_invoice.user_id='${user_id}' AND job_invoice.year_id<='${year_id}' AND job_invoice.company_id<='${company_id}' AND job_invoice.branch_id<='${branch_id}' AND job_invoice.is_delete_status='0' AND job_invoice.jober_invoice_date BETWEEN '${from_date}' AND '${to_date}'
                UNION
                SELECT pur_invoice.id as ref_page_id,'purchasetaxinvoice' as ref_page,'' as ref_type,0 as ref_type_id,'purchase invoice' as particular,pur_invoice.purchase_tax_invoice_no as invoice_no, DATE_FORMAT(pur_invoice.purchase_tax_invoice_date, '%d-%m-%Y') as ledger_date, pur_invoice.purchase_tax_invoice_total_amount as amount, pur_invoice.purchase_tax_invoice_entry_date as entry_date FROM erp_purchase_tax_invoice as pur_invoice WHERE pur_invoice.supplier_id='${party_id}' AND pur_invoice.user_id='${user_id}' AND pur_invoice.year_id<='${year_id}' AND pur_invoice.company_id<='${company_id}' AND pur_invoice.branch_id<='${branch_id}' AND pur_invoice.is_delete_status='0' AND pur_invoice.purchase_tax_invoice_date BETWEEN '${from_date}' AND '${to_date}'
                UNION
                SELECT voucher.id as ref_page_id,'voucher' as ref_page,voucher.voucher_type as ref_type,0 as ref_type_id,(SELECT party.party_name FROM erp_party as party WHERE CASE WHEN voucher.from_party_id='${party_id}' THEN party.id=voucher.to_party_id ELSE party.id=voucher.from_party_id END) as particular,voucher.voucher_no as invoice_no, DATE_FORMAT(voucher.voucher_date, '%d-%m-%Y') as ledger_date,(CASE WHEN voucher.to_party_id='${party_id}' THEN -ABS(voucher.voucher_amount) ELSE voucher.voucher_amount END) as amount, voucher.voucher_entry_date as entry_date FROM erp_voucher as voucher WHERE (voucher.from_party_id='${party_id}' OR voucher.to_party_id='${party_id}') AND voucher.user_id='${user_id}' AND voucher.year_id<='${year_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.is_delete_status='0' AND voucher.voucher_date BETWEEN '${from_date}' AND '${to_date}' ORDER BY entry_date ASC;`;
                conn.query(ledgerQuery,(error,data) => {

                    if (error || data?.length == 0)
                        return res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    else
                        return res?.send({ Status:200,Count:data?.length,Message:'Data found',Data:data });
                });
            }
            return false;
            if (accountheaddata[0]?.account_head_id == '59' || accountheaddata[0]?.account_head_id == '60' || accountheaddata[0]?.account_head_id == '61' || accountheaddata[0]?.account_head_id == '62' || accountheaddata[0]?.account_head_id == '63' || accountheaddata[0]?.account_head_id == '64' || accountheaddata[0]?.account_head_id == '56' || accountheaddata[0]?.account_head_id == '54' || accountheaddata[0]?.account_head_id == '89' || accountheaddata[0]?.account_head_id == '90' || accountheaddata[0].account_head_id == '27' || accountheaddata[0].account_head_id == '26' || accountheaddata[0].account_head_id == '40' || accountheaddata[0].account_head_id == '16') 
            {
                if (accountheaddata[0].account_head_id == '59') 
                {
                    var getledgerlistingdata = `CALL get_ledger_data(?,?,?,?,?,?,?)`;
                    conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
            
                        if (error || ledgerdata[1]?.length == 0) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        
                        ledgerdata[1]?.forEach(ledgervalue => {
                            ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                            ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                        });
            
                        res?.send({ Status:200,Count:ledgerdata[1]?.length,Message:'Data found',Data:ledgerdata[1] });
                        next();
                        return;
                    });
                }
                if (accountheaddata[0].account_head_id == '60') 
                {
                    var getledgerlistingdata = `CALL get_ledger_data(?,?,?,?,?,?,?)`;
                    conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
            
                        if (error || ledgerdata[2]?.length == 0) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        
                        ledgerdata[2]?.forEach(ledgervalue => {
                            ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                            ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                        });
            
                        res?.send({ Status:200,Count:ledgerdata[2]?.length,Message:'Data found',Data:ledgerdata[2] });
                        next();
                        return;
                    });
                }
                if (accountheaddata[0].account_head_id == '61') 
                {
                    var getledgerlistingdata = `CALL get_ledger_data(?,?,?,?,?,?,?)`;
                    conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
            
                        if (error || ledgerdata[3]?.length == 0) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        
                        ledgerdata[3]?.forEach(ledgervalue => {
                            ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                            ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                        });
            
                        res?.send({ Status:200,Count:ledgerdata[3]?.length,Message:'Data found',Data:ledgerdata[3] });
                        next();
                        return;
                    });
                }
                if (accountheaddata[0].account_head_id == '62') 
                {
                    var getledgerlistingdata = `CALL get_ledger_data(?,?,?,?,?,?,?)`;
                    conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
            
                        if (error || ledgerdata[4]?.length == 0) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        
                        ledgerdata[4]?.forEach(ledgervalue => {
                            ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                            ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                        });
            
                        res?.send({ Status:200,Count:ledgerdata[4]?.length,Message:'Data found',Data:ledgerdata[4] });
                        next();
                        return;
                    });
                }
                if (accountheaddata[0].account_head_id == '63') 
                {
                    var getledgerlistingdata = `CALL get_ledger_data(?,?,?,?,?,?,?)`;
                    conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
            
                        if (error || ledgerdata[5]?.length == 0) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        
                        ledgerdata[5]?.forEach(ledgervalue => {
                            ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                            ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                        });
            
                        res?.send({ Status:200,Count:ledgerdata[5]?.length,Message:'Data found',Data:ledgerdata[5] });
                        next();
                        return;
                    });
                }
                if (accountheaddata[0].account_head_id == '64') 
                {
                    
                    var getledgerlistingdata = `CALL get_ledger_data(?,?,?,?,?,?,?)`;
                    conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
            
                        if (error || ledgerdata[6]?.length == 0) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }

                        ledgerdata[6]?.forEach(ledgervalue => {
                            ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                            ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                        });
                            
                        res?.send({ Status:200,Count:ledgerdata[6]?.length,Message:'Data found',Data:ledgerdata[6] });
                        next();
                        return;
                    });
                }
                if (accountheaddata[0].account_head_id == '56') 
                {
                    
                    var getledgerlistingdata = `CALL get_ledger_data(?,?,?,?,?,?,?)`;
                    conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
            
                        if (error || ledgerdata[7]?.length == 0) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }

                        ledgerdata[7]?.forEach(ledgervalue => {
                            ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                            ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                        });
                            
                        res?.send({ Status:200,Count:ledgerdata[7]?.length,Message:'Data found',Data:ledgerdata[7] });
                        next();
                        return;
                    });
                }
                if (accountheaddata[0].account_head_id == '54') 
                {
                    
                    var getledgerlistingdata = `CALL get_ledger_data(?,?,?,?,?,?,?)`;
                    conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
            
                        if (error || ledgerdata[8]?.length == 0) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }

                        ledgerdata[8]?.forEach(ledgervalue => {
                            ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                            ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                        });
                            
                        res?.send({ Status:200,Count:ledgerdata[8]?.length,Message:'Data found',Data:ledgerdata[8] });
                        next();
                        return;
                    });
                }
                if (accountheaddata[0].account_head_id == '89') 
                {
                    var getledgerlistingdata = `CALL get_ledger_data(?,?,?,?,?,?,?)`;
                    conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
            
                        if (error || ledgerdata[9]?.length == 0) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }

                        ledgerdata[9]?.forEach(ledgervalue => {
                            ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                            ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                        });
                            
                        res?.send({ Status:200,Count:ledgerdata[9]?.length,Message:'Data found',Data:ledgerdata[9] });
                        next();
                        return;
                    });
                }
                if (accountheaddata[0].account_head_id == '90') 
                {
                    
                    var getledgerlistingdata = `CALL get_ledger_data(?,?,?,?,?,?,?)`;
                    conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
            
                        if (error || ledgerdata[10]?.length == 0) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }

                        ledgerdata[10]?.forEach(ledgervalue => {
                            ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                            ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                        });
                            
                        res?.send({ Status:200,Count:ledgerdata[10]?.length,Message:'Data found',Data:ledgerdata[10] });
                        next();
                        return;
                    });
                }
               
                if (accountheaddata[0].account_head_id == '26') 
                {
                    
                    var getledgerlistingdata = `CALL get_ledger_phase2_data(?,?,?,?,?,?,?)`;
                    conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
            
                        if (error || ledgerdata[1]?.length == 0) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }

                        ledgerdata[1]?.forEach(ledgervalue => {
                            ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                            ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                        });
                            
                        res?.send({ Status:200,Count:ledgerdata[1]?.length,Message:'Data found',Data:ledgerdata[1] });
                        next();
                        return;
                    });
                }
                if (accountheaddata[0].account_head_id == '40') 
                {
                    var getledgerlistingdata = `CALL get_ledger_phase2_data(?,?,?,?,?,?,?)`;
                    conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
                        
                        
                        if (error || ledgerdata[2]?.length == 0) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }

                        ledgerdata[2]?.forEach(ledgervalue => {
                            ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                            ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                        });
                            
                        res?.send({ Status:200,Count:ledgerdata[2]?.length,Message:'Data found',Data:ledgerdata[2] });
                        next();
                        return;
                    });
                }
                if (accountheaddata[0].account_head_id == '16') 
                {
                    var getledgerlistingdata = `CALL get_ledger_phase2_data(?,?,?,?,?,?,?)`;
                    conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
                        
                        if (error || ledgerdata[3]?.length == 0) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }

                        ledgerdata[3]?.forEach(ledgervalue => {
                            ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                            ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                        });
                            
                        res?.send({ Status:200,Count:ledgerdata[3]?.length,Message:'Data found',Data:ledgerdata[3] });
                        next();
                        return;
                    });
                }
            }
            else
            {
                // var getledgerlistingdata = `SELECT 'opening balance' as particular,COALESCE(party.party_opening_balance,0) as amount,party.opening_balance_type as type,party.party_entry_date as ledger_date FROM erp_party as party WHERE party.id='${party_id}' AND party.user_id='${user_id}' AND party.company_id<='${company_id}' AND party.is_delete_status='0' UNION ALL SELECT 'journal purchase' as particular,COALESCE(journal.journal_purchase_child_total_taxable,0) as amount,'debit' as type,journal.journal_purchase_invoice_date as ledger_date FROM erp_journal_purchase as journal LEFT JOIN erp_journal_purchase_child as journal_child ON journal_child.journal_purchase_id=journal.id WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.branch_id<='${branch_id}' AND journal.year_id<='${year_id}' AND journal_child.supplier_id='${party_id}' AND journal.is_delete_status='0' AND journal_child.is_delete_status='0' AND journal.journal_purchase_entry_date>='${from_date}' AND journal.journal_purchase_entry_date<='${to_date}' UNION ALL SELECT 'journal purchase' as particular,COALESCE(journal.journal_purchase_child_net_total,0) as amount,'credit' as type,journal.journal_purchase_invoice_date as ledger_date FROM erp_journal_purchase as journal WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.branch_id<='${branch_id}' AND journal.year_id<='${year_id}' AND journal.supplier_id='${party_id}' AND journal.is_delete_status='0' AND journal.journal_purchase_entry_date>='${from_date}' AND journal.journal_purchase_entry_date<='${to_date}' UNION ALL SELECT party.party_name as particular,COALESCE(tax_par.purchase_tax_invoice_net_amount,0) as amount,'credit' as type,tax_par.purchase_tax_invoice_date as ledger_date FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_party as party ON party.id=tax_par.account_type WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.branch_id<='${branch_id}' AND tax_par.year_id<='${year_id}' AND tax_par.supplier_id='${party_id}' AND tax_par.is_delete_status='0' AND tax_par.purchase_tax_invoice_entry_date>='${from_date}' AND tax_par.purchase_tax_invoice_entry_date<='${to_date}' UNION ALL SELECT IF(return_par.purchase_return_type_id='96','pur dr_note',party.party_name) as particular,COALESCE(return_par.purchase_return_total_net_amount,0) as amount,'debit' as type,return_par.purchase_return_date as ledger_date FROM erp_purchase_return as return_par LEFT JOIN erp_party as party ON party.id=return_par.purchase_return_account_type WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_type_id!='95' AND return_par.is_delete_status='0' AND return_par.purchase_return_entry_date>='${from_date}' AND return_par.purchase_return_entry_date<='${to_date}' UNION ALL SELECT 'pur cr_note' as particular,COALESCE(return_par.purchase_return_total_net_amount,0) as amount,'credit' as type,return_par.purchase_return_date as ledger_date FROM erp_purchase_return as return_par WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_type_id='95' AND return_par.is_delete_status='0' AND return_par.purchase_return_entry_date>='${from_date}' AND return_par.purchase_return_entry_date<='${to_date}' UNION ALL SELECT 'pur cr_note' as particular,COALESCE(return_par.purchase_return_total_taxable,0) as amount,'debit' as type,return_par.purchase_return_date as ledger_date FROM erp_purchase_return as return_par LEFT JOIN erp_purchase_return_child as return_child ON return_child.purchase_return_id=return_par.id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_child.party_id='${party_id}' AND return_par.purchase_return_type_id='95' AND return_par.is_delete_status='0' AND return_child.is_delete_status='0' AND return_par.purchase_return_entry_date>='${from_date}' AND return_par.purchase_return_entry_date<='${to_date}' UNION ALL SELECT 'pur dr_note' as particular,COALESCE(return_par.purchase_return_total_taxable,0) as amount,'credit' as type,return_par.purchase_return_date as ledger_date FROM erp_purchase_return as return_par LEFT JOIN erp_purchase_return_child as return_child ON return_child.purchase_return_id=return_par.id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_child.party_id='${party_id}' AND return_par.purchase_return_type_id='96' AND return_par.is_delete_status='0' AND return_child.is_delete_status='0' AND return_par.purchase_return_entry_date>='${from_date}' AND return_par.purchase_return_entry_date<='${to_date}' UNION ALL SELECT party.party_name as particular,COALESCE(mill.mill_tax_invoice_total_net_amount,0) as amount,'credit' as type,mill.mill_tax_invoice_date as ledger_date FROM erp_mill_tax_invoice as mill LEFT JOIN erp_party as party ON party.id=mill.party_account_head_id WHERE mill.user_id='${user_id}' AND mill.company_id<='${company_id}' AND mill.branch_id<='${branch_id}' AND mill.year_id<='${year_id}' AND mill.mill_id='${party_id}' AND mill.is_delete_status='0' AND mill.mill_tax_invoice_entry_date>='${from_date}' AND mill.mill_tax_invoice_entry_date<='${to_date}' UNION ALL SELECT tds.tds_on_name as particular,COALESCE(mill.mill_tax_invoice_total_tds,0) as amount,'debit' as type,mill.mill_tax_invoice_date as ledger_date FROM erp_mill_tax_invoice as mill LEFT JOIN erp_tds_on as tds ON tds.id-mill.tds_on_id WHERE mill.user_id='${user_id}' AND mill.company_id<='${company_id}' AND mill.branch_id<='${branch_id}' AND mill.year_id<='${year_id}' AND mill.mill_id='${party_id}' AND mill.is_delete_status='0' AND mill.mill_tax_invoice_entry_date>='${from_date}' AND mill.mill_tax_invoice_entry_date<='${to_date}' UNION ALL SELECT tds.tds_on_name as particular,COALESCE(tax_par.puchase_tax_invoice_total_tds,0) as amount,'debit' as type,tax_par.purchase_tax_invoice_date as ledger_date FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_tds_on as tds ON tds.id=tax_par.tds_on_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.branch_id<='${branch_id}' AND tax_par.year_id<='${year_id}' AND tax_par.supplier_id='${party_id}' AND tax_par.is_delete_status='0' AND tax_par.purchase_tax_invoice_entry_date>='${from_date}' AND tax_par.purchase_tax_invoice_entry_date<='${to_date}' UNION ALL SELECT tds.tds_on_name as particular,COALESCE(return_par.purchase_return_total_tds,0) as amount,'debit' as type,return_par.purchase_return_date as ledger_date FROM erp_purchase_return as return_par LEFT JOIN erp_tds_on as tds ON tds.id=return_par.tds_on_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_type_id='95' AND return_par.is_delete_status='0' AND return_par.purchase_return_entry_date>='${from_date}' AND return_par.purchase_return_entry_date<='${to_date}' UNION ALL SELECT tds.tds_on_name as particular,COALESCE(return_par.purchase_return_total_tds,0) as amount,'credit' as type,return_par.purchase_return_date as ledger_date FROM erp_purchase_return as return_par LEFT JOIN erp_tds_on as tds ON tds.id=return_par.tds_on_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_type_id='96' AND return_par.is_delete_status='0' AND return_par.purchase_return_entry_date>='${from_date}' AND return_par.purchase_return_entry_date<='${to_date}' UNION ALL SELECT tds.tds_on_name as particular,COALESCE(journal.journal_purchase_tds,0) as amount,'debit' as type,journal.journal_purchase_invoice_date as ledger_date FROM erp_journal_purchase as journal LEFT JOIN erp_tds_on as tds ON tds.id=journal.tds_on_id WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.branch_id<='${branch_id}' AND journal.year_id<='${year_id}' AND journal.supplier_id='${party_id}' AND journal.is_delete_status='0' AND journal.journal_purchase_entry_date>='${from_date}' AND journal.journal_purchase_entry_date<='${to_date}' UNION ALL SELECT party.party_name as particular,COALESCE(sale_per.sale_tax_invoice_total_net_amount,0) as amount,'debit' as type,sale_per.sale_tax_invoice_date as ledger_date FROM erp_sale_tax_invoice as sale_per LEFT JOIN erp_party as party ON party.id=sale_per.account_type_party_id WHERE sale_per.user_id='${user_id}' AND sale_per.company_id<='${company_id}' AND sale_per.branch_id<='${branch_id}' AND sale_per.year_id<='${year_id}' AND sale_per.buyer_id='${party_id}' AND sale_per.is_delete_status='0' AND sale_per.sale_tax_invoice_entry_date>='${from_date}' AND sale_per.sale_tax_invoice_entry_date<='${to_date}' UNION ALL SELECT IF(sale_return.sale_return_type_id='98','sale cr_note',party.party_name) as particular,COALESCE(sale_return.sale_return_total_net_amount,0) as amount,'credit' as type,sale_return.sale_return_date as ledger_date FROM erp_sale_return as sale_return LEFT JOIN erp_party as party ON party.id=sale_return.sale_return_account_type WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return.buyer_id='${party_id}' AND sale_return.sale_return_type_id!='97' AND sale_return.is_delete_status='0' AND sale_return.sale_return_entry_date>='${from_date}' AND sale_return.sale_return_entry_date<='${to_date}' UNION ALL SELECT 'sale dr_note' as particular,COALESCE(sale_return.sale_return_total_net_amount,0) as amount,'debit' as type,sale_return.sale_return_date as ledger_date FROM erp_sale_return as sale_return WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return.buyer_id='${party_id}' AND sale_return.sale_return_type_id='97' AND sale_return.is_delete_status='0' AND sale_return.sale_return_entry_date>='${from_date}' AND sale_return.sale_return_entry_date<='${to_date}' UNION ALL SELECT 'sale dr_note' as particular,COALESCE(sale_return.sale_return_total_taxable,0) as amount,'debit' as type,sale_return.sale_return_date as ledger_date FROM erp_sale_return as sale_return LEFT JOIN erp_sale_return_child as sale_return_child ON sale_return_child.sale_return_id=sale_return.id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return_child.party_id='${party_id}' AND sale_return.sale_return_type_id='98' AND sale_return.is_delete_status='0' AND sale_return_child.is_delete_status='0' AND sale_return.sale_return_entry_date>='${from_date}' AND sale_return.sale_return_entry_date<='${to_date}' UNION ALL SELECT 'sale_cr_note' as particular,COALESCE(sale_return.sale_return_total_taxable,0) as amount,'credit' as type,sale_return.sale_return_date as ledger_date FROM erp_sale_return as sale_return LEFT JOIN erp_sale_return_child as sale_return_child ON sale_return_child.sale_return_id=sale_return.id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return_child.party_id='${party_id}' AND sale_return.sale_return_type_id='97' AND sale_return.is_delete_status='0' AND sale_return_child.is_delete_status='0' AND sale_return.sale_return_entry_date>='${from_date}' AND sale_return.sale_return_entry_date<='${to_date}' UNION ALL SELECT tds.tds_on_name as particular,COALESCE(sale_return.sale_return_total_tds,0) as amount,'debit' as type,sale_return.sale_return_date as ledger_date FROM erp_sale_return as sale_return LEFT JOIN erp_tds_on as tds ON tds.id=sale_return.tds_on_id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return.buyer_id='${party_id}' AND sale_return.sale_return_type_id='98' AND sale_return.is_delete_status='0' AND sale_return.sale_return_entry_date>='${from_date}' AND sale_return.sale_return_entry_date<='${to_date}' UNION ALL SELECT tds.tds_on_name as particular,COALESCE(sale_return.sale_return_total_tds,0) as amount,'credit' as type,sale_return.sale_return_date as ledger_date FROM erp_sale_return as sale_return LEFT JOIN erp_tds_on as tds ON tds.id=sale_return.tds_on_id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return.buyer_id='${party_id}' AND sale_return.sale_return_type_id='97' AND sale_return.is_delete_status='0' AND sale_return.sale_return_entry_date>='${from_date}' AND sale_return.sale_return_entry_date<='${to_date}' UNION ALL SELECT tds.tds_on_name as particular,COALESCE(sale_per.sale_tax_invoice_total_net_amount,0) as amount,'credit' as type,sale_per.sale_tax_invoice_date as ledger_date FROM erp_sale_tax_invoice as sale_per LEFT JOIN erp_tds_on as tds ON tds.id=sale_per.tds_on_id WHERE sale_per.user_id='${user_id}' AND sale_per.company_id<='${company_id}' AND sale_per.branch_id<='${branch_id}' AND sale_per.year_id<='${year_id}' AND sale_per.buyer_id='${party_id}' AND sale_per.is_delete_status='0' AND sale_per.sale_tax_invoice_entry_date>='${from_date}' AND sale_per.sale_tax_invoice_entry_date<='${to_date}' UNION ALL SELECT 'receipt voucher' as particular,COALESCE(voucher.voucher_amount,0) as amount,'credit' as type,voucher.voucher_date as ledger_date FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.from_party_id='${party_id}' AND voucher.voucher_type='receipt' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date>='${from_date}' AND voucher.voucher_entry_date<='${to_date}' UNION ALL SELECT 'payment voucher' as particular,COALESCE(voucher.voucher_amount,0) as amount,'debit' as type,voucher.voucher_date as ledger_date FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.to_party_id='${party_id}' AND voucher.voucher_type='payment' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date>='${from_date}' AND voucher.voucher_entry_date<='${to_date}' UNION ALL SELECT 'journal voucher' as particular,COALESCE(voucher.voucher_amount,0) as amount,'debit' as type,voucher.voucher_date as ledger_date FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.from_party_id='${party_id}' AND voucher.voucher_type='journal' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date>='${from_date}' AND voucher.voucher_entry_date<='${to_date}' UNION ALL SELECT 'journal voucher' as particular,COALESCE(voucher.voucher_amount,0) as amount,'credit' as type,voucher.voucher_date as ledger_date FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.to_party_id='${party_id}' AND voucher.voucher_type='journal' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date>='${from_date}' AND voucher.voucher_entry_date<='${to_date}' UNION ALL SELECT 'contra voucher' as particular,COALESCE(voucher.voucher_amount,0) as amount,'credit' as type,voucher.voucher_date as ledger_date FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.from_party_id='${party_id}' AND voucher.voucher_type='contra' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date>='${from_date}' AND voucher.voucher_entry_date<='${to_date}' UNION ALL SELECT 'contra voucher' as particular,COALESCE(voucher.voucher_amount,0) as amount,'debit' as type,voucher.voucher_date as ledger_date FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.to_party_id='${party_id}' AND voucher.voucher_type='contra' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date>='${from_date}' AND voucher.voucher_entry_date<='${to_date}'`;

                var getledgerlistingdata = `CALL get_ledger_data(?,?,?,?,?,?,?)`;
                conn.query(getledgerlistingdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,ledgerdata) => {
        
                    if (error || ledgerdata[0]?.length == 0) 
                    {   
                        res?.send({ Status:400,Count:0,Message:'Ledger Data Not Found!!!!',Data:error });
                        next();
                        return;
                    }
                    
                    ledgerdata[0]?.forEach(ledgervalue => {
                        ledgervalue.ledger_date = constant.moment(ledgervalue.ledger_date).format('YYYY-MM-DD');
                        ledgervalue.amount = ledgervalue.amount == '' ? 0 : ledgervalue.amount;
                    });
        
                    res?.send({ Status:200,Count:ledgerdata?.length,Message:'Data found',Data:ledgerdata[0] });
                    next();
                    return;
                });
            } 
        });      
    },

    // GET ledger LISTING DATA API //
    getunledgerlistingdata: (req,res,next) => {

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

        var getunledgerlistingdata = `SELECT voucher_child.voucher_child_invoice_date,voucher_child.voucher_child_invoice_type,voucher_child.voucher_child_invoice_no,voucher_child.voucher_child_received_amount FROM erp_voucher_child as voucher_child LEFT JOIN erp_voucher as voucher ON voucher.id=voucher_child.voucher_id WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.party_id='${party_id}' AND voucher_child.is_ledger='0' AND voucher_child.is_delete_status='0' ORDER BY ${orderby} ${orderformat} LIMIT ${total_offset},${total_limit}`;

        conn.query(getunledgerlistingdata,(error,voucherdatachild) => {
            
            if (error || voucherdatachild?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:'unledger Data Not Found!!!!',Data:error });
                next();
                return;
            }
            
            voucherdatachild?.forEach(voucherdatachild => {
                voucherdatachild.voucher_child_invoice_date = constant.moment(voucherdatachild.voucher_child_invoice_date).format('YYYY-MM-DD');
            });

            res?.send({ Status:200,Count:voucherdatachild?.length,TotalCount:voucherdatachild[0]?.Count,Message:'Data found',Data:voucherdatachild });
            next();
            return;
        });
    },

    // GET ledger CHART DATA DATA API //
    getledgerchartdata: (req,res,next) => {
            
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
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
        if (filterData.length == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Date Range Must Be Required',Data:[] });
            next();
            return;
        }

        const label = [];
        const chartData = [
            {
                name:'debit',
                data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name:'credit',
                data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ]

        for (let index = 0; index < filterData.length; index++)
        {
            label?.push(constant.moment(`${filterData[index]}01`).format('MMM'))

             var fetchData = `SELECT ((SELECT COALESCE(SUM(journal.journal_purchase_child_total_taxable),0) as debit FROM erp_journal_purchase as journal LEFT JOIN erp_journal_purchase_child as journal_child ON journal_child.journal_purchase_id=journal.id WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.branch_id<='${branch_id}' AND journal.year_id<='${year_id}' AND journal_child.supplier_id='${party_id}' AND journal.is_delete_status='0' AND journal_child.is_delete_status='0' AND journal.journal_purchase_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(return_par.purchase_return_total_net_amount),0) as debit FROM erp_purchase_return as return_par LEFT JOIN erp_party as party ON party.id=return_par.purchase_return_account_type WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_type_id!='95' AND return_par.is_delete_status='0' AND return_par.purchase_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(return_par.purchase_return_total_taxable),0) as debit FROM erp_purchase_return as return_par LEFT JOIN erp_purchase_return_child as return_child ON return_child.purchase_return_id=return_par.id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_child.party_id='${party_id}' AND return_par.purchase_return_type_id='95' AND return_par.is_delete_status='0' AND return_child.is_delete_status='0' AND return_par.purchase_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(mill.mill_tax_invoice_total_tds),0) as debit FROM erp_mill_tax_invoice as mill LEFT JOIN erp_tds_on as tds ON tds.id-mill.tds_on_id WHERE mill.user_id='${user_id}' AND mill.company_id<='${company_id}' AND mill.branch_id<='${branch_id}' AND mill.year_id<='${year_id}' AND mill.mill_id='${party_id}' AND mill.is_delete_status='0' AND mill.mill_tax_invoice_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(tax_par.puchase_tax_invoice_total_tds),0) as debit FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_tds_on as tds ON tds.id=tax_par.tds_on_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.branch_id<='${branch_id}' AND tax_par.year_id<='${year_id}' AND tax_par.supplier_id='${party_id}' AND tax_par.is_delete_status='0' AND tax_par.purchase_tax_invoice_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(return_par.purchase_return_total_tds),0) as debit FROM erp_purchase_return as return_par LEFT JOIN erp_tds_on as tds ON tds.id=return_par.tds_on_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_type_id='95' AND return_par.is_delete_status='0' AND return_par.purchase_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(journal.journal_purchase_tds),0) as debit FROM erp_journal_purchase as journal LEFT JOIN erp_tds_on as tds ON tds.id=journal.tds_on_id WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.branch_id<='${branch_id}' AND journal.year_id<='${year_id}' AND journal.supplier_id='${party_id}' AND journal.is_delete_status='0' AND journal.journal_purchase_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_per.sale_tax_invoice_total_net_amount),0) as debit FROM erp_sale_tax_invoice as sale_per LEFT JOIN erp_party as party ON party.id=sale_per.account_type_party_id WHERE sale_per.user_id='${user_id}' AND sale_per.company_id<='${company_id}' AND sale_per.branch_id<='${branch_id}' AND sale_per.year_id<='${year_id}' AND sale_per.buyer_id='${party_id}' AND sale_per.is_delete_status='0' AND sale_per.sale_tax_invoice_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_return.sale_return_total_net_amount),0) as debit FROM erp_sale_return as sale_return WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return.buyer_id='${party_id}' AND sale_return.sale_return_type_id='97' AND sale_return.is_delete_status='0' AND sale_return.sale_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_return.sale_return_total_taxable),0) as debit FROM erp_sale_return as sale_return LEFT JOIN erp_sale_return_child as sale_return_child ON sale_return_child.sale_return_id=sale_return.id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return_child.party_id='${party_id}' AND sale_return.sale_return_type_id='98' AND sale_return.is_delete_status='0' AND sale_return_child.is_delete_status='0' AND sale_return.sale_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_return.sale_return_total_tds),0) as debit FROM erp_sale_return as sale_return LEFT JOIN erp_tds_on as tds ON tds.id=sale_return.tds_on_id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return.buyer_id='${party_id}' AND sale_return.sale_return_type_id='98' AND sale_return.is_delete_status='0' AND sale_return.sale_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(voucher.voucher_amount),0) as debit FROM erp_voucher as  voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.to_party_id='${party_id}' AND voucher.voucher_type='payment' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(voucher.voucher_amount),0) as debit FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.from_party_id='${party_id}' AND voucher.voucher_type='journal' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(voucher.voucher_amount),0) as debit FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.to_party_id='${party_id}' AND voucher.voucher_type='contra' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date LIKE '${filterData[index]}%')) as debit,((SELECT COALESCE(SUM(journal.journal_purchase_child_net_total),0) as credit FROM erp_journal_purchase as journal WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.branch_id<='${branch_id}' AND journal.year_id<='${year_id}' AND journal.supplier_id='${party_id}' AND journal.is_delete_status='0' AND journal.journal_purchase_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(tax_par.purchase_tax_invoice_net_amount),0) as credit FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_party as party ON party.id=tax_par.account_type WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.branch_id<='${branch_id}' AND tax_par.year_id<='${year_id}' AND tax_par.supplier_id='${party_id}' AND tax_par.is_delete_status='0' AND tax_par.purchase_tax_invoice_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(return_par.purchase_return_total_net_amount),0) as credit FROM erp_purchase_return as return_par WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_type_id='95' AND return_par.is_delete_status='0' AND return_par.purchase_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(return_par.purchase_return_total_taxable),0) as credit FROM erp_purchase_return as return_par LEFT JOIN erp_purchase_return_child as return_child ON return_child.purchase_return_id=return_par.id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_child.party_id='${party_id}' AND return_par.purchase_return_type_id='96' AND return_par.is_delete_status='0' AND return_child.is_delete_status='0' AND return_par.purchase_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(mill.mill_tax_invoice_total_net_amount),0) as credit FROM erp_mill_tax_invoice as mill LEFT JOIN erp_party as party ON party.id=mill.party_account_head_id WHERE mill.user_id='${user_id}' AND mill.company_id<='${company_id}' AND mill.branch_id<='${branch_id}' AND mill.year_id<='${year_id}' AND mill.mill_id='${party_id}' AND mill.is_delete_status='0' AND mill.mill_tax_invoice_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(return_par.purchase_return_total_tds),0) as credit FROM erp_purchase_return as return_par LEFT JOIN erp_tds_on as tds ON tds.id=return_par.tds_on_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_type_id='96' AND return_par.is_delete_status='0' AND return_par.purchase_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_return.sale_return_total_net_amount),0) as credit FROM erp_sale_return as sale_return LEFT JOIN erp_party as party ON party.id=sale_return.sale_return_account_type WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return.buyer_id='${party_id}' AND sale_return.sale_return_type_id!='97' AND sale_return.is_delete_status='0' AND sale_return.sale_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_return.sale_return_total_taxable),0) as credit FROM erp_sale_return as sale_return LEFT JOIN erp_sale_return_child as sale_return_child ON sale_return_child.sale_return_id=sale_return.id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return_child.party_id='${party_id}' AND sale_return.sale_return_type_id='97' AND sale_return.is_delete_status='0' AND sale_return_child.is_delete_status='0' AND sale_return.sale_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_return.sale_return_total_tds),0) as credit FROM erp_sale_return as sale_return LEFT JOIN erp_tds_on as tds ON tds.id=sale_return.tds_on_id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return.buyer_id='${party_id}' AND sale_return.sale_return_type_id='97' AND sale_return.is_delete_status='0' AND sale_return.sale_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_per.sale_tax_invoice_total_net_amount),0) as credit FROM erp_sale_tax_invoice as sale_per LEFT JOIN erp_tds_on as tds ON tds.id=sale_per.tds_on_id WHERE sale_per.user_id='${user_id}' AND sale_per.company_id<='${company_id}' AND sale_per.branch_id<='${branch_id}' AND sale_per.year_id<='${year_id}' AND sale_per.buyer_id='${party_id}' AND sale_per.is_delete_status='0' AND sale_per.sale_tax_invoice_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(voucher.voucher_amount),0) as credit FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.from_party_id='${party_id}' AND voucher.voucher_type='receipt' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(voucher.voucher_amount),0) as credit FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.to_party_id='${party_id}' AND voucher.voucher_type='journal' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(voucher.voucher_amount),0) as credit FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.from_party_id='${party_id}' AND voucher.voucher_type='contra' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date LIKE '${filterData[index]}%')) as credit`;

            
            conn.query(fetchData,(error,data) => {
                if (data?.length > 0) 
                {
                    chartData[0].data[index] = data[0]?.debit
                    chartData[1].data[index] = data[0]?.credit
                }
            });
        }
        setTimeout(() => {
            res?.send({ Status:200,Count:1,Message:'Data found',Data:{
                label:label,
                data:chartData
            } });
            return;
        }, 500);
    },

    // GET ledger CHART DATA DATA API //
    getledgerchartdata2: (req,res,next) => {
            
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
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
        if (filterData.length == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Date Range Must Be Required',Data:[] });
            next();
            return;
        }

        const label = [];
        const chartData = [
            {
                name:'debit',
                data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            },
            {
                name:'credit',
                data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
            }
        ]

        for (let index = 0; index < filterData.length; index++)
        {
            label?.push(constant.moment(`${filterData[index]}01`).format('MMM'))

             var fetchData = `SELECT ((SELECT COALESCE(SUM(journal.journal_purchase_child_total_taxable),0) as debit FROM erp_journal_purchase as journal LEFT JOIN erp_journal_purchase_child as journal_child ON journal_child.journal_purchase_id=journal.id WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.branch_id<='${branch_id}' AND journal.year_id<='${year_id}' AND journal_child.supplier_id='${party_id}' AND journal.is_delete_status='0' AND journal_child.is_delete_status='0' AND journal.journal_purchase_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(return_par.purchase_return_total_net_amount),0) as debit FROM erp_purchase_return as return_par LEFT JOIN erp_party as party ON party.id=return_par.purchase_return_account_type WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_type_id!='95' AND return_par.is_delete_status='0' AND return_par.purchase_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(return_par.purchase_return_total_taxable),0) as debit FROM erp_purchase_return as return_par LEFT JOIN erp_purchase_return_child as return_child ON return_child.purchase_return_id=return_par.id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_child.party_id='${party_id}' AND return_par.purchase_return_type_id='95' AND return_par.is_delete_status='0' AND return_child.is_delete_status='0' AND return_par.purchase_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(mill.mill_tax_invoice_total_tds),0) as debit FROM erp_mill_tax_invoice as mill LEFT JOIN erp_tds_on as tds ON tds.id-mill.tds_on_id WHERE mill.user_id='${user_id}' AND mill.company_id<='${company_id}' AND mill.branch_id<='${branch_id}' AND mill.year_id<='${year_id}' AND mill.mill_id='${party_id}' AND mill.is_delete_status='0' AND mill.mill_tax_invoice_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(tax_par.puchase_tax_invoice_total_tds),0) as debit FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_tds_on as tds ON tds.id=tax_par.tds_on_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.branch_id<='${branch_id}' AND tax_par.year_id<='${year_id}' AND tax_par.supplier_id='${party_id}' AND tax_par.is_delete_status='0' AND tax_par.purchase_tax_invoice_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(return_par.purchase_return_total_tds),0) as debit FROM erp_purchase_return as return_par LEFT JOIN erp_tds_on as tds ON tds.id=return_par.tds_on_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_type_id='95' AND return_par.is_delete_status='0' AND return_par.purchase_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(journal.journal_purchase_tds),0) as debit FROM erp_journal_purchase as journal LEFT JOIN erp_tds_on as tds ON tds.id=journal.tds_on_id WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.branch_id<='${branch_id}' AND journal.year_id<='${year_id}' AND journal.supplier_id='${party_id}' AND journal.is_delete_status='0' AND journal.journal_purchase_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_per.sale_tax_invoice_total_net_amount),0) as debit FROM erp_sale_tax_invoice as sale_per LEFT JOIN erp_party as party ON party.id=sale_per.account_type_party_id WHERE sale_per.user_id='${user_id}' AND sale_per.company_id<='${company_id}' AND sale_per.branch_id<='${branch_id}' AND sale_per.year_id<='${year_id}' AND sale_per.buyer_id='${party_id}' AND sale_per.is_delete_status='0' AND sale_per.sale_tax_invoice_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_return.sale_return_total_net_amount),0) as debit FROM erp_sale_return as sale_return WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return.buyer_id='${party_id}' AND sale_return.sale_return_type_id='97' AND sale_return.is_delete_status='0' AND sale_return.sale_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_return.sale_return_total_taxable),0) as debit FROM erp_sale_return as sale_return LEFT JOIN erp_sale_return_child as sale_return_child ON sale_return_child.sale_return_id=sale_return.id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return_child.party_id='${party_id}' AND sale_return.sale_return_type_id='98' AND sale_return.is_delete_status='0' AND sale_return_child.is_delete_status='0' AND sale_return.sale_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_return.sale_return_total_tds),0) as debit FROM erp_sale_return as sale_return LEFT JOIN erp_tds_on as tds ON tds.id=sale_return.tds_on_id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return.buyer_id='${party_id}' AND sale_return.sale_return_type_id='98' AND sale_return.is_delete_status='0' AND sale_return.sale_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(voucher.voucher_amount),0) as debit FROM erp_voucher as  voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.to_party_id='${party_id}' AND voucher.voucher_type='payment' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(voucher.voucher_amount),0) as debit FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.from_party_id='${party_id}' AND voucher.voucher_type='journal' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(voucher.voucher_amount),0) as debit FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.to_party_id='${party_id}' AND voucher.voucher_type='contra' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date LIKE '${filterData[index]}%')) as debit,((SELECT COALESCE(SUM(journal.journal_purchase_child_net_total),0) as credit FROM erp_journal_purchase as journal WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.branch_id<='${branch_id}' AND journal.year_id<='${year_id}' AND journal.supplier_id='${party_id}' AND journal.is_delete_status='0' AND journal.journal_purchase_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(tax_par.purchase_tax_invoice_net_amount),0) as credit FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_party as party ON party.id=tax_par.account_type WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.branch_id<='${branch_id}' AND tax_par.year_id<='${year_id}' AND tax_par.supplier_id='${party_id}' AND tax_par.is_delete_status='0' AND tax_par.purchase_tax_invoice_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(return_par.purchase_return_total_net_amount),0) as credit FROM erp_purchase_return as return_par WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_type_id='95' AND return_par.is_delete_status='0' AND return_par.purchase_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(return_par.purchase_return_total_taxable),0) as credit FROM erp_purchase_return as return_par LEFT JOIN erp_purchase_return_child as return_child ON return_child.purchase_return_id=return_par.id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_child.party_id='${party_id}' AND return_par.purchase_return_type_id='96' AND return_par.is_delete_status='0' AND return_child.is_delete_status='0' AND return_par.purchase_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(mill.mill_tax_invoice_total_net_amount),0) as credit FROM erp_mill_tax_invoice as mill LEFT JOIN erp_party as party ON party.id=mill.party_account_head_id WHERE mill.user_id='${user_id}' AND mill.company_id<='${company_id}' AND mill.branch_id<='${branch_id}' AND mill.year_id<='${year_id}' AND mill.mill_id='${party_id}' AND mill.is_delete_status='0' AND mill.mill_tax_invoice_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(return_par.purchase_return_total_tds),0) as credit FROM erp_purchase_return as return_par LEFT JOIN erp_tds_on as tds ON tds.id=return_par.tds_on_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.branch_id<='${branch_id}' AND return_par.year_id<='${year_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_type_id='96' AND return_par.is_delete_status='0' AND return_par.purchase_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_return.sale_return_total_net_amount),0) as credit FROM erp_sale_return as sale_return LEFT JOIN erp_party as party ON party.id=sale_return.sale_return_account_type WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return.buyer_id='${party_id}' AND sale_return.sale_return_type_id!='97' AND sale_return.is_delete_status='0' AND sale_return.sale_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_return.sale_return_total_taxable),0) as credit FROM erp_sale_return as sale_return LEFT JOIN erp_sale_return_child as sale_return_child ON sale_return_child.sale_return_id=sale_return.id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return_child.party_id='${party_id}' AND sale_return.sale_return_type_id='97' AND sale_return.is_delete_status='0' AND sale_return_child.is_delete_status='0' AND sale_return.sale_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_return.sale_return_total_tds),0) as credit FROM erp_sale_return as sale_return LEFT JOIN erp_tds_on as tds ON tds.id=sale_return.tds_on_id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.year_id<='${year_id}' AND sale_return.buyer_id='${party_id}' AND sale_return.sale_return_type_id='97' AND sale_return.is_delete_status='0' AND sale_return.sale_return_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(sale_per.sale_tax_invoice_total_net_amount),0) as credit FROM erp_sale_tax_invoice as sale_per LEFT JOIN erp_tds_on as tds ON tds.id=sale_per.tds_on_id WHERE sale_per.user_id='${user_id}' AND sale_per.company_id<='${company_id}' AND sale_per.branch_id<='${branch_id}' AND sale_per.year_id<='${year_id}' AND sale_per.buyer_id='${party_id}' AND sale_per.is_delete_status='0' AND sale_per.sale_tax_invoice_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(voucher.voucher_amount),0) as credit FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.from_party_id='${party_id}' AND voucher.voucher_type='receipt' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(voucher.voucher_amount),0) as credit FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.to_party_id='${party_id}' AND voucher.voucher_type='journal' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date LIKE '${filterData[index]}%') + (SELECT COALESCE(SUM(voucher.voucher_amount),0) as credit FROM erp_voucher as voucher WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.branch_id<='${branch_id}' AND voucher.year_id<='${year_id}' AND voucher.from_party_id='${party_id}' AND voucher.voucher_type='contra' AND voucher.is_delete_status='0' AND voucher.voucher_entry_date LIKE '${filterData[index]}%')) as credit`;

            
            conn.query(fetchData,(error,data) => {
                if (data?.length > 0) 
                {
                    chartData[0].data[index] = data[0]?.debit
                    chartData[1].data[index] = data[0]?.credit
                }
            });
        }
        setTimeout(() => {
            res?.send({ Status:200,Count:1,Message:'Data found',Data:{
                label:label,
                data:chartData
            } });
            return;
        }, 500);
    }
};


export default AllLedgerApis;
    
