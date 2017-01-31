require([
	"common",
], function() {
	function activeDeliveryFilter() {
		$(".delivery-filter>ul>li").on("click", function() {
			$(".delivery-filter>ul>li").removeClass("active");
			$(this).addClass("active");
		});
	}
	function showDeliveryLayer() {
		$(".delivery-manual-text").on("click", function(event) {
			$(".delivery-manual-layer").show();
		});
	}
	function hideDeliveryLayer() {
		$(".delivery-manual-layer-box>.big-close-btn").on("click", function(event) {
			$(".delivery-manual-layer").hide();
		});
	}

	activeDeliveryFilter();
	showDeliveryLayer();
	hideDeliveryLayer();
});
