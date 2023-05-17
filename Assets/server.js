//our variables 
const mysql = require("mysql");
const inquirer = require("inquirer");

//our function 
const connection = mysql.createConnection({
    host: "localhost",
    //our port 
    port: 3306,
    //username
    user: "root",
    password: "bootcamp1234",
    database: "employeeDB"
});