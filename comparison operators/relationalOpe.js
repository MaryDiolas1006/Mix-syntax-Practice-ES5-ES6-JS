/*
			Relational Operators

			Greater Than(>)
			Returns true if the value on the left of the operator is greater
			than the value of the operand on the right.
			Type-conversion occurs before comparison.

	*/
			console.log("Relational Operators: Greater Than (>)")
			console.log(0 > 1)//false
			console.log("" > 1)//false
			console.log("5" > 2)//true
			console.log("10" > "5")//false

			/*Greater than or equal to (>=)
				returns true if the value on the left is greater or equal tha
				the value on the right.
				Converts type if they different.
			*/

			console.log("Greater than or Equal to");
			console.log(5 >= 5);//true 5 is equal to 5
			console.log("7" >= 4);//converts "7" to 7
			console.log(0>="0");//"0" was converted to 0


			/*Less than Operator(<)
				returns true if the value on the left is less than 
				value on the right.
				Converts type if they different.
			*/

			console.log("Less Than (<)");
			console.log(0 < 1);//results to true.
			console.log(5 < 2);//results to false.
			console.log("5" < 5)//5 is equal to 5 ("5" was converted)


			/*Less Than or Equal To (<=)
				returns true if the value on the left is less or equal than
				the value on right.
				Type conversion occurs before comparison.
			*/	

			console.log("Less Than or Equal to")
			console.log(6 <= 12)//true
			console.log(0 <= 1)//true
			console.log("7" <= 7)//true
