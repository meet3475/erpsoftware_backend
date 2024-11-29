import conn from "../Config/connection.js";

const Items = {
    getitemslist: (req, res, next) => {

        let getitemslist = `SELECT id, item_name, item_name as label, id as value FROM items`;

        conn.query(getitemslist, (error, data) => {

            if (error || data?.length == 0) {
                return res?.send({ Status: 400, Message: 'Data Not Found!!!!', Data: "Invalid User!!!!" });
            }
            else {
                return res?.send({ Status: 200, Message: 'Data found', Data: data });
            }
        });

    },
};


export default Items;

