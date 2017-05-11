/**
 * Place your JS-code here.
 */
 $(document).ready(function(){
   'use strict';
   var text;
   text = document.getElementById('text');
   text.innerHTML = '42 '+ typeof(42)+'<br />';
   text.innerHTML += '4.2 '+ typeof(4.2)+'<br />';
   text.innerHTML += '"hello world" '+ typeof("hello world")+'<br />';
   text.innerHTML += 'hej '+ typeof('hej')+'<br />';
   text.innerHTML += 'true '+ typeof(true)+'<br />';
   text.innerHTML += 'false '+ typeof(false)+'<br />';
   text.innerHTML += 'null '+ typeof(null)+'<br />';

   text.innerHTML += '/javascript/  '+ typeof(/javascript/)+'<br />';
   text.innerHTML += '{x:1,y:2} '+ typeof({x:1,y:2})+'<br />';
   text.innerHTML += '[1,2,3,4,5] '+ typeof([1,2,3,4,5])+'<br />';
   text.innerHTML += 'function () {"use strict";} '+ typeof(function () {"use strict";})+'<br />';
   text.className = 'blue';
   console.log('Everything is ready.');

 });
