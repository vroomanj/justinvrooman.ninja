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
	$('#left-nav-icon').click(function(){
		$(this).toggleClass('closed');
	});
});

$(document).ready(function(){
	$('.offcanvas').bind('hide.bs.offcanvas', function() {
    	$('#left-nav-icon').toggleClass('closed');
	});
});