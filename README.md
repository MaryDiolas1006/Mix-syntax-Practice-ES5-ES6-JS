## What is javascript?

1. JS is the most popular programming language and acts a great foundation
   for developers.
2. javascript makes websites/pages interactive.
3. JS is our first programming language - this is the first time we will write
   something that will tell our page what to do programatically.

### Data Types - String
	includes alphanumeric characters and special characters
	which have to be enclosed in either single or double quotes.

### Data Type - Number/Numeric

	Includes all possible numeric values including NaN
	(Not a Number), positive infinity and negative infinity.
	Do not enclose with a quote or a double quote.
	NaN is generated when a math function fails or when trying to parse
	a number fails.

	NaN is the only value in JS that does not Equal itself.
	The surest way to determine if something in JS is NaN is to compare
	it against itself. If it returns false it is NaN(Not a Number)

	We use numbers/numeric data-type for computations.

### Boolean
	holds true or false.

### Undefined
	represents the state of a variable that's been declared but has no assigned value

### Null
	used to intentionally express the absence of a value in a variable declaration

### Objects
	Objects are variables too. But objects can contain many values.
	The values are written as name: value (name and value separated by a colon)
	A javascript objects is a collection named values.
	The named values in JS objects are called properties.

### Arithmetic Operators
	mathematical operations are carried out using simple operators

	+ for addition
	- for subtraction
	* for multiplication
	/ for division
	% for remainder
	() for overriding the default operational priority(MDAS)

	Arithmetic operators only compute correctly when using the appropriate
	data type (numbers/numeric)


### conversion/coercion
	
	When JS is given an operation with conflicting data types, it tries to 
	normalize them first before performing the operation.

	This is why numbers in a mathematical operation are converted to strings
	when a string is included in the operation.

	Adding a number to a boolean will convert the boolean to either 0(false) 
	or 1 (true) before performing the operation.

### comparison operators

	Used to compare 2 values and return either true or false.
	Javascript has both strict and type-converting comparisons.
	A strict comparison (===) is only true if the operands are of the same
	type and the contents match.
	the more commonly used (==) is an abstract comparison, which converts
	the operands to the same type before making a comparison.

### functions

	a way of grouping operations under a given name so that they can
	be called repeatedly.

###Control Structures

     Control Structures are logical conditions that allow you to control the flow of a program


##CONDITIONAL STATEMENTS

###IF STATEMENTS

     if(condition){
            code to run if condition is true
        }

        the {} encloses the "code block"
        the code within the block will only run if the given condition is true


###ELSE STATEMENTS

        if(condition){
            code to run if condition is true
        }else {
            code to run if condition is false
        }

        the else keyword is used to add an extra block of code to run if the given
        condition is not met.

###IF ELSE IF 
     use the else if statment to specify a new condition
     if the first condition was not met.

###TERNARY OPERATOR
    the ternary operator (?) is a shorthand way of writing an if...else statement
    it takes 3 operands in the following format:
    condition ? (code to run if condition is true) : (code to run if condition is NOT true);

###Switch Statements
    We can string together if else statements to form logical decision tree

##LOOPS
     used to repeat pieces of code over and over according 
     to certain conditions

###WHILE LOOPS
    runs a block of code while the given condition is true

    while(condition){
       do something
    }


###INFINITE LOOPS
    it is important that the given condition in a while loop 
     will be met at some point
     if not, the loop will be infinite; crashing your program


###DO... WHILE LOOPS
    similar to a while loop, only difference being the condition is givn AFTER code block.

    do {
	do something 
    }while(condition)



    this way, the block of code will always be run AT THE ONCE,
    regardless of the condition being true or not the tasks while loop
    example can be written as a do ... while with the same results:

###FOR LOOPS
    for(initialization; condition; after){
	do something
    }

     the initialization is run BEFORE the loop starts  unsually used to initialize 
     variables to be used in the loop.


     The condition has to be satisfied on each iteration  for the code block to be run.
     The loop will stop once the condition is no longer met.


     The after code specifies what to do after each iteration of the loop,
     typically used to increment/decrement a counter of some sort.

      We can write the above tasks while loop as a for loop:

###NESTED FOR LOOPS 
     you can place a loop inside another loop to create a nested loop

     The inner loop will run all the way through before the outer loop iterates


##Array Manipulation
     JavaScript arrays are used to store multiple related values in a single variable.
     An array can hold many values under a single name, and you can access the values by referring to an index number.
     It is similar to a list of items.


###ARRAYS
    enable us to store a collection of data 
    arrays are created by using the [] notation
    otherwise known as an array leteral
   

###Push Method
    allows to add an item into our array, by passing an argument through the method
    push. This will allows to add an item at the end of our array

###Mutator Methods

    Mutator methods allow s to modify our array
    Push
    allows us to add item to the last position of our arry.
    arrayName.push(argument)
    if we kept pushing and want to know the last item we added we use:
    arrayName[array.length-1]
    to access the last item in our array.

###pop method
    removes the last element and returns the item you deleted. syntax: arrayName.pop()

###Reverse
    reverse the order of the elements in the array


###Shift
    removes the first element in the array and returns what was removed

###Sort
    sorts the element of an array in ascending order converts all items to string
    and orders them alphabetically


###Anonymous Function
    It is a function without a callable name and works
    when declared


###Splice
    you to simultaneously add and remove elements form an array
    in 1 command. 
    syntax: arrayName.splice(index, howMany, element1, element)


###Unshift
     adds one or more element to the beggining of the array and returns 
     the new length of the array


##ACCESSOR METHODS

###Concat
    combines two or more arrays into 1
    this creates and returns a new array
    and leaves the original arrays untouched


###Join
   
     takes the values in an array and joins them into a string.
     Performs a toString operation on each item prior to joining
     a parameter can be passed in to specify the character to 
     seperate items. 
     By default a comma will be used instead.

###Slice
     return selected elements as new array
     syntax arrayname.slice(start, end)
     by default start is 0

###indexOf
    finds the first instance of an item in an array and returns its index.
    this is done using strict equality
    syntax: arrayName.indexOf(searchElement, fromIndex)

###lastIndexOf
    it will return the last occurance of the search element
    it follows the syntax:
    arrayName.lastIndexOf(searchElement, fromIndex)


##Iteration Methods
  
###forEach
    works similar to a loop. forEach takes an anonymous function
    as its arguents
    and run the function for each of the items in the array.
    syntax arrayName.forEach(function(items){})

###Map()
    similar tp forEach, but it always returns a new array after
    using the anonymous function

###every
    used to apply a set of criteria to validate the data in an array

###Some
    used to check if one or most items in an array will pass a given test

###Filter
    create a new array out of items that passed the given criteria

###Reduce
    performs a mathematical operation on an array and reduce it to a single value

###Find
    return the first item that passed the condition