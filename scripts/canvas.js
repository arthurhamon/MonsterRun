/**
 * canvas.js
**/

define([], function() {
	var canvas = document.createElement('canvas');
	var ctx = canvas.getContext('2d');

	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	canvas.style.position = 'absolute';
	canvas.style.top = 0;
	canvas.style.left = 0;
	canvas.style.right = 0;
	canvas.style.bottom = 0;

	// Ajout du canvas à la page
	window.document.body.appendChild(canvas);

	return {
		canvas : canvas,
		ctx : ctx
	};
});