/*
  Aaron Fernandes - 300773526 
  COMP 308 - Assignment 1
  https://circuat.herokuapp.com/

  Uses the the typeIt jQuery plugin (http://macarthur.me/typeit/)
  Also sets the class on the sidemenu
*/

$(()=>{

	// form string HACK :(
	let fromString = '<form action="/contact" method="post" id="form"><div><label for="name">Name:</label><input type="text" id="name" name="name" /></div><div><label for="mail">E-mail:</label><input type="email" id="mail" name="email" /></div><div><label for="msg">Message:</label><textarea id="msg" name="user_message"></textarea></div><div><!-- NOT SURE WHY THIS DOESNT WORK WITHOUT THE onclick onclick="javascript:document.getElementById(\'form\').submit();" -->    	<input type="submit" class="btn" value="Submit" name="submit">    </div></form>'
	
	// type header
	$("div.header h1.pull-left").typeIt({
		speed: 200,
		cursor: false,
		loop: true,
		loopDelay: 5000
	});


	// type sidemenu
	$("ul.sidemenu li a").typeIt({
		speed: 250,
		cursor: false
	});

	// type body
	$("div.main-content").typeIt({
		speed: 0,
		lifeLike: false,
		callback: ()=>{
			$("#contactform").html(fromString)
		}
	});

  // sets the class in the sidemenu
  switch (window.location.pathname) {
    case '/':
      $($('ul.sidemenu li')[1]).addClass('active');
      break;
    case '/projects':
      $($('ul.sidemenu li')[2]).addClass('active');
      break;
    case '/services':
      $($('ul.sidemenu li')[3]).addClass('active');
      break;
    case '/contact':
      $($('ul.sidemenu li')[4]).addClass('active');
      break;
    case '/about':
      $($('ul.sidemenu li')[5]).addClass('active');
      break;
    default:
      break;
  }


})