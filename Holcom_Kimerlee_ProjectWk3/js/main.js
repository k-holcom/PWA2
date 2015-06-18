$(document).ready(function(){
	$('#home').click(function(){
		$('.currentSection, .hourlySection, .ten').css('display', 'none');
		$('.home').fadeIn();
	});
	$('#current, .button.current').click(function(){
		$('.home, .hourlySection, .ten').css('display', 'none');
		$('.currentSection').fadeIn();
	});
	$('#hourly, .button.hourly').click(function(){
		$('.home, .currentSection, .ten').css('display', 'none');
		$('.hourlySection').fadeIn();
	});
	$('#tenDay, .button.tenDay').click(function(){
		$('.home, .currentSection, .hourlySection').css('display', 'none');
		$('.ten').fadeIn();
	});

	for(var i = 0; i < 3; i++){

	}
});

$.ajax({     
	url     	: "http://api.wunderground.com/api/5e3a20593de64f5f/conditions/q/PA/Clintonville.json",
	dataType	: "json",
	success		: function(parsed_json){

		/***** CURRENT CONDITIONS *****/
		var city = parsed_json['current_observation']['display_location']['full'];
		var currentTempF = parsed_json['current_observation']['temp_f'];
		var currentTempC = parsed_json['current_observation']['temp_c'];
		var currentIcon = parsed_json['current_observation']['icon_url']
		var currentCondition = parsed_json['current_observation']['icon'];
		$('.city').html(city);
		$('#temp').html("It is currently " + currentTempF + "°F / " + currentTempC + "°C");
		$('#currentIcon').html('<img src="' + currentIcon + '" alt="' + currentCondition + '" />');
		$('#currentCondition').html(currentCondition);
		



	}
});

$.ajax({     
	url     	: "http://api.wunderground.com/api/5e3a20593de64f5f/forecast/q/PA/Clintonville.json",
	dataType	: "json",
	success		: function(parsed_json){

		/***** 3-DAY FORCAST *****/
		var dayConditions = parsed_json['forecast']['simpleforecast']['forecastday'];
		for(var i = 1; i < dayConditions.length; i++){
			$('#threeday').append('<div class="threeday"><div class="day">' + dayConditions[i].date.weekday + 
				'</div><div class="Icon"><img src="' + dayConditions[i].icon_url + 
				'" alt="' + dayConditions[i].icon +
				'" /></div><div class="Condition">' + dayConditions[i].conditions +
				'</div><div class="highTemp">' + dayConditions[i].high.fahrenheit +
				'°F</div><div class="lowTemp">' + dayConditions[i].low.fahrenheit +
				'°F</div></div>');
		}

	}
});

$.ajax({
	url 		:"http://api.wunderground.com/api/5e3a20593de64f5f/hourly/q/PA/Clintonville.json",
	dataType	:"json",
	success		:function(parsed_json){
		var hours = parsed_json['hourly_forecast'];

		/***** HOURLY FORECAST *****/
		for(var j = 0; j < hours.length; j++){
			$('#hourlyConditions').append('<tr><td>' + hours[j].FCTTIME.civil + 
				'</td><td><img src="' + hours[j].icon_url + 
				'" alt="' + hours[j].condition +
				'"</td><td>' + hours[j].temp.english + 
				'°F</td><td>' + hours[j].condition + 
				'</td><td>' + hours[j].pop + 
				'%</td><td>' + hours[j].humidity + 
				'%</td></tr>')
		}
	}
});

$.ajax({
	url 		:"http://api.wunderground.com/api/5e3a20593de64f5f/forecast10day/q/PA/Clintonville.json",
	dataType	:"json",
	success		:function(parsed_json){
		var dayInfo = parsed_json['forecast']['simpleforecast']['forecastday'];
		for(var k = 0; k < dayInfo.length; k++){
			/***** 10-DAY FORECAST *****/
			$('#tenForecast').append(
				'<div class="tenday"><div class="day">' + dayInfo[k].date.weekday + 
				'</div><div class="Icon"><img src="' + dayInfo[k].icon_url +
				'" alt="' + dayInfo[k].icon +
				'" /></div><div class="Condition">' + dayInfo[k].conditions +
				'</div><div class="highTemp">' + dayInfo[k].high.fahrenheit + 
				'°F</div><div class="lowTemp">' + dayInfo[k].low.fahrenheit +
				'°F</div></div>'
			)
		}
	}
});



















