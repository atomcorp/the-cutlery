jQuery(document).ready(function($) {
'use strict';
function scrollDown(){
	$('.move-down').on('click', function(event) {
		event.preventDefault();
		var $this = $(this).find('a'),
			selectedSection = $this.attr('class'),
			offset = $('.primary-info .'+selectedSection).offset().top,
			margin = $('.primary-info .'+selectedSection).css('margin-top');
		offset -= parseInt(margin);
		$('html,body').animate({
			scrollTop: offset},
			800);
	});
}

function getHeights() {
	var windowHeight = $(window).height(),
		top = Math.floor(windowHeight / 2),
		bottom = top;
	$.each($('.selections'), function() {
		var $this = $(this),
			sectionHeight = $this.height() / 2,
			sectionTop = 0, 
			sectionBottom = 0;
		sectionTop = top - sectionHeight;
		sectionBottom = bottom - sectionHeight;
		if (sectionTop < 0) {
			sectionTop = 40;
			sectionBottom = 40;
		}
		$this.css({marginTop:sectionTop,marginBottom:sectionBottom});
	});	
}

function showTabs() {
	$('.info-container').each(function() {
		var $this = $(this);
		var $link = $this.find('a');
		var panel = '';
		$this.on('click', '.info', function(event) {
			event.preventDefault();
			var $link = $(this).find('a.tab-link');
			var id = $link.attr('href');
			$('.detail-text').removeClass('active');
			panel = $(id).addClass('active');
			$('.close-detail').addClass('active');
			$('.info-container').addClass('invisible');
		});
		$('.close-detail').on('click', function(event) {
			event.preventDefault();
			$('.detail-text').removeClass('active');
			$(this).removeClass('active');
			$('.info-container').removeClass('invisible');
		});
	});
}

// http://stackoverflow.com/questions/20990712/jquery-window-resize-equivalent-event-listener-that-only-fires-on-a-speci
var width = 0;

$(window).load(function(){
   width = $(window).width();
});

$(window).resize(function(){
  if(width != $(window).width()){
    getHeights();
    width = $(window).width();
  }
});

scrollDown();
getHeights();
showTabs()
});