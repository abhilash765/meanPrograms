var read = require('readline-sync');
var link = require('./utilityQ').qlink;
var balance = 100000;
var persn=[];
let n = 5;
pro = new link();
for (let i = 0; i < n; i++) {
    var questn = read.question("Do you want to do Banking with US!!(Y or N):");
    if (questn == 'Y' || 'y') {
        console.log("Welcome to the Bank")
        console.log("Type W or D as your option!")
     persn = read.question("Are you here to Withdraw(W) or Deposit(D)");
        if (persn === 'W' || persn === 'w') {
            pro.enqueue(persn);
            var wdr = read.questionInt("Enter your amount :");
            alpersn = balance - wdr;
            pro.dequeue();
        } else
        if (persn === 'D' || persn === 'd') {
            pro.enqueue(persn);
            var dep = read.questionInt("Enter your ampount :");
            alpersn = dep + balance;
            pro.dequeue();
        }
    } else {
        if (questn == 'N' || 'n')
            process.exit();
    }
}
console.log("Tht total balance is :", alpersn);