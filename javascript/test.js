
var myQuote = '"What is a Week End?"'; //But this works because the important thing is that there's only one of the pair so the balance is OK
var myComment = "Who said this:";
//console.log(myComment);//shows the value of myComment to the console when we reload
//console.log(myQuote);

var message = myComment + " " + myQuote;
//console.log(message);

//target and replace elements on the page
var paragraphRef = document.getElementById("replace");
paragraphRef.innerHTML = message;

