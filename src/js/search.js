
require([
	"common",
	"bootstrap-slider",
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

	function scrollFilterLayerCss() {
		$(".filter-layer").css({
			"position": "fixed",
			"top": "0px",
		});
	}
	function initFilterLayerCss() {
		$(".filter-layer").css({
			"position": "absolute",
			"top": "auto",
		});
	}

	$(".click-filter").on("click", function() {
		var select = $(this).children("div");

		if ($(this).hasClass("filter")) {
			$(select).toggleClass("");
			showFilterlayer();
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
				scrollFilterLayerCss();
			}
			else {
				initSearchFilterCss();
				initFilterLayerCss();
			}
		});
	});

	/* var popupCssSelector = "";

	function closeLayerPopup() {
		$(popupCssSelector).hide();
	}

	function openLayerPopup(cssSelector) {
		 if (popupCssSelector === cssSelector) {
			return;
		}

		popupCssSelector = cssSelector;

		$(cssSelector).show();

		$(".submit-btn").on("click", function() {
			closeLayerPopup();
		});
	}*/

	function hideFilterlayer() {
		$(".submit-btn").click(function() {
			$(".filter-layer").animate({
				width: 0,
			}, "1500");
			$("html, body").animate({
				scrollTop: 0,
			}, 400);
		});
	}

	// filterLayer slideLeft //
	function showFilterlayer() {
		var boxWidth = "380px";
		$(".filter-layer").animate({
			width: boxWidth,
		}, "1500");
		hideFilterlayer();
	}

	$(".budget-slider").slider({
		range: "true",
	});

	// filterLayer toggleActive //
	$(".filter-ico").on("click", function() {
		$(this).toggleClass("active");
		var select = $(this).parent("li");
		select.find(".filter-text").toggleClass("active");
	});

	$(".checkbox-circle").on("click", function() {
		$(this).toggleClass("active");
		var select = $(this).parent("li");
		select.find(".who-label").toggleClass("active");
	});

	$(".service-select").on("click", function() {
		$(this).find("div").toggleClass("active");
	});

	function filterLayerSliderReset() {
		$(".slider-handle.max-slider-handle.round").css("left", "100%");
		$(".slider-handle.min-slider-handle.round").css("left", "0%");
		$(".slider-selection.tick-slider-selection").css({
			"left": "0%",
			"width": "100%",
		});
	}

	// filterLayer reset //
	$(".reset-btn").on("click", function() {
		$(".filter-layer").find(".active").removeClass("active");
		filterLayerSliderReset();
	});
});
