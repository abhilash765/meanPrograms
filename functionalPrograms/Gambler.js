var c=require('readline-sync')
var stake=c.question("Enter the cash amount")
var goal=c.question("Enter the Goal amount")
var num=c.question("Enter number of times you wants to play")
var wins=0;
var bets=0;
for (var t = 0; t < num; t++) 
{
    var cash = stake;
    while (cash > 0 && cash < goal) 
    {
        bets++;
        if (Math.random() < 0.5) 
        cash++;     
        else
         cash--;     
    }
    if (cash == goal) 
    wins++;             
}
console.log(wins + " wins of " + num);
console.log("Percent of games won = " + 100.0 * wins / num+"%");
console.log("Average bets           = " + 1.0 * bets / num);
