$(function(){
	$(".fade-object").on("inview", function (event, isInView) {
		if (isInView) {
			$(this).stop().addClass("show");
		} else {
			$(this).stop().removeClass("show");
		}
	});
});