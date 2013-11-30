if($('html').hasClass('touch')){ head.js("js/main_mobile.js"); }
else { head.js("js/main_desktop.js"); }

$('#start-btn a').click(function(e){
	e.preventDefault();
});

$(document).ready(function(){
	
	var animatedArrow = new AnimatedSprite();

	$('#start-btn a').hover(function(e){
		animatedArrow.rewind();
	}, function(e){
	});

});

function AnimatedSprite(options){

	// display preloader

	if(options == undefined){ options = {}; }

	if(!options.url){ options.url = "assets/arrow_spritesheet.png"; }
	if(!options.elementID){ options.elementID = "start-arrow"; }
	if(!options.xOffset){ options.xOffset = 0; }
	if(!options.yOffset){ options.yOffset = 0; }
	if(!options.frameWidth){ options.frameWidth = 18; }
	if(!options.frameHeight){ options.frameHeight = 18; }
	if(!options.totalFrames){ options.totalFrames = 8; }
	if(!options.framesPerRow){ options.framesPerRow = 3; }
	if(!options.loopFrame){ options.loopFrame = 1; }
	if(!options.loopDelay){ options.loopDelay = 16; }
	if(!options.initialDelay){ options.initialDelay = 1; }	
	if(!options.looping){ options.looping = false; }	
	
	var self = this;

	self.frame = 0;
	self.frameCounter = 0;

	// vars set via options

	self.url = options.url;
	self.elementID = options.elementID;
	self.xOffset = options.xOffset;
	self.yOffset = options.yOffset;
	self.frameWidth = options.frameWidth;
	self.frameHeight = options.frameHeight;
	self.totalFrames = options.totalFrames;
	self.framesPerRow = options.framesPerRow;
	self.loopFrame = options.loopFrame;
	self.loopDelay = options.loopDelay; // frames
	self.initialDelay = options.initialDelay; // frames
	self.looping = options.looping;

	//

	self.animationContainer = document.getElementById(self.elementID);
	self.animationInterval;

	self.stopTriggered = false;

	// create canvas

	self.initAnimation = function(){
		self.rewind();
	}

	self.animate = function(){

	    if(self.frameCounter > self.initialDelay){

	      var frameRow = (self.frame < self.totalFrames-1) ? parseInt(self.frame / self.framesPerRow) : parseInt((self.totalFrames-1) / self.framesPerRow);
	      var frameCol = (self.frame < self.totalFrames-1) ? self.frame % self.framesPerRow : (self.totalFrames-1) % self.framesPerRow;

	      var x = clipX = -frameCol * self.frameWidth;
	      var y = clipY = -frameRow * self.frameHeight;
	      var width = clipWidth = self.frameWidth;
	      var height = clipHeight = self.frameHeight;

	      clipX += self.xOffset;
	      clipY += self.yOffset;
	      
	      if(self.preloaderImage.src){
	      	self.preloaderImage.style.marginLeft = clipX + "px";
	      	self.preloaderImage.style.marginTop = clipY + "px";
	      }

	      if(self.stopTriggered){ window.clearInterval(self.animationInterval); }
	      else if(self.frame >= self.totalFrames && !self.looping && !self.stopTriggered){ 
	      	self.stopTriggered = true; 
	      	self.frame = 0;
	      } 
	      else {
		      if(self.frame >= self.totalFrames + self.loopDelay){ 
		      	self.frame = self.loopFrame;
		      }
		      else { self.frame++; }
		    }
	  }

	  self.frameCounter++;
	}

	self.rewind = function(){

	  var frameDelay = 1000/40;

	  self.animationContainer.appendChild(self.preloaderImage);

	  self.preloaderImage.className = "over";
	  self.preloaderImage.width = 64;
	  self.preloaderImage.height = 64;

	  self.frame = 0;
	  self.frameCounter = 0;

	  if(self.animationInterval){ window.clearInterval(self.animationInterval); }
	  
	  self.animationInterval = window.setInterval(self.animate, frameDelay);        
	  self.animate();

		self.stopTriggered = false;
	}

	self.preloaderImage = new Image();      
	self.preloaderImage.onLoad = self.initAnimation();
	self.preloaderImage.src = options.url;

}