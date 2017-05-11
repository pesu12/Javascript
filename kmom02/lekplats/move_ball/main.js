/**
 * Place your JS-code here.
 */
 $(document).ready(function(){

   //Variable declaration
   'use strict';
   var text;
   var myBall = {};
   var xpos=500;
   var ypos=70;
   var area = document.getElementById('flash');
   var movelength=20;

   //Resources and connections towards index.php
   text = document.getElementById('text');
   text.className = 'blue';
   text.innerHTML = '<b>Click the ball to make it to move around. The ball is moved in a random direction</b><br /><br />';
   myBall.HTMLelement = document.getElementById('ball');
   myBall.image = 'http://dbwebb.se/img/black_ball_64_64.png';
   myBall.position = {x:xpos, y:ypos}


  /**
   * Function drawing of the ball
   * @param {Number} a
   * @param {Number} b
   * @return {Number}
   */
   myBall.draw = function () {
     this.HTMLelement.style.backgroundImage = 'url(' + this.image + ')';
     this.HTMLelement.style.top = this.position.y + 'px';
     this.HTMLelement.style.left = this.position.x + 'px';
   }

   /**
    * Function ball move that moves in random direction.
    * @param {Number} x
    * @param {Number} y
    * @return {string}
    */
   function ballMove(x,y) {
     var randomvalue=Pesu.random(1, 4);
     switch (randomvalue) {
      case 1: //Go right
         x=x+movelength;
        break;
      case 2: //Go left
        x=x-movelength;
        break;
      case 3: //Go down
        y=y+movelength;
        break;
      case 4: //Go up
        y=y-movelength;
        break;
      default: //Go right
        x=x+ movelength;
        break;
     }
     var newdirection=x.toString() +','+ y.toString();
     return newdirection;
   }

  /**
  * Function that catches the event when mouse is clicked.
  * @param {String} click
  * @param {function} event
  */
   myBall.HTMLelement.addEventListener('click', function (event) {
      myBall.pushAt(event.pageX, event.pageY);
    });

  /**
  * Function that gives the current position.
  * @param {Number} x
  * @param {Number} y
  */
  myBall.pushAt = function (x, y) {
    this.moveBy(myBall.position.x, myBall.position.y);
  }

  /**
  * Function that gives the new position
  * @param {Number} x
  * @param {Number} y
  */
  myBall.moveBy = function (x, y) {
    var newpos=ballMove(x,y);
    myBall.position.x=parseInt(newpos.substring(0, newpos.indexOf(",")));
    console.log('x-pos'+myBall.position.x);
    myBall.position.y=parseInt(newpos.substring(newpos.indexOf(",")+1, newpos.length));
    console.log('y-pos'+myBall.position.y);
    this.draw();
  }

   //Draw the ball for the first time before it is clicked.
   myBall.draw();

 });
