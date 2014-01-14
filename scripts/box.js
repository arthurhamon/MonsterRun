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
			    height: 30
			});
			this.boxList.push({
			    x: 600,
			    y: canvas.canvas.height - 200,
			    width: 200,
			    height: 30
			});

		}; 

		this.checkCollision = function(shapeA, shapeB){
			// get the vectors to check against
		    var vX = (shapeA.x + (shapeA.width / 2)) - (shapeB.x + (shapeB.width / 2)),
		        vY = (shapeA.y + (shapeA.height / 2)) - (shapeB.y + (shapeB.height / 2)),
		        // add the half widths and half heights of the objects
		        hWidths = (shapeA.width / 2) + (shapeB.width / 2),
		        hHeights = (shapeA.height / 2) + (shapeB.height / 2),
		        colDir = null;
		 
		    if (Math.abs(vX) < hWidths && Math.abs(vY) < hHeights) { 
		    	var oX = hWidths - Math.abs(vX), oY = hHeights - Math.abs(vY);         
		    	if (oX >= oY) {
		            if (vY > 0) {
		                colDir = "t";
		                shapeA.y += oY;
		            } else {
		                colDir = "b";
		                shapeA.y -= oY;
		            }
		        } else {
		            if (vX > 0) {
		                colDir = "l";
		                shapeA.x += oX;
		            } else {
		                colDir = "r";
		                shapeA.x -= oX;
		            }
		        }
    		}
		    return colDir;
		};

		this.update = function() {

		};

		this.render = function() {

			canvas.ctx.fillStyle = "black";
			canvas.ctx.beginPath();
			for (var i = 0; i < this.boxList.length; i++) {
			    canvas.ctx.rect(this.boxList[i].x, this.boxList[i].y, this.boxList[i].width, this.boxList[i].height);
				player.grounded = false;
				this.dir 		= this.checkCollision(player, this.boxList[i]);	
				if (this.dir === "l" || this.dir === "r") {
				    player.velX = 0;
				    player.jump = false;
				 } else if (this.dir === "b") {
				    player.grounded = true;
				    player.jump = false;
				 } else if (this.dir === "t") {
				    player.velY *= -1;
				 }
			};

			if(player.grounded){
			     player.velY = 0;
			}
			 
			player.x += player.velX;
			player.y += player.velY;
			 
			canvas.ctx.fill();
		}
	}
	return new Box();
});