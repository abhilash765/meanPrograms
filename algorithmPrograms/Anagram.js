/*1.An Anagram Detection Example
a.Desc -> One string is an anagram of another if the second is simply a rearrangement of the first. For example, 'heart' and 'earth' are anagrams...
b.I/P -> Take 2 Strings as Input such abcd and dcba and Check for Anagrams
c.O/P -> The Two Strings are Anagram or not....*/

var input1="monk";
var input2="konm";
//Declaring first array
var arr1 =[];     
//Splitting first arrays using separator-spaces          
arr1=input1.split("");
//Declaring second array      
var arr2 =[];     
//Splitting second arrays using separator-spaces          
 arr2=input2.split("");     
 //first Array sorting
arr1.sort();
//Second Array sorting
arr2.sort();
var res=false;
//Comparing if the array length is equal for both the arrays
if(arr1.length==arr2.length)   
{
    //loop extends till the length of the array
    for(var i=0;i<arr1.length;i++)
    {
        //Comparing each characters in both arrays
        if(arr1[i]==arr2[i])
        res=true;
        else
        res= false;
    }
}
if(res)
//Printing if the character is an anagram or not
console.log("it is an Anagram");
else  
console.log(" it is not an anagram");
