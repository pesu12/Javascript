/**
 * Place your JS-code here.
 */
 $(document).ready(function(){

   $('#box1 h1, #box1 p, #box1 img').click(function() {
     $(this).toggleClass('dark');
     console.log("toggle!");
   });

 });
