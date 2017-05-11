/**
 * Place your JS-code here.
 */
 $(document).ready(function(){

   'use strict';

   var dimensions, target;

   target = document.getElementById('flash');
   dimensions = document.getElementById('size');
   dimensions['width'].value = target.offsetWidth;
   dimensions['height'].value = target.offsetHeight;


   dimensions['resize'].onclick = (function() {
     var width, height;
     width = dimensions['width'].value;
     height = dimensions['height'].value;
     console.log('Resize it to ' + width + ' x ' + height + '. Current is: ' + target.offsetWidth + ' x ' + target.offsetHeight);
     target.style.width = width+'px';
     target.style.height = height+'px';
   });

   console.log('Current size is ' + target.offsetWidth + ' x ' + target.offsetHeight);
   console.log('Element now has listener on event onclick attached: ' + dimensions['resize'].onclick);
 });
