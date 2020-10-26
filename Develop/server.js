//Require inquirer and sql
var inquirer = require("inquirer");
const mysql = require("mysql");

//Create a connection
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: ""
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
  });

//Create 'home' page where the user can make a choice between
//View departments, roles, employees
//Adding departments, roles, employees
//Update employee rolls

//Use a switch case to start the function dependant on what the user chose

//Functions run by the switch case
//Prompts in functions to get info
function viewEmployees() {

}

function viewEmpByDepart() {

}

function viewEmpByRole() {
    
}

function addEmployee() {
    
}

function addEmpByDepart() {
    
}

function addEmpByRole() {
    
}

function updateEmpRoles() {
    
}