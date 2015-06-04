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

	target1.css('backgroundColor', 'orange');
	console.log(offset.top);
	console.log(position.top);

	/****** Target 2 ******/
	var target2 = $('#contentleft li:eq(1)');
	target2.css('margin-left', '30px');

	/****** Target 3 ******/
	$('#contentleft li:last').css('color', 'red');
	var width = $('#contentleft li').last().width();
	console.log(width);

	/****** Target 4 ******/
	var target4 = $('#contentright').children('h3');
	target4.css('float', 'right');
	target4.addClass('listhead');
	console.log(target4.hasClass('listhead'));

	/****** Target 5 ******/
	$('#contentright li:nth-child(3)').children().attr('href', 'http://www.yahoo.com');
	$('#contentright li:not(:first)').children().attr('href', "http://www.notgoogle.com");


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
	$('#navleft > li').children().css({
		'color': '#e50',
		'font-size': '14px'
	});
	$('#navleft').clone().appendTo('#navright');
	$('#navright li').children().css('font-size', '30px');
});