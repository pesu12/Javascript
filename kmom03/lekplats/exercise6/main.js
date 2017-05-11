/**
 * Place your JS-code here.
 */
 $(document).ready(function(){

   'use strict';

  /**
   * Related to all examples. This expands the box to full width.
   */

   /**
      * Only related to example 6.
      */
     $('.lightbox').click(function() {
       var windowHeigth = window.innerHeight || $(window).height(), // make it worjk on ipad & android
           windowWidth  = window.innerWidth  || $(window).width();

       // Display the overlay
       $('<div id="overlay"></div>')
         .css('opacity', '0')
         .animate({'opacity' : '0.5'}, 'slow')
         .appendTo('body');

       // Create the lightbox container
       $('<div id="lightbox"></div>')
         .hide()
         .appendTo('body');

       // Display the image on load
       $('<img>')
         .attr('src', $(this).attr('src'))
         .css({
           'max-height': windowHeigth,
           'max-width':  windowWidth
         })
         .load(function() {
           $('#lightbox')
             .css({
               'top':  (windowHeigth - $('#lightbox').height()) / 2,
               'left': (windowWidth  - $('#lightbox').width())  / 2
             })
             .fadeIn();
         })
         .appendTo('#lightbox');

         // Remove it all on click
         $('#overlay, #lightbox').click(function() {
           $('#overlay, #lightbox').remove();
         });

       console.log("Display image in colorbox.");
     });

 });
