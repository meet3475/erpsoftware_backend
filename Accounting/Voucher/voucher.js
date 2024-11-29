import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllVoucherApis = {

    // INSERT AND UPDATE voucher DATA API //
    createvoucher: async (req, res, next) => {

        let body = req?.body;
        let child_data = req?.body?.voucher_child_data;
        let bank_data = req?.body?.bank_cheque_data;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const bank_from_id = body?.bank_from_id ? body?.bank_from_id : 0;
        const bank_to_id = body?.bank_to_id ? body?.bank_to_id : 0;
        const tds_on_id = body?.tds_on_id ? body?.tds_on_id : 0;
        const nature_of_payment_id = body?.nature_of_payment_id ? body?.nature_of_payment_id : 0;
        const status_id = body?.status_id ? body?.status_id : 0;
        const from_party_id = body?.from_party_id ? body?.from_party_id : 0;
        const to_party_id = body?.to_party_id ? body?.to_party_id : 0;
        const voucher_type = body?.voucher_type ? body?.voucher_type.trim().toLowerCase() : 'receipt';
        const voucher_no = body?.voucher_no ? body?.voucher_no : '';
        const voucher_lf_no = body?.voucher_lf_no ? body?.voucher_lf_no : '';
        const voucher_date = body?.voucher_date ? body?.voucher_date : constant.moment().format('YYYY-MM-DD');
        const voucher_transaction_type = body?.voucher_transaction_type ? body?.voucher_transaction_type : 'none';
        const voucher_bank_name = body?.voucher_bank_name ? body?.voucher_bank_name : '';
        const voucher_cheque_ref_no = body?.voucher_cheque_ref_no ? body?.voucher_cheque_ref_no : '';
        const voucher_cheque_ref_date = body?.voucher_cheque_ref_date ? body?.voucher_cheque_ref_date : constant.moment().format('YYYY-MM-DD');
        const voucher_amount = body?.voucher_amount ? body?.voucher_amount : 0;
        const voucher_amount_dollar = body?.voucher_amount_dollar ?? 0;
        const voucher_amount_dirham = body?.voucher_amount_dirham ?? 0;
        const voucher_remark = body?.voucher_remark ? body?.voucher_remark : '';
        const is_print = body?.is_print ? body?.is_print : 0;
        const voucher_cheque_print_name = body?.voucher_cheque_print_name ? body?.voucher_cheque_print_name : '';
        const is_tds_applicable = body?.is_tds_applicable ? body?.is_tds_applicable : 0;
        const voucher_amount_per_tds = body?.voucher_amount_per_tds ? body?.voucher_amount_per_tds : 0;
        const voucher_tds_applicable_rate = body?.voucher_tds_applicable_rate ? body?.voucher_tds_applicable_rate : '';
        const voucher_tds = body?.voucher_tds ? body?.voucher_tds : 0;
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (user_id.length == 0 || user_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter User ID', Data: [] });
            next();
            return;
        }
        // Ravi Comment
        // if (company_id.length == 0 || company_id == 0) {
        //     res?.send({ Status: 400, Count: 0, Message: 'Enter Company ID', Data: [] });
        //     next();
        //     return;
        // }
        // if (branch_id.length == 0 || branch_id == 0) {
        //     res?.send({ Status: 400, Count: 0, Message: 'Enter Branch ID', Data: [] });
        //     next();
        //     return;
        // }
        // if (year_id.length == 0 || year_id == 0) {
        //     res?.send({ Status: 400, Count: 0, Message: 'Enter Year ID', Data: [] });
        //     next();
        //     return;
        // }
        if (id > 0) {
            // Ravi Comment
            // const updatevoucher = `CALL create_voucher(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

            const updatevoucher = `
            UPDATE erp_voucher 
            SET user_id='${user_id}', 
            branch_id='${branch_id}', 
            company_id='${company_id}', 
            year_id='${year_id}', 
            party_id='${party_id}', 
            bank_from_id='${bank_from_id}', 
            bank_to_id='${bank_to_id}', 
            tds_on_id='${tds_on_id}', 
            nature_of_payment_id='${nature_of_payment_id}', 
            status_id='${status_id}', 
            from_party_id='${from_party_id}', 
            to_party_id='${to_party_id}', 
            voucher_type='${voucher_type}', 
            voucher_no='${voucher_no}', 
            voucher_lf_no='${voucher_lf_no}', 
            voucher_date='${voucher_date}', 
            voucher_transaction_type='${voucher_transaction_type}', 
            voucher_bank_name='${voucher_bank_name}', 
            voucher_cheque_ref_no='${voucher_cheque_ref_no}', 
            voucher_cheque_ref_date='${voucher_cheque_ref_date}', 
            voucher_amount_dollar='${voucher_amount_dollar}', 
            voucher_amount_dirham='${voucher_amount_dirham}', 
            voucher_amount='${voucher_amount}', 
            voucher_remark='${voucher_remark}', 
            is_print='${is_print}', 
            voucher_cheque_print_name='${voucher_cheque_print_name}', 
            is_tds_applicable='${is_tds_applicable}', 
            voucher_amount_per_tds='${voucher_amount_per_tds}', 
            voucher_tds_applicable_rate='${voucher_tds_applicable_rate}', 
            voucher_tds='${voucher_tds}', 
            voucher_entry_date=voucher_entry_date, 
            voucher_update_date='${update_date}' 
            WHERE id='${id}'; SELECT id as voucher_id,erp_voucher.* FROM erp_voucher WHERE id='${id}';`;

            // const value =[id, user_id, branch_id, company_id, year_id, party_id, bank_from_id, bank_to_id, tds_on_id, nature_of_payment_id, status_id, from_party_id, to_party_id, voucher_type, voucher_no, voucher_lf_no, voucher_date, voucher_transaction_type, voucher_bank_name, voucher_cheque_ref_no, voucher_cheque_ref_date, voucher_amount, voucher_remark, is_print, voucher_cheque_print_name, is_tds_applicable, voucher_amount_per_tds, voucher_tds_applicable_rate, voucher_tds, entry_date, update_date]

            // conn.query(updatevoucher, values, (error, data) => {
            conn.query(updatevoucher, (error, data) => {

                if (error) {
                    res?.send({ Status: 400, Count: 0, Message: 'Data Not Updated!!!!', Data: error });
                    next();
                }
                else {
                    const newData = data[1][0];

                    // if (bank_data && bank_data.length > 0) {
                    //     // CALL voucher Bank cheque API //
                    //     res?.send(AllVoucherApis?.createbankcheque(id, bank_data, req?.headers));
                    //     next();
                    // }

                    if (child_data && child_data.length > 0) {
                        // CALL voucher CHILD API //
                        // res?.send(AllVoucherApis?.createvoucherchild(id, child_data, req?.headers));
                        // next();
                        let body = child_data;


                        body.forEach((data, index) => {
                            const id = data?.id ? Number(data?.id) : 0;
                            const user_id = data?.user_id ? data?.user_id : 0;
                            const party_id = data?.party_id ? data?.party_id : 0;
                            const voucher_id = newData.voucher_id ? newData.voucher_id : 0;
                            const tax_invoice_id = data?.tax_invoice_id ? data?.tax_invoice_id : 0;
                            const voucher_child_from_invoice_type = data?.voucher_child_from_invoice_type ? data?.voucher_child_from_invoice_type : '';
                            const voucher_child_invoice_type = data?.voucher_child_invoice_type ? data?.voucher_child_invoice_type : '';
                            const voucher_child_invoice_no = data?.voucher_child_invoice_no ? data?.voucher_child_invoice_no : '';
                            const voucher_child_invoice_date = data?.voucher_child_invoice_date ? data?.voucher_child_invoice_date : constant.moment().format('YYYY-MM-DD');
                            const voucher_child_invoice_amount_dollar = data?.voucher_child_invoice_amount_dollar ? Number(data?.voucher_child_invoice_amount_dollar) : 0;
                            const voucher_child_invoice_amount_dirham = data?.voucher_child_invoice_amount_dirham ? Number(data?.voucher_child_invoice_amount_dirham) : 0;
                            const voucher_child_received_amount = data?.voucher_child_received_amount ? Number(data?.voucher_child_received_amount) : 0;
                            const voucher_child_balance_dollar = data?.voucher_child_balance_dollar ? Number(data?.voucher_child_balance_dollar) : 0;
                            const voucher_child_balance_dirham = data?.voucher_child_balance_dirham ? Number(data?.voucher_child_balance_dirham) : 0;
                            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
                            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

                            if (id > 0) {
                                // Ravi Comment
                                // const updatevoucherchild = `CALL create_voucher_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

                                const updatevoucherchild = `
                                UPDATE erp_voucher_child SET
                                user_id='${user_id}', 
                                party_id='${party_id}', 
                                voucher_id='${voucher_id}', 
                                tax_invoice_id='${tax_invoice_id}', 
                                voucher_child_from_invoice_type='${voucher_child_from_invoice_type}', 
                                voucher_child_invoice_type='${voucher_child_invoice_type}', 
                                voucher_child_invoice_no='${voucher_child_invoice_no}', 
                                voucher_child_invoice_date='${voucher_child_invoice_date}', 
                                voucher_child_invoice_amount_dollar='${voucher_child_invoice_amount_dollar}', 
                                voucher_child_invoice_amount_dirham='${voucher_child_invoice_amount_dirham}', 
                                voucher_child_received_amount='${voucher_child_received_amount}', 
                                voucher_child_balance_dollar='${voucher_child_balance_dollar}', 
                                voucher_child_balance_dirham='${voucher_child_balance_dirham}', 
                                voucher_child_update_date='${update_date}'
                                WHERE id='${id}'; 
                                SELECT id as voucher_child_id,erp_voucher_child.* FROM erp_voucher_child WHERE id=LAST_INSERT_ID();`;

                                console.log("updatevoucherchild::", updatevoucherchild);

                                // conn.query(updatevoucherchild, value, (error, data) => {
                                conn.query(updatevoucherchild, (error, data) => {

                                    if (error) {
                                        return ({ Status: 400, Count: 0, Message: 'Data Not Updated!!!!', Data: error });
                                    }
                                    else {
                                        //Only for status 200
                                        return ({ Status: 200, Count: 0, Message: 'voucher Child Updated', Data: data?.length > 0 ? data[0] : [] });
                                    }
                                });
                            }
                        });
                    }

                    return res?.send({ Status: 200, Count: 0, Message: 'voucher Updated', Data: [] });
                }
            });
        }
        else {
            // Ravi Comment
            // const createvoucher = `CALL create_voucher(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
            // const createvoucher = `INSERT INTO erp_voucher(user_id, branch_id, company_id, year_id, party_id, bank_from_id, bank_to_id, tds_on_id, nature_of_payment_id, status_id, from_party_id, to_party_id, voucher_type, voucher_no, voucher_lf_no, voucher_date, voucher_transaction_type, voucher_bank_name, voucher_cheque_ref_no, voucher_cheque_ref_date, voucher_amount, voucher_remark, is_print, voucher_cheque_print_name, is_tds_applicable, voucher_amount_per_tds, voucher_tds_applicable_rate, voucher_tds, voucher_entry_date, voucher_update_date) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

            const createvoucher = `INSERT INTO erp_voucher SET user_id='${user_id}', branch_id='${branch_id}', company_id='${company_id}', year_id='${year_id}', party_id='${party_id}', bank_from_id='${bank_from_id}', bank_to_id='${bank_to_id}', tds_on_id='${tds_on_id}', nature_of_payment_id='${nature_of_payment_id}', status_id='${status_id}', from_party_id='${from_party_id}', to_party_id='${to_party_id}', voucher_type='${voucher_type}', voucher_no='${voucher_no}', voucher_lf_no='${voucher_lf_no}', voucher_date='${voucher_date}', voucher_transaction_type='${voucher_transaction_type}', voucher_bank_name='${voucher_bank_name}', voucher_cheque_ref_no='${voucher_cheque_ref_no}', voucher_cheque_ref_date='${voucher_cheque_ref_date}', 
            voucher_amount='${voucher_amount}', 
            voucher_amount_dollar='${voucher_amount_dollar}', 
            voucher_amount_dirham='${voucher_amount_dirham}', 
            voucher_remark='${voucher_remark}', is_print='${is_print}', voucher_cheque_print_name='${voucher_cheque_print_name}', is_tds_applicable='${is_tds_applicable}', voucher_amount_per_tds='${voucher_amount_per_tds}', voucher_tds_applicable_rate='${voucher_tds_applicable_rate}', voucher_tds='${voucher_tds}', voucher_entry_date='${entry_date}', voucher_update_date='${update_date}'; SELECT id as voucher_id,erp_voucher.* FROM erp_voucher WHERE id=LAST_INSERT_ID();`;


            conn.query(createvoucher, async (error, data) => {


                if (error || data[0]?.length == 0) {
                    return res?.send({ Status: 400, Count: 0, Message: 'Data Not Inserted!!!!', Data: data, error });
                }

                const newData = data[1][0];


                if (child_data && child_data?.length > 0) {
                    // CALL voucher CHILD API //
                    // res?.send(AllVoucherApis?.createvoucherchild(newData.voucher_id, child_data, {}));

                    let body = child_data;

                    body.forEach((data, index) => {
                        const id = data?.id ? Number(data?.id) : 0;
                        const user_id = data?.user_id ? data?.user_id : 0;
                        const party_id = data?.party_id ? data?.party_id : 0;
                        const voucher_id = newData.voucher_id ? newData.voucher_id : 0;
                        const tax_invoice_id = data?.tax_invoice_id ? data?.tax_invoice_id : 0;
                        const voucher_child_from_invoice_type = data?.voucher_child_from_invoice_type ? data?.voucher_child_from_invoice_type : '';
                        const voucher_child_invoice_type = data?.voucher_child_invoice_type ? data?.voucher_child_invoice_type : '';
                        const voucher_child_invoice_no = data?.voucher_child_invoice_no ? data?.voucher_child_invoice_no : '';
                        const voucher_child_invoice_date = data?.voucher_child_invoice_date ? data?.voucher_child_invoice_date : constant.moment().format('YYYY-MM-DD');
                        const voucher_child_invoice_amount_dollar = data?.voucher_child_invoice_amount_dollar ? Number(data?.voucher_child_invoice_amount_dollar) : 0;
                        const voucher_child_invoice_amount_dirham = data?.voucher_child_invoice_amount_dirham ? Number(data?.voucher_child_invoice_amount_dirham) : 0;
                        const voucher_child_received_amount = data?.voucher_child_received_amount ? Number(data?.voucher_child_received_amount) : 0;
                        const voucher_child_balance_dollar = data?.voucher_child_balance_dollar ? Number(data?.voucher_child_balance_dollar) : 0;
                        const voucher_child_balance_dirham = data?.voucher_child_balance_dirham ? Number(data?.voucher_child_balance_dirham) : 0;
                        // const company_id = data?.company_id ? data?.company_id : 0;
                        // const year_id = data?.year_id ? data?.year_id : 0;
                        // const branch_id = data?.branch_id ? data?.branch_id : 0;
                        // const voucher_child_invoice_tds = data?.voucher_child_invoice_tds ? data?.voucher_child_invoice_tds : 0;
                        // const voucher_child_disc_per = data?.voucher_child_disc_per ? data?.voucher_child_disc_per : 0;
                        // const voucher_child_disc_amt = data?.voucher_child_disc_amt ? data?.voucher_child_disc_amt : 0;
                        // const voucher_child_tds_per = data?.voucher_child_tds_per ? data?.voucher_child_tds_per : 0;
                        // const voucher_child_tds_amt = data?.voucher_child_tds_amt ? data?.voucher_child_tds_amt : 0;
                        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
                        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
                        // const is_settlement = (voucher_child_invoice_amount == (voucher_child_received_amount + voucher_child_balance)) ? 1 : 0;

                        if (id > 0) {
                            // Ravi Comment
                            // const updatevoucherchild = `CALL create_voucher_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

                            const updatevoucherchild = `UPDATE erp_voucher_child SET user_id='${user_id}', company_id='${company_id}', branch_id='${branch_id}', year_id='${year_id}', party_id='${party_id}', voucher_id='${voucher_id}', tax_invoice_id='${tax_invoice_id}', voucher_child_from_invoice_type='${voucher_child_from_invoice_type}', voucher_child_invoice_type='${voucher_child_invoice_type}', voucher_child_invoice_no='${voucher_child_invoice_no}', voucher_child_invoice_date='${voucher_child_invoice_date}', voucher_child_invoice_amount='${voucher_child_invoice_amount}', voucher_child_invoice_tds='${voucher_child_invoice_tds}', voucher_child_received_amount='${voucher_child_received_amount}', voucher_child_disc_per='${voucher_child_disc_per}', voucher_child_disc_amt='${voucher_child_disc_amt}', voucher_child_balance='${voucher_child_balance}', voucher_child_tds_per='${voucher_child_tds_per}', voucher_child_tds_amt,voucher_child_entry_date=voucher_child_entry_date, voucher_child_update_date='${update_date}' WHERE id='${id}'; SELECT id as voucher_child_id,erp_voucher_child.* FROM erp_voucher_child WHERE id=LAST_INSERT_ID();`;

                            // const value = [id, user_id, company_id, branch_id, year_id, party_id, voucher_id, tax_invoice_id, voucher_child_from_invoice_type, voucher_child_invoice_type, voucher_child_invoice_no, voucher_child_invoice_date, voucher_child_invoice_amount, voucher_child_invoice_tds, voucher_child_received_amount, voucher_child_disc_per, voucher_child_disc_amt, voucher_child_balance, voucher_child_tds_per, voucher_child_tds_amt, entry_date, update_date];

                            // conn.query(updatevoucherchild, value, (error, data) => {
                            conn.query(updatevoucherchild, (error, data) => {

                                if (error) {
                                    return ({ Status: 400, Count: 0, Message: 'Data Not Updated!!!!', Data: error });
                                }
                                else {

                                    // Ravi Comment Stop entry of activity in USER ACTIVITY TABLE

                                    // INSERT USER ACTIVITY LOG IN TABLE //
                                    // const HeaderData = JSON.parse(JSON.stringify(header_data));
                                    // const ip = `voucher Child Updated With This Device ID ${HeaderData.device_id} `;
                                    // const loginuserdetails = `CALL get_user_details(?)`;
                                    // conn.query(loginuserdetails, [user_id], function (error, userdata) {
                                    //     if (userdata[0]) {
                                    //         const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    //         conn.query(loginactivitylog, [user_id, 0, userdata[0][0].user_position, ip, `voucher Child`, entry_date], function (error, data) {

                                    //         });
                                    //     }
                                    // });
                                    // return ({ Status: 200, Count: 0, Message: 'voucher Child Updated', Data: [] });

                                    //Only for status 200
                                    return ({ Status: 200, Count: 0, Message: 'voucher Child Updated', Data: data?.length > 0 ? data[0] : [] });
                                }
                            });
                        }
                        else {
                            // Ravi Comment
                            // const createvoucherchild = `CALL create_voucher_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

                            const createvoucherchild = `
                            INSERT INTO erp_voucher_child SET 
                            user_id='${user_id}', 
                            party_id='${party_id}', 
                            voucher_id='${voucher_id}', 
                            tax_invoice_id='${tax_invoice_id}', 
                            voucher_child_from_invoice_type='${voucher_child_from_invoice_type}', 
                            voucher_child_invoice_type='${voucher_child_invoice_type}', 
                            voucher_child_invoice_no='${voucher_child_invoice_no}', 
                            voucher_child_invoice_date='${voucher_child_invoice_date}', 
                            voucher_child_invoice_amount_dollar='${voucher_child_invoice_amount_dollar}', 
                            voucher_child_invoice_amount_dirham='${voucher_child_invoice_amount_dirham}', 
                            voucher_child_received_amount='${voucher_child_received_amount}', 
                            voucher_child_balance_dollar='${voucher_child_balance_dollar}', 
                            voucher_child_balance_dirham='${voucher_child_balance_dirham}', 
                            voucher_child_entry_date='${entry_date}', 
                            voucher_child_update_date='${update_date}'; 
                            SELECT id as voucher_child_id,erp_voucher_child.* FROM erp_voucher_child WHERE id=LAST_INSERT_ID();`


                            // const values = [id, user_id, company_id, branch_id, year_id, party_id, voucher_id, tax_invoice_id, voucher_child_from_invoice_type, voucher_child_invoice_type, voucher_child_invoice_no, voucher_child_invoice_date, voucher_child_invoice_amount, voucher_child_invoice_tds, voucher_child_received_amount, voucher_child_disc_per, voucher_child_disc_amt, voucher_child_balance, voucher_child_tds_per, voucher_child_tds_amt, entry_date, update_date]

                            // conn.query(createvoucherchild, values, (error, data) => {

                            conn.query(createvoucherchild, (error, data) => {

                                if (error) {
                                    return { Status: 400, Count: 0, Message: 'Data Not Inserted!!!!', Data: error };
                                }
                                else {
                                    //Only for status 200
                                    return { Status: 200, Count: 0, Message: 'voucher Child Inserted', Data: data };
                                }
                            });
                        }
                    });
                }

                if (bank_data && bank_data.length > 0) {
                    // CALL voucher BANK CHEQUE  API //
                    res?.send(AllVoucherApis?.createbankcheque(newData.voucher_id, bank_data, req?.headers));
                }

                return res?.send({ Status: 200, Count: 0, Message: 'voucher Inserted', Data: newData });

            });
        }
    },

    // GET voucher AND CHILD DETAILS DATA API //
    getvoucherdetails: (req, res, next) => {

        const voucher_id = req.body?.voucher_id ? req.body?.voucher_id : 0;
        if (voucher_id.length == 0 || voucher_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter voucher ID', Data: [] });
            next();
            return;
        }

        // var getvoucherdetails = `CALL get_voucher_details(?)`;
        var getvoucherdetails = `SELECT *,NULL AS voucher_child_data,NULL as bank_cheque_data FROM erp_voucher WHERE id='${voucher_id}' AND is_delete_status='0';
    SELECT voucher_child.* FROM erp_voucher_child as voucher_child WHERE voucher_child.voucher_id='${voucher_id}' AND voucher_child.is_delete_status='0';`;

        // conn.query(getvoucherdetails, [voucher_id], (error, data) => {
        conn.query(getvoucherdetails, (error, data) => {

            if (error || data[0]?.length == 0) {
                res?.send({ Status: 400, Count: 0, Message: ' voucher Data Not Found!!!!', Data: error });
                next();
                return;
            }
            else {
                data[0][0].voucher_child_data = data[1];
                data[0][0].bank_cheque_data = data[2];

                data[0][0].voucher_date = constant.moment(data[0][0].voucher_date).format('YYYY-MM-DD');
                data[0][0].voucher_cheque_ref_date = constant.moment(data[0][0].voucher_cheque_ref_date).format('YYYY-MM-DD');

                data?.length > 0 && data[1].forEach(childdata => {
                    childdata.voucher_child_invoice_date = constant.moment(childdata.voucher_child_invoice_date).format('YYYY-MM-DD');
                });

                // data?.length > 0 && data[2].forEach(bankdata => {
                //     bankdata.bank_cheque_date = constant.moment(bankdata.bank_cheque_date).format('YYYY-MM-DD');
                // });

                res?.send({ Status: 200, Count: data[0]?.length, Message: 'Data found', Data: data[0][0] });
                next();
                return;
            }
        });
    },

    // GET voucher AND CHILD LISTING DATA API //
    getvoucherlistingdata: (req, res, next) => {

        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const voucher_type = body?.voucher_type ? body?.voucher_type : 'receipt';
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'voucher.id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno - 1) * total_limit;
        const from_party_id = body?.from_party_id ? body?.from_party_id : 0;
        const to_party_id = body?.to_party_id ? body?.to_party_id : 0;
        const from_date = body?.from_date ? body?.from_date : '';
        const voucher_transaction_type = body?.dairy_voucher_transaction_type ? body?.dairy_voucher_transaction_type : '';

        const to_date = body?.to_date ? body?.to_date : `${constant.moment().format('YYYY-MM-DD')}`;
        const limit_query = body?.is_export == true ? ' ' : `LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' : `voucher.id,voucher.id as voucher_id,`;

        if (user_id.length == 0 || user_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter User ID', Data: [] });
            next();
            return;
        }
        // Ravi Comment
        // if (company_id.length == 0 || company_id == 0) {
        //     res?.send({ Status: 400, Count: 0, Message: 'Enter Company ID', Data: [] });
        //     next();
        //     return;
        // }
        // if (branch_id.length == 0 || branch_id == 0) {
        //     res?.send({ Status: 400, Count: 0, Message: 'Enter Branch ID', Data: [] });
        //     next();
        //     return;
        // }
        // if (year_id.length == 0 || year_id == 0) {
        //     res?.send({ Status: 400, Count: 0, Message: 'Enter Year ID', Data: [] });
        //     next();
        //     return;
        // }

        const search_voucher_no = search?.voucher_no ? search?.voucher_no : '';
        const search_voucher_date = search?.voucher_date ? search?.voucher_date : '';
        const search_voucher_type = search?.voucher_type ? search?.voucher_type.trim().toLowerCase() : '';
        const search_voucher_transaction_type = search?.voucher_transaction_type ? search?.voucher_transaction_type.trim().toLowerCase() : '';
        const search_voucher_bank_name = search?.voucher_bank_name ? search?.voucher_bank_name.trim().toLowerCase() : '';
        const search_party_name = search?.party_name ? search?.party_name.trim().toLowerCase() : '';
        const search_party_city = search?.party_city ? search?.party_city.trim().toLowerCase() : '';
        const search_voucher_amount = search?.voucher_amount ? search?.voucher_amount : '';
        const search_voucher_amount_dollar = search?.voucher_amount_dollar ?? '';
        const search_voucher_amount_dirham = search?.voucher_amount_dirham ?? '';
        const search_voucher_remark = search?.voucher_remark ? search?.voucher_remark.trim().toLowerCase() : '';

        const sea_voucher_no = search_voucher_no != '' ? ` AND voucher.voucher_no LIKE '%${search_voucher_no}%'` : '';
        const sea_voucher_date = search_voucher_date != '' ? ` AND voucher.voucher_date LIKE '%${search_voucher_date}%'` : '';
        const sea_voucher_type = search_voucher_type != '' ? ` AND voucher.voucher_type LIKE '%${search_voucher_type}%'` : '';
        const sea_voucher_transaction_type = search_voucher_transaction_type != '' ? ` AND voucher.voucher_transaction_type LIKE '%${search_voucher_transaction_type}%'` : '';
        const sea_voucher_bank_name = search_voucher_bank_name != '' ? ` AND voucher.voucher_bank_name LIKE '%${search_voucher_bank_name}%'` : '';
        const sea_party_name = search_party_name != '' ? ` AND party.party_name LIKE '%${search_party_name}%'` : '';
        const sea_party_city = search_party_city != '' ? ` AND party.party_city LIKE '%${search_party_city}%'` : '';
        const sea_voucher_amount = search_voucher_amount != '' ? ` AND voucher.voucher_amount LIKE '%${search_voucher_amount}%'` : '';
        const sea_voucher_amount_dollar = search_voucher_amount_dollar != '' ? ` AND voucher.voucher_amount_dollar LIKE '%${search_voucher_amount_dollar}%'` : '';
        const sea_voucher_amount_dirham = search_voucher_amount_dirham != '' ? ` AND voucher.voucher_amount_dirham LIKE '%${search_voucher_amount_dirham}%'` : '';
        const sea_voucher_remark = search_voucher_remark != '' ? ` AND voucher.voucher_remark LIKE '%${search_voucher_remark}%'` : '';
        const date_range_query = from_date != '' ? ` AND DATE(voucher.voucher_date) >='${from_date}' AND DATE(voucher.voucher_date) <='${to_date}'` : '';

        const dairy_voucher_transaction_type = voucher_transaction_type != '' ? ` AND voucher.voucher_transaction_type='${voucher_transaction_type}'` : '';

        const party_ids = []
        if (from_party_id > 0) {
            party_ids?.push(from_party_id)
        }
        if (to_party_id > 0) {
            party_ids?.push(to_party_id)
        }
        const party_wise_query = party_ids?.length > 0 ? ` AND (voucher.from_party_id IN('${party_ids.join("','")}') OR voucher.to_party_id IN('${party_ids.join("','")}'))` : '';

        var getvoucherlistingdata = `SELECT ${All_ID_Query} voucher.voucher_no,
        voucher.voucher_date,
        voucher.voucher_type,
        voucher.voucher_transaction_type,
        voucher.voucher_bank_name,
        from_party.party_name as from_party_name,
        from_party.party_city as from_party_city,
        to_party.party_name as to_party_name,
        voucher.voucher_amount,
        voucher.voucher_amount_dollar,
        voucher.voucher_amount_dirham,
        voucher.voucher_remark,
        voucher.voucher_lf_no 
        FROM erp_voucher as voucher LEFT JOIN partys as from_party ON from_party.id=voucher.from_party_id LEFT JOIN partys as to_party ON to_party.id=voucher.to_party_id WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.voucher_type='${voucher_type}' AND voucher.is_delete_status='0' ${sea_voucher_no} ${sea_voucher_date} ${sea_voucher_type} ${sea_voucher_transaction_type} ${sea_voucher_bank_name} ${sea_party_name} ${sea_party_city} ${sea_voucher_amount} ${sea_voucher_amount_dollar} ${sea_voucher_amount_dirham} ${sea_voucher_remark} ${date_range_query} ${party_wise_query} ${dairy_voucher_transaction_type} ORDER BY '${orderby}' ${orderformat} ${limit_query}`;


        conn.query(getvoucherlistingdata, (error, data) => {

            if (error || data?.length == 0) {
                res?.send({ Status: 400, Count: 0, Message: 'Data Not Found!!!!', Data: error });
                next();
                return;
            }

            var bankchequeno = `SELECT bank_cheque_no FROM erp_bank_cheque_detail WHERE user_id='${user_id}' AND voucher_id='${data[0].voucher_id}'`;

            const cheque_no = [];
            conn.query(bankchequeno, (error, bankdata) => {

                bankdata?.forEach(chequeno => {
                    cheque_no.push(Object.values(chequeno));
                });

                data?.forEach(voucherdata => {
                    voucherdata.voucher_cheque_no = cheque_no.toString();
                    voucherdata.voucher_date = constant.moment(voucherdata.voucher_date).format('DD-MM-YYYY');
                    voucherdata.export = constant.DefaultExportopetions;
                });
            });

            var totalvouchercount = `SELECT COUNT(voucher.id) as Count FROM erp_voucher as voucher LEFT JOIN erp_party as from_party ON from_party.id=voucher.from_party_id LEFT JOIN erp_party as to_party ON to_party.id=voucher.to_party_id WHERE voucher.user_id='${user_id}' AND voucher.company_id<='${company_id}' AND voucher.year_id<='${year_id}' AND voucher.branch_id<='${branch_id}' AND voucher.voucher_type='${voucher_type}' AND voucher.is_delete_status='0' '${sea_voucher_no}' '${sea_voucher_date}' '${sea_voucher_type}' '${sea_voucher_transaction_type}' '${sea_voucher_bank_name}' '${sea_party_name}' '${sea_party_city}' '${sea_voucher_amount}' '${sea_voucher_remark}' '${date_range_query}' '${party_wise_query}' '${dairy_voucher_transaction_type}'`;

            conn.query(totalvouchercount, (error, countdata) => {

                res?.send({ Status: 200, Count: data?.length, TotalCount: countdata?.length > 0 ? countdata[0]?.Count : countdata, Message: 'Data found', Data: data });
                next();
                return;
            });
        });
    },

    // INSERT AND UPDATE voucher CHILD DATA API //
    createvoucherchild: (voucher_par_id, req, headers) => {

        let body = req;

        body.forEach((data, index) => {
            const id = data?.id ? Number(data?.id) : 0;
            const user_id = data?.user_id ? data?.user_id : 0;
            const party_id = data?.party_id ? data?.party_id : 0;
            const voucher_id = voucher_par_id ? voucher_par_id : 0;
            const tax_invoice_id = data?.tax_invoice_id ? data?.tax_invoice_id : 0;
            const voucher_child_from_invoice_type = data?.voucher_child_from_invoice_type ? data?.voucher_child_from_invoice_type : '';
            const voucher_child_invoice_type = data?.voucher_child_invoice_type ? data?.voucher_child_invoice_type : '';
            const voucher_child_invoice_no = data?.voucher_child_invoice_no ? data?.voucher_child_invoice_no : '';
            const voucher_child_invoice_date = data?.voucher_child_invoice_date ? data?.voucher_child_invoice_date : constant.moment().format('YYYY-MM-DD');
            const voucher_child_invoice_amount_dollar = data?.voucher_child_invoice_amount_dollar ? Number(data?.voucher_child_invoice_amount_dollar) : 0;
            const voucher_child_invoice_amount_dirham = data?.voucher_child_invoice_amount_dirham ? Number(data?.voucher_child_invoice_amount_dirham) : 0;
            const voucher_child_received_amount = data?.voucher_child_received_amount ? Number(data?.voucher_child_received_amount) : 0;
            const voucher_child_balance_dollar = data?.voucher_child_balance_dollar ? Number(data?.voucher_child_balance_dollar) : 0;
            const voucher_child_balance_dirham = data?.voucher_child_balance_dirham ? Number(data?.voucher_child_balance_dirham) : 0;
            // const company_id = data?.company_id ? data?.company_id : 0;
            // const year_id = data?.year_id ? data?.year_id : 0;
            // const branch_id = data?.branch_id ? data?.branch_id : 0;
            // const voucher_child_invoice_tds = data?.voucher_child_invoice_tds ? data?.voucher_child_invoice_tds : 0;
            // const voucher_child_disc_per = data?.voucher_child_disc_per ? data?.voucher_child_disc_per : 0;
            // const voucher_child_disc_amt = data?.voucher_child_disc_amt ? data?.voucher_child_disc_amt : 0;
            // const voucher_child_tds_per = data?.voucher_child_tds_per ? data?.voucher_child_tds_per : 0;
            // const voucher_child_tds_amt = data?.voucher_child_tds_amt ? data?.voucher_child_tds_amt : 0;
            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            // const is_settlement = (voucher_child_invoice_amount == (voucher_child_received_amount + voucher_child_balance)) ? 1 : 0;

            if (id > 0) {
                // Ravi Comment
                // const updatevoucherchild = `CALL create_voucher_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

                const updatevoucherchild = `UPDATE erp_voucher_child SET user_id='${user_id}', company_id='${company_id}', branch_id='${branch_id}', year_id='${year_id}', party_id='${party_id}', voucher_id='${voucher_id}', tax_invoice_id='${tax_invoice_id}', voucher_child_from_invoice_type='${voucher_child_from_invoice_type}', voucher_child_invoice_type='${voucher_child_invoice_type}', voucher_child_invoice_no='${voucher_child_invoice_no}', voucher_child_invoice_date='${voucher_child_invoice_date}', voucher_child_invoice_amount='${voucher_child_invoice_amount}', voucher_child_invoice_tds='${voucher_child_invoice_tds}', voucher_child_received_amount='${voucher_child_received_amount}', voucher_child_disc_per='${voucher_child_disc_per}', voucher_child_disc_amt='${voucher_child_disc_amt}', voucher_child_balance='${voucher_child_balance}', voucher_child_tds_per='${voucher_child_tds_per}', voucher_child_tds_amt,voucher_child_entry_date=voucher_child_entry_date, voucher_child_update_date='${update_date}' WHERE id='${id}'; SELECT id as voucher_child_id,erp_voucher_child.* FROM erp_voucher_child WHERE id=LAST_INSERT_ID();`;

                // const value = [id, user_id, company_id, branch_id, year_id, party_id, voucher_id, tax_invoice_id, voucher_child_from_invoice_type, voucher_child_invoice_type, voucher_child_invoice_no, voucher_child_invoice_date, voucher_child_invoice_amount, voucher_child_invoice_tds, voucher_child_received_amount, voucher_child_disc_per, voucher_child_disc_amt, voucher_child_balance, voucher_child_tds_per, voucher_child_tds_amt, entry_date, update_date];

                // conn.query(updatevoucherchild, value, (error, data) => {
                conn.query(updatevoucherchild, (error, data) => {

                    if (error) {
                        return ({ Status: 400, Count: 0, Message: 'Data Not Updated!!!!', Data: error });
                    }
                    else {

                        // Ravi Comment Stop entry of activity in USER ACTIVITY TABLE

                        // INSERT USER ACTIVITY LOG IN TABLE //
                        // const HeaderData = JSON.parse(JSON.stringify(header_data));
                        // const ip = `voucher Child Updated With This Device ID ${HeaderData.device_id} `;
                        // const loginuserdetails = `CALL get_user_details(?)`;
                        // conn.query(loginuserdetails, [user_id], function (error, userdata) {
                        //     if (userdata[0]) {
                        //         const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        //         conn.query(loginactivitylog, [user_id, 0, userdata[0][0].user_position, ip, `voucher Child`, entry_date], function (error, data) {

                        //         });
                        //     }
                        // });
                        // return ({ Status: 200, Count: 0, Message: 'voucher Child Updated', Data: [] });

                        //Only for status 200
                        return ({ Status: 200, Count: 0, Message: 'voucher Child Updated', Data: data?.length > 0 ? data[0] : [] });
                    }
                });
            }
            else {
                // Ravi Comment
                // const createvoucherchild = `CALL create_voucher_child(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

                const createvoucherchild = `
                INSERT INTO erp_voucher_child SET 
                user_id='${user_id}', 
                party_id='${party_id}', 
                voucher_id='${voucher_id}', 
                tax_invoice_id='${tax_invoice_id}', 
                voucher_child_from_invoice_type='${voucher_child_from_invoice_type}', 
                voucher_child_invoice_type='${voucher_child_invoice_type}', 
                voucher_child_invoice_no='${voucher_child_invoice_no}', 
                voucher_child_invoice_date='${voucher_child_invoice_date}', 
                voucher_child_invoice_amount_dollar='${voucher_child_invoice_amount_dollar}', 
                voucher_child_invoice_amount_dirham='${voucher_child_invoice_amount_dirham}', 
                voucher_child_received_amount='${voucher_child_received_amount}', 
                voucher_child_balance_dollar='${voucher_child_balance_dollar}', 
                voucher_child_balance_dirham='${voucher_child_balance_dirham}', 
                voucher_child_entry_date='${entry_date}', 
                voucher_child_update_date='${update_date}'; 
                SELECT id as voucher_child_id,erp_voucher_child.* FROM erp_voucher_child WHERE id=LAST_INSERT_ID();`


                // const values = [id, user_id, company_id, branch_id, year_id, party_id, voucher_id, tax_invoice_id, voucher_child_from_invoice_type, voucher_child_invoice_type, voucher_child_invoice_no, voucher_child_invoice_date, voucher_child_invoice_amount, voucher_child_invoice_tds, voucher_child_received_amount, voucher_child_disc_per, voucher_child_disc_amt, voucher_child_balance, voucher_child_tds_per, voucher_child_tds_amt, entry_date, update_date]

                // conn.query(createvoucherchild, values, (error, data) => {

                conn.query(createvoucherchild, (error, data) => {

                    if (error) {
                        return { Status: 400, Count: 0, Message: 'Data Not Inserted!!!!', Data: error };
                    }
                    else {
                        // Ravi Comment Stop entry of activity in USER ACTIVITY TABLE

                        // INSERT USER ACTIVITY LOG IN TABLE //
                        // const HeaderData = JSON.parse(JSON.stringify(header_data));
                        // const ip = `voucher Child Created With This Device ID ${HeaderData.device_id} `;
                        // const loginuserdetails = `CALL get_user_details(?)`;

                        // conn.query(loginuserdetails, [user_id], (error, userdata) => {

                        //     if (userdata[0]) {
                        //         const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        //         conn.query(loginactivitylog, [user_id, 0, userdata[0][0]?.user_position, ip, `voucher Child`, entry_date], function (error, data) {

                        //         });
                        //     }
                        // });

                        //Only for status 200
                        return { Status: 200, Count: 0, Message: 'voucher Child Inserted', Data: data };
                    }
                });
            }
        });
    },

    // GET SALE PURCHASE Sale ANd Mill INVOICE DATA OF PARTY //
    getpurchasesalemillinvoicedata: (req, res, next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const party_id = body?.party_id ? body?.party_id : 0;
        const voucher_type = body?.voucher_type ? body?.voucher_type : '';
        const voucher_id = body?.voucher_id ?? 0;
        const voucher_child_id = body?.voucher_child_id ? body?.voucher_child_id : 0;

        if (user_id.length == 0 || user_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter User ID', Data: [] });
            next();
            return;
        }
        // if (company_id.length == 0 || company_id == 0) {
        //     res?.send({ Status: 400, Count: 0, Message: 'Enter Company ID', Data: [] });
        //     next();
        //     return;
        // }
        // if (branch_id.length == 0 || branch_id == 0) {
        //     res?.send({ Status: 400, Count: 0, Message: 'Enter Branch ID', Data: [] });
        //     next();
        //     return;
        // }
        // if (year_id.length == 0 || year_id == 0) {
        //     res?.send({ Status: 400, Count: 0, Message: 'Enter Year ID', Data: [] });
        //     next();
        //     return;
        // }
        if (party_id.length == 0 || party_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter Party ID', Data: [] });
            next();
            return;
        }
        if (voucher_type.length == 0 || voucher_type == '') {
            res?.send({ Status: 400, Count: 0, Message: 'Enter Voucher Type', Data: [] });
            next();
            return;
        }

        if (voucher_type == 'receipt') {
            const voucher_sale_balance = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_balance),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=tax_par.id AND child.voucher_child_invoice_type='sale') as voucher_child_balance,(SELECT COALESCE(child.id,0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=tax_par.id AND child.voucher_child_invoice_type='sale' LIMIT 1) as voucher_child_id` : '';

            const voucher_sale_disc_per = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_disc_per),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=tax_par.id AND child.voucher_child_invoice_type='sale') as voucher_child_disc_per` : '';

            const voucher_sale_disc_amt = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_disc_amt),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=tax_par.id AND child.voucher_child_invoice_type='sale') as voucher_child_disc_amt` : '';

            const voucher_sale_tds_amt = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_tds_amt),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=tax_par.id AND child.voucher_child_invoice_type='sale') as voucher_child_tds_amt` : '';

            const voucher_sale_debit_balance = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_balance),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=return_par.id AND child.voucher_child_invoice_type='saledebitnote') as voucher_child_balance,(SELECT COALESCE(child.id,0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=return_par.id AND child.voucher_child_invoice_type='saledebitnote' LIMIT 1) as voucher_child_id` : '';

            const voucher_sale_debit_disc_per = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_disc_per),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=return_par.id AND child.voucher_child_invoice_type='saledebitnote') as voucher_child_disc_per` : '';

            const voucher_sale_debit_disc_amt = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_disc_amt),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=return_par.id AND child.voucher_child_invoice_type='saledebitnote') as voucher_child_disc_amt` : '';

            const voucher_sale_debit_tds_amt = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_tds_amt),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=return_par.id AND child.voucher_child_invoice_type='saledebitnote') as voucher_child_tds_amt` : '';

            var getpurchasesalemillinvoicedata = `SELECT 'sale' as invoice_type,tax_par.id as sale_tax_id,tax_par.id as ref_id,tax_par.sale_tax_invoice_no as invoice_no,tax_par.sale_tax_invoice_date as invoice_date,tax_par.sale_tax_invoice_total_net_amount as invoice_amount,tax_par.sale_tax_invoice_total_tds as bill_tds,(SELECT COALESCE(SUM(voucher.voucher_child_balance),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=tax_par.id AND voucher.voucher_child_invoice_type='sale' AND voucher.is_delete_status='0') as paid ${voucher_sale_balance} ${voucher_sale_disc_per} ${voucher_sale_disc_amt} ${voucher_sale_tds_amt} FROM erp_sale_tax_invoice as tax_par LEFT JOIN erp_party as party ON party.id=tax_par.buyer_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND tax_par.buyer_id='${party_id}' AND tax_par.sale_tax_invoice_total_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=tax_par.id AND voucher.voucher_child_invoice_type='sale' AND voucher.is_delete_status='0') AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id='27' OR account_head_id IN (SELECT id FROM erp_account_head WHERE id='27' OR account_head_id IN (SELECT id FROM erp_account_head WHERE id='27'))) AND party.is_delete_status='0' AND tax_par.is_delete_status='0' UNION ALL SELECT 'saledebitnote' as invoice_type,return_par.id as sale_return_id,return_par.id as ref_id,return_par.sale_return_note_no as invoice_no,return_par.sale_return_date as invoice_date,return_par.sale_return_total_net_amount as invoice_amount,return_par.sale_return_total_tds as bill_tds,(SELECT COALESCE(SUM(voucher.voucher_child_balance),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='saledebitnote' AND voucher.is_delete_status='0') as paid ${voucher_sale_debit_balance} ${voucher_sale_debit_disc_per} ${voucher_sale_debit_disc_amt} ${voucher_sale_debit_tds_amt} FROM erp_sale_return as return_par LEFT JOIN erp_party as party ON party.id=return_par.buyer_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.year_id<='${year_id}' AND return_par.branch_id<='${branch_id}' AND return_par.buyer_id='${party_id}' AND return_par.sale_return_type_id='97' AND return_par.sale_return_total_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='saledebitnote' AND voucher.is_delete_status='0') AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id='27' OR account_head_id IN (SELECT id FROM erp_account_head WHERE id='27' OR account_head_id IN (SELECT id FROM erp_account_head WHERE id='27'))) AND party.is_delete_status='0' AND return_par.is_delete_status='0'`;

            conn.query(getpurchasesalemillinvoicedata, (error, data) => {

                if (error || data?.length == 0) {
                    res?.send({ Status: 400, Count: 0, Message: ' Sale Data Not Found!!!!', Data: error });
                    next();
                    return;
                }
                else {
                    data?.forEach(saledata => {
                        saledata.invoice_date = constant.moment(saledata.invoice_date).format('YYYY-MM-DD');
                    });

                    res?.send({ Status: 200, Count: data[0]?.length, Message: 'Data found', Data: data });
                    next();
                    return;
                }
            });
        }
        else if (voucher_type == 'payment' || voucher_type == 'journal') {
            const voucher_purchase_balance = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_balance),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=tax_par.id AND child.voucher_child_invoice_type='purchase') as voucher_child_balance,(SELECT COALESCE(child.id,0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=tax_par.id AND child.voucher_child_invoice_type='purchase' LIMIT 1) as voucher_child_id` : '';

            const voucher_purchase_disc_per = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_disc_per),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=tax_par.id AND child.voucher_child_invoice_type='purchase') as voucher_child_disc_per` : '';

            const voucher_purchase_disc_amt = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_disc_amt),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=tax_par.id AND child.voucher_child_invoice_type='purchase') as voucher_child_disc_amt` : '';

            const voucher_purchase_tds_amt = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_tds_amt),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=tax_par.id AND child.voucher_child_invoice_type='purchase') as voucher_child_tds_amt` : '';

            const voucher_purchasecreditnote_balance = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_balance),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=return_par.id AND child.voucher_child_invoice_type='purchasecreditnote') as voucher_child_balance,(SELECT COALESCE(child.id,0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=return_par.id AND child.voucher_child_invoice_type='purchasecreditnote' LIMIT 1) as voucher_child_id` : '';

            const voucher_purchasecreditnote_disc_per = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_disc_per),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=return_par.id AND child.voucher_child_invoice_type='purchasecreditnote') as voucher_child_disc_per` : '';

            const voucher_purchasecreditnote_disc_amt = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_disc_amt),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=return_par.id AND child.voucher_child_invoice_type='purchasecreditnote') as voucher_child_disc_amt` : '';

            const voucher_purchasecreditnote_tds_amt = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_tds_amt),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=return_par.id AND child.voucher_child_invoice_type='purchasecreditnote') as voucher_child_tds_amt` : '';

            const voucher_journalpurchase_balance = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_balance),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=journal.id AND child.voucher_child_invoice_type='journalpurchase') as voucher_child_balance,(SELECT COALESCE(child.id,0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=journal.id AND child.voucher_child_invoice_type='journalpurchase' LIMIT 1) as voucher_child_id` : '';

            const voucher_journalpurchase_disc_per = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_disc_per),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=journal.id AND child.voucher_child_invoice_type='journalpurchase') as voucher_child_disc_per` : '';

            const voucher_journalpurchase_disc_amt = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_disc_amt),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=journal.id AND child.voucher_child_invoice_type='journalpurchase') as voucher_child_disc_amt` : '';

            const voucher_journalpurchase_tds_amt = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_tds_amt),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=journal.id AND child.voucher_child_invoice_type='journalpurchase') as voucher_child_tds_amt` : '';

            const voucher_mill_balance = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_balance),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=mill.id AND child.voucher_child_invoice_type='mill') as voucher_child_balance,(SELECT COALESCE(child.id,0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=mill.id AND child.voucher_child_invoice_type='mill' LIMIT 1) as voucher_child_id` : '';

            const voucher_mill_disc_per = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_disc_per),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=mill.id AND child.voucher_child_invoice_type='mill') as voucher_child_disc_per` : '';

            const voucher_mill_disc_amt = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_disc_amt),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=mill.id AND child.voucher_child_invoice_type='mill') as voucher_child_disc_amt` : '';


            const voucher_mill_tds_amt = voucher_child_id != '' ? `,(SELECT COALESCE(SUM(child.voucher_child_tds_amt),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=mill.id AND child.voucher_child_invoice_type='mill') as voucher_child_tds_amt` : '';


            // var getpurchaseinvoicedata = `SELECT 'purchase' as invoice_type,tax_par.id as purchase_tax_id,tax_par.id as ref_id,tax_par.purchase_tax_invoice_no as invoice_no,tax_par.purchase_tax_invoice_date as invoice_date,tax_par.purchase_tax_invoice_net_amount as invoice_amount,tax_par.puchase_tax_invoice_total_tds as bill_tds,(SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=tax_par.id AND voucher.voucher_child_invoice_type='purchase' AND voucher.is_delete_status='0') as paid ${voucher_purchase_balance} ${voucher_purchase_disc_per} ${voucher_purchase_disc_amt} ${voucher_purchase_tds_amt} FROM erp_purchase_tax_invoice as tax_par LEFT JOIN erp_party as party ON party.id=tax_par.supplier_id WHERE tax_par.user_id='${user_id}' AND tax_par.company_id<='${company_id}' AND tax_par.year_id<='${year_id}' AND tax_par.branch_id<='${branch_id}' AND tax_par.supplier_id='${party_id}' AND tax_par.purchase_tax_invoice_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=tax_par.id AND voucher.voucher_child_invoice_type='purchase' AND voucher.is_delete_status='0') AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76')))) AND party.is_delete_status='0' AND tax_par.is_delete_status='0' UNION ALL SELECT 'purchasecreditnote' as invoice_type,return_par.id as purchase_return_id,return_par.id as ref_id,return_par.purchase_return_note_no as invoice_no,return_par.purchase_return_date as invoice_date,return_par.purchase_return_total_net_amount as invoice_amount,return_par.purchase_return_total_tds as bill_tds,(SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='purchasecreditnote' AND voucher.is_delete_status='0') as paid ${voucher_purchasecreditnote_balance} ${voucher_purchasecreditnote_disc_per} ${voucher_purchasecreditnote_disc_amt} ${voucher_purchasecreditnote_tds_amt} FROM erp_purchase_return as return_par LEFT JOIN erp_party as party ON party.id=return_par.supplier_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.year_id<='${year_id}' AND return_par.branch_id<='${branch_id}' AND return_par.supplier_id='${party_id}' AND return_par.purchase_return_total_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=return_par.id AND voucher.voucher_child_invoice_type='purchasecreditnote' AND voucher.is_delete_status='0') AND return_par.purchase_return_type_id='95' AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76','30') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76','30') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','76','30')))) AND party.is_delete_status='0' AND return_par.is_delete_status='0' UNION ALL SELECT 'journalpurchase' as invoice_type,journal.id as journal_purchase_id,journal.id as ref_id,journal.journal_purchase_invoice_no as invoice_no,journal.journal_purchase_invoice_date as invoice_date,journal.journal_purchase_child_net_total as invoice_amount,journal.journal_purchase_tds as bill_tds,(SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=journal.id AND voucher.voucher_child_invoice_type='journalpurchase' AND voucher.is_delete_status='0') as paid ${voucher_journalpurchase_balance} ${voucher_journalpurchase_disc_per} ${voucher_journalpurchase_disc_amt} ${voucher_journalpurchase_tds_amt} FROM erp_journal_purchase as journal LEFT JOIN erp_party as party ON party.id=journal.supplier_id WHERE journal.user_id='${user_id}' AND journal.company_id<='${company_id}' AND journal.year_id<='${year_id}' AND journal.branch_id<='${branch_id}' AND journal.supplier_id='${party_id}' AND journal.journal_purchase_child_net_total > (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=journal.id AND voucher.voucher_child_invoice_type='journalpurchase' AND voucher.is_delete_status='0') AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','30') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','30') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('26','30')))) AND party.is_delete_status='0' AND journal.is_delete_status='0' UNION ALL SELECT 'mill' as invoice_type,mill.id as mill_invoice_id,mill.id as ref_id,mill.mill_tax_invoice_no as invoice_no,mill.mill_tax_invoice_date as invoice_date,mill.mill_tax_invoice_total_net_amount as invoice_amount,mill.mill_tax_invoice_total_tds as bill_tds,(SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=mill.id AND voucher.voucher_child_invoice_type='mill' AND voucher.is_delete_status='0') as paid ${voucher_mill_balance} ${voucher_mill_disc_per} ${voucher_mill_disc_amt} ${voucher_mill_tds_amt} FROM erp_mill_tax_invoice as mill LEFT JOIN erp_party as party ON party.id=mill.mill_id WHERE mill.user_id='${user_id}' AND mill.company_id<='${company_id}' AND mill.year_id<='${year_id}' AND mill.branch_id<='${branch_id}' AND mill.mill_id='${party_id}' AND mill.mill_tax_invoice_total_net_amount > (SELECT COALESCE(SUM(voucher.voucher_child_balance) + SUM(voucher.voucher_child_disc_amt),0) FROM erp_voucher_child as voucher WHERE voucher.tax_invoice_id=mill.id AND voucher.voucher_child_invoice_type='mill' AND voucher.is_delete_status='0') AND party.account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('73') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('73') OR account_head_id IN (SELECT id FROM erp_account_head WHERE id IN ('73')))) AND party.is_delete_status='0' AND mill.is_delete_status='0'`;

            var customCondition = (Number(voucher_id) > 0) ? `AND voucher.voucher_id != '${Number(voucher_id)}'` : ''

            var getpurchaseinvoicedata = `SELECT 
    'purchase' AS invoice_type,
    tax_par.id AS purchase_tax_id,
    tax_par.id AS ref_id,
    tax_par.id AS invoice_no,
    tax_par.invoice_date,
    tax_par.total_amount_dollar,
    tax_par.total_amount_dirham,
    "0" AS bill_tds,
    (SELECT COALESCE(SUM(child.voucher_child_balance_dollar),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=tax_par.id AND child.voucher_child_invoice_type='purchase' AND child.is_delete_status = '0') as voucher_child_balance_dollar,
    (SELECT COALESCE(SUM(child.voucher_child_balance_dirham),0) FROM erp_voucher_child as child WHERE child.id IN (${voucher_child_id}) AND child.tax_invoice_id=tax_par.id AND child.voucher_child_invoice_type='purchase' AND child.is_delete_status = '0') as voucher_child_balance_dirham,
    (SELECT COALESCE(SUM(voucher.voucher_child_balance_dollar), 0)
     FROM erp_voucher_child AS voucher
     WHERE voucher.tax_invoice_id = tax_par.id
       AND voucher.voucher_child_invoice_type = 'purchase'
       AND voucher.is_delete_status = '0') AS paid_dollar,
       (SELECT COALESCE(SUM(voucher.voucher_child_balance_dirham), 0)
     FROM erp_voucher_child AS voucher
     WHERE voucher.tax_invoice_id = tax_par.id
       AND voucher.voucher_child_invoice_type = 'purchase'
       AND voucher.is_delete_status = '0') AS paid_dirham,
       (
        CASE
            WHEN (
                SELECT COUNT(*)
                FROM erp_voucher_child AS child
                WHERE
                    child.tax_invoice_id = tax_par.id
                    AND child.voucher_child_invoice_type = 'purchase'
                    AND child.is_delete_status = '0'
            ) > 0 THEN(
                SELECT COALESCE(
                    voucher.voucher_child_invoice_amount_dollar - SUM(voucher.voucher_child_balance_dollar),
                    0
                )
                FROM erp_voucher_child AS voucher
                JOIN erp_voucher AS main_voucher
                  ON main_voucher.id = voucher.voucher_id
                WHERE
                    voucher.tax_invoice_id = tax_par.id
                    AND voucher.voucher_child_invoice_type = 'purchase'
                    AND voucher.is_delete_status = '0'
            )
             ELSE tax_par.total_amount_dollar
        END
    ) AS pending_amount_dollar,
    (
        CASE
            WHEN (
                SELECT COUNT(*)
                FROM erp_voucher_child AS child
                WHERE
                    child.tax_invoice_id = tax_par.id
                    AND child.voucher_child_invoice_type = 'purchase'
                    AND child.is_delete_status = '0'
            ) > 0 THEN(
                SELECT COALESCE(
                    voucher.voucher_child_invoice_amount_dirham - SUM(voucher.voucher_child_balance_dirham),
                    0
                )
                FROM erp_voucher_child AS voucher
                JOIN erp_voucher AS main_voucher
                  ON main_voucher.id = voucher.voucher_id
                WHERE
                    voucher.tax_invoice_id = tax_par.id
                    AND voucher.voucher_child_invoice_type = 'purchase'
                    AND voucher.is_delete_status = '0'
            )
             ELSE tax_par.total_amount_dirham
        END
    ) AS pending_amount_dirham
FROM 
    purchase_invoice_report AS tax_par
LEFT JOIN 
    partys AS party ON party.id = tax_par.party_id
WHERE 
    tax_par.user_id = '1'
    AND tax_par.party_id = '${party_id}'
    AND tax_par.is_delete_status = '0'
`;

            console.log("getpurchaseinvoicedata::", getpurchaseinvoicedata);


            conn.query(getpurchaseinvoicedata, (error, data) => {

                if (error || data?.length == 0) {
                    res?.send({ Status: 400, Count: 0, Message: 'Purchase Data Not Found!!!!', Data: error });
                    next();
                    return;
                }
                else {
                    data?.forEach(purchasedata => {
                        purchasedata.invoice_date = constant.moment(purchasedata.invoice_date).format('YYYY-MM-DD');
                    });
                    data.forEach((item, index) => {
                        if (index < voucher_child_id.length) {
                            item.voucher_child_id = voucher_child_id[index];
                        }
                    });
                    res?.send({ Status: 200, Count: data[0]?.length, Message: 'Data found', Data: data });
                    next();
                    return;
                }
            });
        }
    },

    // INSERT AND UPDATE voucher BANK DATA API //
    createbankcheque: (voucher_par_id, req, headers) => {

        let body = req;
        let header_data = headers;

        body.forEach((data, index) => {
            const id = data?.id ? Number(data?.id) : 0;
            const user_id = data?.user_id ? data?.user_id : 0;
            const voucher_id = voucher_par_id ? voucher_par_id : 0;
            const bank_cheque_no = data?.bank_cheque_no ? data?.bank_cheque_no : 0;
            const bank_cheque_bank_name = data?.bank_cheque_bank_name ? data?.bank_cheque_bank_name : '';
            const bank_cheque_date = data?.bank_cheque_date ? data?.bank_cheque_date : constant.moment().format('YYYY-MM-DD');
            const bank_cheque_amount = data?.bank_cheque_amount ? data?.bank_cheque_amount : 0;
            const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
            const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

            if (id > 0) {
                const updatevoucherbankcheque = `CALL create_voucher_bank_cheque(?,?,?,?,?,?,?,?,?)`;
                conn.query(updatevoucherbankcheque, [id, user_id, voucher_id, bank_cheque_no, bank_cheque_bank_name, bank_cheque_date, bank_cheque_amount, entry_date, update_date], (error, data) => {

                    if (error) {
                        return ({ Status: 400, Count: 0, Message: 'Data Not Updated!!!!', Data: error });
                    }
                    else {
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `voucher Bank cheque Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails, [user_id], function (error, userdata) {
                            if (userdata[0]) {
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog, [user_id, 0, userdata[0][0].user_position, ip, `voucher Bank cheque`, entry_date], function (error, data) {

                                });
                            }
                        });
                        return ({ Status: 200, Count: 0, Message: 'voucher Bank cheque Updated', Data: [] });
                    }
                });
            }
            else {
                const createvoucherbankcheque = `CALL create_voucher_bank_cheque(?,?,?,?,?,?,?,?,?)`;
                conn.query(createvoucherbankcheque, [id, user_id, voucher_id, bank_cheque_no, bank_cheque_bank_name, bank_cheque_date, bank_cheque_amount, entry_date, update_date], (error, data) => {

                    if (error) {
                        return { Status: 400, Count: 0, Message: 'Data Not Inserted!!!!', Data: error };
                    }
                    else {
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(header_data));
                        const ip = `voucher bank cheque Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;

                        conn.query(loginuserdetails, [user_id], (error, userdata) => {

                            if (userdata[0]) {
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog, [user_id, 0, userdata[0][0].user_position, ip, `voucher bank cheque`, entry_date], function (error, data) {

                                });
                            }
                        });
                        return { Status: 200, Count: 0, Message: 'voucher bank cheque Inserted', Data: data[0] };
                    }
                });
            }
        });
    },

    // DELETE voucher DATA API //
    deletevoucherdata: (req, res, next) => {

        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        // const type = body?.type ? body?.type : 0;
        const type = body?.voucher_type ? body?.voucher_type : 0;
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (id.length == 0 || id == 0) {
            res?.send({ Status: 200, Count: 0, Message: 'Enter Valid Voucher ID', Data: [] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter Valid User ID', Data: [] });
            next();
            return;
        }
        if (type.length == 0 || type == '') {
            res?.send({ Status: 400, Count: 0, Message: 'Enter Valid Type', Data: [] });
            next();
            return;
        }

        // var existvoucherdata = `SELECT id as voucher_id,(SELECT COUNT(id) FROM erp_voucher_child WHERE voucher_id='${id}' AND is_delete_status='0') as voucher_child_id,(SELECT COUNT(id) FROM erp_bank_cheque_detail WHERE voucher_id='${id}' AND is_delete_status='0') as bank_cheque_id FROM erp_voucher WHERE id='${id}'`;

        // conn.query(existvoucherdata,(error,data) => {
        //     if (error) 
        //     {   
        //         res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
        //         next();
        //         return;
        //     }
        //     else
        //     {
        //         if (data[0]?.voucher_child_id > 0 || data[0]?.bank_cheque_id > 0)
        //         {
        //             res?.send({ Status:400,Count:0,Message:'voucher In Use can not delete',Data:[] });
        //             next();
        //             return;
        //         }
        //         else
        //         {

        // var deletevoucherdata = `CALL delete_voucher(?,?)`;
        var deletevoucherdata = `UPDATE erp_voucher SET is_delete_status='1', voucher_update_date='${entry_date}' WHERE id='${id}';
       UPDATE erp_voucher_child SET is_delete_status='1', voucher_child_update_date='${entry_date}' WHERE voucher_id='${id}';`;
        // conn.query(deletevoucherdata, [id, entry_date], (error, data) => {

        conn.query(deletevoucherdata, (error, data) => {
            if (error) {
                res?.send({ Status: 400, Count: 0, Message: 'Data Not Found!!!!', Data: [] });
                next();
                return;
            }
            else {
                // INSERT USER ACTIVITY LOG IN TABLE //
                // const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                // const ip = `voucher Deleted With This Device ID ${HeaderData.device_id} `;
                // const loginuserdetails = `CALL get_user_details(?)`;
                // conn.query(loginuserdetails, [user_id], function (error, userdata) {
                //     if (userdata[0]) {
                //         const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                //         conn.query(loginactivitylog, [user_id, 0, userdata[0][0].user_position, ip, `voucher`, entry_date], function (error, data) {

                //         });
                //     }
                // });
                res?.send({ Status: 200, Count: 1, Message: 'voucher Deleted Successfully', Data: [] });

                // DELETE DEFAULT VOUCHER //
                res?.send(AllVoucherApis.deletedefaultvoucherdata(id, type, user_id, req?.headers));
                next();
                return;
            }
        });
        //         }
        //     }
        // });
    },

    // DELETE VOUCHER CHILD DATA API //
    deletevoucherchilddata: (req, res, next) => {

        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (id.length == 0 || id == 0) {
            res?.send({ Status: 200, Count: 0, Message: 'voucher Child Deleted Successfully!!!', Data: [] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter Valid User ID', Data: [] });
            next();
            return;
        }

        // var deletevoucherchilddata = `CALL delete_voucher_child(?,?)`;
        var deletevoucherchilddata = `UPDATE erp_voucher_child SET is_delete_status='1', voucher_child_update_date='${entry_date}' WHERE id=${id};`;

        // conn.query(deletevoucherchilddata, [id, entry_date], (error, data) => {

        conn.query(deletevoucherchilddata, (error, data) => {
            if (error) {
                res?.send({ Status: 400, Count: 0, Message: 'voucher Child Data Not Found!!!!', Data: error });
                next();
                return;
            }
            else {
                // INSERT USER ACTIVITY LOG IN TABLE //
                // const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                // const ip = `Mill voucher  Deleted With This Device ID ${HeaderData.device_id} `;
                // const loginuserdetails = `CALL get_user_details(?)`;
                // conn.query(loginuserdetails, [user_id], function (error, userdata) {
                //     if (userdata[0]) {
                //         const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                //         conn.query(loginactivitylog, [user_id, 0, userdata[0][0].user_position, ip, `Mill voucher `, entry_date], function (error, data) {

                //         });
                //     }
                // });
                res?.send({ Status: 200, Count: 1, Message: 'voucher Child Deleted Successfully', Data: [] });
                next();
                return;
            }
        });
    },

    // DELETE BANK CHEQUE DATA API //
    deletebankchequedata: (req, res, next) => {

        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (id.length == 0 || id == 0) {
            res?.send({ Status: 200, Count: 0, Message: 'Bank cheque details Deleted Successfully!!!', Data: [] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter Valid User ID', Data: [] });
            next();
            return;
        }

        var deletebankchequedata = `CALL delete_bank_cheque_details(?,?)`;
        conn.query(deletebankchequedata, [id, entry_date], (error, data) => {
            if (error) {
                res?.send({ Status: 400, Count: 0, Message: 'Bank cheque Data Not Found!!!!', Data: error });
                next();
                return;
            }
            else {
                // INSERT USER ACTIVITY LOG IN TABLE //
                const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                const ip = `Bank cheque Deleted With This Device ID ${HeaderData.device_id} `;
                const loginuserdetails = `CALL get_user_details(?)`;
                conn.query(loginuserdetails, [user_id], function (error, userdata) {
                    if (userdata[0]) {
                        const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        conn.query(loginactivitylog, [user_id, 0, userdata[0][0].user_position, ip, `Bank cheque `, entry_date], function (error, data) {

                        });
                    }
                });
                res?.send({ Status: 200, Count: 1, Message: 'Bank cheque Deleted Successfully', Data: [] });
                next();
                return;
            }
        });
    },

    // INSERT DEFAULT voucher DATA API //
    createdefaultvoucher: (login_user_id, login_branch_id, login_company_id, login_year_id, login_supplier_id, login_tds_on_id, login_tds_amount, login_invoice_id, headers, type) => {

        const user_id = login_user_id ? login_user_id : 0;
        const branch_id = login_branch_id ? login_branch_id : 0;
        const company_id = login_company_id ? login_company_id : 0;
        const year_id = login_year_id ? login_year_id : 0;
        const from_party_id = login_supplier_id ? login_supplier_id : 0;
        const to_party_id = login_tds_on_id ? login_tds_on_id : 0;
        const voucher_type = 'journal';
        const voucher_transaction_type = 'journal';
        const voucher_date = constant.moment().format('YYYY-MM-DD');
        const voucher_amount = login_tds_amount ? login_tds_amount : 0;
        const invoice_id = login_invoice_id ? login_invoice_id : 0;
        const invoice_type = type ? type : '';
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        const voucherlastinvoicenumbner = `SELECT COALESCE(voucher_no,0) as voucher_no FROM erp_voucher WHERE user_id='${user_id}' AND company_id='${company_id}' AND branch_id='${branch_id}' AND year_id='${year_id}' AND is_delete_status='0' AND voucher_type='${voucher_type}' ORDER BY id DESC LIMIT 1 `;

        conn.query(voucherlastinvoicenumbner, (error, voucherlastinvoicenumbner) => {

            if (error) {
                res?.send({ Status: 400, Count: 0, Message: 'Voucher Data Not Found!!!!', Data: error });
                next();
                return;
            }
            else {
                const voucher_no = Number(voucherlastinvoicenumbner[0]?.voucher_no) ? Number(voucherlastinvoicenumbner[0]?.voucher_no) + 1 : 1;

                // const createvoucher = `CALL create_default_voucher(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                const createvoucher = `INSERT INTO erp_voucher SET user_id='${user_id}', branch_id='${branch_id}', company_id='${company_id}', year_id='${year_id}', from_party_id='${from_party_id}', to_party_id='${to_party_id}', voucher_type='${voucher_type}', voucher_transaction_type='${voucher_transaction_type}', voucher_no='${voucher_no}', voucher_date='${voucher_date}', voucher_amount='${voucher_amount}', invoice_id='${invoice_id}', invoice_type='${invoice_type}', voucher_entry_date='${entry_date}', voucher_update_date='${update_date}';`;

                // conn.query(createvoucher, [user_id, branch_id, company_id, year_id, from_party_id, to_party_id, voucher_type, voucher_transaction_type, voucher_no, voucher_date, voucher_amount, invoice_id, invoice_type, entry_date, update_date], (error, data) => {

                conn.query(createvoucher, (error, data) => {

                    if (error) {
                        return ({ Status: 400, Count: 0, Message: 'Data Not Inserted!!!!', Data: error });
                    }
                    else {
                        // INSERT USER ACTIVITY LOG IN TABLE //
                        // const HeaderData = JSON.parse(JSON.stringify(headers));
                        // const ip = `voucher Created With This Device ID ${HeaderData.device_id} `;
                        // const loginuserdetails = `CALL get_user_details(?)`;
                        // conn.query(loginuserdetails, [user_id], function (error, userdata) {
                        //     if (userdata[0]) {
                        //         const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                        //         conn.query(loginactivitylog, [user_id, 0, userdata[0][0].user_position, ip, `voucher`, entry_date], function (error, data) {

                        //         });
                        //     }
                        // });
                        return ({ Status: 200, Count: 0, Message: 'voucher Inserted', Data: [] });
                    }
                });
            }
        });
    },

    // DELETE voucher DATA API //
    deletedefaultvoucherdata: (invoice_id, invoice_type, login_user_id, headers) => {

        const id = invoice_id ? Number(invoice_id) : 0;
        const type = invoice_type ? invoice_type : '';
        const user_id = login_user_id ? login_user_id : 0;
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        // var deletevoucherdata = `CALL delete_default_voucher(?,?,?)`;
        var deletevoucherdata = `UPDATE erp_voucher SET is_delete_status='1',voucher_update_date='${entry_date}' WHERE invoice_id='${id}' AND invoice_type='${type}';
       UPDATE erp_voucher_child SET is_delete_status='1',voucher_child_update_date='${entry_date}' WHERE voucher_id ='${id}';`;
        // conn.query(deletevoucherdata, [id, type, entry_date], (error, data) => {
        conn.query(deletevoucherdata, (error, data) => {
            if (error) {
                return ({ Status: 400, Count: 0, Message: 'Data Not Found!!!!', Data: [] });
            }
            else {
                // INSERT USER ACTIVITY LOG IN TABLE //
                // const HeaderData = JSON.parse(JSON.stringify(headers));
                // const ip = `voucher Deleted With This Device ID ${HeaderData.device_id} `;
                // const loginuserdetails = `CALL get_user_details(?)`;
                // conn.query(loginuserdetails, [user_id], function (error, userdata) {
                //     if (userdata[0]) {
                //         const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                //         conn.query(loginactivitylog, [user_id, 0, userdata[0][0].user_position, ip, `voucher`, entry_date], function (error, data) {
                //         });
                //     }
                // });
                return ({ Status: 200, Count: 1, Message: 'voucher Deleted Successfully', Data: [] });
            }
        });
    },

};


export default AllVoucherApis;