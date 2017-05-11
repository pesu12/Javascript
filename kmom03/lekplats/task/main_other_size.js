/**
 * Place your JS-code here.
 */
 $(document).ready(function(){

   'use strict';

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

  $('#boxvisitcard h1, #boxvisitcard p').click(function() {
    $('#boxvisitcard h1, #boxvisitcard p').shiftFont({
      'fontFamily': ['monospace', 'cursive', 'fantasy']
    });
  });

  /**
   * Only related to example 9 (testing the plugin used in the text for this coursemoment)
   */
  (function($) {
      $.fn.changeImageSize = function(options) {
        options = $.extend({}, $.fn.changeImageSize.defaults, options);
        return this.each(function() {
                  $(this).css('width',200);
        });
      };

      $.fn.changeImageSize.defaults = {
        'duration': 'fast',
      }
    }) (jQuery);

  $('#boxvisitcard img.visitcard').click(function() {
    $(this).changeImageSize({'width':200});
    console.log('Clicked image to change size');
  });

  console.log('Everything is ready.');

 });
