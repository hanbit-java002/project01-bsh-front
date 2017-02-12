define([
	"bootstrap",
	"clipboard",
], function() {
	function scrollUp() {
		$(document).ready(function() {
			var prePosition = 0;
			$(window).on("scroll", function(event) {
				var initPosition = $(this).scrollTop();
				if(initPosition > prePosition) {
					$("#scroll-up-button").show();
				}
				else {
					$("#scroll-up-button").hide();
				}
			});
		});
		$("#scroll-up-button").click(function() {
			$("html, body").animate({
				scrollTop: 0,
			}, 400);
		});
	}


	/* ----------------main logo----------------*/
	$("#main-bar-logo, #header-bar-logo").on("click", function() {
		location.href = "/";
	});


	/* ----------------header menu----------------*/
	$(".menu-hotple").on("click", function() {
		location.href = global.root + "/hotple.html";
	});

	$(".menu-theme").on("click", function() {
		location.href = global.root + "/theme.newest.html";
	});

	$(".menu-order").on("click", function() {
		location.href = global.root + "/delivery.html";
	});

	/* ----------------top img bar menu----------------*/
	$(".theme-menu-newest>.theme-menu-text").on("click", function() {
		location.href = global.root + "/theme.newest.html";
	});

	$(".theme-menu-all>.theme-menu-text").on("click", function() {
		location.href = global.root + "/theme.all.html";
	});


	/* ----------------main search box----------------*/
	function search() {
		location.href = global.root + "/search.html";
	}
	function clearSearchKeywords() {
		$("#main-top-search-input, #header-top-search-input").val("");
	}

	$("#main-top-search-input, #header-top-search-input").on("keyup", function(event) {
		if (event.keyCode === 13) {
			search();
			clearSearchKeywords();
		}
		else if (event.keyCode === 27) {
			clearSearchKeywords();
		}
	});


	/* ----------------search box layer----------------*/
	function showSearchBoxLayer() {
		$("#main-top-search-input, #header-top-search-input").on("click", function(event) {
			$("#search-box-layer, #header-search-box-layer").show();
		});
	}
	function activeSearchBoxLayerList() {
		$(".search-box-layer-list").mouseover(function() {
			$(".search-box-layer-list").removeClass("active");
			$(this).addClass("active");
		});
	}
	function hideSearchBoxLayer() {
		$(".sp-container").click(function(e) {
			if (!$("#main-top-search-box, #header-top-search-box").has(e.target).length) {
				$("#search-box-layer, #header-search-box-layer").hide();
				$(".search-box-layer-list").removeClass("active");
			}
		});
	}


	/* ----------------search box clear btn----------------*/
	function showSearchClearBtn() {
		$("#main-top-search-input").on("keyup", function(event) {
			$(".search-box-clear-btn").show();
		});
	}
	function hideSearchClearBtn() {
		$(".search-box-clear-btn").on("click", function(event) {
			$("#search-box-layer").hide();
			$(".search-box-clear-btn").hide();
			$("#main-top-search-input").val("");
		});
	}


	/* ----------------login layers----------------*/
	function resetInputBox() {
		$(".email-addr-inputbox").val("");
		$(".password-inputbox").val("");
		$(".again-password-inputbox").val("");
	}

	function signUp() {
		var userId = $(".email-signup-email-addr-box>.email-addr-inputbox").val();
		var userPw = $(".email-signup-password-box>.password-inputbox").val();
		var userPwCfm = $(".email-signup-again-password-box>.again-password-inputbox").val();

		if (userId === undefined || userId === "") {
			alert("아이디를 입력하세요.");
			$(".email-addr-inputbox").focus();
			return;
		}
		else if (userPw === undefined || userPw === "") {
			alert("비밀번호를 입력하세요.");
			$(".password-inputbox").focus();
			return;
		}
		else if (userPw !== userPwCfm) {
			alert("비밀번호 확인을 동일하게 입력하세요.");
			$(".again-password-inputbox").focus();
			return;
		}

		$.ajax({
			url: global.root + "/api2/member/signup",
			method: "POST",
			data: {
				userId: userId,
				userPw: userPw,
			},
			success: function(data) {
				if(data.result === "ok") {
					alert(userId + "님 환영합니다.");
					$("#main-login-layer").hide();
					resetInputBox();
				}
				else {
					alert("정상적으로 가입되지 않았습니다.");
				}
			},
			error: function(jqXHR) {
				alert(jqXHR.responseJSON.message);
			},
		});
	}

	function checkSignedIn() {
		$.ajax({
			url: global.root + "/api2/member/signedin",
			success: function(data) {
				if (data.result === "yes") {
					$("#main-login-layer").hide();
					resetInputBox();
					// 나중에 로그인 완료 후, 노출되는 기능은 여기에 추가
				}
				else {
					/* 나중에 로그인 완료 후, 노출되는 기능은 여기에 추가
					$(".main-login-layer").hide();
					$(".hp-sign-up").show();
					$(".hp-sign-in").show();
					$(".hp-member-info").hide();
					$(".hp-sign-out").hide();*/
				}
			},
		});
	}

	function signIn() {
		var userId = $(".mail-login-email-addr-box>.email-addr-inputbox").val();
		var userPw = $(".mail-login-email-password-box>.password-inputbox").val();

		if (userId === undefined || userId === "") {
			alert("아이디를 입력하세요.");
			$(".email-addr-inputbox").focus();
			return;
		}
		else if (userPw === undefined || userPw === "") {
			alert("비밀번호를 입력하세요.");
			$(".mail-login-email-password-box").focus();
			return;
		}

		$.ajax({
			url: global.root + "/api2/member/signin",
			method: "POST",
			data: {
				userId: userId,
				userPw: userPw,
			},
			success: function(data) {
				if(data.result === "ok") {
					alert(userId + "님 환영합니다.");
					$(".mail-login-layer").hide();
					resetInputBox();
					// 나중에 로그인 완료 후, 노출되는 기능은 여기에 추가
				}
				else {
					alert("아이디와 비밀번호를 확인해주세요.");
				}
			},
			error: function(jqXHR) {
				alert(jqXHR.responseJSON.message);
			},
		});
	}

	$(".mail-login-button").on("click", function() {
		signIn();
	});

	$(".email-signup-complete-button").on("click", function() {
		signUp();
	});

	function showLoginLayer() {
		$("#main-bar-login-button, #header-bar-login-button").on("click", function() {
			$("#main-login-layer").show();
		});
	}
	function hideLoginLayer() {
		$(".layer-close-button").on("click", function() {
			$("#main-login-layer").hide();
		});
	}


	function showMailLoginLayer() {
		$(".button-email").on("click", function() {
			$("#main-login-layer").hide();
			$("#mail-login-layer").show();
		});
	}
	function hideMailLoginLayer() {
		$(".layer-close-button").on("click", function() {
			$("#mail-login-layer").hide();
			$(".check-box-active").hide();
			$(".email-addr-inputbox").val("");
			$(".password-inputbox").val("");
		});
	}


	function showFindPasswordLayer() {
		$(".mail-login-find-password").on("click", function() {
			$("#mail-login-layer").hide();
			$("#find-password-layer").show();
		});
	}
	function hideFindPasswordLayer() {
		$(".layer-close-button, .cancle-button").on("click", function() {
			$("#find-password-layer").hide();
			$("#main-login-layer").hide();
			$(".email-addr-inputbox").val("");
		});
	}


	function showSignUpLayer() {
		$(".mail-login-layer-signup-button").on("click", function() {
			$("#mail-login-layer").hide();
			$("#email-signup-layer").show();
		});
	}
	function hideSignUpLayer() {
		$(".layer-close-button").on("click", function() {
			$("#find-password-layer").hide();
			$("#email-signup-layer").hide();
			$("#main-login-layer").hide();
			$(".check-box-active").hide();
			$(".all-check-box-active").hide();
			$(".email-addr-inputbox").val("");
			$(".password-inputbox").val("");
			$(".again-password-inputbox").val("");
		});
	}


	function singleCheckBox() {
		$(".single-check-box").on("click", function() {
			var select = $(this).parent("div");
			select.find("i").show();
		});
	}
	function singleUnCheckBox() {
		$(".check-box-active").on("click", function() {
			$(this).hide();
		});
	}


	function allCheckBox() {
		$(".all-check-box").on("click", function() {
			$(".check-box-active").show();
			$(".all-check-box-active").show();
		});
	}
	function allUnCheckBox() {
		$(".all-check-box-active").on("click", function() {
			$(".check-box-active").hide();
			$(this).hide();
		});
	}


	/* ----------------sns share layers----------------*/
	function showLocalCategoryLayer() {
		$(".top-menu-bar.local-category-text").on("click", function() {
			$(".top-menu-bar.local-category-layer").show();
		});
	}
	function hideLocalCategoryLayer() {
		$("#hotple-contents").click(function(e) {
			if (!$(".top-menu-bar").has(e.target).length) {
				$(".top-menu-bar.local-category-layer").hide();
			}
		});
	}


	/* ----------------sns share layers----------------*/
	function showSnsShareLayer() {
		$(".top-menu-bar.share-btn, .top-menu-bar.search-share-btn").on("click", function() {
			$(".top-menu-bar.share-btn-layer").show();
		});
	}
	function hideSnsShareLayer() {
		$(".layer-close-button").on("click", function() {
			$(".top-menu-bar.share-btn-layer").hide();
		});
	}
	function shareLink() {
		var Clipboard = require("clipboard");
		var clipboard = new Clipboard(".link-share-btn");
		clipboard.on("success", function() {
			alert("페이지의 주소가 복사되었습니다.");
		});
	}


	/* ----------------footer local category----------------*/
	function clickCategory() {
		$(".local-category>li").on("click", function() {
			var select = $(this).parent("ul");
			select.find("li").removeClass("active");
			$(this).addClass("active");
		});
	}


	scrollUp();
	showLoginLayer();
	hideLoginLayer();
	showMailLoginLayer();
	hideMailLoginLayer();
	showFindPasswordLayer();
	hideFindPasswordLayer();
	showSignUpLayer();
	hideSignUpLayer();
	singleCheckBox();
	singleUnCheckBox();
	allCheckBox();
	allUnCheckBox();
	clickCategory();
	showSearchClearBtn();
	hideSearchClearBtn();
	showSearchBoxLayer();
	hideSearchBoxLayer();
	showLocalCategoryLayer();
	hideLocalCategoryLayer();
	showSnsShareLayer();
	hideSnsShareLayer();
	shareLink();
	activeSearchBoxLayerList();
	checkSignedIn();
});
