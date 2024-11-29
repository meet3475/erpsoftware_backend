import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";


const AllPartyBrokerGroupApis = {
    
    // INSERT AND UPDATE PARTY BROKER GROUP API //
    createpartybrokergroup: (req,res,next) => {

        const body = req?.body;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const account_head_id = body?.account_head_id ? body?.account_head_id : 0;
        const party_group_name = body?.party_group_name ? body?.party_group_name.trim().toLowerCase() : '';
        const entery_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');

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
        if (id > 0) 
        {
            const updatepartybrokergroup = `CALL create_party_broker_group(?,?,?,?,?,?,?)`;
            conn.query(updatepartybrokergroup,[id,user_id,company_id,account_head_id,party_group_name,entery_date,update_date],(error,data) => {

                if (error)
                {
                    res?.send({ Status:400,Count:0,Message:'Data Not Updated!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'Party Broker Group Updated',Data:[] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `Party Broker Group Updated With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Party Broker Group`,entery_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
        else
        {
            const createpartybrokergroup = `CALL create_party_broker_group(?,?,?,?,?,?,?)`;
            conn.query(createpartybrokergroup,[id,user_id,company_id,account_head_id,party_group_name,entery_date,update_date],(error,data) => {

                if (error || data[0]?.length == 0)
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Inserted!!!!',Data:error });
                    next();
                }
                else
                {   
                    res?.send({ Status:200,Count:0,Message:'Party Broker Group Inserted',Data:data[0][0] });
                    next();

                    // INSERT USER ACTIVITY LOG IN TABLE //
                    const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                    const ip = `Party Broker Group Created With This Device ID ${HeaderData.device_id} `;
                    const loginuserdetails = `CALL get_user_details(?)`;
                    conn.query(loginuserdetails,[user_id],function(error,userdata){
                        if(userdata[0])
                        {   
                            const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                            conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Party Broker Group`,entery_date],function(error,data){
                    
                            });
                        }
                    });
                }  
            });
        }
    },

    // GET ALL PARTY BROKER GROUP LISTING DATA API //
    allpartybrokergroupdata: (req,res,next) => {
        
        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'party.user_id-DESC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno-1) * limit;
        const limit_query = body?.is_export == true ? ' ' :` LIMIT ${total_offset},${limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' :`party.user_id,party.company_id,party.id as party_group_id,`;

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
        
        const search_party_group_name = search?.party_group_name ? search?.party_group_name.trim().toLowerCase() : '';
        const search_group_type = search?.group_type ? search?.group_type.trim().toLowerCase() : '';

        const ser_party_group_name = search_party_group_name != '' ? ` AND party.party_group_name LIKE '%${search_party_group_name}%'` : '';
        const ser_group_type = search_group_type != '' ? ` AND head.account_head_short_name LIKE '%${search_group_type}%'` : '';

        var allpartybrokergroupdata = `SELECT ${All_ID_Query} party.party_group_name,head.account_head_short_name as group_type,head.id as account_head_id FROM erp_party_group as party LEFT JOIN erp_account_head as head ON head.id=party.account_head_id WHERE party.is_delete_status='0' AND head.is_delete_status='0' AND party.party_group_status='active' AND party.user_id='${user_id}' AND party.company_id<='${company_id}' ${ser_party_group_name} ${ser_group_type} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(allpartybrokergroupdata,(error,data) => {

            if (data?.length > 0) 
            {   
                data.forEach(element => {
                    element.export = constant.DefaultExportopetions;
                });
                var totalpartybrokergroupcount = `SELECT COUNT(party.id) as Count FROM erp_party_group as party LEFT JOIN erp_account_head as head ON head.id=party.account_head_id WHERE party.is_delete_status='0' AND head.is_delete_status='0' AND party.party_group_status='active' AND party.user_id='${user_id}' AND party.company_id<='${company_id}' ${ser_party_group_name} ${ser_group_type}`;
        
                conn.query(totalpartybrokergroupcount,(error,countdata) => {
                    res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                    next();
                    return;
                });
            }
            else
            {
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
        });
    },

    // DELETE PARTY BROKER GROUP DATA API //
    deletepartybrokergroupdata: (req,res,next) => {
        
        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date =  constant.moment().format('YYYY-MM-DD h:mm:ss');
        
        if (id.length == 0 || id == 0) 
        {
            res?.send({ Status:200,Count:0,Message:'Enter Valid Party Broker Group ID',Data:[] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Valid User ID',Data:[] });
            next();
            return;
        }

        var existpartygroupdata = `SELECT id as party_group_id,(SELECT COUNT(id) FROM erp_party WHERE party_group_id='${id}' AND is_delete_status='0') as party_id FROM erp_godown_level WHERE id='${id}'`;
        
        conn.query(existpartygroupdata,(error,data) => {
            if (error) 
            {   
                res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                next();
                return;
            }
            else
            {   
                if (data[0]?.party_id > 0)
                {
                    res?.send({ Status:400,Count:0,Message:'Party Broker Group In Use can not delete',Data:[] });
                    next();
                    return;
                }
                else
                {
                    var deletepartybrokergroupdata = `CALL delete_party_broker_group(?,?)`;
                    conn.query(deletepartybrokergroupdata,[id,entry_date],(error,data) => {
                        if (error) 
                        {   
                            res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                            next();
                            return;
                        }
                        else
                        {     
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const ip = `Party Broker Group Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails,[user_id],function(error,userdata){
                                if(userdata[0])
                                {   
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog,[user_id,0,userdata[0][0].user_position,ip,`Party Broker Group`,entry_date],function(error,data){
                            
                                    });
                                }
                            });
                            res?.send({ Status:200,Count:1,Message:'Party Broker Group Deleted Successfully',Data:[] });
                            next();
                            return;
                        }
                    });
                } 
            }
        });
    }
};

export default AllPartyBrokerGroupApis;
       
         
		