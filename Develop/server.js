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
                {
                    name: "View Employees",
                    value: "View Employees"
                },
                {
                    name: "View Departments",
                    value: "View Departments"
                },
                {
                    name: "View Roles",
                    value: "View Roles"
                },
                {
                    name: "Add an Employee",
                    value: "Add an Employee"
                },
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
                case "View Employees":
                    return viewEmployees();
                case "View Departments":
                    return viewDepartments();
                case "View Roles":
                    return viewRoles();
                case "Add an Employee":
                    return addEmployee();
                case "Add a Department":
                    return addDepartment();
                case "Add a Role":
                    return addRole();
                // case "Update Employee Roles":
                //     return updateEmpRoles();
            };
        })
}

function viewEmployees() {
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
    connection.query("Select * from  employee", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end;
        loadMainPage();
    });
}

function viewDepartments() {
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
    connection.query("Select * from  department", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end;
        loadMainPage();
    });

};

function viewRoles() {
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
    connection.query("Select * from  role", function (err, res) {
        if (err) throw err;
        console.log(res);
        connection.end;
        loadMainPage();
    });

};

function addEmployee() {
    //Create prompts asking for first and last names, role id, and manager id --number of the employee's manager
    inquirer.prompt([
        {
            name: "firstName",
            message: "What is the employee's first name?"
        },
        {
            name: "lastName",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "roleId",
            message: "What is the employee's role?",
            choices: [
                {
                    //ADD LIST OF POSSIBLE ROLES FROM DB
                }
            ]
        },
        {
            type: "list",
            name: "managerId",
            message: "Who is the employee's direct manager?",
            choices: [
                {
                    //ADD LIST OF POSSIBLE managers FROM DB
                }
            ]
        }

    ]).then(function (firstName, lastName, roleId, managerId) {

        let newEmployee = [
            { firstName: firstName },
            { lastName: lastName },
            { roleId: roleId },
            { managerId: managerId }
        ]
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

        connection.query("INSERT INTO employee SET ?", newEmployee);
        //Show response
        console.log(newEmployee, "was added to Employees.")
        connection.end();
        loadMainPage();
    });

};

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

    ]).then(function (roleTitle, salary, departmentId) {

        let newRole = [
            { roleTitle: roleTitle },
            { salary: salary },
            { departmentId: departmentId }
        ]
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

        connection.query("INSERT INTO role SET ?", newRole);
        //Show response
        console.log(newRole, "was added to Departments.")
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