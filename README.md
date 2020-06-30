## What is javascript?

1. JS is the most popular programming language and acts a great foundation
   for developers.
2. javascript makes websites/pages interactive.
3. JS is our first programming language - this is the first time we will write
   something that will tell our page what to do programatically.

## Data Types - String
	includes alphanumeric characters and special characters
	which have to be enclosed in either single or double quotes.

## Data Type - Number/Numeric

	Includes all possible numeric values including NaN
	(Not a Number), positive infinity and negative infinity.
	Do not enclose with a quote or a double quote.
	NaN is generated when a math function fails or when trying to parse
	a number fails.

	NaN is the only value in JS that does not Equal itself.
	The surest way to determine if something in JS is NaN is to compare
	it against itself. If it returns false it is NaN(Not a Number)

	We use numbers/numeric data-type for computations.

# Boolean
	holds true or false.

# Undefined
	represents the state of a variable that's been declared but has no assigned value

# Null
	used to intentionally express the absence of a value in a variable declaration

# Objects
	Objects are variables too. But objects can contain many values.
	The values are written as name: value (name and value separated by a colon)
	A javascript objects is a collection named values.
	The named values in JS objects are called properties.

## Arithmetic Operators
	mathematical operations are carried out using simple operators

	+ for addition
	- for subtraction
	* for multiplication
	/ for division
	% for remainder
	() for overriding the default operational priority(MDAS)

	Arithmetic operators only compute correctly when using the appropriate
	data type (numbers/numeric)


## conversion/coercion
	
	When JS is given an operation with conflicting data types, it tries to 
	normalize them first before performing the operation.

	This is why numbers in a mathematical operation are converted to strings
	when a string is included in the operation.

	Adding a number to a boolean will convert the boolean to either 0(false) 
	or 1 (true) before performing the operation.

## comparison operators

	Used to compare 2 values and return either true or false.
	Javascript has both strict and type-converting comparisons.
	A strict comparison (===) is only true if the operands are of the same
	type and the contents match.
	the more commonly used (==) is an abstract comparison, which converts
	the operands to the same type before making a comparison.

## functions

	a way of grouping operations under a given name so that they can
	be called repeatedly.

