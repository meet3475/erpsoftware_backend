-- MySQL dump 10.13  Distrib 8.0.32, for Linux (x86_64)
--
-- Host: localhost    Database: jsonpmg5_erp
-- ------------------------------------------------------
-- Server version	8.0.32-0ubuntu0.20.04.2

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `erp_account_head`
--

DROP TABLE IF EXISTS `erp_account_head`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_account_head` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `account_head_id` int NOT NULL DEFAULT '0',
  `account_head_name` varchar(255) DEFAULT NULL,
  `account_head_short_name` varchar(255) DEFAULT NULL,
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `account_head_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `account_head_entry_date` datetime DEFAULT NULL,
  `account_head_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `account_head_id` (`account_head_id`)
) ENGINE=InnoDB AUTO_INCREMENT=135 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_account_head`
--

LOCK TABLES `erp_account_head` WRITE;
/*!40000 ALTER TABLE `erp_account_head` DISABLE KEYS */;
INSERT INTO `erp_account_head` VALUES (1,0,0,'capital account','capi','0','active',NULL,NULL),(2,0,0,'current assets','cura','0','active',NULL,NULL),(3,0,0,'current liabilities12','curl','0','active',NULL,'2022-11-26 10:32:59'),(4,0,0,'direct expenses','dire','0','active',NULL,NULL),(5,0,0,'direct income','diri','0','active',NULL,NULL),(6,0,0,'fixed assets','fixa','0','active',NULL,NULL),(7,0,0,'indirect expenses','inde','0','active',NULL,NULL),(8,0,0,'indirect income','indi','0','active',NULL,NULL),(9,0,0,'investments','inve','0','active',NULL,NULL),(10,0,0,'loans (liability)','loal','0','active',NULL,NULL),(11,0,0,'miscellaneous expenses ( asset )','mise','0','active',NULL,NULL),(12,0,0,'purchase account','purchase','0','active',NULL,NULL),(13,0,0,'sales account','sales','0','active',NULL,NULL),(14,0,27,'suspense account','susa','0','active',NULL,NULL),(15,0,0,'branch/divisions','brad','0','active',NULL,NULL),(16,0,2,'bank accounts','bank','0','active',NULL,NULL),(17,0,10,'bank od accounts','bankod','0','active',NULL,NULL),(18,0,2,'cash-in hand','cash','0','active',NULL,NULL),(19,0,2,'deposits (asset)','depa','0','active',NULL,NULL),(20,0,3,'duties and taxes','dutt','0','active',NULL,NULL),(21,0,2,'loans & advances (asset)','loaa','0','active',NULL,NULL),(22,0,3,'provisions','prov','0','active',NULL,NULL),(23,0,0,'reserves and surplus','ress','0','active',NULL,NULL),(24,0,10,'secured loans','secl','0','active',NULL,NULL),(25,0,2,'stock-in-hand','stock','0','active',NULL,NULL),(26,0,3,'sundry creditors','sunc','0','active',NULL,NULL),(27,0,2,'sundry debtors','sund','0','active',NULL,NULL),(28,0,10,'unsecured loans','unsl','0','active',NULL,NULL),(29,0,27,'buyer','buyer','0','active',NULL,NULL),(30,0,26,'supplier','supplier','0','active',NULL,NULL),(31,0,3,'broker','broker','0','active',NULL,NULL),(32,0,4,'discount allowed','discountallowed','0','active',NULL,NULL),(33,0,5,'discount received','discountreceived','0','active',NULL,NULL),(34,0,29,'grey buyer','grb','0','active',NULL,NULL),(35,0,29,'finish grey buyer','fig','0','active',NULL,NULL),(36,0,4,'insurance','insurance','0','active',NULL,NULL),(37,0,12,'tax invoice','purchasetaxinvoice','0','active',NULL,NULL),(38,0,13,'sales return','salesreturn','0','active',NULL,NULL),(39,0,12,'purchase return','purchasereturn','0','active',NULL,NULL),(40,0,4,'rounding off','rounding','0','active',NULL,NULL),(41,0,4,'freight','freight','0','active',NULL,NULL),(42,0,3,'tds','tds','0','active',NULL,NULL),(43,0,2,'cheque in hand','chequeinhand','0','active',NULL,NULL),(44,0,4,'employees salaries','employees','0','active',NULL,NULL),(45,0,0,'trading account','tradingaccount','0','active',NULL,NULL),(46,0,23,'profit & loss ac','profitloss','0','active',NULL,NULL),(47,0,0,'opening stock','openingstock','0','active',NULL,NULL),(48,0,0,'depreciation','depreciation','0','active',NULL,NULL),(49,0,20,'sgst','sgst','0','active',NULL,NULL),(50,0,20,'cgst','cgst','0','active',NULL,NULL),(51,0,20,'igst','igst','0','active',NULL,NULL),(52,0,39,'purchase return','pr','0','active',NULL,NULL),(53,0,38,'sales return','sr','0','active',NULL,NULL),(54,0,13,'tax invoice','gsttaxinvoice','0','active',NULL,NULL),(55,0,13,'bill of supply','billofsupply','0','active',NULL,NULL),(56,0,12,'tax invoice','gstpurtaxinvoice','0','active',NULL,NULL),(57,0,12,'bill of supply','billpurofsupply','0','active',NULL,NULL),(58,0,5,'freightless','freightless','0','active',NULL,NULL),(59,0,3,'sgst payble','sgstpayble','0','active',NULL,NULL),(60,0,3,'cgst payble','cgstpayble','0','active',NULL,NULL),(61,0,3,'igst payble','igstpayble','0','active',NULL,NULL),(62,0,2,'sgst receivable','sgstreceivable','0','active',NULL,NULL),(63,0,2,'cgst receivable','cgstreceivable','0','active',NULL,NULL),(64,0,2,'igst receivable','igstreceivable','0','active',NULL,NULL),(65,0,3,'interim sgst payble','interimsgstpayble','0','active',NULL,NULL),(66,0,3,'interim cgst payble','interimcgstpayble','0','active',NULL,NULL),(67,0,3,'interim igst payble','interimigstpayble','0','active',NULL,NULL),(68,0,2,'interim sgst receivable','interimsgstreceivable','0','active',NULL,NULL),(69,0,2,'interim cgst receivable','interimcgstreceivable','0','active',NULL,NULL),(70,0,2,'interim igst receivable','interimigstreceivable','0','active',NULL,NULL),(71,0,13,'invoice','salesinvoice','0','active',NULL,NULL),(72,0,12,'invoice','purchaseinvoice','0','active',NULL,NULL),(73,0,26,'mill','mill','0','active',NULL,NULL),(74,0,27,'processor','processor','0','active',NULL,NULL),(75,0,82,'transporter','transporter','0','active',NULL,NULL),(76,0,30,'grey','suppliergrey','0','active',NULL,NULL),(77,0,30,'creditors','suppliercreditors','0','active',NULL,NULL),(78,0,30,'job work','supplierjobwork','0','active',NULL,NULL),(79,0,12,'purchase journal','purchasejournal','0','active',NULL,NULL),(80,0,13,'sales journal','salesjournal','0','active',NULL,NULL),(81,0,26,'supplierothers','supplierothers','0','active',NULL,NULL),(82,0,3,'creditors others','creditors others','0','active',NULL,NULL),(83,0,3,'creditors (broker)','creditors (broker)','0','active',NULL,NULL),(84,0,3,'creditors (insentive)','creditors (insentive)','0','active',NULL,NULL),(85,0,3,'creditors (expenses)','creditors (expenses)','0','active',NULL,NULL),(86,0,3,'goods & services tax','goods & services tax','0','active',NULL,NULL),(87,0,3,'goods & servicetax(pali)','goods & servicetax(pali)','0','active',NULL,NULL),(88,0,12,'value add','valueadd','0','active',NULL,NULL),(89,0,12,'mill invoice','millinvoice','0','active',NULL,NULL),(90,0,4,'valueadd invoice','valueaddinvoice','0','active',NULL,'2022-11-09 11:58:24'),(91,0,3,'gstpayable','gsttaxpayable','0','active',NULL,NULL),(92,0,20,'tcsreceivable','tcsreceivable','0','active',NULL,NULL),(93,0,4,'salary exp.','salaryexp.','0','active',NULL,NULL),(94,0,26,'mill master','millmaster','0','active',NULL,NULL),(95,0,12,'credit note','purchasecreditnote','0','active',NULL,NULL),(96,0,12,'debit note','purchasedebitnote','0','active',NULL,NULL),(97,0,12,'debit note','saledebitnote','0','active',NULL,NULL),(98,0,12,'credit note','salecreditnote','0','active',NULL,NULL),(121,4,0,'daily expense','daex','0','active','2022-11-19 01:00:26','2022-11-28 10:58:47'),(122,4,7,'office daily expense','daex','0','active','2022-11-19 01:00:58','2022-11-28 10:59:05'),(123,4,15,'xyzdemo add','xyz','0','active','2022-11-19 03:31:26','2022-11-19 03:31:26'),(124,4,0,'','','0','active','2022-11-21 11:30:54','2022-11-21 11:30:54'),(125,4,0,'delete','delete','0','active','2022-11-21 06:14:25','2022-11-21 07:15:14'),(126,4,0,'delete','delete','1','active','2022-11-21 06:15:14','2022-11-21 07:41:18'),(127,4,55,'demo ah','demoah','0','active','2022-11-23 08:47:11','2022-11-23 08:47:11'),(128,4,17,'demo purpose','temo','1','active','2022-11-24 12:11:54','2022-11-25 05:49:55'),(129,4,55,'master ac1','achead','0','active','2022-11-26 05:15:56','2022-11-26 05:16:21'),(130,4,0,'demofgfgf','degfgfg','0','active','2022-11-08 17:04:01','2022-11-08 17:04:01'),(131,4,0,'demofgfgf','degfgfg','0','active','2022-11-08 17:04:01','2022-11-08 17:04:01'),(132,4,0,'demo','de','0','active','2022-11-08 17:04:01','2022-11-08 17:04:01'),(133,4,0,'de','de','0','active','2022-11-08 17:04:01','2022-11-08 17:04:01'),(134,4,0,'delete111','delete','0','active','2022-11-28 04:12:35','2022-11-28 04:12:46');
/*!40000 ALTER TABLE `erp_account_head` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_activity_log`
--

DROP TABLE IF EXISTS `erp_activity_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_activity_log` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `type` enum('administrator','admin','subadmin','vendor','customer','manager','client','student','user','subscriber','executive') DEFAULT NULL,
  `description` text,
  `page` varchar(100) DEFAULT NULL,
  `activity_log_entry_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `project_id` (`user_id`),
  KEY `company_id` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=428 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_activity_log`
--

LOCK TABLES `erp_activity_log` WRITE;
/*!40000 ALTER TABLE `erp_activity_log` DISABLE KEYS */;
INSERT INTO `erp_activity_log` VALUES (1,4,0,'user','Login With This Device ID undefined ','login','2023-03-25 10:04:02'),(2,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 10:26:18'),(3,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 10:38:05'),(4,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 10:42:18'),(5,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 10:42:18'),(6,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 10:42:18'),(7,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 10:59:43'),(8,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 11:01:29'),(9,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 11:04:41'),(10,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 11:06:30'),(11,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 11:07:25'),(12,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 11:07:25'),(13,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 11:07:25'),(14,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 11:07:25'),(15,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 11:16:11'),(16,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 11:17:33'),(17,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 11:19:18'),(18,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 11:19:18'),(19,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 11:23:37'),(20,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 11:25:32'),(21,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 11:27:18'),(22,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 11:27:18'),(23,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 11:46:05'),(24,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 11:48:18'),(25,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 11:49:32'),(26,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 11:49:32'),(27,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 11:57:20'),(28,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 11:58:56'),(29,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 11:58:56'),(30,4,0,'user','journal sale Updated With This Device ID undefined ','journal sale','2023-03-25 11:59:37'),(31,4,0,'user','journal sale Child Updated With This Device ID undefined ','journal sale Child','2023-03-25 11:59:37'),(32,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 12:01:33'),(33,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 12:02:30'),(34,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 12:04:54'),(35,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 12:04:54'),(36,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 12:06:02'),(37,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 12:06:55'),(38,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 12:08:33'),(39,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 12:11:28'),(40,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 12:11:28'),(41,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 12:11:28'),(42,4,0,'user','Login With This Device ID undefined ','login','2023-03-25 01:28:16'),(43,4,0,'user','Login With This Device ID undefined ','login','2023-03-25 02:08:25'),(44,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 02:12:19'),(45,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 02:14:10'),(46,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 02:15:01'),(47,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 02:15:01'),(48,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 02:17:28'),(49,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 02:20:41'),(50,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 02:22:09'),(51,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 02:22:09'),(52,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 02:22:09'),(53,4,0,'user','Login With This Device ID undefined ','login','2023-03-25 02:23:12'),(54,4,0,'user','journal sale Updated With This Device ID undefined ','journal sale','2023-03-25 02:23:17'),(55,4,0,'user','journal sale Child Updated With This Device ID undefined ','journal sale Child','2023-03-25 02:23:17'),(56,4,0,'user','journal sale Child Updated With This Device ID undefined ','journal sale Child','2023-03-25 02:23:17'),(57,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 02:24:26'),(58,4,0,'user','Login With This Device ID undefined ','login','2023-03-25 02:24:32'),(59,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 02:25:34'),(60,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 02:25:40'),(61,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 02:25:40'),(62,4,0,'user','Purchase Tax Invoice Created With This Device ID undefined ','Purchase Tax Invoice','2023-03-25 02:26:01'),(63,4,0,'user','Purchase Tax Invoice Child Created With This Device ID undefined ','Purchase Tax Invoice Child','2023-03-25 02:26:01'),(64,4,0,'user','voucher Created With This Device ID undefined ','voucher','2023-03-25 02:26:01'),(65,4,0,'user','grey issue Created With This Device ID undefined ','grey issue','2023-03-25 02:26:01'),(66,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 02:27:35'),(67,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 02:28:09'),(68,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 02:30:35'),(69,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 02:30:35'),(70,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 02:49:45'),(71,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 02:50:47'),(72,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 02:50:47'),(73,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 02:51:23'),(74,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 02:55:10'),(75,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 02:56:58'),(76,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 02:56:58'),(77,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-25 02:57:06'),(78,4,0,'user','Login With This Device ID undefined ','login','2023-03-25 02:59:04'),(79,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 02:59:40'),(80,4,0,'user','Quality Updated With This Device ID undefined ','Quality','2023-03-25 03:00:09'),(81,4,0,'user','Quality Updated With This Device ID undefined ','Quality','2023-03-25 03:00:16'),(82,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-25 03:00:38'),(83,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 03:01:02'),(84,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 03:01:02'),(85,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 03:01:25'),(86,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-25 03:01:48'),(87,4,0,'user','sale jober issue Deleted With This Device ID undefined ','sale jober issue','2023-03-25 03:02:03'),(88,4,0,'user','sale jober issue Deleted With This Device ID undefined ','sale jober issue','2023-03-25 03:02:10'),(89,4,0,'user','Quality Updated With This Device ID undefined ','Quality','2023-03-25 03:02:20'),(90,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 03:04:58'),(91,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 03:04:58'),(92,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 03:05:59'),(93,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 03:06:30'),(94,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 03:06:51'),(95,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 03:11:34'),(96,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 03:11:34'),(97,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 03:11:34'),(98,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 03:26:22'),(99,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 03:26:22'),(100,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 03:27:27'),(101,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 03:27:49'),(102,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 03:29:48'),(103,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 03:29:48'),(104,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 03:31:04'),(105,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 03:31:25'),(106,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 03:32:20'),(107,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 03:32:20'),(108,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-25 03:34:56'),(109,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-25 03:35:21'),(110,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-25 03:36:23'),(111,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-25 03:36:23'),(112,4,0,'user','Login With This Device ID undefined ','login','2023-03-26 05:44:50'),(113,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-26 05:56:45'),(114,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-26 05:57:38'),(115,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-26 05:57:38'),(116,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-26 06:00:31'),(117,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-26 06:01:28'),(118,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-26 06:03:03'),(119,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-26 06:03:03'),(120,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-26 06:06:45'),(121,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-26 06:08:09'),(122,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-26 06:08:39'),(123,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-26 06:10:52'),(124,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-26 06:12:53'),(125,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-26 06:12:53'),(126,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-26 06:12:53'),(127,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-26 06:14:39'),(128,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-26 06:17:04'),(129,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-26 06:17:04'),(130,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-26 06:19:02'),(131,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-26 06:19:54'),(132,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-26 06:21:48'),(133,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-26 06:21:48'),(134,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-26 06:30:24'),(135,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-26 06:32:05'),(136,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-26 06:32:05'),(137,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-26 06:32:50'),(138,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-26 06:33:55'),(139,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-26 06:33:55'),(140,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-26 06:35:01'),(141,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-26 06:35:34'),(142,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-26 06:36:40'),(143,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-26 06:36:40'),(144,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-27 05:04:09'),(145,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-27 05:04:57'),(146,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-27 05:04:57'),(147,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-27 05:10:22'),(148,4,0,'user','Quality Updated With This Device ID undefined ','Quality','2023-03-27 05:11:26'),(149,4,0,'user','Login With This Device ID undefined ','login','2023-03-27 05:11:54'),(150,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-27 05:12:15'),(151,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-27 05:12:15'),(152,4,0,'user','sale tax invoice Created With This Device ID undefined ','sale tax invoice','2023-03-27 05:14:24'),(153,4,0,'user','sale tax invoice Child Created With This Device ID undefined ','sale tax invoice Child','2023-03-27 05:14:24'),(154,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-27 05:16:27'),(155,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-27 05:16:27'),(156,4,0,'user','sale tax invoice Created With This Device ID undefined ','sale tax invoice','2023-03-27 05:16:57'),(157,4,0,'user','sale tax invoice Child Created With This Device ID undefined ','sale tax invoice Child','2023-03-27 05:16:57'),(158,4,0,'user','sale tax invoice Created With This Device ID undefined ','sale tax invoice','2023-03-27 05:17:47'),(159,4,0,'user','sale tax invoice Child Created With This Device ID undefined ','sale tax invoice Child','2023-03-27 05:17:47'),(160,4,0,'user','sale tax invoice Created With This Device ID undefined ','sale tax invoice','2023-03-27 05:18:54'),(161,4,0,'user','sale tax invoice Child Created With This Device ID undefined ','sale tax invoice Child','2023-03-27 05:18:54'),(162,4,0,'user','sale tax invoice Created With This Device ID undefined ','sale tax invoice','2023-03-27 05:19:16'),(163,4,0,'user','sale tax invoice Child Created With This Device ID undefined ','sale tax invoice Child','2023-03-27 05:19:16'),(164,4,0,'user','sale tax invoice Created With This Device ID undefined ','sale tax invoice','2023-03-27 05:21:29'),(165,4,0,'user','sale tax invoice Child Created With This Device ID undefined ','sale tax invoice Child','2023-03-27 05:21:29'),(166,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-27 05:29:02'),(167,4,0,'user','voucher Created With This Device ID undefined ','voucher','2023-03-27 05:29:58'),(168,4,0,'user','voucher Child Created With This Device ID undefined ','voucher Child','2023-03-27 05:29:58'),(169,4,0,'user','voucher Child Created With This Device ID undefined ','voucher Child','2023-03-27 05:29:58'),(170,4,0,'user','voucher Child Created With This Device ID undefined ','voucher Child','2023-03-27 05:29:58'),(171,4,0,'user',' sale Return Created With This Device ID undefined ',' sale Return','2023-03-27 05:32:36'),(172,4,0,'user',' sale Return Child Created With This Device ID undefined ',' sale Return Child','2023-03-27 05:32:36'),(173,4,0,'user','Login With This Device ID undefined ','login','2023-03-27 05:44:52'),(174,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-27 05:52:42'),(175,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-27 05:55:25'),(176,4,0,'user','Login With This Device ID undefined ','login','2023-03-27 06:04:48'),(177,4,0,'user','Party Updated With This Device ID undefined ','Party Broker','2023-03-27 06:05:58'),(178,4,0,'user','Party Updated With This Device ID undefined ','Party Broker','2023-03-27 06:06:28'),(179,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-27 06:07:49'),(180,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-27 06:07:50'),(181,4,0,'user','Login With This Device ID undefined ','login','2023-03-27 06:38:24'),(182,4,0,'user','Login With This Device ID undefined ','login','2023-03-27 08:49:51'),(183,4,0,'user','Login With This Device ID undefined ','login','2023-03-27 11:41:17'),(184,4,0,'user','Quality Updated With This Device ID undefined ','Quality','2023-03-27 11:44:51'),(185,4,0,'user','sale jober issue Updated With This Device ID undefined ','sale jober issue','2023-03-27 11:51:15'),(186,4,0,'user','Login With This Device ID undefined ','login','2023-03-27 12:50:55'),(187,4,0,'user','Login With This Device ID undefined ','login','2023-03-27 12:53:25'),(188,4,0,'user','Login With This Device ID undefined ','login','2023-03-27 01:47:09'),(189,4,0,'user','Login With This Device ID undefined ','login','2023-03-27 02:05:25'),(190,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-27 02:22:43'),(191,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-27 02:23:24'),(192,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-27 02:24:34'),(193,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-27 02:24:34'),(194,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-27 02:28:26'),(195,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-27 02:30:16'),(196,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-27 02:30:16'),(197,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-27 02:32:05'),(198,4,0,'user','journal sale Updated With This Device ID undefined ','journal sale','2023-03-27 02:33:11'),(199,4,0,'user','journal sale Child Updated With This Device ID undefined ','journal sale Child','2023-03-27 02:33:11'),(200,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-27 02:33:11'),(201,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-27 02:35:34'),(202,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-27 02:36:05'),(203,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-27 02:37:09'),(204,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-27 02:37:09'),(205,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-27 02:42:55'),(206,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-27 02:45:18'),(207,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-27 02:46:21'),(208,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-27 02:46:21'),(209,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-27 02:54:48'),(210,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-27 02:55:14'),(211,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-27 02:56:50'),(212,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-27 02:56:50'),(213,4,0,'user','Login With This Device ID undefined ','login','2023-03-28 10:15:39'),(214,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-28 10:53:56'),(215,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-28 10:54:17'),(216,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 10:57:00'),(217,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 10:57:00'),(218,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 10:57:00'),(219,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-28 10:58:23'),(220,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-28 11:02:03'),(221,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-28 11:02:56'),(222,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 11:05:01'),(223,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 11:05:01'),(224,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-28 11:07:30'),(225,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-28 11:08:25'),(226,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 11:09:12'),(227,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 11:09:12'),(228,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 11:14:00'),(229,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 11:14:00'),(230,4,0,'user','journal sale Updated With This Device ID undefined ','journal sale','2023-03-28 11:14:57'),(231,4,0,'user','journal sale Child Updated With This Device ID undefined ','journal sale Child','2023-03-28 11:14:57'),(232,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-28 11:17:49'),(233,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-28 11:18:24'),(234,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 11:19:07'),(235,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 11:19:07'),(236,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-28 11:22:03'),(237,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 11:27:01'),(238,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 11:27:01'),(239,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-28 11:33:44'),(240,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-28 11:34:30'),(241,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 11:36:59'),(242,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 11:36:59'),(243,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-28 11:38:33'),(244,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-28 11:39:12'),(245,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 11:40:00'),(246,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 11:40:00'),(247,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-28 11:51:08'),(248,4,0,'user','Quality Updated With This Device ID undefined ','Quality','2023-03-28 11:51:56'),(249,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 11:52:57'),(250,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 11:52:57'),(251,4,0,'user','Login With This Device ID undefined ','login','2023-03-28 01:04:59'),(252,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-28 01:07:35'),(253,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 01:08:27'),(254,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 01:08:27'),(255,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 01:13:45'),(256,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 01:13:45'),(257,4,0,'user','journal sale Updated With This Device ID undefined ','journal sale','2023-03-28 01:36:22'),(258,4,0,'user','journal sale Child Updated With This Device ID undefined ','journal sale Child','2023-03-28 01:36:22'),(259,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-28 01:37:42'),(260,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 01:41:27'),(261,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 01:41:27'),(262,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-28 01:42:26'),(263,4,0,'user','sale jober issue Updated With This Device ID undefined ','sale jober issue','2023-03-28 01:46:47'),(264,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-28 01:53:34'),(265,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-28 01:56:12'),(266,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-28 02:03:34'),(267,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 02:04:27'),(268,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 02:04:27'),(269,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-28 02:09:57'),(270,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-28 02:58:22'),(271,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-28 02:59:53'),(272,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-28 02:59:53'),(273,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-28 03:01:50'),(274,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-28 03:05:00'),(275,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-28 03:05:50'),(276,4,0,'user','sale jober issue Updated With This Device ID undefined ','sale jober issue','2023-03-28 03:08:40'),(277,4,0,'user','sale jober issue Updated With This Device ID undefined ','sale jober issue','2023-03-28 03:09:01'),(278,4,0,'user','sale jober issue Updated With This Device ID undefined ','sale jober issue','2023-03-28 03:11:21'),(279,4,0,'user','Login With This Device ID undefined ','login','2023-03-29 06:11:00'),(280,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-29 06:14:30'),(281,4,0,'user','sale jober issue Created With This Device ID undefined ','sale jober issue','2023-03-29 06:18:49'),(282,4,0,'user','sale jober issue Updated With This Device ID undefined ','sale jober issue','2023-03-29 06:32:39'),(283,4,0,'user','sale jober issue Updated With This Device ID undefined ','sale jober issue','2023-03-29 06:32:56'),(284,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-29 06:51:43'),(285,4,0,'user','Journal Purchase Created With This Device ID undefined ','Journal Purchase','2023-03-29 07:33:50'),(286,4,0,'user','Journal Purchase Child Created With This Device ID undefined ','Journal Purchase Child','2023-03-29 07:33:50'),(287,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-29 07:36:18'),(288,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-29 07:36:39'),(289,4,0,'user','Journal Purchase Created With This Device ID undefined ','Journal Purchase','2023-03-29 07:37:42'),(290,4,0,'user','Journal Purchase Child Created With This Device ID undefined ','Journal Purchase Child','2023-03-29 07:37:42'),(291,4,0,'user','Purchase Tax Invoice Created With This Device ID undefined ','Purchase Tax Invoice','2023-03-29 07:48:16'),(292,4,0,'user','Purchase Tax Invoice Child Created With This Device ID undefined ','Purchase Tax Invoice Child','2023-03-29 07:48:16'),(293,4,0,'user','voucher Created With This Device ID undefined ','voucher','2023-03-29 09:02:12'),(294,4,0,'user','voucher Child Created With This Device ID undefined ','voucher Child','2023-03-29 09:02:12'),(295,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-29 09:13:14'),(296,4,0,'user','Purchase Tax Invoice Created With This Device ID undefined ','Purchase Tax Invoice','2023-03-29 09:13:58'),(297,4,0,'user','Purchase Tax Invoice Child Created With This Device ID undefined ','Purchase Tax Invoice Child','2023-03-29 09:13:58'),(298,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-29 09:14:12'),(299,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-29 09:19:07'),(300,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-29 09:19:07'),(301,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-29 09:19:07'),(302,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-29 09:19:07'),(303,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-29 09:22:57'),(304,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-29 09:22:57'),(305,4,0,'user','Login With This Device ID undefined ','login','2023-03-29 09:25:45'),(306,4,0,'user','Login With This Device ID undefined ','login','2023-03-29 09:25:45'),(307,4,0,'user','Login With This Device ID undefined ','login','2023-03-29 09:25:45'),(308,4,0,'user','Login With This Device ID undefined ','login','2023-03-29 09:36:30'),(309,4,0,'user','Login With This Device ID undefined ','login','2023-03-29 09:37:22'),(310,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-29 09:44:53'),(311,4,0,'user','Purchase Tax Invoice Created With This Device ID undefined ','Purchase Tax Invoice','2023-03-29 09:45:25'),(312,4,0,'user','Purchase Tax Invoice Child Created With This Device ID undefined ','Purchase Tax Invoice Child','2023-03-29 09:45:25'),(313,4,0,'user','grey issue Created With This Device ID undefined ','grey issue','2023-03-29 09:51:57'),(314,4,0,'user','Purchase Tax Invoice Created With This Device ID undefined ','Purchase Tax Invoice','2023-03-29 10:00:02'),(315,4,0,'user','Purchase Tax Invoice Child Created With This Device ID undefined ','Purchase Tax Invoice Child','2023-03-29 10:00:02'),(316,4,0,'user','voucher Created With This Device ID undefined ','voucher','2023-03-29 10:00:46'),(317,4,0,'user','voucher Child Created With This Device ID undefined ','voucher Child','2023-03-29 10:00:46'),(318,4,0,'user','Login With This Device ID undefined ','login','2023-03-29 10:23:23'),(319,4,0,'user','Login With This Device ID undefined ','login','2023-03-29 10:23:23'),(320,4,0,'user','Login With This Device ID undefined ','login','2023-03-29 10:27:43'),(321,4,0,'user','finish recevice Created With This Device ID undefined ','finish recevice','2023-03-29 10:53:48'),(322,4,0,'user','finish recevice Updated With This Device ID undefined ','finish recevice','2023-03-29 10:56:07'),(323,4,0,'user','mill tax invoice Created With This Device ID undefined ','mill tax invoice','2023-03-29 10:56:47'),(324,4,0,'user','Mill Tax Invoice Child Created With This Device ID undefined ','Mill Tax Invoice Child','2023-03-29 10:56:47'),(325,4,0,'user','voucher Created With This Device ID undefined ','voucher','2023-03-29 10:56:47'),(326,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-29 11:00:06'),(327,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-29 11:00:29'),(328,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-29 11:01:27'),(329,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-29 11:02:25'),(330,4,0,'user','Purchase Tax Invoice Created With This Device ID undefined ','Purchase Tax Invoice','2023-03-29 11:03:51'),(331,4,0,'user','Purchase Tax Invoice Child Created With This Device ID undefined ','Purchase Tax Invoice Child','2023-03-29 11:03:51'),(332,4,0,'user','grey issue Created With This Device ID undefined ','grey issue','2023-03-29 11:03:51'),(333,4,0,'user','finish recevice Created With This Device ID undefined ','finish recevice','2023-03-29 11:08:23'),(334,4,0,'user','mill tax invoice Created With This Device ID undefined ','mill tax invoice','2023-03-29 11:08:57'),(335,4,0,'user','Mill Tax Invoice Child Created With This Device ID undefined ','Mill Tax Invoice Child','2023-03-29 11:08:57'),(336,4,0,'user','finish recevice Created With This Device ID undefined ','finish recevice','2023-03-29 11:12:21'),(337,4,0,'user','mill tax invoice Created With This Device ID undefined ','mill tax invoice','2023-03-29 11:13:27'),(338,4,0,'user','Mill Tax Invoice Child Created With This Device ID undefined ','Mill Tax Invoice Child','2023-03-29 11:13:27'),(339,4,0,'user','voucher Created With This Device ID undefined ','voucher','2023-03-29 11:13:27'),(340,4,0,'user','voucher Created With This Device ID undefined ','voucher','2023-03-29 11:15:00'),(341,4,0,'user','voucher Child Created With This Device ID undefined ','voucher Child','2023-03-29 11:15:00'),(342,4,0,'user','voucher Child Created With This Device ID undefined ','voucher Child','2023-03-29 11:15:00'),(343,4,0,'user','voucher Created With This Device ID 0312 ','voucher','2023-03-29 12:29:59'),(344,4,0,'user','voucher Child Created With This Device ID 0312 ','voucher Child','2023-03-29 12:29:59'),(345,4,0,'user','voucher bank cheque Created With This Device ID 0312 ','voucher bank cheque','2023-03-29 12:29:59'),(346,4,0,'user','journal sale Updated With This Device ID undefined ','journal sale','2023-03-29 12:43:22'),(347,4,0,'user','journal sale Child Updated With This Device ID undefined ','journal sale Child','2023-03-29 12:43:22'),(348,4,0,'user','journal sale Child Updated With This Device ID undefined ','journal sale Child','2023-03-29 12:43:22'),(349,4,0,'user','Login With This Device ID undefined ','login','2023-03-29 03:17:34'),(350,4,0,'user','Login With This Device ID undefined ','login','2023-03-29 03:49:54'),(351,4,0,'user','Login With This Device ID undefined ','login','2023-03-29 04:02:40'),(352,4,0,'user','Purchase Tax Invoice Created With This Device ID undefined ','Purchase Tax Invoice','2023-03-30 05:18:46'),(353,4,0,'user','Purchase Tax Invoice Child Created With This Device ID undefined ','Purchase Tax Invoice Child','2023-03-30 05:18:46'),(354,4,0,'user','voucher Created With This Device ID undefined ','voucher','2023-03-30 05:20:04'),(355,4,0,'user','voucher Child Created With This Device ID undefined ','voucher Child','2023-03-30 05:20:04'),(356,4,0,'user','voucher Created With This Device ID undefined ','voucher','2023-03-30 05:20:04'),(357,4,0,'user','voucher Deleted With This Device ID undefined ','voucher','2023-03-30 05:20:50'),(358,4,0,'user','voucher Deleted With This Device ID undefined ','voucher','2023-03-30 05:20:50'),(359,4,0,'user','Purchase Tax Invoice Created With This Device ID undefined ','Purchase Tax Invoice','2023-03-30 05:31:12'),(360,4,0,'user','Purchase Tax Invoice Child Created With This Device ID undefined ','Purchase Tax Invoice Child','2023-03-30 05:31:12'),(361,4,0,'user','Login With This Device ID undefined ','login','2023-03-30 05:36:59'),(362,4,0,'user','Party Updated With This Device ID undefined ','Party Broker','2023-03-30 05:46:39'),(363,4,0,'user','Party Updated With This Device ID undefined ','Party Broker','2023-03-30 05:47:09'),(364,4,0,'user','Login With This Device ID undefined ','login','2023-03-30 11:27:40'),(365,4,0,'user','Login With This Device ID undefined ','login','2023-03-30 12:51:45'),(366,4,0,'user','journal sale Created With This Device ID undefined ','journal sale','2023-03-31 05:53:38'),(367,4,0,'user','journal sale Child Created With This Device ID undefined ','journal sale Child','2023-03-31 05:53:38'),(368,4,0,'user','sale tax invoice Created With This Device ID undefined ','sale tax invoice','2023-03-31 05:54:37'),(369,4,0,'user','sale tax invoice Child Created With This Device ID undefined ','sale tax invoice Child','2023-03-31 05:54:37'),(370,4,0,'user','Login With This Device ID undefined ','login','2023-03-31 05:57:10'),(371,4,0,'user','voucher Created With This Device ID undefined ','voucher','2023-03-31 06:00:01'),(372,4,0,'user','voucher Child Created With This Device ID undefined ','voucher Child','2023-03-31 06:00:02'),(373,4,0,'user','voucher Created With This Device ID undefined ','voucher','2023-03-31 06:00:02'),(374,4,0,'user','Purchase Tax Invoice Created With This Device ID undefined ','Purchase Tax Invoice','2023-03-31 06:22:45'),(375,4,0,'user','Purchase Tax Invoice Child Created With This Device ID undefined ','Purchase Tax Invoice Child','2023-03-31 06:22:45'),(376,4,0,'user','grey issue Created With This Device ID undefined ','grey issue','2023-03-31 06:22:45'),(377,4,0,'user','finish recevice Created With This Device ID undefined ','finish recevice','2023-03-31 06:25:14'),(378,4,0,'user','Quality Created With This Device ID undefined ','Quality','2023-03-31 07:06:12'),(379,4,0,'user','Purchase Tax Invoice Created With This Device ID undefined ','Purchase Tax Invoice','2023-03-31 07:07:24'),(380,4,0,'user','Purchase Tax Invoice Child Created With This Device ID undefined ','Purchase Tax Invoice Child','2023-03-31 07:07:24'),(381,4,0,'user','Purchase Tax Invoice Created With This Device ID undefined ','Purchase Tax Invoice','2023-03-31 07:11:43'),(382,4,0,'user','Purchase Tax Invoice Child Created With This Device ID undefined ','Purchase Tax Invoice Child','2023-03-31 07:11:43'),(383,4,0,'user','mill tax invoice Created With This Device ID undefined ','mill tax invoice','2023-03-31 07:13:19'),(384,4,0,'user','Mill Tax Invoice Child Created With This Device ID undefined ','Mill Tax Invoice Child','2023-03-31 07:13:19'),(385,4,0,'user','Mill Tax Invoice Child Created With This Device ID undefined ','Mill Tax Invoice Child','2023-03-31 07:13:19'),(386,4,0,'user','Mill Tax Invoice Child Created With This Device ID undefined ','Mill Tax Invoice Child','2023-03-31 07:13:19'),(387,4,0,'user','sale tax invoice Updated With This Device ID undefined ','sale tax invoice','2023-03-31 08:56:29'),(388,4,0,'user','sale tax invoice Child Updated With This Device ID undefined ','sale tax invoice Child','2023-03-31 08:56:29'),(389,4,0,'user','sale tax invoice Updated With This Device ID undefined ','sale tax invoice','2023-03-31 09:31:58'),(390,4,0,'user','sale tax invoice Child Updated With This Device ID undefined ','sale tax invoice Child','2023-03-31 09:31:58'),(391,4,0,'user','sale tax invoice Updated With This Device ID 0312 ','sale tax invoice','2023-03-31 09:34:23'),(392,4,0,'user','sale tax invoice Updated With This Device ID undefined ','sale tax invoice','2023-03-31 09:39:19'),(393,4,0,'user','sale tax invoice Child Updated With This Device ID undefined ','sale tax invoice Child','2023-03-31 09:39:19'),(394,4,0,'user','sale tax invoice Updated With This Device ID 0312 ','sale tax invoice','2023-03-31 09:39:29'),(395,4,0,'user','Login With This Device ID undefined ','login','2023-03-31 11:46:28'),(396,4,0,'user','Login With This Device ID undefined ','login','2023-03-31 11:47:18'),(397,4,0,'user','Login With This Device ID undefined ','login','2023-03-31 11:47:35'),(398,4,0,'user','Login With This Device ID undefined ','login','2023-03-31 01:20:56'),(399,4,0,'user','Party Created With This Device ID undefined','Party Broker','2023-03-31 01:21:35'),(400,4,0,'user','Login With This Device ID undefined ','login','2023-03-31 02:12:50'),(401,4,0,'user','Login With This Device ID undefined ','login','2023-03-31 02:50:02'),(402,4,0,'user','Journal Purchase Created With This Device ID undefined ','Journal Purchase','2023-03-31 02:50:58'),(403,4,0,'user','Journal Purchase Child Created With This Device ID undefined ','Journal Purchase Child','2023-03-31 02:50:58'),(404,4,0,'user','Journal Purchase Created With This Device ID undefined ','Journal Purchase','2023-03-31 02:51:48'),(405,4,0,'user','Journal Purchase Child Created With This Device ID undefined ','Journal Purchase Child','2023-03-31 02:51:48'),(406,4,0,'user','Journal Purchase Created With This Device ID undefined ','Journal Purchase','2023-03-31 02:53:46'),(407,4,0,'user','Journal Purchase Child Created With This Device ID undefined ','Journal Purchase Child','2023-03-31 02:53:46'),(408,4,0,'user','Purchase Tax Invoice Created With This Device ID undefined ','Purchase Tax Invoice','2023-03-31 03:22:26'),(409,4,0,'user','purchase taxinvoice Child Updated With This Device ID undefined ','purchase taxinvoice Child','2023-03-31 03:22:26'),(410,4,0,'user','Login With This Device ID undefined ','login','2023-03-31 04:34:47'),(411,4,0,'user','sale jober receive Created With This Device ID undefined ','sale jober receive','2023-03-31 04:35:38'),(412,4,0,'user','Login With This Device ID undefined ','login','2023-04-01 05:32:06'),(413,4,0,'user','Login With This Device ID undefined ','login','2023-04-01 05:34:08'),(414,4,0,'user','Login With This Device ID undefined ','login','2023-04-03 06:30:45'),(415,4,0,'user','Login With This Device ID undefined ','login','2023-04-03 06:32:27'),(416,4,0,'user','Login With This Device ID undefined ','login','2023-04-03 06:33:22'),(417,4,0,'user','Login With This Device ID undefined ','login','2023-04-03 06:33:24'),(418,4,0,'user','Login With This Device ID 0312 ','login','2023-04-03 06:34:23'),(419,4,0,'user','Login With This Device ID undefined ','login','2023-04-03 06:34:54'),(420,4,0,'user','Login With This Device ID undefined ','login','2023-04-03 06:35:19'),(421,4,0,'user','Login With This Device ID undefined ','login','2023-04-03 06:35:29'),(422,4,0,'user','Login With This Device ID undefined ','login','2023-04-03 06:37:57'),(423,4,0,'user','Login With This Device ID undefined ','login','2023-04-03 11:57:28'),(424,4,0,'user','Login With This Device ID undefined ','login','2023-04-03 02:04:09'),(425,4,0,'user','Login With This Device ID undefined ','login','2023-04-04 05:37:43'),(426,4,0,'user','Login With This Device ID undefined ','login','2023-04-04 05:38:09'),(427,4,0,'user','Login With This Device ID undefined ','login','2023-04-04 08:51:18');
/*!40000 ALTER TABLE `erp_activity_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_bank`
--

DROP TABLE IF EXISTS `erp_bank`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_bank` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `bank_name` varchar(255) DEFAULT NULL,
  `bank_ac_no` double NOT NULL DEFAULT '0',
  `bank_branch_name` varchar(255) DEFAULT NULL,
  `bank_ifsc_code` varchar(100) DEFAULT NULL,
  `bank_ac_holder_name` varchar(100) DEFAULT NULL,
  `bank_entry_date` datetime DEFAULT NULL,
  `bank_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_bank`
--

LOCK TABLES `erp_bank` WRITE;
/*!40000 ALTER TABLE `erp_bank` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_bank` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_bank_cheque_detail`
--

DROP TABLE IF EXISTS `erp_bank_cheque_detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_bank_cheque_detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `voucher_id` int NOT NULL DEFAULT '0',
  `bank_cheque_no` double NOT NULL DEFAULT '0',
  `bank_cheque_bank_name` varchar(100) DEFAULT NULL,
  `bank_cheque_date` date DEFAULT NULL,
  `bank_cheque_amount` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `bank_cheque_entry_date` datetime DEFAULT NULL,
  `bank_cheque_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `voucher_id` (`voucher_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_bank_cheque_detail`
--

LOCK TABLES `erp_bank_cheque_detail` WRITE;
/*!40000 ALTER TABLE `erp_bank_cheque_detail` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_bank_cheque_detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_branch`
--

DROP TABLE IF EXISTS `erp_branch`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_branch` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `state_id` int NOT NULL DEFAULT '0',
  `industries_id` int NOT NULL DEFAULT '0',
  `branch_name` varchar(100) DEFAULT NULL,
  `branch_address` varchar(255) DEFAULT NULL,
  `branch_pincode` int NOT NULL DEFAULT '0',
  `branch_gst_no` varchar(255) DEFAULT NULL,
  `branch_code` varchar(100) DEFAULT NULL,
  `branch_mobile_1` varchar(10) DEFAULT NULL,
  `branch_mobile_2` varchar(10) DEFAULT NULL,
  `branch_mobile_3` varchar(10) DEFAULT NULL,
  `branch_bill_of_supply` text,
  `branch_tax_invoice` varchar(255) DEFAULT NULL,
  `branch_invoice` varchar(255) DEFAULT NULL,
  `branch_sales_journal` varchar(255) DEFAULT NULL,
  `branch_sales_return` varchar(255) DEFAULT NULL,
  `branch_sgst_payble` varchar(100) NOT NULL DEFAULT 'payble',
  `branch_cgst_payble` varchar(100) NOT NULL DEFAULT 'payble',
  `branch_igst_payble` varchar(100) NOT NULL DEFAULT 'payble',
  `branch_sgst_receivable` varchar(100) NOT NULL DEFAULT 'receivable',
  `branch_cgst_receivable` varchar(100) DEFAULT 'receivable',
  `branch_igst_receivable` varchar(100) NOT NULL DEFAULT 'receivable',
  `branch_interim_sgst_payble` varchar(100) NOT NULL DEFAULT 'payble',
  `branch_interim_cgst_payble` varchar(100) NOT NULL DEFAULT 'payble',
  `branch_interim_igst_payble` varchar(100) NOT NULL DEFAULT 'payble',
  `branch_interim_sgst_receivable` varchar(100) NOT NULL DEFAULT 'receivable',
  `branch_interim_cgst_receivable` varchar(100) NOT NULL DEFAULT 'receivable',
  `branch_interim_igst_receivable` varchar(100) NOT NULL DEFAULT 'receivable',
  `branch_sale_return_sgst` enum('payble','receivable') NOT NULL DEFAULT 'payble',
  `branch_sale_return_cgst` enum('payble','receivable') NOT NULL DEFAULT 'payble',
  `branch_sale_return_igst` enum('payble','receivable') NOT NULL DEFAULT 'payble',
  `branch_purchase_return_sgst` enum('payble','receivable') NOT NULL DEFAULT 'receivable',
  `branch_purchase_return_cgst` enum('payble','receivable') NOT NULL DEFAULT 'receivable',
  `branch_purchase_return_igst` enum('payble','receivable') NOT NULL DEFAULT 'receivable',
  `branch_gst_tax_payble` varchar(100) NOT NULL DEFAULT 'payble',
  `branch_tcs_payble` varchar(100) DEFAULT NULL,
  `branch_tcs_receivable` varchar(100) DEFAULT NULL,
  `branch_shipping_charge` varchar(100) DEFAULT NULL,
  `branch_expenses` varchar(100) DEFAULT NULL,
  `branch_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `branch_entry_date` datetime DEFAULT NULL,
  `branch_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  KEY `global_id` (`state_id`),
  KEY `type_id` (`industries_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_branch`
--

LOCK TABLES `erp_branch` WRITE;
/*!40000 ALTER TABLE `erp_branch` DISABLE KEYS */;
INSERT INTO `erp_branch` VALUES (1,4,1,413,0,'main branch',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'payble','payble','payble','receivable','receivable','receivable','payble','payble','payble','receivable','receivable','receivable','payble','payble','payble','receivable','receivable','receivable','payble',NULL,NULL,NULL,NULL,'active','0','2023-03-02 05:28:43','2023-03-02 05:28:43'),(2,4,2,413,0,'main branch',NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'payble','payble','payble','receivable','receivable','receivable','payble','payble','payble','receivable','receivable','receivable','payble','payble','payble','receivable','receivable','receivable','payble',NULL,NULL,NULL,NULL,'active','0','2023-03-02 05:30:54','2023-03-02 05:30:54');
/*!40000 ALTER TABLE `erp_branch` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_brand`
--

DROP TABLE IF EXISTS `erp_brand`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_brand` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int DEFAULT '0',
  `supplier_id` int NOT NULL DEFAULT '0',
  `brand_name` varchar(255) DEFAULT NULL,
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `brand_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `brand_entry_date` datetime DEFAULT NULL,
  `brand_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `supplier_id` (`supplier_id`),
  KEY `company_id` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_brand`
--

LOCK TABLES `erp_brand` WRITE;
/*!40000 ALTER TABLE `erp_brand` DISABLE KEYS */;
INSERT INTO `erp_brand` VALUES (1,4,2,76,'xyz brand','0','active','2023-03-02 06:18:57','2023-03-02 06:18:57');
/*!40000 ALTER TABLE `erp_brand` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_category`
--

DROP TABLE IF EXISTS `erp_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `category_name` varchar(255) DEFAULT NULL,
  `category_type` varchar(255) DEFAULT NULL,
  `category_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `category_entry_date` datetime DEFAULT NULL,
  `category_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `company_id` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_category`
--

LOCK TABLES `erp_category` WRITE;
/*!40000 ALTER TABLE `erp_category` DISABLE KEYS */;
INSERT INTO `erp_category` VALUES (1,4,2,'banking','party','active','0','2023-03-02 07:26:37','2023-03-02 07:26:37'),(2,4,2,'manu','party','active','0','2023-03-02 08:55:30','2023-03-02 08:55:30');
/*!40000 ALTER TABLE `erp_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_company`
--

DROP TABLE IF EXISTS `erp_company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL,
  `global_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `industries_id` int NOT NULL DEFAULT '0',
  `company_name` varchar(255) DEFAULT NULL,
  `company_email` varchar(225) DEFAULT NULL,
  `company_mobile` varchar(255) DEFAULT NULL,
  `company_phone` varchar(255) DEFAULT NULL,
  `company_whatsapp_number` varchar(255) DEFAULT NULL,
  `company_profile` varchar(255) DEFAULT NULL,
  `company_gst_number` varchar(100) DEFAULT NULL,
  `company_business_group` varchar(100) DEFAULT NULL,
  `company_code` varchar(100) DEFAULT NULL,
  `company_address` varchar(255) DEFAULT NULL,
  `company_address_2` varchar(255) DEFAULT NULL,
  `company_pan_no` varchar(100) DEFAULT NULL,
  `company_tan_no` varchar(100) DEFAULT NULL,
  `company_cin_no` varchar(100) DEFAULT NULL,
  `company_fssai_no` varchar(100) DEFAULT NULL,
  `company_bank_name_1` varchar(255) DEFAULT NULL,
  `company_bank_ac_no_1` varchar(255) DEFAULT NULL,
  `company_bank_ac_branch_1` varchar(255) DEFAULT NULL,
  `company_bank_ac_ifsc_1` varchar(255) DEFAULT NULL,
  `company_bank_name_2` varchar(255) DEFAULT NULL,
  `company_bank_ac_no_2` varchar(255) DEFAULT NULL,
  `company_bank_ac_branch_2` varchar(255) DEFAULT NULL,
  `company_bank_ac_ifsc_2` varchar(255) DEFAULT NULL,
  `company_declaration` text,
  `company_order_declaration` text,
  `company_juridiction` text,
  `company_bakup_email` varchar(255) DEFAULT NULL,
  `company_video_refereance` enum('yes','no') NOT NULL DEFAULT 'no',
  `company_user_entry` enum('yes','no') NOT NULL DEFAULT 'no',
  `company_email_server_config` enum('smtp','api') NOT NULL DEFAULT 'smtp',
  `company_gmail_email` varchar(255) DEFAULT NULL,
  `company_gmail_password` varchar(255) DEFAULT NULL,
  `company_gmail_client_id` varchar(255) DEFAULT NULL,
  `company_gmail_client_secreate` varchar(255) DEFAULT NULL,
  `company_challan_no` enum('accounting','challan') NOT NULL DEFAULT 'accounting',
  `company_outstanding` enum('show','hide') NOT NULL DEFAULT 'show',
  `company_matrix_view` enum('no','mtr','kgs','pcs') NOT NULL DEFAULT 'no',
  `company_hide_nostock_quality_delivery` enum('yes','no') DEFAULT 'no',
  `company_delivery_quality_filter` enum('yes','no','ordered','brand','brand-quality','brand-quality-subquality') NOT NULL DEFAULT 'no',
  `company_purchase_delivery_quality_filter` enum('yes','no','ordered','brand','brand-quality','brand-quality-subquality') NOT NULL DEFAULT 'no',
  `company_quality_stock` enum('godown','godown-level') NOT NULL DEFAULT 'godown',
  `company_rate_help_factor` varchar(255) DEFAULT NULL,
  `company_visit_success_buffer` varchar(255) DEFAULT NULL,
  `company_visit_duplication_filter_minute` varchar(255) DEFAULT NULL,
  `compnay_case_limit` varchar(255) DEFAULT NULL,
  `company_deafult_bank_charge_head` varchar(255) DEFAULT NULL,
  `company_auto_frezz_days` varchar(255) DEFAULT NULL,
  `company_sales_cost_percentage_for_gp` varchar(255) DEFAULT NULL,
  `company_block_letter` enum('lower','upper') NOT NULL DEFAULT 'lower',
  `company_auto_party_lock` enum('yes','no') NOT NULL DEFAULT 'no',
  `company_strict_credit_mode` enum('yes','no') NOT NULL DEFAULT 'no',
  `company_header_serch` enum('none','quality','city') NOT NULL DEFAULT 'none',
  `company_gst_date_config` enum('current','last') NOT NULL DEFAULT 'current',
  `company_tcs_applicable` enum('yes','no') DEFAULT 'no',
  `company_shipping_without_gst` enum('yes','no') NOT NULL DEFAULT 'no',
  `company_proprietary` varchar(255) DEFAULT NULL,
  `company_website` varchar(255) DEFAULT NULL,
  `company_invoice_watermark` varchar(255) DEFAULT NULL,
  `company_sales_quality_rate_factor` enum('type','category') NOT NULL DEFAULT 'type',
  `company_barcode_scan_config` enum('qualityid','sku') NOT NULL DEFAULT 'qualityid',
  `company_open_status` enum('open','close') NOT NULL DEFAULT 'open',
  `company_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `company_entery_date` datetime DEFAULT NULL,
  `company_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `global_id` (`global_id`),
  KEY `year_id` (`year_id`),
  KEY `industries_id` (`industries_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_company`
--

LOCK TABLES `erp_company` WRITE;
/*!40000 ALTER TABLE `erp_company` DISABLE KEYS */;
INSERT INTO `erp_company` VALUES (1,4,0,2,3,'kamal textiles','kamaltextile108@gmail.com','9662705779','(966) 270-5779',NULL,NULL,NULL,'','1','shop no - 1003-1006, vikas logistic park, behind kuberji world, saroli','surat','AAFPB8324F','','','',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'','','','','no','no','smtp','kamaltextile108@gmail.com','','','','accounting','show','no','no','no','no','godown','','','','','','','','lower','no','no','none','current','no','no','','','','type','qualityid','open','active','0','2023-03-02 05:28:43','2023-03-09 07:10:27'),(2,4,0,2,3,'sridix demo',NULL,NULL,NULL,NULL,NULL,NULL,'sridix','2','503, nathubhai tower',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'no','no','smtp',NULL,NULL,NULL,NULL,'accounting','show','no','no','no','no','godown',NULL,NULL,NULL,NULL,NULL,NULL,NULL,'lower','no','no','none','current','no','no',NULL,NULL,NULL,'type','qualityid','open','active','0','2023-03-02 05:30:54','2023-03-02 05:30:54');
/*!40000 ALTER TABLE `erp_company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_company_user_relation`
--

DROP TABLE IF EXISTS `erp_company_user_relation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_company_user_relation` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `company_id` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_company_user_relation`
--

LOCK TABLES `erp_company_user_relation` WRITE;
/*!40000 ALTER TABLE `erp_company_user_relation` DISABLE KEYS */;
INSERT INTO `erp_company_user_relation` VALUES (1,4,1),(2,4,2);
/*!40000 ALTER TABLE `erp_company_user_relation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_company_year`
--

DROP TABLE IF EXISTS `erp_company_year`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_company_year` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `is_company_created` enum('0','1') NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `branch_id` (`branch_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_company_year`
--

LOCK TABLES `erp_company_year` WRITE;
/*!40000 ALTER TABLE `erp_company_year` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_company_year` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_depreciation_rate`
--

DROP TABLE IF EXISTS `erp_depreciation_rate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_depreciation_rate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `party_id` int NOT NULL DEFAULT '0',
  `depreciation_rate_amount` double NOT NULL DEFAULT '0',
  `depreciation_rate_rate` double NOT NULL DEFAULT '0',
  `depreciation_rate_depreciation` double NOT NULL DEFAULT '0',
  `depreciation_rate_entry_date` datetime DEFAULT NULL,
  `depreciation_rate_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `company_id` (`company_id`),
  KEY `party_id` (`party_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_depreciation_rate`
--

LOCK TABLES `erp_depreciation_rate` WRITE;
/*!40000 ALTER TABLE `erp_depreciation_rate` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_depreciation_rate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_global`
--

DROP TABLE IF EXISTS `erp_global`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_global` (
  `id` int NOT NULL AUTO_INCREMENT,
  `global_parent_id` int NOT NULL,
  `global_name` varchar(255) DEFAULT NULL,
  `global_type` varchar(50) DEFAULT NULL,
  `global_code` varchar(20) DEFAULT NULL,
  `global_short_code` varchar(10) DEFAULT NULL,
  `global_contact_code` varchar(20) DEFAULT NULL,
  `global_currency_code` varchar(20) DEFAULT NULL,
  `global_currency_name` varchar(100) DEFAULT NULL,
  `global_currency_symbol` varchar(10) DEFAULT NULL,
  `global_currency_rate` double NOT NULL DEFAULT '0',
  `global_shipping_charge` double NOT NULL DEFAULT '0',
  `global_shipping_charge_type` enum('fix','pieces','weight','none') NOT NULL DEFAULT 'none',
  `global_seq_no` int NOT NULL DEFAULT '0',
  `global_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `global_entry_date` datetime DEFAULT NULL,
  `global_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `parent_id` (`global_parent_id`)
) ENGINE=InnoDB AUTO_INCREMENT=1451 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_global`
--

LOCK TABLES `erp_global` WRITE;
/*!40000 ALTER TABLE `erp_global` DISABLE KEYS */;
INSERT INTO `erp_global` VALUES (1,0,'afghanistan','country','AFG',NULL,NULL,'AFN','afghanistan afghani','؋',1.146331,0,'none',3,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(2,0,'albania','country','ALB',NULL,NULL,'ALL','albanian lek',NULL,1.465149,0,'none',4,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(3,0,'algeria','country','DZA',NULL,NULL,'DZD','algerian dinar','دج',1.873017,0,'none',5,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(4,0,'andorra','country','AND',NULL,NULL,'EUR','euro','€',0.012193,0,'none',6,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(5,0,'angola','country','AGO',NULL,NULL,'AON','angolan kwanza',NULL,0,0,'none',7,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(6,0,'antigua and barbuda','country','ATG',NULL,NULL,'XCD','eastern caribbean dollar',NULL,0.034563,0,'none',8,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(7,0,'argentina','country','ARG',NULL,NULL,'ARS','argentine peso',NULL,1.569316,0,'none',9,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(8,0,'armenia','country','ARM',NULL,NULL,'AMD','dram','',5.512763,0,'none',10,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(9,0,'australia','country','AUS',NULL,NULL,'AUD','australian dollar','$',0.018215,0,'none',11,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(10,0,'austria','country','AUT',NULL,NULL,'EUR','euro','€',0.012193,0,'none',2,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(11,0,'azerbaijan','country','AZE',NULL,NULL,'AZN','manat',NULL,0.021739,0,'none',12,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(12,0,'bahamas','country','BHS',NULL,NULL,'BSD','bahamian dollar',NULL,0.012791,0,'none',13,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(13,0,'bahrain','country','BHR',NULL,NULL,'BHD','baharaini dinar',NULL,0.004884,0,'none',14,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(14,0,'bangladesh','country','BGD',NULL,NULL,'BDT','taka','৳',1.200967,0,'none',15,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(15,0,'barbados','country','BRB',NULL,NULL,'BBD','barbados dollar',NULL,0.025572,0,'none',16,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(16,0,'belarus','country','BLR',NULL,NULL,'BYN','belarusian ruble',NULL,0.043606,0,'none',17,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(17,0,'belgium','country','BEL',NULL,NULL,'EUR','euro','€',0.012193,0,'none',18,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(18,0,'belize','country','BLZ',NULL,NULL,'BZD','belize dollar',NULL,0.026041,0,'none',19,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(19,0,'benin','country','BEN',NULL,NULL,'XOF','cfa franc',NULL,7.99212,0,'none',20,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(20,0,'bhutan','country','BTN',NULL,NULL,'BTN','ngultrum',NULL,1.004755,0,'none',21,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(21,0,'bolivia plurinational states of','country','BOL',NULL,NULL,'BOB','boliviano',NULL,0.088926,0,'none',22,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(22,0,'bosnia and herzegovina','country','BIH',NULL,NULL,'BAM','convertible mark',NULL,0.023854,0,'none',23,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(23,0,'botswana','country','BWA',NULL,NULL,'BWP','botswana pula',NULL,0.155892,0,'none',24,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(24,0,'brazil','country','BRA',NULL,NULL,'BRL','brazilian real','R$',0.063744,0,'none',25,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(25,0,'brunei darussalam','country','BRN',NULL,NULL,'BND','brunei dollar',NULL,0.017839,0,'none',26,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(26,0,'bulgaria','country','BGR',NULL,NULL,'BGL','bulgarian lev',NULL,0,0,'none',27,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(27,0,'burkina faso','country','BFA',NULL,NULL,'XOF','cfa franc',NULL,7.99212,0,'none',28,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(28,0,'burundi','country','BDI',NULL,NULL,'BIF','burundi franc',NULL,26.558869,0,'none',29,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(29,0,'cabo verde republic of','country','CPV',NULL,NULL,'CVE','cape verde escudo',NULL,1.345714,0,'none',30,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(30,0,'cambodia','country','KHM',NULL,NULL,'KHR','riel',NULL,52.457197,0,'none',31,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(31,0,'cameroon','country','CMR',NULL,NULL,'XAF','cfa franc',NULL,7.992117,0,'none',32,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(32,0,'canada','country','CAN',NULL,NULL,'CAD','canadian dollar','$',0.016379,0,'none',33,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(33,0,'central african republic','country','CAF',NULL,NULL,'XAF','cfa franc',NULL,7.992117,0,'none',34,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(34,0,'chad','country','TCD',NULL,NULL,'XAF','cfa franc',NULL,7.992117,0,'none',35,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(35,0,'chile','country','CHL',NULL,NULL,'CLP','chilean peso',NULL,10.797295,0,'none',36,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(36,0,'china','country','CHN',NULL,NULL,'CNY','yuan renminbi','¥',0.086132,0,'none',37,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(37,0,'colombia','country','COL',NULL,NULL,'COP','colombian peso',NULL,49.721452,0,'none',38,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(38,0,'comoros','country','COM',NULL,NULL,'KMF','comoros franc',NULL,5.985854,0,'none',39,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(39,0,'congo','country','COG',NULL,NULL,'XAF','cfa franc',NULL,7.992117,0,'none',40,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(40,0,'cook islands','country','COK',NULL,NULL,'NZD','new zealand dollar','$',0.020176,0,'none',41,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(41,0,'costa rica','country','CRI',NULL,NULL,'CRC','costa rican colone',NULL,8.867325,0,'none',42,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(42,0,'côte d\'ivoire','country','CIV',NULL,NULL,'XAF','cfa franc',NULL,7.992117,0,'none',43,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(43,0,'croatia','country','HRV',NULL,NULL,'HRK','kuna',NULL,0.091719,0,'none',44,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(44,0,'cuba','country','CUB',NULL,NULL,'CUP','cuban peso',NULL,0.329179,0,'none',45,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(45,0,'cyprus','country','CYP',NULL,NULL,'EUR','euro','€',0.012193,0,'none',46,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(46,0,'czech republic','country','CZE',NULL,NULL,'EUR','euro','€',0.012193,0,'none',47,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(47,0,'democratic people\'s republic of korea','country','PRK',NULL,NULL,'KPW','north korean won',NULL,11.505116,0,'none',48,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(48,0,'democratic republic of the congo','country','COD',NULL,NULL,'CDF','congolese franc',NULL,25.831369,0,'none',49,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(49,0,'denmark','country','DNK',NULL,NULL,'DKK','danish krone','kr',0.090639,0,'none',50,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(50,0,'djibouti','country','DJI',NULL,NULL,'DJF','djibouti franc',NULL,2.299155,0,'none',51,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(51,0,'dominica','country','DMA',NULL,NULL,'XCD','eastern caribbean dollar',NULL,0.034563,0,'none',52,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(52,0,'dominican republic','country','DOM',NULL,NULL,'DOP','dominican peso',NULL,0.710299,0,'none',53,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(53,0,'ecuador','country','ECU',NULL,NULL,'USD','us dollar','$',0.01279,0,'none',54,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(54,0,'egypt','country','EGY',NULL,NULL,'EGP','egyptian pound',NULL,0.241507,0,'none',55,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(55,0,'el salvador','country','SLV',NULL,NULL,'USD','us dollar','$',0.01279,0,'none',56,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(56,0,'equatorial guinea','country','GNQ',NULL,NULL,'XAF','cfa franc',NULL,7.992117,0,'none',57,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(57,0,'eritrea','country','ERI',NULL,NULL,'ERN','nakfa',NULL,0.191762,0,'none',58,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(58,0,'estonia','country','EST',NULL,NULL,'EUR','euro','€',0.012193,0,'none',59,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(59,0,'eswatini','country','SWZ',NULL,NULL,'SZL','lilangeni',NULL,0.201454,0,'none',60,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(60,0,'ethiopia','country','ETH',NULL,NULL,'ETB','ethiopian birr',NULL,0.671809,0,'none',61,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(61,0,'fiji','country','FJI',NULL,NULL,'FJD','fiji dollar',NULL,0.027928,0,'none',62,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(62,0,'finland','country','FIN',NULL,NULL,'EUR','euro','€',0.012193,0,'none',63,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(63,0,'france','country','FRA',NULL,NULL,'EUR','euro','€',0.012193,0,'none',64,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(64,0,'gabon','country','GAB',NULL,NULL,'XAF','cfa franc',NULL,7.992117,0,'none',65,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(65,0,'gambia','country','GMB',NULL,NULL,'GMD','gambian dalasi',NULL,0.690952,0,'none',66,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(66,0,'georgia','country','GEO',NULL,NULL,'GEL','lari',NULL,0.037263,0,'none',67,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(67,0,'germany','country','DEU',NULL,NULL,'EUR','euro','€',0.012193,0,'none',68,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(68,0,'ghana','country','GHA',NULL,NULL,'GHC','ghana cedi',NULL,0,0,'none',69,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(69,0,'greece','country','GRC',NULL,NULL,'EUR','euro','€',0.012193,0,'none',70,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(70,0,'grenada','country','GRD',NULL,NULL,'XCD','eastern caribbean dollar',NULL,0.034563,0,'none',71,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(71,0,'guatemala','country','GTM',NULL,NULL,'GTQ','guatemalan quetzal',NULL,0.099786,0,'none',72,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(72,0,'guinea','country','GIN',NULL,NULL,'GNF','guinea franc',NULL,114.322425,0,'none',73,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(73,0,'guinea‐bissau','country','GNB',NULL,NULL,'XAF','cfa franc',NULL,7.992117,0,'none',74,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(74,0,'guyana','country','GUY',NULL,NULL,'GYD','guyana dollar',NULL,2.703599,0,'none',75,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(75,0,'haiti','country','HTI',NULL,NULL,'HTG','haitian gourde',NULL,1.478693,0,'none',76,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(76,0,'honduras','country','HND',NULL,NULL,'HNL','honduran lempira',NULL,0.317308,0,'none',77,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(77,0,'hungary','country','HUN',NULL,NULL,'HUF','hungarian forint','Ft',4.851438,0,'none',78,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(78,0,'iceland','country','ISL',NULL,NULL,'ISK','icelandic krona',NULL,1.690229,0,'none',79,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(79,0,'india','country','IND',NULL,NULL,'INR','indian rupee','₹',1,0,'none',1,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(80,0,'indonesia','country','IDN',NULL,NULL,'IDR','indonesian rupiah',NULL,187.605161,0,'none',80,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(81,0,'iran','country','IRN',NULL,NULL,'IRR','iranian rial',NULL,541.379294,0,'none',81,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(82,0,'iraq','country','IRQ',NULL,NULL,'IQD','iraqi dinar',NULL,18.850628,0,'none',82,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(83,0,'ireland','country','IRL',NULL,NULL,'EUR','euro','€',0.012193,0,'none',83,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(84,0,'israel','country','ISR',NULL,NULL,'ILS','new sheqel','₪',0.04366,0,'none',84,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(85,0,'italy','country','ITA',NULL,NULL,'EUR','euro','€',0.012193,0,'none',85,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(86,0,'jamaica','country','JAM',NULL,NULL,'JMD','jamaican dollar',NULL,1.980772,0,'none',86,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(87,0,'japan','country','JPN',NULL,NULL,'JPY','japanese yen','¥',1.726007,0,'none',87,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(88,0,'jordan','country','JOR',NULL,NULL,'JOD','jordanian dinar',NULL,0.009075,0,'none',88,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(89,0,'kazakhstan','country','KAZ',NULL,NULL,'KZT','tenge',NULL,5.634181,0,'none',89,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(90,0,'kenya','country','KEN',NULL,NULL,'KES','kenyan shilling',NULL,1.511785,0,'none',90,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(91,0,'kiribati','country','KIR',NULL,NULL,'AUD','australian dollar','$',0.018215,0,'none',91,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(92,0,'kuwait','country','KWT',NULL,NULL,'KWD','kuwaiti dinar',NULL,0.003928,0,'none',92,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(93,0,'kyrgyzstan','country','KGZ',NULL,NULL,'KGS','som',NULL,1.016349,0,'none',93,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(94,0,'lao people\'s democratic republic','country','LAO',NULL,NULL,'LAK','kip',NULL,185.913009,0,'none',94,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(95,0,'latvia','country','LVA',NULL,NULL,'EUR','euro','€',0.012193,0,'none',95,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(96,0,'lebanon','country','LBN',NULL,NULL,'LBP','lebanese pound',NULL,19.529066,0,'none',96,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(97,0,'lesotho','country','LSO',NULL,NULL,'LSL','lesotho loti',NULL,0.201467,0,'none',97,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(98,0,'liberia','country','LBR',NULL,NULL,'LRD','liberian dollar',NULL,1.943098,0,'none',98,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(99,0,'libya','country','LBY',NULL,NULL,'LYD','libyan dinar',NULL,0.061743,0,'none',99,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(100,0,'lithuania','country','LTU',NULL,NULL,'EUR','euro','€',0.012193,0,'none',100,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(101,0,'luxembourg','country','LUX',NULL,NULL,'EUR','euro','€',0.012193,0,'none',101,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(102,0,'madagascar','country','MDG',NULL,NULL,'MGA','malagasy ariary',NULL,52.355309,0,'none',102,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(103,0,'malawi','country','MWI',NULL,NULL,'MWK','malawian kwacha',NULL,13.19336,0,'none',103,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(104,0,'malaysia','country','MYS',NULL,NULL,'MYR','ringgit','RM',0.056445,0,'none',104,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(105,0,'maldives','country','MDV',NULL,NULL,'MVR','rufiyaa',NULL,0.202749,0,'none',105,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(106,0,'mali','country','MLI',NULL,NULL,'XOF','cfa franc',NULL,7.99212,0,'none',106,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(107,0,'malta','country','MLT',NULL,NULL,'EUR','euro','€',0.012193,0,'none',107,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(108,0,'marshall islands','country','MHL',NULL,NULL,'USD','us dollar','$',0.01279,0,'none',108,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(109,0,'mauritania','country','MRT',NULL,NULL,'MRU','new ouguiya',NULL,0.470366,0,'none',109,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(110,0,'mauritius','country','MUS',NULL,NULL,'MUR','mauritius rupee',NULL,0.565674,0,'none',110,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(111,0,'mexico','country','MEX',NULL,NULL,'MXN','mexican peso','$',0.257075,0,'none',111,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(112,0,'micronesia (federated states of)','country','FSM',NULL,NULL,'USD','us dollar','$',0.01279,0,'none',112,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(113,0,'monaco','country','MCO',NULL,NULL,'EUR','euro','€',0.012193,0,'none',113,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(114,0,'mongolia','country','MNG',NULL,NULL,'MNT','tugrik',NULL,39.671931,0,'none',114,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(115,0,'montenegro','country','MNE',NULL,NULL,'EUR','euro','€',0.012193,0,'none',115,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(116,0,'morocco','country','MAR',NULL,NULL,'MAD','moroccan dirham',NULL,0.128022,0,'none',116,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(117,0,'mozambique','country','MOZ',NULL,NULL,'MZM','mozambican metical',NULL,0,0,'none',117,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(118,0,'myanmar','country','MMR',NULL,NULL,'MMK','kyat',NULL,23.911423,0,'none',118,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(119,0,'namibia','country','NAM',NULL,NULL,'NAD','namibian dollar',NULL,0.202747,0,'none',119,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(120,0,'nauru','country','NRU',NULL,NULL,'AUD','australian dollar','$',0.018215,0,'none',120,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(121,0,'nepal','country','NPL',NULL,NULL,'NPR','nepalese rupee',NULL,1.607583,0,'none',121,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(122,0,'netherlands','country','NLD',NULL,NULL,'EUR','euro','€',0.012193,0,'none',122,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(123,0,'new zealand','country','NZL',NULL,NULL,'NZD','new zealand dollar','$',0.020176,0,'none',123,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(124,0,'nicaragua','country','NIC',NULL,NULL,'NIO','nicaraguan cordoba oro',NULL,0.462988,0,'none',124,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(125,0,'niger','country','NER',NULL,NULL,'XOF','cfa franc',NULL,7.99212,0,'none',125,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(126,0,'nigeria','country','NGA',NULL,NULL,'NGN','naira',NULL,5.306797,0,'none',126,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(127,0,'niue','country','NIU',NULL,NULL,'NZD','new zealand dollar','$',0.020176,0,'none',127,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(128,0,'norway','country','NOR',NULL,NULL,'NOK','norway krone','kr',0.124919,0,'none',128,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(129,0,'oman','country','OMN',NULL,NULL,'OMR','omani rial',NULL,0.004942,0,'none',129,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(130,0,'pakistan','country','PAK',NULL,NULL,'PKR','pakistani rupee','₨',2.611987,0,'none',130,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(131,0,'palau','country','PLW',NULL,NULL,'USD','us dollar','$',0.01279,0,'none',131,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(132,0,'panama','country','PAN',NULL,NULL,'PAB','balboa',NULL,0.01279,0,'none',132,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(133,0,'papua new guinea','country','PNG',NULL,NULL,'PGK','kina',NULL,0.046096,0,'none',133,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(134,0,'paraguay','country','PRY',NULL,NULL,'PYG','guarani',NULL,88.602088,0,'none',134,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(135,0,'peru','country','PER',NULL,NULL,'PEN','nuevo sol',NULL,0.048538,0,'none',135,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(136,0,'philippines','country','PHL',NULL,NULL,'PHP','philippines peso','₱',0.680648,0,'none',136,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(137,0,'poland','country','POL',NULL,NULL,'PLN','zloty','zł',0.056268,0,'none',137,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(138,0,'portugal','country','PRT',NULL,NULL,'EUR','euro','€',0.012193,0,'none',138,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(139,0,'qatar','country','QAT',NULL,NULL,'QAR','qatar rial',NULL,0.047171,0,'none',139,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(140,0,'republic of korea','country','KOR',NULL,NULL,'KRW','won',NULL,16.42752,0,'none',140,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(141,0,'republic of moldova','country','MDA',NULL,NULL,'MDL','moldova leu',NULL,0.24612,0,'none',141,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(142,0,'romania','country','ROU',NULL,NULL,'RON','romania leu',NULL,0.060077,0,'none',142,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(143,0,'russian federation','country','RUS',NULL,NULL,'RUB','rouble','руб',0.72994,0,'none',143,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(144,0,'rwanda','country','RWA',NULL,NULL,'RWF','rwandan franc',NULL,13.283873,0,'none',144,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(145,0,'saint kitts and nevis','country','KNA',NULL,NULL,'XCD','eastern caribbean dollar',NULL,0.034563,0,'none',145,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(146,0,'saint lucia','country','LCA',NULL,NULL,'XCD','eastern caribbean dollar',NULL,0.034563,0,'none',146,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(147,0,'saint vincent and the grenadines','country','VCT',NULL,NULL,'XCD','eastern caribbean dollar',NULL,0.034563,0,'none',147,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(148,0,'samoa','country','WSM',NULL,NULL,'WST','tala',NULL,0.033484,0,'none',148,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(149,0,'san marino','country','SMR',NULL,NULL,'EUR','euro','€',0.012193,0,'none',149,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(150,0,'sao tome and principe','country','STP',NULL,NULL,'STN','new dobra',NULL,0.300418,0,'none',150,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(151,0,'saudi arabia','country','SAU',NULL,NULL,'SAR','saudi riyal',NULL,0.047975,0,'none',151,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(152,0,'senegal','country','SEN',NULL,NULL,'XOF','cfa franc',NULL,7.99212,0,'none',152,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(153,0,'serbia','country','SRB',NULL,NULL,'RSD','serbian dinar',NULL,1.426129,0,'none',153,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(154,0,'seychelles','country','SYC',NULL,NULL,'SCR','seychelles rupee',NULL,0.18212,0,'none',154,'active','2022-06-13 17:14:29','2022-06-23 12:44:17'),(155,0,'sierra leone','country','SLE',NULL,NULL,'SLL','leone',NULL,167.846764,0,'none',155,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(156,0,'singapore','country','SGP',NULL,NULL,'SGD','singapore dollar','$',0.017773,0,'none',156,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(157,0,'slovakia','country','SVK',NULL,NULL,'EUR','euro','€',0.012193,0,'none',157,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(158,0,'slovenia','country','SVN',NULL,NULL,'EUR','euro','€',0.012193,0,'none',158,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(159,0,'solomon islands','country','SLB',NULL,NULL,'SBD','solomon dollar',NULL,0.103733,0,'none',159,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(160,0,'somalia','country','SOM',NULL,NULL,'SOS','somalian shilling',NULL,7.470703,0,'none',160,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(161,0,'south africa','country','ZAF',NULL,NULL,'ZAR','rand',NULL,0.204291,0,'none',161,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(162,0,'south sudan','country','SSD',NULL,NULL,'SSP','south sudanese pound',NULL,1.665181,0,'none',162,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(163,0,'spain','country','ESP',NULL,NULL,'EUR','euro','€',0.012193,0,'none',163,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(164,0,'sri lanka','country','LKA',NULL,NULL,'LKR','sri lanka rupee',NULL,4.629986,0,'none',164,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(165,0,'sudan','country','SDN',NULL,NULL,'SDG','sudanese pound',NULL,5.835654,0,'none',165,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(166,0,'suriname','country','SUR',NULL,NULL,'SRD','surinamese dollar',NULL,0.27831,0,'none',166,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(167,0,'sweden','country','SWE',NULL,NULL,'SEK','swedish krona','kr',0.128665,0,'none',167,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(168,0,'switzerland','country','CHE',NULL,NULL,'CHF','swiss franc','CHF',0.012655,0,'none',168,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(169,0,'syria','country','SYR',NULL,NULL,'SYP','syrian pound',NULL,32.118812,0,'none',169,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(170,0,'tajikistan','country','TJK',NULL,NULL,'TJS','somoni',NULL,0.142073,0,'none',170,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(171,0,'thailand','country','THA',NULL,NULL,'THB','bhat','฿',0.444807,0,'none',171,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(172,0,'the republic of north macedonia','country','MKD',NULL,NULL,'MKD','denar',NULL,0.751226,0,'none',172,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(173,0,'timor‐leste','country','TLS',NULL,NULL,'USD','us dollar','$',0.01279,0,'none',173,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(174,0,'togo','country','TGO',NULL,NULL,'XOF','cfa franc',NULL,7.99212,0,'none',174,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(175,0,'tonga','country','TON',NULL,NULL,'TOP','pa\'anga',NULL,0.029727,0,'none',175,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(176,0,'trinidad and tobago','country','TTO',NULL,NULL,'TTD','trinidad and tobago dollar',NULL,0.087779,0,'none',176,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(177,0,'tunisia','country','TUN',NULL,NULL,'TND','tunisian dinar',NULL,0.039253,0,'none',177,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(178,0,'turkey','country','TUR',NULL,NULL,'TRY','turkish lira',NULL,0.220289,0,'none',178,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(179,0,'turkmenistan','country','TKM',NULL,NULL,'TMT','new manat',NULL,0.044743,0,'none',179,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(180,0,'tuvalu','country','TUV',NULL,NULL,'AUD','australian dollar','$',0.018215,0,'none',180,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(181,0,'uganda','country','UGA',NULL,NULL,'UGS','ugandan shilling',NULL,0,0,'none',181,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(182,0,'ukraine','country','UKR',NULL,NULL,'UAH','hryvnia',NULL,0.381587,0,'none',182,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(183,0,'united arab emirates','country','ARE',NULL,NULL,'AED','u.a.emirates dirham',NULL,0.04696,0,'none',183,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(184,0,'united kingdom','country','GBR',NULL,NULL,'GBP','pound sterling','£',0.010414,0,'none',184,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(185,0,'united republic of tanzania','country','TZA',NULL,NULL,'TZS','tanzanian shilling',NULL,30.090367,0,'none',185,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(186,0,'united states of america','country','USA',NULL,NULL,'USD','us dollar','$',0.01279,0,'none',186,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(187,0,'uruguay','country','URY',NULL,NULL,'UYU','uruguayan peso',NULL,0.510209,0,'none',187,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(188,0,'uzbekistan','country','UZB',NULL,NULL,'UZS','sum',NULL,142.135598,0,'none',188,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(189,0,'vanuatu','country','VUT',NULL,NULL,'VUV','vatu',NULL,1.47085,0,'none',189,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(190,0,'venezuela (bolivarian republic of)','country','VEN',NULL,NULL,'VEF','bolivar fuerte',NULL,0,0,'none',190,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(191,0,'viet nam','country','VNM',NULL,NULL,'VND','dong',NULL,296.703139,0,'none',191,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(192,0,'yemen','country','YEM',NULL,NULL,'YER','yemeni rial',NULL,3.19906,0,'none',192,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(193,0,'zambia','country','ZMB',NULL,NULL,'ZMK','kwacha',NULL,0,0,'none',193,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(194,0,'zimbabwe','country','ZWE',NULL,NULL,'ZWD','us dollar',NULL,0,0,'none',194,'active','2022-06-13 17:14:29','2022-06-23 12:44:18'),(195,79,'andaman and nicobar islands','state','35',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(196,195,'port blair','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(197,79,'andhra pradesh','state','37',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(198,197,'visakhapatnam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(199,197,'vijayawada','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(200,197,'guntur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(201,197,'nellore','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(202,197,'kurnool','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(203,197,'rajahmundry','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(204,197,'kakinada','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(205,197,'tirupati','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(206,197,'anantapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(207,197,'kadapa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(208,197,'vizianagaram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(209,197,'eluru','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(210,197,'ongole','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(211,197,'nandyal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(212,197,'machilipatnam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(213,197,'adoni','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(214,197,'tenali','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(215,197,'chittoor','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(216,197,'hindupur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(217,197,'proddatur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(218,197,'bhimavaram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(219,197,'madanapalle','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(220,197,'guntakal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(221,197,'dharmavaram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(222,197,'gudivada','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(223,197,'srikakulam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(224,197,'narasaraopet','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(225,197,'rajampet','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(226,197,'tadpatri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(227,197,'tadepalligudem','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(228,197,'chilakaluripet','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(229,197,'yemmiganur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(230,197,'kadiri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(231,197,'chirala','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(232,197,'anakapalle','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(233,197,'kavali','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(234,197,'palacole','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(235,197,'sullurpeta','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(236,197,'tanuku','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(237,197,'rayachoti','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(238,197,'srikalahasti','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(239,197,'bapatla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(240,197,'naidupet','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(241,197,'nagari','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(242,197,'gudur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(243,197,'vinukonda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(244,197,'narasapuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(245,197,'nuzvid','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(246,197,'markapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(247,197,'ponnur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(248,197,'kandukur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(249,197,'bobbili','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(250,197,'rayadurg','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(251,197,'samalkot','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(252,197,'jaggaiahpet','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(253,197,'tuni','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(254,197,'amalapuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(255,197,'bheemunipatnam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(256,197,'venkatagiri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(257,197,'sattenapalle','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(258,197,'pithapuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(259,197,'palasa kasibugga','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(260,197,'parvathipuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(261,197,'macherla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(262,197,'gooty','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(263,197,'salur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(264,197,'mandapeta','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(265,197,'jammalamadugu','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(266,197,'peddapuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(267,197,'punganur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(268,197,'nidadavole','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(269,197,'repalle','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(270,197,'ramachandrapuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(271,197,'kovvur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(272,197,'tiruvuru','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(273,197,'uravakonda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(274,197,'narsipatnam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(275,197,'yerraguntla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(276,197,'pedana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(277,197,'puttur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(278,197,'renigunta','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(279,197,'rajam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(280,197,'srisailam project (right flank colony) township','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(281,79,'arunachal pradesh','state','12',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(282,281,'naharlagun','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(283,281,'pasighat','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(284,79,'assam','state','18',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(285,284,'guwahati','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(286,284,'silchar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(287,284,'dibrugarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(288,284,'nagaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:45','2022-06-13 17:21:45'),(289,284,'tinsukia','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(290,284,'jorhat','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(291,284,'bongaigaon city','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(292,284,'dhubri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(293,284,'diphu','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(294,284,'north lakhimpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(295,284,'tezpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(296,284,'karimganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(297,284,'sibsagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(298,284,'goalpara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(299,284,'barpeta','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(300,284,'lanka','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(301,284,'lumding','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(302,284,'mankachar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(303,284,'nalbari','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(304,284,'rangia','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(305,284,'margherita','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(306,284,'mangaldoi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(307,284,'silapathar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(308,284,'mariani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(309,284,'marigaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(310,79,'bihar','state','10',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(311,310,'patna','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(312,310,'gaya','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(313,310,'bhagalpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(314,310,'muzaffarpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(315,310,'darbhanga','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(316,310,'arrah','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(317,310,'begusarai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(318,310,'chapra','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(319,310,'katihar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(320,310,'munger','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(321,310,'purnia','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(322,310,'saharsa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(323,310,'sasaram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(324,310,'hajipur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(325,310,'dehri-on-sone','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(326,310,'bettiah','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(327,310,'motihari','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(328,310,'bagaha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(329,310,'siwan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(330,310,'kishanganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(331,310,'jamalpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(332,310,'buxar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(333,310,'jehanabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(334,310,'aurangabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(335,310,'lakhisarai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(336,310,'nawada','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(337,310,'jamui','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(338,310,'sitamarhi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(339,310,'araria','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(340,310,'gopalganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(341,310,'madhubani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(342,310,'masaurhi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(343,310,'samastipur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(344,310,'mokameh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(345,310,'supaul','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(346,310,'dumraon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(347,310,'arwal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(348,310,'forbesganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(349,310,'bhaburban agglomeration','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(350,310,'narkatiaganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(351,310,'naugachhia','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(352,310,'madhepura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(353,310,'sheikhpura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(354,310,'sultanganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(355,310,'raxaul bazar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(356,310,'ramnagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(357,310,'mahnar bazar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(358,310,'warisaliganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(359,310,'revelganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(360,310,'rajgir','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(361,310,'sonepur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(362,310,'sherghati','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(363,310,'sugauli','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(364,310,'makhdumpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(365,310,'maner','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(366,310,'rosera','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(367,310,'nokha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(368,310,'piro','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(369,310,'rafiganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(370,310,'marhaura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(371,310,'mirganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(372,310,'lalganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(373,310,'murliganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(374,310,'motipur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(375,310,'manihari','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(376,310,'sheohar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(377,310,'maharajganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(378,310,'silao','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(379,310,'barh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(380,310,'asarganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(381,79,'chandigarh','state','04',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(382,381,'chandigarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(383,79,'chhattisgarh','state','22',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(384,383,'raipur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(385,383,'bhilai nagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(386,383,'korba','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(387,383,'bilaspur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(388,383,'durg','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(389,383,'rajnandgaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(390,383,'jagdalpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(391,383,'raigarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(392,383,'ambikapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(393,383,'mahasamund','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(394,383,'dhamtari','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(395,383,'chirmiri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(396,383,'bhatapara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(397,383,'dalli-rajhara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(398,383,'naila janjgir','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(399,383,'tilda newra','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(400,383,'mungeli','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(401,383,'manendragarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(402,383,'sakti','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(403,79,'dadra and nagar haveli','state','26',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(404,403,'silvassa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(405,79,'delhi','state','07',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(406,405,'delhi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(407,406,'new delhi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(408,79,'goa','state','30',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(409,408,'marmagao','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(410,408,'panaji','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(411,408,'margao','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(412,408,'mapusa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(413,79,'gujarat','state','24',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(414,413,'ahmedabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(415,413,'surat','city',NULL,NULL,NULL,'','',NULL,0,500,'fix',0,'active','2022-06-13 17:21:46','2022-07-13 15:31:27'),(416,413,'vadodara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(417,413,'rajkot','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(418,413,'bhavnagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(419,413,'jamnagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(420,413,'nadiad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(421,413,'porbandar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(422,413,'anand','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(423,413,'morvi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(424,413,'mahesana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(425,413,'bharuch','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(426,413,'vapi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(427,413,'navsari','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(428,413,'veraval','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(429,413,'bhuj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(430,413,'godhra','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(431,413,'palanpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(432,413,'valsad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(433,413,'patan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(434,413,'deesa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(435,413,'amreli','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(436,413,'anjar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(437,413,'dhoraji','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(438,413,'khambhat','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(439,413,'mahuva','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(440,413,'keshod','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(441,413,'wadhwan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(442,413,'ankleshwar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(443,413,'savarkundla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(444,413,'kadi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(445,413,'visnagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(446,413,'upleta','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(447,413,'una','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(448,413,'sidhpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(449,413,'unjha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(450,413,'mangrol','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(451,413,'viramgam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(452,413,'modasa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(453,413,'palitana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(454,413,'petlad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(455,413,'kapadvanj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(456,413,'sihor','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(457,413,'wankaner','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(458,413,'limbdi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(459,413,'mandvi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(460,413,'thangadh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(461,413,'vyara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(462,413,'padra','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(463,413,'lunawada','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(464,413,'rajpipla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(465,413,'vapi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(466,413,'umreth','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(467,413,'sanand','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(468,413,'rajula','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(469,413,'radhanpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(470,413,'mahemdabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(471,413,'ranavav','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(472,413,'tharad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(473,413,'mansa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(474,413,'umbergaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(475,413,'talaja','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(476,413,'vadnagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(477,413,'manavadar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(478,413,'salaya','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(479,413,'vijapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(480,413,'pardi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(481,413,'rapar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(482,413,'songadh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(483,413,'lathi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(484,413,'adalaj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(485,413,'chhapra','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(486,79,'haryana','state','06',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(487,486,'faridabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(488,486,'gurgaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(489,486,'hisar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(490,486,'rohtak','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(491,486,'panipat','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(492,486,'karnal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(493,486,'sonipat','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(494,486,'yamunanagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(495,486,'panchkula','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(496,486,'bhiwani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(497,486,'bahadurgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(498,486,'jind','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(499,486,'sirsa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(500,486,'thanesar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(501,486,'kaithal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(502,486,'palwal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(503,486,'rewari','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(504,486,'hansi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(505,486,'narnaul','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(506,486,'fatehabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(507,486,'gohana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(508,486,'tohana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(509,486,'narwana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(510,486,'mandi dabwali','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(511,486,'charkhi dadri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(512,486,'shahbad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(513,486,'pehowa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(514,486,'samalkha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(515,486,'pinjore','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(516,486,'ladwa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(517,486,'sohna','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(518,486,'safidon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(519,486,'taraori','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(520,486,'mahendragarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(521,486,'ratia','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(522,486,'rania','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(523,486,'sarsod','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(524,79,'himachal pradesh','state','02',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(525,524,'shimla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(526,524,'mandi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(527,524,'solan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(528,524,'nahan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(529,524,'sundarnagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(530,524,'palampur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(531,79,'jammu and kashmir','state','01',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(532,531,'srinagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(533,531,'jammu','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(534,531,'baramula','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(535,531,'anantnag','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(536,531,'sopore','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(537,531,'kathurban agglomeration','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(538,531,'rajauri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(539,531,'punch','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(540,531,'udhampur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(541,79,'jharkhand','state','20',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(542,541,'dhanbad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(543,541,'ranchi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(544,541,'jamshedpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(545,541,'bokaro steel city','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(546,541,'deoghar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(547,541,'phusro','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(548,541,'adityapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(549,541,'hazaribag','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(550,541,'giridih','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(551,541,'ramgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(552,541,'jhumri tilaiya','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(553,541,'saunda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(554,541,'sahibganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(555,541,'medininagar (daltonganj)','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(556,541,'chaibasa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(557,541,'chatra','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(558,541,'gumia','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(559,541,'dumka','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(560,541,'madhupur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(561,541,'chirkunda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(562,541,'pakaur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(563,541,'simdega','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(564,541,'musabani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(565,541,'mihijam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(566,541,'patratu','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(567,541,'lohardaga','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(568,541,'tenu dam-cum-kathhara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(569,79,'karnataka','state','29',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(570,569,'bengaluru','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(571,569,'hubli-dharwad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(572,569,'belagavi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(573,569,'mangaluru','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(574,569,'davanagere','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(575,569,'ballari','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(576,569,'tumkur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(577,569,'shivamogga','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(578,569,'raayachuru','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(579,569,'robertson pet','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(580,569,'kolar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(581,569,'mandya','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(582,569,'udupi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(583,569,'chikkamagaluru','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(584,569,'karwar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(585,569,'ranebennuru','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(586,569,'ranibennur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(587,569,'ramanagaram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(588,569,'gokak','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(589,569,'yadgir','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(590,569,'rabkavi banhatti','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(591,569,'shahabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(592,569,'sirsi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(593,569,'sindhnur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(594,569,'tiptur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(595,569,'arsikere','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(596,569,'nanjangud','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(597,569,'sagara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(598,569,'sira','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(599,569,'puttur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(600,569,'athni','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(601,569,'mulbagal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(602,569,'surapura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(603,569,'siruguppa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(604,569,'mudhol','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(605,569,'sidlaghatta','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(606,569,'shahpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(607,569,'saundatti-yellamma','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(608,569,'wadi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(609,569,'manvi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(610,569,'nelamangala','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(611,569,'lakshmeshwar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(612,569,'ramdurg','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(613,569,'nargund','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(614,569,'tarikere','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(615,569,'malavalli','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(616,569,'savanur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(617,569,'lingsugur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(618,569,'vijayapura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(619,569,'sankeshwara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(620,569,'madikeri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(621,569,'talikota','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(622,569,'sedam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(623,569,'shikaripur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(624,569,'mahalingapura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(625,569,'mudalagi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(626,569,'muddebihal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(627,569,'pavagada','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(628,569,'malur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(629,569,'sindhagi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(630,569,'sanduru','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(631,569,'afzalpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(632,569,'maddur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(633,569,'madhugiri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(634,569,'tekkalakote','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(635,569,'terdal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(636,569,'mudabidri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(637,569,'magadi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(638,569,'navalgund','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(639,569,'shiggaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(640,569,'shrirangapattana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(641,569,'sindagi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(642,569,'sakaleshapura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(643,569,'srinivaspur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(644,569,'ron','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(645,569,'mundargi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(646,569,'sadalagi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(647,569,'piriyapatna','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(648,569,'adyar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(650,649,'mysore','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(651,79,'kerala','state','32',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(652,651,'thiruvananthapuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(653,651,'kochi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(654,651,'kozhikode','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(655,651,'kollam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(656,651,'thrissur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(657,651,'palakkad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(658,651,'alappuzha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(659,651,'malappuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(660,651,'ponnani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(661,651,'vatakara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(662,651,'kanhangad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(663,651,'taliparamba','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(664,651,'koyilandy','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(665,651,'neyyattinkara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(666,651,'kayamkulam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(667,651,'nedumangad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(668,651,'kannur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(669,651,'tirur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(670,651,'kottayam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(671,651,'kasaragod','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(672,651,'kunnamkulam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(673,651,'ottappalam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(674,651,'thiruvalla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(675,651,'thodupuzha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(676,651,'chalakudy','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(677,651,'changanassery','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(678,651,'punalur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(679,651,'nilambur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(680,651,'cherthala','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(681,651,'perinthalmanna','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(682,651,'mattannur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(683,651,'shoranur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(684,651,'varkala','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(685,651,'paravoor','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(686,651,'pathanamthitta','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(687,651,'peringathur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(688,651,'attingal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(689,651,'kodungallur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(690,651,'pappinisseri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(691,651,'chittur-thathamangalam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(692,651,'muvattupuzha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(693,651,'adoor','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(694,651,'mavelikkara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(695,651,'mavoor','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(696,651,'perumbavoor','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(697,651,'vaikom','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(698,651,'palai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(699,651,'panniyannur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(700,651,'guruvayoor','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(701,651,'puthuppally','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(702,651,'panamattom','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(703,79,'madhya pradesh','state','23',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(704,703,'indore','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(705,703,'bhopal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(706,703,'jabalpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(707,703,'gwalior','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(708,703,'ujjain','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(709,703,'sagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(710,703,'ratlam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(711,703,'satna','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(712,703,'murwara (katni)','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(713,703,'morena','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(714,703,'singrauli','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(715,703,'rewa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(716,703,'vidisha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(717,703,'ganjbasoda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(718,703,'shivpuri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(719,703,'mandsaur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(720,703,'neemuch','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(721,703,'nagda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(722,703,'itarsi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(723,703,'sarni','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(724,703,'sehore','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(725,703,'mhow cantonment','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(726,703,'seoni','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(727,703,'balaghat','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(728,703,'ashok nagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(729,703,'tikamgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(730,703,'shahdol','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(731,703,'pithampur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(732,703,'alirajpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(733,703,'mandla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(734,703,'sheopur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(735,703,'shajapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(736,703,'panna','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(737,703,'raghogarh-vijaypur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(738,703,'sendhwa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(739,703,'sidhi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(740,703,'pipariya','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(741,703,'shujalpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(742,703,'sironj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(743,703,'pandhurna','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(744,703,'nowgong','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(745,703,'mandideep','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(746,703,'sihora','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(747,703,'raisen','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(748,703,'lahar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(749,703,'maihar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(750,703,'sanawad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(751,703,'sabalgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(752,703,'umaria','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(753,703,'porsa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(754,703,'narsinghgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(755,703,'malaj khand','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(756,703,'sarangpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(757,703,'mundi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(758,703,'nepanagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(759,703,'pasan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(760,703,'mahidpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(761,703,'seoni-malwa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(762,703,'rehli','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(763,703,'manawar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(764,703,'rahatgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(765,703,'panagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(766,703,'wara seoni','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(767,703,'tarana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(768,703,'sausar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(769,703,'rajgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(770,703,'niwari','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(771,703,'mauganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(772,703,'manasa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(773,703,'nainpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(774,703,'prithvipur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(775,703,'sohagpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(776,703,'nowrozabad (khodargama)','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(777,703,'shamgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:46','2022-06-13 17:21:46'),(778,703,'maharajpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(779,703,'multai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(780,703,'pali','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(781,703,'pachore','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(782,703,'rau','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(783,703,'mhowgaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(784,703,'vijaypur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(785,703,'narsinghgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(786,79,'maharashtra','state','27',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(787,786,'mumbai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(788,786,'pune','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(789,786,'nagpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(790,786,'thane','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(791,786,'nashik','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(792,786,'kalyan-dombivali','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(793,786,'vasai-virar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(794,786,'solapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(795,786,'mira-bhayandar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(796,786,'bhiwandi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(797,786,'amravati','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(798,786,'nanded-waghala','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(799,786,'sangli','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(800,786,'malegaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(801,786,'akola','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(802,786,'latur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(803,786,'dhule','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(804,786,'ahmednagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(805,786,'ichalkaranji','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(806,786,'parbhani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(807,786,'panvel','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(808,786,'yavatmal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(809,786,'achalpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(810,786,'osmanabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(811,786,'nandurbar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(812,786,'satara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(813,786,'wardha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(814,786,'udgir','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(815,786,'aurangabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(816,786,'amalner','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(817,786,'akot','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(818,786,'pandharpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(819,786,'shrirampur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(820,786,'parli','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(821,786,'washim','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(822,786,'ambejogai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(823,786,'manmad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(824,786,'ratnagiri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(825,786,'uran islampur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(826,786,'pusad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(827,786,'sangamner','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(828,786,'shirpur-warwade','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(829,786,'malkapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(830,786,'wani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(831,786,'lonavla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(832,786,'talegaon dabhade','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(833,786,'anjangaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(834,786,'umred','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(835,786,'palghar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(836,786,'shegaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(837,786,'ozar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(838,786,'phaltan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(839,786,'yevla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(840,786,'shahade','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(841,786,'vita','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(842,786,'umarkhed','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(843,786,'warora','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(844,786,'pachora','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(845,786,'tumsar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(846,786,'manjlegaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(847,786,'sillod','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(848,786,'arvi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(849,786,'nandura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(850,786,'vaijapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(851,786,'wadgaon road','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(852,786,'sailu','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(853,786,'murtijapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(854,786,'tasgaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(855,786,'mehkar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(856,786,'yawal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(857,786,'pulgaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(858,786,'nilanga','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(859,786,'wai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(860,786,'umarga','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(861,786,'paithan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(862,786,'rahuri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(863,786,'nawapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(864,786,'tuljapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(865,786,'morshi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(866,786,'purna','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(867,786,'satana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(868,786,'pathri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(869,786,'sinnar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(870,786,'uchgaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(871,786,'uran','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(872,786,'pen','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(873,786,'karjat','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(874,786,'manwath','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(875,786,'partur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(876,786,'sangole','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(877,786,'mangrulpir','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(878,786,'risod','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(879,786,'shirur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(880,786,'savner','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(881,786,'sasvad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(882,786,'pandharkaoda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(883,786,'talode','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(884,786,'shrigonda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(885,786,'shirdi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(886,786,'raver','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(887,786,'mukhed','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(888,786,'rajura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(889,786,'vadgaon kasba','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(890,786,'tirora','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(891,786,'mahad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(892,786,'lonar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(893,786,'sawantwadi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(894,786,'pathardi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(895,786,'pauni','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(896,786,'ramtek','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(897,786,'mul','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(898,786,'soyagaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(899,786,'mangalvedhe','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(900,786,'narkhed','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(901,786,'shendurjana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(902,786,'patur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(903,786,'mhaswad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(904,786,'loha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(905,786,'nandgaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(906,786,'warud','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(907,79,'manipur','state','14',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(908,907,'imphal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(909,907,'thoubal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(910,907,'lilong','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(911,907,'mayang imphal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(912,79,'meghalaya','state','17',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(913,912,'shillong','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(914,912,'tura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(915,912,'nongstoin','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(916,79,'mizoram','state','15',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(917,916,'aizawl','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(918,916,'lunglei','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(919,916,'saiha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(920,79,'nagaland','state','13',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(921,920,'dimapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(922,920,'kohima','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(923,920,'zunheboto','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(924,920,'tuensang','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(925,920,'wokha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(926,920,'mokokchung','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(927,79,'odisha','state','21',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(928,927,'bhubaneswar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(929,927,'cuttack','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(930,927,'raurkela','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(931,927,'brahmapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(932,927,'sambalpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(933,927,'puri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(934,927,'baleshwar town','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(935,927,'baripada town','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(936,927,'bhadrak','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(937,927,'balangir','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(938,927,'jharsuguda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(939,927,'bargarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(940,927,'paradip','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(941,927,'bhawanipatna','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(942,927,'dhenkanal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(943,927,'barbil','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(944,927,'kendujhar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(945,927,'sunabeda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(946,927,'rayagada','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(947,927,'jatani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(948,927,'byasanagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(949,927,'kendrapara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(950,927,'rajagangapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(951,927,'parlakhemundi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(952,927,'talcher','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(953,927,'sundargarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(954,927,'phulabani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(955,927,'pattamundai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(956,927,'titlagarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(957,927,'nabarangapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(958,927,'soro','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(959,927,'malkangiri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(960,927,'rairangpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(961,927,'tarbha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(962,79,'puducherry','state','34',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(963,962,'pondicherry','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(964,962,'karaikal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(965,962,'yanam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(966,962,'mahe','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(967,79,'punjab','state','03',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(968,967,'ludhiana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(969,967,'patiala','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(970,967,'amritsar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(971,967,'jalandhar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(972,967,'bathinda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(973,967,'pathankot','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(974,967,'hoshiarpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(975,967,'batala','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(976,967,'moga','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(977,967,'malerkotla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(978,967,'khanna','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(979,967,'mohali','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(980,967,'barnala','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(981,967,'firozpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(982,967,'phagwara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(983,967,'kapurthala','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(984,967,'zirakpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(985,967,'kot kapura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(986,967,'faridkot','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(987,967,'muktsar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(988,967,'rajpura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(989,967,'sangrur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(990,967,'fazilka','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(991,967,'gurdaspur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(992,967,'kharar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(993,967,'gobindgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(994,967,'mansa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(995,967,'malout','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(996,967,'nabha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(997,967,'tarn taran','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(998,967,'jagraon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(999,967,'sunam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1000,967,'dhuri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1001,967,'firozpur cantt.','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1002,967,'sirhind fatehgarh sahib','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1003,967,'rupnagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1004,967,'jalandhar cantt.','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1005,967,'samana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1006,967,'nawanshahr','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1007,967,'rampura phul','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1008,967,'nangal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1009,967,'nakodar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1010,967,'zira','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1011,967,'patti','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1012,967,'raikot','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1013,967,'longowal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1014,967,'urmar tanda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1015,967,'morinda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-09-13 10:17:04'),(1016,967,'phillaur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1017,967,'pattran','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1018,967,'qadian','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1019,967,'sujanpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1020,967,'mukerian','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1021,967,'talwara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1022,79,'rajasthan','state','08',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1023,1022,'jaipur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1024,1022,'jodhpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1025,1022,'bikaner','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1026,1022,'udaipur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1027,1022,'ajmer','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1028,1022,'bhilwara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1029,1022,'alwar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1030,1022,'bharatpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1031,1022,'pali','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1032,1022,'barmer','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1033,1022,'sikar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1034,1022,'tonk','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1035,1022,'sadulpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1036,1022,'sawai madhopur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1037,1022,'nagaur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1038,1022,'makrana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1039,1022,'sujangarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1040,1022,'sardarshahar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1041,1022,'ladnu','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1042,1022,'ratangarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1043,1022,'nokha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1044,1022,'nimbahera','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1045,1022,'suratgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1046,1022,'rajsamand','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1047,1022,'lachhmangarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1048,1022,'rajgarh (churu)','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1049,1022,'nasirabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1050,1022,'nohar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1051,1022,'phalodi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1052,1022,'nathdwara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1053,1022,'pilani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1054,1022,'merta city','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1055,1022,'sojat','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1056,1022,'neem-ka-thana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1057,1022,'sirohi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1058,1022,'pratapgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1059,1022,'rawatbhata','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1060,1022,'sangaria','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1061,1022,'lalsot','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1062,1022,'pilibanga','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1063,1022,'pipar city','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1064,1022,'taranagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1065,1022,'vijainagar, ajmer','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1066,1022,'sumerpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1067,1022,'sagwara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1068,1022,'ramganj mandi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1069,1022,'lakheri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1070,1022,'udaipurwati','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1071,1022,'losal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1072,1022,'sri madhopur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1073,1022,'ramngarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1074,1022,'rawatsar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1075,1022,'rajakhera','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1076,1022,'shahpura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1077,1022,'shahpura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1078,1022,'raisinghnagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1079,1022,'malpura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1080,1022,'nadbai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1081,1022,'sanchore','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1082,1022,'nagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1083,1022,'rajgarh (alwar)','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1084,1022,'sheoganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1085,1022,'sadri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1086,1022,'todaraisingh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1087,1022,'todabhim','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1088,1022,'reengus','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1089,1022,'rajaldesar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1090,1022,'sadulshahar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1091,1022,'sambhar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1092,1022,'prantij','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1093,1022,'mount abu','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1094,1022,'mangrol','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1095,1022,'phulera','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1096,1022,'mandawa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1097,1022,'pindwara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1098,1022,'mandalgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1099,1022,'takhatgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1100,79,'tamil nadu','state','33',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1101,1100,'chennai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1102,1100,'coimbatore','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1103,1100,'madurai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1104,1100,'tiruchirappalli','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1105,1100,'salem','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1106,1100,'tirunelveli','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1107,1100,'tiruppur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1108,1100,'ranipet','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1109,1100,'nagercoil','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1110,1100,'thanjavur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1111,1100,'vellore','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1112,1100,'kancheepuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1113,1100,'erode','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1114,1100,'tiruvannamalai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1115,1100,'pollachi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1116,1100,'rajapalayam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1117,1100,'sivakasi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1118,1100,'pudukkottai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1119,1100,'neyveli (ts)','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1120,1100,'nagapattinam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1121,1100,'viluppuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1122,1100,'tiruchengode','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1123,1100,'vaniyambadi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1124,1100,'theni allinagaram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1125,1100,'udhagamandalam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1126,1100,'aruppukkottai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1127,1100,'paramakudi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1128,1100,'arakkonam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1129,1100,'virudhachalam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1130,1100,'srivilliputhur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1131,1100,'tindivanam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1132,1100,'virudhunagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1133,1100,'karur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1134,1100,'valparai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1135,1100,'sankarankovil','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1136,1100,'tenkasi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1137,1100,'palani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1138,1100,'pattukkottai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1139,1100,'tirupathur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1140,1100,'ramanathapuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1141,1100,'udumalaipettai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1142,1100,'gobichettipalayam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1143,1100,'thiruvarur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1144,1100,'thiruvallur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1145,1100,'panruti','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1146,1100,'namakkal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1147,1100,'thirumangalam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1148,1100,'vikramasingapuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1149,1100,'nellikuppam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1150,1100,'rasipuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1151,1100,'tiruttani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1152,1100,'nandivaram-guduvancheri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1153,1100,'periyakulam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1154,1100,'pernampattu','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1155,1100,'vellakoil','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1156,1100,'sivaganga','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1157,1100,'vadalur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1158,1100,'rameshwaram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1159,1100,'tiruvethipuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1160,1100,'perambalur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1161,1100,'usilampatti','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1162,1100,'vedaranyam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1163,1100,'sathyamangalam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1164,1100,'puliyankudi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1165,1100,'nanjikottai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1166,1100,'thuraiyur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1167,1100,'sirkali','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1168,1100,'tiruchendur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1169,1100,'periyasemur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1170,1100,'sattur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1171,1100,'vandavasi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1172,1100,'tharamangalam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1173,1100,'tirukkoyilur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1174,1100,'oddanchatram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1175,1100,'palladam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1176,1100,'vadakkuvalliyur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1177,1100,'tirukalukundram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1178,1100,'uthamapalayam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1179,1100,'surandai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1180,1100,'sankari','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1181,1100,'shenkottai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1182,1100,'vadipatti','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1183,1100,'sholingur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1184,1100,'tirupathur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1185,1100,'manachanallur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1186,1100,'viswanatham','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1187,1100,'polur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1188,1100,'panagudi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1189,1100,'uthiramerur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1190,1100,'thiruthuraipoondi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1191,1100,'pallapatti','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1192,1100,'ponneri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1193,1100,'lalgudi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1194,1100,'natham','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1195,1100,'unnamalaikadai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1196,1100,'p.n.patti','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1197,1100,'tharangambadi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1198,1100,'tittakudi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1199,1100,'pacode','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1200,1100,'o\' valley','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1201,1100,'suriyampalayam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1202,1100,'sholavandan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1203,1100,'thammampatti','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1204,1100,'namagiripettai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1205,1100,'peravurani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1206,1100,'parangipettai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1207,1100,'pudupattinam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1208,1100,'pallikonda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1209,1100,'sivagiri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1210,1100,'punjaipugalur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1211,1100,'padmanabhapuram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1212,1100,'thirupuvanam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1213,79,'telangana','state','36',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1214,1213,'hyderabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1215,1213,'warangal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1216,1213,'nizamabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1217,1213,'karimnagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1218,1213,'ramagundam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1219,1213,'khammam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1220,1213,'mahbubnagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1221,1213,'mancherial','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1222,1213,'adilabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1223,1213,'suryapet','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1224,1213,'jagtial','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1225,1213,'miryalaguda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1226,1213,'nirmal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1227,1213,'kamareddy','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1228,1213,'kothagudem','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1229,1213,'bodhan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1230,1213,'palwancha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1231,1213,'mandamarri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1232,1213,'koratla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1233,1213,'sircilla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1234,1213,'tandur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1235,1213,'siddipet','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1236,1213,'wanaparthy','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1237,1213,'kagaznagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1238,1213,'gadwal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1239,1213,'sangareddy','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1240,1213,'bellampalle','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1241,1213,'bhongir','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1242,1213,'vikarabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1243,1213,'jangaon','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1244,1213,'bhadrachalam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1245,1213,'bhainsa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:47','2022-06-13 17:21:47'),(1246,1213,'farooqnagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1247,1213,'medak','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1248,1213,'narayanpet','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1249,1213,'sadasivpet','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1250,1213,'yellandu','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1251,1213,'manuguru','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1252,1213,'kyathampalle','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1253,1213,'nagarkurnool','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1254,79,'tripura','state','16',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1255,1254,'agartala','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1256,1254,'udaipur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1257,1254,'dharmanagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1258,1254,'pratapgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1259,1254,'kailasahar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1260,1254,'belonia','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1261,1254,'khowai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1262,79,'uttar pradesh','state','09',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1263,1262,'lucknow','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1264,1262,'kanpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1265,1262,'firozabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1266,1262,'agra','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1267,1262,'meerut','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1268,1262,'varanasi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1269,1262,'allahabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1270,1262,'amroha','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1271,1262,'moradabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1272,1262,'aligarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1273,1262,'saharanpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1274,1262,'noida','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1275,1262,'loni','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1276,1262,'jhansi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1277,1262,'shahjahanpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1278,1262,'rampur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1279,1262,'modinagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1280,1262,'hapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1281,1262,'etawah','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1282,1262,'sambhal','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1283,1262,'orai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1284,1262,'bahraich','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1285,1262,'unnao','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1286,1262,'rae bareli','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1287,1262,'lakhimpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1288,1262,'sitapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1289,1262,'lalitpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1290,1262,'pilibhit','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1291,1262,'chandausi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1292,1262,'hardoi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1293,1262,'azamgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1294,1262,'khair','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1295,1262,'sultanpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1296,1262,'tanda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1297,1262,'nagina','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1298,1262,'shamli','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1299,1262,'najibabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1300,1262,'shikohabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1301,1262,'sikandrabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1302,1262,'shahabad, hardoi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1303,1262,'pilkhuwa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1304,1262,'renukoot','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1305,1262,'vrindavan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1306,1262,'ujhani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1307,1262,'laharpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1308,1262,'tilhar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1309,1262,'sahaswan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1310,1262,'rath','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1311,1262,'sherkot','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1312,1262,'kalpi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1313,1262,'tundla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1314,1262,'sandila','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1315,1262,'nanpara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1316,1262,'sardhana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1317,1262,'nehtaur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1318,1262,'seohara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1319,1262,'padrauna','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1320,1262,'mathura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1321,1262,'thakurdwara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1322,1262,'nawabganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1323,1262,'siana','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1324,1262,'noorpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1325,1262,'sikandra rao','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1326,1262,'puranpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1327,1262,'rudauli','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1328,1262,'thana bhawan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1329,1262,'palia kalan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1330,1262,'zaidpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1331,1262,'nautanwa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1332,1262,'zamania','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1333,1262,'shikarpur, bulandshahr','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1334,1262,'naugawan sadat','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1335,1262,'fatehpur sikri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1336,1262,'shahabad, rampur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1337,1262,'robertsganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1338,1262,'utraula','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1339,1262,'sadabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1340,1262,'rasra','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1341,1262,'lar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1342,1262,'lal gopalganj nindaura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1343,1262,'sirsaganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1344,1262,'pihani','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1345,1262,'shamsabad, agra','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1346,1262,'rudrapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1347,1262,'soron','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1348,1262,'surban agglomerationr','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1349,1262,'samdhan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1350,1262,'sahjanwa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1351,1262,'rampur maniharan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1352,1262,'sumerpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1353,1262,'shahganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1354,1262,'tulsipur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1355,1262,'tirwaganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1356,1262,'purqurban agglomerationzi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1357,1262,'shamsabad, farrukhabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1358,1262,'warhapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1359,1262,'powayan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1360,1262,'sandi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1361,1262,'achhnera','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1362,1262,'naraura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1363,1262,'nakur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1364,1262,'sahaspur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1365,1262,'safipur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1366,1262,'reoti','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1367,1262,'sikanderpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1368,1262,'saidpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1369,1262,'sirsi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1370,1262,'purwa','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1371,1262,'parasi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1372,1262,'lalganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1373,1262,'phulpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1374,1262,'shishgarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1375,1262,'sahawar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1376,1262,'samthar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1377,1262,'pukhrayan','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1378,1262,'obra','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1379,1262,'niwai','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1380,79,'uttarakhand','state','05',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1381,1380,'dehradun','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1382,1380,'hardwar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1383,1380,'haldwani-cum-kathgodam','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1384,1380,'srinagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1385,1380,'kashipur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1386,1380,'roorkee','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1387,1380,'rudrapur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1388,1380,'rishikesh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1389,1380,'ramnagar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1390,1380,'pithoragarh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1391,1380,'manglaur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1392,1380,'nainital','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1393,1380,'mussoorie','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1394,1380,'tehri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1395,1380,'pauri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1396,1380,'nagla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1397,1380,'sitarganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1398,1380,'bageshwar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1399,79,'west bengal','state','19',NULL,NULL,NULL,NULL,NULL,0,0,'none',0,'active','2022-06-13 17:21:48','2022-06-13 17:21:48'),(1400,1399,'kolkata','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',3,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1401,1399,'siliguri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',4,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1402,1399,'asansol','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',1,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1403,1399,'raghunathganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',5,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1404,1399,'kharagpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',6,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1405,1399,'naihati','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',7,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1406,1399,'english bazar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',8,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1407,1399,'baharampur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',2,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1408,1399,'hugli-chinsurah','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',9,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1409,1399,'raiganj','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',10,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1410,1399,'jalpaiguri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',11,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1411,1399,'santipur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',12,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1412,1399,'balurghat','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',13,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1413,1399,'medinipur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',14,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1414,1399,'habra','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',15,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1415,1399,'ranaghat','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',16,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1416,1399,'bankura','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',17,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1417,1399,'nabadwip','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',18,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1418,1399,'darjiling','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',19,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1419,1399,'purulia','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',20,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1420,1399,'arambagh','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',21,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1421,1399,'tamluk','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',22,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1422,1399,'alipurdurban agglomerationr','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',23,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1423,1399,'suri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',24,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1424,1399,'jhargram','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',25,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1425,1399,'gangarampur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',26,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1426,1399,'rampurhat','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',27,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1427,1399,'kalimpong','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',28,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1428,1399,'sainthia','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',29,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1429,1399,'taki','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',30,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1430,1399,'murshidabad','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',31,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1431,1399,'memari','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',32,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1432,1399,'paschim punropara','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',33,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1433,1399,'tarakeswar','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',34,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1434,1399,'sonamukhi','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',35,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1435,1399,'pandurban agglomeration','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',36,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1436,1399,'mainaguri','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',37,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1437,1399,'malda','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',38,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1438,1399,'panchla','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',39,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1439,1399,'raghunathpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',40,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1440,1399,'mathabhanga','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',41,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1441,1399,'monoharpur','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',42,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1442,1399,'srirampore','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',43,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1443,1399,'adra','city',NULL,NULL,NULL,NULL,NULL,NULL,0,0,'none',44,'active','2022-06-13 17:21:48','2022-06-13 18:03:14'),(1444,413,'testcity','city',NULL,NULL,NULL,'','',NULL,0,80,'weight',0,'active','2022-07-13 15:32:21','2022-07-13 15:32:21'),(1445,186,'new jersey','state',NULL,NULL,NULL,'','',NULL,0,0,'none',0,'active','2022-07-14 16:10:47','2022-07-14 16:10:47'),(1446,1445,'west new york','city',NULL,NULL,NULL,'','',NULL,0,2312,'weight',0,'active','2022-07-14 16:12:59','2022-07-14 16:12:59'),(1447,32,'ontario','state',NULL,NULL,NULL,'','',NULL,0,0,'weight',0,'active','2022-07-14 16:18:51','2022-07-14 16:18:51'),(1448,1447,'toronto','city',NULL,NULL,NULL,'','',NULL,0,2000,'weight',0,'active','2022-07-14 16:19:46','2022-07-14 16:19:46'),(1449,32,'nunavut','state',NULL,NULL,NULL,'','',NULL,0,0,'none',0,'active','2022-07-14 16:23:25','2022-07-14 16:23:25'),(1450,1447,'barrie','city',NULL,NULL,NULL,'','',NULL,0,1000,'weight',0,'active','2022-07-14 17:44:50','2022-07-14 17:44:50');
/*!40000 ALTER TABLE `erp_global` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_godown`
--

DROP TABLE IF EXISTS `erp_godown`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_godown` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `godown_name` varchar(255) DEFAULT NULL,
  `godown_address` varchar(255) DEFAULT NULL,
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `godown_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `godown_entry_date` datetime DEFAULT NULL,
  `godown_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_godown`
--

LOCK TABLES `erp_godown` WRITE;
/*!40000 ALTER TABLE `erp_godown` DISABLE KEYS */;
INSERT INTO `erp_godown` VALUES (1,4,1,2,1,'main godown',NULL,'0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(2,4,2,2,2,'main godown',NULL,'0','active','2023-03-02 05:30:54','2023-03-02 05:30:54');
/*!40000 ALTER TABLE `erp_godown` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_godown_level`
--

DROP TABLE IF EXISTS `erp_godown_level`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_godown_level` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `godown_level_name` varchar(255) DEFAULT NULL,
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `godown_level_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `godown_level_entry_date` datetime DEFAULT NULL,
  `godown_level_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `godown_id` (`godown_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_godown_level`
--

LOCK TABLES `erp_godown_level` WRITE;
/*!40000 ALTER TABLE `erp_godown_level` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_godown_level` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_grey_issue`
--

DROP TABLE IF EXISTS `erp_grey_issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_grey_issue` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `mill_id` int NOT NULL DEFAULT '0',
  `grey_issue_prefix` varchar(100) DEFAULT NULL,
  `grey_issue_challan_no` varchar(100) DEFAULT NULL,
  `grey_issue_mill_lot_no` varchar(100) DEFAULT NULL,
  `grey_issue_date` date DEFAULT NULL,
  `grey_issue_taka` double NOT NULL DEFAULT '0',
  `grey_issue_meter` double DEFAULT '0',
  `grey_issue_weight` double NOT NULL DEFAULT '0',
  `grey_issue_remark` text,
  `grey_issue_job_type` varchar(255) DEFAULT NULL,
  `is_rf` enum('0','1') NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `grey_issue_entry_date` datetime DEFAULT NULL,
  `grey_issue_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `godown_id` (`godown_id`),
  KEY `mill_id` (`mill_id`),
  KEY `quality_id` (`quality_id`),
  KEY `opening_purchase_child_id` (`purchase_tax_invoice_child_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_grey_issue`
--

LOCK TABLES `erp_grey_issue` WRITE;
/*!40000 ALTER TABLE `erp_grey_issue` DISABLE KEYS */;
INSERT INTO `erp_grey_issue` VALUES (1,4,2,2,2,0,1,15,89,'','1','','2023-03-25',100,500000,50,'','','0','0','2023-03-25 02:26:01','2023-03-25 02:26:01'),(2,4,1,1,2,1,4,55,107,'','1','','2023-03-07',48,4800,0,'','','0','0','2023-03-29 09:51:57','2023-03-29 09:51:57'),(3,4,1,1,2,0,6,55,174,'','2','','2023-03-29',24,3564,528,'','','0','0','2023-03-29 11:03:51','2023-03-29 11:03:51'),(4,4,1,1,2,0,3,55,107,'','3','','2023-03-31',240,35106.75,5201,'','','0','0','2023-03-31 06:22:45','2023-03-31 06:22:45');
/*!40000 ALTER TABLE `erp_grey_issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_gst`
--

DROP TABLE IF EXISTS `erp_gst`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_gst` (
  `id` int NOT NULL AUTO_INCREMENT,
  `gst_name` varchar(100) DEFAULT NULL,
  `gst_percentage` varchar(100) DEFAULT NULL,
  `gst_entry_date` datetime DEFAULT NULL,
  `gst_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_gst`
--

LOCK TABLES `erp_gst` WRITE;
/*!40000 ALTER TABLE `erp_gst` DISABLE KEYS */;
INSERT INTO `erp_gst` VALUES (1,'nill','0','2022-11-17 12:21:14','2022-11-17 12:21:14'),(2,'exempted','0','2022-11-17 12:21:14','2022-11-17 12:21:14'),(3,'0%','0','2022-11-17 12:21:14','2022-11-17 12:21:14'),(4,'0.25%','0.25','2022-11-17 12:21:14','2022-11-17 12:21:14'),(5,'3%','3','2022-11-17 12:21:14','2022-11-17 12:21:14'),(6,'5%','5','2022-11-17 12:21:14','2022-11-17 12:21:14'),(7,'12%','12','2022-11-17 12:21:14','2022-11-17 12:21:14'),(8,'18%','18','2022-11-17 12:25:01','2022-11-17 12:25:01'),(9,'28%','28','2022-11-17 12:25:01','2022-11-17 12:25:01'),(10,'0.10%','0.10','2022-11-17 12:25:01','2022-11-17 12:25:01'),(11,'1%','1','2022-11-17 12:25:01','2022-11-17 12:25:01'),(12,'1.5%','1.5','2022-11-17 12:25:01','2022-11-17 12:25:01'),(13,'7.5%','7.5','2022-11-17 12:25:01','2022-11-17 12:25:01');
/*!40000 ALTER TABLE `erp_gst` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_inventory`
--

DROP TABLE IF EXISTS `erp_inventory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_inventory` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `quality_type_id` int NOT NULL DEFAULT '0',
  `jober_id` int NOT NULL DEFAULT '0',
  `jober_godown_address_id` int NOT NULL DEFAULT '0',
  `broker_id` int NOT NULL DEFAULT '0',
  `haste_id` int NOT NULL DEFAULT '0',
  `order_no_id` int NOT NULL DEFAULT '0',
  `inventory_order_no` varchar(100) DEFAULT NULL,
  `inventory_prefix` varchar(100) DEFAULT NULL,
  `inventory_challan_no` varchar(100) DEFAULT NULL,
  `inventory_challan_date` date DEFAULT NULL,
  `inventory_lf_no` varchar(100) DEFAULT NULL,
  `inventory_remark` text,
  `inventory_total_unit_sent` double NOT NULL DEFAULT '0',
  `inventory_total_qty_sent` double NOT NULL DEFAULT '0',
  `inventory_total_net_meter` double NOT NULL DEFAULT '0',
  `inventory_total_rate` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `inventory_entry_date` datetime DEFAULT NULL,
  `inventory_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `godown_id` (`godown_id`),
  KEY `quality_type_id` (`quality_type_id`),
  KEY `jober_id` (`jober_id`),
  KEY `jober_godown_address_id` (`jober_godown_address_id`),
  KEY `broker_id` (`broker_id`),
  KEY `haste_id` (`haste_id`),
  KEY `order_no_id` (`order_no_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_inventory`
--

LOCK TABLES `erp_inventory` WRITE;
/*!40000 ALTER TABLE `erp_inventory` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_inventory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_inventory_child`
--

DROP TABLE IF EXISTS `erp_inventory_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_inventory_child` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `inventory_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `qty_per_id` int NOT NULL DEFAULT '0',
  `inventory_child_remark` text,
  `inventory_child_hsn` varchar(100) DEFAULT NULL,
  `inventory_child_stock` varchar(100) DEFAULT NULL,
  `inventory_child_pkg` varchar(100) DEFAULT NULL,
  `inventory_child_unit_sent` double NOT NULL DEFAULT '0',
  `inventory_child_qty_sent` double NOT NULL DEFAULT '0',
  `inventory_child_fold` double NOT NULL DEFAULT '0',
  `inventory_child_net_meter` double NOT NULL DEFAULT '0',
  `inventory_child_rate` double NOT NULL DEFAULT '0',
  `is_completed` enum('0','1') NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `inventory_child_entry_date` datetime DEFAULT NULL,
  `inventory_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `inventory_id` (`inventory_id`),
  KEY `quality_id` (`quality_id`),
  KEY `qty_per_id` (`qty_per_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_inventory_child`
--

LOCK TABLES `erp_inventory_child` WRITE;
/*!40000 ALTER TABLE `erp_inventory_child` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_inventory_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_inventory_invoice`
--

DROP TABLE IF EXISTS `erp_inventory_invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_inventory_invoice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `account_head_id` int NOT NULL DEFAULT '0',
  `processor_id` int NOT NULL DEFAULT '0',
  `tds_on_id` int NOT NULL DEFAULT '0',
  `nature_of_payment_id` int NOT NULL DEFAULT '0',
  `status_id` int NOT NULL DEFAULT '0',
  `inventory_invoice_no` varchar(100) DEFAULT NULL,
  `inventory_invoice_date` date DEFAULT NULL,
  `inventory_invoice_lf_no` varchar(100) DEFAULT NULL,
  `inventory_invoice_total_unit` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_qty` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_meter` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_amount` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_disc_amt` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_freight` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_freight_less` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_taxable` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_sgst` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_cgst` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_igst` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_total` double NOT NULL DEFAULT '0',
  `is_invoice_base_on_grey` enum('0','1') NOT NULL DEFAULT '0',
  `is_tds_deduction` enum('0','1') NOT NULL DEFAULT '0',
  `inventory_invoice_applicable_rate` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_tds` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_included_tax_amount` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_round_off` double NOT NULL DEFAULT '0',
  `inventory_invoice_total_net_amount` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `inventory_invoice_entry_date` datetime DEFAULT NULL,
  `inventory_invoice_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `godown_id` (`godown_id`),
  KEY `account_head_id` (`account_head_id`),
  KEY `tds_on_id` (`tds_on_id`),
  KEY `nature_of_payment_id` (`nature_of_payment_id`),
  KEY `status_id` (`status_id`),
  KEY `processor_id` (`processor_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_inventory_invoice`
--

LOCK TABLES `erp_inventory_invoice` WRITE;
/*!40000 ALTER TABLE `erp_inventory_invoice` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_inventory_invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_inventory_invoice_child`
--

DROP TABLE IF EXISTS `erp_inventory_invoice_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_inventory_invoice_child` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `inventory_invoice_id` int NOT NULL DEFAULT '0',
  `inventory_receive_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `gst_id` int NOT NULL DEFAULT '0',
  `rate_per_id` varchar(100) DEFAULT NULL,
  `inventory_invoice_child_remark` text,
  `inventory_invoice_child_challan_no` varchar(100) DEFAULT NULL,
  `inventory_invoice_child_unit` double NOT NULL DEFAULT '0',
  `inventory_invoice_child_qty` double NOT NULL DEFAULT '0',
  `inventory_invoice_child_rate` double NOT NULL DEFAULT '0',
  `inventory_invoice_child_amount` double NOT NULL DEFAULT '0',
  `inventory_invoice_child_disc_per` double NOT NULL DEFAULT '0',
  `inventory_invoice_child_disc_amt` double NOT NULL DEFAULT '0',
  `inventory_invoice_child_freight` double NOT NULL DEFAULT '0',
  `inventory_invoice_child_freight_less` double NOT NULL DEFAULT '0',
  `inventory_invoice_child_taxable` double NOT NULL DEFAULT '0',
  `inventory_invoice_child_sgst` double NOT NULL DEFAULT '0',
  `inventory_invoice_child_cgst` double NOT NULL DEFAULT '0',
  `inventory_invoice_child_igst` double NOT NULL DEFAULT '0',
  `inventory_invoice_child_total` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `inventory_invoice_child_entry_date` datetime DEFAULT NULL,
  `inventory_invoice_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `inventory_invoice_id` (`inventory_invoice_id`),
  KEY `inventory_receive_id` (`inventory_receive_id`),
  KEY `quality_id` (`quality_id`),
  KEY `gst_id` (`gst_id`),
  KEY `rate_per_id` (`rate_per_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_inventory_invoice_child`
--

LOCK TABLES `erp_inventory_invoice_child` WRITE;
/*!40000 ALTER TABLE `erp_inventory_invoice_child` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_inventory_invoice_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_inventory_receive`
--

DROP TABLE IF EXISTS `erp_inventory_receive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_inventory_receive` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `inventory_id` int NOT NULL DEFAULT '0',
  `inventory_child_id` int NOT NULL DEFAULT '0',
  `receive_quality_id` int NOT NULL DEFAULT '0',
  `jober_id` int NOT NULL DEFAULT '0',
  `inventory_receive_no` double NOT NULL DEFAULT '0',
  `inventory_receive_challan_no` varchar(100) DEFAULT NULL,
  `inventory_receive_challan_date` date DEFAULT NULL,
  `inventory_receive_lot_no` varchar(100) DEFAULT NULL,
  `inventory_receive_unit_sent` double NOT NULL DEFAULT '0',
  `inventory_receive_grey_qty` double NOT NULL DEFAULT '0',
  `inventory_receive_qty_sent` double NOT NULL DEFAULT '0',
  `inventory_receive_meter` double NOT NULL DEFAULT '0',
  `inventory_receive_shortage` double NOT NULL DEFAULT '0',
  `inventory_receive_remark` text,
  `is_receive_completed` enum('0','1') NOT NULL DEFAULT '0',
  `is_return` enum('0','1') NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `inventory_receive_entry_date` datetime DEFAULT NULL,
  `inventory_receive_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `godown_id` (`godown_id`),
  KEY `inventory_id` (`inventory_id`),
  KEY `inventory_child_id` (`inventory_child_id`),
  KEY `receive_quality_id` (`receive_quality_id`),
  KEY `jober_id` (`jober_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_inventory_receive`
--

LOCK TABLES `erp_inventory_receive` WRITE;
/*!40000 ALTER TABLE `erp_inventory_receive` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_inventory_receive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_jober_invoice`
--

DROP TABLE IF EXISTS `erp_jober_invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_jober_invoice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `sale_jober_receive_id` int NOT NULL DEFAULT '0',
  `account_head_id` int NOT NULL DEFAULT '0',
  `jober_invoice_account_type` int NOT NULL DEFAULT '0',
  `tds_on_id` int NOT NULL DEFAULT '0',
  `nature_of_payment_id` int NOT NULL DEFAULT '0',
  `status_id` int NOT NULL DEFAULT '0',
  `jober_id` int NOT NULL DEFAULT '0',
  `jober_invoice_no` double NOT NULL DEFAULT '0',
  `jober_invoice_date` date DEFAULT NULL,
  `jober_invoice_lf_no` varchar(100) DEFAULT NULL,
  `jober_invoice_total_meter` double NOT NULL DEFAULT '0',
  `jober_invoice_total_weight` double NOT NULL DEFAULT '0',
  `jober_invoice_total_total` double NOT NULL DEFAULT '0',
  `jober_invoice_total_disc_amt` double NOT NULL DEFAULT '0',
  `jober_invoice_total_taxable` double NOT NULL DEFAULT '0',
  `jober_invoice_total_sgst` double NOT NULL DEFAULT '0',
  `jober_invoice_total_cgst` double NOT NULL DEFAULT '0',
  `jober_invoice_total_igst` double NOT NULL DEFAULT '0',
  `is_tds_applicable` enum('0','1') NOT NULL DEFAULT '0',
  `jober_invoice_applicable_rate` double NOT NULL DEFAULT '0',
  `jober_invoice_total_tds` double NOT NULL DEFAULT '0',
  `jober_invoice_total_included_tax_amount` double NOT NULL DEFAULT '0',
  `jober_invoice_total_round_off` double NOT NULL DEFAULT '0',
  `jober_invoice_total_net_amount` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `jober_invoice_entry_date` datetime DEFAULT NULL,
  `jober_invoice_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `branch_id` (`branch_id`),
  KEY `godown_id` (`godown_id`),
  KEY `sale_jober_receive_id` (`sale_jober_receive_id`),
  KEY `account_head_id` (`account_head_id`),
  KEY `tds_on_id` (`tds_on_id`),
  KEY `nature_of_payment_id` (`nature_of_payment_id`),
  KEY `status_id` (`status_id`),
  KEY `jober_id` (`jober_id`),
  KEY `jober_invoice_account_type` (`jober_invoice_account_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_jober_invoice`
--

LOCK TABLES `erp_jober_invoice` WRITE;
/*!40000 ALTER TABLE `erp_jober_invoice` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_jober_invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_jober_invoice_child`
--

DROP TABLE IF EXISTS `erp_jober_invoice_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_jober_invoice_child` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `jober_invoice_id` int NOT NULL DEFAULT '0',
  `jober_receive_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `gst_id` int NOT NULL DEFAULT '0',
  `rate_per_id` int NOT NULL DEFAULT '0',
  `jober_invoice_child_remark` text,
  `jober_invoice_child_invoice_no` double NOT NULL DEFAULT '0',
  `jober_invoice_child_meter` double NOT NULL DEFAULT '0',
  `jober_invoice_child_weight` double NOT NULL DEFAULT '0',
  `jober_invoice_child_fold` double NOT NULL DEFAULT '0',
  `jober_invoice_child_count_meter` double NOT NULL DEFAULT '0',
  `jober_invoice_child_rate` double NOT NULL DEFAULT '0',
  `jober_invoice_child_amount` double NOT NULL DEFAULT '0',
  `jober_invoice_child_disc_per` double NOT NULL DEFAULT '0',
  `jober_invoice_child_disc_amt` double NOT NULL DEFAULT '0',
  `jober_invoice_child_taxable` double NOT NULL DEFAULT '0',
  `jober_invoice_child_sgst` double NOT NULL DEFAULT '0',
  `jober_invoice_child_cgst` double NOT NULL DEFAULT '0',
  `jober_invoice_child_igst` double NOT NULL DEFAULT '0',
  `jober_invoice_child_total` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('1','0') NOT NULL DEFAULT '0',
  `jober_invoice_child_entry_date` datetime DEFAULT NULL,
  `jober_invoice_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `jober_invoice_id` (`jober_invoice_id`),
  KEY `jober_receive_id` (`jober_receive_id`),
  KEY `quality_id` (`quality_id`),
  KEY `gst_id` (`gst_id`),
  KEY `rate_per_id` (`rate_per_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_jober_invoice_child`
--

LOCK TABLES `erp_jober_invoice_child` WRITE;
/*!40000 ALTER TABLE `erp_jober_invoice_child` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_jober_invoice_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_journal_purchase`
--

DROP TABLE IF EXISTS `erp_journal_purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_journal_purchase` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `supplier_id` int NOT NULL DEFAULT '0',
  `nature_of_payment_id` int NOT NULL DEFAULT '0',
  `status_id` int DEFAULT '0',
  `tds_on_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `account_head_id` int NOT NULL DEFAULT '0',
  `journal_purchase_account_type` int NOT NULL DEFAULT '0',
  `journal_purchase_invoice_no` varchar(100) DEFAULT NULL,
  `journal_purchase_lf_no` varchar(100) DEFAULT NULL,
  `journal_purchase_invoice_date` date DEFAULT NULL,
  `journal_purchase_credit_days` varchar(50) DEFAULT NULL,
  `journal_purchase_remark` text,
  `is_rcm` enum('0','1') NOT NULL DEFAULT '0',
  `is_tds_applicable` enum('0','1') NOT NULL DEFAULT '0',
  `journal_purchase_applicable_rate` double NOT NULL DEFAULT '0',
  `journal_purchase_tds` double NOT NULL DEFAULT '0',
  `journal_purchase_tds_with_total_net_amount` double NOT NULL DEFAULT '0',
  `journal_purchase_round_off` double NOT NULL DEFAULT '0',
  `journal_purchase_total_amount` double NOT NULL DEFAULT '0',
  `journal_purchase_net_amount` double NOT NULL DEFAULT '0',
  `journal_purchase_child_total_amount` double NOT NULL DEFAULT '0',
  `journal_purchase_child_total_disc` double NOT NULL DEFAULT '0',
  `journal_purchase_child_total_taxable` double NOT NULL DEFAULT '0',
  `journal_purchase_child_total_sgst` double NOT NULL DEFAULT '0',
  `journal_purchase_child_total_cgst` double NOT NULL DEFAULT '0',
  `journal_purchase_child_total_igst` double NOT NULL DEFAULT '0',
  `journal_purchase_tcs_percentage` double NOT NULL DEFAULT '0',
  `journal_purchase_tcs_amount` double NOT NULL DEFAULT '0',
  `journal_purchase_child_net_total` double NOT NULL DEFAULT '0',
  `journal_purchase_image` longtext,
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `journal_purchase_entry_date` datetime DEFAULT NULL,
  `journal_purchase_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `nature_of_payment_id` (`nature_of_payment_id`),
  KEY `status_id` (`status_id`),
  KEY `tds_on_id` (`tds_on_id`),
  KEY `supplier_id` (`supplier_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `branch_id` (`branch_id`),
  KEY `godown_id` (`godown_id`),
  KEY `account_head_id` (`account_head_id`),
  KEY `journal_purchase_account_type` (`journal_purchase_account_type`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_journal_purchase`
--

LOCK TABLES `erp_journal_purchase` WRITE;
/*!40000 ALTER TABLE `erp_journal_purchase` DISABLE KEYS */;
INSERT INTO `erp_journal_purchase` VALUES (1,4,95,0,0,0,1,2,1,1,79,9,'gfht45656','1','2023-03-31','','','1','0',0,0,3465,0,3465,3465,3300,0,3300,82.5,82.5,0,0,0,0,NULL,'0','2023-03-31 02:50:58','2023-03-31 02:50:58'),(2,4,103,0,0,0,1,2,1,1,79,9,'ghj','2','2023-03-31','','','0','0',0,0,134400,0,134400,134400,120000,0,120000,0,0,14400,0,0,0,NULL,'0','2023-03-31 02:51:48','2023-03-31 02:51:48'),(3,4,106,0,0,0,1,2,1,1,79,9,'jkj','3','2023-03-31','','','0','0',0,0,14750,0,14750,14750,12500,0,12500,0,0,2250,0,0,0,NULL,'0','2023-03-31 02:53:46','2023-03-31 02:53:46');
/*!40000 ALTER TABLE `erp_journal_purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_journal_purchase_child`
--

DROP TABLE IF EXISTS `erp_journal_purchase_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_journal_purchase_child` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT '0',
  `journal_purchase_id` int NOT NULL DEFAULT '0',
  `supplier_id` int NOT NULL DEFAULT '0',
  `gst_id` int NOT NULL DEFAULT '0',
  `journal_purchase_child_remark` text,
  `journal_purchase_child_hsn` varchar(100) DEFAULT NULL,
  `journal_purchase_child_unit` double NOT NULL DEFAULT '0',
  `journal_purchase_child_qty` double NOT NULL DEFAULT '0',
  `journal_purchase_child_rate_per_type` enum('unit','qty') NOT NULL DEFAULT 'unit',
  `journal_purchase_child_rate` double NOT NULL DEFAULT '0',
  `journal_purchase_child_amount` double NOT NULL DEFAULT '0',
  `journal_purchase_child_disc_per` double NOT NULL DEFAULT '0',
  `journal_purchase_child_disc_amount` double NOT NULL DEFAULT '0',
  `journal_purchase_child_taxable` double NOT NULL DEFAULT '0',
  `journal_purchase_child_sgst` double NOT NULL DEFAULT '0',
  `journal_purchase_child_cgst` double NOT NULL DEFAULT '0',
  `journal_purchase_child_igst` double NOT NULL DEFAULT '0',
  `journal_purchase_child_total` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `journal_purchase_child_entry_date` datetime DEFAULT NULL,
  `journal_purchase_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `journal_purchase_id` (`journal_purchase_id`),
  KEY `supplier_id` (`supplier_id`),
  KEY `gst_id` (`gst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_journal_purchase_child`
--

LOCK TABLES `erp_journal_purchase_child` WRITE;
/*!40000 ALTER TABLE `erp_journal_purchase_child` DISABLE KEYS */;
INSERT INTO `erp_journal_purchase_child` VALUES (1,4,1,167,6,'yuki','22',22,22,'',150,3300,0,0,3300,2.5,2.5,0,3465,'0','2023-03-31 02:50:58','2023-03-31 02:50:58'),(2,4,2,105,7,'cvn','25455',12,1200,'',100,120000,0,0,120000,0,0,12,134400,'0','2023-03-31 02:51:48','2023-03-31 02:51:48'),(3,4,3,105,8,'','',100,100,'',125,12500,0,0,12500,0,0,18,14750,'0','2023-03-31 02:53:46','2023-03-31 02:53:46');
/*!40000 ALTER TABLE `erp_journal_purchase_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_material`
--

DROP TABLE IF EXISTS `erp_material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_material` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `gst_id` int NOT NULL DEFAULT '0',
  `export_gst_id` int NOT NULL DEFAULT '0',
  `material_name` varchar(255) DEFAULT NULL,
  `material_hsn` varchar(255) DEFAULT NULL,
  `material_image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `material_purchase_qty` int NOT NULL DEFAULT '0',
  `material_sale_qty` int NOT NULL DEFAULT '0',
  `material_purchase_rate` int NOT NULL DEFAULT '0',
  `material_sale_rate` int NOT NULL DEFAULT '0',
  `material_matrix_view` int NOT NULL DEFAULT '0',
  `material_packing_view` int NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `material_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `material_entry_date` datetime DEFAULT NULL,
  `material_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `gst_id` (`gst_id`),
  KEY `export_gst_id` (`export_gst_id`),
  KEY `company_id` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_material`
--

LOCK TABLES `erp_material` WRITE;
/*!40000 ALTER TABLE `erp_material` DISABLE KEYS */;
INSERT INTO `erp_material` VALUES (1,4,1,5,6,'demo','123','demo image',3,3,3,5,3,3,'0','active','2022-11-21 03:49:24','2022-11-25 03:51:41'),(2,4,1,6,6,'gsgsgmo','12345','',5,5,5,5,5,5,'0','active','2022-11-21 04:04:34','2022-11-22 07:04:15'),(3,4,1,4,5,'new material','0312','demo image',2,4,3,5,1,2,'0','active','2022-11-23 11:08:49','2022-11-23 11:08:49'),(4,4,1,4,5,'new material','0312','demo image',2,4,3,5,1,2,'0','active','2022-11-23 11:09:01','2022-11-23 11:09:01'),(5,4,1,6,6,'new mat','4512','demo image',2,2,2,5,5,5,'0','active','2022-11-23 08:41:17','2022-11-26 10:47:12'),(6,4,1,4,4,'dfdff','1501','',2,1,3,0,1,7,'0','active','2022-11-26 05:10:38','2022-11-26 05:12:21'),(7,4,19,6,1,'lycra','60063200','',24,24,24,0,24,24,'0','active','2022-11-26 07:08:56','2022-11-26 07:08:56'),(8,4,35,5,5,'cotton','15','',1,1,1,0,1,1,'0','active','2022-12-16 07:34:46','2022-12-16 07:34:46'),(9,4,35,6,7,'demo','4','',2,2,2,0,2,2,'0','active','2022-12-16 07:35:53','2022-12-16 07:40:37'),(10,4,35,6,6,'first','344343','',27,27,27,0,27,27,'0','active','2022-12-16 07:40:09','2022-12-16 07:41:01'),(11,4,1,6,6,'taiwan','5407','',24,24,24,0,24,24,'0','active','2022-12-21 12:46:04','2022-12-21 12:46:04'),(12,4,1,6,7,'bright lycra','60063200','',20,24,20,0,24,24,'0','active','2022-12-21 01:36:19','2022-12-22 12:17:59'),(13,4,1,6,6,'galaxy','60063200','',20,24,20,0,24,24,'0','active','2022-12-21 01:40:50','2022-12-21 01:40:50'),(14,4,1,6,6,'velvet','600199','',20,24,20,0,24,24,'0','active','2022-12-21 01:45:46','2022-12-21 01:45:46'),(15,4,1,6,6,'chandni','60063200','',20,24,20,0,24,24,'0','active','2022-12-21 01:49:05','2022-12-21 01:50:49'),(16,4,1,6,6,'rotto','54079400','',20,24,20,0,24,24,'0','active','2022-12-21 02:02:13','2022-12-21 02:02:13'),(17,4,1,6,6,'far','600199','',20,24,20,0,24,24,'0','active','2022-12-21 02:07:56','2022-12-21 02:07:56'),(18,4,1,6,6,'taiwan','5407','',0,0,0,0,0,0,'0','active','2022-12-22 12:47:07','2022-12-22 12:47:07'),(19,4,1,6,6,'net','54079400','',0,0,0,0,0,0,'0','active','2022-12-22 01:32:33','2022-12-22 01:32:33'),(20,4,36,6,6,'taiwan','5407','',0,0,0,0,0,0,'0','active','2022-12-23 03:07:12','2022-12-23 03:07:12'),(21,4,36,6,6,'rotto','5407','',0,0,0,0,0,0,'0','active','2022-12-23 03:07:37','2022-12-23 03:07:37'),(22,4,36,6,6,'bright lycra','60063200','',0,0,0,0,0,0,'0','active','2022-12-28 12:44:09','2022-12-28 12:44:09'),(23,4,36,6,1,'fourway','60063200','',0,0,0,0,0,0,'0','active','2023-01-30 05:43:34','2023-01-30 05:43:34'),(24,4,2,6,1,'cotton','8974','',0,0,0,0,0,0,'0','active','2023-03-02 06:19:59','2023-03-02 06:19:59');
/*!40000 ALTER TABLE `erp_material` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_mill_receive`
--

DROP TABLE IF EXISTS `erp_mill_receive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_mill_receive` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `mill_id` int NOT NULL DEFAULT '0',
  `grey_issue_id` int NOT NULL DEFAULT '0',
  `mill_receive_mill_challan_no` varchar(100) DEFAULT NULL,
  `mill_receive_date` date DEFAULT NULL,
  `mill_receive_taka` double DEFAULT '0',
  `mill_receive_qty` double NOT NULL DEFAULT '0',
  `mill_receive_weight` double NOT NULL DEFAULT '0',
  `mill_grey_issue_taka` double NOT NULL DEFAULT '0',
  `mill_grey_issue_meter` double NOT NULL DEFAULT '0',
  `mill_grey_issue_weight` double NOT NULL DEFAULT '0',
  `mill_receive_width` double DEFAULT '0',
  `mill_receive_remark` text,
  `mill_receive_shortage` double NOT NULL DEFAULT '0',
  `mill_receive_mill_lot_no` varchar(100) DEFAULT NULL,
  `mill_receive_lot_completed` enum('0','1') NOT NULL DEFAULT '0',
  `is_grey_return` enum('0','1') NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `mill_receive_entry_date` datetime DEFAULT NULL,
  `mill_receive_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `branch_id` (`branch_id`),
  KEY `godown_id` (`godown_id`),
  KEY `quality_id` (`quality_id`),
  KEY `mill_id` (`mill_id`),
  KEY `grey_issue_id` (`grey_issue_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_mill_receive`
--

LOCK TABLES `erp_mill_receive` WRITE;
/*!40000 ALTER TABLE `erp_mill_receive` DISABLE KEYS */;
INSERT INTO `erp_mill_receive` VALUES (1,4,1,1,2,1,12,107,2,'25','2023-03-29',24,2200,0,24,2400,0,0,'',54.167,'3251','0','0','0','2023-03-29 10:53:48','2023-03-29 10:56:07'),(2,4,1,1,2,1,55,174,3,'GJIGH','2023-03-29',24,2500,0,24,3000,528,0,'',29.854,'7758','1','0','0','2023-03-29 11:08:23','2023-03-29 11:08:23'),(3,4,1,1,2,1,50,107,2,'K4','2023-03-29',24,2400,0,24,2600,0,0,'',7.692,'3251','1','0','0','2023-03-29 11:12:21','2023-03-29 11:12:21'),(4,4,1,1,2,1,35,107,4,'2304','2023-03-31',200,30381.75,4501,240,32381.75,5201,0,'',13.459,'2240','0','0','0','2023-03-31 06:25:14','2023-03-31 06:25:14');
/*!40000 ALTER TABLE `erp_mill_receive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_mill_reprocess`
--

DROP TABLE IF EXISTS `erp_mill_reprocess`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_mill_reprocess` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `mill_id` int NOT NULL DEFAULT '0',
  `mill_master_id` int NOT NULL DEFAULT '0',
  `mill_reprocess_issue_challan_no` varchar(100) DEFAULT NULL,
  `mill_reprocess_issue_date` date DEFAULT NULL,
  `mill_reprocess_issue_taka` double NOT NULL DEFAULT '0',
  `mill_reprocess_issue_meter` double NOT NULL DEFAULT '0',
  `mill_reprocess_issue_weight` double NOT NULL DEFAULT '0',
  `mill_reprocess_require_width` double NOT NULL DEFAULT '0',
  `mill_reprocess_require_shortage` double NOT NULL DEFAULT '0',
  `mill_reprocess_rate` double NOT NULL DEFAULT '0',
  `mill_reprocess_amount` double NOT NULL DEFAULT '0',
  `mill_reprocess_remark` text,
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `mill_reprocess_entry_date` datetime DEFAULT NULL,
  `mill_reprocess_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `godown_id` (`godown_id`),
  KEY `quality_id` (`quality_id`),
  KEY `mill_id` (`mill_id`),
  KEY `mill_master_id` (`mill_master_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_mill_reprocess`
--

LOCK TABLES `erp_mill_reprocess` WRITE;
/*!40000 ALTER TABLE `erp_mill_reprocess` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_mill_reprocess` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_mill_tax_invoice`
--

DROP TABLE IF EXISTS `erp_mill_tax_invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_mill_tax_invoice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `mill_receive_id` int NOT NULL DEFAULT '0',
  `account_head_id` int NOT NULL DEFAULT '0',
  `party_account_head_id` int NOT NULL DEFAULT '0',
  `tds_on_id` int NOT NULL DEFAULT '0',
  `nature_of_payment_id` int NOT NULL DEFAULT '0',
  `status_id` int NOT NULL DEFAULT '0',
  `mill_id` int NOT NULL DEFAULT '0',
  `mill_tax_invoice_no` varchar(100) DEFAULT NULL,
  `mill_tax_invoice_lf_no` varchar(100) DEFAULT NULL,
  `mill_tax_invoice_date` date DEFAULT NULL,
  `mill_tax_invoice_total_taka` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_total_meter` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_total_weight` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_total_amount` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_total_dis_amt` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_total_other_charge` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_total_taxable_amount` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_total_sgst` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_total_cgst` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_total_igst` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_applicable_rate` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_total_tds` double NOT NULL DEFAULT '0',
  `is_tds_applicable` enum('0','1') NOT NULL DEFAULT '0',
  `is_invoice_base_on_grey` enum('0','1') NOT NULL DEFAULT '0',
  `mill_tax_invoice_total_included_tax_amount` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_total_round_off` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_total_net_amount` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_image` longtext,
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `mill_tax_invoice_entry_date` datetime DEFAULT NULL,
  `mill_tax_invoice_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `godown_id` (`godown_id`),
  KEY `mill_receive_id` (`mill_receive_id`),
  KEY `account_head_id` (`party_account_head_id`),
  KEY `tds_on_id` (`tds_on_id`),
  KEY `nature_of_payment_id` (`nature_of_payment_id`),
  KEY `status_id` (`status_id`),
  KEY `mill_id` (`mill_id`),
  KEY `account_head_id_2` (`account_head_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_mill_tax_invoice`
--

LOCK TABLES `erp_mill_tax_invoice` WRITE;
/*!40000 ALTER TABLE `erp_mill_tax_invoice` DISABLE KEYS */;
INSERT INTO `erp_mill_tax_invoice` VALUES (1,4,1,1,2,1,0,89,0,0,0,0,107,'1254','1','2023-03-31',248,34981.75,4501,298254,11354.16,0,286900,7172.5,7172.5,0,0,0,'0','0',301245,0.16,301245,NULL,'0','2023-03-31 07:13:19','2023-03-31 07:13:19');
/*!40000 ALTER TABLE `erp_mill_tax_invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_mill_tax_invoice_child`
--

DROP TABLE IF EXISTS `erp_mill_tax_invoice_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_mill_tax_invoice_child` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `mill_tax_invoice_id` int NOT NULL DEFAULT '0',
  `mill_receive_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `gst_id` int NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_count_on` int NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_remark` text,
  `mill_tax_invoice_child_challan_no` varchar(100) DEFAULT NULL,
  `mill_tax_invoice_child_taka` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_meter` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_weight` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_rate_per` varchar(100) DEFAULT NULL,
  `mill_tax_invoice_child_rate` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_amount` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_disc_per` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_disc_amt` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_other_charge` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_taxable` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_sgst` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_cgst` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_igst` double NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_total` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `mill_tax_invoice_child_entry_date` datetime DEFAULT NULL,
  `mill_tax_invoice_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `mill_tax_invoice_id` (`mill_tax_invoice_id`),
  KEY `mill_receive_id` (`mill_receive_id`),
  KEY `quality_id` (`quality_id`),
  KEY `gst_id` (`gst_id`),
  KEY `mill_tax_invoice_child_count_on` (`mill_tax_invoice_child_count_on`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_mill_tax_invoice_child`
--

LOCK TABLES `erp_mill_tax_invoice_child` WRITE;
/*!40000 ALTER TABLE `erp_mill_tax_invoice_child` DISABLE KEYS */;
INSERT INTO `erp_mill_tax_invoice_child` VALUES (1,4,1,3,50,6,24,'','K4',24,2400,0,'kgs',12,28800,2,576,0,28224,2.5,2.5,0,29635.2,'0','2023-03-31 07:13:19','2023-03-31 07:13:19'),(2,4,1,1,12,6,24,'','25',24,2200,0,'kgs',12,26400,4,1056,0,25344,2.5,2.5,0,26611.2,'0','2023-03-31 07:13:19','2023-03-31 07:13:19'),(3,4,1,4,35,6,24,'','2304',200,30381.75,4501,'kgs',8,243054,4,9722.16,0,233331.84,2.5,2.5,0,244998.44,'0','2023-03-31 07:13:19','2023-03-31 07:13:19');
/*!40000 ALTER TABLE `erp_mill_tax_invoice_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_opening_purchase`
--

DROP TABLE IF EXISTS `erp_opening_purchase`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_opening_purchase` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `supplier_id` int NOT NULL DEFAULT '0',
  `broker_id` int NOT NULL DEFAULT '0',
  `haste_id` int NOT NULL DEFAULT '0',
  `quality_type_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `transporter_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `opening_purchase_sub_order_no` varchar(255) DEFAULT NULL,
  `opening_purchase_challan_no` varchar(255) DEFAULT NULL,
  `opening_purchase_challan_date` date DEFAULT NULL,
  `opening_purchase_delivery_days` varchar(50) DEFAULT NULL,
  `opening_purchase_delivery_completion_date` date DEFAULT NULL,
  `opening_purchase_credit_days` varchar(50) DEFAULT NULL,
  `opening_purchase_other_transporter` varchar(255) DEFAULT NULL,
  `opening_purchase_lr_no` varchar(100) DEFAULT NULL,
  `opening_purchase_driver_name` varchar(255) DEFAULT NULL,
  `opening_purchase_driver_mobile_no` varchar(255) DEFAULT NULL,
  `opening_purchase_driver_vehicle_no` varchar(255) DEFAULT NULL,
  `opening_purchase_bela_marka` varchar(255) DEFAULT NULL,
  `is_transporter_paid` enum('0','1') NOT NULL DEFAULT '0',
  `opening_purchase_remark` text,
  `opening_purchase_total_unit_sent` double NOT NULL DEFAULT '0',
  `opening_purchase_total_qty_sent` double NOT NULL DEFAULT '0',
  `opening_purchase_entry_date` datetime DEFAULT NULL,
  `opening_purchase_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `supplier_id` (`supplier_id`),
  KEY `broker_id` (`broker_id`),
  KEY `haste_id` (`haste_id`),
  KEY `quality_type_id` (`quality_type_id`),
  KEY `godown_id` (`godown_id`),
  KEY `transporter_id` (`transporter_id`),
  KEY `branch_id` (`branch_id`),
  KEY `year_id` (`year_id`),
  KEY `company_id` (`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_opening_purchase`
--

LOCK TABLES `erp_opening_purchase` WRITE;
/*!40000 ALTER TABLE `erp_opening_purchase` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_opening_purchase` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_opening_purchase_child`
--

DROP TABLE IF EXISTS `erp_opening_purchase_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_opening_purchase_child` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `opening_purchase_id` int DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `gst_id` int NOT NULL DEFAULT '0',
  `opening_purchase_child_remark` text,
  `opening_purchase_child_hsn` varchar(100) DEFAULT NULL,
  `opening_purchase_child_qty_per` varchar(100) DEFAULT NULL,
  `opening_purchase_child_cut` double NOT NULL DEFAULT '0',
  `opening_purchase_child_cut_meter` double NOT NULL DEFAULT '0',
  `opening_purchase_child_unit_sent` double NOT NULL DEFAULT '0',
  `opening_purchase_child_pkg` double NOT NULL DEFAULT '0',
  `opening_purchase_child_qty_sent` double NOT NULL DEFAULT '0',
  `opening_purchase_child_meter` double NOT NULL DEFAULT '0',
  `opening_purchase_child_fold` double NOT NULL DEFAULT '0',
  `opening_purchase_child_net_meter` double NOT NULL DEFAULT '0',
  `opening_purchase_child_rate` double NOT NULL DEFAULT '0',
  `opening_purchase_child_entry_date` datetime DEFAULT NULL,
  `opening_purchase_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `opening_purchase_id` (`opening_purchase_id`),
  KEY `quality_id` (`quality_id`),
  KEY `gst_id` (`gst_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_opening_purchase_child`
--

LOCK TABLES `erp_opening_purchase_child` WRITE;
/*!40000 ALTER TABLE `erp_opening_purchase_child` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_opening_purchase_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_party`
--

DROP TABLE IF EXISTS `erp_party`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_party` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `party_group_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `state_id` int NOT NULL DEFAULT '0',
  `account_head_id` int NOT NULL DEFAULT '0',
  `broker_id` int NOT NULL DEFAULT '0',
  `sales_person_id` int NOT NULL DEFAULT '0',
  `sales_man_id` int NOT NULL DEFAULT '0',
  `transporter_id` int NOT NULL DEFAULT '0',
  `party_type_id` int NOT NULL DEFAULT '0',
  `category_id` int NOT NULL DEFAULT '0',
  `nature_of_payment_id` int NOT NULL DEFAULT '0',
  `status_id` int NOT NULL DEFAULT '0',
  `tds_on_id` int NOT NULL DEFAULT '0',
  `party_name` varchar(100) DEFAULT NULL,
  `party_image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `party_gst_no` varchar(255) DEFAULT NULL,
  `party_address_1` varchar(255) DEFAULT NULL,
  `party_address_2` varchar(255) DEFAULT NULL,
  `party_area` varchar(255) DEFAULT NULL,
  `party_city` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `party_pincode` varchar(20) NOT NULL DEFAULT '0',
  `party_country` varchar(100) DEFAULT NULL,
  `party_area_code` varchar(100) DEFAULT NULL,
  `contact_person_1` varchar(255) DEFAULT NULL,
  `contact_person_2` varchar(255) DEFAULT NULL,
  `contact_person_image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `party_mobile_1` varchar(255) DEFAULT NULL,
  `party_mobile_2` varchar(255) DEFAULT NULL,
  `party_landline` varchar(255) DEFAULT NULL,
  `party_email` varchar(255) DEFAULT NULL,
  `party_cc_email` varchar(255) DEFAULT NULL,
  `party_narration` text,
  `party_pancard_no` varchar(255) DEFAULT NULL,
  `base_value` varchar(255) DEFAULT NULL,
  `party_fssai` varchar(255) DEFAULT NULL,
  `is_default` enum('0','1') NOT NULL DEFAULT '0',
  `party_opening_balance` varchar(50) DEFAULT NULL,
  `opening_balance_type` enum('dr','cr','none') DEFAULT 'none',
  `party_discount` double NOT NULL DEFAULT '0',
  `party_auto_entry` enum('0','1') NOT NULL DEFAULT '0',
  `party_auto_email` enum('0','1') DEFAULT '0',
  `party_credit_periods` varchar(100) DEFAULT NULL,
  `party_credit_amount` varchar(100) NOT NULL DEFAULT '0',
  `party_client_credit_date` date DEFAULT NULL,
  `is_tds_applicable` enum('0','1') NOT NULL DEFAULT '0',
  `party_applicable_rate` double NOT NULL DEFAULT '0',
  `is_sms_allow` enum('0','1') NOT NULL DEFAULT '0',
  `is_tcs_applicable` enum('0','1') NOT NULL DEFAULT '0',
  `is_primary` enum('0','1') NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `party_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `party_entry_date` datetime DEFAULT NULL,
  `party_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `group_id` (`party_group_id`),
  KEY `global_id` (`state_id`),
  KEY `account_head_id` (`account_head_id`),
  KEY `broker_id` (`broker_id`),
  KEY `sales_man_id` (`sales_man_id`),
  KEY `transporter_id` (`transporter_id`),
  KEY `tds_on_id` (`tds_on_id`),
  KEY `status_id` (`status_id`),
  KEY `nature_of_payment_id` (`nature_of_payment_id`),
  KEY `category_id` (`category_id`),
  KEY `party_type_id` (`party_type_id`),
  KEY `company_id` (`company_id`),
  KEY `sales_person_id` (`sales_person_id`)
) ENGINE=InnoDB AUTO_INCREMENT=176 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_party`
--

LOCK TABLES `erp_party` WRITE;
/*!40000 ALTER TABLE `erp_party` DISABLE KEYS */;
INSERT INTO `erp_party` VALUES (1,4,0,1,0,91,0,0,0,0,0,0,0,0,0,'gst tax payable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(2,4,0,1,0,42,0,0,0,0,0,0,0,0,0,'tds on value addition',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(3,4,0,1,0,42,0,0,0,0,0,0,0,0,0,'tds on mill',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(4,4,0,1,0,25,0,0,0,0,0,0,0,0,0,'closing stock',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(5,4,0,1,0,47,0,0,0,0,0,0,0,0,0,'opening stock',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(6,4,0,1,0,40,0,0,0,0,0,0,0,0,0,'Sales Journal',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(7,4,0,1,0,90,0,0,0,0,0,0,0,0,0,'value addition invoice',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(8,4,0,1,0,89,0,0,0,0,0,0,0,0,0,'mill invoice',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(9,4,0,1,0,79,0,0,0,0,0,0,0,0,0,'purchase journal',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(10,4,0,1,0,39,0,0,0,0,0,0,0,0,0,'purchase return',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(11,4,0,1,0,72,0,0,0,0,0,0,0,0,0,'invoice',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(12,4,0,1,0,57,0,0,0,0,0,0,0,0,0,'bill of supply',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(13,4,0,1,0,56,0,0,0,0,0,0,0,0,0,'purchase tax invoice','','','','','','','0',NULL,'','','','','','','','','','','','','','0','','none',0,'0','0','','0','2023-03-30','0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-30 05:46:39'),(14,4,0,1,0,80,0,0,0,0,0,0,0,0,0,'sales journal',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(15,4,0,1,0,38,0,0,0,0,0,0,0,0,0,'sales return',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(16,4,0,1,0,71,0,0,0,0,0,0,0,0,0,'invoice',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(17,4,0,1,0,55,0,0,0,0,0,0,0,0,0,'bill of supply',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(18,4,0,1,0,54,0,0,0,0,0,0,0,0,0,'sale tax invoice','','','','','','','0',NULL,'','','','','','','','','','','','','','0','','none',0,'0','0','','0','2023-03-30','0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-30 05:47:09'),(19,4,0,1,0,45,0,0,0,0,0,0,0,0,0,'trading account 2022-2023',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(20,4,0,1,0,46,0,0,0,0,0,0,0,0,0,'profit and loss 2022-2023',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(21,4,0,1,0,42,0,0,0,0,0,0,0,0,0,'tds on payment of salary',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(22,4,0,1,0,33,0,0,0,0,0,0,0,0,0,'discount received',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(23,4,0,1,0,32,0,0,0,0,0,0,0,0,0,'discount allowed',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(24,4,0,1,0,18,0,0,0,0,0,0,0,0,0,'cash',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(25,4,0,1,0,70,0,0,0,0,0,0,0,0,0,'interim igst receivable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(26,4,0,1,0,69,0,0,0,0,0,0,0,0,0,'interim cgst receivable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(27,4,0,1,0,68,0,0,0,0,0,0,0,0,0,'interim sgst receivable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(28,4,0,1,0,67,0,0,0,0,0,0,0,0,0,'interim igst payable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(29,4,0,1,0,66,0,0,0,0,0,0,0,0,0,'interim cgst payable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(30,4,0,1,0,65,0,0,0,0,0,0,0,0,0,'interim sgst payable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(31,4,0,1,0,64,0,0,0,0,0,0,0,0,0,'igst receivable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(32,4,0,1,0,63,0,0,0,0,0,0,0,0,0,'cgst receivable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(33,4,0,1,0,62,0,0,0,0,0,0,0,0,0,'sgst receivable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(34,4,0,1,0,61,0,0,0,0,0,0,0,0,0,'igst payable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(35,4,0,1,0,60,0,0,0,0,0,0,0,0,0,'cgst payable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(36,4,0,1,0,59,0,0,0,0,0,0,0,0,0,'sgst payable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(37,4,0,1,0,56,0,0,0,0,0,0,0,0,0,'grey invoice',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(38,4,0,1,0,32,0,0,0,0,0,0,0,0,0,'discount allowed (gst)',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(39,4,0,1,0,48,0,0,0,0,0,0,0,0,0,'depreciation',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(40,4,0,1,0,24,0,0,0,0,0,0,0,0,0,'secure laon',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(41,4,0,1,0,98,0,0,0,0,0,0,0,0,0,'credit note',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:28:43','2023-03-02 05:28:43'),(42,4,0,2,0,91,0,0,0,0,0,0,0,0,0,'gst tax payable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(43,4,0,2,0,42,0,0,0,0,0,0,0,0,0,'tds on value addition',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(44,4,0,2,0,42,0,0,0,0,0,0,0,0,0,'tds on mill',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(45,4,0,2,0,25,0,0,0,0,0,0,0,0,0,'closing stock',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(46,4,0,2,0,47,0,0,0,0,0,0,0,0,0,'opening stock',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(47,4,0,2,0,40,0,0,0,0,0,0,0,0,0,'Sales Journal',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(48,4,0,2,0,90,0,0,0,0,0,0,0,0,0,'value addition invoice',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(49,4,0,2,0,89,0,0,0,0,0,0,0,0,0,'mill invoice',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(50,4,0,2,0,79,0,0,0,0,0,0,0,0,0,'purchase journal',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(51,4,0,2,0,39,0,0,0,0,0,0,0,0,0,'purchase return',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(52,4,0,2,0,72,0,0,0,0,0,0,0,0,0,'invoice',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(53,4,0,2,0,57,0,0,0,0,0,0,0,0,0,'bill of supply',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(54,4,0,2,0,56,0,0,0,0,0,0,0,0,0,'tax invoice',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(55,4,0,2,0,80,0,0,0,0,0,0,0,0,0,'sales journal',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(56,4,0,2,0,38,0,0,0,0,0,0,0,0,0,'sales return',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(57,4,0,2,0,71,0,0,0,0,0,0,0,0,0,'invoice',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(58,4,0,2,0,55,0,0,0,0,0,0,0,0,0,'bill of supply',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(59,4,0,2,0,54,0,0,0,0,0,0,0,0,0,'tax invoice',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(60,4,0,2,0,45,0,0,0,0,0,0,0,0,0,'trading account 2022-2023',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(61,4,0,2,0,46,0,0,0,0,0,0,0,0,0,'profit and loss 2022-2023',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(62,4,0,2,0,42,0,0,0,0,0,0,0,0,0,'tds on payment of salary',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(63,4,0,2,0,33,0,0,0,0,0,0,0,0,0,'discount received',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(64,4,0,2,0,32,0,0,0,0,0,0,0,0,0,'discount allowed',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(65,4,0,2,0,18,0,0,0,0,0,0,0,0,0,'cash',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(66,4,0,2,0,70,0,0,0,0,0,0,0,0,0,'interim igst receivable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(67,4,0,2,0,69,0,0,0,0,0,0,0,0,0,'interim cgst receivable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(68,4,0,2,0,68,0,0,0,0,0,0,0,0,0,'interim sgst receivable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(69,4,0,2,0,67,0,0,0,0,0,0,0,0,0,'interim igst payable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(70,4,0,2,0,66,0,0,0,0,0,0,0,0,0,'interim cgst payable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(71,4,0,2,0,65,0,0,0,0,0,0,0,0,0,'interim sgst payable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(72,4,0,2,0,64,0,0,0,0,0,0,0,0,0,'igst receivable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(73,4,0,2,0,63,0,0,0,0,0,0,0,0,0,'cgst receivable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(74,4,0,2,0,62,0,0,0,0,0,0,0,0,0,'sgst receivable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(75,4,0,2,0,61,0,0,0,0,0,0,0,0,0,'igst payable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(76,4,0,2,0,30,0,0,0,0,0,0,0,0,0,'cgst payable','','','','','','','0',NULL,'','','','','','','','','','','','','','0','','none',0,'0','0','','0','2023-03-02','0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 06:18:34'),(77,4,0,2,0,59,0,0,0,0,0,0,0,0,0,'sgst payable',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(78,4,0,2,0,56,0,0,0,0,0,0,0,0,0,'grey invoice',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(79,4,0,2,0,32,0,0,0,0,0,0,0,0,0,'discount allowed (gst)',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(80,4,0,2,0,48,0,0,0,0,0,0,0,0,0,'depreciation',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(81,4,0,2,0,24,0,0,0,0,0,0,0,0,0,'secure laon',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(82,4,0,2,0,98,0,0,0,0,0,0,0,0,0,'credit note',NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'0',NULL,'none',0,'0','0',NULL,'0',NULL,'0',0,'0','0','1','0','active','2023-03-02 05:30:54','2023-03-02 05:30:54'),(83,4,0,1,413,26,0,0,0,0,0,0,0,0,0,'manohar creditor','','','105, c-wing, kohinoor complex, ghod dod road','','','surat','0','india','','8956895689','','','9685989898','','','manohar@gmail.com','','','','','','0','','dr',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 05:31:50','2023-03-11 07:55:06'),(84,4,0,2,413,82,0,0,0,0,0,0,0,0,0,'manu','','44DFGDF6545D4FG','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 06:17:19','2023-03-02 06:17:19'),(85,4,0,2,1022,76,0,0,0,0,0,0,0,0,0,'manohar broker','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 06:23:17','2023-03-02 06:23:17'),(86,4,0,2,1022,31,0,0,0,0,0,0,0,0,0,'manohar broker','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 06:24:04','2023-03-02 06:24:04'),(87,4,0,2,413,75,0,0,0,0,0,0,0,0,0,'mataji','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 06:28:57','2023-03-02 06:28:57'),(88,4,0,2,413,26,0,0,0,0,0,0,0,0,0,'manohar suplire','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 06:38:23','2023-03-02 06:38:23'),(89,4,0,2,413,73,0,0,0,0,0,0,0,0,0,'maduri','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 06:54:57','2023-03-02 06:54:57'),(90,4,0,2,413,12,0,0,0,0,0,0,0,0,0,'purchase acc','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 06:58:14','2023-03-02 06:58:14'),(91,4,0,2,413,13,0,0,0,0,0,1,0,0,0,'seeles accc','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 07:27:23','2023-03-02 07:27:23'),(92,4,0,1,413,78,0,0,0,0,0,0,0,0,0,'khodal fashion','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 09:33:18','2023-03-02 09:33:18'),(93,4,0,1,413,27,0,0,0,0,0,0,0,0,0,'kck textile ahmedabad','','','','','','ahemedabad','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 09:33:55','2023-03-02 09:33:55'),(94,4,0,1,786,27,0,0,0,0,0,0,0,0,0,'chavan traders solapur','','27AAHHG5987M1ZG','','','','solapur','0','india','','','','','','','','','','','','','','0','','dr',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 09:34:41','2023-03-20 11:46:12'),(95,4,0,1,413,75,0,0,0,0,0,0,0,0,0,'vrl trasport','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 09:35:03','2023-03-02 09:35:03'),(96,4,0,1,413,78,0,0,0,0,0,0,48,20,5,'urja fashion','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','1',0,'0','0','0','0','active','2023-03-02 09:35:31','2023-03-02 10:26:38'),(97,4,0,1,413,78,0,0,0,0,0,0,49,2,2,'deep creation','','','','','','surat','0','india','','','','','','','','','','','','','','0','','dr',0,'0','0','','','2023-03-02','1',5,'0','0','0','0','active','2023-03-02 09:35:53','2023-03-23 12:42:30'),(98,4,0,1,413,27,0,0,0,0,0,0,0,0,0,'ranka textile indore','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 09:36:20','2023-03-02 09:36:20'),(99,4,0,2,413,27,0,0,0,0,0,0,0,0,0,'vikram patel','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 09:47:50','2023-03-02 09:47:50'),(100,4,0,1,413,26,0,0,0,0,0,0,0,0,0,'devoo textile','','24ADJPD6018R2Z9','1st to 3rd floor plot no 6 to 10','anand indus est.bhatar char rasta','surat','surat','395010','india','','','','','7568513330','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 10:33:42','2023-03-02 10:33:42'),(101,4,0,1,413,31,0,0,0,0,0,0,0,0,0,'mundra ji','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-02','0',0,'0','0','0','0','active','2023-03-02 10:40:27','2023-03-02 10:40:27'),(102,4,0,2,413,16,0,0,0,0,0,0,0,0,0,'state bank of india','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-09','0',0,'0','0','0','0','active','2023-03-09 06:42:39','2023-03-09 06:42:39'),(103,4,0,1,531,27,0,0,0,0,0,0,0,0,0,'ms textile shrinagar','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-09','0',0,'0','0','0','0','active','2023-03-09 06:53:08','2023-03-09 06:53:08'),(104,4,0,1,413,7,0,0,0,0,0,0,0,0,0,'office systems','','','','','','','0','india','','','','','','','','','','','','','','0','','dr',0,'0','0','','','2023-03-11','0',0,'0','0','0','0','active','2023-03-11 07:49:16','2023-03-11 07:49:16'),(105,4,0,1,786,7,0,0,0,0,0,0,0,0,0,'furniture expence','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-11','0',0,'0','0','0','0','active','2023-03-11 07:49:44','2023-03-11 07:49:44'),(106,4,0,1,786,76,0,0,0,0,0,0,0,0,0,'bhilosa industries pvt ltd','','26AAACB1538K1ZT','','','','silvassa','396230','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-20','0',0,'0','0','0','0','active','2023-03-20 12:04:22','2023-03-20 12:04:22'),(107,4,0,1,413,73,0,0,0,0,0,0,0,0,0,'nobletex industries ltd','','24AAACN7942F1ZK','','','surat','surat','395010','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-20','0',0,'0','0','0','0','active','2023-03-20 12:06:20','2023-03-20 12:06:20'),(108,4,0,1,703,27,0,0,0,0,0,0,0,0,0,'anand tent supplaires indore','','','','','','indore','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-23','0',0,'0','0','0','0','active','2023-03-23 12:36:39','2023-03-23 12:36:39'),(109,4,0,1,413,26,0,0,0,0,0,0,0,0,0,'balmukund silk mills  surat','','24AAVFB8436C1ZC','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-23','0',0,'0','0','0','0','active','2023-03-23 12:38:03','2023-03-23 12:38:03'),(110,4,0,1,413,75,0,0,0,0,0,0,0,0,0,'batco roadlines','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-23','0',0,'0','0','0','0','active','2023-03-23 12:38:37','2023-03-23 12:38:37'),(111,4,0,1,413,75,0,0,0,0,0,0,0,0,0,'sky travels','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-23','0',0,'0','0','0','0','active','2023-03-23 12:38:59','2023-03-23 12:38:59'),(112,4,0,1,413,78,0,0,0,0,0,0,49,2,2,'yug creation','','','','','','surat','0','india','','','','','','','','','','','','','','0','','dr',0,'0','0','','','2023-03-23','1',5,'0','0','0','0','active','2023-03-23 12:40:30','2023-03-23 12:41:56'),(113,4,0,1,703,27,0,0,0,111,0,0,0,0,0,'nakoda textiles mandsore','','','','','','mandsore','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:24:49','2023-03-24 08:24:49'),(114,4,0,1,413,27,0,0,0,0,0,0,0,0,0,'dhavalkumar and com ahmedabad','','','dd','','ff','ahemedabad','0','india','','','','','9662705779','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:25:47','2023-03-24 08:25:47'),(115,4,0,1,413,75,0,0,0,0,0,0,0,0,0,'kabra logistics','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:26:14','2023-03-24 08:26:14'),(116,4,0,1,413,75,0,0,0,0,0,0,0,0,0,'s k roadways','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:26:32','2023-03-24 08:26:32'),(117,4,0,1,413,75,0,0,0,0,0,0,0,0,0,'pashupati parcel movers','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:27:06','2023-03-24 08:27:06'),(118,4,0,1,413,75,0,0,0,0,0,0,0,0,0,'vikram cargo','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:27:28','2023-03-24 08:27:28'),(119,4,0,1,413,75,0,0,0,0,0,0,0,0,0,'by travels','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:27:47','2023-03-24 08:27:47'),(120,4,0,1,413,75,0,0,0,0,0,0,0,0,0,'to self ( hand to hand )','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:28:10','2023-03-24 08:28:23'),(121,4,0,1,413,27,0,0,0,0,0,0,0,0,0,'porwal industri indore','','','','','','indore','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','1','active','2023-03-24 08:29:00','2023-03-24 08:29:12'),(122,4,0,1,703,27,0,0,0,0,0,0,0,0,0,'porwal industry indore','','','','','','indore','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:29:39','2023-03-24 08:29:39'),(123,4,0,1,413,27,0,0,0,0,0,0,0,0,0,'bhagwati mandap bazar rajkot','','','','','','rajkot','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:30:17','2023-03-24 08:30:17'),(124,4,0,1,1022,27,0,0,0,0,0,0,0,0,0,'laxmi dyeing and tent jaipur','','','','','','jaipur','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:31:27','2023-03-24 08:31:27'),(125,4,0,1,1022,27,0,0,0,0,0,0,0,0,0,'tiwari textile jaipur','','','','','','jaipur','0','india','','','','','9662705779','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:32:20','2023-03-24 08:32:20'),(126,4,0,1,1022,27,0,0,0,0,0,0,0,0,0,'alpeshkumar talwada','','','','','','talwada','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:32:49','2023-03-24 08:32:49'),(127,4,0,1,786,27,0,0,0,0,0,0,0,0,0,'shiv om fabrics bhiwandi','','','','','','bhiwandi','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 08:33:29','2023-03-24 08:33:29'),(128,4,0,1,413,27,0,0,0,0,0,0,49,2,2,'khodiyar creation job surat','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','1',5,'0','0','0','0','active','2023-03-24 09:31:23','2023-03-24 09:34:43'),(129,4,0,1,413,78,0,0,0,0,0,0,49,2,2,'janvi creation job','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','1',5,'0','0','0','0','active','2023-03-24 09:34:23','2023-03-24 09:34:23'),(130,4,0,1,413,78,0,0,0,0,0,0,49,2,2,'swastik creation','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','1',5,'0','0','0','0','active','2023-03-24 09:35:37','2023-03-24 09:35:37'),(131,4,0,1,413,78,0,0,0,0,0,0,49,2,2,'isha fashion job','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','1',5,'0','0','0','0','active','2023-03-24 09:37:17','2023-03-24 09:37:17'),(132,4,0,1,413,73,0,0,0,0,0,0,0,0,0,'durga processores','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 09:37:56','2023-03-24 09:37:56'),(133,4,0,1,413,27,0,0,0,0,0,0,0,0,0,'open order','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-24','0',0,'0','0','0','0','active','2023-03-24 12:03:48','2023-03-24 12:03:48'),(134,4,0,1,486,27,0,0,0,0,0,0,0,0,0,'adhunik dying ambala city','','','ambala city','','','ambala city','0','india','','8758109881','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 10:26:18','2023-03-25 10:26:18'),(135,4,0,1,413,27,0,0,0,0,0,0,0,0,0,'shree sati mata tex fab','','','civil hospital road','','ahmadabad','ahemedabad','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 10:59:43','2023-03-25 10:59:43'),(136,4,0,1,1022,27,0,0,0,0,0,0,0,0,0,'mahadev tent supllirs sanchore','','','','','sanchore','sanchore','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 11:17:33','2023-03-27 06:05:58'),(137,4,0,1,1399,27,0,0,0,0,0,0,0,0,0,'maa laxmi enterprises','','','','','','badkulla kulkatta','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 11:23:37','2023-03-25 11:23:37'),(138,4,0,1,703,27,0,0,0,0,0,0,0,0,0,'mahadev tent supliier jabalpur','','','','','','jabalpur','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 11:46:05','2023-03-27 06:06:28'),(139,4,0,1,786,27,0,0,0,0,0,0,0,0,0,'jain  textile mahaveerji','','','','','','dhulia','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 12:01:33','2023-03-25 12:01:33'),(140,4,0,1,703,27,0,0,0,0,0,0,0,0,0,'nakoda textiles mandsore','','','','','','mandsour','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 12:06:02','2023-03-25 12:06:02'),(141,4,0,1,1022,27,0,0,0,0,0,0,0,0,0,'khimaj mata tent sup','','','shivganj','','','shivganj','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 02:12:19','2023-03-25 02:12:19'),(142,4,0,1,1262,27,0,0,0,0,0,0,0,0,0,'india tent sup balia','','','','','main bazar','balia','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 02:17:28','2023-03-25 02:17:28'),(143,4,0,1,703,27,0,0,0,0,0,0,0,0,0,'shree laxmi tent sup suvasra','','','','','main bazar','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 02:27:35','2023-03-25 02:27:35'),(144,4,0,1,1022,27,0,0,0,0,0,0,0,0,0,'mangal murty enterprises jaipur','','','','','main  bazar','jiaipur','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 02:55:10','2023-03-25 02:55:10'),(145,4,0,2,413,78,0,0,0,0,0,0,0,0,0,'vikram jober','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 03:01:25','2023-03-25 03:01:25'),(146,4,0,1,703,27,0,0,0,0,0,0,0,0,0,'shubh tent supllire chindwara','','','','','','chindwara','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 03:05:59','2023-03-25 03:05:59'),(147,4,0,1,383,27,0,0,0,0,0,0,0,0,0,'hitesh tent sup munger','','','','','','munger bilaspur','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 03:27:27','2023-03-25 03:27:27'),(148,4,0,1,197,27,0,0,0,0,0,0,0,0,0,'skml  cut pice','','','','','','indana city vishakapattanm','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 03:31:04','2023-03-25 03:31:04'),(149,4,0,1,703,27,0,0,0,0,0,0,0,0,0,'deepak tent sup beaohari','','','','','','beohari','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-25','0',0,'0','0','0','0','active','2023-03-25 03:34:56','2023-03-25 03:34:56'),(150,4,0,1,703,27,0,0,0,0,0,0,0,0,0,'b.p.and son,s sehdol','','','','','singapor road','sehdol','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-26','0',0,'0','0','0','0','active','2023-03-26 06:00:31','2023-03-26 06:00:31'),(151,4,0,1,927,27,0,0,0,0,0,0,0,0,0,'maa sarla chitralay angul','','','','','','angul','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-26','0',0,'0','0','0','0','active','2023-03-26 06:06:45','2023-03-26 06:06:45'),(152,4,0,1,1022,27,0,0,0,0,0,0,0,0,0,'amar tent supllire rajgarh','','','','','','rajgarh raj','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-26','0',0,'0','0','0','0','active','2023-03-26 06:14:39','2023-03-26 06:14:39'),(153,4,0,1,1022,27,0,0,0,0,0,0,0,0,0,'mukesh tent sup rajgarg','','','','','','rajgarh raj','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-26','0',0,'0','0','0','0','active','2023-03-26 06:19:02','2023-03-26 06:19:02'),(154,4,0,1,1022,27,0,0,0,0,0,0,0,0,0,'kohinoor dying and tent jaipur','','','','','','jaipur','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-26','0',0,'0','0','0','0','active','2023-03-26 06:35:34','2023-03-26 06:35:34'),(155,4,0,1,413,16,0,0,0,0,0,0,0,0,0,'union bank','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-27','0',0,'0','0','0','0','active','2023-03-27 05:29:02','2023-03-27 05:29:02'),(156,4,0,1,786,27,0,0,0,0,0,0,0,0,0,'pappu  bhai malad','','','','','','malad mumbai','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-27','0',0,'0','0','0','0','active','2023-03-27 02:22:43','2023-03-27 02:22:43'),(157,4,0,1,1022,27,0,0,0,0,0,0,0,0,0,'arvind tent mall sanchore','','','','','highway road','sanchore','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-27','0',0,'0','0','0','0','active','2023-03-27 02:35:34','2023-03-27 02:35:34'),(158,4,0,1,786,27,0,0,0,0,0,0,0,0,0,'a r khapekar nagpur','','','','','','nagpur','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-27','0',0,'0','0','0','0','active','2023-03-27 02:42:55','2023-03-27 02:42:55'),(159,4,0,1,1022,27,0,0,0,0,0,0,0,0,0,'laxmi dying jaipur','','','','','parek colleg','jaipur','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-27','0',0,'0','0','0','0','active','2023-03-27 02:54:48','2023-03-27 02:54:48'),(160,4,0,1,1022,27,0,0,0,0,0,0,0,0,0,'svm textile jaipur','','','','','','jaipur','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-28','0',0,'0','0','0','0','active','2023-03-28 10:53:56','2023-03-28 10:53:56'),(161,4,0,1,703,27,0,0,0,0,0,0,0,0,0,'amar tent katni','','','','','','katni','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-28','0',0,'0','0','0','0','active','2023-03-28 10:58:23','2023-03-28 10:58:23'),(162,4,0,1,927,27,0,0,0,0,0,0,0,0,0,'modi fabrics angul','','','','','','angul','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-28','0',0,'0','0','0','0','active','2023-03-28 11:07:30','2023-03-28 11:07:30'),(163,4,0,1,405,27,0,0,0,0,0,0,0,0,0,'sunrise agency delhi','','','','','','delhi','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-28','0',0,'0','0','0','0','active','2023-03-28 11:17:49','2023-03-28 11:17:49'),(164,4,0,1,413,27,0,0,0,0,0,0,0,0,0,'vimal  mandap ahmadabad','','','','','','ahamdabad','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-28','0',0,'0','0','0','0','active','2023-03-28 11:33:44','2023-03-28 11:33:44'),(165,4,0,1,413,27,0,0,0,0,0,0,0,0,0,'anand tent suo indore','','','','','nandal pura bazar','indore','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-28','0',0,'0','0','0','0','active','2023-03-28 11:38:33','2023-03-28 11:38:33'),(166,4,0,1,413,78,0,0,0,0,0,0,0,0,0,'shree tex nilesh bhai','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-28','0',0,'0','0','0','0','active','2023-03-28 03:05:00','2023-03-28 03:05:00'),(167,4,0,1,413,7,0,0,0,0,0,0,0,0,0,'transportataion','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-29','0',0,'0','0','0','0','active','2023-03-29 06:51:43','2023-03-29 06:51:43'),(168,4,0,1,413,82,0,0,0,0,0,0,0,0,0,'j .k packeging','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-29','0',0,'0','0','0','0','active','2023-03-29 07:36:18','2023-03-29 07:36:18'),(169,4,0,1,413,7,0,0,0,0,0,0,0,0,0,'packing material expence','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-29','0',0,'0','0','0','0','active','2023-03-29 07:36:39','2023-03-29 07:36:39'),(170,4,0,1,786,27,0,0,0,0,0,0,0,0,0,'chabra agency nagpur','','','','','','nagpur','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-29','0',0,'0','0','0','0','active','2023-03-29 09:14:12','2023-03-29 09:14:12'),(171,4,0,1,413,76,0,0,0,0,0,0,0,0,0,'balaji textile grey','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-29','0',0,'0','0','0','0','active','2023-03-29 11:00:06','2023-03-29 11:00:06'),(172,4,0,1,413,76,0,0,0,0,0,0,0,0,0,'mahek textile grey','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-29','0',0,'0','0','0','0','active','2023-03-29 11:00:29','2023-03-29 11:00:29'),(173,4,0,1,413,76,0,0,0,0,0,0,0,0,0,'balmukund fabrics grey','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-29','0',0,'0','0','0','0','active','2023-03-29 11:01:27','2023-03-29 11:01:27'),(174,4,0,1,413,73,0,0,0,0,0,0,0,0,0,'kirtiprada mill','','','','','','surat','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-29','0',0,'0','0','0','0','active','2023-03-29 11:02:25','2023-03-29 11:02:25'),(175,4,0,2,413,75,0,0,0,0,0,0,0,0,0,'demo transporter','','','','','','','0','india','','','','','','','','','','','','','','0','','none',0,'0','0','','','2023-03-31','0',0,'0','0','0','0','active','2023-03-31 01:21:35','2023-03-31 01:21:35');
/*!40000 ALTER TABLE `erp_party` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_party_group`
--

DROP TABLE IF EXISTS `erp_party_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_party_group` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL,
  `account_head_id` int NOT NULL DEFAULT '0',
  `party_group_name` varchar(255) DEFAULT NULL,
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `party_group_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `party_group_entry_date` datetime DEFAULT NULL,
  `party_group_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `account_head_id` (`account_head_id`),
  KEY `company_id` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_party_group`
--

LOCK TABLES `erp_party_group` WRITE;
/*!40000 ALTER TABLE `erp_party_group` DISABLE KEYS */;
INSERT INTO `erp_party_group` VALUES (1,4,2,29,'manu','0','active','2023-03-02 06:21:53','2023-03-02 06:21:53');
/*!40000 ALTER TABLE `erp_party_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_party_opening_balance`
--

DROP TABLE IF EXISTS `erp_party_opening_balance`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_party_opening_balance` (
  `id` int NOT NULL AUTO_INCREMENT,
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `party_id` int NOT NULL DEFAULT '0',
  `party_balance` double NOT NULL DEFAULT '0',
  `party_balance_type` varchar(100) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `entry_date` datetime DEFAULT NULL,
  `update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `party_id` (`party_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_party_opening_balance`
--

LOCK TABLES `erp_party_opening_balance` WRITE;
/*!40000 ALTER TABLE `erp_party_opening_balance` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_party_opening_balance` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_purchase_return`
--

DROP TABLE IF EXISTS `erp_purchase_return`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_purchase_return` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `supplier_id` int NOT NULL DEFAULT '0',
  `broker_id` int NOT NULL DEFAULT '0',
  `haste_id` int NOT NULL DEFAULT '0',
  `receiving_goods_address_id` int NOT NULL DEFAULT '0',
  `invoice_no_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `transporter_id` int NOT NULL DEFAULT '0',
  `buyer_id` int NOT NULL DEFAULT '0',
  `tds_on_id` int NOT NULL DEFAULT '0',
  `nature_of_payment_id` int NOT NULL DEFAULT '0',
  `status_id` int NOT NULL DEFAULT '0',
  `purchase_return_type_id` int NOT NULL DEFAULT '0',
  `quality_type_id` int NOT NULL DEFAULT '0',
  `purchase_return_account_type` varchar(100) DEFAULT NULL,
  `purchase_return_prefix` varchar(100) DEFAULT NULL,
  `purchase_return_note_no` varchar(100) DEFAULT NULL,
  `purchase_return_date` date DEFAULT NULL,
  `purchase_return_other_transporter` varchar(100) DEFAULT NULL,
  `purchase_return_lr_no` varchar(100) DEFAULT NULL,
  `purchase_return_bale_marka` varchar(100) DEFAULT NULL,
  `purchase_return_remark` text,
  `purchase_return_lf_no` varchar(100) DEFAULT NULL,
  `purchase_return_days` varchar(100) DEFAULT NULL,
  `purchase_return_document_no` varchar(100) DEFAULT NULL,
  `purchase_return_document_date` date DEFAULT NULL,
  `is_tds_applicable` enum('0','1') NOT NULL DEFAULT '0',
  `purchase_return_tds_applicable_rate` double NOT NULL DEFAULT '0',
  `purchase_return_total_tds` double NOT NULL DEFAULT '0',
  `purchase_return_total_unit_sent` double NOT NULL DEFAULT '0',
  `purchase_return_total_qty_sent` double NOT NULL DEFAULT '0',
  `purchase_return_amount` double NOT NULL DEFAULT '0',
  `purchase_return_total_disc_amt` double NOT NULL DEFAULT '0',
  `purchase_return_total_freight` double NOT NULL DEFAULT '0',
  `purchase_return_total_taxable` double NOT NULL DEFAULT '0',
  `purchase_return_total_sgst` double NOT NULL DEFAULT '0',
  `purchase_return_total_cgst` double NOT NULL DEFAULT '0',
  `purchase_return_total_igst` double NOT NULL DEFAULT '0',
  `purchase_return_total_amount` double NOT NULL DEFAULT '0',
  `purchase_return_total_tcs_per` double NOT NULL DEFAULT '0',
  `purchase_return_total_tcs_amt` double NOT NULL DEFAULT '0',
  `purchase_return_round_off` double NOT NULL DEFAULT '0',
  `purchase_return_total_net_amount` double NOT NULL DEFAULT '0',
  `purchase_return_tds_with_total_net_amount` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `purchase_return_entry_date` datetime DEFAULT NULL,
  `purchase_return_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `supplier_id` (`branch_id`),
  KEY `nature_of_payment_id` (`company_id`),
  KEY `status_id` (`year_id`),
  KEY `tds_on_id` (`supplier_id`),
  KEY `branch_id` (`broker_id`),
  KEY `godown_id` (`haste_id`),
  KEY `company_id` (`receiving_goods_address_id`),
  KEY `year_id` (`invoice_no_id`),
  KEY `transporter_id` (`transporter_id`),
  KEY `buyer_id` (`buyer_id`),
  KEY `tds_on_id_2` (`tds_on_id`),
  KEY `nature_of_payment_id_2` (`nature_of_payment_id`),
  KEY `status_id_2` (`status_id`),
  KEY `purchase_return_type_id` (`purchase_return_type_id`),
  KEY `quality_type_id` (`quality_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_purchase_return`
--

LOCK TABLES `erp_purchase_return` WRITE;
/*!40000 ALTER TABLE `erp_purchase_return` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_purchase_return` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_purchase_return_child`
--

DROP TABLE IF EXISTS `erp_purchase_return_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_purchase_return_child` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `purchase_return_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `party_id` int NOT NULL DEFAULT '0',
  `gst_id` int NOT NULL DEFAULT '0',
  `purchase_return_child_quality_meter` double NOT NULL DEFAULT '0',
  `purchase_return_child_quality_meter_average` double NOT NULL DEFAULT '0',
  `purchase_return_child_remark` text,
  `purchase_return_child_hsn` varchar(100) DEFAULT NULL,
  `purchase_return_child_cut` double NOT NULL DEFAULT '0',
  `purchase_return_child_qty_per` varchar(100) DEFAULT NULL,
  `purchase_return_child_qty` double NOT NULL DEFAULT '0',
  `purchase_return_child_unit` double NOT NULL DEFAULT '0',
  `purchase_return_child_unit_sent` double NOT NULL DEFAULT '0',
  `purchase_return_child_qty_sent` double NOT NULL DEFAULT '0',
  `purchase_return_child_meter` double NOT NULL DEFAULT '0',
  `purchase_return_child_fold` double NOT NULL DEFAULT '0',
  `purchase_return_child_net_meter` double NOT NULL DEFAULT '0',
  `purchase_return_child_rate_per` varchar(100) DEFAULT NULL,
  `purchase_return_child_rate` double NOT NULL DEFAULT '0',
  `purchase_return_child_amount` double NOT NULL DEFAULT '0',
  `purchase_return_child_disc_per` double NOT NULL DEFAULT '0',
  `purchase_return_child_disc_amt` double NOT NULL DEFAULT '0',
  `purchase_return_child_freight` double NOT NULL DEFAULT '0',
  `purchase_return_child_taxable` double NOT NULL DEFAULT '0',
  `purchase_return_child_sgst` double NOT NULL DEFAULT '0',
  `purchase_return_child_cgst` double NOT NULL DEFAULT '0',
  `purchase_return_child_igst` double DEFAULT '0',
  `purchase_return_child_total_amount` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `purchase_return_child_entry_date` datetime DEFAULT NULL,
  `purchase_return_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `purchase_return_id` (`purchase_return_id`),
  KEY `quality_id` (`quality_id`),
  KEY `party_id` (`party_id`),
  KEY `gst_id` (`gst_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_purchase_return_child`
--

LOCK TABLES `erp_purchase_return_child` WRITE;
/*!40000 ALTER TABLE `erp_purchase_return_child` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_purchase_return_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_purchase_tax_invoice`
--

DROP TABLE IF EXISTS `erp_purchase_tax_invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_purchase_tax_invoice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `supplier_id` int NOT NULL DEFAULT '0',
  `broker_id` int NOT NULL DEFAULT '0',
  `quality_type_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `mill_id` int NOT NULL DEFAULT '0',
  `challan_type_id` int NOT NULL DEFAULT '0',
  `tds_on_id` int NOT NULL DEFAULT '0',
  `nature_of_payment_id` int NOT NULL DEFAULT '0',
  `status_id` int NOT NULL DEFAULT '0',
  `account_type` varchar(100) DEFAULT NULL,
  `purchase_tax_invoice_lf_no` varchar(100) DEFAULT NULL,
  `purchase_tax_invoice_no` varchar(100) DEFAULT NULL,
  `purchase_tax_invoice_date` date DEFAULT NULL,
  `purchase_tax_invoice_sub_order_number` varchar(100) DEFAULT NULL,
  `purchase_tax_invoice_lr_no` varchar(100) DEFAULT NULL,
  `puchase_tax_invoice_delivery_days` varchar(100) DEFAULT NULL,
  `puchase_tax_invoice_bale_marka` varchar(100) DEFAULT NULL,
  `puchase_tax_invoice_shipping_address` text,
  `purchase_tax_invoice_remark` text,
  `purchase_tax_invoice_entry_no` varchar(100) DEFAULT NULL,
  `is_cash_payment` enum('0','1') NOT NULL DEFAULT '0',
  `is_tds_applicable` enum('0','1') NOT NULL DEFAULT '0',
  `puchase_tax_invoice_tds_applicable_rate` double NOT NULL DEFAULT '0',
  `puchase_tax_invoice_total_tds` double NOT NULL DEFAULT '0',
  `puchase_tax_invoice_tds_with_total_net_amount` double NOT NULL DEFAULT '0',
  `is_mill_issue` enum('0','1') NOT NULL DEFAULT '0',
  `purchase_tax_invoice_total_unit_sent` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_total_qty_sent` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_total_net_meter` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_total_total` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_total_disc_amt` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_total_freight` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_total_fless` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_total_insurance` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_total_taxable` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_total_sgst` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_total_cgst` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_total_igst` double DEFAULT '0',
  `purchase_tax_invoice_total_amount` double NOT NULL DEFAULT '0',
  `puchase_tax_invoice_tcs_per` double NOT NULL DEFAULT '0',
  `puchase_tax_invoice_tcs_amt` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_round_off` double DEFAULT '0',
  `purchase_tax_invoice_net_amount` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_image` longtext,
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `purchase_tax_invoice_entry_date` datetime DEFAULT NULL,
  `purchase_tax_invoice_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `supplier_id` (`supplier_id`),
  KEY `broker_id` (`broker_id`),
  KEY `quality_type_id` (`quality_type_id`),
  KEY `godown_id` (`godown_id`),
  KEY `mill_id` (`mill_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `challan_type_id` (`challan_type_id`),
  KEY `tds_on_id` (`tds_on_id`),
  KEY `nature_of_payment_id` (`nature_of_payment_id`),
  KEY `status_id` (`status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_purchase_tax_invoice`
--

LOCK TABLES `erp_purchase_tax_invoice` WRITE;
/*!40000 ALTER TABLE `erp_purchase_tax_invoice` DISABLE KEYS */;
INSERT INTO `erp_purchase_tax_invoice` VALUES (1,4,83,101,61,1,1,1,0,0,56,0,0,0,'13','1','1','2023-03-30','','1','','','','','','0','0',0,0,756,'0',20,50,50,750,30,0,0,0,720,0,0,36,756,0,0,0,756,NULL,'0','2023-03-30 05:18:46','2023-03-30 05:18:46'),(2,4,100,0,61,1,1,1,0,0,56,0,0,0,'13','2','15','2023-03-30','','1','','','','','','0','0',0,0,788,'0',45,50,50,750,0,0,0,0,750,0,0,37.5,788,0,0,0,788,NULL,'0','2023-03-30 05:31:12','2023-03-30 05:31:12'),(3,4,106,101,62,1,1,2,1,107,56,0,0,0,'37','1','1008','2023-03-31','','122','','','','','','0','0',0,0,707323,'1',240,5201,5201,686532,13730.64,840,0,0,673641,0,0,33682.07,707323,0,0,0,707323,NULL,'0','2023-03-31 06:22:45','2023-03-31 06:22:45'),(4,4,172,0,62,1,1,2,1,0,56,0,0,0,'37','2','251GST/23','2023-03-31','','1','','','','','','0','0',0,0,42014,'0',12,288,288,40320,806.4,500,0,0,40014,1000.34,1000.34,0,42014,0,0,0,42014,NULL,'0','2023-03-31 07:07:24','2023-03-31 07:07:24'),(5,4,171,0,62,1,1,2,1,0,56,0,0,0,'37','3','12458','2023-03-31','','1','','','','','','0','0',0,0,788,'0',45,20,20,500,0,500,250,0,750,18.75,18.75,0,788,0,0,0,788,NULL,'0','2023-03-31 07:11:43','2023-03-31 07:11:43'),(6,4,106,0,0,1,1,2,1,0,56,0,0,0,'37','','1009','2023-03-31','','1','','','','','','0','0',0,0,707323,'0',240,5201,5201,686532,13730.64,840,0,0,673641,0,0,33682.07,707323,0,0,0,707323,NULL,'0','2023-03-31 03:22:26','2023-03-31 03:22:26');
/*!40000 ALTER TABLE `erp_purchase_tax_invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_purchase_tax_invoice_child`
--

DROP TABLE IF EXISTS `erp_purchase_tax_invoice_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_purchase_tax_invoice_child` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `purchase_tax_invoice_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `gst_id` int NOT NULL DEFAULT '0',
  `purchase_tax_invoice_quality_meter` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_quality_meter_average` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_remark` text,
  `purchase_tax_invoice_child_hsn` varchar(100) DEFAULT NULL,
  `purchase_tax_invoice_child_stock` varchar(100) DEFAULT NULL,
  `purchase_tax_invoice_child_cut` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_cut_meters` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_pkg` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_qty_per` varchar(100) DEFAULT NULL,
  `purchase_tax_invoice_child_unit_sent` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_qty_sent` double DEFAULT '0',
  `purchase_tax_invoice_child_rate_per` varchar(100) DEFAULT NULL,
  `purchase_tax_invoice_child_fold` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_net_meter` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_rate` double DEFAULT '0',
  `purchase_tax_invoice_child_total` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_disc_per` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_disc_amt` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_freight` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_fless` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_insurance` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_taxable` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_sgst` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_cgst` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_igst` double NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_amount` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `purchase_tax_invoice_child_entry_date` datetime DEFAULT NULL,
  `purchase_tax_invoice_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `purchase_tax_invoice_id` (`purchase_tax_invoice_id`),
  KEY `quality_id` (`quality_id`),
  KEY `gst_id` (`gst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_purchase_tax_invoice_child`
--

LOCK TABLES `erp_purchase_tax_invoice_child` WRITE;
/*!40000 ALTER TABLE `erp_purchase_tax_invoice_child` DISABLE KEYS */;
INSERT INTO `erp_purchase_tax_invoice_child` VALUES (1,4,1,1,6,0,0,'','125.12','125.12',0,0,0,'24',20,50,'24',100,50,15,750,4,30,0,0,0,720,0,0,5,756,'0','2023-03-30 05:18:46','2023-03-30 05:18:46'),(2,4,2,2,6,0,0,'','125.12','125.12',0,0,0,'24',45,50,'24',100,50,15,750,0,0,0,0,0,750,0,0,5,787.5,'0','2023-03-30 05:31:12','2023-03-30 05:31:12'),(3,4,6,55,6,6.75,35106.75,'','125.12','125.12',0,0,0,'24',240,5201,'20',0,5201,132,686532,2,13730.64,840,0,0,673641.36,0,0,5,707323.43,'0','2023-03-31 06:22:45','2023-03-31 03:22:26'),(4,4,4,56,6,0,0,'','125.12','125.12',0,0,0,'24',12,288,'20',0,288,140,40320,2,806.4,500,0,0,40013.6,2.5,2.5,0,42014.28,'0','2023-03-31 07:07:24','2023-03-31 07:07:24'),(5,4,5,55,6,6.75,0,'','125.12','125.12',0,0,0,'24',45,20,'24',100,20,25,500,0,0,500,250,0,750,2.5,2.5,0,787.5,'0','2023-03-31 07:11:43','2023-03-31 07:11:43');
/*!40000 ALTER TABLE `erp_purchase_tax_invoice_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_quality`
--

DROP TABLE IF EXISTS `erp_quality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_quality` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `brand_id` int NOT NULL DEFAULT '0',
  `material_id` int NOT NULL DEFAULT '0',
  `quality_type_id` int NOT NULL DEFAULT '0',
  `quality_name` varchar(255) DEFAULT NULL,
  `quality_sub_name` varchar(255) DEFAULT NULL,
  `quality_sub_attribute` varchar(255) DEFAULT NULL,
  `quality_sales_name` varchar(255) DEFAULT NULL,
  `quality_print_name` varchar(255) DEFAULT NULL,
  `quality_image` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci,
  `quality_stock` double NOT NULL DEFAULT '0',
  `quality_meter` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `quality_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `quality_entry_date` datetime DEFAULT NULL,
  `quality_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `brand_id` (`brand_id`),
  KEY `material_id` (`material_id`),
  KEY `quality_type_id` (`quality_type_id`),
  KEY `company_id` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_quality`
--

LOCK TABLES `erp_quality` WRITE;
/*!40000 ALTER TABLE `erp_quality` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_quality` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_quality_stock`
--

DROP TABLE IF EXISTS `erp_quality_stock`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_quality_stock` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `quality_stock_value` double NOT NULL DEFAULT '0',
  `quality_stock_remark` text,
  `quality_stock_entry_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `quality_id` (`quality_id`),
  KEY `year_id` (`year_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_quality_stock`
--

LOCK TABLES `erp_quality_stock` WRITE;
/*!40000 ALTER TABLE `erp_quality_stock` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_quality_stock` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_quality_taka`
--

DROP TABLE IF EXISTS `erp_quality_taka`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_quality_taka` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `opening_purchase_child_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `quality_taka_no` double NOT NULL DEFAULT '0',
  `quality_taka_weavor_taka_no` varchar(100) DEFAULT NULL,
  `quality_taka_quantity` double NOT NULL DEFAULT '0',
  `quality_taka_weight` double DEFAULT '0',
  `quality_taka_height` double NOT NULL DEFAULT '0',
  `quality_taka_folding` varchar(100) DEFAULT NULL,
  `quality_taka_remark` text,
  `quality_taka_entry_date` datetime DEFAULT NULL,
  `quality_taka_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `godown_id` (`godown_id`),
  KEY `opening_purchase_child_id` (`opening_purchase_child_id`),
  KEY `quality_id` (`quality_id`),
  KEY `year_id` (`year_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_quality_taka`
--

LOCK TABLES `erp_quality_taka` WRITE;
/*!40000 ALTER TABLE `erp_quality_taka` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_quality_taka` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_sale`
--

DROP TABLE IF EXISTS `erp_sale`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_sale` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `buyer_id` int NOT NULL DEFAULT '0',
  `tds_on_id` int NOT NULL DEFAULT '0',
  `nature_of_payment_id` int NOT NULL DEFAULT '0',
  `status_id` int NOT NULL DEFAULT '0',
  `sale_status_id` int NOT NULL DEFAULT '0',
  `account_head_id` int NOT NULL DEFAULT '0',
  `transporter_id` int NOT NULL DEFAULT '0',
  `sale_account_head_type` varchar(100) DEFAULT NULL,
  `sale_order_no` double NOT NULL DEFAULT '0',
  `sale_order_date` date DEFAULT NULL,
  `sale_total_qty` double NOT NULL DEFAULT '0',
  `sale_total_meter` double NOT NULL DEFAULT '0',
  `sale_total_total` double NOT NULL DEFAULT '0',
  `sale_total_disc_amount` double NOT NULL DEFAULT '0',
  `sale_total_freight` double NOT NULL DEFAULT '0',
  `sale_total_fless` double NOT NULL DEFAULT '0',
  `sale_total_taxable` double NOT NULL DEFAULT '0',
  `sale_total_sgst` double NOT NULL DEFAULT '0',
  `sale_total_cgst` double NOT NULL DEFAULT '0',
  `sale_total_igst` double NOT NULL DEFAULT '0',
  `sale_total_amount` double NOT NULL DEFAULT '0',
  `is_tds_applicable` enum('0','1') NOT NULL DEFAULT '0',
  `sale_tds_applicable_rate` double NOT NULL DEFAULT '0',
  `sale_tds_with_total_net_amount` double NOT NULL DEFAULT '0',
  `sale_tcs_per` double NOT NULL DEFAULT '0',
  `sale_tcs_amt` double NOT NULL DEFAULT '0',
  `sale_round_off` double NOT NULL DEFAULT '0',
  `sale_total_net_amount` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `sale_entry_date` datetime DEFAULT NULL,
  `sale_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `godown_id` (`godown_id`),
  KEY `buyer_id` (`buyer_id`),
  KEY `tds_on_id` (`tds_on_id`),
  KEY `nature_of_payment_id` (`nature_of_payment_id`),
  KEY `status_id` (`status_id`),
  KEY `sale_status_id` (`sale_status_id`),
  KEY `account_head_id` (`account_head_id`),
  KEY `transporter_id` (`transporter_id`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_sale`
--

LOCK TABLES `erp_sale` WRITE;
/*!40000 ALTER TABLE `erp_sale` DISABLE KEYS */;
INSERT INTO `erp_sale` VALUES (1,4,1,1,2,1,134,0,0,0,66,54,0,'',1,'2023-03-25',800,760,47120,0,200,0,47320,0,0,2366,49686,'0',0,49686,0,0,0,49686,'0','2023-03-25 10:42:18','2023-03-25 10:42:18'),(2,4,1,1,2,1,135,0,0,0,66,54,0,'',2,'2023-03-25',1050,997.5,62462.5,0,200,0,62662.5,1566.5700000000002,1566.5700000000002,0,65796,'0',0,65796,0,0,0,65796,'0','2023-03-25 11:07:25','2023-03-25 11:07:25'),(3,4,1,1,2,1,136,0,0,0,66,54,0,'',3,'2023-03-25',350,332.5,19950,0,150,0,20100,0,0,1005,21105,'0',0,21105,0,0,0,21105,'0','2023-03-25 11:19:18','2023-03-25 11:19:18'),(4,4,1,1,2,1,137,0,0,0,66,54,0,'',4,'2023-03-25',800,800,24800,0,100,0,24900,0,0,1245,26145,'0',0,26145,0,0,0,26145,'0','2023-03-25 11:27:18','2023-03-25 11:27:18'),(5,4,1,1,2,1,136,0,0,0,66,54,0,'',5,'2023-03-25',200,190,36100,0,100,0,36200,0,0,1810,38010,'0',0,38010,0,0,0,38010,'0','2023-03-25 11:49:32','2023-03-25 11:49:32'),(6,4,1,1,2,1,136,0,0,0,66,54,0,'',6,'2023-03-25',20,20,14000,0,100,0,14100,0,0,705,14805,'0',0,14805,0,0,0,14805,'0','2023-03-25 11:58:56','2023-03-25 11:59:37'),(7,4,1,1,2,1,139,0,0,0,66,54,0,'',7,'2023-03-25',800,760,20520,0,100,0,20620,0,0,1031,21651,'0',0,21651,0,0,0,21651,'0','2023-03-25 12:04:54','2023-03-25 12:04:54'),(8,4,1,1,2,1,113,0,0,0,66,54,0,'',8,'2023-03-25',300,285,23275,0,100,0,23375,0,0,1168.75,24544,'0',0,24544,0,0,0,24544,'0','2023-03-25 12:11:28','2023-03-25 12:11:28'),(9,4,1,1,2,1,141,0,0,0,66,54,0,'',9,'2023-03-25',500,475,31350,0,100,0,31450,0,0,1572.5,33023,'0',0,33023,0,0,0,33023,'0','2023-03-25 02:15:01','2023-03-25 02:15:01'),(10,4,1,1,2,1,142,0,0,0,66,54,0,'',10,'2023-03-25',3200,2560,75520,0,400,0,75920,0,0,3796,79716,'0',0,79716,0,0,0,79716,'0','2023-03-25 02:22:09','2023-03-25 02:23:17'),(11,4,1,1,2,1,93,0,0,0,66,54,0,'',11,'2023-03-25',800,760,36860,0,200,0,37060,926.5,926.5,0,38913,'0',0,38913,0,0,0,38913,'0','2023-03-25 02:25:40','2023-03-25 02:25:40'),(12,4,1,1,2,1,143,0,0,0,66,54,0,'',12,'2023-03-25',300,270,18360,0,100,0,18460,0,0,923,19383,'0',0,19383,0,0,0,19383,'0','2023-03-25 02:30:35','2023-03-25 02:30:35'),(13,4,1,1,2,1,93,0,0,0,66,54,0,'',13,'2023-03-25',500,475,20425,0,0,0,20425,510.63,510.63,0,21446,'0',0,21446,0,0,0,21446,'0','2023-03-25 02:50:47','2023-03-25 02:50:47'),(14,4,1,1,2,1,144,0,0,0,66,54,0,'',14,'2023-03-25',200,190,14440,0,100,0,14540,0,0,727,15267,'0',0,15267,0,0,0,15267,'0','2023-03-25 02:56:58','2023-03-25 02:56:58'),(15,4,2,2,2,2,99,0,0,0,66,54,87,'',15,'2023-03-25',1500,1500,38250,0,0,0,38250,956.25,956.25,0,40163,'0',0,40163,0,0,0,40163,'0','2023-03-25 03:01:02','2023-03-25 03:01:02'),(16,4,1,1,2,1,144,0,0,0,66,54,0,'',16,'2023-03-25',270,256.5,20007,0,100,0,20107,0,0,1005.35,21112,'0',0,21112,0,0,0,21112,'0','2023-03-25 03:04:58','2023-03-25 03:04:58'),(17,4,1,1,2,1,146,0,0,0,66,54,0,'',17,'2023-03-25',100,95,23512.5,0,100,0,23612.5,0,0,1180.63,24793,'0',0,24793,0,0,0,24793,'0','2023-03-25 03:11:34','2023-03-25 03:11:34'),(18,4,1,1,2,1,123,0,0,0,66,54,0,'',18,'2023-03-25',1200,1140,69540,0,300,0,69840,1746,1746,0,73332,'0',0,73332,0,0,0,73332,'0','2023-03-25 03:26:22','2023-03-25 03:26:22'),(19,4,1,1,2,1,147,0,0,0,66,54,0,'',19,'2023-03-25',500,475,19000,0,0,0,19000,0,0,950,19950,'0',0,19950,0,0,0,19950,'0','2023-03-25 03:29:48','2023-03-25 03:29:48'),(20,4,1,1,2,1,148,0,0,0,66,54,0,'',20,'2023-03-25',500,400,27600,0,200,0,27800,0,0,1390,29190,'0',0,29190,0,0,0,29190,'0','2023-03-25 03:32:20','2023-03-25 03:32:20'),(21,4,1,1,2,1,149,0,0,0,66,54,0,'',21,'2023-03-25',1200,1140,74100,0,300,0,74400,0,0,3720,78120,'0',0,78120,0,0,0,78120,'0','2023-03-25 03:36:23','2023-03-25 03:36:23'),(22,4,1,1,2,1,139,0,0,0,66,54,0,'',22,'2023-03-26',800,760,22040,0,0,0,22040,0,0,1102,23142,'0',0,23142,0,0,0,23142,'0','2023-03-26 05:57:38','2023-03-26 05:57:38'),(23,4,1,1,2,1,150,0,0,0,66,54,0,'',23,'2023-03-26',2700,2430,77760,0,300,0,78060,0,0,3903,81963,'0',0,81963,0,0,0,81963,'0','2023-03-26 06:03:03','2023-03-26 06:03:03'),(24,4,1,1,2,1,151,0,0,0,66,54,0,'',24,'2023-03-26',2000,1600,78400,0,0,0,78400,0,0,3920,82320,'0',0,82320,0,0,0,82320,'0','2023-03-26 06:12:53','2023-03-26 06:12:53'),(25,4,1,1,2,1,152,0,0,0,66,54,0,'',25,'2023-03-26',800,800,24800,0,0,0,24800,0,0,1240,26040,'0',0,26040,0,0,0,26040,'0','2023-03-26 06:17:04','2023-03-26 06:17:04'),(26,4,1,1,2,1,153,0,0,0,66,54,0,'',26,'2023-03-26',800,760,24320,0,0,0,24320,0,0,1216,25536,'0',0,25536,0,0,0,25536,'0','2023-03-26 06:21:48','2023-03-26 06:21:48'),(27,4,1,1,2,1,153,0,0,0,66,54,0,'',27,'2023-03-26',800,720,20160,0,0,0,20160,0,0,1008,21168,'0',0,21168,0,0,0,21168,'0','2023-03-26 06:32:05','2023-03-26 06:32:05'),(28,4,1,1,2,1,153,0,0,0,66,54,0,'',28,'2023-03-26',800,720,37440,0,0,0,37440,0,0,1872,39312,'0',0,39312,0,0,0,39312,'0','2023-03-26 06:33:55','2023-03-26 06:33:55'),(29,4,1,1,2,1,154,0,0,0,66,54,0,'',29,'2023-03-26',1000,950,57000,0,0,0,57000,0,0,2850,59850,'0',0,59850,0,0,0,59850,'0','2023-03-26 06:36:40','2023-03-26 06:36:40'),(30,4,1,1,2,1,149,0,0,0,66,54,0,'',30,'2023-03-27',1200,1140,59280,0,0,0,59280,0,0,2964,62244,'0',0,62244,0,0,0,62244,'0','2023-03-27 05:04:57','2023-03-27 05:04:57'),(31,4,1,1,2,1,94,0,0,0,66,54,117,'',31,'2023-03-27',1000,950,25175,0,0,0,25175,0,0,1258.75,26434,'0',0,26434,0,0,0,26434,'0','2023-03-27 05:12:15','2023-03-27 05:12:15'),(32,4,1,1,2,1,94,0,0,0,66,54,110,'',32,'2023-03-27',2000,1900,50350,0,0,0,50350,0,0,2517.5,52868,'0',0,52868,0,0,0,52868,'0','2023-03-27 05:16:27','2023-03-27 05:16:27'),(33,4,1,1,2,1,136,0,0,0,66,54,0,'',33,'2023-03-27',200,200,12400,0,0,0,12400,0,0,620,13020,'0',0,13020,0,0,0,13020,'0','2023-03-27 06:07:49','2023-03-27 06:07:49'),(34,4,1,1,2,1,156,0,0,0,66,54,0,'',34,'2023-03-27',600,600,46200,0,0,0,46200,0,0,2310,48510,'0',0,48510,0,0,0,48510,'0','2023-03-27 02:24:34','2023-03-27 02:24:34'),(35,4,1,1,2,1,156,0,0,0,66,54,0,'',35,'2023-03-27',130,130,19750,0,0,0,19750,0,0,987.5,20738,'0',0,20738,0,0,0,20738,'0','2023-03-27 02:30:16','2023-03-29 12:43:22'),(36,4,1,1,2,1,157,0,0,0,66,54,0,'',36,'2023-03-27',800,760,25840,0,0,0,25840,0,0,1292,27132,'0',0,27132,0,0,0,27132,'0','2023-03-27 02:37:09','2023-03-27 02:37:09'),(37,4,1,1,2,1,158,0,0,0,66,54,0,'',37,'2023-03-27',2000,2000,24000,0,0,0,24000,0,0,1200,25200,'0',0,25200,0,0,0,25200,'0','2023-03-27 02:46:21','2023-03-27 02:46:21'),(38,4,1,1,2,1,124,0,0,0,66,54,0,'',38,'2023-03-27',1600,1600,46400,0,0,0,46400,0,0,2320,48720,'0',0,48720,0,0,0,48720,'0','2023-03-27 02:56:50','2023-03-27 02:56:50'),(39,4,1,1,2,1,160,0,0,0,66,54,0,'',39,'2023-03-28',200,190,8740,0,0,0,8740,0,0,437,9177,'0',0,9177,0,0,0,9177,'0','2023-03-28 10:57:00','2023-03-28 10:57:00'),(40,4,1,1,2,1,161,0,0,0,66,54,0,'',40,'2023-03-28',800,720,18720,0,0,0,18720,0,0,936,19656,'0',0,19656,0,0,0,19656,'0','2023-03-28 11:05:01','2023-03-28 11:05:01'),(41,4,1,1,2,1,162,0,0,0,66,54,0,'',41,'2023-03-28',1600,1440,47520,0,0,0,47520,0,0,2376,49896,'0',0,49896,0,0,0,49896,'0','2023-03-28 11:09:12','2023-03-28 11:09:12'),(42,4,1,1,2,1,147,0,0,0,66,54,0,'',42,'2023-03-28',500,450,18000,0,0,0,18000,0,0,900,18900,'0',0,18900,0,0,0,18900,'0','2023-03-28 11:14:00','2023-03-28 11:14:57'),(43,4,1,1,2,1,163,0,0,0,66,54,0,'',43,'2023-03-28',800,760,22800,0,0,0,22800,0,0,1140,23940,'0',0,23940,0,0,0,23940,'0','2023-03-28 11:19:07','2023-03-28 11:19:07'),(44,4,1,1,2,1,136,0,0,0,66,54,0,'',44,'2023-03-28',400,380,22800,0,0,0,22800,0,0,1140,23940,'0',0,23940,0,0,0,23940,'0','2023-03-28 11:27:01','2023-03-28 11:27:01'),(45,4,1,1,2,1,164,0,0,0,66,54,0,'',45,'2023-03-28',2000,2000,22500,0,0,0,22500,562.5,562.5,0,23625,'0',0,23625,0,0,0,23625,'0','2023-03-28 11:36:59','2023-03-28 01:36:22'),(46,4,1,1,2,1,108,0,0,0,66,54,0,'',46,'2023-03-28',800,760,20520,0,0,0,20520,0,0,1026,21546,'0',0,21546,0,0,0,21546,'0','2023-03-28 11:40:00','2023-03-28 11:40:00'),(47,4,1,1,2,1,134,0,0,0,66,54,0,'',47,'2023-03-28',400,380,22800,0,0,0,22800,0,0,1140,23940,'0',0,23940,0,0,0,23940,'0','2023-03-28 11:52:57','2023-03-28 11:52:57'),(48,4,1,1,2,1,93,0,0,0,66,54,0,'',48,'2023-03-28',1600,1520,37240,0,0,0,37240,931,931,0,39102,'0',0,39102,0,0,0,39102,'0','2023-03-28 01:08:27','2023-03-28 01:08:27'),(49,4,1,1,2,1,123,0,0,0,66,54,0,'',49,'2023-03-28',1200,1140,29640,0,0,0,29640,741,741,0,31122,'0',0,31122,0,0,0,31122,'0','2023-03-28 01:13:45','2023-03-28 01:13:45'),(50,4,1,1,2,1,164,0,0,0,66,54,0,'',50,'2023-03-28',200,190,9880,0,0,0,9880,247,247,0,10374,'0',0,10374,0,0,0,10374,'0','2023-03-28 01:41:27','2023-03-28 01:41:27'),(51,4,1,1,2,1,139,0,0,0,66,54,0,'',51,'2023-03-28',300,285,8265,0,0,0,8265,0,0,413.25,8678,'0',0,8678,0,0,0,8678,'0','2023-03-28 02:04:27','2023-03-28 02:04:27'),(52,4,1,1,2,1,157,0,0,0,66,54,0,'',52,'2023-03-28',500,475,23750,0,0,0,23750,0,0,1187.5,24938,'0',0,24938,0,0,0,24938,'0','2023-03-28 02:59:53','2023-03-28 02:59:53'),(53,4,1,1,2,1,170,0,0,0,66,54,0,'',53,'2023-03-29',150,571,160112.5,0,0,0,160112.5,0,0,8005.63,168118,'0',0,168118,0,0,0,168118,'0','2023-03-29 09:19:07','2023-03-29 09:19:07'),(54,4,1,1,2,1,123,0,0,0,66,54,0,'',54,'2023-03-29',800,760,46360,0,0,0,46360,1159,1159,0,48678,'0',0,48678,0,0,0,48678,'0','2023-03-29 09:22:57','2023-03-29 09:22:57'),(55,4,1,1,2,1,94,0,0,0,66,54,0,'',55,'2023-03-31',2000,1900,49400,988,0,0,48412,0,0,2420.6,50833,'0',0,50833,0,0,0,50833,'0','2023-03-31 05:53:38','2023-03-31 05:53:38');
/*!40000 ALTER TABLE `erp_sale` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_sale_child`
--

DROP TABLE IF EXISTS `erp_sale_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_sale_child` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `sale_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `jober_id` int NOT NULL DEFAULT '0',
  `order_status_id` int NOT NULL DEFAULT '0',
  `gst_id` int NOT NULL DEFAULT '0',
  `order_status` enum('pending','cancel','done') NOT NULL DEFAULT 'pending',
  `sale_child_remark` text,
  `sale_child_remark_2` text,
  `sale_child_quality_colour` varchar(100) DEFAULT NULL,
  `sale_child_work` varchar(100) DEFAULT NULL,
  `sale_child_work_colour` varchar(100) DEFAULT NULL,
  `sale_child_qty` double NOT NULL DEFAULT '0',
  `sale_child_meter` double NOT NULL DEFAULT '0',
  `sale_child_fold` double NOT NULL DEFAULT '0',
  `sale_child_count_meter` double NOT NULL DEFAULT '0',
  `sale_child_rate` double NOT NULL DEFAULT '0',
  `sale_child_rate_per` int NOT NULL DEFAULT '0',
  `sale_child_help` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `sale_child_total` double NOT NULL DEFAULT '0',
  `sale_child_disc_per` double NOT NULL DEFAULT '0',
  `sale_child_disc_amt` double NOT NULL DEFAULT '0',
  `sale_child_freight` double NOT NULL DEFAULT '0',
  `sale_child_fless` double NOT NULL DEFAULT '0',
  `sale_child_taxable` double NOT NULL DEFAULT '0',
  `sale_child_sgst` double NOT NULL DEFAULT '0',
  `sale_child_cgst` double NOT NULL DEFAULT '0',
  `sale_child_igst` double NOT NULL DEFAULT '0',
  `sale_child_amount` double NOT NULL DEFAULT '0',
  `is_not_to_jober` enum('0','1') NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `sale_child_entry_date` datetime DEFAULT NULL,
  `sale_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `sale_id` (`sale_id`),
  KEY `quality_id` (`quality_id`),
  KEY `jober_id` (`jober_id`),
  KEY `order_status_id` (`order_status_id`),
  KEY `gst_id` (`gst_id`),
  KEY `sale_child_rate_per` (`sale_child_rate_per`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_sale_child`
--

LOCK TABLES `erp_sale_child` WRITE;
/*!40000 ALTER TABLE `erp_sale_child` DISABLE KEYS */;
INSERT INTO `erp_sale_child` VALUES (1,4,1,1,0,70,6,'pending','maruti','30','pich','long life','pich to fenta',0,400,95,380,62,24,'',23560,0,0,100,0,23660,0,0,5,24843,'0','0','2023-03-25 10:42:18','2023-03-25 10:42:18'),(2,4,1,1,0,70,6,'pending','maruti','30','pink','long life','pink to m rani',0,400,95,380,62,24,'',23560,0,0,100,0,23660,0,0,5,24843,'0','0','2023-03-25 10:42:18','2023-03-25 10:42:18'),(3,4,2,2,0,70,6,'pending','mansi','35','c c badam','lomg life','gold taar',0,550,95,522.5,65,24,'',33962.5,0,0,100,0,34062.5,2.5,2.5,0,35765.62,'0','0','2023-03-25 11:07:25','2023-03-25 11:07:25'),(4,4,2,3,0,70,6,'pending','khodal','28','cc badam','long life','badam to badam',0,250,95,237.5,58,24,'',13775,0,0,0,0,13775,2.5,2.5,0,14463.76,'0','0','2023-03-25 11:07:25','2023-03-25 11:07:25'),(5,4,2,4,0,70,6,'pending','mansi','28','off white','long life','gold taar',0,250,95,237.5,62,24,'',14725,0,0,100,0,14825,2.5,2.5,0,15566.26,'0','0','2023-03-25 11:07:25','2023-03-25 11:07:25'),(6,4,3,5,0,70,6,'pending','khodal','29','c fone','long life','m rani/fenta dhaga',0,350,95,332.5,60,24,'',19950,0,0,150,0,20100,0,0,5,21105,'0','0','2023-03-25 11:19:18','2023-03-25 11:19:18'),(7,4,4,6,0,70,6,'pending','shree tex','10','firoji shadded','galaxy shadded','m rani seq',0,800,100,800,31,24,'',24800,0,0,100,0,24900,0,0,5,26145,'0','0','2023-03-25 11:27:18','2023-03-25 11:27:18'),(8,4,5,7,0,70,6,'pending','manan','98','black','velvet heavy','black to gold seq',0,200,95,190,190,24,'',36100,0,0,100,0,36200,0,0,5,38010,'0','0','2023-03-25 11:49:32','2023-03-25 11:49:32'),(9,4,6,8,0,70,6,'pending','','','black','velvet heavy','gold seq',0,20,100,20,700,24,'',14000,0,0,100,0,14100,0,0,5,14805,'1','0','2023-03-25 11:58:56','2023-03-25 11:59:37'),(10,4,7,9,0,70,6,'pending','urja','12','a/green','galaxy 54','pink butta',0,800,95,760,27,24,'',20520,0,0,100,0,20620,0,0,5,21651,'0','0','2023-03-25 12:04:54','2023-03-25 12:04:54'),(11,4,8,10,0,70,6,'pending','mansi','38','marun','velvet','gold taar',0,100,95,95,85,24,'',8075,0,0,100,0,8175,0,0,5,8583.75,'0','0','2023-03-25 12:11:28','2023-03-25 12:11:28'),(12,4,8,11,0,70,6,'pending','mansi','32','marun','velvet','gold taar',0,200,95,190,80,24,'',15200,0,0,0,0,15200,0,0,5,15960,'0','0','2023-03-25 12:11:28','2023-03-25 12:11:28'),(13,4,9,12,0,70,6,'pending','deep','33','cc badam','long life','gold seq',0,500,95,475,66,24,'',31350,0,0,100,0,31450,0,0,5,33022.5,'0','0','2023-03-25 02:15:01','2023-03-25 02:15:01'),(14,4,10,6,0,70,6,'pending','shree tex','10','pink/tomato','galaxy shadded','5 mm pink',0,1600,80,1280,32,24,'',40960,0,0,200,0,41160,0,0,5,43218,'0','0','2023-03-25 02:22:09','2023-03-25 02:23:17'),(15,4,10,13,0,70,6,'pending','deep','10','cc fenta','galaxy','gold buttta',0,1600,80,1280,27,24,'',34560,0,0,200,0,34760,0,0,5,36498,'0','0','2023-03-25 02:22:09','2023-03-25 02:23:17'),(16,4,11,14,0,70,6,'pending','khodal','23','neon pich','long life','fenta dhaga',0,800,95,760,48.5,24,'',36860,0,0,200,0,37060,2.5,2.5,0,38913,'0','0','2023-03-25 02:25:40','2023-03-25 02:25:40'),(17,4,12,16,0,70,6,'pending','super star','60','red','net','red seq',0,300,90,270,68,24,'',18360,0,0,100,0,18460,0,0,5,19383,'0','0','2023-03-25 02:30:35','2023-03-25 02:30:35'),(18,4,13,17,0,70,6,'pending','shree tex','17','off white','long life','firoji seq',0,500,95,475,43,24,'',20425,0,0,0,0,20425,2.5,2.5,0,21446.26,'0','0','2023-03-25 02:50:47','2023-03-25 02:50:47'),(19,4,14,18,0,70,6,'pending','khodal','44','cc fone','long life','gold seq',0,200,95,190,76,24,'',14440,0,0,100,0,14540,0,0,5,15267,'0','0','2023-03-25 02:56:58','2023-03-25 02:56:58'),(20,4,15,19,0,70,6,'pending','demo','124.45','pink','moon star','red',0,1500,100,1500,25.5,24,'',38250,0,0,0,0,38250,2.5,2.5,0,40162.5,'0','0','2023-03-25 03:01:02','2023-03-25 03:01:02'),(21,4,16,18,0,70,6,'pending','khodal','44','neon lemon','long life','gold seq',0,270,95,256.5,78,24,'',20007,0,0,100,0,20107,0,0,5,21112.35,'0','0','2023-03-25 03:04:58','2023-03-25 03:04:58'),(22,4,17,20,0,70,6,'pending','charmi','235','white','net','mango/red',0,50,95,47.5,270,24,'',12825,0,0,100,0,12925,0,0,5,13571.25,'0','0','2023-03-25 03:11:34','2023-03-25 03:11:34'),(23,4,17,21,0,70,6,'pending','charmi','210','white','net','mango/ghas',0,50,95,47.5,225,24,'',10687.5,0,0,0,0,10687.5,0,0,5,11221.88,'0','0','2023-03-25 03:11:34','2023-03-25 03:11:34'),(24,4,18,17,0,70,6,'pending','deep','32','off white','off white','copper eq',0,1200,95,1140,61,24,'',69540,0,0,300,0,69840,2.5,2.5,0,73332,'0','0','2023-03-25 03:26:22','2023-03-25 03:26:22'),(25,4,19,22,0,70,6,'pending','bhagwati','10','neon tomato','long life','coffee/white',0,500,95,475,40,24,'',19000,0,0,0,0,19000,0,0,5,19950,'0','0','2023-03-25 03:29:48','2023-03-25 03:29:48'),(26,4,20,23,0,70,6,'pending','bhumi','28','banana desen','white','green',0,500,80,400,69,24,'',27600,0,0,200,0,27800,0,0,5,29190,'0','0','2023-03-25 03:32:20','2023-03-25 03:32:20'),(27,4,21,24,0,70,6,'pending','deep','30','b-331 mango','long life','gold seq',0,1200,95,1140,65,24,'',74100,0,0,300,0,74400,0,0,5,78120,'0','0','2023-03-25 03:36:23','2023-03-25 03:36:23'),(28,4,22,25,0,70,6,'pending','deep','14','s/w,fone,o/w,champai','galaxy 54','gold seq',0,800,95,760,29,24,'',22040,0,0,0,0,22040,0,0,5,23142,'0','0','2023-03-26 05:57:38','2023-03-26 05:57:38'),(29,4,23,26,0,70,6,'pending','deep','12','pink pista shadded','galaxy','3 mm pink',0,2700,90,2430,32,24,'',77760,0,0,300,0,78060,0,0,5,81963,'0','0','2023-03-26 06:03:03','2023-03-26 06:03:03'),(30,4,24,28,0,70,6,'pending','brinda','10','maharani','taiwan 14 kg','4 patta cut',0,1000,80,800,44,24,'',35200,0,0,0,0,35200,0,0,5,36960,'0','0','2023-03-26 06:12:53','2023-03-26 06:12:53'),(31,4,24,29,0,70,6,'pending','brinda','10','firoji','taiwan 14','4 patta',0,1000,80,800,54,24,'',43200,0,0,0,0,43200,0,0,5,45360,'0','0','2023-03-26 06:12:53','2023-03-26 06:12:53'),(32,4,25,6,0,70,6,'pending','shree tex','10','green shadded`','galaxy 54','5 mm fenta',0,800,100,800,31,24,'',24800,0,0,0,0,24800,0,0,5,26040,'0','0','2023-03-26 06:17:04','2023-03-26 06:17:04'),(33,4,26,30,0,70,6,'pending','baba','14','f/lemon','galaxy 54','pink/mango',0,800,95,760,32,24,'',24320,0,0,0,0,24320,0,0,5,25536,'0','0','2023-03-26 06:21:48','2023-03-26 06:21:48'),(34,4,27,31,0,70,6,'pending','bhagwati','10','cc badam','galaxy 54','m rani dhaga',0,800,90,720,28,24,'',20160,0,0,0,0,20160,0,0,5,21168,'0','0','2023-03-26 06:32:05','2023-03-26 06:32:05'),(35,4,28,32,0,70,6,'pending','khodal','23','cc fone','long life','fenta dhaga',0,800,90,720,52,24,'',37440,0,0,0,0,37440,0,0,5,39312,'1','0','2023-03-26 06:33:55','2023-03-26 06:33:55'),(36,4,29,33,0,70,6,'pending','yug','45','pich','net','pich dhaga',0,1000,95,950,60,24,'',57000,0,0,0,0,57000,0,0,5,59850,'0','0','2023-03-26 06:36:40','2023-03-26 06:36:40'),(37,4,30,34,0,70,6,'pending','khodal','23','n/tomato','long life','dark tomato',0,1200,95,1140,52,24,'',59280,0,0,0,0,59280,0,0,5,62244,'0','0','2023-03-27 05:04:57','2023-03-27 05:04:57'),(38,4,31,35,0,70,6,'pending','','','red','0','0',0,1000,95,950,26.5,24,'',25175,0,0,0,0,25175,0,0,5,26433.75,'1','0','2023-03-27 05:12:15','2023-03-27 05:12:15'),(39,4,32,35,0,70,6,'pending','','','108','0','0',0,2000,95,1900,26.5,24,'',50350,0,0,0,0,50350,0,0,5,52867.5,'1','0','2023-03-27 05:16:27','2023-03-27 05:16:27'),(40,4,33,36,0,70,6,'pending','khodal','30','n/piagen','long life','mango dhaga',0,200,100,200,62,24,'',12400,0,0,0,0,12400,0,0,5,13020,'0','0','2023-03-27 06:07:50','2023-03-27 06:07:50'),(41,4,34,37,0,70,6,'pending','khodal','70','black','velvet 5.50','rose seq',0,600,100,600,77,24,'',46200,0,0,0,0,46200,0,0,5,48510,'0','0','2023-03-27 02:24:34','2023-03-27 02:24:34'),(42,4,35,38,0,70,6,'pending','radhe','','black','velvet 5.50','rose seq',0,30,100,30,225,24,'',6750,0,0,0,0,6750,0,0,5,7087.5,'1','0','2023-03-27 02:30:16','2023-03-29 12:43:22'),(43,4,35,39,0,70,6,'pending','radhe','70','black','velvet 5.50','rose seq',0,100,100,100,130,24,'',13000,0,0,0,0,13000,0,0,5,13650,'0','0','2023-03-27 02:33:11','2023-03-29 12:43:22'),(44,4,36,40,0,70,6,'pending','shree tex`','18','neon tomato','galaxy 54','pink seq',0,800,95,760,34,24,'',25840,0,0,0,0,25840,0,0,5,27132,'0','0','2023-03-27 02:37:09','2023-03-27 02:37:09'),(45,4,37,41,0,70,6,'pending','khodal','10.5','white','net','fenta dhaga',0,2000,100,2000,12,24,'',24000,0,0,0,0,24000,0,0,5,25200,'0','0','2023-03-27 02:46:21','2023-03-27 02:46:21'),(46,4,38,42,0,70,6,'pending','urja','12','a/green','galaxy 54','tomato/coffee',0,1600,100,1600,29,24,'',46400,0,0,0,0,46400,0,0,5,48720,'0','0','2023-03-27 02:56:50','2023-03-27 02:56:50'),(47,4,39,43,0,70,6,'pending','shree tex','15','f/pich','long life','fenta 5mm',0,100,95,95,46,24,'',4370,0,0,0,0,4370,0,0,5,4588.5,'0','0','2023-03-28 10:57:00','2023-03-28 10:57:00'),(48,4,39,43,0,70,6,'pending','shree tex','15','muff','long life','5 mm m rani',0,100,95,95,46,24,'',4370,0,0,0,0,4370,0,0,5,4588.5,'0','0','2023-03-28 10:57:00','2023-03-28 10:57:00'),(49,4,40,44,0,70,6,'pending','shree tex','9','neon lemon','galaxy 54','gold seq',0,800,90,720,26,24,'',18720,0,0,0,0,18720,0,0,5,19656,'0','0','2023-03-28 11:05:01','2023-03-28 11:05:01'),(50,4,41,46,0,70,6,'pending','manan','14','mango','galaxy shadded','mango/silver',0,1600,90,1440,33,24,'',47520,0,0,0,0,47520,0,0,5,49896,'0','0','2023-03-28 11:09:12','2023-03-28 11:09:12'),(51,4,42,22,0,70,6,'pending','bhagwati','10','muff','long life','m rani butta',0,500,90,450,40,24,'',18000,0,0,0,0,18000,0,0,5,18900,'0','0','2023-03-28 11:14:00','2023-03-28 11:14:57'),(52,4,43,47,0,70,6,'pending','deep','11.50','pink','galaxy 54','pich seq 3mm',0,800,95,760,30,24,'',22800,0,0,0,0,22800,0,0,5,23940,'0','0','2023-03-28 11:19:07','2023-03-28 11:19:07'),(53,4,44,48,0,70,6,'pending','khodal','27','off white','long  life','m rani 2 ton/5 mm silver',0,400,95,380,60,24,'',22800,0,0,0,0,22800,0,0,5,23940,'0','0','2023-03-28 11:27:01','2023-03-28 11:27:01'),(54,4,45,41,0,70,6,'pending','khodal','10.5','white','net','fenta dhaga',0,2000,100,2000,11.25,24,'',22500,0,0,0,0,22500,2.5,2.5,0,23625,'0','0','2023-03-28 11:36:59','2023-03-28 01:36:22'),(55,4,46,50,0,70,6,'pending','shree tex','10','milky white','galaxy','5mm gold',0,800,95,760,27,24,'',20520,0,0,0,0,20520,0,0,5,21546,'0','0','2023-03-28 11:40:00','2023-03-28 11:40:00'),(56,4,47,51,0,70,6,'pending','urja','27','pink','long life','chiku dhaga',0,400,95,380,60,24,'',22800,0,0,0,0,22800,0,0,5,23940,'0','0','2023-03-28 11:52:57','2023-03-28 11:52:57'),(57,4,48,52,0,70,6,'pending','urja','10.5','off white','galaxy','fenta dhaga',0,1600,95,1520,24.5,24,'',37240,0,0,0,0,37240,2.5,2.5,0,39102,'0','0','2023-03-28 01:08:27','2023-03-28 01:08:27'),(58,4,49,9,0,70,6,'pending','urja','12','a/green','galaxy','pink butta',0,1200,95,1140,26,24,'',29640,0,0,0,0,29640,2.5,2.5,0,31122,'0','0','2023-03-28 01:13:45','2023-03-28 01:13:45'),(59,4,50,49,0,70,6,'pending','khodal','24','off white','long life','fenta dhaga',0,200,95,190,52,24,'',9880,0,0,0,0,9880,2.5,2.5,0,10374,'0','0','2023-03-28 01:41:27','2023-03-28 01:41:27'),(60,4,51,25,0,70,6,'pending','deep','13','champai','galaxy 54','gold seq',0,300,95,285,29,24,'',8265,0,0,0,0,8265,0,0,5,8678.25,'0','0','2023-03-28 02:04:27','2023-03-28 02:04:27'),(61,4,52,53,0,70,6,'pending','khodal','24','cc fenta','fine lycra','chiku',0,500,95,475,50,24,'',23750,0,0,0,0,23750,0,0,5,24937.5,'0','0','2023-03-28 02:59:53','2023-03-28 02:59:53'),(62,4,53,54,0,70,6,'pending','charmi','300','white','net','multy',0,50,95,47.5,340,24,'',16150,0,0,0,0,16150,0,0,5,16957.5,'0','0','2023-03-29 09:19:07','2023-03-29 09:19:07'),(63,4,53,20,0,70,6,'pending','charmi','240','white','net','mango/white',0,50,95,47.5,275,24,'',13062.5,0,0,0,0,13062.5,0,0,5,13715.63,'0','0','2023-03-29 09:19:07','2023-03-29 09:19:07'),(64,4,53,20,0,70,6,'pending','charmi','240','white','net','m rani/white',0,50,952,476,275,24,'',130900,0,0,0,0,130900,0,0,5,137445,'0','0','2023-03-29 09:19:07','2023-03-29 09:19:07'),(65,4,54,17,0,70,6,'pending','deep','33','off white','long life','gold/cooper seq',0,800,95,760,61,24,'',46360,0,0,0,0,46360,2.5,2.5,0,48678,'0','0','2023-03-29 09:22:57','2023-03-29 09:22:57'),(66,4,55,35,0,70,6,'pending','','','s white','0','0',0,2000,95,1900,26,24,'',49400,2,988,0,0,48412,0,0,5,50832.6,'1','0','2023-03-31 05:53:38','2023-03-31 05:53:38');
/*!40000 ALTER TABLE `erp_sale_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_sale_jober_issue`
--

DROP TABLE IF EXISTS `erp_sale_jober_issue`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_sale_jober_issue` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `sale_child_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `jober_id` int NOT NULL DEFAULT '0',
  `gst_id` int NOT NULL DEFAULT '0',
  `sale_jober_issue_remark` text,
  `sale_jober_issue_invoice_no` double DEFAULT '0',
  `sale_jober_issue_date` date DEFAULT NULL,
  `sale_jober_issue_taka` double NOT NULL DEFAULT '0',
  `sale_jober_issue_meter` double NOT NULL DEFAULT '0',
  `sale_jober_issue_meter_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `sale_jober_issue_weight` double NOT NULL DEFAULT '0',
  `sale_jober_issue_fold` double NOT NULL DEFAULT '0',
  `sale_jober_issue_count_meter` double NOT NULL DEFAULT '0',
  `sale_jober_issue_rate` double NOT NULL DEFAULT '0',
  `sale_jober_issue_total` double NOT NULL DEFAULT '0',
  `is_jober_issue_completed` enum('0','1') NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `sale_jober_issue_entry_date` datetime DEFAULT NULL,
  `sale_jober_issue_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `godown_id` (`godown_id`),
  KEY `sale_child_id` (`sale_child_id`),
  KEY `quality_id` (`quality_id`),
  KEY `jober_id` (`jober_id`),
  KEY `gst_id` (`gst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_sale_jober_issue`
--

LOCK TABLES `erp_sale_jober_issue` WRITE;
/*!40000 ALTER TABLE `erp_sale_jober_issue` DISABLE KEYS */;
INSERT INTO `erp_sale_jober_issue` VALUES (1,4,1,1,2,1,2,1,92,6,NULL,1,'2023-03-25',1,100,'[{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0}]',0,95,95,10,950,'0','1','2023-03-25 02:57:06','2023-03-25 03:02:10'),(2,4,1,1,2,1,19,18,92,6,NULL,2,'2023-03-25',2,210,'[{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"110\",\"taka_weight\":0}]',0,95,199.5,44,8778,'0','1','2023-03-25 03:00:38','2023-03-25 03:02:03'),(3,4,2,2,2,2,20,19,145,6,NULL,1,'2023-03-25',2,30,'[{\"taka_number\":\"\",\"taka_meter\":\"10\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"20\",\"taka_weight\":0}]',0,100,30,10,300,'0','0','2023-03-25 03:01:48','2023-03-25 03:01:48'),(4,4,1,1,2,1,10,9,96,6,NULL,1,'2023-03-27',18,2129,'[{\"taka_number\":\"\",\"taka_meter\":\"120\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"120\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"120\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"120\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"120\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"120\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"120\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"120\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"120\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"124\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"105\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"118\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"120\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"110\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"112\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"120\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"120\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"120\",\"taka_weight\":0}]',0,95,2022.55,12,24270.6,'0','0','2023-03-27 05:52:42','2023-03-27 11:51:15'),(5,4,1,1,2,1,54,41,92,6,NULL,2,'2023-03-28',2,338,'[{\"taka_number\":\"\",\"taka_meter\":\"169\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"169\",\"taka_weight\":0}]',0,100,338,24,8112,'0','0','2023-03-28 01:37:42','2023-03-28 01:37:42'),(6,4,1,1,2,1,59,49,92,6,NULL,3,'2023-03-28',2,338,'[{\"taka_number\":\"\",\"taka_meter\":\"169\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"169\",\"taka_weight\":0}]',0,100,338,24,8112,'0','0','2023-03-28 01:42:26','2023-03-28 01:46:47'),(7,4,1,1,2,1,53,48,92,6,NULL,4,'2023-03-28',4,680,'[{\"taka_number\":\"\",\"taka_meter\":\"180\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"164\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"167\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"169\",\"taka_weight\":0}]',0,100,680,27,18360,'0','0','2023-03-28 01:53:34','2023-03-28 01:53:34'),(8,4,1,1,2,1,57,52,96,6,NULL,5,'2023-03-28',24,2509,'[{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"112\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"124\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"112\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"117\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"124\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"116\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"116\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"106\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"96\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"91\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"91\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"98\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"102\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"98\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"138\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"83\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"93\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"92\",\"taka_weight\":0}]',0,95,2383.55,10.5,25027.28,'0','0','2023-03-28 01:56:12','2023-03-28 01:56:12'),(9,4,1,1,2,1,28,25,97,6,NULL,6,'2023-03-28',9,931,'[{\"taka_number\":\"\",\"taka_meter\":\"96\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"104\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"97\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"97\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"110\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"117\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"110\",\"taka_weight\":0}]',0,95,884.45,13,11497.85,'0','0','2023-03-28 02:03:34','2023-03-28 02:03:34'),(10,4,1,1,2,1,29,26,97,6,NULL,7,'2023-03-28',30,2946,'[{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"110\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"84\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"108\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"108\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"108\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"110\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"110\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"81\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"97\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"114\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"84\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"97\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"114\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"94\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"85\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"92\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"92\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"110\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"108\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"81\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"85\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"94\",\"taka_weight\":0}]',0,95,2798.7,12,33584.4,'0','0','2023-03-28 02:09:57','2023-03-28 02:09:57'),(11,4,1,1,2,1,61,53,92,6,NULL,8,'2023-03-28',2,462,'[{\"taka_number\":\"\",\"taka_meter\":\"234\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"228\",\"taka_weight\":0}]',0,100,462,24,11088,'1','0','2023-03-28 03:01:50','2023-03-28 03:08:40'),(12,4,1,1,2,1,55,50,166,6,NULL,9,'2023-03-28',8,766,'[{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"73\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"101\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"110\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"102\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0}]',0,95,727.7,10,7277,'1','0','2023-03-28 03:05:50','2023-03-28 03:11:21'),(13,4,1,1,2,1,44,40,166,6,NULL,10,'2023-03-29',8,836,'[{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"100\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"110\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"110\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"112\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"104\",\"taka_weight\":0}]',0,95,794.2,16,12707.2,'1','0','2023-03-29 06:14:30','2023-03-29 06:32:56'),(14,4,1,1,2,1,37,34,92,6,NULL,10,'2023-03-29',6,1008,'[{\"taka_number\":\"\",\"taka_meter\":\"174\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"164\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"174\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"168\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"162\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"166\",\"taka_weight\":0}]',0,95,957.6,23,22024.8,'1','0','2023-03-29 06:18:49','2023-03-29 06:32:39');
/*!40000 ALTER TABLE `erp_sale_jober_issue` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_sale_jober_receive`
--

DROP TABLE IF EXISTS `erp_sale_jober_receive`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_sale_jober_receive` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `sale_jober_issue_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `jober_id` int NOT NULL DEFAULT '0',
  `gst_id` int NOT NULL DEFAULT '0',
  `sale_jober_receive_remark` text,
  `sale_jober_receive_invoice_no` varchar(100) DEFAULT NULL,
  `sale_jober_receive_date` date DEFAULT NULL,
  `sale_jober_receive_lf_no` varchar(100) DEFAULT NULL,
  `sale_jober_receive_taka` double NOT NULL DEFAULT '0',
  `sale_jober_receive_meter` double NOT NULL DEFAULT '0',
  `sale_jober_receive_meter_data` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci,
  `sale_jober_receive_weight` double NOT NULL DEFAULT '0',
  `sale_jober_receive_fold` double NOT NULL DEFAULT '0',
  `sale_jober_receive_count_meter` double NOT NULL DEFAULT '0',
  `sale_jober_receive_rate` double NOT NULL DEFAULT '0',
  `sale_jober_receive_shortage` double NOT NULL DEFAULT '0',
  `sale_jober_receive_total` double NOT NULL DEFAULT '0',
  `is_work_completed` enum('0','1') NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `sale_jober_receive_entry_date` datetime DEFAULT NULL,
  `sale_jober_receive_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `godown_id` (`godown_id`),
  KEY `sale_jober_issue_id` (`sale_jober_issue_id`),
  KEY `quality_id` (`quality_id`),
  KEY `jober_id` (`jober_id`),
  KEY `gst_id` (`gst_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_sale_jober_receive`
--

LOCK TABLES `erp_sale_jober_receive` WRITE;
/*!40000 ALTER TABLE `erp_sale_jober_receive` DISABLE KEYS */;
INSERT INTO `erp_sale_jober_receive` VALUES (1,4,2,2,2,2,3,19,145,6,'demo remark','1','2023-03-31','1245',1,15,'[{\"taka_number\":\"\",\"taka_meter\":\"15\",\"taka_weight\":\"\"}]',0,100,0,10,0,150,'0','0','2023-03-31 04:35:38','2023-03-31 04:35:38');
/*!40000 ALTER TABLE `erp_sale_jober_receive` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_sale_return`
--

DROP TABLE IF EXISTS `erp_sale_return`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_sale_return` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `buyer_id` int NOT NULL DEFAULT '0',
  `haste_id` int NOT NULL DEFAULT '0',
  `broker_id` int NOT NULL DEFAULT '0',
  `delivery_party_godown_id` int NOT NULL DEFAULT '0',
  `invoice_no_id` int NOT NULL DEFAULT '0',
  `transporter_id` int NOT NULL DEFAULT '0',
  `tds_on_id` int NOT NULL DEFAULT '0',
  `nature_of_payment_id` int NOT NULL DEFAULT '0',
  `status_id` int NOT NULL DEFAULT '0',
  `sale_return_type_id` int NOT NULL DEFAULT '0',
  `sale_tax_invoice_ids` varchar(255) DEFAULT NULL,
  `sale_return_account_type` varchar(100) DEFAULT NULL,
  `sale_return_prefix` varchar(100) DEFAULT NULL,
  `sale_return_note_no` double NOT NULL DEFAULT '0',
  `sale_return_date` date DEFAULT NULL,
  `sale_return_other_transporter` varchar(100) DEFAULT NULL,
  `sale_return_lr_no` varchar(100) DEFAULT NULL,
  `sale_return_remark` text,
  `is_without_inventory` enum('0','1') NOT NULL DEFAULT '0',
  `sale_return_document_no` varchar(100) DEFAULT NULL,
  `sale_return_document_date` date DEFAULT NULL,
  `sale_return_lf_no` varchar(100) DEFAULT NULL,
  `sale_return_days` varchar(100) DEFAULT NULL,
  `is_tds_applicable` enum('0','1') NOT NULL DEFAULT '0',
  `sale_return_tds_applicable_rate` double NOT NULL DEFAULT '0',
  `sale_return_total_tds` double NOT NULL DEFAULT '0',
  `sale_return_total_unit_sent` double NOT NULL DEFAULT '0',
  `sale_return_total_qty_sent` double NOT NULL DEFAULT '0',
  `sale_return_amount` double NOT NULL DEFAULT '0',
  `sale_return_total_disc_amt` double NOT NULL DEFAULT '0',
  `sale_return_total_freight` double NOT NULL DEFAULT '0',
  `sale_return_total_taxable` double NOT NULL DEFAULT '0',
  `sale_return_total_sgst` double NOT NULL DEFAULT '0',
  `sale_return_total_cgst` double NOT NULL DEFAULT '0',
  `sale_return_total_igst` double NOT NULL DEFAULT '0',
  `sale_return_total_amount` double NOT NULL DEFAULT '0',
  `sale_return_round_off` double NOT NULL DEFAULT '0',
  `sale_return_total_net_amount` double NOT NULL DEFAULT '0',
  `sale_return_tds_with_total_net_amount` double NOT NULL DEFAULT '0',
  `sale_return_image` longtext,
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `sale_return_entry_date` datetime DEFAULT NULL,
  `sale_return_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `godown_id` (`godown_id`),
  KEY `buyer_id` (`buyer_id`),
  KEY `haste_id` (`haste_id`),
  KEY `broker_id` (`broker_id`),
  KEY `delivery_party_godown_id` (`delivery_party_godown_id`),
  KEY `invoice_no_id` (`invoice_no_id`),
  KEY `transporter_id` (`transporter_id`),
  KEY `tds_on_id` (`tds_on_id`),
  KEY `nature_of_payment_id` (`nature_of_payment_id`),
  KEY `status_id` (`status_id`),
  KEY `sale_return_type_id` (`sale_return_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_sale_return`
--

LOCK TABLES `erp_sale_return` WRITE;
/*!40000 ALTER TABLE `erp_sale_return` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_sale_return` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_sale_return_child`
--

DROP TABLE IF EXISTS `erp_sale_return_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_sale_return_child` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `sale_return_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `party_id` int NOT NULL DEFAULT '0',
  `gst_id` int NOT NULL DEFAULT '0',
  `sale_tax_child_id` int NOT NULL DEFAULT '0',
  `sale_return_child_remark` text,
  `sale_return_child_quality_colour` varchar(100) DEFAULT NULL,
  `sale_return_child_work` varchar(100) DEFAULT NULL,
  `sale_return_child_work_colour` varchar(100) DEFAULT NULL,
  `sale_return_child_hsn` varchar(100) DEFAULT NULL,
  `sale_return_child_cut` double NOT NULL DEFAULT '0',
  `sale_return_child_qty_per` varchar(100) DEFAULT NULL,
  `sale_return_child_qty` double NOT NULL DEFAULT '0',
  `sale_return_child_unit_sent` double NOT NULL DEFAULT '0',
  `sale_return_child_qty_sent` double NOT NULL DEFAULT '0',
  `sale_return_child_meter` double NOT NULL DEFAULT '0',
  `sale_return_child_fold` double NOT NULL DEFAULT '0',
  `sale_return_child_net_meter` double NOT NULL DEFAULT '0',
  `sale_return_child_rate_per` int NOT NULL DEFAULT '0',
  `sale_return_child_rate` double NOT NULL DEFAULT '0',
  `sale_return_child_amount` double NOT NULL DEFAULT '0',
  `sale_return_child_disc_per` double NOT NULL DEFAULT '0',
  `sale_return_child_disc_amt` double NOT NULL DEFAULT '0',
  `sale_return_child_freight` double NOT NULL DEFAULT '0',
  `sale_return_child_taxable` double NOT NULL DEFAULT '0',
  `sale_return_child_sgst` double NOT NULL DEFAULT '0',
  `sale_return_child_cgst` double NOT NULL DEFAULT '0',
  `sale_return_child_igst` double NOT NULL DEFAULT '0',
  `sale_return_child_total_amount` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `sale_return_child_entry_date` datetime DEFAULT NULL,
  `sale_return_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `sale_return_id` (`sale_return_id`),
  KEY `quality_id` (`quality_id`),
  KEY `party_id` (`party_id`),
  KEY `gst_id` (`gst_id`),
  KEY `sale_return_child_rate_per` (`sale_return_child_rate_per`),
  KEY `sale_tax_child_id` (`sale_tax_child_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_sale_return_child`
--

LOCK TABLES `erp_sale_return_child` WRITE;
/*!40000 ALTER TABLE `erp_sale_return_child` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_sale_return_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_sale_tax_invoice`
--

DROP TABLE IF EXISTS `erp_sale_tax_invoice`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_sale_tax_invoice` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `buyer_id` int NOT NULL DEFAULT '0',
  `tds_on_id` int NOT NULL DEFAULT '0',
  `nature_of_payment_id` int NOT NULL DEFAULT '0',
  `status_id` int NOT NULL DEFAULT '0',
  `sale_tax_invoice_status_id` int NOT NULL DEFAULT '0',
  `account_head_id` int NOT NULL DEFAULT '0',
  `account_type_party_id` int NOT NULL DEFAULT '0',
  `transporter_id` int NOT NULL DEFAULT '0',
  `sale_id` int NOT NULL DEFAULT '0',
  `sale_tax_invoice_no` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_lf_no` varchar(255) DEFAULT NULL,
  `sale_tax_invoice_bale_marka` varchar(255) DEFAULT NULL,
  `sale_tax_invoice_date` date DEFAULT NULL,
  `sale_tax_invoice_total_meter` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_total_total` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_total_disc_amount` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_total_freight` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_total_fless` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_total_taxable` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_total_sgst` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_total_cgst` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_total_igst` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_total_amount` double NOT NULL DEFAULT '0',
  `is_tds_applicable` enum('0','1') NOT NULL DEFAULT '0',
  `sale_tax_invoice_tds_applicable_rate` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_total_tds` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_tds_with_total_net_amount` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_tcs_per` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_tcs_amt` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_round_off` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_total_net_amount` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_image` longtext,
  `order_status` enum('pending','cancel','done') NOT NULL DEFAULT 'pending',
  `is_delete_status` enum('0','1') DEFAULT '0',
  `sale_tax_invoice_entry_date` datetime DEFAULT NULL,
  `sale_tax_invoice_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `branch_id` (`branch_id`),
  KEY `godown_id` (`godown_id`),
  KEY `buyer_id` (`buyer_id`),
  KEY `tds_on_id` (`tds_on_id`),
  KEY `nature_of_payment_id` (`nature_of_payment_id`),
  KEY `status_id` (`status_id`),
  KEY `sale_tax_invoice_status_id` (`sale_tax_invoice_status_id`),
  KEY `sale_id` (`sale_id`),
  KEY `account_head_id` (`account_head_id`),
  KEY `transporter_id` (`transporter_id`),
  KEY `account_type_party_id` (`account_type_party_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_sale_tax_invoice`
--

LOCK TABLES `erp_sale_tax_invoice` WRITE;
/*!40000 ALTER TABLE `erp_sale_tax_invoice` DISABLE KEYS */;
INSERT INTO `erp_sale_tax_invoice` VALUES (1,4,1,2,1,1,94,0,0,0,0,54,18,0,2,1,'','1*2','2023-03-31',2245.8,58390.8,1167.82,400,0,57622.98,0,0,2881.15,60504,'0',0,0,60504,0,0,0,60504,NULL,'pending','0','2023-03-31 09:39:29','2023-03-31 09:39:19');
/*!40000 ALTER TABLE `erp_sale_tax_invoice` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_sale_tax_invoice_child`
--

DROP TABLE IF EXISTS `erp_sale_tax_invoice_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_sale_tax_invoice_child` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `sale_tax_invoice_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `jober_id` int NOT NULL DEFAULT '0',
  `order_status_id` int NOT NULL DEFAULT '0',
  `gst_id` int NOT NULL DEFAULT '0',
  `sale_child_id` int NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_remark` text,
  `sale_tax_invoice_child_quality_colour` varchar(100) DEFAULT NULL,
  `sale_tax_invoice_child_work` varchar(100) DEFAULT NULL,
  `sale_tax_invoice_child_work_colour` varchar(100) DEFAULT NULL,
  `sale_tax_invoice_child_unit` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_meter` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_meter_data` longtext,
  `sale_tax_invoice_child_weight` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_fold` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_count_meter` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_rate` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_rate_per` int NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_help` varchar(100) DEFAULT NULL,
  `sale_tax_invoice_child_total` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_disc_per` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_disc_amt` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_freight` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_fless` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_taxable` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_sgst` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_cgst` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_igst` double NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_amount` double NOT NULL DEFAULT '0',
  `is_completed` enum('0','1') NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `sale_tax_invoice_child_entry_date` datetime DEFAULT NULL,
  `sale_tax_invoice_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `sale_tax_invoice_id` (`sale_tax_invoice_id`),
  KEY `quality_id` (`quality_id`),
  KEY `jober_id` (`jober_id`),
  KEY `order_status_id` (`order_status_id`),
  KEY `gst_id` (`gst_id`),
  KEY `sale_tax_invoice_child_rate_per` (`sale_tax_invoice_child_rate_per`),
  KEY `sale_child_id` (`sale_child_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_sale_tax_invoice_child`
--

LOCK TABLES `erp_sale_tax_invoice_child` WRITE;
/*!40000 ALTER TABLE `erp_sale_tax_invoice_child` DISABLE KEYS */;
INSERT INTO `erp_sale_tax_invoice_child` VALUES (1,4,1,35,0,0,6,66,'','s white','0','0',24,2364,'[{\"taka_number\":\"\",\"taka_meter\":\"122\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"124\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"125\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"124\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"124\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"125\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0},{\"taka_number\":\"\",\"taka_meter\":\"90\",\"taka_weight\":0}]',0,95,2245.8,26,24,'',58390.8,2,1167.82,400,0,57622.98,0,0,5,60504.13,'0','0','2023-03-31 05:54:37','2023-03-31 09:39:19');
/*!40000 ALTER TABLE `erp_sale_tax_invoice_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_setting`
--

DROP TABLE IF EXISTS `erp_setting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_setting` (
  `id` int NOT NULL AUTO_INCREMENT,
  `site_name` varchar(100) DEFAULT NULL,
  `site_description` text,
  `site_company_gst_number` varchar(50) DEFAULT NULL,
  `site_company_detail` text,
  `site_postal_address` varchar(255) DEFAULT NULL,
  `site_office_time_message` varchar(255) DEFAULT NULL,
  `site_about_us` text,
  `site_keywords` text,
  `site_logo` varchar(200) DEFAULT NULL,
  `site_favicon_logo` varchar(200) DEFAULT NULL,
  `site_email` text,
  `site_contact` text,
  `site_whattsapp_number` text,
  `site_link` text,
  `site_refer_transfer_in` enum('amount','percentage') NOT NULL DEFAULT 'amount',
  `site_refer_transfer_number` double NOT NULL DEFAULT '0',
  `site_mail_host` text,
  `site_mail_username` text,
  `site_mail_password` text,
  `site_mail_port` text,
  `site_404_image` varchar(255) DEFAULT NULL,
  `site_status` enum('publish','unpublish') NOT NULL DEFAULT 'publish',
  `site_security` enum('on','off') NOT NULL DEFAULT 'on',
  `site_notes` text,
  `site_topbar_header_background_color` varchar(50) DEFAULT NULL,
  `site_topbar_header_color` varchar(50) DEFAULT NULL,
  `site_page_title_background_color` varchar(50) DEFAULT NULL,
  `site_page_title_color` varchar(50) DEFAULT NULL,
  `site_sidebar_background_color` varchar(50) DEFAULT NULL,
  `site_sidebar_color` varchar(50) DEFAULT NULL,
  `site_modal_action` varchar(100) DEFAULT NULL,
  `site_login_page_image` varchar(500) DEFAULT NULL,
  `site_final_default_image` varchar(255) DEFAULT NULL,
  `site_entry_date` datetime DEFAULT NULL,
  `site_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_setting`
--

LOCK TABLES `erp_setting` WRITE;
/*!40000 ALTER TABLE `erp_setting` DISABLE KEYS */;
INSERT INTO `erp_setting` VALUES (1,'Sridix Config','Welcome to the multanijamat, a world of fashion where traditions are fused with modern aesthetics and infused with an ultra-modern spirit to cater to the women of today. It is an authentic fashion brand quintessentially dedicated to Indian ethnic wear. We like to call ourselves a pioneer in prêt modern-ethnic wear, trying to make Indian fashion approachable and affordable to all by eliminating the meticulous hopping between shops and pain-staking efforts.','','','708, 7th floor,<br>\r\nnathubhai tower,<br>udhan-navsari road,<br>\r\nudhana, surat,<br>gujarat - 394210','Monday to Saturday(10AM - 09PM)','Welcome to multanijamat. We stay always for you','multanijamatWelcome to multanijamat. We stay always for you','site_logo_03052022130539.png','site_favicon_12052022170758.png','praut6Wzr7Gptqu%2FjLS7sLm9gLbDwg%3D%3D','cXl2d3p7f4B9fg%3D%3D','cXl2d3p7f4B9fg%3D%3D','http://192.168.0.123/multanijamat/','amount',150,'rK62s3Kttbq8sriysb98sr%2B%2B','raa1t4S4uLCsssJ5r7y7','jaa1t4SYuLCsssJ9fH6E','bXd3','404.png','publish','off','','#FFFFFF','#000000','#063355','#FBFBFB','#000000','#FFFFFF','rollIn','site_login_03052022132745.png','','2021-06-15 11:24:16','2022-05-12 17:07:58');
/*!40000 ALTER TABLE `erp_setting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_sidebar`
--

DROP TABLE IF EXISTS `erp_sidebar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_sidebar` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sidebar_name` varchar(100) DEFAULT NULL,
  `table_id` int NOT NULL DEFAULT '0',
  `sidebar_icon` varchar(20) DEFAULT NULL,
  `sidebar_type` varchar(100) DEFAULT NULL,
  `sidebar_is_child` enum('yes','no') DEFAULT 'no',
  `sidebar_parent_id` int NOT NULL DEFAULT '0',
  `sidebar_url` varchar(300) DEFAULT NULL,
  `sidebar_allow_access` varchar(255) DEFAULT NULL,
  `sidebar_seq_no` int NOT NULL DEFAULT '0',
  `sidebar_register_by` int NOT NULL DEFAULT '0',
  `sidebar_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `sidebar_entry_date` datetime DEFAULT NULL,
  `sidebar_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `parent_id` (`sidebar_parent_id`),
  KEY `table_id` (`table_id`),
  KEY `sidebar_register_by` (`sidebar_register_by`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_sidebar`
--

LOCK TABLES `erp_sidebar` WRITE;
/*!40000 ALTER TABLE `erp_sidebar` DISABLE KEYS */;
INSERT INTO `erp_sidebar` VALUES (1,'dashboard',0,'home','sidebar','no',0,'home','[\"subadmin\",\"user\",\"administrator\",\"superadmin\",\"admin\"]',1,0,'active',NULL,'2022-05-27 12:54:24'),(6,'subadmin',0,'users','sidebar','no',0,'subadmin','[\"subadmin\",\"administrator\",\"superadmin\",\"admin\"]',14,0,'deactive',NULL,'2022-05-27 12:54:24'),(8,'global',0,'globe','sidebar','no',0,'global','[\"subadmin\",\"user\",\"administrator\",\"superadmin\",\"admin\"]',15,0,'deactive',NULL,'2022-05-27 12:54:24'),(11,'user',0,'users',NULL,'no',0,'user','[\"administrator\",\"superadmin\",\"admin\"]',13,0,'deactive','2021-12-27 15:50:13','2022-05-27 12:54:24'),(18,'slider',0,'list-alt',NULL,'no',0,'slider','[\"administrator\",\"superadmin\",\"admin\"]',9,1,'deactive','2022-01-05 14:28:33','2022-05-27 12:54:24'),(19,'banner',0,'list-alt',NULL,'no',0,'banner','[\"administrator\",\"superadmin\",\"admin\"]',10,1,'active','2022-01-05 16:18:33','2022-05-27 12:54:24'),(26,'contact us',0,'address-book',NULL,'no',0,'contactus','[\"administrator\",\"superadmin\",\"admin\"]',16,1,'deactive','2022-03-03 11:30:20','2022-05-27 12:54:24'),(29,'manage family',0,'users',NULL,'no',0,'managefamily','[\"administrator\",\"superadmin\",\"admin\"]',2,1,'active','2022-04-29 16:27:58','2022-05-27 12:54:24'),(30,'committee',0,'users',NULL,'no',0,'committee','[\"administrator\",\"superadmin\",\"admin\"]',3,1,'deactive','2022-04-30 17:13:51','2022-05-27 12:54:24'),(31,'cast',0,'list',NULL,'no',0,'cast','[\"administrator\",\"superadmin\",\"admin\"]',6,1,'active','2022-04-30 17:17:00','2022-05-27 12:54:24'),(32,'committee members',0,'list-alt',NULL,'no',0,'committeemembers','[\"administrator\",\"superadmin\",\"admin\"]',4,1,'active','2022-05-03 14:59:53','2022-05-27 12:54:24'),(33,'membership fee',0,'list-alt',NULL,'no',0,'membership','[\"administrator\",\"superadmin\",\"admin\"]',5,1,'active','2022-05-03 15:05:43','2022-05-27 12:54:24'),(34,'gallary',0,'camera',NULL,'no',0,'gallary','[\"administrator\",\"superadmin\",\"admin\"]',7,1,'active','2022-05-03 15:23:33','2022-05-27 12:54:24'),(35,'informative pages',0,'file',NULL,'no',0,'informativepages','[\"administrator\",\"superadmin\",\"admin\"]',8,1,'active','2022-05-03 15:25:16','2022-05-27 12:54:24'),(36,'report & society',0,'list-alt',NULL,'yes',35,'reportsociety','[\"administrator\",\"superadmin\",\"admin\"]',0,1,'active','2022-05-03 15:27:32','2022-05-03 17:42:47'),(37,'constitution',0,'list-alt',NULL,'yes',35,'constitution','[\"administrator\",\"superadmin\",\"admin\"]',0,1,'active','2022-05-03 15:28:17','2022-05-03 17:43:12'),(38,'task & organizing',0,'list-alt',NULL,'yes',35,'taskorganizing','[\"administrator\",\"superadmin\",\"admin\"]',0,1,'active','2022-05-03 15:29:26','2022-05-03 17:43:02'),(39,'advetisement',0,'list',NULL,'no',0,'advertisement','[\"administrator\",\"superadmin\",\"admin\"]',11,1,'active','2022-05-26 11:57:08','2022-05-27 12:54:24'),(40,'message',0,'list',NULL,'no',0,'message','[\"administrator\",\"superadmin\",\"admin\"]',12,1,'active','2022-05-27 12:52:37','2022-05-27 12:54:24');
/*!40000 ALTER TABLE `erp_sidebar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_sql_errors`
--

DROP TABLE IF EXISTS `erp_sql_errors`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_sql_errors` (
  `id` int NOT NULL AUTO_INCREMENT,
  `full_error` text,
  `procedure_name` varchar(255) DEFAULT NULL,
  `error_no` varchar(255) DEFAULT NULL,
  `error_msg` text,
  `sql_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_sql_errors`
--

LOCK TABLES `erp_sql_errors` WRITE;
/*!40000 ALTER TABLE `erp_sql_errors` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_sql_errors` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_status`
--

DROP TABLE IF EXISTS `erp_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_status` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `status_name` varchar(255) DEFAULT NULL,
  `status_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `status_entry_date` datetime DEFAULT NULL,
  `status_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `company_id` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_status`
--

LOCK TABLES `erp_status` WRITE;
/*!40000 ALTER TABLE `erp_status` DISABLE KEYS */;
INSERT INTO `erp_status` VALUES (1,0,0,'domestic company','active','2022-11-12 14:58:06','2022-11-12 14:58:06'),(2,0,0,'firm','active','2022-11-12 14:58:06','2022-11-12 14:58:06'),(3,0,0,'huf','active','2022-11-12 14:58:06','2022-11-12 14:58:06'),(4,0,0,'individual','active','2022-11-12 14:58:06','2022-11-12 14:58:06');
/*!40000 ALTER TABLE `erp_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_stock_journal`
--

DROP TABLE IF EXISTS `erp_stock_journal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_stock_journal` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `stock_journal_voucher_no` varchar(255) DEFAULT NULL,
  `stock_journal_voucher_date` date DEFAULT NULL,
  `stock_journal_remark` text,
  `stock_journal_diffrence` date DEFAULT NULL,
  `stock_journal_voucher_type` varchar(255) DEFAULT NULL,
  `stock_journal_entry_date` datetime DEFAULT NULL,
  `stock_journal_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `godown_id` (`godown_id`),
  KEY `year_id` (`year_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_stock_journal`
--

LOCK TABLES `erp_stock_journal` WRITE;
/*!40000 ALTER TABLE `erp_stock_journal` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_stock_journal` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_stock_journal_child`
--

DROP TABLE IF EXISTS `erp_stock_journal_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_stock_journal_child` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `stock_journal_id` int DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `stock_journal_child_sale_unit` double NOT NULL DEFAULT '0',
  `stock_journal_child_sale_qty` double DEFAULT '0',
  `stock_journal_child_sale_mtr` double NOT NULL DEFAULT '0',
  `stock_journal_child_sale_per` varchar(100) DEFAULT NULL,
  `stock_journal_child_purchase_qty` double NOT NULL DEFAULT '0',
  `stock_journal_child_purchase_per` varchar(100) NOT NULL DEFAULT '0',
  `stock_journal_child_entry_date` datetime DEFAULT NULL,
  `stock_journal_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `stock_journal_id` (`stock_journal_id`),
  KEY `quality_id` (`quality_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_stock_journal_child`
--

LOCK TABLES `erp_stock_journal_child` WRITE;
/*!40000 ALTER TABLE `erp_stock_journal_child` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_stock_journal_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_stock_transfer`
--

DROP TABLE IF EXISTS `erp_stock_transfer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_stock_transfer` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `from_godown_id` int NOT NULL DEFAULT '0',
  `to_godown_id` int NOT NULL DEFAULT '0',
  `stock_transfer_transaction_no` varchar(255) DEFAULT NULL,
  `stock_transfer_transaction_date` date DEFAULT NULL,
  `stock_transfer_lr_no` varchar(100) DEFAULT NULL,
  `stock_transfer_lf_no` varchar(100) DEFAULT NULL,
  `stock_transfer_driver_name` varchar(255) DEFAULT NULL,
  `stock_transfer_driver_no` varchar(255) DEFAULT NULL,
  `stock_transfer_vehicle_no` varchar(100) DEFAULT NULL,
  `stock_transfer_employee` varchar(255) DEFAULT NULL,
  `stock_transfer_expense` varchar(255) DEFAULT NULL,
  `stock_transfer_remark` text,
  `stock_transfer_entry_date` datetime DEFAULT NULL,
  `stock_transfer_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `from_godown_id` (`from_godown_id`),
  KEY `to_godown_id` (`to_godown_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_stock_transfer`
--

LOCK TABLES `erp_stock_transfer` WRITE;
/*!40000 ALTER TABLE `erp_stock_transfer` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_stock_transfer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_stock_transfer_child`
--

DROP TABLE IF EXISTS `erp_stock_transfer_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_stock_transfer_child` (
  `Id` int NOT NULL AUTO_INCREMENT,
  `stock_transfer_id` int NOT NULL DEFAULT '0',
  `quality_id` int NOT NULL DEFAULT '0',
  `stock_transfer_child_unit_sent` varchar(255) DEFAULT NULL,
  `stock_transfer_child_quantity_sent` date DEFAULT NULL,
  `stock_transfer_child_rate_per` varchar(100) DEFAULT NULL,
  `stock_transfer_child_entry_date` datetime DEFAULT NULL,
  `stock_transfer_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `stock_transfer_id` (`stock_transfer_id`),
  KEY `quality_id` (`quality_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_stock_transfer_child`
--

LOCK TABLES `erp_stock_transfer_child` WRITE;
/*!40000 ALTER TABLE `erp_stock_transfer_child` DISABLE KEYS */;
/*!40000 ALTER TABLE `erp_stock_transfer_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_tds_on`
--

DROP TABLE IF EXISTS `erp_tds_on`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_tds_on` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `tds_on_name` varchar(255) DEFAULT NULL,
  `tds_on_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `tds_on_entry_date` datetime DEFAULT NULL,
  `tds_on_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_tds_on`
--

LOCK TABLES `erp_tds_on` WRITE;
/*!40000 ALTER TABLE `erp_tds_on` DISABLE KEYS */;
INSERT INTO `erp_tds_on` VALUES (1,0,'tds on loan interest','active','2022-11-12 14:58:06','2022-11-12 14:58:06'),(2,0,'tds on mill','active','2022-11-12 14:58:06','2022-11-12 14:58:06'),(3,0,'tds on payment of salary','active','2022-11-12 14:58:06','2022-11-12 14:58:06'),(4,0,'tds on rent','active','2022-11-12 14:58:06','2022-11-12 14:58:06'),(5,0,'tds on value addition','active','2022-11-12 14:58:06','2022-11-12 14:58:06');
/*!40000 ALTER TABLE `erp_tds_on` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_tds_rate`
--

DROP TABLE IF EXISTS `erp_tds_rate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_tds_rate` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `godown_id` int NOT NULL DEFAULT '0',
  `nature_of_payment_id` int NOT NULL DEFAULT '0',
  `status_id` int NOT NULL DEFAULT '0',
  `tds_rate` double NOT NULL DEFAULT '0',
  `tds_rate_entry_date` datetime DEFAULT NULL,
  `tds_rate_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `year_id` (`year_id`),
  KEY `company_id` (`company_id`),
  KEY `branch_id` (`branch_id`),
  KEY `godown_id` (`godown_id`),
  KEY `nature_of_payment_id` (`nature_of_payment_id`),
  KEY `status_id` (`status_id`)
) ENGINE=InnoDB AUTO_INCREMENT=113 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_tds_rate`
--

LOCK TABLES `erp_tds_rate` WRITE;
/*!40000 ALTER TABLE `erp_tds_rate` DISABLE KEYS */;
INSERT INTO `erp_tds_rate` VALUES (1,4,2,1,1,1,44,1,0,'2023-03-02 05:28:43','2023-03-24 09:38:14'),(2,4,2,1,1,1,44,2,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(3,4,2,1,1,1,44,3,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(4,4,2,1,1,1,44,4,5,'2023-03-02 05:28:43','2023-03-24 09:38:33'),(5,4,2,1,1,1,45,1,0,'2023-03-02 05:28:43','2023-03-24 09:38:34'),(6,4,2,1,1,1,45,2,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(7,4,2,1,1,1,45,3,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(8,4,2,1,1,1,45,4,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(9,4,2,1,1,1,46,1,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(10,4,2,1,1,1,46,2,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(11,4,2,1,1,1,46,3,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(12,4,2,1,1,1,46,4,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(13,4,2,1,1,1,47,1,10,'2023-03-02 05:28:43','2023-03-24 09:38:27'),(14,4,2,1,1,1,47,2,10,'2023-03-02 05:28:43','2023-03-24 09:38:29'),(15,4,2,1,1,1,47,3,10,'2023-03-02 05:28:43','2023-03-24 09:38:29'),(16,4,2,1,1,1,47,4,10,'2023-03-02 05:28:43','2023-03-24 09:38:30'),(17,4,2,1,1,1,48,1,0,'2023-03-02 05:28:43','2023-03-24 09:38:32'),(18,4,2,1,1,1,48,2,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(19,4,2,1,1,1,48,3,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(20,4,2,1,1,1,48,4,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(21,4,2,1,1,1,49,1,2,'2023-03-02 05:28:43','2023-03-24 09:38:42'),(22,4,2,1,1,1,49,2,2,'2023-03-02 05:28:43','2023-03-24 09:38:53'),(23,4,2,1,1,1,49,3,1,'2023-03-02 05:28:43','2023-03-24 09:39:01'),(24,4,2,1,1,1,49,4,1,'2023-03-02 05:28:43','2023-03-24 09:39:11'),(25,4,2,1,1,1,50,1,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(26,4,2,1,1,1,50,2,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(27,4,2,1,1,1,50,3,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(28,4,2,1,1,1,50,4,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(29,4,2,1,1,1,51,1,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(30,4,2,1,1,1,51,2,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(31,4,2,1,1,1,51,3,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(32,4,2,1,1,1,51,4,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(33,4,2,1,1,1,52,1,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(34,4,2,1,1,1,52,2,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(35,4,2,1,1,1,52,3,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(36,4,2,1,1,1,52,4,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(37,4,2,1,1,1,53,1,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(38,4,2,1,1,1,53,2,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(39,4,2,1,1,1,53,3,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(40,4,2,1,1,1,53,4,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(41,4,2,1,1,1,54,1,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(42,4,2,1,1,1,54,2,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(43,4,2,1,1,1,54,3,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(44,4,2,1,1,1,54,4,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(45,4,2,1,1,1,55,1,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(46,4,2,1,1,1,55,2,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(47,4,2,1,1,1,55,3,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(48,4,2,1,1,1,55,4,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(49,4,2,1,1,1,56,1,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(50,4,2,1,1,1,56,2,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(51,4,2,1,1,1,56,3,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(52,4,2,1,1,1,56,4,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(53,4,2,1,1,1,57,1,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(54,4,2,1,1,1,57,2,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(55,4,2,1,1,1,57,3,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(56,4,2,1,1,1,57,4,0,'2023-03-02 05:28:43','2023-03-02 05:28:43'),(57,4,2,2,2,2,44,1,5,'2023-03-02 05:30:54','2023-03-02 12:35:05'),(58,4,2,2,2,2,44,2,4,'2023-03-02 05:30:54','2023-03-02 12:35:09'),(59,4,2,2,2,2,44,3,2.5,'2023-03-02 05:30:54','2023-03-02 12:35:09'),(60,4,2,2,2,2,44,4,3,'2023-03-02 05:30:54','2023-03-02 12:35:10'),(61,4,2,2,2,2,45,1,5,'2023-03-02 05:30:54','2023-03-02 12:35:11'),(62,4,2,2,2,2,45,2,2,'2023-03-02 05:30:54','2023-03-02 12:35:12'),(63,4,2,2,2,2,45,3,3,'2023-03-02 05:30:54','2023-03-02 12:35:12'),(64,4,2,2,2,2,45,4,1,'2023-03-02 05:30:54','2023-03-02 12:35:13'),(65,4,2,2,2,2,46,1,10,'2023-03-02 05:30:54','2023-03-02 12:35:14'),(66,4,2,2,2,2,46,2,2.5,'2023-03-02 05:30:54','2023-03-02 12:35:15'),(67,4,2,2,2,2,46,3,4,'2023-03-02 05:30:54','2023-03-02 12:35:16'),(68,4,2,2,2,2,46,4,8,'2023-03-02 05:30:54','2023-03-02 12:35:17'),(69,4,2,2,2,2,47,1,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(70,4,2,2,2,2,47,2,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(71,4,2,2,2,2,47,3,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(72,4,2,2,2,2,47,4,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(73,4,2,2,2,2,48,1,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(74,4,2,2,2,2,48,2,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(75,4,2,2,2,2,48,3,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(76,4,2,2,2,2,48,4,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(77,4,2,2,2,2,49,1,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(78,4,2,2,2,2,49,2,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(79,4,2,2,2,2,49,3,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(80,4,2,2,2,2,49,4,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(81,4,2,2,2,2,50,1,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(82,4,2,2,2,2,50,2,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(83,4,2,2,2,2,50,3,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(84,4,2,2,2,2,50,4,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(85,4,2,2,2,2,51,1,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(86,4,2,2,2,2,51,2,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(87,4,2,2,2,2,51,3,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(88,4,2,2,2,2,51,4,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(89,4,2,2,2,2,52,1,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(90,4,2,2,2,2,52,2,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(91,4,2,2,2,2,52,3,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(92,4,2,2,2,2,52,4,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(93,4,2,2,2,2,53,1,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(94,4,2,2,2,2,53,2,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(95,4,2,2,2,2,53,3,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(96,4,2,2,2,2,53,4,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(97,4,2,2,2,2,54,1,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(98,4,2,2,2,2,54,2,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(99,4,2,2,2,2,54,3,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(100,4,2,2,2,2,54,4,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(101,4,2,2,2,2,55,1,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(102,4,2,2,2,2,55,2,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(103,4,2,2,2,2,55,3,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(104,4,2,2,2,2,55,4,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(105,4,2,2,2,2,56,1,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(106,4,2,2,2,2,56,2,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(107,4,2,2,2,2,56,3,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(108,4,2,2,2,2,56,4,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(109,4,2,2,2,2,57,1,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(110,4,2,2,2,2,57,2,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(111,4,2,2,2,2,57,3,0,'2023-03-02 05:30:54','2023-03-02 05:30:54'),(112,4,2,2,2,2,57,4,0,'2023-03-02 05:30:54','2023-03-02 05:30:54');
/*!40000 ALTER TABLE `erp_tds_rate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_type`
--

DROP TABLE IF EXISTS `erp_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_type` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `type_name` varchar(255) DEFAULT NULL,
  `type_code` varchar(255) DEFAULT NULL,
  `type_rate` double NOT NULL DEFAULT '0',
  `type_indivisual` double NOT NULL DEFAULT '0',
  `type_huf` double NOT NULL DEFAULT '0',
  `type_domestic_company` double NOT NULL DEFAULT '0',
  `type_firm` double NOT NULL DEFAULT '0',
  `type_parent_name` varchar(255) DEFAULT NULL,
  `type_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `type_entry_date` datetime DEFAULT NULL,
  `type_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=75 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_type`
--

LOCK TABLES `erp_type` WRITE;
/*!40000 ALTER TABLE `erp_type` DISABLE KEYS */;
INSERT INTO `erp_type` VALUES (1,0,'wholesaler',NULL,0,0,0,0,0,'party','active','2022-11-04 13:44:20','2022-11-04 13:44:20'),(2,0,'trending',NULL,0,0,0,0,0,'industries','active','2022-11-07 10:34:20','2022-11-07 10:34:20'),(3,0,'textile',NULL,0,0,0,0,0,'industries','active','2022-11-07 10:34:20','2022-11-07 10:34:20'),(4,0,'stationery',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(5,0,'packing materiyal exp.',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(6,0,'electricity meteriyal',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(7,0,'hamali expns',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(8,0,'rate diffrence ac (sale)',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(9,0,'shop insurance a/c',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(10,0,'shop rent a/c',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(11,0,'shop maintenenc a/c',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(12,0,'refilling fire extinguisher',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(13,0,'bank charge',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(14,0,'shop expence',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(15,0,'lorry freight expence',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(16,0,'sempal expence',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(17,0,'petrol expence',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(18,0,'electricity expence',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(19,0,'post expence',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(20,0,'folding expence',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(21,0,'computer expence',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(22,0,'salary expence',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(23,0,'softwear exp',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(24,0,'internet',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(25,0,'interest on loan ac',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(26,0,'legal exp',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(27,0,'commision a/c',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(28,0,'transportation expense',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(29,0,'rate diffrence ac purchase',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(30,0,'depreciation a/c',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(31,0,'audit fee',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(32,0,'tempo bhada',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(33,0,'tds interest a/c',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(34,0,'travelling exps',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(35,0,'parcel insurance',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(36,0,'bank charges union bank',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(37,0,'exhibition exp',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(38,0,'bank interest union bank',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(39,0,'quantity difference ac (sale)',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(40,0,'quantity difference (purchase)',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(41,0,'repair and mantinance exp',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(42,0,'smc professtional tax',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(43,0,'postpaid mobile expense',NULL,0,0,0,0,0,'bank_head','active',NULL,NULL),(44,0,'Commision & Brokerage','(194H)',5,0,0,0,0,'nature_of_payment','active',NULL,NULL),(45,0,'Immovable Property other than Agricultural Land','(194IA)',0,0,0,0,0,'nature_of_payment','active',NULL,NULL),(46,0,'Insurance Commision','(194D)',10,0,0,0,0,'nature_of_payment','active',NULL,NULL),(47,0,'Interest other than Interest on Securities','(194A)',10,0,0,0,0,'nature_of_payment','active',NULL,NULL),(48,0,'Payment to Adverting / Sub Contractors','(194C)',2,0,0,0,0,'nature_of_payment','active',NULL,NULL),(49,0,'Payment to Contractors','(194C)',2,0,0,0,0,'nature_of_payment','active',NULL,NULL),(50,0,'Professional Fees & Technical Services','(194J)',10,0,0,0,0,'nature_of_payment','active',NULL,NULL),(51,0,'Purchase','(194Q)',0,0,0,0,0,'nature_of_payment','active',NULL,NULL),(52,0,'Rent-Land & Building','(194Ib)',10,0,0,0,0,'nature_of_payment','active',NULL,NULL),(53,0,'Rent-Plant & Machinery','(194Ia)',0,0,0,0,0,'nature_of_payment','active',NULL,NULL),(54,0,'Salary','(192)',0,0,0,0,0,'nature_of_payment','active',NULL,NULL),(55,0,'TDS on Contractors','(194M)',0,0,0,0,0,'nature_of_payment','active',NULL,NULL),(56,0,'TDS on Rent','(194IB)',0,0,0,0,0,'nature_of_payment','active',NULL,NULL),(57,0,'Winning from Lotteries & Puzzles','(194B)',30,0,0,0,0,'nature_of_payment','active',NULL,NULL),(58,0,'semiwholesaler',NULL,0,0,0,0,0,'party','active','2022-11-16 12:58:42','2022-11-16 12:58:42'),(59,0,'retailer',NULL,0,0,0,0,0,'party','active','2022-11-16 12:58:42','2022-11-16 12:58:42'),(60,0,'franchise',NULL,0,0,0,0,0,'party','active','2022-11-16 12:58:42','2022-11-16 12:58:42'),(61,0,'finish',NULL,0,0,0,0,0,'quality','active',NULL,NULL),(62,0,'grey',NULL,0,0,0,0,0,'quality','active',NULL,NULL),(63,0,'yarn',NULL,0,0,0,0,0,'quality','active',NULL,NULL),(64,0,'other',NULL,0,0,0,0,0,'quality','active',NULL,NULL),(65,0,'beam',NULL,0,0,0,0,0,'quality','active',NULL,NULL),(66,0,'received',NULL,0,0,0,0,0,'sale','active',NULL,NULL),(67,0,'progress',NULL,0,0,0,0,0,'sale','active',NULL,NULL),(68,0,'deliverd',NULL,0,0,0,0,0,'sale','active',NULL,NULL),(69,0,'cancel',NULL,0,0,0,0,0,'sale','active',NULL,NULL),(70,0,'received',NULL,0,0,0,0,0,'sale_child','active','2022-11-04 13:44:20','2022-11-04 13:44:20'),(71,0,'injobwork',NULL,0,0,0,0,0,'sale_child','active','2022-11-04 13:44:20','2022-11-04 13:44:20'),(72,0,'onway',NULL,0,0,0,0,0,'sale_child','active','2022-11-04 13:44:20','2022-11-04 13:44:20'),(73,0,'completed',NULL,0,0,0,0,0,'sale_child','active','2022-11-04 13:44:20','2022-11-04 13:44:20'),(74,0,'cancel',NULL,0,0,0,0,0,'sale_child','active','2022-11-04 13:44:20','2022-11-04 13:44:20');
/*!40000 ALTER TABLE `erp_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_unit_measurement`
--

DROP TABLE IF EXISTS `erp_unit_measurement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_unit_measurement` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `unit_measurement_name` varchar(255) DEFAULT NULL,
  `unit_measurement_symbol` varchar(255) DEFAULT NULL,
  `unit_measurement_no_of_decimal` varchar(255) DEFAULT NULL,
  `unit_measurement_invoice_base` enum('pcs-sheet-unit','quantity-weight') NOT NULL DEFAULT 'pcs-sheet-unit',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `unit_measurement_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `unit_measurement_entry_date` datetime DEFAULT NULL,
  `unit_measurement_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `company_id` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_unit_measurement`
--

LOCK TABLES `erp_unit_measurement` WRITE;
/*!40000 ALTER TABLE `erp_unit_measurement` DISABLE KEYS */;
INSERT INTO `erp_unit_measurement` VALUES (1,0,0,'bags','bag','0','quantity-weight','0','active',NULL,NULL),(2,0,0,'bale','bal','0','quantity-weight','0','active',NULL,'2022-11-26 05:42:41'),(3,0,0,'bundles','bdl','0','quantity-weight','0','active',NULL,NULL),(4,0,0,'buckles','bkl','0','quantity-weight','0','active',NULL,NULL),(5,0,0,'billion of units','bou','0','quantity-weight','0','active',NULL,NULL),(6,0,0,'box','box','0','quantity-weight','0','active',NULL,NULL),(7,0,0,'bottles','btl','0','quantity-weight','0','active',NULL,NULL),(8,0,0,'bunches','bun','0','quantity-weight','0','active',NULL,NULL),(9,0,0,'cans','can','0','quantity-weight','0','active',NULL,NULL),(10,0,0,'cubic meters','cbm','0','quantity-weight','0','active',NULL,NULL),(11,0,0,'cubic centimeters','ccm','0','quantity-weight','0','active',NULL,NULL),(12,0,0,'centimeters','cms','0','quantity-weight','0','active',NULL,NULL),(13,0,0,'cartons','ctn','0','quantity-weight','0','active',NULL,NULL),(14,0,0,'dozens','doz','0','quantity-weight','0','active',NULL,NULL),(15,0,0,'drums','drm','0','quantity-weight','0','active',NULL,NULL),(16,0,0,'great gross','ggk','0','quantity-weight','0','active',NULL,NULL),(17,0,0,'grammes','gms','3','quantity-weight','0','active',NULL,NULL),(18,0,0,'gross','grs','0','quantity-weight','0','active',NULL,NULL),(19,0,0,'gross yards','gyd','0','quantity-weight','0','active',NULL,NULL),(20,0,0,'kilograms','kgs','3','quantity-weight','0','active',NULL,NULL),(21,0,0,'kilolitre','klr','0','quantity-weight','0','active',NULL,NULL),(22,0,0,'kilometre','kme','0','quantity-weight','0','active',NULL,NULL),(23,0,0,'mililitre','mlt','0','quantity-weight','0','active',NULL,NULL),(24,0,0,'meters','mtr','2','quantity-weight','0','active',NULL,NULL),(25,0,0,'metric ton','mts','0','quantity-weight','0','active',NULL,NULL),(26,0,0,'numbers','nos','0','quantity-weight','0','active',NULL,NULL),(27,0,0,'packs','pac','0','quantity-weight','0','active',NULL,NULL),(28,4,1,'pieces12','pcs','0','pcs-sheet-unit','0','active',NULL,'2022-11-26 10:40:29'),(29,0,0,'pairs','prs','0','quantity-weight','0','active',NULL,NULL),(30,0,0,'quintal','qtl','2','quantity-weight','0','active',NULL,NULL),(31,0,0,'rolls','rol','0','quantity-weight','0','active',NULL,NULL),(32,0,0,'sets','set','0','quantity-weight','0','active',NULL,NULL),(33,0,0,'square feet','sqf','2','quantity-weight','0','active',NULL,NULL),(34,0,0,'square meters','sqm','3','quantity-weight','0','active',NULL,NULL),(35,0,0,'square yards','sqy','0','quantity-weight','0','active',NULL,NULL),(36,0,0,'tablets','tbs','0','quantity-weight','0','active',NULL,NULL),(37,0,0,'ten gross','tgm','0','quantity-weight','0','active',NULL,NULL),(38,0,0,'thousands','thd','0','quantity-weight','0','active',NULL,NULL),(39,0,0,'tonnes','ton','0','quantity-weight','0','active',NULL,NULL),(40,0,0,'tubes','tub','0','quantity-weight','0','active',NULL,NULL),(41,0,0,'us gallons','ugs','0','quantity-weight','0','active',NULL,NULL),(42,0,0,'units','unt','0','quantity-weight','0','active',NULL,NULL),(43,0,0,'yards','yds','0','quantity-weight','0','active',NULL,NULL),(44,4,1,'others','oth','0','quantity-weight','0','active',NULL,'2022-11-26 10:40:05'),(45,4,1,'new measurement new one','demo','2','pcs-sheet-unit','0','active','2022-11-21 12:37:40','2022-11-23 08:52:58'),(46,4,1,'',NULL,'','pcs-sheet-unit','0','active','2022-11-26 02:46:41','2022-11-26 02:46:41'),(47,4,1,'new um',NULL,'3','pcs-sheet-unit','0','active','2022-11-26 05:30:04','2022-11-26 05:30:04'),(48,4,1,'demo',NULL,'45','pcs-sheet-unit','0','active','2022-11-26 05:31:52','2022-11-26 05:31:52'),(49,4,1,'demo',NULL,'45','pcs-sheet-unit','0','active','2022-11-26 05:32:15','2022-11-26 05:32:15'),(50,4,1,'demo',NULL,'45','pcs-sheet-unit','0','active','2022-11-26 05:36:51','2022-11-26 05:36:51'),(51,4,1,'demo',NULL,'45','pcs-sheet-unit','0','active','2022-11-26 05:37:18','2022-11-26 05:37:18'),(52,4,1,'demo',NULL,'45','pcs-sheet-unit','0','active','2022-11-26 05:38:10','2022-11-26 05:38:10'),(53,4,1,'demo','ffg','45','pcs-sheet-unit','0','active','2022-11-26 05:38:45','2022-11-26 05:43:55'),(54,4,1,'demo um',NULL,'45','pcs-sheet-unit','0','active','2022-11-26 05:44:27','2022-11-26 05:44:27'),(55,4,1,'new uom','DEM','3','pcs-sheet-unit','0','active','2022-11-26 05:47:00','2022-11-26 05:48:27'),(56,4,1,'hhhhh','hhh','6','pcs-sheet-unit','0','active','2022-12-20 03:22:33','2022-12-20 03:22:33');
/*!40000 ALTER TABLE `erp_unit_measurement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_user`
--

DROP TABLE IF EXISTS `erp_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(100) DEFAULT NULL,
  `user_email` varchar(500) DEFAULT NULL,
  `user_mobile` varchar(500) DEFAULT NULL,
  `user_device_number` varchar(255) DEFAULT NULL,
  `user_password` varchar(750) DEFAULT NULL,
  `user_gst_number` varchar(50) DEFAULT NULL,
  `user_profile` varchar(500) DEFAULT NULL,
  `user_register_by` int NOT NULL DEFAULT '0',
  `user_whatsapp_number` varchar(250) DEFAULT NULL,
  `user_address` varchar(500) DEFAULT NULL,
  `user_status` enum('active','deactive') NOT NULL DEFAULT 'active',
  `user_position` enum('administrator','admin','subadmin','vendor','customer','manager','client','student','user','subscriber','executive') NOT NULL DEFAULT 'user',
  `user_entry_date` datetime DEFAULT NULL,
  `user_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `register_by` (`user_register_by`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_user`
--

LOCK TABLES `erp_user` WRITE;
/*!40000 ALTER TABLE `erp_user` DISABLE KEYS */;
INSERT INTO `erp_user` VALUES (1,'superadmin','rLayqLamqrSxt4qyua63u360wcA%3D','cXl6e3x9fn%2BAgQ%3D%3D',NULL,'rLayqLamqrSxtw%3D%3D',NULL,'user_31122021130130.jpeg',0,'cXR0c3h7eH2Bew%3D%3D',NULL,'active','administrator','2021-08-13 08:52:53','2022-02-17 16:41:33'),(2,'admin','mqWvrLKFrbSpsrZ5r7y7','aXFyc3R1dnd4eQ%3D%3D','','mqWvrLI%3D','','user_06012022134953.jpeg',1,'','','active','admin','2021-09-14 02:03:15','2022-02-17 16:42:05'),(3,'testing',NULL,NULL,NULL,NULL,NULL,NULL,0,NULL,NULL,'active','user',NULL,NULL),(4,'sridixtest','sridix@gmail.com',NULL,NULL,'2016',NULL,NULL,0,NULL,NULL,'active','user',NULL,NULL);
/*!40000 ALTER TABLE `erp_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_voucher`
--

DROP TABLE IF EXISTS `erp_voucher`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_voucher` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `branch_id` int DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `party_id` int NOT NULL DEFAULT '0',
  `bank_from_id` int NOT NULL DEFAULT '0',
  `bank_to_id` int NOT NULL DEFAULT '0',
  `tds_on_id` int NOT NULL DEFAULT '0',
  `nature_of_payment_id` int NOT NULL DEFAULT '0',
  `status_id` int NOT NULL DEFAULT '0',
  `from_party_id` int NOT NULL DEFAULT '0',
  `to_party_id` int NOT NULL DEFAULT '0',
  `voucher_type` enum('receipt','payment','contra','journal') NOT NULL DEFAULT 'receipt',
  `voucher_no` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `voucher_lf_no` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `voucher_date` date DEFAULT NULL,
  `voucher_transaction_type` enum('cash','bank','netbanking','journal','b2b','c2c','cw','cd','none') NOT NULL DEFAULT 'none',
  `voucher_bank_name` varchar(100) DEFAULT NULL,
  `voucher_cheque_ref_no` varchar(255) DEFAULT NULL,
  `voucher_cheque_ref_date` date DEFAULT NULL,
  `voucher_amount` double NOT NULL DEFAULT '0',
  `voucher_remark` text,
  `is_print` enum('0','1') NOT NULL DEFAULT '0',
  `voucher_cheque_print_name` varchar(255) DEFAULT NULL,
  `is_tds_applicable` enum('0','1') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL DEFAULT '0',
  `voucher_amount_per_tds` double NOT NULL DEFAULT '0',
  `voucher_tds_applicable_rate` varchar(100) DEFAULT NULL,
  `voucher_tds` double NOT NULL DEFAULT '0',
  `voucher_bank_date` varchar(100) DEFAULT NULL,
  `voucher_bank_reco_date` date DEFAULT NULL,
  `invoice_id` int NOT NULL DEFAULT '0',
  `invoice_type` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `voucher_entry_date` datetime DEFAULT NULL,
  `voucher_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  KEY `branch_id` (`branch_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `party_id` (`party_id`),
  KEY `bank_from_id` (`bank_from_id`),
  KEY `bank_to_id` (`bank_to_id`),
  KEY `tds_on_id` (`tds_on_id`),
  KEY `nature_of_payment_id` (`nature_of_payment_id`),
  KEY `debit_party_id` (`from_party_id`),
  KEY `credit_prty_id` (`to_party_id`),
  KEY `status_id` (`status_id`),
  KEY `invoice_id` (`invoice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_voucher`
--

LOCK TABLES `erp_voucher` WRITE;
/*!40000 ALTER TABLE `erp_voucher` DISABLE KEYS */;
INSERT INTO `erp_voucher` VALUES (1,4,1,1,1,0,0,0,0,0,0,155,83,'payment','1','','2023-03-30','netbanking','','','2023-03-30',700,'','0','','0',0,'',0,NULL,NULL,0,NULL,'1','2023-03-30 05:20:04','2023-03-30 05:20:50'),(2,4,1,1,1,0,0,0,0,0,0,83,22,'journal','1',NULL,'2023-03-30','none',NULL,NULL,NULL,56,NULL,'0',NULL,'0',0,NULL,0,NULL,NULL,1,'voucher-payment','0','2023-03-30 05:20:04','2023-03-30 05:20:04'),(3,4,1,1,2,0,0,0,0,0,0,94,155,'receipt','1','','2023-03-31','netbanking','','','2023-03-31',60000,'','0','','0',0,'',0,NULL,NULL,0,NULL,'0','2023-03-31 06:00:01','2023-03-31 06:00:01'),(4,4,1,1,2,0,0,0,0,0,0,94,22,'journal','1',NULL,'2023-03-31','none',NULL,NULL,NULL,504,NULL,'0',NULL,'0',0,NULL,0,NULL,NULL,3,'voucher-receipt','0','2023-03-31 06:00:02','2023-03-31 06:00:02');
/*!40000 ALTER TABLE `erp_voucher` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_voucher_child`
--

DROP TABLE IF EXISTS `erp_voucher_child`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_voucher_child` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `company_id` int NOT NULL DEFAULT '0',
  `year_id` int NOT NULL DEFAULT '0',
  `branch_id` int NOT NULL DEFAULT '0',
  `voucher_id` int NOT NULL DEFAULT '0',
  `tax_invoice_id` int NOT NULL DEFAULT '0',
  `voucher_child_from_invoice_type` varchar(100) DEFAULT NULL,
  `voucher_child_invoice_type` varchar(100) DEFAULT NULL,
  `voucher_child_from_invoice_no` double NOT NULL DEFAULT '0',
  `voucher_child_invoice_no` double NOT NULL DEFAULT '0',
  `voucher_child_from_invoice_date` varchar(100) DEFAULT NULL,
  `voucher_child_invoice_date` date DEFAULT NULL,
  `voucher_child_invoice_amount` double NOT NULL DEFAULT '0',
  `voucher_child_invoice_tds` double NOT NULL DEFAULT '0',
  `voucher_child_received_amount` double NOT NULL DEFAULT '0',
  `voucher_child_disc_per` double NOT NULL DEFAULT '0',
  `voucher_child_disc_amt` double NOT NULL DEFAULT '0',
  `voucher_child_from_balance` double NOT NULL DEFAULT '0',
  `voucher_child_balance` double NOT NULL DEFAULT '0',
  `voucher_child_tds_per` double NOT NULL DEFAULT '0',
  `voucher_child_tds_amt` double NOT NULL DEFAULT '0',
  `is_settlement` double NOT NULL DEFAULT '0',
  `is_delete_status` enum('0','1') NOT NULL DEFAULT '0',
  `voucher_child_entry_date` datetime DEFAULT NULL,
  `voucher_child_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `vouche_id` (`voucher_id`),
  KEY `user_id` (`user_id`),
  KEY `sale_id` (`tax_invoice_id`),
  KEY `company_id` (`company_id`),
  KEY `year_id` (`year_id`),
  KEY `branch_id` (`branch_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_voucher_child`
--

LOCK TABLES `erp_voucher_child` WRITE;
/*!40000 ALTER TABLE `erp_voucher_child` DISABLE KEYS */;
INSERT INTO `erp_voucher_child` VALUES (1,4,0,0,0,1,1,'voucher','purchase',0,1,NULL,'2023-03-30',756,0,0,7.41,56,0,700,0,0,0,'1','2023-03-30 05:20:04','2023-03-30 05:20:50'),(2,4,0,0,0,3,1,'voucher','sale',0,1,NULL,'2023-03-31',60504,0,0,0.83,504,0,60000,0,0,0,'0','2023-03-31 06:00:02','2023-03-31 06:00:02');
/*!40000 ALTER TABLE `erp_voucher_child` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `erp_year`
--

DROP TABLE IF EXISTS `erp_year`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `erp_year` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int NOT NULL DEFAULT '0',
  `year_name` varchar(100) DEFAULT NULL,
  `is_default` enum('0','1') NOT NULL DEFAULT '0',
  `year_entery_date` datetime DEFAULT NULL,
  `year_update_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `erp_year`
--

LOCK TABLES `erp_year` WRITE;
/*!40000 ALTER TABLE `erp_year` DISABLE KEYS */;
INSERT INTO `erp_year` VALUES (1,4,'2021-2022','0','2022-11-02 10:58:28','2022-11-02 10:58:28'),(2,4,'2022-2023','1','2022-11-02 10:58:28','2022-11-02 10:58:28'),(3,4,'2023-2024','0','2023-04-03 06:34:23','2023-04-03 06:34:23'),(4,0,'2024-2025','0','2023-04-03 06:34:23','2023-04-03 06:34:23');
/*!40000 ALTER TABLE `erp_year` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-04-04 10:35:49