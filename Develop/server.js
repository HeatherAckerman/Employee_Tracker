//Require inquirer and sql
const inquirer = require("inquirer");
const mysql = require("mysql");

// newConnection()
//Create 'home' page where the user can make a choice between
//View departments, roles, employees
//Adding departments, roles, employees
//Update employee rolls
function loadMainPage() {


    inquirer.prompt([
        {
            type: "list",
            name: "userChoice",
            message: "What would you like to do?",
            choices: [
                // {
                //     name: "View Employees",
                //     value: "View Employees"
                // },
                // {
                //     name: "View Departments",
                //     value: "View Departments"
                // },
                // {
                //     name: "View Roles",
                //     value: "View Roles"
                // },
                // {
                //     name: "Add an Employee",
                //     value: "Add an Employee"
                // },
                {
                    name: "Add a Department",
                    value: "Add a Department"
                },
                {
                    name: "Add a Role",
                    value: "Add a Role"
                }
                // ,
                // {
                //     name: "Update Employee Roles",
                //     value: "Update Employee Roles"
                // }
            ]
        }
    ])
        .then(function (answer) {

            //Use a switch case to start the function dependant on what the user chose
            switch (answer.userChoice) {
                // case "View Employees":
                //     return viewEmployees();
                // case "View Departments":
                //     return viewDepartments();
                // case "View Roles":
                //     return viewRoles();
                // case "Add an Employee":
                //     return addEmployee();
                case "Add a Department":
                    return addDepartment();
                case "Add a Role":
                    return addRole();
                // case "Update Employee Roles":
                //     return updateEmpRoles();
            };
        })
}

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

// async function addEmployee() {
//     //Create prompts asking for first and last names, role id, and manager id --number of the employee's manager
//     let employee = await prompt([
//         {
//             name: firstName,
//             message: "What is the Employee's first name?"
//         },
//         {
//             name: lastName,
//             message: "What is the Employee's last name?"
//         }
//     ])
//     //Send the info to the db with a connection query

//     //Show response

// };

function addDepartment() {
    // Prompt user for department info
    inquirer.prompt([
        {
            type: "input",
            name: "departmentName",
            message: "What is the name of the Department you would like to add?"
        }
    ]).then(function (departmentName) {


        const connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "root",
            database: "employeeTracker"
        });

        connection.connect(function (err) {
            if (err) throw err;
            console.log("connected as id " + connection.threadId + "\n");

        });

        connection.query("INSERT INTO department SET ?", departmentName);
        // Show response
        console.log(departmentName, "was added to Departments.")
        connection.end();
        loadMainPage();
    })
}

function addRole() {
    //Prompts to get the role info --role name, salery, and department id
    inquirer.prompt([
        {
            name: "roleTitle",
            message: "What is the name of the role you would like to add?"
        },
        {
            name: "salary",
            message: "What salary does this role receive?"
        },
        {
            name: "departmentId",
            message: "What department is this role a part of?"
        }
    ]).then(function (roleTitle) {


        const connection = mysql.createConnection({
            host: "localhost",
            port: 3306,
            user: "root",
            password: "root",
            database: "employeeTracker"
        });

        connection.connect(function (err) {
            if (err) throw err;
            console.log("connected as id " + connection.threadId + "\n");

        });

        connection.query("INSERT INTO role SET ?", roleTitle);
        //Show response
        console.log(roleTitle, "was added to Departments.")
        connection.end();
        loadMainPage();
    });
}

// function updateEmpRoles() {
//Figure out which employee they want to update

//Give the user all of the options to choose from 

//Send the info to the db with a connection query

//Show response

// };

loadMainPage();