/*********************************************************************************
   Module: WD004 JavaScript Programming
   Session 2: Control Structures

   Control Structures are logical conditions that allow you to
   control the flow of a program
**********************************************************************************/

/*********************************************************************************
    CONDITIONAL STATEMENTS

    IF STATEMENTS

        if(condition){
            code to run if condition is true
        }

        the {} encloses the "code block"
        the code within the block will only run if the given condition is true */


        let height = 190;

        

        if (height >= 180) {

            console.log("You're taller than me.")

        }

        
/*        if (height == 190){

            console.log("My height is " + height)

        }*/

/*        let username = "admin"

            if(username === "admin"){

                console.log("Good Morning, " + username)

            }*/

        let num1 = 5

        if(num1 === 5){

            alert("The number is 5.")

        }

        let errorCount = 6

        if (errorCount <= 3){

            console.log("You have less than 4 errors. You passed the test.")

        }

        /*inequality operator (!=)*/

            let turnovers = 10

            if(turnovers != 10){

                console.log("You don't have 10 turnovers")

            }


            let password = "admin1234"

            if (password != "admin123") {

                console.log("You've entered the wrong password.")

            }


            /*variables containing boolean*/

                let isCompleted = false

                if(isCompleted){

                    console.log("Your package is completed.")

                }

            /*logical operator (!) or not*/

            /*The logical operator ! when added to a variable as a condition, refers to as "not"*/

            if (!isCompleted){

                console.log("You're package was not completed.")

            }


            let numberEx1 = "joe"
            if (!isNaN(numberEx1)) {

                console.log("Thank you for the appropriate input")

            }



                /*
                the method isNaN() takes an argument and determines if the data is a number 
                or a NotaNumber. It will result true if the data passed is NotaNumber but will
                result false if it is a number.
                */


            let numberEx2 = 5        
/*            console.log(typeof numberEx2)*/
            //typeof returns a string

            if (typeof numberEx2 === "number") {

                    console.log("The data-type is number")

            } 

/*

    ELSE STATEMENTS

        if(condition){
            code to run if condition is true
        }else {
            code to run if condition is false
        }

        the else keyword is used to add an extra block of code to run if the given
        condition is not met. */

            let batman = "vigilante"

            if (batman === "superhero"){

                console.log("Batman is Gotham's Pride!")

            } else {

                console.log("Batman is a brutal vigilante")

            }


            let numEx1 = "StephenCurry"

            if (!isNaN(numEx1)) {

                console.log("This is a number.")

            } else {

                console.log("This is NaN")

            }


            /*nesting if-else*/

            let numEx2 = 25

            if (!isNaN(numEx2)){

                console.log("This is a number.")

                if (numEx2 == 25){

                    console.log("The number is 25.")

                    if (numEx2%5 === 0) {

                        console.log("The number is divisible by 5")

                    }

                } else {

                    console.log("The number is not 25.")
                }


            } else {

                console.log("This is not a number.")

            }

            /*using if statements in functions*/

            let password1 = "adminadmin123"
            let password2 = "adminadmin123"
            let username = "admin"

            function adminLogin(user,pw1,pw2){

                if (user === username) {

                    console.log("You've entered the correct username.")

                        if (pw1 === password1) {

                            console.log("Thank you, please confirm your password.")

                            if(pw2 === password2){

                                console.log("Thank you for logging in.")

                            //end of third if
                            } else {

                                console.log("Please input the correct password.")

                            }

                        //end of second if
                        } else {

                            console.log("That is the wrong password.")
                        }

                //end of first if
                } else {

                    console.log("You've entered the wrong username.")

                }

            }

            adminLogin("admin","adminadmin123", "adminadmin123")

            /*Create our folder structure:

                wd004
                    -s2
                        -a1
                            index.html
                            -assets
                                -js
                                    script.js
        
            */

            /*

            && (and) logical operator
            the conditions on both the left and right must be met to run the code block.

            */

            let myFirstName = "John"
            let myLastName = "Smith"

            if (myFirstName === "John" && myLastName === "Angeles"){

                console.log("Hello, " + myFirstName + " " + myLastName)

            } else {
                
                console.log("Wrong Credentials.")

            }


/*
            if(numberExample1%10 === 0){

                if(numberExample1%3 === 0){

                    console.log("The number is divisible by both 10 and 3")

                }

            } else {

                console.log("the number is not divisible by 10")

            }*/

            let numberExample1 = 15


            if (numberExample1%10 === 0 && numberExample1%3 === 0){

                console.log("The number is divisible by both 10 and 3")

            } else {
                console.log("The number is not divisible by 10 or 3")
            }

            /*|| (or) logical operator*/

            let numberExample2 = 30

            if (numberExample2%8 === 0 || numberExample2%3 == 0){

                console.log("The number is divisible by 8 or 3")

            } else {

                console.log("The number is not divisible by 8 and 3")

            }

            /*if else if
                
                use the else if statment to specify a new condition
                if the first condition was not met.

            */

            let dayToday = "wednesday"

            if (dayToday === "monday") {

                //this code will run if the 1st condition was met.
                console.log("I should wear a green shirt.")

            } else if(dayToday === "wednesday") {

                console.log("I should wear purple today.")

            } else if(dayToday === "friday"){

                //this code will run if the 1st condition was not met
                //but the second condition was met.
                console.log("I should wear blue today.")


            } else {

                //this code will run if both conditions were not met.
                console.log("I should wear a pink shirt today.")

            }






//TERNARY OPERATOR
    //the ternary operator (?) is a shorthand way of writing an if...else statement
    //it takes 3 operands in the following format:
    //condition ? (code to run if condition is true) : (code to run if condition is NOT true);

    let numberExample3 = 25

    numberExample3%5 === 0 ? (console.log("It is divisible by 5")) 
    
    : (console.log("It is not divisible by 5")); 

    //the ternary operator shortens your code but also makes it more difficult to read, use with caution

/*********************************************************************************/
