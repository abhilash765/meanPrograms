/**
 * Palindrome-Checker
 A palindrome is a string that reads the same forward and backward, for example, radar, toot, and madam.
 We would like to construct an algorithm to input a string of characters and check whether it is a palindrome.
 Take a String as an Input 
 The solution to this problem will use a deque to store the characters of the string.
 We will process the string from left to right and add each character to the rear of the deque. 
 True or False to Show if the String is Palindrome or not.
 */
var read = require("readline-sync");
var newlink = require('./utility').qlink
var lnk = new newlink();
var str = read.question("Enter the string:")
var c = [];
check = [];
c = str.split('');
c.forEach(element => {
    check = lnk.enQueue(element);
    console.log(lnk.print());
});
console.log(lnk.print());
c.forEach(check => {
    check = lnk.deQueue();
    console.log(lnk.print());
});

if (lnk.check() == true) {
    console.log("String is palindrome");
} else
    console.log("String is not palindrome")