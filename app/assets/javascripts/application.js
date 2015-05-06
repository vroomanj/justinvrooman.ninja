// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery.turbolinks
//= require jquery_ujs
//= require bootstrap
//= require jasny-bootstrap
//= require turbolinks
//= require markdown.converter
//= require markdown.sanitizer
//= require markdown.editor

$(document).ready(function(){
	$('.offcanvas').bind('show.bs.offcanvas', function() {
    	$('#left-nav-icon').removeClass('closed');
	});
});

$(document).ready(function(){
	$('.offcanvas').bind('hide.bs.offcanvas', function() {
    	$('#left-nav-icon').addClass('closed');
	});
});

//jQuery(function($){
//	var lastScrollTop = 0;
//	$(window).scroll(function(event){
//		var st = $(this).scrollTop();
//		if (st > lastScrollTop){
//			// downscroll code
//		} else {
//			// upscroll code
//		}
//		lastScrollTop = st;
//	});
//});

jQuery(function($){
	$(window).scroll(function() {
	    if ($(this).scrollTop()>=$(this).height()) {
	        $('#toTop').fadeIn();
	    } else {
	        $('#toTop').fadeOut();
	    }
	});
});

jQuery(function($){
	$("a[href='#top']").click(function() {
	  $("html, body").animate({ scrollTop: 0 }, "slow");
	  return false;
	});
});

jQuery(function($){
	$(document).ready(function() {
		if ( $(window).width() <= 768 ) {
			$(".fa-arrow-up").addClass("fa-2x");
			$(".fa-arrow-up").removeClass("fa-5x");
		}
	});
});

jQuery(function($){
	$(window).resize(function() {
		if ( $(window).width() <= 768 ) {
			$(".fa-arrow-up").addClass("fa-2x");
			$(".fa-arrow-up").removeClass("fa-5x");
		} else {
			$(".fa-arrow-up").addClass("fa-5x");
			$(".fa-arrow-up").removeClass("fa-2x");
		}
	});
});

jQuery(function($){
	$("a[href='#about']").click(function() {
		$("html, body").animate({ scrollTop: $("a[name='about']").offset().top }, "slow");
	   return false;
	});
});

jQuery(function($){
	$("a[href='#systems']").click(function() {
		$("html, body").animate({ scrollTop: $("a[name='systems']").offset().top }, "slow");
	   return false;
	});
});

jQuery(function($){
	$("a[href='#hardware']").click(function() {
		$("html, body").animate({ scrollTop: $("a[name='hardware']").offset().top }, "slow");
	   return false;
	});
});

jQuery(function($){
	$("a[href='#network']").click(function() {
		$("html, body").animate({ scrollTop: $("a[name='network']").offset().top }, "slow");
	   return false;
	});
});

jQuery(function($){
	$("a[href='#education']").click(function() {
		$("html, body").animate({ scrollTop: $("a[name='education']").offset().top }, "slow");
	   return false;
	});
});

jQuery(function($){
	$(document).ready(function() {
		if !(/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
			$.stellar({
				horizontalScrolling: false,
				verticalScrolling: true,
				horizontalOffset: 0,
	  			verticalOffset: 0
			});
		}
	});
});