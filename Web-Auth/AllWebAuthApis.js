import constant from '../Config/constant.js';
import conn from "../Config/connection.js";

const AllWebAuthApis = {
    getuserlistingdataweb: (req, res, next) => {

        let body = req?.body;
        let userId = Buffer.from(body?.userId, 'base64').toString('utf-8');
        // let getuserlistingdata = `SELECT user.id AS user_id, user.username AS user_name, user.mobile AS user_mobile, user.email AS user_email FROM administrators as user WHERE user.id = ${userId}`;
        let getuserlistingdata = `SELECT user.id AS user_id, user.username AS user_name FROM administrators as user WHERE user.id = '${userId}'`;

        conn.query(getuserlistingdata, (error, data) => {

            if (error || data?.length == 0) {
                return res?.send({ Status: 400, Message: 'Data Not Found!!!!', Data: "Invalid User!!!!" });
            }
            else {
                return res?.send({ Status: 200, Message: 'Data found', Data: data?.length > 0 ? data[0] : data });
            }
        });

    },
};


export default AllWebAuthApis;

