$(document).ready(function() {
	slideShow();});
function slideShow() {
	$('#gallery div').css({opacity: 0.0});
	$('#gallery div:first').css({opacity: 1.0});
	setInterval('gallery()',3000);}
function gallery() {
	var current = ($('#gallery div.show')?  $('#gallery div.show') : $('#gallery div:first'));
	var next = ((current.next().length) ? ((current.next().hasClass('caption'))? $('#gallery div:first') :current.next()) : $('#gallery div:first'));
	var caption = next.find('img').attr('rel');
	next.css({opacity: 0.0})
	.addClass('show')
	.animate({opacity: 1.0}, 1000);
	current.animate({opacity: 0.0}, 1000)
	.removeClass('show');}