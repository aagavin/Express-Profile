// http://macarthur.me/typeit/

$(function(){

		// type header
	$("div.header h1.pull-left").typeIt({
		speed: 200,
		cursor: false,
		loop: true,
		loopDelay: 5000
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