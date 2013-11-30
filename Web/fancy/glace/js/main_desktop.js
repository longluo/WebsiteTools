// vars

var particles = [];

var geometries = [];
var possibleGeom = [0,1,2,3,4,5,6,6,6,7,7,7];
var numGeoms = 8;
var currGeom = 1;

var textures = [];

var currLight2 = 0;
var light2;
var light;

var mouseX,mouseY;

var ctxRef;
var canvasRef,canvasContainer;
var bgRatio = 2600/1511;

var letters = [108,207,323,382,485,636,693,790,878,1022];
var letterCenter = [{x:80,y:99},{x:152,y:138},{x:266,y:119},{x:352,y:114},{x:423,y:117},{x:571,y:100},{x:667,y:97},{x:750,y:125},{x:828,y:120},{x:933,y:101}];

var isBgLoaded = false;
var isCanvasLoaded = false;
var is3dLoaded = false;
var isTextureLoaded = false;
var bg,bar;
var container3d;

var renderer,camera,scene,composer;

// consts

var MAX_AFFECTED_DISTANCE = 90;

//Create main container
var container = document.createElement('div');
container.setAttribute('class','fade');
document.body.appendChild(container);

//Init ref image
var refImage = new Image();
refImage.onload = function(){
	//On image load, create canvas
	canvasContainer = document.createElement('div');
	canvasContainer.style.position = 'absolute';
	canvasContainer.style.width = (refImage.width+350)+'px';
	canvasContainer.style.height = (refImage.height+350)+'px';
	canvasContainer.style.top = '50%';
	canvasContainer.style.left = '50%';
	canvasContainer.style.marginTop = (-(refImage.height+350)/2-80)+'px';
	canvasContainer.style.marginLeft = (-(refImage.width+350)/2)+'px';
	container.appendChild(canvasContainer);

	canvasRef = document.createElement("canvas");
	canvasRef.width = refImage.width+350;
	canvasRef.height = refImage.height+350;

	var typoImage = new Image();
	typoImage.src = 'assets/ref_typo.png';
	typoImage.style.marginLeft = '175px';
	typoImage.style.marginTop = '175px';
	canvasContainer.appendChild(typoImage);

	ctxRef = canvasRef.getContext('2d');

	ctxRef.drawImage(refImage,(canvasRef.width-refImage.width)/2,(canvasRef.height-refImage.height)/2);

	initParticles();

	isCanvasLoaded = true;
	checkLoadStatus();
};

refImage.src = 'assets/ref_typo_canvas.png';

// bg load

var bgImage = new Image();
bgImage.onload = function(){

	var bgContainer = document.getElementById('bg');
	bgContainer.appendChild(bgImage);
	bgImage.setAttribute('id', 'bg-image');

	isBgLoaded = true;
	onWindowResize();
	checkLoadStatus();
};

bgImage.src = 'assets/bg.jpg';

// 

function getTexturePathByIndex(index){
	return 'assets/3d/crystal' + index + '_nowire.jpg';
}

// texture preloading

var loadProgress = 1;
var imageLoading = null;
loadNextTexture();

function loadNextTexture(){
	imageLoading = new Image();
	imageLoading.onload = onTextureLoaded;
	imageLoading.src = getTexturePathByIndex(loadProgress);
}

function onTextureLoaded(e){

	loadProgress++;

	if(loadProgress > numGeoms){
		isTextureLoaded = true;
		checkLoadStatus();
	}
	else { loadNextTexture(); }
}

// load status

function checkLoadStatus(){

	if(isCanvasLoaded && isBgLoaded && isTextureLoaded){
		animateIn();
	}
}

// first resize

$(window).resize(onWindowResize);

// intro animation

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

	setTimeout(function(){
		
		//console.log("ok go");
		
		init3d();
		$(window).mousemove(onWindowMouseMove);

	}, 2200);	
}

//Function : Init particles
function initParticles(){
	var i = 0;

	//Draw ref image on ref canvas
	ctxRef.drawImage(refImage,(canvasRef.width-refImage.width)/2,(canvasRef.height-refImage.height)/2);
	//Get the pixels of the image
	var pixels = ctxRef.getImageData(0,0,canvasRef.width,canvasRef.height);

	//Create 600 crystals
	for(i=0;i<500;i++){
		var pX = Math.floor(Math.random()*canvasRef.width);
		var pY = Math.floor(Math.random()*canvasRef.height);

		var flag=false;
		while(!flag){
			pX = Math.floor(Math.random()*canvasRef.width);
			pY = Math.floor(Math.random()*canvasRef.height);
			a = pixels.data[(pX+(canvasRef.width*pY))*4+3];
			
			//This select the position of the next particle to be over the text and at least 6 pixels away from any other particles
			if(a != 0){
				if(particles.length == 0){
					flag = true;
				}
				else{
					var smallD = 300;
					for(var j=0;j<particles.length;j++){
						var d = particleDistance({posX:pX,posY:pY},particles[j]);
						if(d<smallD){
							smallD = d;
						}
					}
					if(smallD>6){
						flag = true;
					}
				}
			}
		}

		//Determine what letter the particle is on
		var letter = 0;
		for(var j=0;j<letters.length;j++){
			if(j==0){
				if(pX >= 0 && pX<letters[j]+175){
					letter = j;
					continue;
				}
			}
			else{
				if(pX >= letters[j-1]+175 && pX<letters[j]+175){
					letter = j;
					continue;
				}
			}
		}

		var geom = possibleGeom[Math.floor(Math.random()*(possibleGeom.length))];

		//Define the scale of the particle between small and big

		// var r = pixels.data[(pX+(canvasRef.width*pY))*4];
		// var s = 25*0.9;
		// if(geom == 3 || geom==8 && r == 0){
		// 	if(Math.random()>0.2){
		// 		s = 45*0.8;
		// 	}
		// }

		var r = pixels.data[(pX+(canvasRef.width*pY))*4];

		if(r == 0){
			// not red
			s = 25 * (0.8 + Math.random() * 0.1);
		}
		else {
			// red
			s = 12 * (0.8 + Math.random() * 0.1);
		}

		if((geom == 3 || geom==8) && r == 0){

			// special geometry

			if(Math.random()>0.2){
				s = 42*(0.8 + Math.random() * 0.1);
			}
		}

		//Add the particle object to the particle array
		particles.push({
			posX:pX,posY:pY,
			orX:pX,orY:pY,
			isAffected:false,
			isInRadius:false,
			scale:s,
			currScale:0,
			numScaleStep:Math.floor(Math.random()*2+2),
			currScaleStep:0,
			lastScaleStep:0,
			scaleFactor:0,
			highestFactor:0,
			addScale:0,
			isAffected:false,
			ticksSinceActive:0,
			ticksSinceInactive:0,
			startingInactiveScale:0,
			ticksToShrink:Math.floor(Math.random()*20+15),
			affectedDistance:MAX_AFFECTED_DISTANCE,
			letter:letter,
			geom:geom,
			hasGrown:0,
			growSpeed:Math.random()*0.3 + 0.6,
			creepSpeed:Math.random()*0.6 + 0.2
		});
	}
}

//Function : Init 3d world
function init3d(){

	try {  
		renderer = new THREE.WebGLRenderer({antialias:true});
	}
	catch(e){ return; }

	//
	
	camera = new THREE.PerspectiveCamera(33, canvasRef.width / canvasRef.height, 1, 20000);
	scene = new THREE.Scene();
    
	scene.fog = new THREE.Fog(0x000000,200, 0);

	camera.position.z = 850;
	camera.position.y = 0;
	
	camera.lookAt(new THREE.Vector3());

	// init the renderer

	renderer.setSize(canvasRef.width, canvasRef.height);
	renderer.domElement.style.position = 'absolute';
	renderer.domElement.style.top = '0px';
	renderer.domElement.style.left = '0px';
	canvasContainer.appendChild(renderer.domElement);

	renderer.autoClear = false;

	//

	var renderModel = new THREE.RenderPass( this.scene, this.camera );
	var effectScreen = new THREE.ShaderPass( THREE.ShaderExtras[ "screen" ] );

	effectScreen.renderToScreen = true;

	composer = new THREE.EffectComposer( this.renderer );

	composer.addPass( renderModel );
	composer.addPass( effectScreen );       		

	//Load first crystal geometry
	var jsonLoader = new THREE.JSONLoader();
	jsonLoader.load('assets/3d/crystal'+(currGeom)+'_tex2.js',geomLoaded);
	
	//Init lights
	light = new THREE.PointLight(0xcbcbcb, 0.5);
	light.position.z = 15000;
	light.position.x = 15000;
	light.position.y = 15000;
	scene.add(light);

	light2 = new THREE.PointLight(0xf0f0f0, 0.15);
	light2.position.z = 2000;
	light2.position.x = 0;
	light2.position.y = 0;
	scene.add(light2);

	var ambiantLight = new THREE.HemisphereLight(0xcbcbcb,0xcbcbcb,1);
	scene.add(ambiantLight);
}

//Function: When geometry is loaded, load the next one
function geomLoaded(geometry){

	//add geometry to the geometry array
	geometries.push(geometry);

	//compute vertex normals for texturing to work properly
	geometry.computeVertexNormals();

	//load the texture of this geometry
	var tex = THREE.ImageUtils.loadTexture(getTexturePathByIndex(currGeom));

	//add the texture the the textures array
	textures.push(tex);
	
	currGeom++;

	//If all the geometries have been loaded, init the 3d objects
	if(currGeom == numGeoms+1){
		initObjects();
	}
	else{
		var jsonLoader = new THREE.JSONLoader();
		jsonLoader.load('./assets/3d/crystal'+(currGeom)+'_tex2.js',geomLoaded);
		//console.log(currGeom);
	}
}

//Function: Init the 3d objects
function initObjects(){

	//Create a container to hold the 3d objects
	container3d = new THREE.Object3D();
	scene.add(container3d);
	container3d.position.z = -105;

	//Create a 3d object for each crystal

	for(var i=0;i<particles.length;i++){

   		var p = particles[i];

   		var cube = new THREE.Mesh(geometries[p.geom],new THREE.MeshLambertMaterial({map:textures[p.geom],shading:THREE.FlatShading}));
   		cube.position.x = p.posX-canvasRef.width/2;
   		cube.position.y = -p.posY+canvasRef.height/2;

   		//rotate crystal based on the center of the closest letter
 		cube.rotation.z = -(p.posX - (letterCenter[p.letter].x+175))*0.02 + (Math.random()-0.5);
   		cube.rotation.x = (p.posY - (letterCenter[p.letter].y+280))*0.015 + Math.PI + (Math.random()-0.5);
   		//cube.scale.set(0,0,0);
   		container3d.add(cube);

   		p.mesh = cube;
   	}

   	//When 3d objects are create, start the animation loop
   	animate();
   	onWindowResize();
}

//Function: on mouse move
function onWindowMouseMove( event )
{
	mouseX = event.clientX-$(canvasContainer).offset().left;
	mouseY = event.clientY-$(canvasContainer).offset().top;
}

//Function : animate, main loop
function animate() {
	requestAnimationFrame( animate );
	
	update();
	draw();
}

function getPositionByTime(t, b, c, d){
	t /= d/2;
	if (t < 1) return c/2*t*t*t*t*t + b;
	t -= 2;
	return c/2*(t*t*t*t*t + 2) + b;
};

//Function : Update the particles position, scale and rotation
function update(){

	for(var i=0;i<particles.length;i++){
		var p = particles[i];

		//Get distance between mouse and particle origin to see if particles should be affected by the mouse
		var distanceorx = mouseX-p.orX;
		var distanceory = mouseY-p.orY;
		var distanceor = Math.sqrt((distanceorx * distanceorx) + (distanceory * distanceory));

		if(distanceor < MAX_AFFECTED_DISTANCE){

			if(!p.isAffected){
				p.isInRadius = true;
				p.isAffected = true;
				p.hasGrown = 0;
				p.highestFactor = 0;
				p.ticksSinceActive = 32 + parseInt(Math.random() * 3) //24; // how many ticks before shrinking
			}

			if(distanceor < p.affectedDistance){ p.affectedDistance = distanceor; }
			//p.affectedDistance = distanceor;
		}
		if(distanceor >= MAX_AFFECTED_DISTANCE && p.isAffected){

			if(p.ticksSinceActive > 0){ p.ticksSinceActive--; }
			else {
				p.isInRadius = false;
				p.isAffected = false;
				p.affectedDistance = MAX_AFFECTED_DISTANCE;
				p.ticksSinceInactive = 0;
				p.addScale = 0;
			}
		}

		var numScaleStep;

		if(p.isAffected){
			p.scaleFactor = (MAX_AFFECTED_DISTANCE-p.affectedDistance)/MAX_AFFECTED_DISTANCE;
			if(p.scaleFactor<0){
				p.scaleFactor=0;
			}
			if(p.scaleFactor > p.highestFactor){
				p.highestFactor = p.scaleFactor;
			}
			numScaleStep = Math.round(p.numScaleStep*p.scaleFactor);
		}
		else{
			numScaleStep = Math.round(p.numScaleStep*p.highestFactor);
		}

		var lastScaleStep = p.currScaleStep;
		var scaleStep = Math.floor(p.scale/p.numScaleStep);
		var scaleDown = 0;

		var newScaleX = 0;
		var newScaleY = 0;
		var newScaleZ = 0;

		if(p.isAffected){

			p.hasGrown++;

			if(p.currScale < (scaleStep*numScaleStep)-0.005){
				p.currScale += (scaleStep*p.currScaleStep - p.currScale)*p.growSpeed;
				if(((scaleStep*p.currScaleStep) - p.currScale)<0.005 && p.currScaleStep<numScaleStep){
					p.currScaleStep++;
				}				
			}

			if(p.currScale > ((scaleStep*numScaleStep)+0.005) && p.isInRadius){
				p.currScale += (scaleStep*p.currScaleStep - p.currScale)*p.growSpeed;
				if((p.currScale - (scaleStep*p.currScaleStep))<0.005 && p.currScaleStep>0){
					//p.currScaleStep--;
				}
			}

			if(p.addScale < (scaleStep*numScaleStep)*0.1 && p.scaleFactor>0.5){
				p.addScale += p.creepSpeed*0.065;
			}
		}
		else{
			
			// shrinking

			if(p.currScale > 0.01){
					
				if(p.ticksSinceInactive == 0){ 
					 p.startingInactiveScale = p.currScale;
				}
				p.ticksSinceInactive ++;

				if(p.hasGrown > 20){
					
					var speedMultiplier = getPositionByTime(p.ticksSinceInactive, 0, 1, p.ticksToShrink);
					p.currScale = p.startingInactiveScale*(1-speedMultiplier);

					/*

					if(p.currScale > p.scale*0.3){
						p.currScale += -p.currScale*p.growSpeed*0.02;
					}
					else
						p.currScale += -p.currScale*p.growSpeed*0.2;
					}

					*/

					p.currScaleStep = 0;
				}
				else{

					p.currScaleStep = numScaleStep;
					scaleDown = (scaleStep*p.currScaleStep - p.currScale)*p.growSpeed;
					p.currScale += scaleDown;

					if(((scaleStep*p.currScaleStep) - p.currScale)<0.005){
						p.hasGrown = 30;
					}
				}
			}
		}

		if(p.scale < 40){
			newScaleX = (p.currScale+p.addScale)*1.2
			newScaleY = p.currScale+p.addScale;
			newScaleZ = (p.currScale+p.addScale)*1.2;
		}
		else{
			newScaleX = newScaleY = newScaleZ = p.currScale+p.addScale;
		}

		if(newScaleX < 0.1){ newScaleX = 0.1; }
		if(newScaleY < 0.1){ newScaleY = 0.1; }
		if(newScaleZ < 0.1){ newScaleZ = 0.1; }

		p.mesh.scale.set(newScaleX, newScaleY, newScaleZ);
		p.currScale = p.currScale+p.addScale;

		//Update light position
		light2.position.x = Math.cos(currLight2)*2000;
		light2.position.y = Math.sin(currLight2)*2000;
		currLight2+=0.00006;

		// update last

		p.lastScaleStep = lastScaleStep;
	}
}

//Function : Calculate angle between 2 points
function calcAngle(x1, x2, y1, y2){
	var calcAngle = Math.atan2(x1-x2,y1-y2);
	return calcAngle;
}

//Function : Render the 3d scene
function draw(){
	renderer.clear();
	composer.render();
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

function particleDistance( p1, p2 )
	{
	  var xs = 0;
	  var ys = 0;
	 
	  xs = p2.posX - p1.posX;
	  xs = xs * xs;
	 
	  ys = p2.posY - p1.posY;
	  ys = ys * ys;
	 
	  return Math.sqrt( xs + ys );
	}