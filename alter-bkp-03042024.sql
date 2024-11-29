
-- database group by qury allow permission --
SET GLOBAL sql_mode=(SELECT REPLACE(@@sql_mode,'ONLY_FULL_GROUP_BY',''));


COLLATE utf8_unicode_ci
-- for show database collation structure
SELECT @@character_set_database, @@collation_database;

-- for select database collations --
SELECT TABLE_CATALOG, TABLE_SCHEMA, TABLE_NAME, COLUMN_NAME, COLLATION_NAME FROM INFORMATION_SCHEMA.COLUMNS;

-- for database change collation --
alter table <some_table> convert to character set utf8mb4 collate utf8mb4_0900_ai_ci;


utf8mb4
utf8mb4_0900_ai_ci

-- 05-04-23 --
ALTER TABLE `erp_voucher_child` ADD `party_id` INT NOT NULL DEFAULT '0' AFTER `branch_id`, ADD INDEX (`party_id`);
DROP PROCEDURE `create_settelement`;

-- 07-04-23 --
DROP PROCEDURE `create_voucher_child`;


-- 17-04-23 --
DROP PROCEDURE `create_default_voucher`;


-- 21-04-23 --
update_transporter;
get_party_and_quality_last_rate_fold_data


-- 25-04-23 --
DROP PROCEDURE `get_ledger_data`;

-- 26-04-23 --
ALTER TABLE `erp_sale_tax_invoice` ADD `is_direct_created` ENUM('0','1') NOT NULL DEFAULT '0' AFTER `sale_tax_invoice_image`;
DROP PROCEDURE `create_sale_tax_invoice`;

-- 28-04-23 --
ALTER TABLE `erp_sale_tax_invoice` ADD `sale_tax_invoice_eway_bill_no` VARCHAR(100) NULL DEFAULT NULL AFTER `sale_id`, ADD `sale_tax_invoice_eway_bill_date` DATE NULL DEFAULT NULL AFTER `sale_tax_invoice_eway_bill_no`;
ALTER TABLE `erp_sale_tax_invoice` ADD `sale_tax_invoice_lr_no` VARCHAR(100) NULL DEFAULT NULL AFTER `sale_tax_invoice_lf_no`;

--03-05-23 --
ALTER TABLE `erp_user` ADD `company_id` INT NOT NULL DEFAULT '0' AFTER `user_name`, ADD `branch_id` INT NOT NULL DEFAULT '0' AFTER `company_id`;
ALTER TABLE `erp_user` ADD `year_id` INT NOT NULL DEFAULT '0' AFTER `branch_id`;

-- 04-05-23 --
DROP PROCEDURE `get_gstr2_report_data`;

-- 05-05-23 --
DROP PROCEDURE `get_mill_tax_invoice_details`;
DROP PROCEDURE `get_jober_invoice_details`;
DROP PROCEDURE `get_sale_tax_invoice_details`;

-- 08-05-23 --
DROP PROCEDURE `get_sale_return_details`;
DROP PROCEDURE `get_gst_data`;

-- 09-05-23 --
DROP PROCEDURE `selected_year_company_data`;
DROP PROCEDURE `login_year_data`;
DROP PROCEDURE `selected_year_company_branch_data`;
ALTER TABLE `erp_user` CHANGE `user_position` `user_position` ENUM('administrator','admin','subadmin','vendor','customer','manager','client','student','user','subscriber','executive','staff') NOT NULL DEFAULT 'staff';

-- 10-05-23 --
UPDATE `erp_user` SET `user_position` = 'staff' WHERE `erp_user`.`id` = 3;
DROP PROCEDURE `get_gstr3b_data`;

-- 11-05-23 --
DROP PROCEDURE `get_all_party_broker_dropdown`;
DROP PROCEDURE `get_all_godown_dropdown`;
DROP PROCEDURE `get_all_material_dropdown`;
DROP PROCEDURE `get_all_brand_dropdown`;
DROP PROCEDURE `get_all_quality_dropdown`;

-- 31-05-23 -- 
ALTER TABLE `erp_user` ADD `company_id` INT NOT NULL DEFAULT '0' AFTER `user_name`, ADD INDEX (`company_id`);
INSERT INTO `erp_user_year` (`id`, `user_id`, `year_id`) VALUES (2, 3, 1);
INSERT INTO `erp_company_user_relation` (`id`, `user_id`, `company_id `) VALUES (3, 3, 1);
get_ledger_phase2_data


--01-06-23 -- 
DROP PROCEDURE `get_party_and_company_details`;

-- 02-06-23 --
DROP PROCEDURE `get_ledger_phase2_data`;
ALTER TABLE `erp_sale_tax_invoice` ADD `sale_tax_invoice_credit_days` VARCHAR(100) NOT NULL DEFAULT '0' AFTER `order_status`, ADD `sale_tax_invoice_payment_date` VARCHAR(100) NULL DEFAULT NULL AFTER `sale_tax_invoice_credit_days`;
DROP PROCEDURE `create_sale_tax_invoice`;

-- 07-06-23 --
ALTER TABLE `erp_purchase_tax_invoice` ADD `purchase_tax_invoice_credit_days` INT NOT NULL DEFAULT '0' AFTER `purchase_tax_invoice_image`, ADD `purchase_tax_invoice_payment_date` DATE NULL DEFAULT NULL AFTER `purchase_tax_invoice_credit_days`;
ALTER TABLE `erp_purchase_tax_invoice` CHANGE `purchase_tax_invoice_credit_days` `purchase_tax_invoice_credit_days` DOUBLE NOT NULL DEFAULT '0';

-- 12-06-23 --
DROP PROCEDURE `get_party_broker_details`;
get_party_tds_data

-- BHUSHAN BORSE
-- 06-07-23 --
DROP PROCEDURE `get_journal_purchase_details`;
DROP PROCEDURE `get_purchase_tax_invoice_details`;
DROP PROCEDURE `get_purchase_return_details`;
DROP PROCEDURE `get_mill_tax_invoice_details`;
DROP PROCEDURE `get_journal_sale_details`;
DROP PROCEDURE `get_sale_tax_invoice_details`;
DROP PROCEDURE `get_jober_invoice_details`;
DROP PROCEDURE `get_profit_and_loss_data`;

-- 10-07-23 --
ALTER TABLE `erp_party` CHANGE `opening_balance_type` `opening_balance_type` ENUM('dr','cr','none') CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT 'dr';
UPDATE `erp_party` SET `opening_balance_type` = 'dr' WHERE opening_balance_type IN('none',null);
update erp_party set opening_balance_type='dr' WHERE opening_balance_type IS NULL;
DROP PROCEDURE `get_trial_balance_phase1_data`;
DROP PROCEDURE `get_trial_balance_phase2_data`;
DROP PROCEDURE `get_trial_balance_phase3_data`;
DROP PROCEDURE `get_trial_balance_phase4_data`;
DROP PROCEDURE `get_trial_balance_phase4_data`;
DROP PROCEDURE `get_ledger_data`;
DROP PROCEDURE `get_profit_and_loss_data`;

-- 13-07-2023 --
DROP PROCEDURE `get_balance_sheet_phase1_data`;
DROP PROCEDURE `get_balance_sheet_phase2_data`;
DROP PROCEDURE `get_balance_sheet_phase3_data`;

-- 14-07-2023 --
DROP PROCEDURE `get_balance_sheet_phase1_data`;
DROP PROCEDURE `get_balance_sheet_phase2_data`;
DROP PROCEDURE `get_balance_sheet_phase3_data`;

-- 19-07-2023 --
ALTER TABLE `erp_user` ADD `user_token` VARCHAR(500) NULL AFTER `user_position`;
ALTER TABLE `erp_sale_jober_issue` ADD `sale_jober_issue_meter_updated_data` TEXT NULL AFTER `sale_jober_issue_meter_data`;



-- 21-08-2023 --
DROP PROCEDURE `get_all_quality_dropdown`;

-- 24-08-2023 --
DROP PROCEDURE `get_party_and_company_details`;
DROP PROCEDURE `get_profit_and_loss_data`;
UPDATE `erp_company` SET `company_gst_number` = '24AAFPB8324F2Z5' WHERE `erp_company`.`id` = 1;