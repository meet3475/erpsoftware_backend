
import conn from "../Config/connection.js";
import constant from "../Config/constant.js";

const AllCaCornerApis = {

    // GET TRAIAL BALANCE PHASE 1 REPORT DATA LISTING API //
    traialbalancephase1reportdata: (req,res,next) => {
        
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const from_date = body?.from_date ? body?.from_date : `${constant.moment().format('YYYY-MM-DD')}`;

        var traialbalancephase1reportdata = `CALL get_trial_balance_phase1_data(?,?,?,?,?)`;
        conn.query(traialbalancephase1reportdata,[user_id,company_id,branch_id,year_id,from_date],(error,traialbalancephase1reportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Traial Balance Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {                   
                const alltraialbalancephase1reportdata = [
                    { 
                        particular:'CAPITAL ACCOUNT',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:traialbalancephase1reportdata[0]
                    },
                    { 
                        particular:'CURRENT ASSETS',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:[
                            {
                                particular:'Bank Accounts',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase1reportdata[1] 
                            },
                            {
                                particular:'Cash-in hand',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase1reportdata[2] 
                            },
                            {
                                particular:'CGST Receivable',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase1reportdata[3] 
                            },
                            {
                                particular:'IGST Receivable',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase1reportdata[4] 
                            },
                            {
                                particular:'Interim CGST Receivable',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase1reportdata[5] 
                            },
                            {
                                particular:'Interim IGST Receivable',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase1reportdata[6] 
                            },
                            {
                                particular:'Interim SGST Receivable',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase1reportdata[7] 
                            },
                            {
                                particular:'Loans & Advances (Asset)',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase1reportdata[8] 
                            },
                            {
                                particular:'SGST Receivable',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase1reportdata[9] 
                            },
                            {
                                particular:'Stock-in-hand',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase1reportdata[10][0] 
                            },
                            {
                                particular:'Sundry Debtors',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase1reportdata[11] 
                            },
                        ]
                    },
                ];
                
                res?.send({ Status:200,Count:0,Message:'Data found',Data:alltraialbalancephase1reportdata });
                next();
                return;
            }  
        });
    },

    // GET TRAIAL BALANCE PHASE 2 REPORT DATA LISTING API //
    traialbalancephase2reportdata: (req,res,next) => {
        
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const from_date = body?.from_date ? body?.from_date : `${constant.moment().format('YYYY-MM-DD')}`;

        var traialbalancephase2reportdata = `CALL get_trial_balance_phase2_data(?,?,?,?,?)`;
        conn.query(traialbalancephase2reportdata,[user_id,company_id,branch_id,year_id,from_date],(error,traialbalancephase2reportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Traial Balance Phase 2 Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {                   
                const alltraialbalancephase2reportdata = [
                    { 
                        particular:'Current Liabilities',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:[
                            {   
                                particular:'UNCLAIM GST RECEIVABLE',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: traialbalancephase2reportdata[0]
                            },
                            {   
                                particular:'Broker',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: traialbalancephase2reportdata[1]
                            },
                            {   
                                particular:'CGST Payble',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: traialbalancephase2reportdata[2]
                            },
                            {   
                                particular:'CREDITORS OTHERS',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: traialbalancephase2reportdata[3]
                            },
                            {   
                                particular:'Transporter',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: traialbalancephase2reportdata[4]
                            },
                            {   
                                particular:'Duties and Taxes',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: [
                                    {
                                        particular:'TCSReceivable',
                                        opening:0,
                                        debit:0,
                                        credit:0,
                                        closing:0,
                                        childdata: traialbalancephase2reportdata[5]
                                    }
                                ]
                            },
                            {   
                                particular:'gstpayable',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: traialbalancephase2reportdata[6]
                            },
                            {   
                                particular:'IGST Payble',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: traialbalancephase2reportdata[7]
                            },
                            {   
                                particular:'SGST Payble',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: traialbalancephase2reportdata[8]
                            },
                            {   
                                particular:'Interim CGST Payble',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: traialbalancephase2reportdata[9]
                            },
                            {   
                                particular:'Interim IGST Payble',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: traialbalancephase2reportdata[10]
                            },
                            {   
                                particular:'Interim SGST Payble',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: traialbalancephase2reportdata[11]
                            },
                            {   
                                particular:'Sundry Creditors',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: traialbalancephase2reportdata[12]
                            },
                            {   
                                particular:'Mill',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: traialbalancephase2reportdata[13]
                            },
                            {   
                                particular:'Supplier',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata: [
                                    {
                                        particular:'Creditors',
                                        opening:0,
                                        debit:0,
                                        credit:0,   
                                        closing:0,
                                        childdata:traialbalancephase2reportdata[14]
                                    },
                                    {
                                        particular:'Grey',
                                        opening:0,
                                        debit:0,
                                        credit:0,   
                                        closing:0,
                                        childdata:traialbalancephase2reportdata[15]
                                    },
                                    {
                                        particular:'Job Work',
                                        opening:0,
                                        debit:0,
                                        credit:0,   
                                        closing:0,
                                        childdata:traialbalancephase2reportdata[16]
                                    },
                                    {
                                        particular:'TDS',
                                        opening:0,
                                        debit:0,
                                        credit:0,   
                                        closing:0,
                                        childdata:traialbalancephase2reportdata[17]
                                    }
                                ]
                            },
                        ]
                    },
                ]
                
                res?.send({ Status:200,Count:0,Message:'Data found',Data:alltraialbalancephase2reportdata });
                next();
                return;
            }  
        });
    },

    // GET TRAIAL BALANCE PHASE 3 REPORT DATA LISTING API //
    traialbalancephase3reportdata: (req,res,next) => {  
            
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const from_date = body?.from_date ? body?.from_date : `${constant.moment().format('YYYY-MM-DD')}`;

        var traialbalancephase3reportdata = `CALL get_trial_balance_phase3_data(?,?,?,?,?)`;
        conn.query(traialbalancephase3reportdata,[user_id,company_id,branch_id,year_id,from_date],(error,traialbalancephase3reportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Traial Balance Phase 2 Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {                   
                const alltraialbalancephase3data = [
                    
                    {
                        particular:'DEPRECIATION',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata: traialbalancephase3reportdata[0]
                    },
                    {
                        particular:'DIRECT EXPENSES',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:[
                            {
                                particular:'Discount Allowed',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase3reportdata[1]
                            },
                            {
                                particular:'EMPLOYEES SALARIES',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase3reportdata[2]
                            },
                            {
                                particular:'Freight',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase3reportdata[3]
                            },
                            {
                                particular:'Insurance',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase3reportdata[4]
                            },
                        ]
                    },
                    {
                        particular:'DIRECT INCOME',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:[
                            {
                                particular:'Discount Received',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase3reportdata[5]
                            },
                            {
                                particular:'FreightLess',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase3reportdata[6]
                            }
                        ]
                    },
                    {
                        particular:'FIXED ASSETS',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:traialbalancephase3reportdata[7]
                    },
                    {
                        particular:'INDIRECT EXPENSES',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:[
                            {
                                particular:'INDIRECT EXPENSES',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase3reportdata[8]
                            },
                            {
                                particular:'Rounding Off',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase3reportdata[9][0]
                            }
                        ]
                    },
                    {
                        particular:'INDIRECT INCOME',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:traialbalancephase3reportdata[10]
                    },
                    {
                        particular:'INVESTMENTS',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:traialbalancephase3reportdata[11]
                    },
                ]
                
                res?.send({ Status:200,Count:0,Message:'Data found',Data:alltraialbalancephase3data });
                next();
                return;
            }  
        });
    },

    // GET TRAIAL BALANCE PHASE 4 REPORT DATA LISTING API //
    traialbalancephase4reportdata: (req,res,next) => {
            
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const from_date = body?.from_date ? body?.from_date : `${constant.moment().format('YYYY-MM-DD')}`;

        var traialbalancephase4reportdata = `CALL get_trial_balance_phase4_data(?,?,?,?,?)`;
        conn.query(traialbalancephase4reportdata,[user_id,company_id,branch_id,year_id,from_date],(error,traialbalancephase4reportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Traial Balance Phase 2 Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {                   
                const alltraialbalancephase4data = [
                    
                    {
                        particular:'LOANS (LIABILITY)',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:[
                            {
                                particular:'Bank OD Accounts',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase4reportdata[0]
                            },
                            {
                                particular:'Secured Loans',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase4reportdata[1]
                            },
                            {
                                particular:'Unsecured Loans',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase4reportdata[2]
                            }
                        ]
                    },
                    {
                        particular:'OPENING STOCK',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:traialbalancephase4reportdata[3]
                    },
                    {
                        particular:'PURCHASE ACCOUNT',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:[
                            {
                                particular:'Tax Invoice',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:[ traialbalancephase4reportdata[4][0],traialbalancephase4reportdata[5][0]]
                            },
                            {
                                particular:'Mill Invoice',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase4reportdata[6][0]
                            },
                            {
                                particular:'Purchase Return',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase4reportdata[7][0]
                            },
                            {
                                particular:'Valueadd Invoice',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase4reportdata[8][0]
                            }
                        ]
                    },
                    {
                        particular:'SALES ACCOUNT',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:[
                            {
                                particular:'Tax Invoice',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase4reportdata[9][0]
                            },
                            {
                                particular:'Sales Return',
                                opening:0,
                                debit:0,
                                credit:0,
                                closing:0,
                                childdata:traialbalancephase4reportdata[10][0]
                            },
                        ]
                    },
                    {
                        particular:'TRADING ACCOUNT',
                        opening:0,
                        debit:0,
                        credit:0,
                        closing:0,
                        parent:true,
                        childdata:traialbalancephase4reportdata[11][0]
                    }
                ]
                
                res?.send({ Status:200,Count:0,Message:'Data found',Data:alltraialbalancephase4data });
                next();
                return;
            }  
        });
    },

    // GET PROFIT & LOSS REPORT DATA LISTING API //
    profitandlossreportdata: (req,res,next) => {
        
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const from_date = body?.from_date ? body?.from_date : `${constant.moment().format('YYYY-MM-DD')}`;
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

        var profitandlossreportdata = `CALL get_profit_and_loss_data(?,?,?,?,?,?)`;
        conn.query(profitandlossreportdata,[user_id,company_id,branch_id,year_id,from_date,to_date],(error,profitandlossreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'PROFIT AND LOSS Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {                   
               const opening_stock_total = (Number(profitandlossreportdata[0][0]?.opening) + (profitandlossreportdata[0][0]?.debit)) - (profitandlossreportdata[0][0]?.credit);

                let Purchase_Tax_Invoice_Total = 0;
                profitandlossreportdata[1].forEach(purchasetax => {
                    Purchase_Tax_Invoice_Total = Purchase_Tax_Invoice_Total + ((Number(purchasetax?.opening) + purchasetax?.debit) - (purchasetax?.credit));
                });
                
                let Mill_Tax_Invoice_Total = 0;
                profitandlossreportdata[3].forEach(milltax => {
                    Mill_Tax_Invoice_Total = Mill_Tax_Invoice_Total + ((Number(milltax?.opening) + milltax?.debit) - (milltax?.credit));
                });

                let Purchase_Return_Total = 0;
                profitandlossreportdata[4].forEach(purchasereturn => {
                    Purchase_Return_Total = Purchase_Return_Total + ((Number(purchasereturn?.opening) + purchasereturn?.debit) - (purchasereturn?.credit));
                });

                let Value_Add_Invoice_Total = 0;
                profitandlossreportdata[5].forEach(valueadd => {
                    Value_Add_Invoice_Total = Value_Add_Invoice_Total + ((Number(valueadd?.opening) + valueadd?.debit) - (valueadd?.credit));
                });

                let Discount_Allowed_Total = 0;
                profitandlossreportdata[6].forEach(discount_allowed => {
                    Discount_Allowed_Total = Discount_Allowed_Total + (Number(discount_allowed.opening) + discount_allowed.debit) - (discount_allowed.credit);
                });

                let Employee_Salaries_Total = 0;
                profitandlossreportdata[15].forEach(employee_salaries => {
                    Employee_Salaries_Total = Employee_Salaries_Total + (Number(employee_salaries.opening) + employee_salaries.debit) - (employee_salaries.credit);
                });

                let Freight_Total = 0;
                profitandlossreportdata[16].forEach(freight => {
                    Freight_Total = Freight_Total + (Number(freight.opening) + freight.debit) - (freight.credit);
                });

                let Insurance_Total = 0;
                profitandlossreportdata[17].forEach(insurance => {
                    Insurance_Total = Insurance_Total + (Number(insurance.opening) + insurance.debit) - (insurance.credit);
                });

                let Sale_Invoice_Total = 0;
                profitandlossreportdata[7].forEach(saletaxinvoice => {
                    Sale_Invoice_Total = Sale_Invoice_Total + (Number(saletaxinvoice?.opening) + saletaxinvoice?.credit) - (saletaxinvoice?.debit);
                });

                let Sale_Return_Total = 0;
                profitandlossreportdata[8].forEach(salereturninvoice => {
                    Sale_Return_Total = Sale_Return_Total + (Number(salereturninvoice?.opening) + salereturninvoice?.debit) - (salereturninvoice?.credit);
                });

                let Discount_received_Total = 0;
                profitandlossreportdata[9].forEach(discount_received => {
                    Discount_received_Total = Discount_received_Total + (Number(discount_received.opening) + discount_received.debit) - (discount_received.credit);
                });

                let Freight_Less_Total = 0;
                profitandlossreportdata[18].forEach(Freight_less => {
                    Freight_Less_Total = Freight_Less_Total + (Number(Freight_less.opening) + Freight_less.debit) - (Freight_less.credit);
                });

                let Stock_In_Hand_Total = 0;
                profitandlossreportdata[10].forEach(stock_in_hand => {
                    Stock_In_Hand_Total = Stock_In_Hand_Total + (Number(stock_in_hand.opening) + stock_in_hand.debit) - (stock_in_hand.credit);
                });

                let Indirect_Expense_Total = 0;
                profitandlossreportdata[11].forEach(indirect_expense => {
                    Indirect_Expense_Total = Indirect_Expense_Total + (Number(indirect_expense?.opening) + indirect_expense?.debit) - (indirect_expense?.credit);
                });

                let Round_Off_Total = 0;
                profitandlossreportdata[12].forEach(roundoff => {
                    Round_Off_Total = (Number(roundoff?.opening) + roundoff?.debit) - (roundoff?.credit);
                });

                let Depreciation_Total = 0;
                profitandlossreportdata[13].forEach(depreciation => {
                    Depreciation_Total = Depreciation_Total + (Number(depreciation.opening) + depreciation.debit) - (depreciation.credit);
                });

                let In_Direct_Income_Total = 0;
                profitandlossreportdata[14].forEach(indirect_income => {
                    In_Direct_Income_Total = In_Direct_Income_Total + (Number(indirect_income.opening) + indirect_income.debit) - (indirect_income.credit);
                });

                profitandlossreportdata[11].push({"particular":"Rounding Off","opening":0,"debit":Round_Off_Total,"credit":0})

                const allprofitandlossdata = [
                    {
                        "particular":"OPENING STOCK",
                        "amount":opening_stock_total > 0 ? opening_stock_total : 0,
                        "type":"Left",
                        "child_data":profitandlossreportdata[0]
                    },
                    {
                        "particular":"PURCHASE ACCOUNTS",
                        "amount":Purchase_Tax_Invoice_Total + Mill_Tax_Invoice_Total + Purchase_Return_Total + Value_Add_Invoice_Total,
                        "type":"Left",
                        "child_data":[
                            {
                                "particular":"Tax Invoice",
                                "amount":Purchase_Tax_Invoice_Total,
                                "child_data":profitandlossreportdata[1]
                            },
                            {
                                "particular":"Mill Invoice",
                                "amount":Mill_Tax_Invoice_Total,
                                "child_data":profitandlossreportdata[3]
                            },
                            {
                                "particular":"Purchase Return",
                                "amount":Purchase_Return_Total,
                                "child_data":profitandlossreportdata[4]
                            },
                            {
                                "particular":"Valueadd Invoice",
                                "amount":Value_Add_Invoice_Total,
                                "child_data":profitandlossreportdata[5]
                            },
                        ]
                    },
                    {
                        "particular":"DIRECT EXPENSES",
                        "amount":Discount_Allowed_Total + Employee_Salaries_Total + Freight_Total + Insurance_Total,
                        "type":"Left",
                        "child_data":[
                            {
                                "particular":"Discount Allowed",
                                "amount":Discount_Allowed_Total,
                                "child_data":profitandlossreportdata[6]
                            },
                            {
                                "particular":"EMPLOYEES SALARIES",
                                "amount":Employee_Salaries_Total,
                                "child_data":profitandlossreportdata[15]
                            },
                            {
                                "particular":"Freight",
                                "amount":Freight_Total,
                                "child_data":profitandlossreportdata[16]
                            },
                            {
                                "particular":"Insurance",
                                "amount":Insurance_Total,
                                "child_data":profitandlossreportdata[17]
                            },
                        ]
                    },
                    {
                        "particular":"INDIRECT EXPENSE",
                        "amount":Indirect_Expense_Total + Round_Off_Total,
                        "type":"Left",
                        "bottom":true,
                        "child_data":profitandlossreportdata[11]
                    },
                    {
                        "particular":"DEPRECIATION",
                        "amount":Depreciation_Total,
                        "type":"Left",
                        "bottom":true,
                        "child_data":profitandlossreportdata[13]
                    },
                    {
                        "particular":"SALES ACCOUNTS",
                        "amount":Sale_Invoice_Total + Sale_Return_Total,
                        "type":"Right",
                        "child_data":[
                            {
                                "particular":"Tax Invoice",
                                "amount":Sale_Invoice_Total,
                                "child_data":profitandlossreportdata[7]
                            },
                            {
                                "particular":"Sales Return",
                                "amount":Sale_Return_Total,
                                "child_data":profitandlossreportdata[8]
                            },
                        ]
                    },
                    {
                        "particular":"DIRECT INCOME",
                        "amount":Discount_received_Total + Freight_Less_Total,
                        "type":"Right",
                        "child_data":[
                            {
                                "particular":"Discount Received",
                                "amount":Discount_received_Total,
                                "child_data":profitandlossreportdata[9]
                            },
                            {
                                "particular":"FreightLess",
                                "amount":Freight_Less_Total,
                                "child_data":profitandlossreportdata[18]
                            },
                        ]
                    },
                    {
                        "particular":"STOCK-IN-HAND",
                        "amount":Stock_In_Hand_Total,
                        "type":"Right",
                        "child_data":profitandlossreportdata[10]
                    },
                    {
                        "particular":"INDIRECT INCOME",
                        "amount":In_Direct_Income_Total,
                        "type":"Right",
                        "bottom":true,
                        "child_data":profitandlossreportdata[14]
                    },
                ];

                if (((Sale_Invoice_Total + Sale_Return_Total ) + (Discount_received_Total + Freight_Less_Total) + Stock_In_Hand_Total) > (opening_stock_total + (Purchase_Tax_Invoice_Total + Mill_Tax_Invoice_Total + Purchase_Return_Total + Value_Add_Invoice_Total) + (Discount_Allowed_Total + Employee_Salaries_Total + Freight_Total + Insurance_Total))) 
                {   
                    allprofitandlossdata.push({"particular":"GROSS PROFIT C/O","type": "Left","amount":((Sale_Invoice_Total + Sale_Return_Total ) + (Discount_received_Total + Freight_Less_Total) + Stock_In_Hand_Total) - (opening_stock_total + (Purchase_Tax_Invoice_Total + Mill_Tax_Invoice_Total + Purchase_Return_Total + Value_Add_Invoice_Total) + (Discount_Allowed_Total + Employee_Salaries_Total + Freight_Total + Insurance_Total)),"Total_Balance":((Sale_Invoice_Total + Sale_Return_Total ) + (Discount_received_Total + Freight_Less_Total) + Stock_In_Hand_Total)});

                    allprofitandlossdata.push({"particular":"NET PROFIT","type": "Left","amount":(((Sale_Invoice_Total + Sale_Return_Total ) + (Discount_received_Total + Freight_Less_Total) + Stock_In_Hand_Total) - (opening_stock_total + (Purchase_Tax_Invoice_Total + Mill_Tax_Invoice_Total + Purchase_Return_Total + Value_Add_Invoice_Total) + (Discount_Allowed_Total + Employee_Salaries_Total + Freight_Total + Insurance_Total))) - (Indirect_Expense_Total + Round_Off_Total + Depreciation_Total) + (In_Direct_Income_Total)})
                }
                else
                {
                    allprofitandlossdata.push({"particular":"GROSS LOSS C/O","type": "Right","amount":((opening_stock_total + (Purchase_Tax_Invoice_Total + Mill_Tax_Invoice_Total + Purchase_Return_Total + Value_Add_Invoice_Total) + (Discount_Allowed_Total + Employee_Salaries_Total + Freight_Total + Insurance_Total)) - ((Sale_Invoice_Total + Sale_Return_Total ) + (Discount_received_Total + Freight_Less_Total) + Stock_In_Hand_Total)),"Total_Balance":(opening_stock_total + (Purchase_Tax_Invoice_Total + Mill_Tax_Invoice_Total + Purchase_Return_Total + Value_Add_Invoice_Total) + (Discount_Allowed_Total + Employee_Salaries_Total + Freight_Total + Insurance_Total))});

                    allprofitandlossdata.push({"particular":"NET LOSS","type": "Right","amount":(((opening_stock_total + (Purchase_Tax_Invoice_Total + Mill_Tax_Invoice_Total + Purchase_Return_Total + Value_Add_Invoice_Total) + (Discount_Allowed_Total + Employee_Salaries_Total + Freight_Total + Insurance_Total)) - ((Sale_Invoice_Total + Sale_Return_Total ) + (Discount_received_Total + Freight_Less_Total) + Stock_In_Hand_Total)) + (Indirect_Expense_Total + Round_Off_Total + Depreciation_Total) - (In_Direct_Income_Total)).toFixed(2)})
                }

                res?.send({ Status:200,Count:0,Message:'Data found',sale_amount:Sale_Invoice_Total + Sale_Return_Total,Data:allprofitandlossdata });
                next();
                return;
            }  
        });
    },

    // GET Balance Sheet Phase 1 REPORT DATA LISTING API //
    balancesheetphase1portdata: (req,res,next) => {
            
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const from_date = body?.from_date ? body?.from_date : `${constant.moment().format('YYYY-MM-DD')}`;
       
        var balancesheetphase1portdata = `CALL get_balance_sheet_phase1_data(?,?,?,?,?)`;
        conn.query(balancesheetphase1portdata,[user_id,company_id,branch_id,year_id,from_date],(error,balancesheetphase1portdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Balance Sheet Phase 1 Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {         
                console.log('balancesheetphase1portdata :: ', balancesheetphase1portdata);
                const Capital_Account_total = Number(balancesheetphase1portdata[0][0]?.amount);
                const Reserves_Surplus_Total = Number(balancesheetphase1portdata[1][0]?.amount);
                const Profit_Loss_Total = Number(balancesheetphase1portdata[1][0]?.amount);

                let Bank_Od_Ac_Total = balancesheetphase1portdata[2]?.length > 0 ? balancesheetphase1portdata[2]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Secured_Loans_Total = balancesheetphase1portdata[3]?.length > 0 ? balancesheetphase1portdata[3]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Unsecured_Loans_Total = balancesheetphase1portdata[4]?.length > 0 ? balancesheetphase1portdata[4]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Broker_Total = balancesheetphase1portdata[5]?.length > 0 ? balancesheetphase1portdata[5]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Cgst_Payable_Total = balancesheetphase1portdata[6]?.length > 0 ? balancesheetphase1portdata[6]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Creditor_Other_Total = balancesheetphase1portdata[7]?.length > 0 ? balancesheetphase1portdata[7]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Transporter_Total = balancesheetphase1portdata[8]?.length > 0 ? balancesheetphase1portdata[8]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Sgst_Total = balancesheetphase1portdata[9]?.length > 0 ? balancesheetphase1portdata[9]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Cgst_Total = balancesheetphase1portdata[10]?.length > 0 ? balancesheetphase1portdata[10]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Igst_Total = balancesheetphase1portdata[11]?.length > 0 ? balancesheetphase1portdata[11]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Tcs_Receivable_Total = balancesheetphase1portdata[12]?.length > 0 ? balancesheetphase1portdata[12]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Gst_Payable_Total = balancesheetphase1portdata[13]?.length > 0 ? balancesheetphase1portdata[13]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Igst_Payable_Total = balancesheetphase1portdata[14]?.length > 0 ? balancesheetphase1portdata[14]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Sgst_Payable_Total = balancesheetphase1portdata[15]?.length > 0 ? balancesheetphase1portdata[15]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                const allbalancesheetphase1data = [
                    {
                        "particular":"CAPITAL ACCOUNT",
                        "credit_total":Capital_Account_total,
                        "type":"Left",
                        "childdata":balancesheetphase1portdata[0]
                    },
                    {
                        "particular":"RESERVES AND SURPLUS",
                        "credit_total":Reserves_Surplus_Total,
                        "type":"Left",
                        "childdata":[
                            {
                                "particular":"Profit & Loss ac",
                                "debit_total":Profit_Loss_Total
                            },
                        ]
                    },
                    {
                        "particular":"LOANS (Liability)",
                        "credit_total":Bank_Od_Ac_Total + Secured_Loans_Total + Unsecured_Loans_Total,
                        "type":"Left",
                        "childdata":[
                            {
                                "particular":"Bank OD Accounts",
                                "debit_total":Bank_Od_Ac_Total,
                                "childdata":balancesheetphase1portdata[2]

                            },
                            {
                                "particular":"Secured Loans",
                                "debit_total":Secured_Loans_Total,
                                "childdata":balancesheetphase1portdata[3]

                            },
                            {
                                "particular":"Unsecured Loans",
                                "debit_total":Unsecured_Loans_Total,
                                "childdata":balancesheetphase1portdata[4]
                            },
                        ]
                    },
                    {
                        "particular":"CURRENT LIABILITIES",
                        "credit_total":Broker_Total + Cgst_Payable_Total + Creditor_Other_Total + Transporter_Total + Sgst_Total + Cgst_Total + Igst_Total + Tcs_Receivable_Total + Gst_Payable_Total + Igst_Payable_Total + Sgst_Payable_Total,
                        "type":"Left",
                        "childdata":[
                            {
                                "particular":"Broker",
                                "debit_total":Broker_Total,
                                "childdata":balancesheetphase1portdata[5]
                            },
                            {
                                "particular":"CGST Payble",
                                "debit_total":Cgst_Payable_Total,
                                "childdata":balancesheetphase1portdata[6]
                            },
                            {
                                "particular":"CREDITORS OTHERS",
                                "debit_total":Creditor_Other_Total,
                                "childdata":balancesheetphase1portdata[7]
                            },
                            {
                                "particular":"Transporter",
                                "debit_total":Transporter_Total,
                                "childdata":balancesheetphase1portdata[8]
                            },
                            {
                                "particular":"Duties and Taxes",
                                "debit_total":Sgst_Total + Cgst_Total + Igst_Total + Tcs_Receivable_Total,
                                "childdata":[
                                    {
                                        "particular":"SGST",
                                        "debit_total":Sgst_Total,
                                        "amount":Sgst_Total,
                                        "childdata":balancesheetphase1portdata[9]
                                    },
                                    {
                                        "particular":"CGST",
                                        "debit_total":Cgst_Total,
                                        "amount":Cgst_Total,
                                        "childdata":balancesheetphase1portdata[10]
                                    },
                                    {
                                        "particular":"IGST",
                                        "debit_total":Igst_Total,
                                        "amount":Igst_Total,
                                        "childdata":balancesheetphase1portdata[11]
                                    },
                                    {
                                        "particular":"TCSReceivable",
                                        "debit_total":Tcs_Receivable_Total,
                                        "amount":Tcs_Receivable_Total,
                                        "childdata":balancesheetphase1portdata[12]
                                    },
                                ]
                            },
                            {
                                "particular":"gstpayable",
                                "debit_total":Gst_Payable_Total,
                                "childdata":balancesheetphase1portdata[13]
                            },
                            {
                                "particular":"IGST Payble",
                                "debit_total":Igst_Payable_Total,
                                "childdata":balancesheetphase1portdata[14]
                            },
                            {
                                "particular":"SGST Payble",
                                "debit_total":Sgst_Payable_Total,
                                "childdata":balancesheetphase1portdata[15]
                            },
                        ]
                    },
                ];

                res?.send({ Status:200,Count:0,Message:'Data found',Data:allbalancesheetphase1data });
                next();
                return;
            }  
        });
    },

    // GET Balance Sheet Phase 2 REPORT DATA LISTING API //
    balancesheetphase2portdata: (req,res,next) => {
                
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const from_date = body?.from_date ? body?.from_date : `${constant.moment().format('YYYY-MM-DD')}`;
    
        var balancesheetphase2portdata = `CALL get_balance_sheet_phase2_data(?,?,?,?,?)`;
        conn.query(balancesheetphase2portdata,[user_id,company_id,branch_id,year_id,from_date],(error,balancesheetphase2portdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Balance Sheet Phase 1 Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {
                let Interim_Cgst_Payable_Total = balancesheetphase2portdata[0]?.length > 0 ? balancesheetphase2portdata[0]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Interim_Igst_Payable_Total = balancesheetphase2portdata[1]?.length > 0 ? balancesheetphase2portdata[1]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Interim_Sgst_Payable_Total = balancesheetphase2portdata[2]?.length > 0 ? balancesheetphase2portdata[2]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Sundry_Creditors_Total = balancesheetphase2portdata[3]?.length > 0 ? balancesheetphase2portdata[3]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Mill_Total = balancesheetphase2portdata[4]?.length > 0 ? balancesheetphase2portdata[4]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Creditors_Total = balancesheetphase2portdata[5]?.length > 0 ? balancesheetphase2portdata[5]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Grey_Total = balancesheetphase2portdata[6]?.length > 0 ? balancesheetphase2portdata[6]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Job_Work_Total = balancesheetphase2portdata[7]?.length > 0 ? balancesheetphase2portdata[7]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Tds_Total = balancesheetphase2portdata[8]?.length > 0 ? balancesheetphase2portdata[8]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                const allbalancesheetphase2data = [                    
                    {
                        "particular":"CURRENT LIABILITIES2",
                        "credit_total":Interim_Cgst_Payable_Total + Interim_Igst_Payable_Total + Interim_Sgst_Payable_Total + Sundry_Creditors_Total + Mill_Total + Creditors_Total + Grey_Total + Job_Work_Total + Tds_Total,
                        "type":"Left",
                        "childdata":[
                            {
                                "particular":"Interim CGST Payble",
                                "debit_total":Interim_Cgst_Payable_Total,
                                "childdata":balancesheetphase2portdata[0]
                            },
                            {
                                "particular":"Interim IGST Payble",
                                "debit_total":Interim_Igst_Payable_Total,
                                "childdata":balancesheetphase2portdata[1]
                            },
                            {
                                "particular":"Interim SGST Payble",
                                "debit_total":Interim_Sgst_Payable_Total,
                                "childdata":balancesheetphase2portdata[2]
                            },
                            {
                                "particular":"Sundry Creditors",
                                "debit_total":Sundry_Creditors_Total,
                                "childdata":balancesheetphase2portdata[3]
                            },
                            {
                                "particular":"Mill",
                                "debit_total":Mill_Total,
                                "childdata":balancesheetphase2portdata[4]
                            },
                            {
                                "particular":"Supplier",
                                "debit_total":Creditors_Total + Grey_Total + Job_Work_Total,
                                "childdata":[
                                    {
                                        "particular":"Creditors",
                                        "debit_total":Creditors_Total,
                                        "amount":Creditors_Total,
                                        "childdata":balancesheetphase2portdata[5]
                                    },
                                    {
                                        "particular":"Grey",
                                        "debit_total":Grey_Total,
                                        "amount":Grey_Total,
                                        "childdata":balancesheetphase2portdata[6]
                                    },
                                    {
                                        "particular":"Job Work",
                                        "debit_total":Job_Work_Total,
                                        "amount":Job_Work_Total,
                                        "childdata":balancesheetphase2portdata[7]
                                    }                                    
                                ]
                            },
                            {
                                "particular":"TDS",
                                "debit_total":Tds_Total,
                                "childdata":balancesheetphase2portdata[8]

                            },
                        ]
                    },
                ];

                res?.send({ Status:200,Count:0,Message:'Data found',Data:allbalancesheetphase2data });
                next();
                return;
            }  
        });
    },

    // GET Balance Sheet Phase 3 REPORT DATA LISTING API //
    balancesheetphase3portdata: (req,res,next) => {
                
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const from_date = body?.from_date ? body?.from_date : `${constant.moment().format('YYYY-MM-DD')}`;
    
        var balancesheetphase3portdata = `CALL get_balance_sheet_phase3_data(?,?,?,?,?)`;
        conn.query(balancesheetphase3portdata,[user_id,company_id,branch_id,year_id,from_date],(error,balancesheetphase3portdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Balance Sheet Phase 3 Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {                   
                let Fixed_Assets_Total = balancesheetphase3portdata[0]?.length > 0 ? balancesheetphase3portdata[0]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Investments_Total = balancesheetphase3portdata[1]?.length > 0 ? balancesheetphase3portdata[1]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Bank_Accounts_Total =balancesheetphase3portdata[2]?.length > 0 ? balancesheetphase3portdata[2]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Cash_In_Hand_Total = balancesheetphase3portdata[3]?.length > 0 ? balancesheetphase3portdata[3]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Cgst_Receivable_Total = balancesheetphase3portdata[4]?.length > 0 ? balancesheetphase3portdata[4]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Cheque_In_Hand_Total = balancesheetphase3portdata[5]?.length > 0 ? balancesheetphase3portdata[5]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Deposites_Total = balancesheetphase3portdata[6]?.length > 0 ? balancesheetphase3portdata[6]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Igst_Receivable_Total = balancesheetphase3portdata[7]?.length > 0 ? balancesheetphase3portdata[7]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Interim_Cgst_Receivable_Total = balancesheetphase3portdata[8]?.length > 0 ? balancesheetphase3portdata[8]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Interim_Igst_Receivable_Total = balancesheetphase3portdata[9]?.length > 0 ? balancesheetphase3portdata[9]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Interim_Sgst_Receivable_Total = balancesheetphase3portdata[10]?.length > 0 ? balancesheetphase3portdata[10]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Loans_And_Advance_Total = balancesheetphase3portdata[11]?.length > 0 ? balancesheetphase3portdata[11]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Sgst_Receivable_Total = balancesheetphase3portdata[12]?.length > 0 ? balancesheetphase3portdata[12]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Stock_In_Hand_Total = balancesheetphase3portdata[13]?.length > 0 ? balancesheetphase3portdata[13]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Sundry_Debtors_Total = balancesheetphase3portdata[14]?.length > 0 ? balancesheetphase3portdata[14]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                let Misc_Expense_Total = balancesheetphase3portdata[15]?.length > 0 ? balancesheetphase3portdata[15]?.map(e => e.amount).reduce((a, b) => a + b) : 0;
                console.log('Sundry_Debtors_Total :: ', Sundry_Debtors_Total)
                const allbalancesheetphase2data = [
                    {
                        "particular":"FIXED ASSETS",
                        "type":"right",
                        "credit_total":Fixed_Assets_Total,
                        "childdata":balancesheetphase3portdata[0]
                    },
                    {
                        "particular":"INVESTMENTS",
                        "type":"right",
                        "credit_total":Investments_Total,
                        "childdata":balancesheetphase3portdata[1]                                         
                    },
                    {
                        "particular":"CURRENT ASSETS",
                        "type":"right",
                        "credit_total":Bank_Accounts_Total + Cash_In_Hand_Total + Cgst_Receivable_Total + Cheque_In_Hand_Total + Deposites_Total + Igst_Receivable_Total + Interim_Cgst_Receivable_Total + Interim_Igst_Receivable_Total + Interim_Sgst_Receivable_Total + Loans_And_Advance_Total + Sgst_Receivable_Total + Stock_In_Hand_Total + Sundry_Debtors_Total + Misc_Expense_Total,
                        "childdata":[
                            {
                                "particular":"Bank Accounts",
                                "debit_total":Bank_Accounts_Total,
                                "childdata":balancesheetphase3portdata[2]
                            },
                            {
                                "particular":"Cash-in hand",
                                "debit_total":Cash_In_Hand_Total,
                                "childdata":balancesheetphase3portdata[3]
                            },
                            {
                                "particular":"CGST Receivable",
                                "debit_total":Cgst_Receivable_Total,
                                "childdata":balancesheetphase3portdata[4]
                            },
                            {
                                "particular":"Cheque in Hand",
                                "debit_total":Cheque_In_Hand_Total,
                                "childdata":balancesheetphase3portdata[5]
                            },
                            {
                                "particular":"Deposits (Asset)",
                                "debit_total":Deposites_Total,
                                "childdata":balancesheetphase3portdata[6]
                            },
                            {
                                "particular":"IGST Receivable",
                                "debit_total":Igst_Receivable_Total,
                                "childdata":balancesheetphase3portdata[7]
                            },
                            {
                                "particular":"Interim CGST Receivable",
                                "debit_total":Interim_Cgst_Receivable_Total,
                                "childdata":balancesheetphase3portdata[8]
                            },
                            {
                                "particular":"Interim IGST Receivable",
                                "debit_total":Interim_Igst_Receivable_Total,
                                "childdata":balancesheetphase3portdata[9]
                            },
                            {
                                "particular":"Interim SGST Receivable",
                                "debit_total":Interim_Sgst_Receivable_Total,
                                "childdata":balancesheetphase3portdata[10]
                            },
                            {
                                "particular":"Loans & Advances (Asset)",
                                "debit_total":Loans_And_Advance_Total,
                                "childdata":balancesheetphase3portdata[11]
                            },
                            {
                                "particular":"SGST Receivable",
                                "debit_total":Sgst_Receivable_Total,
                                "childdata":balancesheetphase3portdata[12]
                            },
                            {
                                "particular":"Stock-in-hand",
                                "debit_total":Stock_In_Hand_Total,
                                "childdata":balancesheetphase3portdata[13]
                            },
                            {
                                "particular":"Sundry Debtors",
                                "debit_total":Sundry_Debtors_Total,
                                "childdata":balancesheetphase3portdata[14]
                            },
                            {
                                "particular":"MISC. EXPENSES (ASSET)",
                                "debit_total":Misc_Expense_Total,
                                "childdata":balancesheetphase3portdata[15]
                            },
                        ]
                    },
                ];

                res?.send({ Status:200,Count:0,Message:'Data found',Data:allbalancesheetphase2data});
                next();
                return;
            }  
        });
    },

    // GET Audit Document Phase1 REPORT DATA LISTING API //
    auditdocumentphase1reportdata: (req,res,next) => {
        
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;

        if (from_date.length == 0 || from_date == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter From Date',Data:[] });
            next();
            return;
        }
                
        const Audit_final_report = [];

        var bankaccountreportdata = `CALL get_audit_document_phase1_data(?,?,?,?,?,?,?)`;
        conn.query(bankaccountreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,bankaccountreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Bank Ac Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                bankaccountreportdata[0]?.forEach(bankacountdata => {
                    
                    var bankacountreportdata = `CALL get_audit_document_phase1_data(?,?,?,?,?,?,?)`;
                    conn.query(bankacountreportdata,[user_id,company_id,branch_id,year_id,bankacountdata.party_id,from_date,to_date],(error,bankacountreportdata) => {
                        bankacountdata.child_data = bankacountreportdata[1]
                    });
                });

                const Bank_Accont_Report = {
                    "document_name":"Bank Accounts",
                    "parent":"Current Assets",
                    "childdata":bankaccountreportdata[0]
                }
                    Audit_final_report.push(Bank_Accont_Report);
            }  
        });

        var brokerreportdata = `CALL get_audit_document_phase1_data(?,?,?,?,?,?,?)`;
        conn.query(brokerreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,brokerreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Broker Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                brokerreportdata[2].forEach(brokerdata => {
                    var brokerreportdata = `CALL get_audit_document_phase1_data(?,?,?,?,?,?,?)`;
                    conn.query(brokerreportdata,[user_id,company_id,branch_id,year_id,brokerdata.party_id,from_date,to_date],(error,brokerreportdata) => {
                        brokerdata.child_data = brokerreportdata[3]
                    });
                });
                
                const Broker_Report = {
                    "document_name":"Broker",
                    "parent":"Current Liabilities",
                    "childdata":brokerreportdata[2]
                }
                Audit_final_report.push(Broker_Report);
            }  
        });

        var capitalaccountreportdata = `CALL get_audit_document_phase1_data(?,?,?,?,?,?,?)`;
        conn.query(capitalaccountreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,capitalaccountreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'capitalaccount Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                capitalaccountreportdata[4].forEach(capitalaccountdata => {
                    var capitalaccountreportdata = `CALL get_audit_document_phase1_data(?,?,?,?,?,?,?)`;
                    conn.query(capitalaccountreportdata,[user_id,company_id,branch_id,year_id,capitalaccountdata.party_id,from_date,to_date],(error,capitalaccountreportdata) => {
                       
                        capitalaccountdata.child_data = capitalaccountreportdata[5]
                    });
                });
                
                const capital_account_Report = {
                    "document_name":"Capital Account",
                    "parent":"PRIMARY ACCOUNT",
                    "childdata":capitalaccountreportdata[4]
                }
                Audit_final_report.push(capital_account_Report);
            }  
        });

        var cashinhandreportdata = `CALL get_audit_document_phase1_data(?,?,?,?,?,?,?)`;
        conn.query(cashinhandreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,cashinhandreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'cash in hand Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                cashinhandreportdata[6].forEach(cashinhanddata => {
                    var cashinhandreportdata = `CALL get_audit_document_phase1_data(?,?,?,?,?,?,?)`;
                    conn.query(cashinhandreportdata,[user_id,company_id,branch_id,year_id,cashinhanddata.party_id,from_date,to_date],(error,cashinhandreportdata) => {
                       
                        cashinhanddata.child_data = cashinhandreportdata[7]
                    });
                });
                
                const cash_in_hand_Report = {
                    "document_name":"Cash-in hand",
                    "parent":"Current Assets",
                    "childdata":cashinhandreportdata[6]
                }
                Audit_final_report.push(cash_in_hand_Report);
            }  
        });

        var cgstpayablereportdata = `CALL get_audit_document_phase1_data(?,?,?,?,?,?,?)`;
        conn.query(cgstpayablereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,cgstpayablereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'cash in hand Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                cgstpayablereportdata[8].forEach(cgstpayabledata => {
                    var cgstpayablereportdata = `CALL get_audit_document_phase1_data(?,?,?,?,?,?,?)`;
                    conn.query(cgstpayablereportdata,[user_id,company_id,branch_id,year_id,cgstpayabledata.party_id,from_date,to_date],(error,cgstpayablereportdata) => {
                       
                        cgstpayabledata.child_data = cgstpayablereportdata[9]
                    });
                });
                
                const cgst_payable_Report = {
                    "document_name":"CGST Payble",
                    "parent":"Current Liabilities",
                    "childdata":cgstpayablereportdata[8]
                }
                Audit_final_report.push(cgst_payable_Report);
            }  
        });

         
        var cgstreceivablereportdata = `CALL get_audit_document_phase1_data(?,?,?,?,?,?,?)`;
        conn.query(cgstreceivablereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,cgstreceivablereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'cash in hand Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                cgstreceivablereportdata[10].forEach(cgstreceivabledata => {
                    var cgstreceivablereportdata = `CALL get_audit_document_phase1_data(?,?,?,?,?,?,?)`;
                    conn.query(cgstreceivablereportdata,[user_id,company_id,branch_id,year_id,cgstreceivabledata.party_id,from_date,to_date],(error,cgstreceivablereportdata) => {
                        
                        cgstreceivabledata.child_data = cgstreceivablereportdata[11]
                    });
                });
                
                const cgst_recevable_Report = {
                    "document_name":"CGST Receivable",
                    "parent":"Current Assets",
                    "childdata":cgstreceivablereportdata[10]
                }
                Audit_final_report.push(cgst_recevable_Report);
            }  
        });

        setTimeout(() => {
            res?.send({ Status:200,Count:0,Message:'Data found',Data:Audit_final_report});
            next();
            return;
        }, 400);
    },

    // GET Audit Document Phase2 REPORT DATA LISTING API //
    auditdocumentphase2reportdata: (req,res,next) => {
            
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;

        if (from_date.length == 0 || from_date == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter From Date',Data:[] });
            next();
            return;
        }
                
        const Audit_final_report = [];

        var creditorsreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
        conn.query(creditorsreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,creditorsreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Creditors Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                creditorsreportdata[0]?.forEach(creditorsdata => {
                    
                    var creditorsreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
                    conn.query(creditorsreportdata,[user_id,company_id,branch_id,year_id,creditorsdata.party_id,from_date,to_date],(error,creditorsreportdata) => {
                        creditorsdata.child_data = creditorsreportdata[1]
                    });
                });

                const Creditors_Report = {
                    "document_name":"Creditors",
                    "parent":"Supplier",
                    "childdata":creditorsreportdata[0]
                }
                    Audit_final_report.push(Creditors_Report);
            }  
        });

        var creditorsotherreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
        conn.query(creditorsotherreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,creditorsotherreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'creditorsother Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                creditorsotherreportdata[2].forEach(creditorsotherdata => {
                    
                    var creditorsotherreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
                    conn.query(creditorsotherreportdata,[user_id,company_id,branch_id,year_id,creditorsotherdata.party_id,from_date,to_date],(error,creditorsotherreportdata) => {
                        creditorsotherdata.child_data = creditorsotherreportdata[3]
                    });
                });

                const creditors_Other_Report = {
                    "document_name":"CREDITORS OTHERS",
                    "parent":"Current Liabilities",
                    "childdata":creditorsotherreportdata[2]
                }
                Audit_final_report.push(creditors_Other_Report);
            }  
        });

        var discountallowedreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
        conn.query(discountallowedreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,discountallowedreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'discountallowed Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                discountallowedreportdata[4].forEach(discountalloweddata => {
                    
                    var discountallowedreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
                    conn.query(discountallowedreportdata,[user_id,company_id,branch_id,year_id,discountalloweddata.party_id,from_date,to_date],(error,discountallowedreportdata) => {
                        discountalloweddata.child_data = discountallowedreportdata[5]
                    });
                });

                const discount_allowed_Report = {
                    "document_name":"Discount Allowed",
                    "parent":"Direct Expenses",
                    "childdata":discountallowedreportdata[4]
                }
                Audit_final_report.push(discount_allowed_Report);
            }  
        });

        var discountreceivedreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
        conn.query(discountreceivedreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,discountreceivedreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'discountreceived Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                discountreceivedreportdata[6].forEach(discountreceiveddata => {
                    
                    var discountreceivedreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
                    conn.query(discountreceivedreportdata,[user_id,company_id,branch_id,year_id,discountreceiveddata.party_id,from_date,to_date],(error,discountreceivedreportdata) => {
                        discountreceiveddata.child_data = discountreceivedreportdata[7]
                    });
                });

                const discount_received_Report = {
                    "document_name":"Discount Received",
                    "parent":"Direct Income",
                    "childdata":discountreceivedreportdata[6]
                }
                Audit_final_report.push(discount_received_Report);
            }  
        });

        var fixedassetsreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
        conn.query(fixedassetsreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,fixedassetsreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'fixedassets Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                fixedassetsreportdata[8].forEach(fixedassetsdata => {
                    
                    var fixedassetsreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
                    conn.query(fixedassetsreportdata,[user_id,company_id,branch_id,year_id,fixedassetsdata.party_id,from_date,to_date],(error,fixedassetsreportdata) => {
                        fixedassetsdata.child_data = fixedassetsreportdata[9]
                    });
                });

                const fixed_assets_Report = {
                    "document_name":"Fixed Assets",
                    "parent":"PRIMARY ACCOUNT",
                    "childdata":fixedassetsreportdata[8]
                }
                Audit_final_report.push(fixed_assets_Report);
            }  
        });

        var greyreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
        conn.query(greyreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,greyreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'grey Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                greyreportdata[10].forEach(greydata => {
                    
                    var greyreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
                    conn.query(greyreportdata,[user_id,company_id,branch_id,year_id,greydata.party_id,from_date,to_date],(error,greyreportdata) => {
                        greydata.child_data = greyreportdata[11]
                    });
                });

                const grey_Report = {
                    "document_name":"Grey",
                    "parent":"Supplier",
                    "childdata":greyreportdata[10]
                }
                Audit_final_report.push(grey_Report);
            }  
        });

        var greybuyerreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
        conn.query(greybuyerreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,greybuyerreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'greybuyer Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                greybuyerreportdata[12].forEach(greybuyerdata => {
                    
                    var greybuyerreportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
                    conn.query(greybuyerreportdata,[user_id,company_id,branch_id,year_id,greybuyerdata.party_id,from_date,to_date],(error,greybuyerreportdata) => {
                        greybuyerdata.child_data = greybuyerreportdata[13]
                    });
                });

                const grey_buyer_Report = {
                    "document_name":"Grey Buyer",
                    "parent":"Buyer",
                    "childdata":greybuyerreportdata[12]
                }
                Audit_final_report.push(grey_buyer_Report);
            }  
        });

        var gstpayablereportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
        conn.query(gstpayablereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,gstpayablereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'gstpayable Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                gstpayablereportdata[14].forEach(gstpayabledata => {
                    var gstpayablereportdata = `CALL get_audit_document_Phase2_data(?,?,?,?,?,?,?)`;
                    conn.query(gstpayablereportdata,[user_id,company_id,branch_id,year_id,gstpayabledata.party_id,from_date,to_date],(error,gstpayablereportdata) => {
                        gstpayabledata.child_data = gstpayablereportdata[15]
                    });
                });

                const gst_payables_Report = {
                    "document_name":"gstpayable",
                    "parent":"Current Liabilities",
                    "childdata":gstpayablereportdata[14]
                }
                Audit_final_report.push(gst_payables_Report);
            }  
        });

        setTimeout(() => {
            res?.send({ Status:200,Count:0,Message:'Data found',Data:Audit_final_report});
            next();
            return;
        }, 400);
    },

    // GET Audit Document Phase3 REPORT DATA LISTING API //
    auditdocumentphase3reportdata: (req,res,next) => {
                
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;

        if (from_date.length == 0 || from_date == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter From Date',Data:[] });
            next();
            return;
        }
                
        const Audit_final_report = [];

        var igstpayablereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
        conn.query(igstpayablereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,igstpayablereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'igstpayable Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                igstpayablereportdata[0]?.forEach(igstpayabledata => {
                    
                    var igstpayablereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
                    conn.query(igstpayablereportdata,[user_id,company_id,branch_id,year_id,igstpayabledata.party_id,from_date,to_date],(error,igstpayablereportdata) => {
                        igstpayabledata.child_data = igstpayablereportdata[1]
                    });
                });

                const igst_payable_Report = {
                    "document_name":"IGST Payble",
                    "parent":"Current Liabilities",
                    "childdata":igstpayablereportdata[0]
                }
                Audit_final_report.push(igst_payable_Report);
            }  
        });
        
        var igstreceivablereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
        conn.query(igstreceivablereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,igstreceivablereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'igstreceivable Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                igstreceivablereportdata[2].forEach(igstreceivabledata => {
                    
                    var igstreceivablereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
                    conn.query(igstreceivablereportdata,[user_id,company_id,branch_id,year_id,igstreceivabledata.party_id,from_date,to_date],(error,igstreceivablereportdata) => {
                        igstreceivabledata.child_data = igstreceivablereportdata[3]
                    });
                });

                const igst_receivable_Report = {
                    "document_name":"IGST Receivable",
                    "parent":"Current Assets",
                    "childdata":igstreceivablereportdata[2]
                }
                Audit_final_report.push(igst_receivable_Report);
            }  
        });
        
        var indirectexpensereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
        conn.query(indirectexpensereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,indirectexpensereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'indirectexpense Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                indirectexpensereportdata[4].forEach(indirectexpensedata => {
                    
                    var indirectexpensereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
                    conn.query(indirectexpensereportdata,[user_id,company_id,branch_id,year_id,indirectexpensedata.party_id,from_date,to_date],(error,indirectexpensereportdata) => {
                        indirectexpensedata.child_data = indirectexpensereportdata[5]
                    });
                });

                const indirect_expense_Report = {
                    "document_name":"Indirect Expenses",
                    "parent":"PRIMARY ACCOUNT",
                    "childdata":indirectexpensereportdata[4]
                }
                Audit_final_report.push(indirect_expense_Report);
            }  
        });

        var indirectincomereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
        conn.query(indirectincomereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,indirectincomereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'indirectincome Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                indirectincomereportdata[6].forEach(indirectincomedata => {
                    
                    var indirectincomereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
                    conn.query(indirectincomereportdata,[user_id,company_id,branch_id,year_id,indirectincomedata.party_id,from_date,to_date],(error,indirectincomereportdata) => {
                        indirectincomedata.child_data = indirectincomereportdata[7]
                    });
                });

                const indirect_income_Report = {
                    "document_name":"Indirect Incomes",
                    "parent":"PRIMARY ACCOUNT",
                    "childdata":indirectincomereportdata[6]
                }
                Audit_final_report.push(indirect_income_Report);
            }  
        });

        var interimcgstpayblereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
        conn.query(interimcgstpayblereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,interimcgstpayblereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'interim cgstpayble Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                interimcgstpayblereportdata[8].forEach(interimcgstpaybledata => {
                    
                    var interimcgstpayblereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
                    conn.query(interimcgstpayblereportdata,[user_id,company_id,branch_id,year_id,interimcgstpaybledata.party_id,from_date,to_date],(error,interimcgstpayblereportdata) => {
                        interimcgstpaybledata.child_data = interimcgstpayblereportdata[9]
                    });
                });

                const interim_cgst_payble_Report = {
                    "document_name":"Interim CGST Payble",
                    "parent":"Current Liabilities",
                    "childdata":interimcgstpayblereportdata[8]
                }
                Audit_final_report.push(interim_cgst_payble_Report);
            }  
        });

        var interimcgstreceivablereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
        conn.query(interimcgstreceivablereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,interimcgstreceivablereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'interimcgstreceivable Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                interimcgstreceivablereportdata[10].forEach(interimcgstreceivabledata => {
                    
                    var interimcgstreceivablereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
                    conn.query(interimcgstreceivablereportdata,[user_id,company_id,branch_id,year_id,interimcgstreceivabledata.party_id,from_date,to_date],(error,interimcgstreceivablereportdata) => {
                        interimcgstreceivabledata.child_data = interimcgstreceivablereportdata[11]
                    });
                });

                const interim_cgst_receivable_Report = {
                    "document_name":"Interim CGST Receivable",
                    "parent":"Current Assets",
                    "childdata":interimcgstreceivablereportdata[10]
                }
                Audit_final_report.push(interim_cgst_receivable_Report);
            }  
        });

        var interimigstpayblereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
        conn.query(interimigstpayblereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,interimigstpayblereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'interimigstpayble Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                interimigstpayblereportdata[12].forEach(interimigstpaybledata => {
                    
                    var interimigstpayblereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
                    conn.query(interimigstpayblereportdata,[user_id,company_id,branch_id,year_id,interimigstpaybledata.party_id,from_date,to_date],(error,interimigstpayblereportdata) => {
                        interimigstpaybledata.child_data = interimigstpayblereportdata[13]
                    });
                });

                const interim_igst_payble_Report = {
                    "document_name":"Interim IGST Payble",
                    "parent":"Current Liabilities",
                    "childdata":interimigstpayblereportdata[12]
                }
                Audit_final_report.push(interim_igst_payble_Report);
            }  
        });

        var interimigstreceivablereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
        conn.query(interimigstreceivablereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,interimigstreceivablereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'interimigstreceivable Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                interimigstreceivablereportdata[14].forEach(interimigstreceivabledata => {
                    
                    var interimigstreceivablereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
                    conn.query(interimigstreceivablereportdata,[user_id,company_id,branch_id,year_id,interimigstreceivabledata.party_id,from_date,to_date],(error,interimigstreceivablereportdata) => {
                        interimigstreceivabledata.child_data = interimigstreceivablereportdata[15]
                    });
                });

                const interim_igst_receivable_Report = {
                    "document_name":"Interim IGST Receivable",
                    "parent":"Current Assets",
                    "childdata":interimigstreceivablereportdata[14]
                }
                Audit_final_report.push(interim_igst_receivable_Report);
            }  
        });

        var interimsgstpayblereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
        conn.query(interimsgstpayblereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,interimsgstpayblereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'interimsgstpayble Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                interimsgstpayblereportdata[16].forEach(interimsgstpaybledata => {
                    
                    var interimsgstpayblereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
                    conn.query(interimsgstpayblereportdata,[user_id,company_id,branch_id,year_id,interimsgstpaybledata.party_id,from_date,to_date],(error,interimsgstpayblereportdata) => {
                        interimsgstpaybledata.child_data = interimsgstpayblereportdata[17]
                    });
                });

                const interim_sgst_payble_Report = {
                    "document_name":"Interim sgst Payble",
                    "parent":"Current Liabilities",
                    "childdata":interimsgstpayblereportdata[16]
                }
                Audit_final_report.push(interim_sgst_payble_Report);
            }  
        });

        var interimsgstreceivablereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
        conn.query(interimsgstreceivablereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,interimsgstreceivablereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'interimsgstreceivable Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                interimsgstreceivablereportdata[18].forEach(interimsgstreceivabledata => {
                    
                    var interimsgstreceivablereportdata = `CALL get_audit_document_Phase3_data(?,?,?,?,?,?,?)`;
                    conn.query(interimsgstreceivablereportdata,[user_id,company_id,branch_id,year_id,interimsgstreceivabledata.party_id,from_date,to_date],(error,interimsgstreceivablereportdata) => {
                        interimsgstreceivabledata.child_data = interimsgstreceivablereportdata[19]
                    });
                });

                const interim_sgst_receivable_Report = {
                    "document_name":"Interim sgst Receivable",
                    "parent":"Current Assets",
                    "childdata":interimsgstreceivablereportdata[18]
                }
                Audit_final_report.push(interim_sgst_receivable_Report);
            }  
        });

        setTimeout(() => {
            res?.send({ Status:200,Count:0,Message:'Data found',Data:Audit_final_report});
            next();
            return;
        }, 400);
    },

    // GET Audit Document Phase4 REPORT DATA LISTING API //
    auditdocumentphase4reportdata: (req,res,next) => {
                
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;

        if (from_date.length == 0 || from_date == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter From Date',Data:[] });
            next();
            return;
        }
                
        const Audit_final_report = [];

        var jobworkreportdata = `CALL get_audit_document_Phase4_data(?,?,?,?,?,?,?)`;
        conn.query(jobworkreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,jobworkreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'jobwork Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                jobworkreportdata[0]?.forEach(jobworkdata => {
                    
                    var jobworkreportdata = `CALL get_audit_document_Phase4_data(?,?,?,?,?,?,?)`;
                    conn.query(jobworkreportdata,[user_id,company_id,branch_id,year_id,jobworkdata.party_id,from_date,to_date],(error,jobworkreportdata) => {
                        jobworkdata.child_data = jobworkreportdata[1]
                    });
                });

                const job_work_Report = {
                    "document_name":"Job Work",
                    "parent":"Supplier",
                    "childdata":jobworkreportdata[0]
                }
                Audit_final_report.push(job_work_Report);
            }  
        });

        var loanandadvancereportdata = `CALL get_audit_document_Phase4_data(?,?,?,?,?,?,?)`;
        conn.query(loanandadvancereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,loanandadvancereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'loanandadvance Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                loanandadvancereportdata[2].forEach(loanandadvancedata => {
                    
                    var loanandadvancereportdata = `CALL get_audit_document_Phase4_data(?,?,?,?,?,?,?)`;
                    conn.query(loanandadvancereportdata,[user_id,company_id,branch_id,year_id,loanandadvancedata.party_id,from_date,to_date],(error,loanandadvancereportdata) => {
                        loanandadvancedata.child_data = loanandadvancereportdata[3]
                    });
                });

                const loan_advance_Report = {
                    "document_name":"Loans & Advances (Asset)",
                    "parent":"Current Assets",
                    "childdata":loanandadvancereportdata[2]
                }
                Audit_final_report.push(loan_advance_Report);
            }  
        });
            
        var millreportdata = `CALL get_audit_document_Phase4_data(?,?,?,?,?,?,?)`;
        conn.query(millreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,millreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'mill Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                millreportdata[4].forEach(milldata => {
                    
                    var millreportdata = `CALL get_audit_document_Phase4_data(?,?,?,?,?,?,?)`;
                    conn.query(millreportdata,[user_id,company_id,branch_id,year_id,milldata.party_id,from_date,to_date],(error,millreportdata) => {
                        milldata.child_data = millreportdata[5]
                    });
                });

                const mill_Report = {
                    "document_name":"Mill",
                    "parent":"Sundry Creditors",
                    "childdata":millreportdata[4]
                }
                Audit_final_report.push(mill_Report);
            }  
        });

        var millinvoicereportdata = `CALL get_audit_document_Phase4_data(?,?,?,?,?,?,?)`;
        conn.query(millinvoicereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,millinvoicereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'millinvoice Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                millinvoicereportdata[6].forEach(millinvoicedata => {
                    
                    var millinvoicereportdata = `CALL get_audit_document_Phase4_data(?,?,?,?,?,?,?)`;
                    conn.query(millinvoicereportdata,[user_id,company_id,branch_id,year_id,millinvoicedata.party_id,from_date,to_date],(error,millinvoicereportdata) => {
                        millinvoicedata.child_data = millinvoicereportdata[7]
                    });
                });

                const mill_invoice_Report = {
                    "document_name":"Mill Invoice",
                    "parent":"Purchase Account",
                    "childdata":millinvoicereportdata[6]
                }
                Audit_final_report.push(mill_invoice_Report);
            }  
        });

        var openingstockreportdata = `CALL get_audit_document_Phase4_data(?,?,?,?,?,?,?)`;
        conn.query(openingstockreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,openingstockreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'openingstock Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                openingstockreportdata[8].forEach(openingstockdata => {
                    
                    var openingstockreportdata = `CALL get_audit_document_Phase4_data(?,?,?,?,?,?,?)`;
                    conn.query(openingstockreportdata,[user_id,company_id,branch_id,year_id,openingstockdata.party_id,from_date,to_date],(error,openingstockreportdata) => {
                        openingstockdata.child_data = openingstockreportdata[9]
                    });
                });

                const opening_stock_Report = {
                    "document_name":"Opening Stock",
                    "parent":"PRIMARY ACCOUNT",
                    "childdata":openingstockreportdata[8]
                }
                Audit_final_report.push(opening_stock_Report);
            }  
        });

        var purchasereturnreportdata = `CALL get_audit_document_Phase4_data(?,?,?,?,?,?,?)`;
        conn.query(purchasereturnreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,purchasereturnreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'purchasereturn Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                purchasereturnreportdata[10].forEach(purchasereturndata => {
                    
                    var purchasereturnreportdata = `CALL get_audit_document_Phase4_data(?,?,?,?,?,?,?)`;
                    conn.query(purchasereturnreportdata,[user_id,company_id,branch_id,year_id,purchasereturndata.party_id,from_date,to_date],(error,purchasereturnreportdata) => {
                        purchasereturndata.child_data = purchasereturnreportdata[11]
                    });
                });

                const purchase_return_Report = {
                    "document_name":"Purchase Return",
                    "parent":"Purchase Account",
                    "childdata":purchasereturnreportdata[10]
                }
                Audit_final_report.push(purchase_return_Report);
            }  
        });

        setTimeout(() => {
            res?.send({ Status:200,Count:0,Message:'Data found',Data:Audit_final_report});
            next();
            return;
        }, 400);
    },

    // GET Audit Document Phase5 REPORT DATA LISTING API //
    auditdocumentphase5reportdata: (req,res,next) => {
                    
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;

        if (from_date.length == 0 || from_date == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter From Date',Data:[] });
            next();
            return;
        }
                
        const Audit_final_report = [];

        var salereturnreportdata = `CALL get_audit_document_Phase5_data(?,?,?,?,?,?,?)`;
        conn.query(salereturnreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,salereturnreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'salereturn Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                salereturnreportdata[0]?.forEach(salereturndata => {
                    
                    var salereturnreportdata = `CALL get_audit_document_Phase5_data(?,?,?,?,?,?,?)`;
                    conn.query(salereturnreportdata,[user_id,company_id,branch_id,year_id,salereturndata.party_id,from_date,to_date],(error,salereturnreportdata) => {
                        salereturndata.child_data = salereturnreportdata[1]
                    });
                });
        
                const sale_return_Report = {
                    "document_name":"Sales Return",
                    "parent":"Sales Account",
                    "childdata":salereturnreportdata[0]
                }
                Audit_final_report.push(sale_return_Report);
            }  
        });

        var sgstpayblereportdata = `CALL get_audit_document_Phase5_data(?,?,?,?,?,?,?)`;
        conn.query(sgstpayblereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,sgstpayblereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'sgstpayble Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                sgstpayblereportdata[2].forEach(sgstpaybledata => {
                    
                    var sgstpayblereportdata = `CALL get_audit_document_Phase5_data(?,?,?,?,?,?,?)`;
                    conn.query(sgstpayblereportdata,[user_id,company_id,branch_id,year_id,sgstpaybledata.party_id,from_date,to_date],(error,sgstpayblereportdata) => {
                        sgstpaybledata.child_data = sgstpayblereportdata[3]
                    });
                });

                const sgst_payble_Report = {
                    "document_name":"SGST Payble",
                    "parent":"Current Liabilities",
                    "childdata":sgstpayblereportdata[2]
                }
                Audit_final_report.push(sgst_payble_Report);
            }  
        });

        var sgstreceivablereportdata = `CALL get_audit_document_Phase5_data(?,?,?,?,?,?,?)`;
        conn.query(sgstreceivablereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,sgstreceivablereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'sgstreceivable Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                sgstreceivablereportdata[4].forEach(sgstreceivabledata => {
                    
                    var sgstreceivablereportdata = `CALL get_audit_document_Phase5_data(?,?,?,?,?,?,?)`;
                    conn.query(sgstreceivablereportdata,[user_id,company_id,branch_id,year_id,sgstreceivabledata.party_id,from_date,to_date],(error,sgstreceivablereportdata) => {
                        sgstreceivabledata.child_data = sgstreceivablereportdata[5]
                    });
                });

                const sgst_recevable_Report = {
                    "document_name":"SGST Receivable",
                    "parent":"Current Assets",
                    "childdata":sgstreceivablereportdata[4]
                }
                Audit_final_report.push(sgst_recevable_Report);
            }  
        });

        var stockinhandreportdata = `CALL get_audit_document_Phase5_data(?,?,?,?,?,?,?)`;
        conn.query(stockinhandreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,stockinhandreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'stockinhand Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                stockinhandreportdata[6].forEach(stockinhanddata => {
                    
                    var stockinhandreportdata = `CALL get_audit_document_Phase5_data(?,?,?,?,?,?,?)`;
                    conn.query(stockinhandreportdata,[user_id,company_id,branch_id,year_id,stockinhanddata.party_id,from_date,to_date],(error,stockinhandreportdata) => {
                        stockinhanddata.child_data = stockinhandreportdata[7]
                    });
                });

                const stock_in_hand_Report = {
                    "document_name":"Stock-in-hand",
                    "parent":"Current Assets",
                    "childdata":stockinhandreportdata[6]
                }
                Audit_final_report.push(stock_in_hand_Report);
            }  
        });

        var sundrycreditorsreportdata = `CALL get_audit_document_Phase5_data(?,?,?,?,?,?,?)`;
        conn.query(sundrycreditorsreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,sundrycreditorsreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'sundrycreditors Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                sundrycreditorsreportdata[8].forEach(sundrycreditorsdata => {
                    
                    var sundrycreditorsreportdata = `CALL get_audit_document_Phase5_data(?,?,?,?,?,?,?)`;
                    conn.query(sundrycreditorsreportdata,[user_id,company_id,branch_id,year_id,sundrycreditorsdata.party_id,from_date,to_date],(error,sundrycreditorsreportdata) => {
                        sundrycreditorsdata.child_data = sundrycreditorsreportdata[9]
                    });
                });

                const sundry_creditrors_Report = {
                    "document_name":"Sundry Creditors",
                    "parent":"Current Liabilities",
                    "childdata":sundrycreditorsreportdata[8]
                }
                Audit_final_report.push(sundry_creditrors_Report);
            }  
        });
        
        setTimeout(() => {
            res?.send({ Status:200,Count:0,Message:'Data found',Data:Audit_final_report});
            next();
            return;
        }, 400);
    },

    // GET Audit Document Phase6 REPORT DATA LISTING API //
    auditdocumentphase6reportdata: (req,res,next) => {
                        
        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const from_date = body?.from_date ? body?.from_date : '';
        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;

        if (from_date.length == 0 || from_date == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter From Date',Data:[] });
            next();
            return;
        }
                
        const Audit_final_report = [];

        var sundrydebtorsreportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
        conn.query(sundrydebtorsreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,sundrydebtorsreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'sundrydebtors Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                sundrydebtorsreportdata[0]?.forEach(sundrydebtorsdata => {
                    
                    var sundrydebtorsreportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
                    conn.query(sundrydebtorsreportdata,[user_id,company_id,branch_id,year_id,sundrydebtorsdata.party_id,from_date,to_date],(error,sundrydebtorsreportdata) => {
                        sundrydebtorsdata.child_data = sundrydebtorsreportdata[1]
                    });
                });

                const sundry_debtors_Report = {
                    "document_name":"Sundry Debtors",
                    "parent":"Current Assets",
                    "childdata":sundrydebtorsreportdata[0]
                }
                Audit_final_report.push(sundry_debtors_Report);
            }  
        });

        var saletaxinvoicereportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
        conn.query(saletaxinvoicereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,saletaxinvoicereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'saletaxinvoice Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                saletaxinvoicereportdata[2].forEach(saletaxinvoicedata => {
                    
                    var saletaxinvoicereportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
                    conn.query(saletaxinvoicereportdata,[user_id,company_id,branch_id,year_id,saletaxinvoicedata.party_id,from_date,to_date],(error,saletaxinvoicereportdata) => {
                        saletaxinvoicedata.child_data = saletaxinvoicereportdata[3]
                    });
                });

                const sale_tax_invoice_Report = {
                    "document_name":"Tax Invoice",
                    "parent":"Sales Account",
                    "childdata":saletaxinvoicereportdata[2]
                }
                Audit_final_report.push(sale_tax_invoice_Report);
            }  
        });

        var purchasetaxinvoicereportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
        conn.query(purchasetaxinvoicereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,purchasetaxinvoicereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'purchasetaxinvoice Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                purchasetaxinvoicereportdata[4].forEach(purchasetaxinvoicedata => {
                    
                    var purchasetaxinvoicereportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
                    conn.query(purchasetaxinvoicereportdata,[user_id,company_id,branch_id,year_id,purchasetaxinvoicedata.party_id,from_date,to_date],(error,purchasetaxinvoicereportdata) => {
                        purchasetaxinvoicedata.child_data = purchasetaxinvoicereportdata[5]
                    });
                });

                const purchase_tax_invoice_Report = {
                    "document_name":"Tax Invoice",
                    "parent":"Purchase Account",
                    "childdata":purchasetaxinvoicereportdata[4]
                }
                Audit_final_report.push(purchase_tax_invoice_Report);
            }  
        });

        var tcsreceivablereportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
        conn.query(tcsreceivablereportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,tcsreceivablereportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'tcsreceivable Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                tcsreceivablereportdata[6].forEach(tcsreceivabledata => {
                    
                    var tcsreceivablereportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
                    conn.query(tcsreceivablereportdata,[user_id,company_id,branch_id,year_id,tcsreceivabledata.party_id,from_date,to_date],(error,tcsreceivablereportdata) => {
                        tcsreceivabledata.child_data = tcsreceivablereportdata[7]
                    });
                });

                const tcs_receivable_Report = {
                    "document_name":"TCSReceivable",
                    "parent":"Duties and Taxes",
                    "childdata":tcsreceivablereportdata[6]
                }
                Audit_final_report.push(tcs_receivable_Report);
            }  
        });

        var tdsreportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
        conn.query(tdsreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,tdsreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'tds Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                tdsreportdata[8].forEach(tdsdata => {
                    
                    var tdsreportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
                    conn.query(tdsreportdata,[user_id,company_id,branch_id,year_id,tdsdata.party_id,from_date,to_date],(error,tdsreportdata) => {
                        tdsdata.child_data = tdsreportdata[9]
                    });
                });

                const tds_Report = {
                    "document_name":"TDS",
                    "parent":"Current Liabilities",
                    "childdata":tdsreportdata[8]
                }
                Audit_final_report.push(tds_Report);
            }  
        });

        var tradingaccountreportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
        conn.query(tradingaccountreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,tradingaccountreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'tradingaccount Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                tradingaccountreportdata[10].forEach(tradingaccountdata => {
                    
                    var tradingaccountreportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
                    conn.query(tradingaccountreportdata,[user_id,company_id,branch_id,year_id,tradingaccountdata.party_id,from_date,to_date],(error,tradingaccountreportdata) => {
                        tradingaccountdata.child_data = tradingaccountreportdata[11]
                    });
                });

                const trading_account_Report = {
                    "document_name":"Trading Account",
                    "parent":"PRIMARY ACCOUNT",
                    "childdata":tradingaccountreportdata[10]
                }
                Audit_final_report.push(trading_account_Report);
            }  
        });

        var transporterreportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
        conn.query(transporterreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,transporterreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'transporter Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                transporterreportdata[12].forEach(transporterdata => {
                    
                    var transporterreportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
                    conn.query(transporterreportdata,[user_id,company_id,branch_id,year_id,transporterdata.party_id,from_date,to_date],(error,transporterreportdata) => {
                        transporterdata.child_data = transporterreportdata[13]
                    });
                });

                const transporter_Report = {
                    "document_name":"Transporter",
                    "parent":"CREDITORS OTHERS",
                    "childdata":transporterreportdata[12]
                }
                Audit_final_report.push(transporter_Report);
            }  
        });

        var unsecuredloansreportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
        conn.query(unsecuredloansreportdata,[user_id,company_id,branch_id,year_id,party_id,from_date,to_date],(error,unsecuredloansreportdata) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'unsecuredloans Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                unsecuredloansreportdata[14].forEach(unsecuredloansdata => {
                    
                    var unsecuredloansreportdata = `CALL get_audit_document_Phase6_data(?,?,?,?,?,?,?)`;
                    conn.query(unsecuredloansreportdata,[user_id,company_id,branch_id,year_id,unsecuredloansdata.party_id,from_date,to_date],(error,unsecuredloansreportdata) => {
                        unsecuredloansdata.child_data = unsecuredloansreportdata[15]
                    });
                });

                const unsecured_loans_Report = {
                    "document_name":"Unsecured Loans",
                    "parent":"Loans (Liability)",
                    "childdata":unsecuredloansreportdata[14]
                }
                Audit_final_report.push(unsecured_loans_Report);
            }  
        });

        setTimeout(() => {
            res?.send({ Status:200,Count:0,Message:'Data found',Data:Audit_final_report});
            next();
            return;
        }, 400);
    },

    // INSERT Closing Entry IN voucher Journal DATA API //
    setclosingstock: (req,res,next) => {
        
        let body  = req?.body;
        // const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const from_party_id = body?.from_party_id ? body?.from_party_id : 0;
        const to_party_name = body?.to_party_name ? body?.to_party_name : '';
        const voucher_date = body?.voucher_date ? constant.moment(body?.voucher_date).format('YYYY-MM-DD') : constant.moment().format('YYYY-MM-DD');
        const voucher_amount = body?.voucher_amount ? body?.voucher_amount : 0;
        const voucher_type = body?.voucher_type ? body?.voucher_type.trim().toLowerCase() : 'journal';
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
        if (from_party_id.length == 0 || from_party_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter From Party ID',Data:[] });
            next();
            return;
        }
        if (to_party_name.length == 0 || to_party_name == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter to Party Name ID',Data:[] });
            next();
            return;
        }
        
        const existtradingyear = `SELECT id FROM erp_party WHERE user_id='${user_id}' AND company_id='${company_id}' AND party_name='${to_party_name}'` ;
        conn.query(existtradingyear,(error,existtradingyear) => {
            
            if (existtradingyear.length > 0) 
            {
                const to_party_id = existtradingyear[0]?.id;
                const existclosing = `SELECT COUNT(id) as id FROM erp_voucher WHERE from_party_id='${from_party_id}' AND to_party_id='${to_party_id}' AND is_delete_status='0'`;
                conn.query(existclosing,(error,existclosing) => {
                    
                    if (existclosing[0].id > 0) 
                    {
                        const updateclosing = `CALL create_closing(?,?,?,?,?,?,?,?,?,?,?,?)`;
                        conn.query(updateclosing,[1,user_id,branch_id,company_id,year_id,from_party_id,to_party_id,voucher_date,voucher_amount,voucher_type,entry_date,update_date],(error,data) => {

                            if (error)
                            {   
                                res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                                next();
                            }
                            else
                            {   
                                res?.send({ Status:200,Count:0,Message:'Closing Updated',Data:[] });
                                next();            
                                                    
                                // INSERT USER ACTIVITY LOG IN TABLE //
                                const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                                const ip = `voucher Updated With This Device ID ${HeaderData.device_id} `;
                                const loginuserdetails = `CALL get_user_details(?)`;
                                conn.query(loginuserdetails,[user_id],(error,userdata) => {
                                    if(userdata[0])
                                    {   
                                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                        conn.query(loginactivitylog,[user_id,0,userdata[0][0]?.user_position,ip,`voucher`,entry_date],function(error,data){
                                
                                        });
                                    }
                                });
                            }  
                        });
                    }
                    else    
                    {
                        const createclosing = `CALL create_closing(?,?,?,?,?,?,?,?,?,?,?,?)`;
                        conn.query(createclosing,[0,user_id,branch_id,company_id,year_id,from_party_id,to_party_id,voucher_date,voucher_amount,voucher_type,entry_date,update_date],(error,data) => {

                            if (error)
                            {   
                                res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                                next();
                            }
                            else
                            {   
                                res?.send({ Status:200,Count:0,Message:'Closing Updated',Data:[] });
                                next();            
                                                    
                                // INSERT USER ACTIVITY LOG IN TABLE //
                                const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                                const ip = `voucher Updated With This Device ID ${HeaderData.device_id} `;
                                const loginuserdetails = `CALL get_user_details(?)`;
                                conn.query(loginuserdetails,[user_id],(error,userdata) => {
                                    if(userdata[0])
                                    {   
                                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                        conn.query(loginactivitylog,[user_id,0,userdata[0][0]?.user_position,ip,`voucher`,entry_date],function(error,data){
                                
                                        });
                                    }
                                });
                            }  
                        });
                    }
                });
            }
            else
            {   
                res?.send({ Status:200,Count:0,Message:'Closing Not Updated',Data:error });
                next();            
            }
        });       
    },
};

export default AllCaCornerApis;
