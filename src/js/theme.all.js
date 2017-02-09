require([
	"common",
], function() {
	function activeThemeTagList() {
		$(".theme-list>li").mouseover(function() {
			$(".theme-tag-keyword").removeClass("active");
			$(this).find(".theme-tag-keyword").addClass("active");
		});
	}
	function inActiveThemeTagList() {
		$(".theme-list>li").mouseout(function() {
			$(".theme-tag-keyword").removeClass("active");
		});
	}
	function goToThemeTag() {
		$(".theme-list>li").on("click", function(event) {
			location.href = global.root + "/theme.tag.html";
		});
	}

	activeThemeTagList();
	inActiveThemeTagList();
	goToThemeTag();
});
