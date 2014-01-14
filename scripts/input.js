/**
 * input.js
**/

define([], function(){
	
	var keyboard = {
		up : false,
		right : false,
		down : false,
		left : false,
		space : false
	};

	document.addEventListener('keydown', function(evt) {
		keyboard.left 	= evt.keyCode === 37 ? true : keyboard.left;
		keyboard.up 	= evt.keyCode === 38 ? true : keyboard.up;
		keyboard.right 	= evt.keyCode === 39 ? true : keyboard.right;
	});

	document.addEventListener('keyup', function(evt) {
		keyboard.left 	= evt.keyCode === 37 ? false : keyboard.left;
		keyboard.up 	= evt.keyCode === 38 ? false : keyboard.up;
		keyboard.right 	= evt.keyCode === 39 ? false : keyboard.right;
	});

	return {
		keyboard : keyboard
	};

});