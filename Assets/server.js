//our variables 
const mysql = require("mysql2");
const inquirer = require("inquirer");

//here we are creating a MySQL database 
const connection = mysql.createConnection({
    host: "localhost",
    //our port 
    port: 3306,
    //username
    user: "",
    password: "",
    database: ""
});
//this is how we are connecting mysql database 
connection.connect((err) => {
    if(err) throw err;
    console.log("you are now connected to the database");
    start();
});

