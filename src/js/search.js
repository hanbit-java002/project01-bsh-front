require([
	"common",
], function() {
	function scrollSearchFilterCss() {
		$(".search-filter").css({
			"position": "fixed",
			"top": "15px",
			"left": "155px",
			"right": "auto",
			"padding": "10px",
			"border": "solid 1px #999999",
		});
	}
	function initSearchFilterCss() {
		$(".search-filter").css({
			"position": "absolute",
			"top": "auto",
			"left": "auto",
			"right": "155px",
			"padding": "20px",
			"margin": "0px",
			"border": "none",
			"background-color": "#ffffff",
		});
	}
	/* function clickSearchFilterCss(cssSelector) {
		if(cssSelector === ".click-filter.popular") {
			$(".popular>.click-filter-img").css("background-position", "-258px -272px");
			$(cssSelector + ">.click-filter-text").css("color", "#EC522E");
		}
		else if(cssSelector === ".click-filter.special") {
			$(".special>.click-filter-img").css("background-position", "-278px -272px");
			$(cssSelector + ">.click-filter-text").css("color", "#EC522E");
		}
	} */

	/* $(".click-filter.popular, .click-filter.special").on("click", function() {
		var select = $(this).children("div");
		$(select).toggleClass("active");
	}); */

	$(".click-filter").on("click", function() {
		var select = $(this).children("div");

		if ($(this).hasClass("filter")) {
			$(select).toggleClass("");
		}
		else {
			$(select).toggleClass("active");
		}
	});

	$(document).ready(function() {
		var prePosition = 0;
		$(window).on("scroll", function(event) {
			var initPosition = $(this).scrollTop();
			if(initPosition > prePosition) {
				scrollSearchFilterCss();
			}
			else {
				initSearchFilterCss();
			}
		});
	});

	/* $(".click-filter.popular").on("click", function() {
		clickSearchFilterCss(".click-filter.popular");
	});
	$(".click-filter.special").on("click", function() {
		clickSearchFilterCss(".click-filter.special");
	}); */
});
