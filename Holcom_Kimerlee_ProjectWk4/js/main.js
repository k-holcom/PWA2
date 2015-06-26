$(document).ready(function(){
	/***** MODALS *****/
	/*** Customization ***/
	$('#name').dialog({
		autoOpen: false
	});
	$('#customize').click(function(e){
			$('#name').dialog('open');
	});
	$('#enter').click(addHeader);

	/*** Adding A Task ***/
	$('#addTask').dialog({
		autoOpen: false,
		width:'400px',
	});
	$('#add').click(function(e){
		e.preventDefault();
		$('#addTask').dialog('open');
	});
	$('#addToList').click(function(e){
		e.preventDefault();
		var taskName = $('#taskName').val();
		var taskDescrip = $('#descrip').val();
		var taskDue = $('#dueDate').val();
		//console.log(taskName, taskDescrip, taskDue);
		$('#toDo > table').append('<tr class="toDo"><td>' + taskName + '</td><td>' + taskDescrip + '</td><td>' + taskDue + '</td></tr>');
		$('#addTask').dialog('close');
	});

	/***** BUTTONS *****/
	$('#customize, #add, #addToList').button();

	/***** DATE PICKER *****/
	$('#dueDate').datepicker();
	
	/***** CHECKBOX *****/
	$('.toDo').checkbox();
});

/***** Functions *****/
function addHeader(){
	$('#enter').css('display', 'none');
	$('#title').text("");
	var name = $('#myName').val();
	$('#title').append('Welcome, ' + name + '! These are the things that need to be done.');
	$('#name').dialog('close');

}