/********************************************************************************************************************
* @Execution : default node : cmd> dataManagement.js
*
* @Purpose : Use of json in javascript
* 
* @description : Get JSON Object in Java or NSDictionary in iOS. Create Inventory Object from JSON.
                Calculate the value for every Inventory
* 
* @overview :JSON Inventory Data Management of Rice, Pulses and Wheats 
* @author : Abhilash <aabhilash765@gmail.com>
* @version : 1.0
* @since : 26-July-2019
*
*******************************************************************************************************************/
// Accessing files in Node is done with the native module fs
const fs = require('fs');
// Reading the file synchronously
var data = fs.readFileSync("D://meanPrograms//oopPrograms//inventoryDataManagement//inventoryFile.json");
try {
    // Parsing the JSON string into a JavaScript object
    let inventory = JSON.parse(data);
    calculate = () => {
        // Calculating value of Rice from json file
        inventory.forEach(element => {
            element.RICE.forEach(ele => {
                riceValue = ele.weight * ele.price;
            });
            // Calculating value of wheat from json file
            element.WHEAT.forEach(ele => {
                wheatValue = ele.weight * ele.price;
            });
            // Calculating value of pulses from json file
            element.PULSES.forEach(ele => {
                pulseValue = ele.weight * ele.price;
            });
        });
        // Displaying the values
        totalValue = riceValue + pulseValue + wheatValue;
        console.log("Rice   :", riceValue)
        console.log("Wheat   :", wheatValue)
        console.log("Pulses  :", pulseValue)
        console.log("TOTAL VALUE OF THE INVENTORY IS  :", totalValue);
    }
} catch (err) {
    console.log("Error passing data from json file");
}
calculate();