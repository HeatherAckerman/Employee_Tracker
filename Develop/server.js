//Require inquirer and sql
var inquirer = require("inquirer");
const mysql = require("mysql");

//Create a connection
const connection = mysql.createConnection({
    host: "Connection",
    user: "root",
    password: "root",
    database: "employeeTracker"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
});

//Create 'home' page where the user can make a choice between
//View departments, roles, employees
//Adding departments, roles, employees
//Update employee rolls
function loadMainPage() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "choices",
                message: "What would you like to do?",
                choices: [
                    {
                        name: "View Employees",
                        value: "View Employees"
                    },
                    {
                        name: "View Employees by Department",
                        value: "View Employees by Department"
                    },
                    {
                        name: "View Employees by Role",
                        value: "View Employees by Role"
                    },
                    {
                        name: "Add an Employee",
                        value: "Add an Employee"
                    },
                    {
                        name: "Add an Employee by Department",
                        value: "Add an Employee by Department"
                    },
                    {
                        name: "Add an Employee by Role",
                        value: "Add an Employee by Role"
                    },
                    {
                        name: "Update Employee Roles",
                        value: "Update Employee Roles"
                    }
                ]
            }

        ])

}

//Use a switch case to start the function dependant on what the user chose
// switch(choices) {
//     case "View Employees":
//         return "viewEmployees";}
//     case "View Employees by Department":
//         return viewEmpByDepart();
//     case "View Employees by Role":
//         return viewEmpByRole();
//     case "Add an Employee":
//         return addEmployee();
//     case "Add an Employee by Department":
//         return addEmpByDepart();
//     case "Add an Employee by Role":
//         return addEmpByRole();
//     case "Update Employee Roles":
//         return updateEmpRoles();
// };

// //Functions run by the switch case
// //Prompts in functions to get info
// function viewEmployees() {

// };

// function viewEmpByDepart() {

// };

// function viewEmpByRole() {

// };

// function addEmployee() {

// };

// function addEmpByDepart() {

// };

// function addEmpByRole() {

// };

// function updateEmpRoles() {

// };

loadMainPage();