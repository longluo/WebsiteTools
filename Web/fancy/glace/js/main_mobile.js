
var ctxRef;
var canvasRef,canvasContainer;
var bgRatio = 1600/930;

var isBgLoaded = false;
var isCanvasLoaded = false;
var is3dLoaded = false;
var bg,bar;
var container3d;

//Create main container
var container = document.createElement('div');
container.setAttribute('class','fade');
document.body.appendChild(container);

//Init ref image

var main_image = new Image();
main_image.src = './assets/ref_typo_mobile.png';
main_image.onload = function(){	

	container.appendChild(main_image);
	main_image.setAttribute('style','position:absolute; top:50%; left:0px; right:0px; margin: -223px auto 0 auto;');

	isCanvasLoaded = true;
	if(isCanvasLoaded || isBgLoaded){
		animateIn();
	}
};

var bgImage = new Image();
bgImage.onload = function(){

	var bgContainer = document.getElementById('bg');
	bgContainer.appendChild(bgImage);
	bgImage.setAttribute('id', 'bg-image');

	isBgLoaded = true;
	onWindowResize();
	if(isCanvasLoaded || isBgLoaded){
       animateIn();
   }
};

var logo = document.getElementById('logo').getElementsByTagName('img')[0];
logo.src = './assets/logo-retina.png';

bgImage.src = 'assets/bg.jpg';

$(window).resize(onWindowResize);

function animateIn(){

	onWindowResize();

	var bg = document.getElementById('bg');
	var bar = document.getElementById('bar');
	var barBG = document.getElementById('bar-bg');
	var logo = document.getElementById('logo');
	var content = document.getElementById('content');
	var header = document.getElementById('header');

	bg.style.opacity = '1';
	bar.style.opacity = '1';
	barBG.style.opacity = '0.8';
	logo.style.opacity = '1';
	content.style.opacity = '1';
	container.style.opacity = '1';
	header.style.opacity = '1';
}

//Function:resize background
function onWindowResize(event){
	var bgWidth,bgHeight;
	var wWidth = $(window).width();
	var wHeight = $(window).height()
	var windowRatio = wWidth/wHeight;
	if(bgRatio>windowRatio){
		bgHeight = wHeight;
		bgWidth = bgHeight*bgRatio;
	}
	else{
		bgWidth = wWidth;
		bgHeight = bgWidth/bgRatio;
	}

	$('#bg').css('left',((wWidth-bgWidth)/2)+'px');
	//$('#bg').css('top',((wHeight-bgHeight)/2)+'px');
	$('#bg').find('img').css('width',bgWidth+'px');
	$('#bg').find('img').css('height',bgHeight+'px');

	$('video').css('width',bgWidth+'px');
	$('video').css('height',bgHeight+'px');
}

