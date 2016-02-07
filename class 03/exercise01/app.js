
//#1//
function farToCel(farTemp) {
    var celTemp = (farTemp - 32) / 1.8;
    celTemp = Math.floor(celTemp);
    if (celTemp < 10) {
        console.log("The current temperature is " + celTemp + " degrees Celsius. It's " + );
    }else if (celTemp > 10 && celTemp<= 25) {
        console.log("The current temperature is " + celTemp + " degrees Celsius. It's fair outside.");
    }else{
        console.log("The current temperature is " + celTemp + " degrees Celsius. It's hot outside.");
    }
}

farToCel(19);


//#2 -- having trouble with this one...//
var numbers = [10, 20, 100, 2, 5];
var total = 0;
function sum(n) {
    for(i = 0; i < n.length; i++){
    total = total + n[i];
}
   console.log(total);
}

sum(numbers);

//#3: greatest number//
var numbers = [10, 20, 100, 2, 5];
var largestNum = numbers[0];
function greatestNumber(arr) {
    for(i = 0; i < arr.length; i++){
        if (arr[i] >= largestNum) {
            largestNum = arr[i];
        }
    }
    console.log(largestNum);
}

greatestNumber(numbers);

//#4//  ex: HUFFMAN
var myCharacters = {};

var myString = "Huffman";

function charFreq(str) {
    var currentChar = str.charAt(i);
    for(var i = 0; i < str.length; i++){
        if (myCharacters[currentChar] === undefined) {
            myCharacters[currentChar] = 0;
        }
        myCharacters[currentChar]++;
    }
    
    return myCharacters;
}

var frequency = charFreq(myString);

for (var j in frequency) {
    console.log(j + ": " + frequency[j]);
}


//#5//
var num = 1;
function fib(max) {

    for(var i = 1; i < max; i++){
        console.log(num);
    }
}

fib(25);

