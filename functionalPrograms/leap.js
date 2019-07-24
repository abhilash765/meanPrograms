function leapYear(year)
{
    return (year%100===0)?(year%400===0):(year%4===0);
}
var y=require('readline-sync')
var year=y.question("Enter the year to check")
if(leapYear(year)===true)
{
    console.log(year+ "  is leap year");
}
else
{
    console.log(year+"  is not leap year");
}