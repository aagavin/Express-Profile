// http://macarthur.me/typeit/

$(function(){

	// type header
	$("div.header h1").typeIt({
		speed: 300,
		cursor: false
	});

	// type sidemenu
	$("ul.sidemenu li a").typeIt({
		speed: 500,
		cursor: false
	});

	// type body
	$("div.main-content").typeIt({
		speed: 0,
		lifeLike: false,
		html: true
	});
})