/********************************************************************************************************************
* @Execution : default node : cmd> inventoryManagement.js
*
* @Purpose : Create an inventory manager to manage all functions in the inventory
*
* @description : Program to Create InventoryManager to manage the Inventory. 
The Inventory Manager will use InventoryFactory to create Inventory Object from JSON. 
The InventoryManager will call each Inventory Object in its list to calculate the Inventory Price and then call 
the Inventory Object to return the JSON String. 
* 
* @overview :Create the JSON from Inventory Object and output the JSON String.
* @author : Abhilash <aabhilash765@gmail.com>
* @version : 1.0
* @since : 27-July-2019
*
*******************************************************************************************************************/
let read = require('readline-sync');
  let fs = require('fs');
  let readJSON = () => {
  try {
  jsonCon = JSON.parse(fs.readFileSync('D://meanPrograms//oopPrograms//inventoryManagement'));
  if (isEmptyObject(jsonCon))
  throw "JSON empty";
  
  return jsonCon;
  } catch (e) {
  console.log(e)
  }
  }
  let isEmptyObject = (obj) => {
  return !Object.keys(obj).length;
  }