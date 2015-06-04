/*
Description: Week 1 Project
Author: Kimerlee Holcom
Date: June 4, 2015
*/

$(document).ready(function(){
	/****** Target 1 ******/
	var target1 = $('#contentleft ul');
	var offset = target1.offset();
	var position = target1.position();

	//change color of background of the unordered list
	target1.css('backgroundColor', 'orange');

	//printing the top offset and position to the console
	console.log(offset.top);
	console.log(position.top);

	/****** Target 2 ******/
	var target2 = $('#contentleft li:eq(1)');

	//make the left margin 30px for the 2nd link in list
	target2.css('margin-left', '30px');

	/****** Target 3 ******/
	//change the text color of last list item to red
	$('#contentleft li:last').css('color', 'red');

	//printing the last list item's width to console
	var width = $('#contentleft li').last().width();
	console.log(width);

	/****** Target 4 ******/
	var target4 = $('#contentright').children('h3');

	//changing float to right
	target4.css('float', 'right');

	//add a class to the h3
	target4.addClass('listhead');

	//check to see if class was added
	console.log(target4.hasClass('listhead'));

	/****** Target 5 ******/
	//changing 3rd list item link to yahoo.com
	$('#contentright li:nth-child(3)').children().attr('href', 'http://www.yahoo.com');

	//changing all but the first link to notgoogle.com
	$('#contentright li:not(:first)').children().attr('href', "http://www.notgoogle.com");

	/******  BONUS  ******/
	/****** Target 6 ******/
	/** Creates #navleft ul **/
	$('div:last').append('<ul></ul>');
	$('div:last ul:first').attr('id', 'navleft');

	/** Creates #navright ul **/
	$('div:last').append('<ul></ul>');
	$('div:last ul:last').attr('id', 'navright');

	/** For Loop 1-10 **/
	for(var i = 1; i <= 10; i++){	
		$('<li><a href="#">' + i + '</a></li>').appendTo('#navleft');
	}
	//change text color and font size of list
	$('#navleft > li').children().css({
		'color': '#e50',
		'font-size': '14px'
	});

	//clones list to the #navright
	$('#navleft').clone().appendTo('#navright');

	//changes font-size of #navright
	$('#navright li').children().css('font-size', '30px');
});