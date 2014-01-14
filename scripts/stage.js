/**
* stage.js
**/

define(['canvas','IM','config'], function(canvas,IM,config) {
	
	function Stage() {

		this.init = function(){
			this.img 					= IM.getInstance('assets/img/bkg2');
		   	this.scrollVal 				= 0,
		    this.speed 					= 10;
		    this.imgWidth        		= this.img.width,
	        this.imgHeight       		= this.img.height;
	        canvas.canvas.width  		= this.imgWidth;
	        canvas.canvas.height 		= this.imgHeight;    
	        
	        this.render();
		};

	    this.update = function(){
	    	
	    };

	    this.render = function(){
            canvas.ctx.clearRect(0,0,canvas.canvas.width,canvas.canvas.height);

		    if(this.scrollVal >= canvas.canvas.width){
		        this.scrollVal = 0;
		    }

		    this.scrollVal += this.speed;
		    canvas.ctx.drawImage(this.img.data,-this.scrollVal,0,this.imgWidth, this.imgHeight);
		    canvas.ctx.drawImage(this.img.data,canvas.canvas.width-this.scrollVal,0,this.imgWidth, this.imgHeight);

	    };
		
	};

	return new Stage();

});