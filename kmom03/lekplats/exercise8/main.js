/**
 * Place your JS-code here.
 */
 $(document).ready(function(){

   'use strict';

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
        * Only related to example 8
        */
       var slideshowInit = function() {
         var numberImages =  $('.slideshow img').length,
           currentImage = numberImages - 1,

           // Get current z-index for the slideshow and stack all images above this z-index
           zIndex = parseInt($('.slideshow').css('z-index')),
           currentZIndex = zIndex,

           // To play/pause the slideshow intervall
          intervallId = setInterval(function() {rotateImages();}, 4000);

         // Function to rotate images
         var rotateImages = function() {
           // Fade out current image and reorder z-index
           $('.slideshow img')
             .eq(currentImage)
             .fadeOut('slow', function() {
               $(this)
                 .css('z-index', zIndex)
                 .fadeIn(0)
                 .siblings().each(function() {
                   $(this).css('z-index', ((parseInt($(this).css('z-index')) - zIndex + 1) % numberImages + zIndex));
               });
             });
           currentImage = (numberImages + currentImage - 1) % numberImages;
           console.log('Rotating pictures in slideshow.' + currentImage);
         };

         // Fore each image, set it up.
         $('.slideshow img')
           .each(function() {
             // Get the crop attribute from the img element, if defined and use to crop the image
             var crop = $(this).attr('crop');
             crop = crop ? 'crop=' + crop + '&' : null;

             // Use i to set the z-index of the image, stack them on top of each other
             $(this)
               .attr('src', $(this).attr('src1') + '?' + crop + 'w=' + $(this).width() + '&h=' + $(this).height() + '&crop-to-fit')
               .css('z-index', currentZIndex++);
           })
           .click(function() {rotateImages();});
           console.log("Clicked to open slideshow.");


         console.log("Slideshow was initiated.");
       };
       slideshowInit();
 });
