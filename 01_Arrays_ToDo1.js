// Push Front
// Given an array and an additional value, 
// insert this value at the beginning of the array. 
// Do this without using any built-in array methods.
function pushFront(arr, val){
    for(i=arr.length;i>0;i--){
        arr[i] = arr[i-1];
    }
    arr[0] = val;
    return arr;
}

myArray = [6,7,8,9];
console.log(pushFront(myArray, 5));

// Pop Front
// Given an array, 
// remove and return the value at the beginning of the array. 
// Do this without using any built-in array methods except pop().
function popFront(arr){
    var temp = arr[0];
    for(i=0;i<arr.length-1;i++){
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    return temp;
}
myArray = [6,7,8,9];
console.log(popFront(myArray));
console.log(myArray)

// Insert At
// Given an array, index, and additional value, 
// insert the value into array at given index. 
// Do this without using built-in array methods. 
// You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
function insertAt(arr, index, val){
    for (i=arr.length;i>index;i--){
        arr[i] = arr[i-1];
    }
    arr[index] = val;
    return arr;
} 
myArray = [6,7,9,10];
console.log(insertAt(myArray, 2, 8));
// Remove At
// Given an array and an index into array, 
// remove and return the array value at that index. 
// Do this without using built-in array methods except pop(). 
// Think of popFront(arr) as equivalent to removeAt(arr,0).
function removeAt(arr, index){
    var temp = arr[index];
    for(i=index;i<arr.length-1;i++){
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    console.log(arr);
    return temp;
}
myArray = [6,7,8, 9,10];
removeAt(myArray, 1);

// Swap Pairs
// Swap positions of successive pairs of values of given array. 
// If length is odd, do not change the final element. 
// For [1,2,3,4], return [2,1,4,3]. 
// For example, change input ["Brendan",true,42] to [true,"Brendan",42].
// As with all array challenges, do this without using any built-in array methods.
function swapPairs(arr){
    var temp;
    for(i=0;i<arr.length-1;i=i+2){
        temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
    }
    return arr;
}
myArray = [6,7,8,9,10];
console.log(swapPairs(myArray));

// Remove Duplicates
// Sara is looking to hire an awesome web developer and has received 
// applications from various sources. Her assistant alphabetized them 
// but noticed some duplicates. 
// Given a sorted array, remove duplicate values. 
// Because array elements are already in order, all duplicate values
// will be grouped together. 
// As with all these array challenges, do this without using any built-in array methods.
function removeDups1(arr){
    for(i=0;i<arr.length-1;i++){
        while(arr[i] == arr[i+1]){
            for(j=i+1;j<arr.length-1;j++){
                arr[j] = arr[j+1];
            }
            arr.length = arr.length-1;
        }
    }
    return arr;
}
myArray = [1,1,2,3,4,4,5,5,5,6,7,8,8,8,8,9,10,10,10];
// myArray = [1,1,2,2,2,3,3,4];
console.log(removeDups1(myArray));

// Second: Solve this without using any nested loops.
function removeDups2(arr){
    var tempArr = [];
    var tempIndex=0;
    for(i=0;i<arr.length;i++){
        if(arr[i] != arr[i+1]){
            tempArr[tempIndex] = arr[i];
            tempIndex++;
        }
    }
    return tempArr;
}
myArray = [1,1,2,3,4,4,5,5,5,6,7,8,8,8,8,9,10,10,10];
// myArray = [1,1,2,2,2,3,3,4];
console.log(removeDups2(myArray));