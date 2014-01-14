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
	var gamepad = {
		connected : false,

		up : false,
		right : false,
		down : false,
		left : false,
		
		O : false,
		U : false,
		Y : false,
		A : false,

		l1 : false,
		l2 : false,
		l3 : false,

		r1 : false,
		r2 : false,
		r3 : false,

		// Joysticks
		joystickLeft : {
			axeX : 0,
			axeY : 0
		},
		joystickRight : {
			axeX : 0,
			axeY : 0
		},
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

	var updateGamepadsButtons = function() {
		if (!navigator.webkitGetGamepads)
			return false;

		var gamepads = navigator.webkitGetGamepads();

		gamepad.connected = !! gamepads[0];

		// Si un gamepad est connecté, cet objet sera rempli
		if (!gamepads[0])
			return false;

		// On ne récupère que le 1er gamepad connecté
		var mainGamepad = gamepads[0];

		gamepad.O = mainGamepad.buttons[0] 	=== 1;
		gamepad.r1 = mainGamepad.buttons[5] === 1;
		gamepad.l1 = mainGamepad.buttons[4] === 1;

		gamepad.joystickLeft.axeX = mainGamepad.axes[0];
		gamepad.joystickRight.axeX = mainGamepad.axes[2];

		// Vérification et correction de la marge d'erreur renvoyée sur les Axes par l'API Gamepad
		gamepad.joystickRight.axeX = ( Math.abs(0 - gamepad.joystickRight.axeX) > 0.15) ? gamepad.joystickRight.axeX : 0;
		gamepad.joystickRight.axeY = ( Math.abs(0 - gamepad.joystickRight.axeY) > 0.15) ? gamepad.joystickRight.axeY : 0;
		
	};

	return {
		keyboard : keyboard,
		gamepad : gamepad,
		updateGamepadsButtons : updateGamepadsButtons
	};

});