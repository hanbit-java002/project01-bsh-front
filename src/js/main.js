require([
	"common",
], function() {
	var sectionInfo = {
		"01": {
			items: [],
			itemsPerPage: 3,
		},
	};

	function addSectionItems(sectionCode, page, items) {
		if (items) {
			sectionInfo[sectionCode].items = items;
		}

		items = sectionInfo[sectionCode].items;
		var itemsPerPage = sectionInfo[sectionCode].itemsPerPage;

		var startIndex = (page - 1) * itemsPerPage;
		var endIndex = Math.min(startIndex + itemsPerPage, items.length);
		var sectionHTML;

		if (sectionCode === "01") {
			for (var i=startIndex; i<items.length; i++) {
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
					addSectionItems(sectionCode, 1, items);
				},
			});
		}
	}

	/* ----------------image rolling slider----------------*/


	function imgRollingSlider() {
		$(".section-paging-arrow.left").on("click", function() {


		});
	}


	initSection("01");
});
