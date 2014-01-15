/**
 * main.js
**/

require.config({
	paths : {
		'IIG' : '../lib/IIG'
	},
	shim : {
		'IIG' : {
			'exports' : 'IIG',
			'deps' : []
		}
	}
});

require(['game', 'IM', 'IIG', 'config'], function(game, ImagesManager, IIG, config) {

	ImagesManager.add('assets/img/bkg2.jpg');
	ImagesManager.add('assets/img/player.png');

	ImagesManager.loadAll(function() {
		// Initialisation du jeu
		game.init();

		// Premier appel pour entrer dans la boucle de jeu infinie
		requestAnimFrame(GameLoop);
	});

	// Loop
	function GameLoop(t) {
		config.TIMING = t;

		game.update();
		game.render();

		requestAnimFrame(GameLoop);
	}

});

// shim layer with setTimeout callback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function checkCollision(shapeA,shapeB){
	var a_top = shapeA.y,
    a_bottom = shapeA.y + shapeA.img.height,
    a_left = shapeA.x ,
    a_right = shapeA.x + shapeA.img.width,
    b_top = shapeB.y,
    b_bottom = shapeB.y + shapeB.height,
    b_left = shapeB.x,
    b_right = shapeB.x + shapeB.width;

  	if (a_bottom > b_top && a_bottom < b_bottom && a_left < b_right && a_right > b_left){
   		return 'top';
    }

    if (a_top < b_bottom && a_bottom > b_bottom && a_left < b_right && a_right > b_left){
   		return 'bottom';
    }

};

function collide(a,b){
	var ax = a.x || a.position.x;
	var ay = a.y || a.position.y;
	var bx = b.x || b.position.x;
	var by = b.y || b.position.y;

	return !(bx >= ax + a.width // Trop à droite
				|| bx + b.width <= ax // Trop à gauche
				|| by >= ay + a.height // Trop en bas
				|| by + b.height <= ay) // Trop en haut
}