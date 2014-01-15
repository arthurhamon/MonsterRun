/**
 * player.js
**/

define(['canvas','input','config','IM'], function(canvas,input,config,IM){
	function Player() {

		this.init = function() {
			this.img 		 = IM.getInstance('assets/img/player');
			this.img.width   = 100;
			this.img.height  = 85;
			// Positions and speed
			this.x 			 = 100;
			this.y 			 = 560;
			this.speed 		 = 3;
			// Horizontal and vertical movements
			this.velX 		 = 0;
			this.velY 		 = 0;
			// Jumping
			this.friction 	 = 0.8;
			this.jump 		 = false;
			this.gravity 	 = 0.3;
		}; 

		this.update = function() {

			// Move the player
			this.x 		+= this.velX;
			this.y 		+= this.velY;
			this.velX 	*= this.friction;

			// Prevent the player from falling
			if(this.y >= 560){
			    this.y = 560;
			    this.jump = false;
			}

			// Verify that the player can't leave of the canvas
			if (this.x < 0) this.x = 0;
			if (this.x + this.width > canvas.canvas.width)   this.x = canvas.canvas.width - this.width;

			if (input.gamepad.connected) {
				this.gamepadCharacterController();
			}else{
				this.characterKeyboardController();
			}

		};

		this.gamepadCharacterController = function(){
			if(input.gamepad.O){
				if(!this.jump){
					this.jump = true;
					this.velY = -this.speed*2;
			  	}
			}
			if(input.gamepad.O == false){
				this.velY 	+= this.gravity;
			}
			
			if(input.gamepad.joystickLeft.axeX){
				this.x += input.gamepad.joystickLeft.axeX * this.speed;
			}

			// Limit height when the player jump
			if(this.y <= 200){
				this.velY 	+= this.gravity;
			}
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
			if(this.y <= 200){
				this.velY 	+= this.gravity;
				console.log(this.y);
			}
		};

		this.render = function() {
		    canvas.ctx.drawImage(this.img.data, this.x, this.y, this.img.width, this.img.height);
		}
	}

	return new Player();
});