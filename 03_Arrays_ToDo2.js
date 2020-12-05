// To Do 2
// Reverse
// Given a numerical array, reverse the order of values, in-place. 
// The reversed array should have the same length, with existing 
// elements moved to other indices so that order of elements is reversed. 
// Working ‘in-place’ means that you cannot use a second array – move 
// values within the array that you are given. As always, do not use 
// built-in array functions such as splice().

function reverse(arr){
    var temp;
    for(i=0,j=arr.length-1;i<j;i++,j--){
        temp=arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}
myArray = [1,2,3,4,5,6,7];
reverse(myArray);
console.log(myArray);

// Rotate
// Implement rotateArr(arr, shiftBy) that accepts array and 
// offset. Shift arr’s values to the right by that amount. 
// ‘Wrap-around’ any values that shift off array’s end to 
// the other side, so that no data is lost. 
// Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. 
// Don’t use built-in functions.
function rotate1(arr, offset){
    var temp;
    for(i=0;i<offset;i++){
        //save and pop off the last value
        temp = arr[arr.length-1];
        for(j=arr.length-1;j>0;j--){
            arr[j] = arr[j-1];
        }
        arr[0] = temp;
    }
}
myArray = [1,2,3,4,5,6,7];
rotate1(myArray, 2);
console.log(myArray);

// Second: allow negative shiftBy (shift L, not R).
function rotate2(arr, offset){
    var temp;
    if(offset > 0){
        for(i=0;i<offset;i++){
            //save and pop off the last value
            temp = arr[arr.length-1];
            for(j=arr.length-1;j>0;j--){
                arr[j] = arr[j-1];
            }
            arr[0] = temp;
        }
    }
    else if(offset < 0){
        for(i=0;i<offset*-1;i++){
            temp=arr[0];
            for(j=0;j<arr.length-1;j++){
                arr[j] = arr[j+1];
            }
            arr[arr.length-1] = temp;
        }
    }
}
myArray = [1,2,3,4,5,6,7];
rotate2(myArray, -3);
console.log(myArray);

// Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

// Fourth: minimize the touches of each element.

// Filter Range
// Alan is good at breaking secret codes. One method is to 
// eliminate values that lie within a specific known range. 
// Given arr and values min and max, retain only the array 
// values between min and max. Work in-place: return the 
// array you are given, with values in original order. 
// No built-in array functions.
function inRange(arr, min, max){
    for(i=0;i<arr.length;i++){
        while(arr[i] < min || arr[i] > max){
            for(j=i;j<arr.length;j++){
                arr[j] = arr[j+1];
            }
            arr.length = arr.length -1;
        }
    }
}
myArray = [1,11,12,13,4,12,5,6,20,7,19];
inRange(myArray, 3, 10);
console.log(myArray);

// Concat
// Replicate JavaScript’s concat(). Create a standalone function 
// that accepts two arrays. Return a new array containing the 
// first array’s elements, followed by the second array’s elements. 
// Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) 
// should return new array ['a','b',1,2].
function arrConcat(arr1, arr2){
    concatArray = [];
    for(i=0;i<arr1.length;i++){
        concatArray[i] = arr1[i];
    }
    for(j=i, i=0; i<arr2.length;i++, j++){
        concatArray[j] = arr2[i];
    }
    return concatArray;
}
myArray1 = ["a", "b", "c"];
myArray2 = [1,2,3,4];
myArray3 = arrConcat(myArray1, myArray2);
console.log(myArray3);