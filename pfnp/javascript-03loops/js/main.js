//Loops Time

//++ means add one
/*
for(var i=0; i < 10; i++){
	document.write("<p>Ferris was absent "+i+" times</p>");
}
*/
$(function(){

$('#submit').click(function){
		for(var i=0;i<3;i++){
		alert("Ho!");
		$('#submit').css({'border-radius':'5px'});

		}

}); //close jquery