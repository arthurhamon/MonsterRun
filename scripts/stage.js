/**
* stage.js
**/

define(['canvas','IM','config'], function(canvas,IM,config) {

	function Stage() {

		this.init = function(){
			this.img 					= document.getElementById('bg');
		   	this.scrollVal 				= 0,
		    this.speed 					= 2;

	        this.render();
		};

	    this.update = function(){

	    };

		this.render = function(){
			if(this.scrollVal >= canvas.canvas.width){
				this.scrollVal = 0;
			}

			this.img.style.backgroundPosition = -this.scrollVal+"px 0";
			this.scrollVal += this.speed;
		};
	};
	return new Stage();
});
