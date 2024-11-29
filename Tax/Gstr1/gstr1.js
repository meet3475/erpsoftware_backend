import constant from '../../Config/constant.js';
import conn from "../../Config/connection.js";

const AllGstr1Apis = {
    
    // GET gstr1 LISTING DATA API //
    getgstr1listingdata: (req,res,next) => {

        let body = req?.body;
        const user_id = body?.user_id ? body?.user_id : 0;
        const company_id = body?.company_id ? body?.company_id : 0;
        const branch_id = body?.branch_id ? body?.branch_id : 0;
        const year_id = body?.year_id ? body?.year_id : 0;
        const gst_type = body?.gst_type ? body?.gst_type : '';
        const total_limit = body?.limit ? body?.limit : 10;
        // const sortby = body?.sortby ? body?.sortby : 'sale.id-ASC';
        // const exploadsorting = sortby.split("-");
        // const orderby = exploadsorting[0];
        // const orderformat = exploadsorting[1];
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
        if (gst_type.length == 0 || gst_type == '') 
        {
            res?.send({ Status:400,Count:0,Message:'Enter Gst Type',Data:[] });
            next();
            return;
        }
       
        if (gst_type == 'b2b' || gst_type == 'b2cl' || gst_type == 'b2cs') 
        {
            const B2B = gst_type == 'b2b' ? ` AND buyer.party_gst_no!='' ORDER BY sale.id ASC` : '';
            const B2CL = gst_type == 'b2cl' ? ` AND sale.sale_tax_invoice_total_net_amount > 250000 AND buyer.party_gst_no='' ORDER BY sale.id ASC` : '';
            const B2CS = gst_type == 'b2cs' ? ` AND sale.sale_tax_invoice_total_net_amount < 250000 AND buyer.party_gst_no='' GROUP BY state.global_name ORDER BY sale.id ASC` : '';
            const AmountSUM = gst_type == 'b2cs' ? `COALESCE(SUM(sale.sale_tax_invoice_total_net_amount),0) as total_amount,` : '';
            const date_range_query = from_date != '' ? ` AND DATE(sale.sale_tax_invoice_entry_date) >='${from_date}' AND DATE(sale.sale_tax_invoice_entry_date) <='${to_date}'` : '';
            
            var getgstr1listingdata = `SELECT ${AmountSUM}buyer.party_gst_no,buyer.party_name,sale.sale_tax_invoice_no,sale.sale_tax_invoice_date,sale.sale_tax_invoice_total_net_amount,state.global_name as state_name,state.global_code as state_code,'N' as reverse_type,'regular' as invoive_type,'5' as rate,sale.sale_tax_invoice_total_taxable,sale.sale_tax_invoice_total_sgst,sale.sale_tax_invoice_total_cgst,sale.sale_tax_invoice_total_igst,'Sales' as book FROM erp_sale_tax_invoice as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' ${date_range_query} ${B2B} ${B2CL} ${B2CS} ${limit_query}`;

            conn.query(getgstr1listingdata,(error,data) => {
                
                if (error || data?.length == 0) 
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                
                data.forEach(element => {
                    element.sale_tax_invoice_date = constant.moment(element.sale_tax_invoice_date).format('YYYY-MM-DD');
                    element.state_name = `${element.state_code}-` + element.state_name;
                    element.export = constant.DefaultExportopetions;

                    if (gst_type == 'b2cs') 
                    {
                        element.invoive_type = 'OE';
                    }
                });
                
                var totalgstr1count = `SELECT COUNT(sale.id) as Count FROM erp_sale_tax_invoice as sale LEFT JOIN erp_party as buyer ON buyer.id=sale.buyer_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' ${date_range_query} ${B2B} ${B2CL} ${B2CS} `;

                conn.query(totalgstr1count,(error,countdata) => {
                    
                    res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                    next();
                    return;
                });
            });
        }
        if(gst_type == 'cdnr' || gst_type == 'cdnur')
        {
            const CDNR = gst_type == 'cdnr' ? ` AND buyer.party_gst_no!=''` : '';
            const CDNUR = gst_type == 'cdnur' ? ` AND buyer.party_gst_no=''` : '';
            const date_range_query = from_date != '' ? ` AND DATE(sale_return.sale_return_entry_date) >='${from_date}' AND DATE(sale_return.sale_return_entry_date) <='${to_date}'` : '';
            
            var getgstr1listingdata = `SELECT buyer.party_gst_no,buyer.party_name,sale_return.sale_return_document_no,sale_return.sale_return_document_date,sale_return.sale_return_note_no,sale_return.sale_return_date,sale_return.sale_return_total_net_amount,state.global_name as state_name,state.global_code as state_code,'N' as reverse_type,'regular' as invoive_type,'5' as rate,sale_return.sale_return_total_taxable,sale_return.sale_return_total_sgst,sale_return.sale_return_total_cgst,sale_return.sale_return_total_igst,IF(sale_return.sale_return_type_id = '98' OR sale_return.sale_return_type_id = '38','C','D') as document_type FROM erp_sale_return as sale_return LEFT JOIN erp_party as buyer ON buyer.id=sale_return.buyer_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.year_id<='${year_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.is_delete_status='0' ${CDNR} ${CDNUR} ${date_range_query} ORDER BY sale_return.id ASC ${limit_query}`;

            conn.query(getgstr1listingdata,(error,data) => {
                
                if (error || data?.length == 0) 
                {   
                    res?.send({ Status:400,Count:0,Message:'Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                
                data.forEach(element => {

                    element.sale_return_document_date = constant.moment(element.sale_return_document_date).format('YYYY-MM-DD');
                    element.sale_return_date = constant.moment(element.sale_return_date).format('YYYY-MM-DD');
                    element.state_name = element.state_name +`-${element.state_code}`;

                    if (element.sale_return_type_id == '38') 
                    {
                        element.return_type = 'Sale return';
                    }
                    if(element.sale_return_type_id == '98')
                    {
                        element.return_type = 'Credit Note';

                    }
                    if(element.sale_return_type_id == '97')
                    {
                        element.return_type = 'Debit Note';
                    }
                });
                
                var totalgstr1count = `SELECT COUNT(sale_return.id) as Count FROM erp_sale_return as sale_return LEFT JOIN erp_party as buyer ON buyer.id=sale_return.buyer_id LEFT JOIN erp_global as state ON state.id=buyer.state_id WHERE sale_return.user_id='${user_id}' AND sale_return.company_id<='${company_id}' AND sale_return.year_id<='${year_id}' AND sale_return.branch_id<='${branch_id}' AND sale_return.is_delete_status='0' ${CDNR} ${CDNUR} ${date_range_query} `;
            
                conn.query(totalgstr1count,(error,countdata) => {
                    
                    res?.send({ Status:200,Count:data?.length,TotalCount:countdata[0]?.Count,Message:'Data found',Data:data });
                    next();
                    return;
                });
            });
        }
        if (gst_type == 'hsn') 
        {
            var getgstr1listingdata = `SELECT material.material_hsn,material.material_name,measurement.unit_measurement_name,null as party_name,SUM(sale_child.sale_tax_invoice_child_meter) as total_qty,SUM(sale_child.sale_tax_invoice_child_total) as total_value,SUM(sale_child.sale_tax_invoice_child_taxable) as total_taxable,gst.gst_percentage,null as total_sgst,sale_child.sale_tax_invoice_child_sgst as total_sgst_amt,null as total_cgst,sale_child.sale_tax_invoice_child_cgst as total_cgst_amt,null as total_igst,sale_child.sale_tax_invoice_child_igst as total_igst_amt,'0' as sale_return_type_id,'sale' as type FROM erp_sale_tax_invoice as sale LEFT JOIN erp_sale_tax_invoice_child as sale_child ON sale_child.sale_tax_invoice_id=sale.id LEFT JOIN erp_quality as quality ON quality.id=sale_child.quality_id LEFT JOIN erp_material as material ON material.id=quality.material_id LEFT JOIN erp_unit_measurement as measurement ON measurement.id=sale_child.sale_tax_invoice_child_rate_per LEFT JOIN erp_gst as gst ON gst.id=material.gst_id WHERE sale.user_id='${user_id}' AND sale.company_id<='${company_id}' AND sale.year_id<='${year_id}' AND sale.branch_id<='${branch_id}' AND sale.is_delete_status='0' AND DATE(sale.sale_tax_invoice_entry_date)>='${from_date}' AND DATE(sale.sale_tax_invoice_entry_date)<='${to_date}' GROUP BY material.id UNION ALL SELECT material.material_hsn,material.material_name,measurement.unit_measurement_name,party.party_name,SUM(return_child.sale_return_child_qty) as total_qty,SUM(return_child.sale_return_child_amount) as total_value,SUM(return_child.sale_return_child_taxable) as total_taxable,gst.gst_percentage,null as total_sgst,return_child.sale_return_child_sgst as total_sgst_amt,null as total_cgst,return_child.sale_return_child_cgst as total_cgst_amt,null as total_igst,return_child.sale_return_child_igst as total_igst_amt,return_par.sale_return_type_id, null as type FROM erp_sale_return as return_par LEFT JOIN erp_sale_return_child as return_child ON return_child.sale_return_id=return_par.id LEFT JOIN erp_quality as quality ON quality.id=return_child.quality_id LEFT JOIN erp_party as party ON party.id=return_child.party_id LEFT JOIN erp_material as material ON material.id=quality.material_id LEFT JOIN erp_unit_measurement as measurement ON measurement.id=return_child.sale_return_child_rate_per LEFT JOIN erp_gst as gst ON gst.id=material.gst_id WHERE return_par.user_id='${user_id}' AND return_par.company_id<='${company_id}' AND return_par.year_id<='${year_id}' AND return_par.branch_id<='${branch_id}' AND return_par.is_delete_status='0' AND DATE(return_par.sale_return_entry_date) >='${from_date}' AND DATE(return_par.sale_return_entry_date) <='${to_date}' GROUP BY material.id`;

            conn.query(getgstr1listingdata,(error,hsndata) => {
                
                if (error || hsndata.length == 0) 
                {   
                    res?.send({ Status:400,Count:0,Message:'Hsn Data Not Found!!!!',Data:error });
                    next();
                    return;
                }
                
                hsndata.forEach(hsnvalue => {

                    if (Number(hsnvalue.sale_return_type_id) == 97) 
                    {
                        hsnvalue.type = 'sale debit note';
                    }
                    else if(Number(hsnvalue.sale_return_type_id) == 38)
                    {
                        hsnvalue.type = 'sale return';
                    }
                    else if (Number(hsnvalue.sale_return_type_id) == 98)
                    {
                        hsnvalue.type = 'sale credit note';
                    }
                    hsnvalue.sgst = (hsnvalue.gst_percentage/2);
                    hsnvalue.cgst = (hsnvalue.gst_percentage/2);
                    hsnvalue.igst = hsnvalue.gst_percentage;

                    hsnvalue.total_sgst = (hsnvalue.total_sgst + (hsnvalue.total_sgst_amt/100) * hsnvalue.total_taxable).toFixed(2);
                    hsnvalue.total_cgst = (hsnvalue.total_cgst + (hsnvalue.total_cgst_amt/100) * hsnvalue.total_taxable).toFixed(2);
                    hsnvalue.total_igst = (hsnvalue.total_igst + (hsnvalue.total_igst_amt/100) * hsnvalue.total_taxable).toFixed(2);
                });
                
                res?.send({ Status:200,Count:hsndata.length,Message:'Data found',Data:hsndata });
                next();
                return;
            });
        }
    },
};


export default AllGstr1Apis;
    
