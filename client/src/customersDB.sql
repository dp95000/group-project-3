create database customersDB;
use customersDB;

<<<<<<< HEAD
<<<<<<< HEAD
CREATE TABLE customers (
   first_name VARCHAR(100) NULL,
=======
=======
>>>>>>> 0600e2f7b4504a98e31be8cb818c1559dd960c4c

CREATE TABLE customers
(
  first_name VARCHAR(100) NULL,

<<<<<<< HEAD
>>>>>>> 2e3acff3466654b25217229339eb120e8fedd304
=======
>>>>>>> 0600e2f7b4504a98e31be8cb818c1559dd960c4c
  last_name VARCHAR(100) NULL,
  business_name VARCHAR(100) NULL,
  bill_address VARCHAR(100) NULL,
  phone INT NULL,
  number_signs INT NULL,
  signs_rented INT NULL,
  contract_term INT NOT NULL,
  monthly_rent INT NULL,
  delinquent_account VARCHAR(100) NULL,
  past_due_payment INT NULL
<<<<<<< HEAD
<<<<<<< HEAD
  PRIMARY KEY (id)
=======


>>>>>>> 2e3acff3466654b25217229339eb120e8fedd304
=======


>>>>>>> 0600e2f7b4504a98e31be8cb818c1559dd960c4c
);