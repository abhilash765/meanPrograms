var input=require("readline-sync")
var newLink=require('./utility').link2
let readNum=require('./utility').readfile
var link=new newLink()
var srt=[];
let intArr=[];
intArr=readfile().toString().split(' ');
console.log(intArr)
intArr.forEach(element => {
    link.insertNum(element);
    
});
var key=input.question("Enter a number to seach")
link.searchNum(key);
link.insertNum();
link.store();