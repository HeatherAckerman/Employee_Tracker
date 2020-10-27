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
//         return "viewEmployees";
//     case "View Departments":
//         return viewDepartments();
//     case "View Roles":
//         return viewRoles();
//     case "Add an Employee":
//         return addEmployee();
//     case "Add a Department":
//         return addDepartment();
//     case "Add a Role":
//         return addRole();
//     case "Update Employee Roles":
//         return updateEmpRoles();
// };

// function viewEmployees() {
// let employees = connection.query(
  
// )

//Show response

// };

// function viewDepartments() {
//Get list of choices

//Use promts to let user choose which dept they want to see

//Send the info to the db with a connection query

//Show response

// };

// function viewRoles() {

//Send the info to the db with a connection query getting role info

//Show response

// };

// function addEmployee() {
//Create prompts asking for first and last names, role id, and manager id --number of the employee's manager

//Send the info to the db with a connection query

//Show response

// };

// function addDepartment() {
// Prompt user for department info

//Send the info to the db with a connection query

//Show response

// };

// function addRole() {
//Prompts to get the role info --role name, salery, and department id

//Send the info to the db with a connection query

//Show response

// };

// function updateEmpRoles() {
//Figure out which employee they want to update

//Give the user all of the options to choose from 

//Send the info to the db with a connection query

//Show response

// };

loadMainPage();