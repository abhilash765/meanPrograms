/* Utility class for adress book management.To create functions like adding contact,
Editing contactand delting contact  */
let read=require('readline-sync');
let fs=require('fs')
let js=fs.readFileSync("D:\meanPrograms\oopPrograms\addressBookProblem\contacts.json");
let json=JSON.parse(js)
class addressBook{

}
// Prototype to add contacts to json file
addressBook.prototype.addContact=()=>
{
try
{
let name=read.question("Enter Name of Person::");
let address=read.question("Enter Address of Person::");
let city=read.question("City of Person::");
let state=read.question("Enter state of person::");
let pincode=read.questionInt("Enter Pincode::");
// Creating dictionary for contact.json
let insert={
name:name,
address:address,
city:city,
state:state,
pincode:pincode
}
// Pushing insert variable to the json file
json.push(insert);
fs.writeFileSync("D:\meanPrograms\oopPrograms\addressBookProblem\contacts.json",json)
JSON.stringify(json)
}catch(e){console.log(e)}
}
// Function Prototype for Editing your contacts
addressBook.prototype.editContact=()=>
{ 
    // try catch method
try{
let search=read.question("Enter search to find the person::");
let flag=false;
json.forEach(element => {
let keys=Object.keys(element);
keys.forEach(keyele=>
{
    // Searching the contact
if(element[keyele]===search)
{ flag=true;
let change=read.question("what do you want to edit?:");
let value=read.question(" Changes :")
if(change==="pincode")
element[change]=parseInt(value);
else
element[change]=value;
}

});
});
if(flag==false) console.log("KEY NOT FOUND");
else 
{
fs.writeFileSync("D:\meanPrograms\oopPrograms\addressBookProblem\contacts.json",json)
JSON.stringify(json)
}
}catch(e){
console.log(e);
}
}
// Function Prototype for deleting contacts from json file
addressBook.prototype.deleteContact=()=>
{
try{
let search=read.question("Enter Details to delete Person::");
//Parsing the search so that when you type numbers also we can search the keyword
if(!isNaN(search)) search=parseInt(search);
// writing to the json file
let js=fs.readFileSync("D:\meanPrograms\oopPrograms\addressBookProblem\contacts.json");
let json=JSON.parse(js)
let flag=false;
json.forEach(element => {
// Creating object for keys to get key pairs
let keys=Object.keys(element);
keys.forEach(keyele=>
{
if(element[keyele]===search)
{ 
flag=true;
json=json.filter(ele=>ele[keyele]!=search);
}
});
});
if(flag==false) console.log("Key not found!!Try with different one");
else 
{
    fs.writeFileSync("D:\meanPrograms\oopPrograms\addressBookProblem\contacts.json",json)
    JSON.stringify(json)
}
}catch(e)
{
console.log(e);
}
}

addressBook.prototype.searchContact=()=>
{

try{
let search=read.question("Enter contact to search :");
//Parsing the search so that when you type numbers also we can search the keyword
if(!isNaN(search)) search=parseInt(search);
// reading json file
let js=fs.readFileSync("D:\meanPrograms\oopPrograms\addressBookProblem\contacts.json");
let json=JSON.parse(js)
let flag=false;
json.forEach(element => {
let keys=Object.keys(element);
keys.forEach(keyele=>
{
if(element[keyele]===search)
{ 
flag=true;
console.log(element);
}
});
});
if(flag==false) console.log("NO match for search!!!Try Some other");
}
catch(e)
{
    console.log(e);
}
}