/**
 * player.js
**/

define(['canvas','input','config','IM'], function(canvas,input,config,IM){
	function Player() {

		this.init = function() {
			this.img 		= IM.getInstance('assets/img/player');
			this.img.width  = 100;
			this.img.height = 85;
			// Positions and speed
			this.x 			= 100;
			this.y 			= 560;
			this.width 		= 20;
			this.height 	= 20;
			this.speed 		= 3;
			// Horizontal and vertical movements
			this.velX 		= 0;
			this.velY 		= 0;
			// Jumping
			this.friction 	= 0.4;
			this.jump 		= false;
			this.gravity 	= 0.1;
			this.grounded   = false;
		}; 

		this.update = function() {

			// Move the player
			this.x 		+= this.velX;
			this.y 		+= this.velY;
			this.velX 	*= this.friction;
			this.velY 	+= this.gravity;

			// Prevent the player from falling
			if(this.y >= 560){
			    this.y = 560;
			    this.jump = false;
			}

			// Verify that the player can't leave of the canvas
			if (this.x < 0) this.x = 0;
			if (this.x + this.width > canvas.canvas.width)   this.x = canvas.canvas.width - this.width;

			this.characterKeyboardController();

		};

		this.characterKeyboardController = function() {
			if (input.keyboard.left){
				if (this.velX > -this.speed){this.velX--;}
		    }
			if (input.keyboard.right){
				if (this.velX < this.speed) {this.velX++;}   
       		}
       		if (input.keyboard.up) {
				if(!this.jump){
					this.jump = true;
					this.velY = -this.speed*2;
			  	}
			}
		};

		this.render = function() {
		    canvas.ctx.drawImage(this.img.data, this.x, this.y, this.img.width, this.img.height);
		}
	}

	return new Player();
});