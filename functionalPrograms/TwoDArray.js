var read=require('readline-sync');
function matrix( rows, cols)
{
    var arr = [];
    console.log("Enter the number of rows:");
    rows=read.questionInt();
    console.log("Enter the number of columns:");
    cols=read.questionInt();
    console.log("Enter the array elements");
    for(var i=0; i < rows; i++)
    {
        arr.push([]);
        arr[i].push( new Array(cols));
        for(var j=0; j < cols; j++)
        {
          arr[i][j] =read.question();
        }
    }
  return arr;
  }
  console.log(matrix());