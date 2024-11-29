import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";
import mime from 'mime';
import fs from 'fs';
import { uniqueNamesGenerator, adjectives } from 'unique-names-generator';


const AllQualityApis = {

    // INSERT AND UPDATE QUALITY DATA API //
    createquality: (req, res, next) => {

        let body = req?.body;
        const id = body?.id ? body?.id : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.user_id ? body?.company_id : 0;
        const brand_id = body?.brand_id ? body?.brand_id : 0;
        const material_id = body?.material_id ? body?.material_id : 0;
        const quality_type_id = body?.quality_type_id ? body?.quality_type_id : 0;
        const quality_name = body?.quality_name ? body?.quality_name.trim().toLowerCase() : '';
        const quality_sub_name = body?.quality_sub_name ? body?.quality_sub_name.trim().toLowerCase() : '';
        const quality_sub_attribute = body?.quality_sub_attribute ? body?.quality_sub_attribute.trim().toLowerCase() : '';
        const quality_sales_name = body?.quality_sales_name ? body?.quality_sales_name.trim().toLowerCase() : '';
        const quality_print_name = body?.quality_print_name ? body?.quality_print_name.trim().toLowerCase() : '';
        const quality_image = body?.quality_image ? body?.quality_image : '';
        const quality_stock = body?.quality_stock ? body?.quality_stock : 0;
        const quality_meter = body?.quality_meter ? body?.quality_meter : 0;
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');
        const update_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (quality_name == '') {
            res.send({ Status: 400, Count: 0, Message: 'Enter quality Name', Data: [] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter User ID', Data: [] });
            next();
            return;
        }
        if (company_id.length == 0 || company_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter Company ID', Data: [] });
            next();
            return;
        }

        // let qualityimage = '';

        // if (quality_image.length != 0) 
        // {
        //     let matches = quality_image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
        //     let response = {};

        //     // console.log(matches);return;
        //     if (matches != null) 
        //     {
        //         response.type = matches[1];
        //         response.data = new Buffer.from(matches[2], 'base64');
        //         let decodedImg = response;
        //         let imageBuffer = decodedImg.data;
        //         let type = decodedImg.type;
        //         let extention = mime.getExtension(type);
        //         let QualityImage = uniqueNamesGenerator({dictionaries: [adjectives]}) + "." + extention;
        //         // let QualityImage = Math.random(10) + "." + extention;

        //         fs.writeFile("./src/quality/" + QualityImage, imageBuffer,'utf-8',(error) => {
        //             if (error) {
        //                 return({ Status:400,Count:0,Message:'This Quality Image not inserted',Data:error });
        //             }
        //             else
        //             {
        //                 qualityimage = QualityImage;
        //             }
        //         });
        //     }
        // }


        const usequalitydata = `SELECT quality_name FROM erp_quality WHERE quality_name='${quality_name}' AND user_id='${user_id}' AND company_id='${company_id}' AND id!='${id}' AND is_delete_status='0'`;
        conn.query(usequalitydata, (error, data) => {

            if (data[0]?.quality_name == quality_name) {
                res?.send({ Status: 400, Count: 0, Message: 'This Quality Name Already Use', Data: [] });
                next();
                return;
            }
            if (id > 0) {
                const updatequality = `CALL create_quality(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(updatequality, [id, user_id, company_id, brand_id, material_id, quality_type_id, quality_name, quality_sub_name, quality_sub_attribute, quality_sales_name, quality_print_name, quality_image, quality_stock, quality_meter, entry_date, update_date], (error, data) => {
                    // const updatequality = `UPDATE erp_quality SET user_id='${user_id}',company_id='${company_id}',brand_id='${brand_id}',material_id='${material_id}',quality_type_id='${quality_type_id}',quality_name='${quality_name}',quality_sub_name='${quality_sub_name}',quality_sub_attribute='${quality_sub_attribute}',quality_sales_name='${quality_sales_name}',quality_print_name='${quality_print_name}',quality_image='${quality_image}',quality_stock='${quality_stock}',quality_meter='${quality_meter}',quality_update_date='${update_date}' WHERE id='${id}'`
                    // conn.query(updatequality,(error,data) => {
                    if (error) {
                        res?.send({ Status: 400, Count: 0, Message: 'Data Not Updated!!!!', Data: error });
                        next();
                    }
                    else {
                        res?.send({ Status: 200, Count: 0, Message: 'Quality Updated', Data: [] });
                        next();

                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                        const login_ip = `Quality Updated With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails, [user_id], function (error, userdata) {
                            if (userdata[0]) {
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog, [user_id, 0, userdata[0][0]?.user_position, login_ip, `Quality`, entry_date], function (error, data) {

                                });
                            }
                        });
                    }
                });
            }
            else {
                const createquality = `CALL create_quality(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;
                conn.query(createquality, [id, user_id, company_id, brand_id, material_id, quality_type_id, quality_name, quality_sub_name, quality_sub_attribute, quality_sales_name, quality_print_name, quality_image, quality_stock, quality_meter, entry_date, update_date], (error, data) => {
                    // const createquality = `INSERT INTO erp_quality SET user_id='${user_id}',company_id='${company_id}',brand_id='${brand_id}',material_id='${material_id}',quality_type_id='${quality_type_id}',quality_name='${quality_name}',quality_sub_name='${quality_sub_name}',quality_sub_attribute='${quality_sub_attribute}',quality_sales_name='${quality_sales_name}',quality_print_name='${quality_print_name}',quality_image='${quality_image}',quality_stock='${quality_stock}',quality_meter='${quality_meter}',quality_entry_date='${entry_date}',quality_update_date='${update_date}'`;
                    //  conn.query(createquality,(error,data) => {
                    if (error || data[0]?.length == 0) {
                        res?.send({ Status: 400, Count: 0, Message: 'Data Not Inserted!!!!', Data: error });
                        next();
                    }
                    else {
                        res?.send({ Status: 200, Count: 0, Message: 'Quality Inserted', Data: data[0][0] });
                        // res?.send({ Status:200,Count:0,Message:'Quality Inserted',Data:[] });
                        next();

                        // INSERT USER ACTIVITY LOG IN TABLE //
                        const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                        const login_ip = `Quality Created With This Device ID ${HeaderData.device_id} `;
                        const loginuserdetails = `CALL get_user_details(?)`;
                        conn.query(loginuserdetails, [user_id], function (error, userdata) {
                            if (userdata[0]) {
                                const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                conn.query(loginactivitylog, [user_id, 0, userdata[0][0].user_position, login_ip, `Quality`, entry_date], function (error, data) {

                                });
                            }
                        });
                    }
                });
            }
        });
    },

    // GET PARTY BROKER DETAILS DATA API //
    getqualitydetails: (req, res, next) => {

        const quality_id = req.body?.quality_id ? req.body?.quality_id : 0;

        if (quality_id.length == 0 || quality_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter Quality ID', Data: [] });
            next();
            return;
        }

        var getqualitydetails = `CALL get_quality_details(?)`;
        conn.query(getqualitydetails, [quality_id], (error, data) => {

            if (error || data[0]?.length == 0) {
                res?.send({ Status: 400, Count: 0, Message: 'Data Not Found!!!!', Data: error });
                next();
                return;
            }
            else {
                res?.send({ Status: 200, Count: data[0]?.length, Message: 'Data found', Data: data[0][0] });
                next();
                return;
            }
        });
    },

    // GET QUALITY LISTING DATA API //
    getqualitylistingdata: (req, res, next) => {

        // console.log(req.socket.remoteAddress);return;
        let body = req?.body;
        let search = req?.body.search;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const material_id = body?.material_id ? body?.material_id : 0;
        const total_limit = body?.limit ? body?.limit : 10;
        const sortby = body?.sortby ? body?.sortby : 'quality_id-ASC';
        const exploadsorting = sortby.split("-");
        const orderby = exploadsorting[0];
        const orderformat = exploadsorting[1];
        const pageno = body?.pageno ? body?.pageno : 1;
        const total_offset = (pageno - 1) * total_limit;
        const limit_query = body?.is_export == true ? ' ' : ` LIMIT ${total_offset},${total_limit}`;
        const All_ID_Query = body?.is_export == true ? ' ' : `quality.brand_id,quality.material_id,type.id as quality_type_id,`;

        if (user_id.length == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter User ID', Data: [] });
            next();
            return;
        }
        if (company_id.length == 0 || company_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter Company ID', Data: [] });
            next();
            return;
        }

        const search_quality_sales_name = search?.quality_sales_name ? search?.quality_sales_name.trim().toLowerCase() : '';
        const search_quality_name = search?.quality_name ? search?.quality_name.trim().toLowerCase() : '';
        const search_quality_sub_name = search?.quality_sub_name ? search?.quality_sub_name.trim().toLowerCase() : '';
        const search_quality_sub_attribute = search?.quality_sub_attribute ? search?.quality_sub_attribute.trim().toLowerCase() : '';
        const search_brand_name = search?.brand_name ? search?.brand_name.trim().toLowerCase() : '';
        const search_quality_type = search?.quality_type ? search?.quality_type.trim().toLowerCase() : '';
        const search_material_name = search?.material_name ? search?.material_name.trim().toLowerCase() : '';
        const search_quality_meter = search?.quality_meter ? search?.quality_meter : '';

        const sea_quality_sales_name = search_quality_sales_name != '' ? ` AND quality.quality_sales_name LIKE '%${search_quality_sales_name}%'` : '';
        const sea_quality_name = search_quality_name != '' ? ` AND quality.quality_name LIKE '%${search_quality_name}%'` : '';
        const sea_quality_sub_name = search_quality_sub_name != '' ? ` AND quality.quality_sub_name LIKE '%${search_quality_sub_name}%'` : '';
        const sea_quality_sub_attribute = search_quality_sub_attribute != '' ? ` AND quality.quality_sub_attribute LIKE '%${search_quality_sub_attribute}%'` : '';
        const sea_quality_type = search_quality_type != '' ? ` AND type.type_name LIKE '%${search_quality_type}%'` : '';
        const sea_material_name = search_material_name != '' ? ` AND material.material_name LIKE '%${search_material_name}%'` : '';
        const sea_brand_name = search_brand_name != '' ? ` AND brand.brand_name LIKE '%${search_brand_name}%'` : '';
        const sea_quality_meter = search_quality_meter != '' ? ` AND quality.quality_meter LIKE '%${search_quality_meter}%'` : '';

        const multi_material_id = material_id != '' ? `AND quality.material_id IN (${material_id})` : '';

        var getqualitylistingdata = `SELECT quality.id,quality.id as quality_id,${All_ID_Query} quality.quality_name,quality.quality_print_name,quality.quality_image,quality.quality_stock,quality.quality_sales_name,quality.quality_name,quality.quality_sub_name,quality.quality_sub_attribute,type.type_name as quality_type,material.material_name,brand.brand_name,quality.quality_meter FROM erp_quality as quality LEFT JOIN erp_type as type ON type.id=quality.quality_type_id LEFT JOIN erp_brand as brand ON brand.id=quality.brand_id LEFT JOIN erp_material as material ON material.id=quality.material_id WHERE quality.is_delete_status='0' AND quality.quality_status='active' AND quality.company_id<='${company_id}' ${multi_material_id} ${sea_quality_sales_name} ${sea_quality_name} ${sea_quality_sub_name} ${sea_quality_sub_attribute} ${sea_quality_type} ${sea_material_name} ${sea_brand_name} ${sea_quality_meter} ORDER BY ${orderby} ${orderformat} ${limit_query}`;

        conn.query(getqualitylistingdata, (error, data) => {

            if (error || data?.length == 0) {
                res?.send({ Status: 400, Count: 0, Message: 'Data Not Found!!!!', Data: error });
                next();
                return;
            }

            // data.forEach(qualityvalue => {
            //     // qualityvalue.quality_image = "http://" + req.socket.remoteAddress + ":" + 4200 + "/erpsoftware_backend/src/quality/" + qualityvalue.quality_image;
            //     qualityvalue.quality_image = "http://192.168.29.45:4200/erpsoftware_backend/src/quality/" + qualityvalue.quality_image;
            // });
            data.forEach(element => {
                element.export = constant.DefaultExportopetions;
            });

            var totalqualitycount = `SELECT COUNT(quality.id) as Count FROM erp_quality as quality LEFT JOIN erp_type as type ON type.id=quality.quality_type_id LEFT JOIN erp_brand as brand ON brand.id=quality.brand_id LEFT JOIN erp_material as material ON material.id=quality.material_id WHERE quality.is_delete_status='0' AND quality.quality_status='active' AND quality.company_id<='${company_id}' ${multi_material_id} ${sea_quality_sales_name} ${sea_quality_name} ${sea_quality_sub_name} ${sea_quality_sub_attribute} ${sea_quality_type} ${sea_material_name} ${sea_brand_name} ${sea_quality_meter} `;
            
            conn.query(totalqualitycount, (error, countdata) => {

                res?.send({ Status: 200, Count: data?.length, TotalCount: countdata[0]?.Count, Message: 'Data found', Data: data });
                next();
                return;
            });
        });
    },

    // DELETE QUALITY DATA API //
    deletequalitydata: (req, res, next) => {

        let body = req?.body;
        const id = body?.id ? Number(body?.id) : 0;
        const user_id = body?.user_id ? body?.user_id : 0;
        const entry_date = constant.moment().format('YYYY-MM-DD h:mm:ss');

        if (id.length == 0 || id == 0) {
            res?.send({ Status: 200, Count: 0, Message: 'Enter Valid Quality ID', Data: [] });
            next();
            return;
        }
        if (user_id.length == 0 || user_id == 0) {
            res?.send({ Status: 400, Count: 0, Message: 'Enter Valid User ID', Data: [] });
            next();
            return;
        }

        var existqualitydata = `SELECT id as quality_id,(SELECT COUNT(id) FROM erp_purchase_tax_invoice_child WHERE quality_id='${id}' AND is_delete_status='0') as purchase_tax_invoice_child_id,(SELECT COUNT(id) FROM erp_purchase_return_child WHERE quality_id='${id}' AND is_delete_status='0') as purchase_return_child_id,(SELECT COUNT(id) FROM erp_mill_receive WHERE quality_id='${id}' AND is_delete_status='0') as mill_receive_id,(SELECT COUNT(id) FROM erp_mill_reprocess WHERE quality_id='${id}' AND is_delete_status='0') as mill_reprocess_id,(SELECT COUNT(id) FROM erp_mill_tax_invoice_child WHERE quality_id='${id}' AND is_delete_status='0') as mill_tax_invoice_child_id,(SELECT COUNT(id) FROM erp_grey_issue WHERE quality_id='${id}' AND is_delete_status='0') as grey_issue_id,(SELECT COUNT(id) FROM erp_sale_child WHERE quality_id='${id}' AND is_delete_status='0') as sale_child_id,(SELECT COUNT(id) FROM erp_grey_issue WHERE quality_id='${id}' AND is_delete_status='0') as grey_issue_id,(SELECT COUNT(id) FROM erp_sale_return_child WHERE quality_id='${id}' AND is_delete_status='0') as sale_return_child_id,(SELECT COUNT(id) FROM erp_inventory_child WHERE quality_id='${id}' AND is_delete_status='0') as inventory_child_id,(SELECT COUNT(id) FROM erp_inventory_invoice_child WHERE quality_id='${id}' AND is_delete_status='0') as inventory_invoice_child_id FROM erp_quality WHERE id='${id}'`;

        conn.query(existqualitydata, (error, data) => {
            if (error) {
                res?.send({ Status: 400, Count: 0, Message: 'Data Not Found!!!!', Data: error });
                next();
                return;
            }
            else {
                if (data[0]?.purchase_tax_invoice_child_id > 0 || data[0]?.purchase_return_child_id > 0 || data[0]?.mill_receive_id > 0 || data[0]?.mill_reprocess_id > 0 || data[0]?.mill_tax_invoice_child_id > 0 || data[0]?.grey_issue_id > 0 || data[0]?.sale_child_id > 0 || data[0]?.grey_issue_id > 0 || data[0]?.sale_return_child_id > 0 || data[0]?.inventory_child_id > 0 || data[0]?.inventory_invoice_child_id > 0) {
                    res?.send({ Status: 400, Count: 0, Message: 'Quality In Use can not delete', Data: [] });
                    next();
                    return;
                }
                else {
                    var deletequalitydata = `CALL delete_quality(?,?)`;
                    conn.query(deletequalitydata, [id, entry_date], (error, data) => {
                        if (error) {
                            res?.send({ Status: 400, Count: 0, Message: 'Data Not Found!!!!', Data: error });
                            next();
                            return;
                        }
                        else {
                            // INSERT USER ACTIVITY LOG IN TABLE //
                            const HeaderData = JSON.parse(JSON.stringify(req?.headers));
                            const login_ip = `Quality Deleted With This Device ID ${HeaderData.device_id} `;
                            const loginuserdetails = `CALL get_user_details(?)`;
                            conn.query(loginuserdetails, [user_id], function (error, userdata) {
                                if (userdata[0]) {
                                    const loginactivitylog = `CALL create_all_activity_log(?,?,?,?,?,?)`;
                                    conn.query(loginactivitylog, [user_id, 0, userdata[0][0].user_position, login_ip, `Quality`, entry_date], function (error, data) {

                                    });
                                }
                            });
                            res?.send({ Status: 200, Count: 1, Message: 'Quality Deleted Successfully', Data: [] });
                            next();
                            return;
                        }
                    });
                }
            }
        });
    }
};

export default AllQualityApis;
