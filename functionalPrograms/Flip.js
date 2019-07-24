var heads=0;
var tails=0;
var t=require('readline-sync')
var num=t.question("Enter the number of times to flip the coin:")
for(var i=0;i<num;i++)
{
if(Math.random()>0.5)
{
    console.log("Heads")
    heads++;
}else
{
    console.log("Tails")
    tails++
}
}
var hper=Math.floor((100*tails)/num);
var tper=100-hper;
console.log("Percentage of getting heads:"+hper+"%");
console.log("Percentage of getting tails:"+tper +"%");