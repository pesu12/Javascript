/**
 * Place your JS-code here.
 */
 $(document).ready(function(){

   'use strict';

  /**
   * Related to all examples. This expands the box to full width.
   */
   /**
 * Related to all examples. This expands the box to full width.
 */
$('.gift').click(function() {
  $(this).parent().addClass('fullwidth');
  $(this).parent().find('*').show('slow');
  $(this).parent().children('.gift').hide();
  console.log("Clicked to open a box, displaying it in full width.");
});


/**
 * Related to all examples. This minimizes the box.
 */
$('.minimize').click(function(event) {
  $(this).parent().find('*').hide();
  $(this).parent().removeClass().addClass('box').show();
  $(this).parent().children('.gift').show();
  console.log("Minimizing the box.");
});

   /**
     * Only related to example 7.
     */
    var galleryInit = function() {
      var current = null;

      $('.gallery-all img').each(function() {
        $(this)
          .attr('src', $(this).attr('src1') + '?w=' + $(this).width() + '&h=' + $(this).height() + '&crop-to-fit')
          .click(function() {
            if(!current) {
              current = this;
              console.log("Set current.");
            } else {
              $(current).toggleClass('selected');
              current = this;
              console.log("Toogled current");
            }
            $(this).toggleClass('selected');
            $('.gallery-current img').attr('src', $(this).attr('src1') + '?w=' + $('.gallery-current').width() + '&h=' + $('.gallery-current').height());
            console.log("Click on mini image.");
          });
        console.log("Gallery image was initiated.");
      });

      $('.gallery-all img').first().trigger('click');
    };
    galleryInit();

 });
