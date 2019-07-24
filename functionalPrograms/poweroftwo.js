var expo=require('readline-sync')
var v=expo.question("Enter the exponent")
var power=1;
for(let i=0;i<=v;i++)
{
 power=Math.pow(2,i)
 console.log("2*" +i + "=" +power);
}
