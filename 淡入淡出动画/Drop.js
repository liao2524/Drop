$(document).ready(function() {
	$('.drop').hover(function() {
		$('.drop_menu').show().stop().animate({
			top: 70,
			opacity: 1},
			500);
			
	}, function() {
		$('.drop_menu').stop().animate({
			top: 135,
			opacity: 0},
			500,function () {
				$('.drop_menu').hide();
			});
	});
	$('.settings').hover(function() {
		$('.settings_menu').stop().animate({
			left: 200,
			opacity: 1},
			500);
	}, function() {
		$('.settings_menu').stop().animate({
			left: 400,
			opacity: 0},
			500);
	});
	$('.more').hover(function() {
		$('.more_menu').stop().animate({
			left: 200,
			opacity: 1},
			500);
	}, function() {
		$('.more_menu').stop().animate({
			left: 400,
			opacity: 0},
			500);
	});
	$('.deeper').hover(function() {
		$('.deeper_menu').stop().animate({
			left: 200,
			opacity: 1},
			500);
	}, function() {
		$('.deeper_menu').stop().animate({
			left: 400,
			opacity: 0},
			500);
	});	
});