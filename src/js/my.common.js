require([
	"common",
], function() {
	/* $(".mypage-menu>li").on("click", function() {
		var url = global.root + "/html-gallery/gallery-details.html";
		url += "?id="+$(this).attr("id");
		location.href = url;
	});*/

	// 마이페이지 좌측 메뉴 active 이벤트 //
	function activeMyPageMenu() {
		var link = document.location.href;

		$(".mypage-menu>li").removeClass("active");
		if (link.match("review")) {
			if (link.match("order")) {
				$(".my-order").addClass("active");
				return;
			}
			$(".my-review").addClass("active");
		}
		else if (link.match("like")) {
			$(".my-like").addClass("active");
		}
		else if (link.match("order")) {
			$(".my-order").addClass("active");
		}
	}

	// 마이페이지 좌측 메뉴 Click 시 페이지 이동//
	$(".my-review").on("click", function() {
		location.href = global.root + "/my.review.html";
	});
	$(".my-like").on("click", function() {
		location.href = global.root + "/my.like.store.html";
	});
	$(".my-order").on("click", function() {
		location.href = global.root + "/my.order.history.html";
	});

	// 카테고리 Click 시 페이지 이동 //
	$(".my-like-store").on("click", function() {
		location.href = global.root + "/my.like.store.html";
	});
	$(".my-like-theme").on("click", function() {
		location.href = global.root + "/my.like.theme.html";
	});
	$(".my-like-products").on("click", function() {
		location.href = global.root + "/my.like.products.html";
	});
	$(".my-order-history").on("click", function() {
		location.href = global.root + "/my.order.history.html";
	});
	$(".my-order-review").on("click", function() {
		location.href = global.root + "/my.order.review.html";
	});
	$(".my-order-inquiry").on("click", function() {
		location.href = global.root + "/my.order.inquiry.html";
	});

	activeMyPageMenu();
});
