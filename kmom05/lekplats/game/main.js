/**
 * Playing Racing while learning JavaScript object model.
 */

/** 
 * Shim layer, polyfill, for requestAnimationFrame with setTimeout fallback.
 * http://paulirish.com/2011/requestanimationframe-for-smart-animating/
 */ 
window.requestAnimFrame = (function(){
  return  window.requestAnimationFrame       || 
          window.webkitRequestAnimationFrame || 
          window.mozRequestAnimationFrame    || 
          window.oRequestAnimationFrame      || 
          window.msRequestAnimationFrame     || 
          function( callback ){
            window.setTimeout(callback, 1000 / 60);
          };
})();



/**
 * Shim layer, polyfill, for cancelAnimationFrame with setTimeout fallback.
 */
window.cancelRequestAnimFrame = (function(){
  return  window.cancelRequestAnimationFrame || 
          window.webkitCancelRequestAnimationFrame || 
          window.mozCancelRequestAnimationFrame    || 
          window.oCancelRequestAnimationFrame      || 
          window.msCancelRequestAnimationFrame     || 
          window.clearTimeout;
})();



/**
 * Trace the keys pressed
 * http://nokarma.org/2011/02/27/javascript-game-development-keyboard-input/index.html
 */
window.Key = {
  pressed: {},

  LEFT:   37,
  UP:     38,
  RIGHT:  39,
  DOWN:   40,
  
  isDown: function(keyCode, keyCode1) {
    return this.pressed[keyCode] || this.pressed[keyCode1];
  },
  
  onKeydown: function(event) {
    this.pressed[event.keyCode] = true;
  },
  
  onKeyup: function(event) {
    delete this.pressed[event.keyCode];
  }
};
window.addEventListener('keyup',   function(event) { Key.onKeyup(event); },   false);
window.addEventListener('keydown', function(event) { Key.onKeydown(event); }, false);



/**
 * All objects are Vectors
 */
function Vector(x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Vector.prototype = {
  muls:  function (scalar) { return new Vector( this.x * scalar, this.y * scalar); }, // Multiply with scalar
  imuls: function (scalar) { this.x *= scalar; this.y *= scalar; return this; },      // Multiply itself with scalar
  adds:  function (scalar) { return new Vector( this.x + scalar, this.y + scalar); }, // Multiply with scalar
  iadd:  function (vector) { this.x += vector.x; this.y += vector.y; return this; }   // Add itself with Vector
}



/**
 * The forces around us.
 */
function Forces() {
  this.all = {};
}

Forces.prototype = {

  createAcceleration: function(vector) {
    return function(velocity, td) {
      velocity.iadd(vector.muls(td));
    }
  },

  createDamping: function(damping) {
    return function(velocity, td) {
      velocity.imuls(damping);
    }
  },

  createWind: function(vector) {
    return function(velocity, td) {
      velocity.iadd(vector.adds(td));
    }
  },  

  addAcceleration:  function(name, vector)  { this.all[name] = this.createAcceleration(vector); },
  addDamping:       function(name, damping) { this.all[name] = this.createDamping(damping); },
  addWind:          function(name, vector)  { this.all[name] = this.createWind(vector); },

  update: function(object, td) {
    for(var force in this.all) {
      if (this.all.hasOwnProperty(force)) {
        this.all[force](object, td);
      }
    }
  }

}

window.Forces = new Forces();
window.Forces.addAcceleration('gravity', new Vector(0, 9.82));
window.Forces.addDamping('drag', 0.97);
window.Forces.addWind('wind', new Vector(0.5, 0));

/**
 * Racetrack as an object.
 */
function Track(width, height,position) {
  this.height     = height    || 32;
  this.width      = width     || 32;
  this.position   = position  || new Vector();
}

Track.prototype = {

  draw: function(ct) {
    ct.save();
    ct.translate(1, 1);
    ct.rotate(this.direction+Math.PI/2)
    ct.beginPath();
    ct.moveTo(0,0);
    ct.lineTo(0,300);
    ct.lineTo(700,300);
    ct.lineTo(700,0);
    ct.lineTo(0,0);	
    ct.stroke();
    ct.restore();

    ct.save();
    ct.translate(100, 100);
    ct.rotate(this.direction+Math.PI/2)
    ct.beginPath();
    ct.moveTo(0,0);
    ct.lineTo(0,100);
    ct.lineTo(400,100);
    ct.lineTo(400,0);
    ct.lineTo(0,0);	
    ct.stroke();
    ct.restore();	
	
    ct.save();
    ct.translate(1, 150);
    ct.rotate(this.direction+Math.PI/2)
    ct.beginPath();
    ct.moveTo(0,0);
    ct.lineTo(100,0);	
    ct.stroke();
    ct.restore();		
  },

}


/**
 * A Player as an object.
 */
function Player(width, height, position, velocity, speed, direction, accelerateForce, breakForce, dampForce) {
  this.height     = height    || 32;
  this.width      = width     || 32;
  this.position   = position  || new Vector();
  this.velocity   = velocity  || new Vector();
  this.speed      = speed     || new Vector();
  this.direction  = direction || 0;
  this.accelerateForce  = accelerateForce || Forces.createAcceleration(new Vector(80, 80));
  this.breakForce       = breakForce      || Forces.createDamping(0.97);
  this.dampForce        = dampForce       || Forces.createDamping(0.999);
  this.gamestarted="false";
  this.gamestarttime= 0;
  this.ongoinggame="false";
}

Player.prototype = {

  draw: function(ct) {
    var x = this.width/2, y = this.height/2;
		
    ct.save();
    ct.translate(this.position.x, this.position.y);
    ct.rotate(this.direction+Math.PI/2)
    ct.beginPath();
    ct.moveTo(0, -y);
    ct.lineTo(x, y);
    ct.lineTo(0, 0.8*y);
    ct.lineTo(-x, y);
    ct.lineTo(0, -y);

    if (Key.isDown(Key.UP, Key.W)) {
      ct.moveTo(0, y);
      ct.lineTo(-2, y+10);
      ct.lineTo(0, y+8);
      ct.lineTo(2, y+10);
      ct.lineTo(0, y);
    } 
    
    if (Key.isDown(Key.DOWN, Key.S)) {
      ct.moveTo(y+4, 0);
      ct.arc(0, 0, y+4, 0, Math.PI, true);
    }

    ct.stroke();
    ct.restore();
  },


  moveForward: function() {
    this.dampForce(this.speed, td);
    this.position.x += this.speed.x * Math.cos(this.direction) * td;
    this.position.y += this.speed.y * Math.sin(this.direction) * td;
    this.position.iadd(this.velocity.muls(td));
  },

  rotateLeft:  function() { this.direction -= Math.PI/30; },
  rotateRight: function() { this.direction += Math.PI/30; },

  throttle: function(td)  { this.accelerateForce(this.speed, td); },
  breaks:   function(td)  { this.breakForce(this.speed, td); this.breakForce(this.velocity, td); },

  update: function(td, width, height) {
  
    if (Key.isDown(Key.UP))     {this.throttle(td);this.gamestarted="true"};
    if (Key.isDown(Key.LEFT))   this.rotateLeft();
    if (Key.isDown(Key.DOWN))   this.breaks(td);
    if (Key.isDown(Key.RIGHT))  this.rotateRight();

	if(this.gamestarted==="true" && this.ongoinggame==="false") {
	   this.gamestarttime=Math.round(new Date() / 1000);
	}	
	
	//ongoinggame is activated so that the gamestarted time will be set only once.
	if(this.gamestarted==="true") {
	   this.ongoinggame="true";
	}

	if(this.gamestarted==="true") {
		Forces.update(this.velocity, td);
        this.moveForward(td);
        this.stayInArea(width, height);
   }
  },

  stayInArea: function(width, height) {
    //Upper part,upper hit
    if(this.position.y < -this.height+32+1)  {y=this.position.y = 14;this.speed.x=0;this.speed.y=0;};

	//Lower part, lower hit
    if(this.position.y > 290)                {y=this.position.y = 289;this.speed.x=0;this.speed.y=0;};	
	
	//Right part, right hit
    if(this.position.x > 693)                {x=this.position.x = 690;this.speed.y=0;this.speed.x=0;};
	
	//Left part, left hit
    if(this.position.x < -this.width+20-1)   {x=this.position.x = 13;this.speed.y=0;this.speed.x=0;};	
	
	//Upper part,lower hit
    if(this.position.x > 100 && this.position.x < 500 && this.position.y<100) { 	
		if(this.position.y > 95)  {y=this.position.y = 90;this.speed.x=0;this.speed.y=0;};
	}
	//Lower part, upper hit
    if(this.position.x > 100 && this.position.x < 500 && this.position.y>200) { 	
		if(this.position.y < 205)                {y=this.position.y = 210;this.speed.x=0;this.speed.y=0;};
    }	
     
	//Right part, left hit
    if(this.position.x > 500 && this.position.y<200 && this.position.y>100) { 		
       if(this.position.x < 505)                {x=this.position.x = 510;this.speed.y=0;this.speed.x=0;}; 
	}
  	
    //Left part, right hit
	if(this.position.x < 100 && this.position.y > 100 && this.position.y<200) { 
		if(this.position.x > 95)   {x=this.position.x = 90;this.speed.y=0;this.speed.x=0;};
    }

	//Finish line
	if(this.position.y < 150 && this.position.x > 0 && this.position.x<100) {
     var stoptime = Math.round(new Date() / 1000);
     var racingtime=stoptime-this.gamestarttime;	 
		window.alert("Congratulation your finish time was: " + racingtime +" seconds");
		location.reload();
    }	
  }
}



/**
 * Racing, the Game
 */
window.Racing = (function(){
  var canvas, ct, ship, track,lastGameTick;
  var gametext="";
  var init = function(canvas) {
    canvas = document.getElementById(canvas);
    ct = canvas.getContext('2d');
    width = canvas.width,
    height = canvas.height,
    ct.lineWidth = 3;
    ct.strokeStyle = 'hsla(0,0%,40%,1)',
    ship = new Player(10, 20, new Vector(width/8, height*1/8));
    track = new Track(10, 20, new Vector(width/2, height/2));
	
    console.log('Init the game');
	gametext="Welcome to the racing game. \nThe goal of the game is to drive a ship as fast as possible clockwise one lap.\n";
	gametext=gametext+"The ship is accelerated with the up-arrow-key and breaks with the down-arrow-key.\n";
	gametext=gametext+"The left-arrow-keyis used to steer left. The right-arrow-key is used for steering right.\n";
	gametext=gametext+"The ship is started by pressing up-arrow-key.If the ship hits a barrier then the ship speed is 0.";
	window.alert(gametext);	
  };

  var update = function(td) {
    ship.update(td, width, height);
  };

  var render = function() {
    ct.clearRect(0,0,width,height);
    ship.draw(ct);
	track.draw(ct);
  };

  var gameLoop = function() {
    var now = Date.now();
    td = (now - (lastGameTick || now)) / 1000; // Timediff since last frame / gametick
    lastGameTick = now;
    requestAnimFrame(gameLoop);
    update(td);
    render();
  };

  return {
    'init': init,
    'gameLoop': gameLoop
  }
})();



// On ready
$(function(){
  'use strict';

  Racing.init('canvas1');
  Racing.gameLoop();

  console.log('Ready to play.');  
});

