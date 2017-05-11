/**
 * Plugin and testcode for changing fontsize and fontfamily for css.
 */
 $(document).ready(function(){

   'use strict';

   /**
    * The plugin is called changecardformat and is used to change font-family
    * and image-size. This can for instance be a in a case when trying out
    * different font-familys and logo-sizes for a visitcard.
    */

  (function($) {
    $.fn.changecardformat = function(options,options2) {
      $('#boxvisitcard img.visitcard').changeLogoSize(options2);
      options = $.extend({}, $.fn.changecardformat.defaults, options);
      $.fn.changecardformat.current = ($.fn.changecardformat.current + 1) % options.fontFamily.length;
     return this.each(function() {
        $(this).css('font-family', options.fontFamily[$.fn.changecardformat.current]);
      });
    };

    $.fn.changecardformat.defaults = {
      'fontFamily': 'sans-serif'
    }
    $.fn.changecardformat.current = 0;

    $.fn.changeLogoSize = function(options) {
      options = $.extend({}, $.fn.changeLogoSize.defaults, options);
      return this.each(function() {
                $(this).css('width',options.width);
      });
    };

    $.fn.changeLogoSize.defaults = {
      'width': 100,
    }
  }) (jQuery);

  /**
   * Here I added 2 test-codes that display how call the plugin.
   */

   /**
    * The first testcode displays how plugin changecardformat can be called
    * when selecting different font-families and logo width is 50 px.
    */

    $('#boxchangeformat_change_font_small_logo').click(function() {
      $('#boxvisitcard h2, #boxvisitcard p').changecardformat({
        'fontFamily': ['monospace', 'cursive', 'fantasy']
      },{'width':50});
    });

    /**
     * The second testcode displays how plugin changecardformat can be called
     * when selecting different font-families and logo width empty wich then
     * gives default width value for logo that is 100 px.
     */

    $('#boxchangeformat_change_font_big_logo').click(function() {
      $('#boxvisitcard h2, #boxvisitcard p').changecardformat({
        'fontFamily': ['monospace', 'cursive', 'fantasy']
      },{});
    });

 });
