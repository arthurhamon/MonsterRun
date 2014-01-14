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