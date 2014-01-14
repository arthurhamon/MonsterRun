/**
 * player.js
**/

define(['canvas','input','config','IM','player'], function(canvas,input,config,IM,player){
	function Box() {

		this.boxList = [];

		this.init = function() {
			this.boxList.push({
			    x: 50,
			    y: 400,
			    width: 100,
			    height: 60
			});
			this.boxList.push({
			    x: 600,
			    y: canvas.canvas.height - 200,
			    width: 200,
			    height: 60
			});

		}; 

		this.update = function() {
			for (var i = 0; i < this.boxList.length; i++){
				var collision = checkCollision(player, this.boxList[i]);

				if(collision == 'bottom'){
					player.velY = this.boxList[i].y + this.boxList[i].height;
					player.velY += player.gravity;
				}
				if(collision == 'top'){
					player.y = this.boxList[i].y - player.img.height;
				}
			};

		};

		this.render = function(){

			canvas.ctx.fillStyle = "black";
			canvas.ctx.beginPath();

			var e;
			for (var i = 0; i < this.boxList.length; i++){
			    canvas.ctx.fillRect(this.boxList[i].x, this.boxList[i].y, this.boxList[i].width, this.boxList[i].height);
			};
		}
	}
	return new Box();
});