function printPrime() 
{
    var i = 0;
    var j = 0;
    var c=0;
    var read=require('readline-sync')
    var limit=read.question("Enter the range value to print  : ")
    for (i = 1; i <= limit; i++) {
        c = 0;
        for (j = 1; j <= i; j++)
        {
            if (i % j == 0)
            {
                c++;
            }
        }
        if (c == 2) 
        {
            console.log(i)
        }
    }
}
printPrime()
