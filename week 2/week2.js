/**
 * Created by cameronlewis on 6/2/17.
 */

/** Week 2 Topic: Loops, Conditional Statements, Functions, Variables, Parameters, Arrays, Associative Arrays **/

// this is a variable
var disco = "Dance baby!";

// I'm gonna send the 'disco' variable as an argument
funkyFunction(disco);

// This is a function.
function funkyFunction(disco /* This is a parameter */ ) {

    // use regex to test my "disco" variable for a specific condition
        var regexPattern = /Dance/;

    // These are some conditional statements
    if (regexPattern.test(disco))
        console.log("Let's groove!");
    else
        console.log("We ain't dancin today...")
}

// this is an array being declared and initialized
var array = ['Fred', 'Susan', 'John'];

// this is a loop iterating through an array.
// Fred, Susan, and John will be displayed in the console
for (var i = 0; i < array.length; i++){
    console.log(array[i]);
}

// this is an associative array being declared and initialized.
var person = [];
person["firstName"] = "Cameron";
person["lastName"] = "Lewis";
person["age"] = 29;

// This shows how you access elements of an associative array.
//  My first and last name and my age will be displayed in the console
console.log(person["firstName"]);
console.log(person["lastName"]);
console.log(person["age"]);

