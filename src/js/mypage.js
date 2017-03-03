require([
	"common",
], function() {
	$(".gallery-list>ul>li").on("click", function() {
		var url = global.root + "/html-gallery/gallery-details.html";
		url += "?id="+$(this).attr("id");
		location.href = url;
	});

	// 마이페이지 좌측 메뉴 Click 이벤트 //
	$(".mypage-menu>li").on("click", function() {
		var select = $(this).parent("ul");
		select.find("li").removeClass("active");
		$(this).addClass("active");
	});
});
