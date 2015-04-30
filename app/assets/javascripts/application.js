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
	    if ($(this).scrollTop()) {
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