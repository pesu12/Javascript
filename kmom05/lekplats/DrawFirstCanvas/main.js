/**
 * Work with strings.
 */
$(document).ready(function(){
  'use strict';

  var canvas = document.getElementById('canvas1'),
    ct = canvas.getContext('2d');

  // Draw full box, fillstyle is color
  ct.fillStyle = 'rgba(100,0,40,1)';
  ct.fillRect(200,100,100,100);

  //Draw line box, strokestyle is color.
  ct.lineWidth = 5;
  ct.strokeStyle = 'hsla(90,70%,50%,0.5)';
  ct.strokeRect(400,100,200,100);


  
  // Draw a more complex path
  ct.save();
  ct.translate(800,300);
  ct.fillStyle = 'hsla(0,0%,70%,1)';
  ct.strokeStyle = 'hsla(0,0%,50%,1)';
  ct.lineWidth = 2;
  ct.beginPath();
  ct.moveTo(5,0);
  ct.lineTo(0,10);
  ct.lineTo(35,10);
  ct.lineTo(30,0);
  ct.lineTo(25,-5);
  ct.lineTo(5,0);
  ct.lineTo(0,0);
  ct.fill();

  ct.lineWidth = 3;
  ct.beginPath();
  ct.moveTo(15,-5);
  ct.lineTo(15,-25);
  ct.stroke();
  ct.restore();

  // Draw a arc
  ct.translate(50,50);
  ct.strokeStyle = 'hsla(0,0%,50%,1)';
  ct.beginPath();
  ct.arc(0,0,20,-Math.PI/2,Math.PI/2,false);
  ct.arc(60,75,30,0,Math.PI/3,true);
  ct.stroke();

  console.log('Everything is ready.');  
});

