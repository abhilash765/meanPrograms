var i=require('readline-sync')
var integer =i.question("Enter a number")
for(var i=2;i<=integer;i++)
{
    while(integer%i===0)
    {
        console.log(i);
        integer=integer/i;
        //break;
    }
}
