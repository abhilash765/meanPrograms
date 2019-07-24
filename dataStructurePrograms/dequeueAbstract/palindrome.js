var read=require("readline-sync");
var newlink=require('./utility').qlink
var lnk=new newlink();
var str=read.question("Enter the string:")
var c=[];
check=[];
c=str.split('');
c.forEach(element => {
check=lnk.enQueue(element);
console.log(lnk.print());
});
console.log(lnk.print());
c.forEach(check=>{
check=lnk.deQueue();
console.log(lnk.print());
});

if(lnk.check()==true)
{
    console.log("String is palindrome");
}
else
console.log("String is not palindrome")