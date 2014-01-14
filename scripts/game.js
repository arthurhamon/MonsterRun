/**
 * game.js
**/

define(['config','input','canvas','stage','IM','player','box'], function(config,input,canvas,stage,IM,player,box){
	function Game() {
		
		this.init = function() {
			// init all parts of the game
			stage.init();
			player.init();
			box.init();
		};

		this.update = function() {
			// wcheck for all updates
			player.update();
			box.update();
		};

		this.render = function() {
			// render all elements on the stage
			stage.render();
			player.render();
			box.render();
		};
	}
	return new Game();
});