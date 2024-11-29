import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllBankApis = {
    
    // GET Bank LISTING DATA API //
    getbanklistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'voucher.voucher_date-ASC';
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

        const search_voucher_date = search?.voucher_date ? search?.voucher_date : '';
        const search_party_name = search?.party_name ? search?.party_name.trim().toLowerCase() : '';
        const search_voucher_type = search?.voucher_type ? search?.voucher_type.trim().toLowerCase() : '';
        const search_voucher_no = search?.voucher_no ? search?.voucher_no : '';
        const search_voucher_transaction_type = search?.voucher_transaction_type ? search?.voucher_transaction_type.trim().toLowerCase() : '';
        const search_voucher_amount = search?.voucher_amount ? search?.voucher_amount : '';
                
        const sea_voucher_date =  search_voucher_date != '' ? ` AND voucher.voucher_date LIKE '%${search_voucher_date}%'` : '';
        const sea_party_name =  search_party_name != '' ? ` AND party.party_name LIKE '%${search_party_name}%'` : '';
        const sea_voucher_type =  search_voucher_type != '' ? ` AND voucher.voucher_type LIKE '%${search_voucher_type}%'` : '';
        const sea_voucher_no =  search_voucher_no != '' ? ` AND voucher.voucher_no LIKE '%${search_voucher_no}%'` : '';
        const sea_voucher_transaction_type =  search_voucher_transaction_type != '' ? ` AND voucher.voucher_transaction_type LIKE '%${search_voucher_transaction_type}%'` : '';
        const sea_voucher_amount =  search_voucher_amount != '' ? ` AND voucher.voucher_amount LIKE '%${search_voucher_amount}%'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(voucher.voucher_date) >='${from_date}' AND DATE(voucher.voucher_date) <='${to_date}'` : '';
        

        var getbanklistingdata = `SELECT voucher.voucher_date,party.party_name,voucher.voucher_type,voucher.voucher_no,voucher.voucher_transaction_type,voucher.voucher_amount,IF(voucher.voucher_type = 'receipt' OR (voucher.voucher_type = 'contra' AND voucher.voucher_transaction_type = 'cd'),"debit","credit") as amount_type,voucher.voucher_entry_date FROM erp_voucher as voucher LEFT JOIN erp_party as party ON party.id=voucher.party_id WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.voucher_type!='journal' AND voucher.voucher_transaction_type IN ('bank','netbanking','cd','cw','bb') AND voucher.is_delete_status='0' ${sea_voucher_date} ${sea_party_name} ${sea_voucher_type} ${sea_voucher_no} ${sea_voucher_transaction_type} ${sea_voucher_amount} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`; 

        conn.query(getbanklistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:' Bank Data Not Found!!!!',Data:error });
                next();
                return;
            }

            data?.forEach(element => {
                element.voucher_date = constant.moment(element.voucher_date).format('YYYY-MM-DD');
                element.voucher_entry_date = constant.moment(element.voucher_entry_date).format('YYYY-MM-DD');
                element.export = constant.DefaultExportopetions;
            });
            
            var totalbankcount = `SELECT COUNT(voucher.id) as Count FROM erp_voucher as voucher LEFT JOIN erp_party as party ON party.id=voucher.party_id WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.voucher_type!='journal' AND voucher.voucher_transaction_type IN ('bank','netbanking','cd','cw','bb') AND voucher.is_delete_status='0' ${sea_voucher_date} ${sea_party_name} ${sea_voucher_type} ${sea_voucher_no} ${sea_voucher_transaction_type} ${sea_voucher_amount} ${date_range_query}`;
        
            conn.query(totalbankcount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // GET Bank Register LISTING DATA API //
    getbankregisterlistingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const bank_id = body?.bank_id ? body?.bank_id : 0;
              
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
        if (bank_id.length == 0 || bank_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Bank ID',Data:[] });
            next();
            return;
        }

        const current_month = Number(constant.moment().format('MM'));
        const current_year = Number(constant.moment().format('YYYY'));

        const month_array = [
            {
                "label":"Apr",
                "value":`${current_month > 3 ? current_year : current_year - 1}-04`
            },
            {
                "label":"May",
                "value":`${current_month > 3 ? current_year : current_year - 1}-05`
            },
            {
                "label":"Jun",
                "value":`${current_month > 3 ? current_year : current_year - 1}-06`
            },
            {
                "label":"Jul",
                "value":`${current_month > 3 ? current_year : current_year - 1}-07`
            },
            {
                "label":"Aug",
                "value":`${current_month > 3 ? current_year : current_year - 1}-08`
            },
            {
                "label":"Sept",
                "value":`${current_month > 3 ? current_year : current_year - 1}-09`
            },
            {
                "label":"Oct",
                "value":`${current_month > 3 ? current_year : current_year - 1}-10`
            },
            {
                "label":"Nov",
                "value":`${current_month > 3 ? current_year : current_year - 1}-11`
            },
            {
                "label":"Dec",
                "value":`${current_month > 3 ? current_year : current_year - 1}-12`
            },
            {
                "label":"Jan",
                "value":`${current_month > 3 ? current_year + 1 : current_year}-01`
            },
            {
                "label":"Feb",
                "value":`${current_month > 3 ? current_year + 1 : current_year}-02`
            },
            {
                "label":"Mar",
                "value":`${current_month > 3 ? current_year + 1 : current_year}-03`
            },
        ]

        const month_return_data = [];
        month_array.forEach((montharray,index) => {
            
            var getregisterlistingdata = `SELECT '${constant.moment(`${montharray.value}-01`).format('MMM-YYYY')}' as month,COALESCE(SUM(voucher_amount),0) as debit_amount,(SELECT COALESCE(SUM(voucher_amount),0) FROM erp_voucher WHERE user_id='${user_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND voucher_entry_date LIKE '${montharray.value}-%' AND voucher_type IN ('payment','contra') AND voucher_transaction_type IN ('cw','bank','netbanking','bb') AND (bank_from_id='${bank_id}' OR bank_to_id='${bank_id}')) as credit_amount FROM erp_voucher WHERE company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND voucher_type IN ('receipt','contra') AND voucher_transaction_type IN ('cd','bank','netbanking') AND voucher_entry_date LIKE '${montharray.value}-%' AND is_delete_status='0' AND (bank_from_id='${bank_id}' OR bank_to_id='${bank_id}')`;

            conn.query(getregisterlistingdata,(error,data) => {
            
                if (error || data?.length == 0) 
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                
                month_return_data.push(data[0]);
                if (index == 11) 
                {
                    res?.send({ Status:200,Count:month_return_data?.length,Message:'Data found',Data:month_return_data });
                    next();
                    return;
                }
            });
        });    
    },

    // GET Bank RECO LISTING DATA API //
    getbankrecolistingdata: (req,res,next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const bank_id = body?.bank_id ? body?.bank_id : 0;
        const type = body?.type ? body?.type : '';
        const voucher_type = body?.voucher_type ? body?.voucher_type : '';
        const sortby = body?.sortby ? body?.sortby : 'voucher.voucher_date-ASC';
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
        if (bank_id.length == 0 || bank_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Bank ID',Data:[] });
            next();
            return;
        }

        const search_voucher_date = search?.voucher_date ? search?.voucher_date : '';
        const search_voucher_type = search?.voucher_type ? search?.voucher_type.trim().toLowerCase() : '';
        const search_voucher_transaction_type = search?.voucher_transaction_type ? search?.voucher_transaction_type.trim().toLowerCase() : '';
        const search_voucher_cheque_ref_no = search?.voucher_cheque_ref_no ? search?.voucher_cheque_ref_no.trim().toLowerCase() : '';
        const search_voucher_cheque_ref_date = search?.voucher_cheque_ref_date ? search?.voucher_cheque_ref_date.trim().toLowerCase() : '';
        const search_voucher_amount = search?.voucher_amount ? search?.voucher_amount : '';
        const search_party_name = search?.party_name ? search?.party_name.trim().toLowerCase() : '';

        const sea_voucher_date = search_voucher_date != '' ? ` AND voucher.voucher_date LIKE '%${search_voucher_date}%'` : '';
        const sea_voucher_type = search_voucher_type != '' ? ` AND voucher.voucher_type LIKE '%${search_voucher_type}%'` : '';
        const sea_voucher_transaction_type = search_voucher_transaction_type != '' ? ` AND voucher.voucher_transaction_type LIKE '%${search_voucher_transaction_type}%'` : '';
        const sea_voucher_cheque_ref_no = search_voucher_cheque_ref_no != '' ? ` AND voucher.voucher_cheque_ref_no LIKE '%${search_voucher_cheque_ref_no}%'` : '';
        const sea_voucher_cheque_ref_date = search_voucher_cheque_ref_date != '' ? ` AND voucher.voucher_cheque_ref_date LIKE '%${search_voucher_cheque_ref_date}%'` : '';
        const sea_voucher_amount = search_voucher_amount != '' ? ` AND voucher.voucher_amount LIKE '%${search_voucher_amount}%'` : '';
        const sea_party_name = search_party_name != '' ? ` AND party.party_name LIKE '%${search_party_name}%'` : '';
        const sea_type = type == 'settled' ? ` AND voucher.voucher_bank_reco_date!=''` : (type == 'unsettled' ? ` AND voucher.voucher_bank_reco_date=''` : '');
        const filter_voucher_type = voucher_type == 'receipt' ? ` AND voucher.voucher_type='receipt'` : (voucher_type == 'payment' ? ` AND voucher.voucher_type='payment'` : '');
        const sea_bank_id = bank_id > 0 ? ` AND IF(voucher.voucher_type = 'receipt' OR (voucher.voucher_type='contra' AND voucher.voucher_transaction_type IN ('cd')),voucher.to_party_id='${bank_id}',voucher.from_party_id='${bank_id}')` : '';
    
        const date_range_query = from_date != '' ? ` AND DATE(voucher.voucher_date) >='${from_date}' AND DATE(voucher.voucher_date) <='${to_date}'` : '';
        
        var getbankrecolistingdata = `SELECT voucher.voucher_date,voucher.voucher_type,voucher.voucher_transaction_type,voucher.voucher_cheque_ref_no,voucher.voucher_cheque_ref_date,voucher.voucher_bank_date,voucher.voucher_amount,party.party_name,IF(voucher.voucher_type = 'receipt' OR (voucher.voucher_type='contra' AND voucher.voucher_transaction_type IN ('cd')),'debit','credit') as amount_type,voucher.voucher_bank_reco_date FROM erp_voucher as voucher LEFT JOIN erp_party as party ON party.id=IF(voucher.voucher_type = 'payment',voucher.to_party_id,voucher.from_party_id) WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.voucher_type !='journal' AND voucher.voucher_transaction_type NOT IN ('cash','journal','c2c') AND voucher.is_delete_status='0' ${sea_voucher_date} ${sea_voucher_type} ${sea_voucher_transaction_type} ${sea_voucher_cheque_ref_no} ${sea_voucher_cheque_ref_date} ${sea_voucher_amount} ${sea_party_name} ${sea_type} ${sea_bank_id} ${filter_voucher_type} ${date_range_query} ORDER BY ${orderby} ${orderformat} ${limit_query}`; 

        conn.query(getbankrecolistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:' Bank Reco Data Not Found!!!!',Data:error });
                next();
                return;
            }

            data?.forEach(element => {
                element.voucher_date = constant.moment(element.voucher_date).format('YYYY-MM-DD');
                element.voucher_cheque_ref_date = constant.moment(element.voucher_cheque_ref_date).format('YYYY-MM-DD');
                element.voucher_bank_date = constant.moment(element.voucher_bank_date).format('YYYY-MM-DD');
                element.voucher_bank_reco_date = constant.moment(element.voucher_bank_reco_date).format('YYYY-MM-DD');
            });
            
            var totalbankcount = `SELECT COUNT(voucher.id) as Count FROM erp_voucher as voucher LEFT JOIN erp_party as party ON party.id=IF(voucher.voucher_type = 'payment',voucher.to_party_id,voucher.from_party_id) WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.voucher_type !='journal' AND voucher.voucher_transaction_type NOT IN ('cash','journal','c2c') AND voucher.is_delete_status='0' ${sea_voucher_date} ${sea_voucher_type} ${sea_voucher_transaction_type} ${sea_voucher_cheque_ref_no} ${sea_voucher_cheque_ref_date} ${sea_voucher_amount} ${sea_party_name} ${sea_type} ${sea_bank_id} ${filter_voucher_type} ${date_range_query}`;
        
            conn.query(totalbankcount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                next();
                return;
            });
        });
    },

    // UPDATE voucher Bank reco Date DATA API //
    updatebankrecodate: (req,res,next) => {
        
        let body  = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id  = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const voucher_bank_reco_date = body?.voucher_bank_reco_date ? body?.voucher_bank_reco_date : constant.moment().format('YYYY-MM-DD');
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

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
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Voucher Valid ID',Data:[] });
            next();
            return;
        }
        
        if (id > 0) 
        {   
            const updatevoucher = `CALL update_bankreco_date(?,?,?)`;
            conn.query(updatevoucher,[id,voucher_bank_reco_date,entry_date],(error,data) => {

                if (error)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'voucher Date Updated',Data:[] });
                    next();
                                        
                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `voucher date Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],(error,userdata) => {
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`voucher`,entry_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },
};


export default AllBankApis;
    
