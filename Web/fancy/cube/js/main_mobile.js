		var particles = [];
		var affectedParticles = [];
		var textParticles = [{x:19,y:56},{x:24,y:58},{x:19,y:25},{x:30,y:35},{x:32,y:24},{x:55,y:23},{x:120,y:26},{x:122,y:24},{x:98,y:33},{x:66,y:30},{x:94,y:25},{x:102,y:56},{x:74,y:73},{x:89,y:47},{x:57,y:96},{x:86,y:74},{x:64,y:114},{x:84,y:79},{x:55,y:132},{x:71,y:97},{x:37,y:125},{x:17,y:162},{x:17,y:162},{x:39,y:155},{x:25,y:150},{x:23,y:167},{x:53,y:164},{x:82,y:75},{x:123,y:166},{x:77,y:165},{x:121,y:166},{x:92,y:162},{x:97,y:159},{x:79,y:159},{x:109,y:155},{x:126,y:128},{x:121,y:127},{x:147,y:135},{x:148,y:136},{x:113,y:325},{x:185,y:245},{x:1083,y:14},{x:997,y:54},{x:200,y:235},{x:1143,y:177},{x:565,y:567},{x:295,y:299},{x:1106,y:108},{x:165,y:126},{x:146,y:110},{x:155,y:80},{x:162,y:115},{x:167,y:82},{x:181,y:66},{x:172,y:66},{x:185,y:61},{x:205,y:61},{x:225,y:70},{x:237,y:93},{x:218,y:88},{x:201,y:68},{x:155,y:236},{x:222,y:116},{x:239,y:124},{x:228,y:147},{x:212,y:163},{x:219,y:145},{x:198,y:163},{x:195,y:170},{x:176,y:166},{x:168,y:149},{x:163,y:161},{x:273,y:80},{x:264,y:101},{x:261,y:117},{x:275,y:118},{x:277,y:102},{x:324,y:104},{x:293,y:102},{x:342,y:96},{x:322,y:97},{x:289,y:97},{x:289,y:65},{x:312,y:60},{x:337,y:76},{x:321,y:77},{x:323,y:77},{x:277,y:157},{x:269,y:149},{x:290,y:146},{x:295,y:169},{x:317,y:169},{x:344,y:155},{x:342,y:150},{x:315,y:159},{x:328,y:66},{x:359,y:69},{x:373,y:64},{x:388,y:30},{x:393,y:33},{x:390,y:61},{x:376,y:74},{x:392,y:75},{x:419,y:73},{x:421,y:65},{x:391,y:103},{x:373,y:120},{x:391,y:128},{x:374,y:144},{x:375,y:160},{x:389,y:170},{x:404,y:167},{x:423,y:160},{x:421,y:155},{x:395,y:159},{x:441,y:69},{x:473,y:60},{x:469,y:72},{x:444,y:74},{x:453,y:75},{x:468,y:107},{x:454,y:134},{x:460,y:111},{x:468,y:137},{x:469,y:157},{x:455,y:158},{x:440,y:166},{x:472,y:165},{x:486,y:164},{x:485,y:168},{x:453,y:25},{x:469,y:40},{x:452,y:37},{x:462,y:22},{x:470,y:26},{x:502,y:118},{x:506,y:149},{x:529,y:168},{x:559,y:167},{x:579,y:154},{x:577,y:149},{x:555,y:158},{x:532,y:153},{x:520,y:137},{x:514,y:105},{x:522,y:80},{x:509,y:90},{x:522,y:65},{x:547,y:61},{x:570,y:64},{x:574,y:66},{x:573,y:93},{x:566,y:92},{x:548,y:66},{x:499,y:126},{x:656,y:45},{x:658,y:39},{x:653,y:55},{x:657,y:81},{x:685,y:99},{x:715,y:115},{x:680,y:86},{x:669,y:71},{x:669,y:36},{x:687,y:29},{x:666,y:29},{x:695,y:21},{x:728,y:30},{x:730,y:59},{x:727,y:63},{x:699,y:29},{x:699,y:29},{x:699,y:29},{x:716,y:43},{x:694,y:81},{x:727,y:102},{x:736,y:133},{x:727,y:138},{x:726,y:155},{x:711,y:157},{x:704,y:168},{x:677,y:168},{x:655,y:159},{x:652,y:128},{x:657,y:129},{x:672,y:154},{x:775,y:75},{x:757,y:112},{x:766,y:85},{x:794,y:62},{x:777,y:104},{x:762,y:133},{x:773,y:157},{x:803,y:169},{x:797,y:159},{x:779,y:138},{x:816,y:159},{x:833,y:162},{x:852,y:134},{x:836,y:131},{x:854,y:100},{x:833,y:98},{x:840,y:72},{x:815,y:61},{x:820,y:72},{x:788,y:73},{x:871,y:24},{x:873,y:29},{x:885,y:28},{x:884,y:156},{x:886,y:80},{x:883,y:43},{x:901,y:14},{x:900,y:51},{x:901,y:110},{x:885,y:125},{x:901,y:76},{x:901,y:158},{x:899,y:133},{x:915,y:163},{x:914,y:167},{x:870,y:163},{x:871,y:168},{x:890,y:165},{x:899,y:89},{x:900,y:125},{x:749,y:346}];
		var perlin = new ImprovedNoise();
		var mouseX,mouseY;
		var targetX = 0;
		var targetY = 0;
		var targetRadius = 0;
		var ctx,ctxRef;
		var canvas,canvasRef,canvasContainer;
		var ongoingTouches = [];
		var ongoingMasks = [];
		var bgRatio = 1600/930;

		var isBgLoaded = false;
		var isCanvasLoaded = false;
		
		//Create main container
		var container = document.createElement('div');
		container.setAttribute('class','fade');
		document.body.appendChild(container);

		//Init ref image
		var ref_image = new Image();
		ref_image.src = './assets/ref_typo.png';
		ref_image.onload = function(){
			//On image load, create canvas
			canvasContainer = document.createElement('div');
			canvasContainer.style.position = 'absolute';
			canvasContainer.style.width = (ref_image.width+350)+'px';
			canvasContainer.style.height = (ref_image.height+350)+'px';
			canvasContainer.style.top = '50%';
			canvasContainer.style.left = '50%';
			canvasContainer.style.marginTop = (-(ref_image.height+350)/2-90)+'px';
			canvasContainer.style.marginLeft = (-(ref_image.width+350)/2)+'px';
			container.appendChild(canvasContainer);

			canvasRef = document.createElement("canvas");
			canvasRef.width = ref_image.width+350;
			canvasRef.height = ref_image.height+350;
			canvasContainer.appendChild(canvasRef);

			canvas = document.createElement("canvas");
			canvas.width = ref_image.width+350;
			canvas.height = ref_image.height+350;
			canvas.style.position = 'absolute';
			canvas.style.top = '0px';
			canvas.style.left = '0px';
			canvasContainer.appendChild(canvas);

			ctxRef = canvasRef.getContext('2d');
			ctx = canvas.getContext('2d');

			initParticles();

			isCanvasLoaded = true;
			if(isCanvasLoaded || isBgLoaded){
				animateIn();
			}
		};

		var logo = document.getElementById('logo').getElementsByTagName('img')[0];
		logo.src = './assets/logo-retina.png';

		var bgImage = document.getElementById('bg-image');
		bgImage.onload = function(){
			isBgLoaded = true;
			if(isCanvasLoaded || isBgLoaded){
				animateIn();
			}
		};

		//Init flowers sprites
		var sprite1 = new Image();
		sprite1.src = './assets/sprite1.png';
		var sprite2 = new Image();
		sprite2.src = './assets/sprite2.png';
		var sprite3 = new Image();
		sprite3.src = './assets/sprite3.png';

		var sprites = [sprite1,sprite2,sprite3];
		
		//Add mouse move event
		window.addEventListener('touchstart', onWindowMouseStart, false);
		window.addEventListener('touchmove', onWindowMouseMove, false);
		window.addEventListener('touchend', onWindowMouseEnd, false);

		$(window).bind('orientationchange', onWindowResize);
		$(window).resize(onWindowResize);
		onWindowResize();

		function animateIn(){

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

		function onWindowMouseStart( evt )
		{
			evt.preventDefault();
			var touches = evt.changedTouches;
			for (var i=0; i<touches.length; i++) {
    			ongoingTouches.push(touches[i]);
    			ongoingMasks.push({posY:0,radius:0,pLength:0,targetRadius:0});
			}
		}
		
		function onWindowMouseMove( evt )
		{
			evt.preventDefault();
			var touches = evt.changedTouches;
			for (var i=0; i<touches.length; i++) {
    			var idx = ongoingTouchIndexById(touches[i].identifier);
    			ongoingTouches.splice(idx, 1, touches[i]);  // swap in the new touch record
			}
		}

		function onWindowMouseEnd( evt )
		{
			evt.preventDefault();
			var touches = evt.changedTouches;
			for (var i=0; i<touches.length; i++) {
			    var idx = ongoingTouchIndexById(touches[i].identifier);
			    ongoingTouches.splice(idx, 1);  // remove it; we're done
			    ongoingMasks.splice(idx, 1);  // remove it; we're done
			}
		}

		function ongoingTouchIndexById(idToFind) {
		  for (var i=0; i<ongoingTouches.length; i++) {
		    var id = ongoingTouches[i].identifier;
		     
		    if (id == idToFind) {
		      return i;
		    }
		  }
		  return -1;    // not found
		}

		//Function : Init particles
		function initParticles(){
			var i = 0;

			//Draw ref image on ref canvas
			ctxRef.drawImage(ref_image,(canvasRef.width-ref_image.width)/2,(canvasRef.height-ref_image.height)/2);
			//Get the pixels of the image
			var pixels = ctxRef.getImageData(0,0,canvasRef.width,canvasRef.height);

			//Add text particles
			for(i=0;i<200;i++){
				var pX = Math.floor(Math.random()*canvasRef.width);
				var pY = Math.floor(Math.random()*canvasRef.height);

				var a = pixels.data[(pX+(canvasRef.width*pY))*4+3];
				while(a==0){
					pX = Math.floor(Math.random()*canvasRef.width);
					pY = Math.floor(Math.random()*canvasRef.height);
					a = pixels.data[(pX+(canvasRef.width*pY))*4+3];
				}

				//Test to see if this particle is going to be an anchor
				var anchor = false;
				if(Math.random()>0.85){
					anchor = true;
				}

				particles.push({
					touchID:0,
					dist:0,
					posX:pX,posY:pY,
					orX:pX,orY:pY,
					isAffected:false,
					isOut:false,
					outDest:Math.random()*15,
					outCount:0,
					charge:30,
					scale:0,
					scaleNoise:Math.random(),
					scaleNoiseSpeed:Math.random()*0.005,
					offX:Math.random(),offY:Math.random(),
					noiseAmount:Math.random()*2,
					randSpeed:Math.random()*0.01,
					angle : 0,
					hasRepulsion : false,
					isAnchor:anchor,
					isSprite : false,
					mag:Math.random()*40+160
				});
			}

			//Run through all the pixel to create particles where there is text
			for(i=0;i<canvasRef.width;i++){
				for(var j=0;j<canvasRef.height;j++){
					//Get the alpha of that pixel
					var a = pixels.data[(i+(canvasRef.width*j))*4+3];
					
					//If alpha is more than 0, create a particle at that position
					if(a>0 && Math.random()>0.996){
						var repulsion = true;
						var anchor = false;
						var isS = false;
						var c = 30;
						var sFactor = 0.06;

						//Test to see if the particle will be an anchor
						if(Math.random()>0.85){
							anchor = true;
						}
						//Test to see if the particle is gonna be a sprite
						else if(Math.random()>0.45 && repulsion){
							isS = true;
							c = Math.random()*5+25;
							if(Math.random()>0.4){
								sFactor = 0.03;
							}
						}

						//Add particle
						particles.push({
							touchID:0,
							dist:0,
							posX:i,posY:j,
							orX:i,orY:j,
							isAffected:false,
							isOut:false,
							outDest:Math.random()*15,
							outCount:0,
							charge:c,
							scale:0,
							scaleFactor:sFactor,
							scaleNoise:Math.random(),
							scaleNoiseSpeed:Math.random()*0.005,
							offX:Math.random(),offY:Math.random(),
							noiseAmount:Math.random()*10,
							randSpeed:Math.random()*0.01,
							angle : 0,
							hasRepulsion : repulsion,
							isAnchor:anchor,
							sprite:sprites[Math.floor(Math.random()*sprites.length)],
							isSprite : isS,
							mag:Math.random()*40+300
						});
					}
				}
			}

			//$(window).mousemove(onWindowMouseMove);
			animate();
		}
		
		//Function: on mouse move
		/*function onWindowMouseMove( event )
		{
			mouseX = event.clientX-$(canvasContainer).offset().left;
			mouseY = event.clientY-$(canvasContainer).offset().top;
			targetX += (mouseX-targetX)*0.2;
			targetY += (mouseY-targetY)*0.2;
		}*/
		
		//Function : animate, main loop
		function animate() {
			requestAnimationFrame( animate );
			//stats.update();
			
			update();
			draw();
		}
		
		//Function : Update the particles position, scale and rotation
		function update(){
			var containerLeft = $(canvasContainer).offset().left;
			var containerTop = $(canvasContainer).offset().top;

			for(var i=0;i<particles.length;i++){
				var p = particles[i];

				//Get distance between mouse and particle origin to see if particles should be affected by the mouse
				var distanceorx;
				var distanceory;
				var distanceor;

				//If the distance is less than 60 the particle gets affected
				if(!p.isAffected){
					for(var j=0;j<ongoingTouches.length;j++){
						distanceorx = (ongoingTouches[j].pageX-containerLeft)-p.orX;
						distanceory = (ongoingTouches[j].pageY-containerTop)-p.orY;
						distanceor = Math.sqrt((distanceorx * distanceorx) + (distanceory * distanceory));

						if(distanceor<60){
							p.isAffected = true;
							p.touchID = j+0;
							affectedParticles.push(p);
						}
					}
				}
				/*if(distanceor<100 && !p.isAffected){
					p.isAffected = true;
					affectedParticles.push(p);
				}*/
				//If the distance is more than 100 the particle gets desaffected
				else {
					if(ongoingTouches[p.touchID]){
						distanceorx = (ongoingTouches[p.touchID].pageX-containerLeft)-p.orX;
						distanceory = (ongoingTouches[p.touchID].pageY-containerTop)-p.orY;
						distanceor = Math.sqrt((distanceorx * distanceorx) + (distanceory * distanceory));

						if(distanceor>110){
							//Particle gets desaffected
							p.isAffected = false;
							//remove particle from affected array
							for(var j=0;j<affectedParticles.length;j++){
								if(affectedParticles[j] == p){
									affectedParticles.splice(j,1);
									j = 10000;
								}
							}
						}
					}
					else{
						p.isAffected = false;
						//remove particle from affected array
						for(var j=0;j<affectedParticles.length;j++){
							if(affectedParticles[j] == p){
								affectedParticles.splice(j,1);
								j = 10000;
							}
						}
					}
				}

				if(!p.isAffected){
					//add force that brings the particle back to it's origin
					p.posX += (p.orX-p.posX)*0.2;
					p.posY += (p.orY-p.posY)*0.2;
					//Update scale back to 0
					p.scale += -p.scale*0.2;
				}

				

				//Update distance to origin
				distanceorx = p.posX-p.orX;
				distanceory = p.posY-p.orY;
				distanceor = Math.sqrt((distanceorx * distanceorx) + (distanceory * distanceory));
				p.dist = distanceor;

				//Update angle
				p.angle = calcAngle(p.orX,p.posX,p.orY,p.posY);
			}

			for(i=0;i<affectedParticles.length;i++){
				var p = affectedParticles[i];

				if(!p.isSprite){
					if(p.hasRepulsion){
						//Add main repulsion force from the mouse
						var repelforce = new Vector2(p.posX,p.posY);
						repelforce.minusEq(new Vector2(ongoingTouches[p.touchID].pageX-containerLeft,ongoingTouches[p.touchID].pageY-containerTop)); 
		 				
						mag = repelforce.magnitude(); 
		 				repelstrength = (mag - p.mag) *-1; 

						if(mag>0){
		 					repelforce.multiplyEq(repelstrength/mag*0.2);
							p.posX += repelforce.x;
							p.posY += repelforce.y;
						}
										
						if(i<affectedParticles.length-1){
							//Got through the particle to calculate repulsion force between the particles
							for(var j=i+1;j<affectedParticles.length;j++){
								var p2 = affectedParticles[j];
								if(p2.hasRepulsion){
									var repelforce = new Vector2(p2.posX,p2.posY);
									repelforce.minusEq(new Vector2(p.posX,p.posY)); 
									mag = repelforce.magnitude(); 
									repelstrength = 150-mag; 
								
									if((repelstrength>0)&&(mag>0))	{
										repelforce.multiplyEq(repelstrength*0.025 / mag); 
										p.posX -= repelforce.x;
										p.posY -= repelforce.y;
										p2.posX += repelforce.x;
										p2.posY += repelforce.y;
									}
								}
							}
						}
					}
				}
				else{
					if(ongoingTouches[p.touchID]){
						//add main force for sprite particles
						var distancex = ongoingTouches[p.touchID].pageX-containerLeft-p.posX;
						var distancey = ongoingTouches[p.touchID].pageY-p.posY;
						var distance = Math.sqrt((distancex * distancex) + (distancey * distancey));

						var powerx = -(distancex/distance)*p.charge;
						var powery = -(distancey/distance)*p.charge;
								
						//add repulsion force from the mouse
						p.posX += powerx;
						p.posY += powery;
					}

					//Update scale
					var chargePerc = 1-((p.charge-23)/15);
					var noise = (perlin.noise(p.scaleNoise,0,0))*10;
					p.scale += ((chargePerc*30+noise)-p.scale)*0.2;
					p.scale = 10;

					p.scaleNoise+=p.scaleNoiseSpeed;
				}

				//add force that brings the particle back to it's origin
				p.posX += (p.orX-p.posX)*0.2;
				p.posY += (p.orY-p.posY)*0.2;

				//Add noise to position and scale
				var noisex = perlin.noise(p.offX,0,0);
				var noisey = perlin.noise(p.offY,0,0);

				//Update position
				p.posX += noisex*p.noiseAmount;
				p.posY += noisey*p.noiseAmount;

				//Update noise offsets
				p.offX += p.randSpeed;
				p.offY += p.randSpeed;
			}
		}

		//Function : Calculate angle between 2 points
		function calcAngle(x1, x2, y1, y2){
			var calcAngle = Math.atan2(x1-x2,y1-y2);
			return calcAngle;
		}
		
		//Function : draws the particles and text
		function draw(){
			//Clear canvas
			ctx.clearRect(0,0,canvas.width,canvas.height);
			ctxRef.clearRect(0,0,canvasRef.width,canvasRef.height);

			//Draw the filled text to the ref canvas
			ctxRef.globalCompositeOperation = 'source-over';
			ctxRef.drawImage(ref_image,(canvas.width-ref_image.width)/2,(canvas.height-ref_image.height)/2);

			//Reset masks
			for(var j=0;j<ongoingMasks.length;j++){
				var mask = ongoingMasks[j];
				mask.radius = 0;
				mask.posY = 0;
				mask.pLength = 0;
			}

			for(var i=0;i<affectedParticles.length;i++){
				var p = affectedParticles[i];
				if(!p.isSprite){
					for(var j=0;j<affectedParticles.length;j++){
						if(i!=j){
							var p2 = affectedParticles[j];
							var dist;
							if(p.hasRepulsion && p2.hasRepulsion){
								dist = 140;
							}
							else{
								//If one of the particles have repulsion and both are anchor, set draw threshold to 140
								if((p.hasRepulsion || p2.hasRepulsion) && (p.isAnchor && p2.isAnchor)){
									dist=140;
								}
								else{
									dist=40;
								}
							}
							
							if(particleDistance(p,p2)<dist && !p2.isSprite){
								ctx.beginPath();
							    ctx.moveTo(p.posX, p.posY);
							    ctx.lineTo(p2.posX, p2.posY);
							    ctx.strokeStyle = 'rgba(165,163,164,0.5)';
							    ctx.stroke();
							}
						}
					}
				}
				else{
					if(p.dist>10){
					    ctx.save();
						ctx.translate(p.posX,p.posY);
						ctx.scale(p.scale*p.scaleFactor,p.scale*p.scaleFactor);
						ctx.rotate(p.angle);
						ctx.drawImage(p.sprite,-7,-7);
						ctx.restore();
					}
				}

				if(ongoingMasks[p.touchID]){
					var mask = ongoingMasks[p.touchID];
					//Get the highest distance to define the mask radius
					if(p.dist>mask.radius){
						mask.radius = p.dist;
					}
					//Get the average position of particles on the Y axis to define the mask y position
					mask.posY += p.orY;
					mask.pLength++;
				}
			}

			for(var m=0;m<ongoingMasks.length;m++){
				var mask = ongoingMasks[m];
				var touch = ongoingTouches[m];

				//Calculate average Y position of particles
				if(mask.pLength != 0){
					mask.posY /= mask.pLength;
				}

				//Add smoothing to the mask radius
				mask.targetRadius += (mask.radius-mask.targetRadius)*0.5;
				//Make sure final radius is not negative
				var radius = mask.targetRadius;
				var radius2 = mask.targetRadius+30;

				radius *= 0.8;
				radius2 *= 0.8;

				if(radius<0){
					radius = 0;
				}
				if(radius2<0){
					radius2 = 0;
				}

				//Draw the first mask cirlce, opacity 50%
				ctxRef.globalCompositeOperation = 'destination-out';
				// ctxRef.fillStyle = "rgba(0,0,0,0.5)";
				// ctxRef.beginPath();
				// ctxRef.arc((touch.pageX-$(canvasContainer).offset().left),mask.posY,radius,0,Math.PI*2,true);
				// ctxRef.fill();
				// ctxRef.closePath();

				//Draw the second mask radius
				ctxRef.fillStyle = "rgba(0,0,0,1)";
				ctxRef.beginPath();
				ctxRef.arc((touch.pageX-$(canvasContainer).offset().left),mask.posY,radius2,0,Math.PI*2,true);
				ctxRef.fill();
				ctxRef.closePath();
			}
		}

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