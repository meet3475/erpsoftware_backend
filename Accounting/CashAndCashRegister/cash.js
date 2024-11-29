import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllCashApis = {
    
    // GET Cash LISTING DATA API //
    getcashlistingdata: (req,res,next) => {

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
        
        var getcashlistingdata = `SELECT voucher.voucher_date,party.party_name,voucher.voucher_type,voucher.voucher_no,voucher.voucher_transaction_type,voucher.voucher_amount,'debit' as amount_type,voucher.voucher_entry_date FROM erp_voucher as voucher LEFT JOIN erp_party as party ON party.id=voucher.from_party_id WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.voucher_type IN ('receipt','contra') AND voucher.voucher_transaction_type IN ('cash','cw') AND voucher.is_delete_status='0' ${sea_voucher_date} ${sea_party_name} ${sea_voucher_type} ${sea_voucher_no} ${sea_voucher_transaction_type} ${sea_voucher_amount} ${date_range_query} UNION ALL SELECT voucher.voucher_date,party.party_name,voucher.voucher_type,voucher.voucher_no,voucher.voucher_transaction_type,voucher.voucher_amount,'credit' as amount_type,voucher.voucher_entry_date FROM erp_voucher as voucher LEFT JOIN erp_party as party ON party.id=voucher.to_party_id WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.voucher_type IN ('payment','contra') AND voucher.voucher_transaction_type IN ('cash','cd') AND voucher.is_delete_status='0' ${sea_voucher_date} ${sea_party_name} ${sea_voucher_type} ${sea_voucher_no} ${sea_voucher_transaction_type} ${sea_voucher_amount} ${date_range_query}`;
      

        conn.query(getcashlistingdata,(error,data) => {
            
            if (error || data?.length == 0) 
            {   
                res?.send({ Status:400,Count:0,Message:' Cash Data Not Found!!!!',Data:error });
                next();
                return;
            }

            data?.forEach(element => {
                element.voucher_date = constant.moment(element.voucher_date).format('YYYY-MM-DD');
                element.voucher_entry_date = constant.moment(element.voucher_entry_date).format('YYYY-MM-DD');
                element.export = constant.DefaultExportopetions;
            });
            
            // var totalcashcount = `SELECT COUNT(voucher.id) as Count FROM erp_voucher as voucher LEFT JOIN erp_party as party ON party.id=voucher.party_id WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.voucher_type!='journal' AND voucher.voucher_transaction_type IN ('cash','cd') AND voucher.is_delete_status='0' ${sea_voucher_date} ${sea_party_name} ${sea_voucher_type} ${sea_voucher_no} ${sea_voucher_transaction_type} ${sea_voucher_amount} ${date_range_query}`;
        
            // conn.query(totalcashcount,(error,countdata) => {
                
                res?.send({ Status:200,Count:data?.length,TotalCount:data?.length,Message:'Data found',Data:data });
                next();
                return;
            // });
        });
    },

    // GET Cash Register LISTING DATA API //
    getcashregisterlistingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
               
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
            
            var getregisterlistingdata = `SELECT '${constant.moment(`${montharray.value}-01`).format('MMM-YYYY')}' as month,COALESCE(SUM(voucher_amount),0) as debit_amount,(SELECT COALESCE(SUM(voucher_amount),0) FROM erp_voucher WHERE user_id='${user_id}' AND company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND voucher_entry_date LIKE '${montharray.value}-%' AND voucher_type IN ('payment','contra') AND voucher_transaction_type IN ('cd','cash')) as credit_amount FROM erp_voucher WHERE company_id='${company_id}' AND year_id='${year_id}' AND branch_id='${branch_id}' AND voucher_type IN ('receipt','contra') AND voucher_transaction_type In ('cw','cash') AND voucher_entry_date LIKE '${montharray.value}-%' AND is_delete_status='0'`;

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
};


export default AllCashApis;
    
