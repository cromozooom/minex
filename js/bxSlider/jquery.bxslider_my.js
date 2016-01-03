// bxSlider
$(document).ready(function(){
	$('.bxslider').bxSlider();
	$('.bxsliderProd').bxSlider({
		captions: true
	});
	$('.bx-simlar').bxSlider({
		minSlides: 2,
		maxSlides: 6,
		slideWidth: 170,
		slideMargin: 10
	});
});