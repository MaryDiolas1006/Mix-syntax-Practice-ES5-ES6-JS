/*ARRAYS
enable us to store a collection of data 
arrays are created by using the [] notation
otherwise known as an array leteral
*/


let myArray = []
let myArray2 = []

console.log(myArray ===[])

let student1 ="Mary"
let student2 = "Tingsheng"
let sttudent3 = "Zest"
let student4  = "eefy"
// array of string
let studentArray = [student1, student2, sttudent3, student4]
console.log(studentArray);


let numArray = [1, 2, 3, 4];

console.log(numArray)

let stuff = [1, "apples", "oranges", undefined, 25, [], []]

console.log(stuff);


/*
  adding to an array we don't have pre-populate an array
  upon declaration we can add into an using the followinf
*/

let newArray = []
console.log(newArray)

/*by passing in 0 as the index we can we can add our first item*/

newArray[0] = "Pineapples"

console.log(newArray[0])

/*arrays are zero-based meaning that the first element/item is stored*/
newArray[1] = "Kiwi"
console.log(newArray);


//Push Method

newArray.push("Mangoes")

/*allows to add an item into our array, by passing an argument through the method
push. This will allows to add an item at the end of our array*/

console.log(newArray[2]);
console.log(newArray);
newArray.push('oranges', 'apples', 'grapes')
console.log(newArray);



/*
   Reading from an array

   newArray
   [0] pineapples
   [1]kiwi
   [3]mangoes
   [4] apples
   [5] grapes
*/

console.log(newArray[5])//grapes
console.log(newArray[2])//mangoes

//can replace an other array
newArray[3] = "coconut"

console.log(newArray[3])//coconut will show


/*How do we know/can we know how many items are in our array?
  Arrays also have a .length property
*/
console.log(newArray.length)//returns 6

//For loops

for(let x = 0; x < newArray.length; x++){
	console.log(newArray[ newArray.length -1]);//to know the last item added
	console.log(newArray[x])
}


/*
   Mutator Methods

   Mutator methods allow s to modify our array

   Push

   allows us to add item to the last position of our arry.

   arrayName.push(argument)

   is we kept pushing and want to know the last item we added we use:

   arrayName[array.length-1]

   to access the last item in our array.

*/

/*
   pop method

   removes the last element and returns the item you deleted
*/


let morningChores = [
   
   "clean frontyard",
   'cook some eggs',
   "walk the dog"
];

//syntax: arrayName.pop()

// alert(morningChores.pop());
//deleted "walk the dog"
console.log(morningChores);


/*
  Reverse

  reverse the order of the elements in the array
*/


let myTasks = [
   'feed the baby',
   'wash the baby',
   'shush the baby'
];

myTasks.reverse()

console.log(myTasks);


/*Shift
  removes the first element in the array and returns what was removed
*/

let todayTasks = [
   'pay the bills',
   'code something fantastic',
   'walk the dog'
];

console.log(todayTasks.shift())
/*return pay the bills. removes pay the bills from the array*/

console.log(todayTasks)


/*
  Sort

  sorts the element of an array in ascending order converts all items to string
  and orders them alphabetically
*/


let dailyChores = [
  
  'clean the room',
  'wash the dishes',
  'bring the paper in'
];

dailyChores.sort();

console.log(dailyChores);


let numArraySort = [5, 33, 55, 66, 244]

numArraySort.sort()
console.log(numArraySort);



/*anonymous function
 It is a function without a callable name and works
 when declared

*/
//we created a function  to compare the numbers
//smallest number first
numArraySort.sort((a , b) => a - b )

console.log(numArraySort)

//biggest number first
numArraySort.sort((a , b) => b - a )

console.log(numArraySort)




let newDaily = [
  '3 hunt porings',
  '1 sell in prontera',
  '2 buy red potions'
];

newDaily.sort();
console.log(newDaily);


/*splice
allows you to simultaneously add and remove elements form an array
in 1 command. 
syntax: arrayName.splice(index, howMany, element1, element)

*/


let avengers = [
 
  'Captain America',
  'Iron man',
  'Thor',
  'The Hulk',
  'Black Widow',
  'Scarlet Witch'

];
/*
  Let's remove 1 element from our array on the second position 
  and insert two strings in it's place
*/
avengers.splice(1, 1, 'Quicksilver', 'Black Panther');

console.log(avengers);

/*
Avengers

0 Captain america
1 Quicksiler
2 Back Panter
3 The Hulk
4 Black Widow
5 Scarlet Witch
*/


/*
  the passed in elements is optional. we can use the method 
  just to delete elements
*/

// avengers.splice(3,4)
// console.log(avengers);


/*mini-activity Splice*/


 avengers.splice(1, 6, 
 	'spider man', 
 	'the thing',
 	'wolverine', 
 	'captain marvel'
 	);

 console.log(avengers);


 /*unshift
  adds one or more element to the beggining of the array and returns 
  the new length of the array

 */

 let teacherTasks = [
    
    'clean the blackboard',
    'prepare lesson plans',
    'create materials',
    'check papers'
 ];



 let newNumTasks = teacherTasks.unshift(
 	'records grades',
    'change clocks batteries'
 	); 
console.log(`You now have ${newNumTasks} tasks to be completed`);
console.log(teacherTasks);



//ACCESSOR METHODS

/* Concat
  combines two or more arrays into 1
  this creates and returns a new array
  and leaves the original arrays untouched
*/


let basketSkills = [
   
   'Shooting',
   'Dribbling',
   'Passing'
];

let baseballSkills = [
    'Batting',
    'Catching',
    'Pitching'
];


let volleyballSkills = [
    
    'Serving'
];


let sportsSkills = basketSkills.concat(baseballSkills, volleyballSkills);

console.log(sportsSkills);
console.log(basketSkills);


/*Join
   
   takes the values in an array and joins them into a string.
   Performs a toString operation on each item prior to joining
   a parameter can be passed in to specify the character to 
   seperate items. 
   By default a comma will be used instead.
*/

let luckyNum = [45, 23, 7, 12, 5];

alert(`The winning lottery numbers are: ${luckyNum.join(', ')}`);


 /*Slice
   return selected elements as new array
   syntax arrayname.slice(start, end)
   by default start is 0
*/

let myChores = [
  'wash the car',
  'clean the windows',
   ' throw the trash'
];

let toDoMonday = myChores.slice(0,2);
let toDoTuesday = myChores.slice(0);

console.log(toDoMonday);
console.log(toDoTuesday);
console.log(myChores);


//mini-activity Slice

let functionalities = [
   
   'call',
   'use sms',
   'play MP3',
   'use wifi',
   'use GPS',
   'watch movies',
   'browse the net'
];


let nokia3310 = functionalities.slice(0, 2);
let smartPhone = functionalities.slice(0);
let deskTop = functionalities.slice(2);
let Tablet = functionalities.slice(0);

console.log(nokia3310);
console.log(smartPhone);
console.log(deskTop);
console.log(Tablet);




/*ToString
*/

let arrToString = [
   
   'never',
   'gonna',
   'give',
   'you',
   'up'
]


let newArrayString = arrToString.toString()

console.log(newArrayString);


let arrToString2 = [
   
   'Rick',
   'Astley',
   25,
   29,
   [1, 2, 3],
   {name: "Mike"}
];


let newArrayString2  = arrToString2.toString();

console.log(newArrayString2);


/*indexOf

 finds the first instance of an item in an array and returns its index.
 this is done using strict equality
 syntax: arrayName.indexOf(searchElement, fromIndex)
*/


let names = [

   'John',
   'Joseph',
   'Marcus',//first iteration of Marcus from 0
   'Nathan',
   'Kenny',
   'Marcus',// first iteration of Marcus from 3
   'Jane',
   'April',
   'Jane',
   'Joseph'
];


console.log(`the index of the first iteration of Marcus is ${names.indexOf('Marcus', 3)}`);




//mini-activity indexOf


let scoreTally = [

   67,
   78,
   89,
   90,
   78,
   45,
   90,
   91,
   77,
   50,
   89,
   80,
   81,
   84,
   84,
   82
];

console.log(`score 50: ${scoreTally.indexOf(50)}`);
console.log(`score 77: ${scoreTally.indexOf(77)}`);
console.log(`second score 78: ${scoreTally.indexOf(78, 2)}`);
console.log(`second score 90: ${scoreTally.indexOf(90, 4)}`);



/*lastIndexOf

  it will return the last occurance of the search element
  it follows the syntax:

  arrayName.lastIndexOf(searchElement, fromIndex)

*/


let fruitsBasket = [
   
   'orange',
   'apples',
   'plum',
   'pineapples',
   'avocado',
   'lemon',
   'apples',
];


console.log(`The index of the last iteration os apples is ${fruitsBasket.lastIndexOf('apples')}`)



/*Iteration Methods
  
  forEach

  works similar to a loop. forEach takes an anonymous function
  as its arguents
and run the function for each of the items in the array.
syntax arrayName.forEach(function(items){})
*/


let arr = [
  
  'Eugene',
  'Alfred',
   'Dennis',
   'Vincent',
]


for(let x = 0; x < arr.length; x++){

  console.log(arr[x]);
}


arr.forEach((arr) => {

  console.log(arr);
})


let numArr = [15, 46, 23, 24, 14, 16, 30, 55, 50, 8, 4];

let evenSum = 0
let oddSum = 0

numArr.forEach((num) => {

  if(num%2 === 0){

    console.log(`${num} is an even number`)

      evenSum += num
  }else {

    console.log(`${num} is not an even number`)
     oddSum += num
  }
}); 


console.log(`the sum of all the even number in the array is: ${evenSum}`);
console.log(`the sum of all the odd number in the array is: ${oddSum}`);



/*Map()

similar tp forEach, but it always returns a new array after
using the anonymous function

*/


let numbers = [1, 2, 3, 4, 5];

let number = numbers.map((number) => {

  return number*number
});

console.log("number=", number);



//mini-activity Map
//mini-activity
//use map to create from ["john", "paul", "george", "ringo"]
//the following array ["I am a fan of <>"]

let beatles = ['john', 'paul', 'george', 'ringo']

let fans = beatles.map((beatle) => {
  
  return `I am a fan of ${beatle}`

})


console.log("fans=", fans);


/*every
  used to apply a set of criteria to validate the data in an array
*/

let numbers2 = [1, 2, 3, 4, 5]

let isValid = numbers2.every((number) => {

     return (number < 10)
});

console.log("isValid=", isValid);


/*Some
  used to check if one or most items in an array will pass a given test
*/
let results = [1, 2, 3, 4, 5]

let result = results.some((result) => {

     return result < 3
});

console.log("result=", result);


let engineers = [
   'TingSheng',
   'MarySheng',
   'zest'
]


let engineer = engineers.some((engineer) => {

    return engineer.length > 5
});


console.log("engineer=", engineer);




/*Filter
  create a new array out of items that passed the given criteria
*/

let numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let filtered = numbers3.filter((num) => {

    return num < 5
});

console.log("filtered=", filtered);


/*Reduce
 performs a mathematical operation on an array and reduce it to a single value
*/

let numbers4 = [1, 2, 3, 4,5];

let total = numbers4.reduce((previous, current) => {

    return previous + current
}, 0);

//Results to 15. Added all elements are added
//1st iteration: previous 0 + current 1 = 1
//2nd iteration: previous 1 (from the total in 1st iteration) + current 2 = 3
//3rd iteration: previous 3 (from the total in the 2nd iteration) + current 3 = 6
//4th iteration: previous 6 + current 4 = 10
//5th iteration: previous 10 + current 5 = 15
console.log("total=", total);


/*find
  return the first item that passed the condition
*/

let friends = ['Tingsheng', 'Zest', 'Eefy']

let result2 = friends.find((friend) => {
   
   return friend === "Tingsheng"
});

console.log("result2=", result2);



/*[string, number, boolean, []]

  Multidimensional array 
  array within an array
  nested array
*/


let nestedArray = [

  ['Alex', 16, 'instructor'],
  ['Bryan', 18, 'basketball player'],
  ['TingSheng', 30, 'web Developer']
]

console.log(nestedArray [0][0] + 'is' + nestedArray [0][1] + 'years old' + nestedArray [0][2]);



nestedArray.forEach((profile) => {

    console.log(`${profile[0]} is ${profile[1]} years old ${profile[2]}`);
});

//get all the items in array
// solution
console.log(nestedArray[0][0]);
console.log(nestedArray[0][1]);
console.log(nestedArray[0][2]);
console.log(nestedArray[1][0]);
console.log(nestedArray[1][1]);
console.log(nestedArray[1][2]);

//solution
nestedArray.forEach(function(profile){
      for(let x = 0;  x<profile.length; x++){
        console.log(profile[x])
      }
      
    });

// other solution. to get items inside of an array 
//anonymous function

nestedArray.forEach((person) => {

  person.forEach((detail) => {

      console.log(detail);

    })
  })


//normal function expression

// let name = function(){}
// let functionName = function(arg1){}


//Fat Arrow Function

let myFunc = () => {
 //return keyword set the value of the function
  return myFunc


}

console.log(5 * 10)

// let myFunc1 = () => {

//   console.log(5)
// }

// console.log(myFunc() * 10);












