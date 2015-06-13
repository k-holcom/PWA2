$(document).ready(function(){

	/**************** MAIN NAVIGATION ****************/
	var nav = $('nav ul li').children();

	/**************** MOUSE ENTER -- ANIMATION/DROPDOWN MENU ****************/
	nav.on('mouseenter', function(){
		if($(this).text() === "Forums"){
			$('#forum').slideDown();
		}else if(($(this).text() != "Forums")){
			$('#forum').slideUp();
		}
	});

	$('section').on('mouseenter', function(){
		$('#forum').slideUp();
	});

	/**************** CLICK FUNCTIONS ****************/
	nav.on('click', function(){
		//Move Header up to top from middle
		$('header').animate({'top': '0'}, 'slow');
		$('section').fadeIn('slow');
		var link = ($(this).text().toLowerCase());

		/**************** TABBED/ACCORDIAN PANEL ****************/
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

	/**************** MODAL ****************/
	$('.modClick').click(function(e){
		//Open Modal
		e.preventDefault();
		$('#modBG').fadeIn();
	});

	$('#close').click(function(e){
		//Close Modal
		e.preventDefault();
		$('#modBG').fadeOut();
	});

	/**************** TOOLTIP ****************/
	$('.tool').hover(function(){
		//Display ToolTip
		var title = $(this).attr('title');
		$(this).data('tipText', title).removeAttr('title');
		$('<p class="tooltip"></p>').text(title).appendTo('body').fadeIn();

	}, function(){
		//Remove ToolTip
		$(this).attr('title', $(this).data('tipText'));
		$('.tooltip').remove();
	}).mousemove(function(e){
		//Place Tooltip at mouse point
		var mX = e.pageX;
		var mY = e.pageY;
		$('.tooltip').css({'top' : mY, 'left': mX});
	});
});