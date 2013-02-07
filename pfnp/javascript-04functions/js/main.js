//functions time!

//A function is a block of code that will run when we call it/execute it
/*

sayHello();

function sayHello(){
	alert("Hello!");
}
*/

//Function with argument
//schoolOffer is the function we are calling and we are passing in harry potter and hogwarts (name and school are arguments you are passing in)
/*
schoolOffer("Harry Potter", "Hogwarts");

function schoolOffer(name, school){
	alert("Congratulations "+name+", you've been accepted to "+school);
}

sayHello("Harry Potter"):
function sayHello(name){
	alert("Hello "+ name):
}
*/

var myName = prompt("Who is it?");

if(myName==="Mom" || myName==="Dad"){
	document.write("zzzzzzzzz.......");
}else if(myName === "Mr. Rooney"){
	document.write("Cough,Cough, Cough");
}else{
	document.write("We've got a big day ahead of us.Let's go to the Cub's game!");
}



//function that does multiplication
/*
var numberThing = 2;
multiply(numberThing);

function multiply(numVal){

	for(i=0;i< 20;i++){
		document.write("<p>"+ numVal * i +"</p>");
	}
}








