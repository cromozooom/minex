//$(".my-sticky-element").stick_in_parent();

//$('.my-sticky-element')
//.on('sticky_kit:bottom', function(e) {
//    $(this).parent().css('position', 'static');
//})
//.on('sticky_kit:unbottom', function(e) {
//    $(this).parent().css('position', 'relative');
//})

$(function() {
	$('nav#menu').mmenu({
		offCanvas: {
               position  : "right",
               zposition : "front"
            },
		extensions	: [ 'effect-slide-menu', 'pageshadow' ],
		searchfield	: true,
		counters	: true,
		navbar 		: {
			title		: 'inchide meniul'
		},
		navbars		: [
			{
				position	: 'top',
				content		: [ 'searchfield' ]
			}, {
				position	: 'top',
				content		: [
					'prev',
					'title',
					'close'
				]
			}
		]
	});
});

/**
 * Check a href for an anchor. If exists, and in document, scroll to it.
 * If href argument ommited, assumes context (this) is HTML Element,
 * which will be the case when invoked by jQuery after an event
 */
function scroll_if_anchor(href) {
    href = typeof(href) == "string" ? href : $(this).attr("href");
    
    // You could easily calculate this dynamically if you prefer
    var fromTop = 0;
    
    // If our Href points to a valid, non-empty anchor, and is on the same page (e.g. #foo)
    // Legacy jQuery and IE7 may have issues: http://stackoverflow.com/q/1593174
    if(href.indexOf("#") == 0) {
        var $target = $(href);
        
        // Older browser without pushState might flicker here, as they momentarily
        // jump to the wrong position (IE < 10)
        if($target.length) {
            $('html, body').animate({ scrollTop: $target.offset().top - fromTop });
            if(history && "pushState" in history) {
                history.pushState({}, document.title, window.location.pathname + href);
                return false;
            }
        }
    }
}    

// When our page loads, check to see if it contains and anchor
scroll_if_anchor(window.location.hash);

// Intercept all anchor clicks
$("body").on("click", "a", scroll_if_anchor);