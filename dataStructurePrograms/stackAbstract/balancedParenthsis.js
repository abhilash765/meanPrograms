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