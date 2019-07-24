/**
 * Write a program Calendar.js that takes the month and year as command-line arguments and prints the Calendar of the month.
 *  Store the Calendar in an 2D Array, the first dimension the week of the month and the second dimension stores the day of the week
 */
var dateNow=new Date();
var month=process.argv[3];
var year=process.argv[2];
let i=1;
var count;
let day=new Date(year,month-1,1).getDay();
let noOfdays=new Date(year,month,0).getDate();
var dateNum=[];
var date=[];
var dayName=["SUN","MON","TUE","WED","THUR","FRI","SAT"];        
console.log(dayName)
let j=0;
while(j<day)
       {
        date.push(' '+' '+' '); 
        j+=1;     
       }
       
while(i<=noOfdays)
{
    while(j<7)
    {   
        if(i<10) date.push(i+'  ');
        else
        date.push(i+' ');
        j+=1
        i+=1;
    }
    dateNum.push(date);
    date=[];
    j=0;
}
console.log(dateNum);

