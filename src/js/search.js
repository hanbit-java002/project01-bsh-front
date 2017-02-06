require([
	"common",
], function() {
	$(".click-filter.popular").on("click", function() {
		$(".popular>click-filter-text").css("color", "#EC522E");
		$(".popular>click-filter-img").css("background-position", "-258px -272px");
	});

	$(".click-filter.special").on("click", function() {
		$(".special>click-filter-text").css("color", "#EC522E");
		$(".special>click-filter-img").css("background-position", "-278px -272px");
	});

	$(".popular>click-filter-text.active, .popular>click-filter-img.active").on("click", function() {
		$(this).removeClass("active");
	});

	$(".special>click-filter-text.active, .special>click-filter-img.active").on("click", function() {
		$(this).removeClass("active");
	});
});
