/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.

plusOneSum([1, 2, 3, 4]); // 14

*/

function plusOneSum(thyArray){
  return thyArray.map(function(item){
    return item+1;
  }).reduce(function(collector,item,index){
		return collector + item;
	});
}
console.log(plusOneSum([1, 2, 3, 4]));



/*

Write a function that accepts a multi dimensional array and returns a flattened version.

flatten([1, 2, [3, [4], 5, 6], 7]) // [1, 2, 3, 4, 5, 6, 7]

*/

function flatten(thyArray){
	var returnArr = [];
	for(var i=0;i<thyArray.length;i++){
		if(typeof thyArray[i] === 'object'){
			returnArr = returnArr.concat(flatten(thyArray[i]));
		} else returnArr.push(thyArray[i]);
	}
	return returnArr;
}
console.log(flatten([1, 2, [3, [4], 5, 6], 7]));


/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/
var testArray = ['a1','a2','a3','a4','a5','a6','a7','a8','a9','b1','b2','b3','b4','b5','b6','b7','b8','b9','c1','c2','c3','c4','c5','c6','c7','c8','c9'];
function oneTwoThreeToABC(thyArray){
	var n = thyArray.indexOf('b1');
	var as = thyArray.slice(0,n);
	var bs = thyArray.slice(n,2*n);
	var cs = thyArray.slice(2*n,3*n);
	var returner = [];
	for(var i=0;i<as.length;i++){
		returner.push(as[i]);
		returner.push(bs[i]);
		returner.push(cs[i]);
	}
	return returner;
}
console.log(oneTwoThreeToABC(testArray));

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/

function comparateur(arr1,arr2){
	for(var i=0;i<arr1.length;i++){
		if(arr2.indexOf(arr1[i])===-1){
			return arr1[i];
		}
	}
}

console.log(comparateur([1, 2, 3, 4, 5, 6, 7],[6,4,2,1,7,3]) );

/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

*/

function longestWords(sentence){
	var retArr = [];
	var splitten = sentence.split(' ');
	for(var i=0;i<splitten.length;i++){
		if(!retArr[0]){
			retArr.push(splitten[i]);
		}else if(splitten[i].length>retArr[0].length){
			retArr = [splitten[i]];
		} else if(splitten[i].length === retArr[0].length && splitten[i].toUpperCase() !== retArr[0].toUpperCase()){
			retArr.push(splitten[i]);
		}
	}
	return retArr;
}
console.log(longestWords("You are just an old antidisestablishmentarian"));
console.log(longestWords("I gave a present to my parents")); // ["present", "parents"]
console.log(longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo"));


/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/
var multipleSum = 0;
for(var i=0;i<1000;i++){
	if(i%3===0 || i%5===0){
		multipleSum+=i;
	}
}
console.log(multipleSum);

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/

function efficiency(str){
	var retstr = "";
	for(var i=0;i<str.length;i++){
		if(retstr.indexOf(str.charAt(i))===-1){
			retstr += str.charAt(i);
		}
	}
	return retstr;
}

console.log(efficiency('tree traversal'));

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/

function sum(a,b){
	if(b === undefined){
		return function(x){
			return a+x;
		}
	} else return a+b;
}
console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));
