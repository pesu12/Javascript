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

       console.log("Display image in colorbox.");
     });/**
   * Only related to example 9
   */
  (function($) {
    $.fn.shiftFont = function(options) {
      options = $.extend({}, $.fn.shiftFont.defaults, options);
      $.fn.shiftFont.current = ($.fn.shiftFont.current + 1) % options.fontFamily.length;
     return this.each(function() {
        $(this).css('font-family', options.fontFamily[$.fn.shiftFont.current]);
      });
    };

    $.fn.shiftFont.defaults = {
      'fontFamily': ['sans-serif', 'serif']
    }

    $.fn.shiftFont.current = 0;
    console.log('Added function shiftFont() to jQuery object as plugin.');
  }) (jQuery);

  $('#box9 h1, #box9 p').click(function() {
    $('#box9 h1, #box9 p').shiftFont({
      'fontFamily': ['monospace', 'cursive', 'fantasy']
    });
  });


  /**
   * Only related to example 9 (testing the plugin used in the text for this coursemoment)
   */
  (function($) {
      $.fn.fadeInOut = function(options) {
        options = $.extend({}, $.fn.fadeInOut.defaults, options);
        return this.each(function() {
          $(this).fadeOut(options.duration, function() {
            $(this).fadeIn(options.duration)});
        });
      };

      $.fn.fadeInOut.defaults = {
        'duration': 'fast',
      }

    }) (jQuery);

  $('#box9 img.example').click(function() {
    $(this).fadeInOut({'duration':2000});
    console.log('Clicked image to fade it out and in.');
  });

  console.log('Everything is ready.');

 });
