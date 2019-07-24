/* Bubble Sort 
Desc-> Reads in integers prints them in sorted order using Bubble Sort
I/P -> read from passed values
O/P -> Print the Sorted List */

//Function for swapping elements
function swap(arr, firstIndex, secondIndex)
{
    var temp = arr[firstIndex];
    // Storing to a temporary variable for swapping
    arr[firstIndex] = arr[secondIndex];
    arr[secondIndex] = temp;
}
//Function for bubble sort
function bubbleSort(arr)
{
    var len = arr.length
    // For Mocha test
    module.exports.len=len;
        var i, j, stop;
    for (i=0; i < len; i++)
    {
        for (j=0, stop=len-i; j < stop; j++)
        {
            if (arr[j] > arr[j+1])
            {
                swap(arr, j, j+1);
            }
        }
    }
    return arr;
}
console.log(bubbleSort([3, 0, 2, 5, -1, 4, 1]));