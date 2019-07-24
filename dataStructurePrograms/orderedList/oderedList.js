/**
 * Ordered List
a.-> Read .a List of Numbers from a file and arrange it ascending Order in a Linked List. 
     Take user input for a number, if found then pop the number out of the list else insert the number in appropriate position
b.-> Read from file the list of Numbers and take user input for a new number
c.-> Create a Ordered Linked List having Numbers in ascending order. 
d.-> The List of Numbers to a File.
 */
var input=require("readline-sync")
var newLink=require('./utility').link2
let readNum=require('./utility').readfile
var link=new newLink()
var srt=[];
let intArr=[];
intArr=readfile().toString().split(' ');
console.log(intArr)
intArr.forEach(element => {
    link.insertNum(element);
    
});
var key=input.question("Enter a number to seach")
link.searchNum(key);
link.insertNum();
link.store();