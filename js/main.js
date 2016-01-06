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
               //zposition : "front"
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