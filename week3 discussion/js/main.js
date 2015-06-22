$.get({
	url			:'https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=kimerleeHolcom&screen_name=kimerleeHolcom HTTP/1.1',
	dataType 	: 'data',
	success		: function(data){
		console.log(data);
	}
})

$.ajax({
	url			:'https://maps.googleapis.com/maps/api/directions/json?origin=Toronto&destination=Montreal&key=AIzaSyDlPFnedKlct62Fpd5ozRQrec4vK2KL85o',
	dataType 	: 'json',
	success	 	: function(parsed_json){
		alert('yay');
	},
	error		: function(parsed_json){
		;
	}
});