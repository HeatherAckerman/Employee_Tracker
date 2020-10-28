const inquirer = require("inquirer");
const mysql = require("mysql");

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
            ]
        }
    ])
        .then(function (answer) {

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
            name: "roleId",
            message: "What is the employee's role id?"
        },
        {
            name: "managerId",
            message: "What is the employee's manager's id?",

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
        console.log(newEmployee, "was added to Employees.")
        connection.end();
        loadMainPage();
    });

};

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "id",
            message: "What numerical id would you like to assign the Department you are creating?"
        },
        {
            type: "input",
            name: "departmentName",
            message: "What is the name of the Department you would like to add?"
        }
    ])
        .then(function (id, departmentName) {
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
            let newDepartment = [
                {
                    id: id
                },
                {
                    departmentName: departmentName
                }
            ]

            connection.query("INSERT INTO department SET ?", newDepartment);
            console.log(newDepartment, "was added to Departments.")
            connection.end();
            loadMainPage();
        })
}

function addRole() {
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
            message: "What is the id of the department this role is a part of?"
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
        console.log(newRole, "was added to Departments.")
        connection.end();
        loadMainPage();
    });
}

loadMainPage();