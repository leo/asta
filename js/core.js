$(document).ready(function() {

	$('ul.nav li.g').click(function() {
	
		if ( $('.login').attr('style') == 'display: block;' ) {
			$( ".login" ).fadeToggle( "fast" );
			$( ".login" ).toggleClass("active");
			$(this).toggleClass("active");
		} else {
			$(".navbox.active").fadeToggle(0);
			$( ".navbox.active" ).toggleClass("active");
			$("li.active").toggleClass("active");
			
			$( ".login" ).fadeToggle( "fast" );
			$( ".login" ).toggleClass("active");
			$(this).toggleClass("active");
		}
		
	});
	
	$('ul.nav li.h').click(function() {
	
		if ( $('.search').attr('style') == 'display: block;' ) {
			$( ".search" ).fadeToggle( "fast" );
			$( ".search" ).toggleClass("active");
			$(this).toggleClass("active");
		} else {
			$(".navbox.active").fadeToggle(0);
			$( ".navbox.active" ).toggleClass("active");
			$("li.active").toggleClass("active");
			
			$( ".search" ).fadeToggle( "fast" );
			$( ".search" ).toggleClass("active");
			$(this).toggleClass("active");
		}
		
	});

});
