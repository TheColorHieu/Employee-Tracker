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
        name: "rawlist",
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
    switch (answer.action){
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
    case "Add a role":
        addRole();
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
//next we will be adding our functions to help send and retrieve all departments in the sql 
//this function will  help us retrieve data from our seeds file and see all departments
//this first part will allow us to view information
function viewAlllDepartments() {
    const query =" SELECT * FROM departments";
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.table(res);
        start();
    });
} 

//our next function will allow us to see all roles 
function viewAllRoles() {
    const query = "SELECT * FROM roles";
    connection.query(query, (err, res) => {
        if(err) throw err;
        console.table(res);
        start();
    });
}

//this next one will allow us to view all employees
function viewAllEmployees() {
    let query = `SELECT first_name, last_name, role.title FROM employee 
    INNER JOIN role ON role.id=employee.rode_id`;
    connection.query(query, (err, res) => {
        if(err) throw err;
        console.table(res);
        start();
    });
}

//these next functions will allow us to add more information 
function addDepartment() {
inquirer
.prompt({
    type: "input",
    name: "departmentNfame",
    message: "Enter the name of the department:",
})
.then((answer) => {
    const query = "INSERT INTO departments (department_name) VALUES (?)";
    connection.query(query, answer.departmentName, (err, res) =>{
        if(err) throw err;
        console.log("Department added successfully!");
        start();
    });
});
}

function addRole() {
    const queryDepartments = " SELECT department_name FROM departments";
    connection.query(queryDepartments, (err,departments) => {
        if (err) throw err;
        inquirer
        .prompt([
        {
            type: "input",
            name: "salary",
            message: "Enter the role title: ",
        },
        {
            type: "input",
            name: "salary",
            message: "Enter the salary for the role: ",
        },
        {
            type: "list",
            name: "departmentName",
            message: "Select the department for the role: ",
            choices: departments.map((d) => d.department_name),
        },
        ]).then((answer) => {
            const query = "INSERT INTO roles (title,salary, department_name) VALUES (?,?,?)";
            const values =[answer.title, answer.salary, answer.departmentName];
            connection.query(query, values, (err,res) => {
                if (err) throw err;
                console.log("Role added successfully!");
                start();
            });
        });
    });
}
function addEmployee() {
    const queryRoles =" SELECT id, title FROM roles";
    connection.query(queryRoles, (err, roles) => {
        if (err) throw err;
        inquirer
        .prompt([
            {
                type: "list",
                name: "roleId",
                message: "Select the role for the employee: ",
                choices: roles.map((r) => ({ name: r.title, value: r.id})),
            },
            {
                type: "list",
                name: "managerId",
                message: "Select the manager for the employee:",
                choices: managers.map((m) => ({ name: m.name, value: m.id })),
            },
            {
                type: "input",
                name: "firstName",
                message: "Enter the employee's first name:",
            },
            {
                type: "input",
                name: "lastName",
                message: "Enter the employee's last name:",
            },
        ]).then((answer) => {
            const query = "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";
            const values = [answer.firstName, answer.lastName, answer.roleId, answer.managerId];
            connection.query(query, values, (err,res) => {
                if (err) throw err;
                console.log("Employee added successfully!");
                start();
            });
        });
    
    });
}