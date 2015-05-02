var threeItems = [1,2,3];
//create a function named 'last' that returns the last item from 'threeItems'
//alert the result of your function

function last(thyArray){
	return thyArray[thyArray.length-1];
}
alert(last(threeItems));


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Loop through evenArray removing all values that aren't even 
var evenArray = [1,2,3,6,22,98,45,23,22,12];

for(var i=0;i<evenArray.length;i++){
	if(evenArray[i]%2===1){
		evenArray.splice(i,1);
		i--;
	}
}
console.log(evenArray);

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//below you're given a function that will return a random number between 0 and 30 and an array full or numbers 'randomArray'. Your job is to write a function that will get a random number, then loop through the array to see if that random number is in the array. If it is, alert true, if it's not, alert false
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * (30 - 0) + 0);
}
var randomArray = [0,3,4,5,6,7,9,14,17,24,25,26,29,30];

var searcheur = function(thyArray){
	var friendship = getRandomArbitrary();
	for(var i=0;i<thyArray.length;i++){
		if(thyArray[i]===friendship){
			return true;
		}
	}
	return false;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//Create a copy of first and save it into second. Then, add 6 and 7 to the end of second. When you run this, first should be just [1,2,3,4,5] and second will be [1,2,3,4,5,6,7] if you created your copy correctly.
var first = [1,2,3,4,5];
var second;

second = first.slice(0);
second.push(6);
second.push(7);

alert(first); //[1,2,3,4,5];
alert(second); //[1,2,3,4,5,6,7];



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called longest that takes in our sentence variable, and returns the longest word in that sentence.
var sentence = "Dev Mountain is the best"

function longest(str){
	var arr = str.split(" ");
	var returner = "";
	for(var i=0;i<arr.length;i++){
		if(arr[i].length > returner.length){
			returner = arr[i];
		}
	}
	return returner;
}


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//write a function called capitalize that takes in the myPoem variable and capitalizes every word 
var myPoem = 'What is a jQuery but a misunderstood object?'
//What is a jQuery but a misunderstood object? --> What Is A JQuery But A Misunderstood Object?

function capitalize(str){
	var arr = str.split(" ");
	arr = arr.map(function(item){
		return item.charAt(0).toUpperCase() + item.slice(1);
	})
	return arr.reduce(function(prev,item){

		return prev+ " " + (item);
	}).trim();
}
console.log(capitalize(myPoem));

/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//Write a function called vowelCounter that takes in a string (theOdyssey) and returns how many vowels are in that string.

function vowelCounter(str){
	var vCount = 0;
	function isVowel(character){
		return character === 'a' || character === 'e' || character === 'i' || character === 'o' || character === 'u' || character === 'y';
	}
	for(var i=0;i<str.length;i++){
		if(isVowel(str.charAt(i))) {
			vCount++;
		}
	}
	return vCount;
}

vowelCounter(theOdyssey);

