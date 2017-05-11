/**
 * Place your JS-code here.
 */
 $(document).ready(function(){

   'use strict';

  /**
   * Related to all examples. This expands the box to full width.
   */

   /**
    * Only related to example 3.
    */
   var addColor = function() {
     $('<div></div>')
       .addClass('palette')
       .css('background-color', $('#box3_color').val())
       .insertAfter('#palette')
       .click(function() {
         $(this).remove();
         console.log("Removing an item from the color palette.");
       });
     console.log("Adding an item to the color palette." + $('#box3_color').val());
   };

   $('#box3 input[type=button]').click(addColor);
   $('#box3 input[type=text]').keypress(function(event) {
     if ( event.which == 13 ) {
       event.preventDefault();
       addColor();
     }
   });

 });
