import constant from '../Config/constant.js';
import conn from "../Config/connection.js";

const Currency = {
    getcurrency: (req, res, next) => {

        let body = req?.body;
        let getuserlistingdata = `SELECT site.setting_field_name AS label, site.setting_field_value AS value FROM nex_settings as site WHERE site.setting_field_name = 'site_dirham_price' OR site.setting_field_name = 'site_dollar_price'`;

        conn.query(getuserlistingdata, (error, data) => {

            if (error || data?.length == 0) {
                return res?.send({ Status: 400, Message: 'Data Not Found!!!!', Data: "Invalid User!!!!" });
            }
            else {
                const newData = data.reduce((acc, item) => {
                    acc[item.label] = item.value;
                    return acc;
                }, {});
                return res?.send({ Status: 200, Message: 'Data found', Data: newData });
            }
        });

    },
};


export default Currency;

