// Min to Front
// Given an array of comparable values, move the lowest element 
// to array’s front, shifting backward any elements previously 
// ahead of it. Do not otherwise change the array’s order. 
// Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
// As always, do this without using built-in functions.

function minToFront(arr){
    var minVal = arr[0];
    var minIndex=0;
    //Find the min value and save it's index
    for(i=1;i<arr.length-1;i++){
        if(minVal > arr[i]){
            minVal = arr[i];
            minIndex = i;
        }
    }
    //Start at the saved index and shift all values towards the end of the array
    for (i=minIndex;i>0;i--){
        arr[i] = arr[i-1];
    }
    arr[0] = minVal;
    return arr;
}

myArray = [4,2,10,7,8,3,1,12,13];
console.log(minToFront(myArray));
