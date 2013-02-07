
$(function(){
	//Write jquery in here using $ thingy, # is for referencing ID


	$('#santa').css({'border':'5px solid #FBFFDB'});


	
	$('#link-money').attr('target','_blank');
	$('#whatup').attr('target','_blank');

	$('#submit').click(function(){
		for(var i=0;i<3;i++){
		alert("Ho!");
		$('#submit').css({'border-radius':'5px'});

	// 	}
	
	// });


	// 	$('#submit').click(function(){
	// 		alert("Thanks for signing up. You're fucking awesome");
	// 	});
		$('#register').submit(function (e) {

			if ("" === $("#name").val()) {
				e.preventDefault();
			}

		});


}); //close jquery