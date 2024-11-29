
//--------------------------------------------------------------
// LOGIN & CONSTANT MODULES RELATED ROUTS //
import constant from '../Config/constant.js';
import AllloginApis from '../Login/login.js';
const { login, updateprofile, changepassword, loginstatus } = AllloginApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// DASHBOARD RELATED FUNCTIONS CALL //
import DashboardApi from '../Dashboard/dashboard.js';
const { getdashboardcountingdata, getdashboardchartdata } = DashboardApi;
//--------------------------------------------------------------

//--------------------------------------------------------------
// DAILY DAIRY COUNTING FUNCTIONS CALL //
import DailyDairyApi from '../Dashboard/dailyDairy.js';
const { getdailydairycountingdata } = DailyDairyApi;
//--------------------------------------------------------------

//--------------------------------------------------------------
// OUTSTANDING FUNCTIONS CALL //
import OutstandingApi from '../Dashboard/outstanding.js';
const { outstandingdata, outstandingallinvoicedata, outstandingchilddata } = OutstandingApi
//--------------------------------------------------------------

//--------------------------------------------------------------
// ACCOUNT HEAD MODULES FUNCTIONS CALL //
import AllAccountHeadApis from '../GroupMaster/AccountHead/account_head.js'
const { createaccounthead, allaccountheaddata, deleteaccountheaddata } = AllAccountHeadApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// DROP DOWN MODULES FUNCTIONS CALL //
import AllDropDownApis from '../AllDropDown/alldropdown.js';
const { yeardata, typedata, allaccountheaddropdowndata, statedata, allcategorydropdowndata, allpartybrokergroupdropdown, allpartybrokertransporterdropdown, allpartybrokerdropdown, allstatusdropdown, alltdsondropdown, allgstdropdown, allgodowndropdowndata, allmaterialdropdown, allbranddropdown, allqualitydropdown, allmeasurmentdropdown, allpurchaseinvoicedropdown, allpurchaseinvoicechilddatadropdown, allmillreceivechallandropdown, allbankdropdown, lastlfnumber, allqualitywisejoberratedropdown, allnotissuesalejoberlistdropdown, allinventoryreceivechallandropdown, allinventoryinvoicechilddatabypassingreceivechallandropdown, alljoberreceivechallandropdown, allsalechildchallandropdown, allsaleinvoicedropdown, companydata, getpartyqualitywiselastratefolddata, getpartytdsdata } = AllDropDownApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// USER MODULES FUNCTIONS CALL //
import AllUserApis from '../User/user.js';
const { createuser, getuserlistingdata } = AllUserApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// BRANCH MODULES FUNCTIONS CALL //
import AllBranchApis from '../GroupMaster/Branch/branch.js';
const { createbranch, allbranchdata, getbranchdetails, deletebranchdata } = AllBranchApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// CATEGORY MODULES FUNCTIONS CALL //
import AllCategoryApis from '../GroupMaster/Category/category.js';
const { createcategory, deletecategorydata } = AllCategoryApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// COMPANY MODULES FUNCTIONS CALL //
import AllCompanyApis from '../Company/company.js';
const { selectedyearcompanydata, createcompany, getcompanydetails, getloginusercompany, createcompanyyeardefault, createnextyearpartydata } = AllCompanyApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// GODOWN MODULES FUNCTIONS CALL //
import AllGodownApis from '../GroupMaster/Godown/godown.js';
const { creategodown, getgodowndetails, getgodownlistingdata, deletegodowndata } = AllGodownApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// GODOWN LEVEL MODULES FUNCTIONS CALL //
import AllGodownLevelApis from '../GroupMaster/GodownLevel/godown_level.js';
const { creategodownlevel, getgodownleveldetails, getgodownlevellistingdata } = AllGodownLevelApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// JOURNAL PURCHASE MODULES FUNCTIONS CALL //
import AllJournalPurchaseApis from '../Purchase/JournalPurchase/journal_purchase.js';
const { createjournalpurchase, getjournalpurchasedetails, getjournalpurchaselistingdata, deletejournalpurchasedata, deletejournalpurchasechilddata } = AllJournalPurchaseApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// PARTY BROKER MODULES FUNCTIONS CALL //
import AllPartyBrokerApis from '../Master/PartyBroker/party_broker.js';
const { createpartybroker, getpartybrokerdetails, getpartybrokerlistingdata, deletepartydata, mergeparty, getpartyandcompanydetails } = AllPartyBrokerApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// PARTY BROKER GROUP MODULES FUNCTIONS CALL //
import AllPartyBrokerGroupApis from '../GroupMaster/PartyBrokerGroup/party_broker_group.js';
const { createpartybrokergroup, allpartybrokergroupdata, deletepartybrokergroupdata } = AllPartyBrokerGroupApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// UNIT MEASUREMENT MODULES FUNCTIONS CALL //
import AllUnitOfMeasurementApis from '../GroupMaster/UnitOfMeasurement/unit_of_measurement.js';
const { createunitofmeasurement, getunitofmeasurementdetails, getunitofmeasurementlistingdata, deleteunitmeasurmentdata } = AllUnitOfMeasurementApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// BRAND MODULES FUNCTIONS CALL //
import AllBrandApis from '../Master/Brand/brand.js';
const { createbrand, getbrandlistingdata, deletebranddata } = AllBrandApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// MATERIAL MODULES FUNCTIONS CALL //
import AllMaterialApis from '../Master/Material/material.js';
const { creatematerial, getmateriallistingdata, deletematerialdata } = AllMaterialApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// QUALITY MODULES FUNCTIONS CALL //
import AllQualityApis from '../Master/Quality/quality.js';
const { createquality, getqualitylistingdata, deletequalitydata, getqualitydetails } = AllQualityApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// OPENING PURCHASE MODULES FUNCTIONS CALL //
import AllOpeningPurchaseApis from '../Purchase/OpeningPurchase/opening_purchase.js';
const { createopeningpurchase, getopeningpurchasedetails, getopeningpurchaselistingdata } = AllOpeningPurchaseApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// PURCHASE TAX INVOICE MODULES FUNCTIONS CALL //
import AllJournalTaxInvoiceApis from '../Purchase/PurchaseTaxInvoice/purchase_tax_invoice.js';
const { createpurchasetaxinvoice, getpurchasetaxinvoicedetails, getpurchasetaxinvoicelistingdata, deletepurchasetaxinvoicedata, deletepurchasetaxinvoicechilddata } = AllJournalTaxInvoiceApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// PURCHASE RETURN MODULES FUNCTIONS CALL //
import AllPurchaseReturnApis from '../Purchase/PurchaseReturn/purchase_return.js';
const { createpurchasereturn, getpurchasereturndetails, getpurchasereturnlistingdata, deletepurchasereturndata, deletepurchasereturnchilddata } = AllPurchaseReturnApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// REGISTER MODULES FUNCTIONS CALL //
import AllRegisterApis from '../Purchase/PurchaseRegister/register.js';
const { getregisterlistingdata, getpurchasereportlistingdata } = AllRegisterApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// REGISTER MODULES FUNCTIONS CALL //
import AllBrokerageApis from '../Purchase/Brokerage/brokerage.js';
const { getbrokeragelistingdata, getpurchaseoutstandinglistingdata } = AllBrokerageApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// GREY ISSUE MODULES FUNCTIONS CALL //
import AllGreyIssueApis from '../Mill/GreyIssue/greyissue.js';
const { creategreyissue, getgreyissuedetails, getgreyissuelistingdata, getgreyissuereportlistingdata, deletegreyissuedata } = AllGreyIssueApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// FINISH RECEVICE MODULES FUNCTIONS CALL //
import AllFinishReceiveApis from '../Mill/FinishReceive/finishreceive.js';
const { createfinishreceive, getfinishreceivedetails, getfinishreceivelistingdata, getfinishreceivereportlistingdata, deletemillreceivedata } = AllFinishReceiveApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// MILL TAX INVOICE & REPORT MODULES FUNCTIONS CALL //
import AllMillTaxInvoiceApis from '../Mill/MillTaxInvoice/milltaxinvoice.js';
const { createmilltaxinvoice, getmilltaxinvoicedetails, getmilltaxinvoicelistingdata, getmilltaxinvoicereportlistingdata, deletemilltaxinvoicedata, deletemilltaxinvoicechilddata } = AllMillTaxInvoiceApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// REPROCESS MODULES FUNCTIONS CALL //
import AllReProcessApis from '../Mill/ReProcess/reprocess.js';
const { createreprocess, getreprocesslistingdata, deletereprocessdata } = AllReProcessApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// MILL REGISTER MODULES FUNCTIONS CALL //
import AllMillRegisterApis from '../Mill/MillRegister/mill_register.js';
const { getmillregisterlistingdata } = AllMillRegisterApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// JOURNAL SALE MODULES FUNCTIONS CALL //
import AllJournalSaleApis from '../Sale/JournalSale/journal_sale.js';
const { createjournalsale, getjournalsaledetails, getjournalsalelistingdata, deletejournalsaledata, deletejournalsalechilddata } = AllJournalSaleApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// SALE JOBER ISSUE MODULES FUNCTIONS CALL //
import AllSaleJoberIssueApis from '../Sale/SaleJoberIssue/sale_jober_issue.js';
const { createsalejoberissue, getsalejoberissuedetails, getsalejoberissuelistingdata, deletesalejoberissuedata, getsalejoberissuereportlistingdata } = AllSaleJoberIssueApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// SALE JOBER RECEIVE MODULES FUNCTIONS CALL //
import AllSaleJoberReceiveApis from '../Sale/SaleJoberReceive/sale_jober_receive.js';
const { createsalejoberreceive, getsalejoberreceivedetails, getsalejoberreceivelistingdata, getsalejoberreceivereportlistingdata, deletesalejoberreceivedata } = AllSaleJoberReceiveApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// JOBER INVOICE MODULES FUNCTIONS CALL //
import AllJoberInvoiceApis from '../Sale/JoberInvoice/jober_invoice.js';
const { createjoberinvoice, getjoberinvoicedetails, getjoberinvoicelistingdata, getjoberinvoicereportlistingdata, deletejoberinvoicedata, deletejoberinvoicechilddata } = AllJoberInvoiceApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// SALE TAX INVOICE MODULES FUNCTIONS CALL //
import AllSaleTaxInvoiceApis from '../Sale/SaleTaxInvoice/sale_tax_invoice.js';
const { createsaletaxinvoice, updatesaletaxinvoice, getsaletaxinvoicedetails, getsaletaxinvoicelistingdata, getsaletaxinvoicereportlistingdata, deletesaletaxinvoicedata, deletesaletaxinvoicechilddata } = AllSaleTaxInvoiceApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// SALE RETURN MODULES FUNCTIONS CALL //
import AllSaleReturnApis from '../Sale/SaleReturn/salereturn.js';
const { createsalereturn, getsalereturndetails, getsalereturnlistingdata, deletesalereturndata, deletesalereturnchilddata } = AllSaleReturnApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// SALE REGISTER MODULES FUNCTIONS CALL //
import AllSaleRegisterApis from '../Sale/SaleRegister/saleregister.js';
const { getsaleregisterlistingdata, getsalereportlistingdata } = AllSaleRegisterApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// SALE BROKERAGE AND OUTSTANDING REPORT MODULES FUNCTIONS CALL //
import AllBrokerageAndSaleOutstandingApis from '../Sale/Brokerage/brokerage.js';
const { getsalebrokeragelistingdata, getsaleoutstandinglistingdata } = AllBrokerageAndSaleOutstandingApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// VOUCHER MODULES FUNCTIONS CALL //
import AllVoucherApis from '../Accounting/Voucher/voucher.js';
const { createvoucher, getvoucherdetails, getvoucherlistingdata, getpurchasesalemillinvoicedata, deletevoucherdata, deletevoucherchilddata, deletebankchequedata } = AllVoucherApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// SETTLEMENT MODULES FUNCTIONS CALL //
import AllSettlementApis from '../Accounting/Settlement/settlement.js';
const { getsettlementlistingdata, getunsettlementlistingdata, createsettlement } = AllSettlementApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// LEDGER MODULES FUNCTIONS CALL //
import AllLedgerApis from '../Accounting/Ledger/ledger.js';
const { getledgerlistingdata, getledgerchartdata, getledgerlistinglayerone, getledgerlistinglayertwo, getledgerlistinglayerthird } = AllLedgerApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// CASH & REGISTER MODULES FUNCTIONS CALL //
import AllCashApis from '../Accounting/CashAndCashRegister/cash.js';
const { getcashlistingdata, getcashregisterlistingdata } = AllCashApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// BANK & REGISTER MODULES FUNCTIONS CALL //
import AllBankApis from '../Accounting/Bank_BankRegisterAndBankReco/bank.js';
const { getbanklistingdata, getbankregisterlistingdata, getbankrecolistingdata, updatebankrecodate } = AllBankApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// INVENTORY MODULES FUNCTIONS CALL //
import AllInventoryApis from '../ValueAddition/Inventory/inventory.js';
const { createinventory, getinventorydetails, getinventorylistingdata, deleteinventorydata, deleteinventorychilddata } = AllInventoryApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// INVENTORY RECEIVE MODULES FUNCTIONS CALL //
import AllInventoryReceiveApis from '../ValueAddition/InventoryReceive/inventory_receive.js';
const { createinventoryreceive, getinventoryreceivelistingdata, getinventoryreceivereportlistingdata, getinventoryreceivedetails, deleteinventoryreceivedata } = AllInventoryReceiveApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// INVENTORY INVOICE MODULES FUNCTIONS CALL //
import AllInventoryInvoiceApis from '../ValueAddition/InventoryInvoice/inventory_invoice.js';
const { createinventoryinvoice, getinventoryinvoicedetails, getinventoryinvoicelistingdata, getinventoryinvoicereportlistingdata, deleteinventoryinvoicedata, deleteinventoryinvoicechilddata } = AllInventoryInvoiceApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// INVENTORY REGISTER MODULES FUNCTIONS CALL //
import AllInventoryRegisterApis from '../ValueAddition/InventoryRegister/inventory_register.js';
const { getinventoryregisterlistingdata } = AllInventoryRegisterApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// GST LISTING MODULES FUNCTIONS CALL //
import AllGstApis from '../Tax/Gst/gst.js';
const { gstdata, gstphase2data } = AllGstApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// GSTR1 LISTING MODULES FUNCTIONS CALL //
import AllGstr1Apis from '../Tax/Gstr1/gstr1.js';
const { getgstr1listingdata } = AllGstr1Apis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// GSTR2 LISTING MODULES FUNCTIONS CALL //
import AllGstr2Apis from '../Tax/Gstr2/gstr2.js';
const { getgstr2listingdata } = AllGstr2Apis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// GSTR3B MODULES FUNCTIONS CALL //
import AllGstr3bApis from '../Tax/Gstr3b/gstr3b.js';
const { gstr3bdata } = AllGstr3bApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// GSTR2 HELP LISTING MODULES FUNCTIONS CALL //
import AllGstr2HelpApis from '../Tax/Gstr2Help/gstr2_help.js';
const { getgstr2helplistingdata } = AllGstr2HelpApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// GSTR9 LISTING MODULES FUNCTIONS CALL //
import AllGstr9Apis from '../Tax/Gstr9/gstr9.js';
const { getgstr9listingdata } = AllGstr9Apis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// TDS STATEMENT LISTING MODULES FUNCTIONS CALL //
import AllTdsStatementApis from '../Tax/TdsStatement/tds_statement.js';
const { gettdsstatementlistingdata } = AllTdsStatementApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// ITC 04 LISTING MODULES FUNCTIONS CALL //
import AllItc04Apis from '../Tax/Itc04/itco4.js';
const { getitc04listingdata } = AllItc04Apis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// TDS RATE LISTING MODULES FUNCTIONS CALL //
import AllTdsRateApis from '../Tax/TdsRate/tds_rate.js';
const { createtdsrate } = AllTdsRateApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// DEPRECIATION RATE LISTING MODULES FUNCTIONS CALL //
import AllDepreciationRateApis from '../Tax/DepreciationRate/depreciation_rate.js';
const { getdepreciationratelistingdata, createdepreciationrate } = AllDepreciationRateApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// STOCK DETAILS LISTING MODULES FUNCTIONS CALL //
import AllStockDetailApis from '../Inventory/StockDetail/stock_detail.js';
const { getstockdetaillistingdata } = AllStockDetailApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// CA CORNER REPORT LISTING MODULES FUNCTIONS CALL //
import AllCaCornerApis from '../CaCorner/ca_corner.js';
const { traialbalancephase1reportdata, traialbalancephase2reportdata, traialbalancephase3reportdata, traialbalancephase4reportdata, profitandlossreportdata, balancesheetphase1portdata, balancesheetphase2portdata, balancesheetphase3portdata, auditdocumentphase1reportdata, auditdocumentphase2reportdata, auditdocumentphase3reportdata, auditdocumentphase4reportdata, auditdocumentphase5reportdata, auditdocumentphase6reportdata, setclosingstock } = AllCaCornerApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// PARTY BALANCE DATA LISTING MODULES FUNCTIONS CALL //
import AllPartyBalanceApis from '../Accounting/PartyBalance/party_balance.js';
const { getpartybalancelistingdata } = AllPartyBalanceApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// Alter Sql Query MODULES FUNCTIONS CALL //
import AlterQueryApis from '../Config/alter.js';
const { sqlquery } = AlterQueryApis;
//--------------------------------------------------------------


//--------------------------------------------------------------
// WEB AUTH FUNCTIONS CALL //
import AllWebAuthApis from '../Web-Auth/AllWebAuthApis.js';
const { getuserlistingdataweb } = AllWebAuthApis;
//--------------------------------------------------------------

//--------------------------------------------------------------
// CURRENCY FUNCTIONS CALL //
import Currency from '../Currency/Currency.js';
const { getcurrency } = Currency;
//--------------------------------------------------------------

//--------------------------------------------------------------
// WEB PURCHASE FUNCTIONS CALL //
import WebPurchase from '../Web Purchase/WebPurchase.js';
const { createwebpurchase, getpurchaselistingdata, deletepurchasedata, getsinglewebpurchase } = WebPurchase;
//--------------------------------------------------------------

//--------------------------------------------------------------
// WEB SALE FUNCTIONS CALL //
import WebSale from '../Web Sale/WebSale.js';
const { getsaleslistingdata } = WebSale;
//--------------------------------------------------------------

//--------------------------------------------------------------
// WEB PURCHASE FUNCTIONS CALL //
import Items from '../Items/Items.js';
const { getitemslist } = Items;
//--------------------------------------------------------------


// /**
// * @swagger
// * /login:
// *   post:
// *     description: Get all books
// *     responses:
// *       200:
// *         description: Success
// * 
// */


const router = constant.express.Router()

//--------------------------------------------------------------
// LOGIN MODULES RELATED ROUTS //
router.post("/login", login);
router.post("/updateprofile", updateprofile);
router.post("/changepassword", changepassword);
router.post("/loginstatus", loginstatus);
//--------------------------------------------------------------

//--------------------------------------------------------------
// DASHBOARD CHART RELATED ROUTS //
router.post("/getdashboardchartdata", getdashboardchartdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// DASHBOARD COUNTING RELATED ROUTS //
router.post("/getdashboardcountingdata", getdashboardcountingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// DAILY DAIRY COUNTING RELATED ROUTS //
router.post("/getdailydairycountingdata", getdailydairycountingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// Outstanding RELATED ROUTS //
router.post("/outstandingdata", outstandingdata);
router.post("/outstandingallinvoicedata", outstandingallinvoicedata);
router.post("/outstandingchilddata", outstandingchilddata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// ACCOUNT HEAD MODULES RELATED ROUTS //
router.post("/createaccounthead", createaccounthead);
router.post("/allaccountheaddata", allaccountheaddata);
router.post("/deleteaccountheaddata", deleteaccountheaddata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// DROP DOWN MODULES RELATED ROUTS //
router.post("/yeardata", yeardata);
router.post("/typedata", typedata);
router.post("/allaccountheaddropdowndata", allaccountheaddropdowndata);
router.post("/statedata", statedata);
router.post("/allcategorydropdowndata", allcategorydropdowndata);
router.post("/allpartybrokergroupdropdown", allpartybrokergroupdropdown);
router.post("/allpartybrokertransporterdropdown", allpartybrokertransporterdropdown);
router.post("/allpartybrokerdropdown", allpartybrokerdropdown);
router.post("/allstatusdropdown", allstatusdropdown);
router.post("/alltdsondropdown", alltdsondropdown);
router.post("/allgodowndropdowndata", allgodowndropdowndata);
router.post("/allgstdropdown", allgstdropdown);
router.post("/allmaterialdropdown", allmaterialdropdown);
router.post("/allbranddropdown", allbranddropdown);
router.post("/allqualitydropdown", allqualitydropdown);
router.post("/allmeasurmentdropdown", allmeasurmentdropdown);
router.post("/allpurchaseinvoicedropdown", allpurchaseinvoicedropdown);
router.post("/allpurchaseinvoicechilddatadropdown", allpurchaseinvoicechilddatadropdown);
router.post("/allmillreceivechallandropdown", allmillreceivechallandropdown);
router.post("/allbankdropdown", allbankdropdown);
router.post("/lastlfnumber", lastlfnumber);
router.post("/allqualitywisejoberratedropdown", allqualitywisejoberratedropdown);
router.post("/allnotissuesalejoberlistdropdown", allnotissuesalejoberlistdropdown);
router.post("/allinventoryreceivechallandropdown", allinventoryreceivechallandropdown);
router.post("/allinventoryinvoicechilddatabypassingreceivechallandropdown", allinventoryinvoicechilddatabypassingreceivechallandropdown);
router.post("/alljoberreceivechallandropdown", alljoberreceivechallandropdown);
router.post("/allsalechildchallandropdown", allsalechildchallandropdown);
router.post("/allsaleinvoicedropdown", allsaleinvoicedropdown);
router.post("/companydata", companydata);
router.post("/getpartyqualitywiselastratefolddata", getpartyqualitywiselastratefolddata);
router.post("/getpartytdsdata", getpartytdsdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// USER MODULES RELATED ROUTS //
router.post("/createuser", createuser);
router.post("/getuserlistingdata", getuserlistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// BRANCH MODULES RELATED ROUTS //
router.post("/createbranch", createbranch);
router.post("/allbranchdata", allbranchdata);
router.post("/getbranchdetails", getbranchdetails);
router.post("/deletebranchdata", deletebranchdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// CATEGORY MODULES RELATED ROUTS //
router.post("/createcategory", createcategory);
router.post("/deletecategorydata", deletecategorydata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// COMPANY MODULES RELATED ROUTS //
router.post("/createcompany", createcompany);
router.post("/selectedyearcompanydata", selectedyearcompanydata);
router.post("/getloginusercompany", getloginusercompany);
router.post("/getcompanydetails", getcompanydetails);
router.post("/createcompanyyeardefault", createcompanyyeardefault);
router.post("/createnextyearpartydata", createnextyearpartydata);


//--------------------------------------------------------------

//--------------------------------------------------------------
// GODOWN MODULES REALATED ROUTS //
router.post("/creategodown", creategodown);
router.post("/getgodowndetails", getgodowndetails);
router.post("/getgodownlistingdata", getgodownlistingdata);
router.post("/deletegodowndata", deletegodowndata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// GODOWN LEVEL MODULES REALATED ROUTS //
router.post("/creategodownlevel", creategodownlevel);
router.post("/getgodownleveldetails", getgodownleveldetails);
router.post("/getgodownlevellistingdata", getgodownlevellistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// JOURNAL PURCHASE MODULES REALATED ROUTS //
router.post("/createjournalpurchase", createjournalpurchase);
router.post("/getjournalpurchasedetails", getjournalpurchasedetails);
router.post("/getjournalpurchaselistingdata", getjournalpurchaselistingdata);
router.post("/deletejournalpurchasedata", deletejournalpurchasedata);
router.post("/deletejournalpurchasechilddata", deletejournalpurchasechilddata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// PARTY BROKER MODULES REALATED ROUTS //
router.post("/createpartybroker", createpartybroker);
router.post("/getpartybrokerdetails", getpartybrokerdetails);
router.post("/getpartybrokerlistingdata", getpartybrokerlistingdata);
router.post("/deletepartydata", deletepartydata);
router.post("/mergeparty", mergeparty);
router.post("/getpartyandcompanydetails", getpartyandcompanydetails);

//--------------------------------------------------------------

//--------------------------------------------------------------
// PARTY BROKER GROUP MODULES REALATED ROUTS //
router.post("/createpartybrokergroup", createpartybrokergroup);
router.post("/allpartybrokergroupdata", allpartybrokergroupdata);
router.post("/deletepartybrokergroupdata", deletepartybrokergroupdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// UNIT MEASUREMENT REALATED ROUTS //
router.post("/createunitofmeasurement", createunitofmeasurement);
router.post("/getunitofmeasurementdetails", getunitofmeasurementdetails);
router.post("/getunitofmeasurementlistingdata", getunitofmeasurementlistingdata);
router.post("/deleteunitmeasurmentdata", deleteunitmeasurmentdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// BRAND REALATED ROUTS //
router.post("/createbrand", createbrand);
router.post("/getbrandlistingdata", getbrandlistingdata);
router.post("/deletebranddata", deletebranddata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// MATERIAL REALATED ROUTS //
router.post("/creatematerial", creatematerial);
router.post("/getmateriallistingdata", getmateriallistingdata);
router.post("/deletematerialdata", deletematerialdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// QUALITY REALATED ROUTS //
router.post("/createquality", createquality);
router.post("/getqualitylistingdata", getqualitylistingdata);
router.post("/deletequalitydata", deletequalitydata);
router.post("/getqualitydetails", getqualitydetails);

//--------------------------------------------------------------

//--------------------------------------------------------------
// OPENING PURCHASE REALATED ROUTS //
router.post("/createopeningpurchase", createopeningpurchase);
router.post("/getopeningpurchasedetails", getopeningpurchasedetails);
router.post("/getopeningpurchaselistingdata", getopeningpurchaselistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// PURCHASE TAX INVOICE REALATED ROUTS //
router.post("/createpurchasetaxinvoice", createpurchasetaxinvoice);
router.post("/getpurchasetaxinvoicedetails", getpurchasetaxinvoicedetails);
router.post("/getpurchasetaxinvoicelistingdata", getpurchasetaxinvoicelistingdata);
router.post("/deletepurchasetaxinvoicedata", deletepurchasetaxinvoicedata);
router.post("/deletepurchasetaxinvoicechilddata", deletepurchasetaxinvoicechilddata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// PURCHASE RETURN REALATED ROUTS //
router.post("/createpurchasereturn", createpurchasereturn);
router.post("/getpurchasereturndetails", getpurchasereturndetails);
router.post("/getpurchasereturnlistingdata", getpurchasereturnlistingdata);
router.post("/deletepurchasereturndata", deletepurchasereturndata);
router.post("/deletepurchasereturnchilddata", deletepurchasereturnchilddata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// PURCHASE RETURN REALATED ROUTS //
router.post("/getregisterlistingdata", getregisterlistingdata);
router.post("/getpurchasereportlistingdata", getpurchasereportlistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// BROKERAGE REALATED ROUTS //
router.post("/getbrokeragelistingdata", getbrokeragelistingdata);
router.post("/getpurchaseoutstandinglistingdata", getpurchaseoutstandinglistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// GREY ISSUE REALATED ROUTS //
router.post("/creategreyissue", creategreyissue);
router.post("/getgreyissuedetails", getgreyissuedetails);
router.post("/getgreyissuelistingdata", getgreyissuelistingdata);
router.post("/getgreyissuereportlistingdata", getgreyissuereportlistingdata);
router.post("/deletegreyissuedata", deletegreyissuedata);

//--------------------------------------------------------------

//--------------------------------------------------------------
// FINISH RECEVICE REALATED ROUTS //
router.post("/createfinishreceive", createfinishreceive);
router.post("/getfinishreceivedetails", getfinishreceivedetails);
router.post("/getfinishreceivelistingdata", getfinishreceivelistingdata);
router.post("/getfinishreceivereportlistingdata", getfinishreceivereportlistingdata);
router.post("/deletemillreceivedata", deletemillreceivedata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// MILL TAX INVOICE & REPORT REALATED ROUTS //
router.post("/createmilltaxinvoice", createmilltaxinvoice);
router.post("/getmilltaxinvoicedetails", getmilltaxinvoicedetails);
router.post("/getmilltaxinvoicelistingdata", getmilltaxinvoicelistingdata);
router.post("/getmilltaxinvoicereportlistingdata", getmilltaxinvoicereportlistingdata);
router.post("/deletemilltaxinvoicedata", deletemilltaxinvoicedata);
router.post("/deletemilltaxinvoicechilddata", deletemilltaxinvoicechilddata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// REPROCESS REALATED ROUTS //
router.post("/createreprocess", createreprocess);
router.post("/getreprocesslistingdata", getreprocesslistingdata);
router.post("/deletereprocessdata", deletereprocessdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// MILL REGISTER REALATED ROUTS //
router.post("/getmillregisterlistingdata", getmillregisterlistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// JOURNAL SALE REALATED ROUTS //
router.post("/createjournalsale", createjournalsale);
router.post("/getjournalsaledetails", getjournalsaledetails);
router.post("/getjournalsalelistingdata", getjournalsalelistingdata);
router.post("/deletejournalsaledata", deletejournalsaledata);
router.post("/deletejournalsalechilddata", deletejournalsalechilddata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// SALE ISSUE REALATED ROUTS //
router.post("/createsalejoberissue", createsalejoberissue);
router.post("/getsalejoberissuedetails", getsalejoberissuedetails);
router.post("/getsalejoberissuelistingdata", getsalejoberissuelistingdata);
router.post("/getsalejoberissuereportlistingdata", getsalejoberissuereportlistingdata);
router.post("/deletesalejoberissuedata", deletesalejoberissuedata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// SALE JOBER RECEIVE REALATED ROUTS //
router.post("/createsalejoberreceive", createsalejoberreceive);
router.post("/getsalejoberreceivedetails", getsalejoberreceivedetails);
router.post("/getsalejoberreceivelistingdata", getsalejoberreceivelistingdata);
router.post("/getsalejoberreceivereportlistingdata", getsalejoberreceivereportlistingdata);
router.post("/deletesalejoberreceivedata", deletesalejoberreceivedata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// JOBER INVOICE REALATED ROUTS //
router.post("/createjoberinvoice", createjoberinvoice);
router.post("/getjoberinvoicedetails", getjoberinvoicedetails);
router.post("/getjoberinvoicelistingdata", getjoberinvoicelistingdata);
router.post("/getjoberinvoicereportlistingdata", getjoberinvoicereportlistingdata);
router.post("/deletejoberinvoicedata", deletejoberinvoicedata);
router.post("/deletejoberinvoicechilddata", deletejoberinvoicechilddata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// SALE TAX INVOICE REALATED ROUTS //
router.post("/createsaletaxinvoice", createsaletaxinvoice);
router.post("/updatesaletaxinvoice", updatesaletaxinvoice);
router.post("/getsaletaxinvoicedetails", getsaletaxinvoicedetails);
router.post("/getsaletaxinvoicelistingdata", getsaletaxinvoicelistingdata);
router.post("/getsaletaxinvoicereportlistingdata", getsaletaxinvoicereportlistingdata);
router.post("/deletesaletaxinvoicedata", deletesaletaxinvoicedata);
router.post("/deletesaletaxinvoicechilddata", deletesaletaxinvoicechilddata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// SALE RETURN REALATED ROUTS //
router.post("/createsalereturn", createsalereturn);
router.post("/getsalereturndetails", getsalereturndetails);
router.post("/getsalereturnlistingdata", getsalereturnlistingdata);
router.post("/deletesalereturndata", deletesalereturndata);
router.post("/deletesalereturnchilddata", deletesalereturnchilddata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// SALE REGISTER REALATED ROUTS //
router.post("/getsaleregisterlistingdata", getsaleregisterlistingdata);
router.post("/getsalereportlistingdata", getsalereportlistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// SALE BROKERAGE AND OUTSTANDING REPORT REALATED ROUTS //
router.post("/getsalebrokeragelistingdata", getsalebrokeragelistingdata);
router.post("/getsaleoutstandinglistingdata", getsaleoutstandinglistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// VOUCHER REALATED ROUTS //
router.post("/createvoucher", createvoucher);
router.post("/getvoucherdetails", getvoucherdetails);
router.post("/getvoucherlistingdata", getvoucherlistingdata);
router.post("/getpurchasesalemillinvoicedata", getpurchasesalemillinvoicedata);
router.post("/deletevoucherdata", deletevoucherdata);
router.post("/deletevoucherchilddata", deletevoucherchilddata);
router.post("/deletebankchequedata", deletebankchequedata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// SETTLEMENT REALATED ROUTS //
router.post("/getsettlementlistingdata", getsettlementlistingdata);
router.post("/getunsettlementlistingdata", getunsettlementlistingdata);
router.post("/createsettlement", createsettlement);
//--------------------------------------------------------------

//--------------------------------------------------------------
// LEDGER REALATED ROUTS //
router.post("/getledgerlistingdata", getledgerlistingdata);
router.post("/getledgerlistinglayerone", getledgerlistinglayerone);
router.post("/getledgerlistinglayertwo", getledgerlistinglayertwo);
router.post("/getledgerlistinglayerthird", getledgerlistinglayerthird);
router.post("/getledgerchartdata", getledgerchartdata);

//--------------------------------------------------------------

//--------------------------------------------------------------
// CASH & REGISTER REALATED ROUTS //
router.post("/getcashlistingdata", getcashlistingdata);
router.post("/getcashregisterlistingdata", getcashregisterlistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// Bank & REGISTER & REco REALATED ROUTS //
router.post("/getbanklistingdata", getbanklistingdata);
router.post("/getbankregisterlistingdata", getbankregisterlistingdata);
router.post("/getbankrecolistingdata", getbankrecolistingdata);
router.post("/updatebankrecodate", updatebankrecodate);
//--------------------------------------------------------------

//--------------------------------------------------------------
// INVENTORY REALATED ROUTS //
router.post("/createinventory", createinventory);
router.post("/getinventorydetails", getinventorydetails);
router.post("/getinventorylistingdata", getinventorylistingdata);
router.post("/deleteinventorydata", deleteinventorydata);
router.post("/deleteinventorychilddata", deleteinventorychilddata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// INVENTORY RECEIVE REALATED ROUTS //
router.post("/createinventoryreceive", createinventoryreceive);
router.post("/getinventoryreceivelistingdata", getinventoryreceivelistingdata);
router.post("/getinventoryreceivereportlistingdata", getinventoryreceivereportlistingdata);
router.post("/getinventoryreceivedetails", getinventoryreceivedetails);
router.post("/deleteinventoryreceivedata", deleteinventoryreceivedata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// INVENTORY INVOICE REALATED ROUTS //
router.post("/createinventoryinvoice", createinventoryinvoice);
router.post("/getinventoryinvoicedetails", getinventoryinvoicedetails);
router.post("/getinventoryinvoicelistingdata", getinventoryinvoicelistingdata);
router.post("/getinventoryinvoicereportlistingdata", getinventoryinvoicereportlistingdata);
router.post("/deleteinventoryinvoicedata", deleteinventoryinvoicedata);
router.post("/deleteinventoryinvoicechilddata", deleteinventoryinvoicechilddata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// INVENTORY REGISTER REALATED ROUTS //
router.post("/getinventoryregisterlistingdata", getinventoryregisterlistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// GST LISTING REALATED ROUTS //
router.post("/gstdata", gstdata);
router.post("/gstphase2data", gstphase2data);
//--------------------------------------------------------------

//--------------------------------------------------------------
// GSTR1 LISTING REALATED ROUTS //
router.post("/getgstr1listingdata", getgstr1listingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// GSTR2 LISTING REALATED ROUTS //
router.post("/getgstr2listingdata", getgstr2listingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// GSTR3B LISTING REALATED ROUTS //
router.post("/gstr3bdata", gstr3bdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// GSTR2 HELP LISTING REALATED ROUTS //
router.post("/getgstr2helplistingdata", getgstr2helplistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// TDS STATEMENT HELP LISTING REALATED ROUTS //
router.post("/gettdsstatementlistingdata", gettdsstatementlistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// ITC 04 HELP LISTING REALATED ROUTS //
router.post("/getitc04listingdata", getitc04listingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// GSTR9 LISTING REALATED ROUTS //
router.post("/getgstr9listingdata", getgstr9listingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// DEPRECIATION RATE LISTING REALATED ROUTS //
router.post("/getdepreciationratelistingdata", getdepreciationratelistingdata);
router.post("/createdepreciationrate", createdepreciationrate);
//--------------------------------------------------------------

//--------------------------------------------------------------
// TDS RATE LISTING REALATED ROUTS //
router.post("/createtdsrate", createtdsrate);
//--------------------------------------------------------------

//--------------------------------------------------------------
// STOCK DETAILS LISTING REALATED ROUTS //
router.post("/getstockdetaillistingdata", getstockdetaillistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// CA CORNER REPORT LISTING REALATED ROUTS //
router.post("/traialbalancephase1reportdata", traialbalancephase1reportdata);
router.post("/traialbalancephase2reportdata", traialbalancephase2reportdata);
router.post("/traialbalancephase3reportdata", traialbalancephase3reportdata);
router.post("/traialbalancephase4reportdata", traialbalancephase4reportdata);
router.post("/profitandlossreportdata", profitandlossreportdata);
router.post("/balancesheetphase1portdata", balancesheetphase1portdata);
router.post("/balancesheetphase2portdata", balancesheetphase2portdata);
router.post("/balancesheetphase3portdata", balancesheetphase3portdata);
router.post("/auditdocumentphase1reportdata", auditdocumentphase1reportdata);
router.post("/auditdocumentphase2reportdata", auditdocumentphase2reportdata);
router.post("/auditdocumentphase3reportdata", auditdocumentphase3reportdata);
router.post("/auditdocumentphase4reportdata", auditdocumentphase4reportdata);
router.post("/auditdocumentphase5reportdata", auditdocumentphase5reportdata);
router.post("/auditdocumentphase6reportdata", auditdocumentphase6reportdata);
router.post("/setclosingstock", setclosingstock);

//--------------------------------------------------------------

//--------------------------------------------------------------
// PARTY BALANCE REALATED ROUTS //
router.post("/getpartybalancelistingdata", getpartybalancelistingdata);
//--------------------------------------------------------------


//--------------------------------------------------------------
// alter sql query REALATED ROUTS //
router.post("/sqlquery", sqlquery);
//--------------------------------------------------------------


//--------------------------------------------------------------
// WEB USER AUTH MODULES RELATED ROUTS //
router.post("/web-auth", getuserlistingdataweb);
//--------------------------------------------------------------

//--------------------------------------------------------------
// CURRENCY MODULES RELATED ROUTS //
router.post("/getcurrency", getcurrency);
//--------------------------------------------------------------

//--------------------------------------------------------------
// WEB PURCHASE MODULES RELATED ROUTS //
router.post("/createwebpurchase", createwebpurchase);
router.post("/getpurchaselistingdata", getpurchaselistingdata);
router.post("/deletepurchasedata", deletepurchasedata);
router.post("/getsinglewebpurchase", getsinglewebpurchase);
//--------------------------------------------------------------

// WEB PURCHASE MODULES RELATED ROUTS //
router.post("/getsaleslistingdata", getsaleslistingdata);
//--------------------------------------------------------------

//--------------------------------------------------------------
// CURRENCY MODULES RELATED ROUTS //
router.post("/getitemslist", getitemslist);
//--------------------------------------------------------------


export default router;