/********************************************************************************************************************
* @Execution : default node : cmd> stockReport.js
*
* @Purpose : Use of json in javascript
* 
* @description : Write a program to read in Stock Names, Number of Share, Share Price. 
Print a Stock Report with total value of each Stock and the total value of Stock.
* 
* @overview :Print the Stock Report.
* @author : Abhilash <aabhilash765@gmail.com>
* @version : 1.0
* @since : 26-July-2019
*
*******************************************************************************************************************/
// Accessing files in Node is done with the native module fs
const fs = require('fs');
// Reading the file synchronously
let read = require('readline-sync')
var data = fs.readFileSync("D://meanPrograms//oopPrograms//Stock Report//stockInventory.json");
let stockLink = require('./stockUtility').stockLink;
jsonCon = new stockLink();
let inventory = JSON.parse(data);
let choice=read.question("Enter a choice:")
jsonCon.print(choice);
let sName = read.question("Enter the stock name(Benz,BMW,Toyota):");
let nShare = read.questionInt("Enter the number of shares:");
let sPrice = read.questionInt("Enter the share Price: ");
jsonCon.listOfStocks();
console.log("Total sstock value of Benz :",jsonCon.calculateBenz());
console.log("total stock bvalue of BMW  :",jsonCon.calculateBmw());
console.log("Total stock value of Totyota :",jsonCon.calculateToyota());
console.log("Total Stock value is   :",jsonCon.calculateTotal());