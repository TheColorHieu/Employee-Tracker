//our variables 
const mysql = require("mysql2");
const inquirer = require("inquirer");

//here we are creating a MySQL database 
const connection = mysql.createConnection({
    host: "localhost",
    //our port 
    port: 3306,
    //username
    user: "root",
    password: "bootcamp1234",
    database: "employee_db"
});
//this is how we are connecting mysql database 
connection.connect((err) => {
    if(err) throw err;
    console.log("you are now connected to the database");
    start();
});

//here we will be starting our inquirer prompts 
function start() {
    inquirer
    .prompt({
        //we are using the list to have it display the information as a list
        type: "list",
        //the action  will store the users input 
        name: "action",
        message:"please select one of the following",
        //here we will have the questions that will be displayed to the user
        choices: [
            "View all departments",
            "View all roles",
            "View all employees",
            "Add a department",
            "Add an employee",
            "Update an employee role",
            "Exit",
        ],
    })

.then((answer) => {
    //here we will be using a switch case in order for the program to execexute certain codes 
    switch (answer.actijon){
    case "View all departments":
        viewAlllDepartments();
        break;
    case "View all roles":
        viewAllRoles();
        break;
    case "View all employees":
        viewAllEmployees();
        break;
    case "Add a department":
        addDepartment();
        break;
    case "Add an employee":
        addEmployee();
        break;
    case "Update an employee role":
        updateEmployeeRole();
        break;
    case "Exit":
        connection.end();
        console.log("out to lunch be back soon");
        break;
    }
});
}

