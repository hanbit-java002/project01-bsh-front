require([
	"common",
], function() {
	var sectionInfo = {
		"01": {
			items: [],
			itemsPerPage: 3,
		},
	};

	/* section HTML append */
	function addSectionItems(sectionCode, items) {
		if (items) {
			sectionInfo[sectionCode].items = items;
		}

		items = sectionInfo[sectionCode].items;
		var sectionHTML;

		if (sectionCode === "01") {
			for (var i=0; i<items.length; i++) {
				var item = items[i];

				sectionHTML = "<li alt=\"" + item.storeName + "\">";
				sectionHTML += "<a href=\"http://localhost:82/store.html\" title=\"" + item.storeName + "\">";
				sectionHTML += "<div class=\"main-section01-body-list-img\" " +
					"style=\"background-image: url('" + global.root + "/img/" +
					item.storeMainImg + "')\"></div>";
				sectionHTML += "<div class=\"main-section01-body-list-text\">";
				sectionHTML += "<div class=\"main-section01-body-list-info-box\">";
				sectionHTML += "<div class=\"main-section01-body-list-name\">" + item.storeName + "</div>";
				sectionHTML += "<div class=\"main-section01-body-list-info\">";
				sectionHTML += "<div class=\"main-section01-body-list-info-local\">" +
					item.storeLocal + "</div>";
				sectionHTML += "<div class=\"main-section01-body-list-info-comment\">" +
					item.storeType + "</div>";
				sectionHTML += "</div>";
				sectionHTML += "</div>";
				sectionHTML += "<div class=\"main-section01-body-list-section-score\">" + item.storeScore + "</div>";
				sectionHTML += "</div>";
				sectionHTML += "</a>";
				sectionHTML += "</li>";

				$(".section01-body-list").append(sectionHTML);
			}
			imgRollingSlider(sectionCode, items);
		}
	}

	function initSection(sectionCode) {
		var url = global.root;

		if (sectionCode === "01") {
			url += "/api2";
		}

		url += "/main/section/" + sectionCode + "/items";

		if (sectionCode === "01") {
			$.ajax({
				url: url,
				success: function(items) {
					addSectionItems(sectionCode, items);
				},
			});
		}
	}

	/* 이미지's 롤링 슬라이더 */

	function imgRollingSlider(sectionCode, items) {
		items = sectionInfo[sectionCode].items;
		var imgMargin = 29.9;
		var listEndIndex = items.length - 1;
		var imgWidth = 0;
		var listWidth = 0;
		var	movePosition = 0;
		var	startIndex = 0;

		// 리사이즈 될 때, 기준선 정렬 //
		$(window).on("resize", function() {
			imgWidth = parseFloat($(".section01-body-list>li").css("width"));
			listWidth = imgWidth + imgMargin;
			movePosition = -(listWidth * startIndex);

			$(".section01-body-list").animate({
				left: (movePosition - 0.1) + "px",
			}, 1);
		});

		// 우측 버튼 //
		$(".section-paging-arrow.right").on("click", function() {
			$(".section-paging-arrow.left").show();
			++startIndex;
			imgWidth = parseFloat($(".section01-body-list>li").css("width"));
			listWidth = imgWidth + imgMargin;
			movePosition = -(listWidth * startIndex);

			if (startIndex >= listEndIndex - 2) {
				$(".section01-body-list").animate({
					left: (movePosition - 0.1) + "px",
				});
				$(".section-paging-arrow.right").hide();
				return startIndex;
			}

			$(".section01-body-list").animate({
				left: movePosition + "px",
			});

			return startIndex;
		});

		// 좌측 버튼 //
		$(".section-paging-arrow.left").on("click", function() {
			$(".section-paging-arrow.right").show();
			--startIndex;
			imgWidth = parseFloat($(".section01-body-list>li").css("width"));
			listWidth = imgWidth + imgMargin;
			movePosition = -(listWidth * startIndex);

			if (startIndex <= 0) {
				$(".section01-body-list").animate({
					left: movePosition + "px",
				});
				$(".section-paging-arrow.left").hide();
				return startIndex;
			}

			$(".section01-body-list").animate({
				left: movePosition + "px",
			});

			return startIndex;
		});
	}

	initSection("01");
});
