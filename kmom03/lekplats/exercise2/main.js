/**
 * Place your JS-code here.
 */
 $(document).ready(function(){

   'use strict';

  /**
   * Related to all examples. This expands the box to full width.
   */

  $('#box2').click(function() {
    $(this).parent().addClass('fullwidth');
      $(this).toggleClass('pink');
      console.log("Make the background a bit pink.");
  });

  $('#box2 img.example').click(function() {
    $(this).toggleClass('thumbnail');
    console.log("Resizing the image.");
  });

 });
