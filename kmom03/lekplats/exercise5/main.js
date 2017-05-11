/**
 * Place your JS-code here.
 */
 $(document).ready(function(){

   'use strict';

  /**
   * Related to all examples. This expands the box to full width.
   */

   /**
    * Only related to example 5.
    */
   $('#fade-toggle').click(function() {
     $('#me-image-51').fadeToggle(1000);
     console.log("Toggle visibility of the image using fade.");
     return false;
   });

   $('#slide-toggle').click(function() {
     $('#me-image-52').slideToggle(1000);
     console.log("Toggle visibility of the image using slide.");
     return false;
   });

 });
