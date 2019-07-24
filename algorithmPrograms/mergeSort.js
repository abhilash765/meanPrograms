var read=require('readline-sync');
var arr=[];
function input()
{
    console.log("MERGE SORT");
    var n=read.questionInt("Enter the numbers");
    console.log("Enter the elements to be sorted");
    for(var i=0;i<n;i++)
    {
    arr[i]=read.questionInt();
    }
    console.log(arr);
    sort(0,n-1,arr);
}
function sort(low,high,arr)
{ 
     var mid=parseInt((low+high)/2);
    if(low<high)
    {
       sort(low,mid,arr);
        sort((mid+1),high,arr);
        merge(low,high,mid,arr);
    }
}
function merge(low,high,mid,arr)
{
    var n1=parseInt(mid-low+1);
    var n2=parseInt(high-mid);
    var left=[];    
    var right=[];
    for(var i=0;i<n1;i++)
    {
         left[i]=arr[(low+i)];
    }
    for(var j=0;j<n2;j++)
    {
        right[j]=arr[(mid+1+j)];
    }
    var i=j=0;
    var k=low;
    while(i<n1&&j<n2)
    {
        if(left[i]<=right[j])
        {
            arr[k]=left[i];
            i++;

        }
    else{
            arr[k]=right[j];
            j++;
        }
        k++;
    }
    while(i<n1)
    {
        arr[k]=left[i];
        i++;
        k++;
    }
    while(j<n2)
    {
        arr[k]=right[j];
        j++;
        k++;
    }
}
input();
console.log(arr);