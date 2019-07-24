    var h=1;
    var n=require('readline-sync')
    var num=n.question("Enter the number");
    for(let i=2;i<=num;i++)
    {
        h+=1/i;
    }
    console.log(h);