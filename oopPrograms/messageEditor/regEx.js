/********************************************************************************************************************
* @Execution : default node : cmd> regEx.js
*
* @Purpose : Use of Regular Expression in javascript
* 
* @description :Read in the following message: Hello <<name>>, We have your full name as <<full name>> in our system.
 Your contact number is 91-xxxxxxxxxx. Please,let us know in case of any clarification Thank you BridgeLabz 01/01/2016.
  Use Regex to replace name, full name, Mobile#, and Date with proper value.
* 
* @overview :Regular Expression Demonstration
* @author : Abhilash <aabhilash765@gmail.com>
* @version : 1.0
* @since : 26-July-2019
*
*******************************************************************************************************************/
// 
let read = require('readline-sync');
let firstName;
// Regex expression to validate the name
let regName = /^[a-zA-Z]+[a-zA-Z]+$/;
// Reading the message
let message = "Hello <<name>>, We have your full name as <<full name>> in our system. Your contact number is +91 <<number>>. Please,let us know in case of any clarification Thank you BridgeLabz <<date>>."
name = read.question("Enter your Full name:");
if (!regName) {
    console.log('Invalid name given!.');
    return;
} else {
    let fullName = regName.exec(name);
    // To take the first name
    let first = (/^[A-z]*/);
    firstName = first.exec(name);
}
// Regex expression for validating the mobile number
let regNum = /^\d{10}$/;
let number = read.questionInt("Enter your mobile number:");
if (!regNum) {
    console.log("Invalid Number!");
    return;
} else {
    number = regNum.exec(number);
}
// Regex expression to validate the Date
let regDate = /^\d{4}-\d{2}-\d{2}$/;
let today = new Date();
if (regDate) {
    // To get the current date,year and month
    let date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
}
// Replacing the message with user inputs
let str = message.replace("<<name>>", firstName[0]).replace("<<full name>>", name).replace("<<number>>", number).replace("<<date>>", date);
console.log(str);