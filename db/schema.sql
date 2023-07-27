DROP DATABASE IF EXISTS  employee_db;
CREATE DATABASE IF NOT EXISTS employee_db;

USE employee_db;

-- here we will be creating our department table 
CREATE TABLE departments (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
     department_name VARCHAR(255) NOT NULL
);

-- here we will be creating the table for roles 
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL(10,2),
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE SET NULL);

-- here we are creating the table for employees
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NULL,
    manager_id INT NULL
);

 