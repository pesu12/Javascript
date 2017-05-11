/**
 * Place your JS-code here.
 */
 $(document).ready(function(){

   'use strict';

  /**
   * Related to all examples. This expands the box to full width.
   */

    /**
     * Only related to example 4.
     */
    var current_dimension = function() {
      var height = $('#me-image-4').height(),
        width = $('#me-image-4').width();
      $('#box4_current').text(width + ' x ' + height);
      console.log("Updated current dimensions on the image.");
    };

    $('#box4_dimensions').click(current_dimension());

    $('#box4_height_incr').click(function() {
      $('#me-image-4').css('height', '+=5px');
      console.log("Increase the height of the image.");
      current_dimension();
    });

    $('#box4_height_decr').click(function() {
      $('#me-image-4').css('height', '-=10px');
      console.log("Decrease the height of the image.");
      current_dimension();
    });

    $('#box4_width_incr').click(function() {
      $('#me-image-4').css('width', '+=4px');
      console.log("Increase the width of the image.");
      current_dimension();
    });

    $('#box4_width_decr').click(function() {
      $('#me-image-4').css('width', '-=8px');
      console.log("Decrease the width of the image.");
      current_dimension();
    });


 });
