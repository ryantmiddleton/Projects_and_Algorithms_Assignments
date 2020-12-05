// To Do 1
// Remove Blanks
// Create a function that, given a string, returns all of that 
// string’s contents, but without blanks. 
// If given the string " Pl ayTha tF u nkyM usi c ", return "PlayThatFunkyMusic".
function removeBlanks(tmpString){
    strArray = tmpString.split(" ");
    return strArray.join("");
}
myString = "Pl ayTha tF u nkyM usi c";
console.log(removeBlanks(myString));

// Get Digits
// Create a JavaScript function that given a string, returns
// the integer made from the string’s digits. Given "0s1a3y5w7h9a2t4?6!8?0", 
// the function should return the number 1357924680.
function getDigits(tmpString){
    tmpArray = [];
    var val;
    strArray = tmpString.split("");
    for(i=0;i<strArray.length;i++){
        val = parseInt(strArray[i]);
        if (! isNaN(val)){
            tmpArray.push(strArray[i]);
        }
    }
    val = parseInt(tmpArray.join(""));
    return val;
}

console.log(getDigits("0s1a3y5w7h9a2t4?6!8?0"));

// Acronyms
// Create a function that, given a string, returns the string’s acronym
// (first letters only, capitalized). 
// Given " there's no free lunch - gotta pay yer way. ", return "TNFL-GPYW". 
// Given "Live from New York, it's Saturday Night!", return "LFNYISN".
function Acronymize(sentence){
    acronymArray = [];
    var tmpLetter;
    sentenceArray = sentence.split(" ");
    for(i=0;i<sentenceArray.length;i++){
        tmpLetter = sentenceArray[i].split("")[0];
        if(tmpLetter){
            acronymArray.push(tmpLetter.toUpperCase());
        }
    }
    return acronymArray.join("");
}
myString = " there's no free lunch - gotta pay yer way. "
console.log(Acronymize(myString));
myString = "Live from New York, it's Saturday Night!"
console.log(Acronymize(myString));

// Count Non-Spaces
// Accept a string and return the number of non-space characters found in the string. 
// For example, given "Honey pie, you are driving me crazy", return 29 (not 35).
function countNonSpace(spaceStr){
    var count=0;
    wordArray = spaceStr.split(" ");
    for(i=0;i<wordArray.length;i++){
        count += wordArray[i].split("").length;
    }
    return count;
}
myString = "Honey pie, you are driving me crazy";
countNonSpace(myString);


// Remove Shorter Strings
// Given a string array and value (length), remove any strings
// shorter than the length from the array.
function removeYourShorts(strArr, minLength){
    wordArray = strArr.split(" ");
    for(i=0;i<wordArray.length;i++){
        if(wordArray[i].length < minLength){
            for(j=i;j<wordArray.length;j++){
                wordArray[j] = wordArray[j+1];
            }
            wordArray.length = wordArray.length -1;
        }
    }
    return wordArray.join(" ");
}

myString = "Sometimes I'm just too tired to think right.";
console.log(removeYourShorts(myString, 4));