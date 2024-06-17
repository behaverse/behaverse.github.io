/* Set-up lazy-loading using yall. We expect to have polyfilled IntersectionObserver in each page using this */
document.addEventListener("DOMContentLoaded", yall);

/* Auto play/pause videos in/out of viewport */
  $(document).ready(function() { 
  
  
  	var elementTop, elementBottom, viewportTop, viewportBottom;

    function isScrolledIntoView(elem) {
      elementTop = $(elem).offset().top;
      elementBottom = elementTop + $(elem).outerHeight();
      viewportTop = $(window).scrollTop();
      viewportBottom = viewportTop + $(window).height();
      return (elementBottom > viewportTop && elementTop < viewportBottom);
    }
		
    if($('video').length){

      $(window).scroll(function () { // video to play when is on viewport 
      
        $('video').each(function(){
          if (isScrolledIntoView(this) == true) {
			  if ($(this).data("reset-on-replay") !== undefined) {
				$(this)[0].currentTime = 0;
			  }
              $(this)[0].play();
          } else {
              $(this)[0].pause();
          }
        });
      
      });  // video to play when is on viewport

    } // end .field--name-field-video
    
    
   });


