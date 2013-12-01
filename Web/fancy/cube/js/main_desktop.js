
		var particles = [];
		var affectedParticles = [];
		var textParticles = [{x:267,y:271},{x:23,y:58},{x:18,y:56},{x:19,y:22},{x:31,y:36},{x:36,y:32},{x:40,y:23},{x:65,y:31},{x:75,y:24},{x:96,y:31},{x:107,y:24},{x:84,y:69},{x:65,y:82},{x:121,y:24},{x:92,y:73},{x:110,y:43},{x:47,y:112},{x:74,y:101},{x:58,y:128},{x:80,y:165},{x:42,y:159},{x:38,y:165},{x:30,y:139},{x:15,y:165},{x:103,y:157},{x:120,y:166},{x:125,y:128},{x:120,y:128},{x:97,y:167},{x:163,y:160},{x:168,y:144},{x:165,y:132},{x:163,y:104},{x:150,y:89},{x:163,y:72},{x:167,y:84},{x:175,y:64},{x:190,y:61},{x:144,y:124},{x:178,y:168},{x:193,y:170},{x:219,y:160},{x:216,y:149},{x:235,y:138},{x:222,y:117},{x:262,y:107},{x:277,y:120},{x:275,y:158},{x:288,y:145},{x:263,y:137},{x:221,y:103},{x:228,y:75},{x:212,y:63},{x:212,y:76},{x:240,y:103},{x:273,y:78},{x:281,y:87},{x:326,y:104},{x:298,y:102},{x:345,y:96},{x:334,y:70},{x:314,y:61},{x:293,y:63},{x:304,y:155},{x:321,y:167},{x:344,y:155},{x:342,y:150},{x:305,y:169},{x:359,y:70},{x:391,y:74},{x:377,y:56},{x:386,y:31},{x:392,y:33},{x:391,y:65},{x:421,y:74},{x:391,y:103},{x:386,y:104},{x:374,y:123},{x:391,y:156},{x:422,y:162},{x:422,y:156},{x:390,y:126},{x:392,y:169},{x:441,y:69},{x:470,y:60},{x:453,y:75},{x:384,y:169},{x:376,y:164},{x:461,y:34},{x:451,y:28},{x:468,y:22},{x:470,y:99},{x:452,y:114},{x:484,y:161},{x:470,y:159},{x:470,y:121},{x:485,y:166},{x:453,y:134},{x:439,y:166},{x:568,y:92},{x:573,y:91},{x:573,y:66},{x:544,y:60},{x:555,y:71},{x:522,y:69},{x:503,y:97},{x:516,y:106},{x:521,y:134},{x:506,y:147},{x:530,y:168},{x:553,y:169},{x:580,y:153},{x:576,y:149},{x:550,y:157},{x:725,y:62},{x:724,y:62},{x:729,y:61},{x:729,y:33},{x:695,y:21},{x:697,y:29},{x:674,y:24},{x:660,y:37},{x:651,y:63},{x:668,y:67},{x:667,y:91},{x:696,y:92},{x:695,y:106},{x:727,y:104},{x:723,y:130},{x:712,y:156},{x:679,y:159},{x:704,y:168},{x:661,y:162},{x:653,y:158},{x:651,y:130},{x:668,y:151},{x:734,y:145},{x:759,y:108},{x:774,y:138},{x:776,y:160},{x:788,y:152},{x:776,y:105},{x:785,y:73},{x:812,y:68},{x:796,y:61},{x:831,y:64},{x:845,y:79},{x:835,y:104},{x:854,y:109},{x:849,y:138},{x:836,y:114},{x:828,y:153},{x:818,y:167},{x:834,y:159},{x:796,y:168},{x:769,y:78},{x:871,y:23},{x:871,y:29},{x:882,y:28},{x:901,y:15},{x:900,y:57},{x:884,y:73},{x:901,y:89},{x:901,y:117},{x:884,y:111},{x:869,y:166},{x:915,y:166},{x:892,y:165},{x:900,y:158},{x:890,y:130},{x:900,y:43},{x:238,y:297},{x:717,y:45},{x:467,y:166},{x:916,y:162},{x:47,y:166},{x:423,y:261}];
		var perlin = new ImprovedNoise();
		var mouseX,mouseY;
		var targetX = 0;
		var targetY = 0;
		var targetRadius = 0;
		var ctx,ctxRef;
		var canvas,canvasRef,canvasContainer;
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
			//canvasContainer.style.marginTop = (-(ref_image.height+350)/2-90)+'px';
			canvasContainer.style.marginTop = (-(ref_image.height+350)/2-230)+'px';
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

		//Init video player events
		//var player = document.getElementById('video');

		//Init video event
		/*player.addEventListener('playing',function(){
			
		},false);*/
		//player.addEventListener('progress',onProgress,false);
		//player.addEventListener('ended',onEnded,false);

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
						var noiseA = 10;

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
							noiseA = 20;
						}

						//Add particle
						particles.push({
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
							noiseAmount:Math.random()*noiseA,
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

			animate();

			setTimeout(function(){
				$(window).mousemove(onWindowMouseMove);
			}, 1800);
		}
		
		//Function: on mouse move
		function onWindowMouseMove( event )
		{
			mouseX = event.clientX-$(canvasContainer).offset().left;
			mouseY = event.clientY-$(canvasContainer).offset().top;
			targetX += (mouseX-targetX)*0.2;
			targetY += (mouseY-targetY)*0.2;
		}
		
		//Function : animate, main loop
		function animate() {
			requestAnimationFrame( animate );
			//stats.update();
			
			update();
			draw();
		}
		
		//Function : Update the particles position, scale and rotation
		function update(){
			for(var i=0;i<particles.length;i++){
				var p = particles[i];

				//Get distance between mouse and particle origin to see if particles should be affected by the mouse
				var distanceorx = mouseX-p.orX;
				var distanceory = mouseY-p.orY;
				var distanceor = Math.sqrt((distanceorx * distanceorx) + (distanceory * distanceory));

				//If the distance is less than 60 the particle gets affected
				if(distanceor<100 && !p.isAffected){
					p.isAffected = true;
					affectedParticles.push(p);
				}
				//If the distance is more than 100 the particle gets desaffected
				else if(distanceor>110){
					//this is there to give some delay between the particle being desaffected and the particle animating back
					if(!p.isOut){
						p.isOut = true;
					}
					else{
						p.outCount++;
						if(p.outCount>p.outDest){
						
							//Particle gets desaffected
							p.isAffected = false;
							p.isOut = false;
							p.outCount = 0;
							//remove particle from affected array
							for(var j=0;j<affectedParticles.length;j++){
								if(affectedParticles[j] == p){
									affectedParticles.splice(j,1);
									j = 10000;
								}
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
						repelforce.minusEq(new Vector2(mouseX,mouseY)); 
		 				
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
					//add main force for sprite particles
					var distancex = mouseX-p.posX;
					var distancey = mouseY-p.posY;
					var distance = Math.sqrt((distancex * distancex) + (distancey * distancey));

					var powerx = -(distancex/distance)*p.charge;
					var powery = -(distancey/distance)*p.charge;
							
					//add repulsion force from the mouse
					p.posX += powerx;
					p.posY += powery;

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

			var maskRadius = 0;
			var posY = 0;
			var pLength = 0;

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

				//Get the highest distance to define the mask radius
				if(p.dist>maskRadius){
					maskRadius = p.dist;
				}
				//Get the average position of particles on the Y axis to define the mask y position
				posY += p.orY;
				pLength++;
			}

			//Calculate average Y position of particles
			if(pLength != 0){
				posY /= pLength;
			}

			//Add smoothing to the mask radius
			targetRadius += (maskRadius-targetRadius)*0.5;
			//Make sure final radius is not negative
			var radius = targetRadius+0;
			if(radius<0){
				radius = 0;
			}

			ctxRef.globalCompositeOperation = 'destination-out';

			//Draw the second mask radius
			ctxRef.fillStyle = "rgba(0,0,0,1)";
			ctxRef.beginPath();

			ctxRef.arc(targetX,posY,radius,0,Math.PI*2,true);
			ctxRef.fill();
			ctxRef.closePath();
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