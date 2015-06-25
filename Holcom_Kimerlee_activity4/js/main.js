$(document).ready(function(){
	/***** SELECT MENU *****/
	$('#categories').selectmenu();

	/***** BUTTONS *****/
	$('#search, #home, .submit, #finished').button();

	/***** NAV SUB MENU *****/
	$('#mainNav li').on('mouseenter', function(){
		var menuName = $(this).text().toLowerCase();
		if(menuName === 'categories'){
			$('#subMenu').slideToggle();
			$(this).click(function(){
				$('#subMenu').slideDown();
			});
		}else{
			$('#subMenu').slideUp();
		}

	});

	/***** DIALOG BOXES/MODALS *****/
	$('#loginBox, #signUpBox, #editBox').dialog({
		autoOpen: false
	});
	$('#login').click(function(){
		$('#loginBox').dialog('open');
	});

	$('#signUp').click(function(){
		$('#signUpBox').dialog('open');
	});

	$('#edit').click(function(e){
		e.preventDefault();
		$('#editBox').dialog('open');
	});

	$('#finished').click(function(){
		$('#editBox').dialog('close');
	});

	/***** ACCORDION *****/
	$('#sections').accordion({
		active: false,
		collapsible: true,
		autoHeight: false
	});

	/***** DRAGGABLE/DROPPABLE *****/
	$('.draggable').draggable();
	$('.droppable').droppable({
		accept: '.draggable',
		hoverClass: 'highlight',
		tolerance: 'fit',
		drop:function(e, ui){
			
			$('#finished').click(function(){
				$('#chosenIcon').empty();
				$('#chosenIcon').append('<img src="img/sm' + ui.draggable.attr('id') + '.png" alt="' + ui.draggable.attr('id') +'" />');
			});
		}
	});

	/***** TOOLTIPS *****/
	$('.username, .password, .email').on('mouseover', function(){
		$(this).tooltip();
	});
	
});