import mysql from 'mysql';

// const conn = mysql.createConnection({
//     host:'localhost',//http://192.168.10.1236:8080
//     user:'root',
//     pass:'',
//     database:'erp'
// });

// const conn = mysql.createConnection({
//     host:'localhost',//http://192.168.10.1236:8080
//     user:'root',
//     pass:'',
//     database:'u610828372_webportal'
// });

// Ravi Comment Change erp database to new_erp
// const conn = mysql.createConnection({
//     host:'localhost',//http://192.168.10.1236:8080
//     user:'root',
//     pass:'',
//     database:'erp'
// });

// Ravi Comment for offline database
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    pass: '',
    database: 'new_erp',
    multipleStatements: true
});

// Ravi Comment for online database
// const conn = mysql.createConnection({
//     host: '139.59.33.176',
//     user: 'u610828372_webportal',
//     password: 'u610828372@Webportal',
//     database: 'u610828372_webportal',
//     port: 3306,
//     multipleStatements: true,
//     connectTimeout: 10000
// });

// const conn = mysql.createConnection({
//     host:'localhost',
//     user:'erp',
//     password:'erp',
//     database:'jsonpmg5_erp'
// });

conn.connect((error, data) => {
    if (error) {
        console.log("DB Error ===> " + error);
        console.log("Connection not Found");
    }
    else {
        console.log("Connected");
    }
});

export default conn;


