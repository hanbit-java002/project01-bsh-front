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
		var imgMargin = 30.6;
		var imgWidth = 0;
		var listWidth = 0;
		var movePosition = 0;
		var startIndex = 0;
		var endIndex = items.length - 1;

		$(window).on("resize", function() {
			imgWidth = $(".section01-body-list>li").width();
			listWidth = imgWidth + imgMargin;
			var movePosition = -((startIndex * listWidth) - 2);

			$(".section01-body-list").css("left", movePosition);

			return listWidth;
		});

		$(".section-paging-arrow.right").on("click", function() {
			$(".section-paging-arrow.left").show();

			++startIndex;
			movePosition = -(listWidth * startIndex);

			$(".section01-body-list").animate({
				left: movePosition + "px",
			});

			if (startIndex >= endIndex - 2) {
				$(".section-paging-arrow.right").hide();
			}

			return startIndex;
		});

		console.log("imgWidth:" + imgWidth, "listWidth:" + listWidth,
			"movePosition:" + movePosition, "startIndex:" + startIndex,
			"endIndex:" + endIndex);

		$(".section-paging-arrow.left").on("click", function() {
			$(".section-paging-arrow.right").show();

			imgWidth = parseInt($(".section01-body-list>li").css("width"));
			listWidth = imgWidth + imgMargin;
			movePosition += listWidth;
			--startIndex;

			if (movePosition > - listWidth) {
				$(".section-paging-arrow.left").hide();
				$(".section01-body-list").animate({
					left: movePosition + "px",
				});
				--startIndex;
				return startIndex;
			}

			$(".section01-body-list").animate({
				left: movePosition + "px",
			});
			console.log("imgWidth:" + imgWidth, "listWidth:" + listWidth,
				"movePosition:" + movePosition, "startIndex:" + startIndex);

			return startIndex;
		});
	}
	initSection("01");
});
