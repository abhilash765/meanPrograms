 var name="HELLO <<username>> HOW ARE YOU DOING!!";
var s1=require('readLine-sync');
var s2=s1.question('Enter Your name(Must be more than 3Characters):');
var rep=name.replace("<<username>>",s2);
console.log(rep);
