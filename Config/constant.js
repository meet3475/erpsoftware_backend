import mysql from 'mysql';
import http from 'http';
import express from 'express';
import cors from 'cors';
import moment from 'moment';

const app = express();
const DefaultSelect = {
    "label": "select",
    "value": ""
};
const DefaultExportopetions = ["edit", "delete", "freez", "pdf", "excel", "print", "email ", "challanprint", "ewaybillauto", "cansalewaybill", "whatsapp", "einvoce", "cansaleinvoice", "attachmentupload", "addedaattachmentdownload", "user", "plus"]


const constant = {
    mysql: mysql,
    express: express,
    app: app,
    http: http,
    cors: cors,
    moment: moment,
    DefaultSelect: DefaultSelect,
    DefaultExportopetions: DefaultExportopetions
}
export default constant;