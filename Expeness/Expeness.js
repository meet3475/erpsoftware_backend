import conn from "../Config/connection.js";

const Expeness = {
    getexpeneslist: (req, res, next) => {

        let getexpeneslist = `SELECT id, account_type, party_name, party_name as label, id as value FROM partys WHERE account_type = 97`;

        conn.query(getexpeneslist, (error, data) => {

            if (error || data?.length == 0) {
                return res?.send({ Status: 400, Message: 'Data Not Found!!!!', Data: "Invalid User!!!!" });
            }
            else {
                return res?.send({ Status: 200, Message: 'Data found', Data: data });
            }
        });

    },
};


export default Expeness;
