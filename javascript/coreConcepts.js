// this is a single line comment in JavaScript

/*Block comment - good for whole sections being turned off*/

//variables

//STRING DATA TYPE
var firstName = "jason"; // setting a variable
firstName = "bob"; //using a var--in this case changing the value of the variable
//var myQuote = '"What is a Week\'s End?"';//print the quotes and escape the plural single quote
var myQuote = '"What is a Week End?"'; //But this works because the important thing is that there's only one of the pair so the balance is OK
var myComment = "Who said this:";
//console.log(myComment);//shows the value of myComment to the console when we reload
//console.log(myQuote);

var message = myComment + " " + myQuote;
//console.log(message);

//target and replace elements on the page
var paragraphRef = document.getElementById("replace");
paragraphRef.innerHTML = message;

/**** NUMBER DATA TYPE ****/

var level = 1;
//console.log(level);

/****  ARRAY ****/

//var cars = ["", "", ""];

