$(document).ready(function(){

	/**************** MAIN NAVIGATION ****************/
	var nav = $('nav ul li').children();

	/**************** MOUSE ENTER -- ANIMATION/DROPDOWN MENU ****************/
	nav.on('mouseenter', function(){
		if($(this).text() === "Forums"){
			$('#forum').slideDown();
		}else if($(this).text() != "Forums"){
			$('#forum').slideUp();
		}
	});


	/**************** CLICK FUNCTIONS ****************/
	nav.on('click', function(){
		$('header').animate({'top': '0'}, 'slow');
		$('section').fadeIn('slow');
		var link = ($(this).text().toLowerCase());

		if(link === 'home'){
			$('#forums, #gallery').css('display', 'none');
			$('#home').fadeIn('slow');
		}else if(link === 'forums'){
			$('#home, #gallery').css('display', 'none');
			$('#forums').fadeIn('slow');
		}else if(link === 'gallery'){
			$('#home, #forums').css('display', 'none');
			$('#gallery').fadeIn('slow');
		}
	});
	$('#forum li').children().on('click', function(){
		$('section').fadeIn('slow')
		$('header').animate({'top': '0'}, 'slow');
		console.log($(this).text());
		$('#home, #gallery').css('display', 'none');
		
	});
	
});