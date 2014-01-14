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

// shim layer with setTimeout fallback
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       ||
          window.webkitRequestAnimationFrame ||
          window.mozRequestAnimationFrame    ||
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();

function checkCollision(a, b){
	var a_top = a.y,
    a_bottom = a.y + a.img.height,
    a_left = a.x ,
    a_right = a.x + a.img.width,
    b_top = b.y,
    b_bottom = b.y + b.height,
    b_left = b.x,
    b_right = b.x + b.width;

  	if (a_bottom > b_top && a_bottom < b_bottom && a_left < b_right && a_right > b_left){
  		console.log('top');
   		return 'top';
    }

    if (a_top < b_bottom && a_bottom > b_bottom && a_left < b_right && a_right > b_left){
  		console.log('bottom');
   		return 'bottom';
    }

   //  if (a_top < b_bottom && a_bottom > b_bottom && a_left < b_right && a_right > b_left){
   // return 'bottom';
   //  }
};