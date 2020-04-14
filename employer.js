const mysql = require ("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

//connect to the database 
const connection = mysql.createConnection({

    host: "localhost",

    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "Nodi92179",
    database: "employee_DB"

});

connection.connect(function(err){

if(err) throw err;
console.log("connected as id " + connection.threadId + "\n");
  start(); 

});



