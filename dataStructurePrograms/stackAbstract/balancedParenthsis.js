
/**
 *Simple Balanced Parentheses
*Take an Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) where parentheses are used to order the performance of operations.
 Ensure parentheses must appear in a balanced fashion.
* Read in Arithmetic Expression such as (5+6)∗(7+8)/(4+3)(5+6)∗(7+8)/(4+3) 
* Write a Stack Class to push open parenthesis “(“ and pop closed parenthesis “)”.
 At the End of the Expression if the Stack is Empty then the Arithmetic Expression is Balanced. 
 Stack Class Methods are Stack(), push(), pop(), peak(), isEmpty(), size()
* True or False to Show Arithmetic Expression is balanced or not.
 */
var r = require('readline-sync')
let mylink = require('./utility').mylink1;
var inp = [];
inp = r.question("Enter the expression");
var str = [];
str = inp.split("");
console.log(str);
pros = new mylink();
str.forEach(element => {
    if (element == '(') {
        pros.push(element);

    } else {
        if (element === ')') {
            pros.pop(element)
        }
    }
});
console.log((pros.printStack()).length);
if (pros.printStack().length == 1) {
    console.log("The expression is  balanced");

} else {
    console.log("The expression is not balanced");
}