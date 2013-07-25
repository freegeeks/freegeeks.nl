// remap jQuery to $
(function($){})(window.jQuery);


	$(document).ready(function (){


});

var fixed = false;
$(document).scroll(function() {
    // TODO 90 has to be calculated per screensize
    if( $(this).scrollTop() >= 90 ) {
        if( !fixed ) {
            fixed = true;
			
            $('header').addClass("collapsed");
						        
		}                                          
    } else {
        if( fixed ) {
            fixed = false;
			$('header').removeClass("collapsed");
			
        }
    }
});
