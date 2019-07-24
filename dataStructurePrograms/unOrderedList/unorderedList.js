/*UNORDERED LIST
 Read the Text from a file, split it into words and arrange it as Linked List.
 Take a user input to search a Word in the List. 
 If the Word is not found then add it to the list, and if it found then remove the word from the List.
 In the end save the list into a file
 Read from file the list of Words and take user input to search a Text
 Create a Unordered Linked List. The Basic Building Block is the Node Object.
 Each node object must hold at least two pieces of information. One ref to the data field and  second the ref to the next node object.
 The List of Words to a File.*/

// variable to read from terminal
let inp = require('readline-sync');
//link to call the utility file
let mylink = require('./utility').mylink;
//variable to reaf the text file
let read = require('./utility').readfile;
let str;
//initializing array to store words from the file
let strn = [];
//converting to string 
str = readfile().toString();
//spliting the sentence to words and store it in a array
strn = str.split(" ");
console.log(strn);
//creating an object to invoke the link of utility file
pro = new mylink();
//for each loop to insert element one by one to array
strn.forEach(element => {
    pro.insertElement(element);
});
console.clear();
//reading key element from the user
key = inp.question("Enter the element to be searched:")
pro.search(key);
pro.store();
//pro.display();