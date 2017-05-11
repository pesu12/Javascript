/**
 * Place your JS-code here.
 */
 $(document).ready(function(){
   'use strict';
   var text;
   text = document.getElementById('text');
   text.innerHTML = '<b>Strings - Datatypes and values</b><br /><br />';

   text.className = 'blue';
   console.log('Everything is ready.');

   var button = document.getElementById('button');

   button.addEventListener('click', function () {
     var colors = ['green', 'yellow', 'red', 'blue', 'pink'],
       step = 0,
       animateFunction = function () {
         if (step === colors.length) {
           button.style.backgroundColor = '';
         } else {
           button.style.backgroundColor = colors[step];
           step += 1;
           window.setTimeout(animateFunction, 500);
         }
       };
     window.setTimeout(animateFunction, 500);
   }, false);

   text.parentElement.appendChild(button);
 });
