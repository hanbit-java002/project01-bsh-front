require([
	"common",
], function() {
	function scrollSearchFilterCss() {
		$(".search-filter").css({
			"position": "fixed",
			"top": "15px",
			"left": "55px",
			"right": "auto",
			"padding": "10px",
			"z-index": "10",
			"border": "solid 1px #999999",
		});
	}
	function initSearchFilterCss() {
		$(".search-filter").css({
			"position": "absolute",
			"top": "auto",
			"left": "auto",
			"right": "55px",
			"padding": "20px",
			"margin": "0px",
			"border": "none",
			"background-color": "#ffffff",
		});
	}

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
		$(window).on("scroll", function(event) {
			var initPosition = $(this).scrollTop();
			if(initPosition > 155) {
				scrollSearchFilterCss();
			}
			else {
				initSearchFilterCss();
			}
		});
	});
});
