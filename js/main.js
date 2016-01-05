$(".my-sticky-element").stick_in_parent();

$('.my-sticky-element')
.on('sticky_kit:bottom', function(e) {
    $(this).parent().css('position', 'static');
})
.on('sticky_kit:unbottom', function(e) {
    $(this).parent().css('position', 'relative');
})

$(document).ready(function() {
	$("#my-menu").mmenu({
		// options
	}, {
		// configuration
		classNames: {
			vertical: "expand"
		},
		offCanvas: {
			pageNodetype: "section"
		}
	});
});