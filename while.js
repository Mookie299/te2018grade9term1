const READLINE = require("readline-sync");

function countdown() {
	 let i = 11
 while(i>0){
 	i--;
 	console.log(i);
 } 
}
 countdown();

function getPassword() { 
let word = READLINE.question("What is the password ? ");
	if(word == 1987){
	return console.log("congrats");
}else{
	while(READLINE.question("what is the password ? "));
}

}
//getPassword();

function getPasswordEnhanced() {
let guess = READLINE.question("What is the password");
let password = 1026
let count = 3 

	while(password != guess && count > 0){
		console.log("wrong pass");
		guess = READLINE.question("What is the password? ");
		count--;
}

if(count == 0){
	console.log("No more tries.");

}else{
	console.log("You guessed it !!");

}

}
getPasswordEnhanced();


function getPasswordFinal() {

}
/**** Problem 4 ****
As a final enhancement, make it so when the user enters the wrong password, the
program tells them that they are wrong, along with how many attempts they've
made so far.
*/
