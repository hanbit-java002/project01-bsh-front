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
	$(".logo").on("click", function() {
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

	function resetExceptionAlert() {
		$(".email-signup-layer-body>div").removeClass("exception");
		$(".mail-login-layer-body>div").removeClass("exception");
		$(".find-password-email-addr-box").removeClass("exception");
		$("#signin-email-addr-exception-alert").hide();
		$("#signin-password-exception-alert").hide();
		$("#signup-email-addr-exception-alert").hide();
		$("#signup-password-exception-alert").hide();
		$("#signup-again-password-exception-alert").hide();
		$("#find-password-email-addr-exception-alert").hide();
	}

	function showLoginLayer() {
		$(".login-button").on("click", function() {
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
			resetInputBox();
			resetExceptionAlert();
			resetAgreementExceptionAlert();
		});
	}

	function singleCheckBox() {
		$(".single-check-box").on("click", function() {
			var select = $(this).parent("div");
			var selectId = select.find("i").attr("id");

			select.find("i").show();
			$("#" + selectId + "-agree-validation").hide();
			$("#" + selectId + "-agree .single-check-box").removeClass("exception");
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

	function resetAgreementExceptionAlert() {
		$(".single-check-box").removeClass("exception");
		$("#use-agreement-agree-validation").hide();
		$("#personal-info-agree-validation").hide();
		$("#location-info-agree-validation").hide();
	}

	function showAfterLoginBtn() {
		$(".login-button").hide();
		$(".after-login-btn").show();
	}

	function hideAfterLoginBtn() {
		$(".after-login-btn").hide();
		$(".login-button").show();
	}

	function showMyLoginLayer() {
		$(".after-login-btn").on("click", function() {
			$(".my-login-layer").show();
		});
	}

	function hideMyLoginLayer() {
		$(".my-login-layer").hide();
	}

	function alertConfirmLogOut() {
		var retVal = confirm("로그아웃 하시겠습니까?");
		if(retVal == true) {
			$.ajax({
				url: global.root + "/api2/member/signout",
				success: function() {
					hideMyLoginLayer();
					hideAfterLoginBtn();
					$(".complete-layer.log-out").show();
					setTimeout(hideCompleteLayer, 4000);
				},
			});
		}
		else{
			return false;
		}
	}

	// 로그아웃 //
	$(".log-out-btn").on("click", function() {
		alertConfirmLogOut();
	});

	$(".sp-container").click(function(e) {
		if (!$(".after-login-btn, .my-login-layer").has(e.target).length) {
			hideMyLoginLayer();
		}
	});

	// 회원 가입 //
	function signUp() {
		var userId = $(".email-signup-email-addr-box>.email-addr-inputbox").val();
		var userPw = $(".email-signup-password-box>.password-inputbox").val();
		var userPwCfm = $(".email-signup-again-password-box>.again-password-inputbox").val();
		var emailForm = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;
		var passwordForm = /^[0-9a-zA-Z가-힣]{6,20}$/;
		var attrCheckBox01 = $("#use-agreement-agree i").css("display");
		var attrCheckBox02 = $("#personal-info-agree i").css("display");
		var attrCheckBox03 = $("#location-info-agree i").css("display");

		if (userId === undefined || userId === "") {
			$(".email-signup-email-addr-box").addClass("exception");
			$("#signup-email-addr-exception-alert").show();
			document.getElementById("signup-email-addr-exception-alert").innerHTML = "이메일 주소를 입력해주세요.";
		}
		else if (!userId.match(emailForm)) {
			$(".email-signup-email-addr-box").addClass("exception");
			$("#signup-email-addr-exception-alert").show();
			document.getElementById("signup-email-addr-exception-alert").innerHTML = "이메일 양식이 맞지 않습니다.";
		}
		else if (userPw === undefined || userPw === "") {
			$(".email-signup-password-box").addClass("exception");
			$("#signup-password-exception-alert").show();
			document.getElementById("signup-password-exception-alert").innerHTML = "비밀번호를 6자 이상 입력해주세요.";
		}
		else if (!userPw.match(passwordForm)) {
			$(".email-signup-password-box").addClass("exception");
			$("#signup-password-exception-alert").show();
			document.getElementById("signup-password-exception-alert").innerHTML = "비밀번호를 6자 이상 20자 이하로 입력해주세요.";
		}
		else if (userPwCfm === undefined || userPwCfm === "") {
			$(".email-signup-again-password-box").addClass("exception");
			$("#signup-again-password-exception-alert").show();
			document.getElementById("signup-again-password-exception-alert").innerHTML = "비밀번호 확인을 입력해주세요.";
		}
		else if (userPw !== userPwCfm) {
			$(".email-signup-again-password-box").addClass("exception");
			$("#signup-again-password-exception-alert").show();
			document.getElementById("signup-again-password-exception-alert").innerHTML = "비밀번호 확인이 일치하지 않습니다.";
		}
		else if (attrCheckBox01 !== "block" || attrCheckBox02 !== "block" || attrCheckBox03 !== "block") {
			if (attrCheckBox01 !== "block") {
				$("#use-agreement-agree .single-check-box").addClass("exception");
				$("#use-agreement-agree-validation").show();
				document.getElementById("use-agreement-agree-validation").innerHTML = "이용약관에 동의해주세요.";
			}
			if (attrCheckBox02 !== "block") {
				$("#personal-info-agree .single-check-box").addClass("exception");
				$("#personal-info-agree-validation").show();
				document.getElementById("personal-info-agree-validation").innerHTML = "개인정보 수집 및 이용약관에 동의해주세요.";
			}
			if (attrCheckBox03 !== "block") {
				$("#location-info-agree .single-check-box").addClass("exception");
				$("#location-info-agree-validation").show();
				document.getElementById("location-info-agree-validation").innerHTML = "위치기반 서비스 이용약관에 동의해주세요.";
			}
		}
		else {
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
						$(".all-check-box-active").hide();
						$("#email-signup-layer").hide();
						resetInputBox();
						resetAgreementExceptionAlert();
						$(".check-box-active").hide();
					}
					else {
						alert("정상적으로 가입되지 않았습니다.");
					}
				},
				error: function(jqXHR) {
					if (jqXHR.status === 1500) {
						var error = JSON.parse(jqXHR.responseText);

						if (error.errorCode === "ALREADY_SIGNUP") {
							$(".email-signup-email-addr-box").addClass("exception");
							$("#signup-email-addr-exception-alert").show();
							document.getElementById("signup-email-addr-exception-alert").innerHTML
								= error.errorMsg;
						}
						else {
							alert(jqXHR.responseJSON.message);
						}
					}
					else {
						alert(jqXHR.responseJSON.message);
					}
				},
			});
		}
	}

	// 로그인 상태 체크 //
	function checkSignedIn() {
		$.ajax({
			url: global.root + "/api2/member/signedin",
			success: function(data) {
				if (data.result === "yes") {
					$(".login-button").hide();
					$(".after-login-btn").show();
				}
				else {
					$(".login-button").show();
					$(".after-login-btn").hide();
				}
			},
		});
	}

	// 로그인 //
	function signIn() {
		var userId = $(".mail-login-email-addr-box>.email-addr-inputbox").val();
		var userPw = $(".mail-login-email-password-box>.password-inputbox").val();
		var emailForm = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;

		if (userId === undefined || userId === "") {
			$(".mail-login-email-addr-box").addClass("exception");
			$("#signin-email-addr-exception-alert").show();
			document.getElementById("signin-email-addr-exception-alert").innerHTML = "이메일 주소를 입력해주세요.";
		}
		else if (!userId.match(emailForm)) {
			$(".mail-login-email-addr-box").addClass("exception");
			$("#signin-email-addr-exception-alert").show();
			document.getElementById("signin-email-addr-exception-alert").innerHTML = "이메일 양식이 맞지 않습니다.";
		}
		else if (userPw === undefined || userPw === "") {
			$(".mail-login-email-password-box").addClass("exception");
			$("#signin-password-exception-alert").show();
			document.getElementById("signin-password-exception-alert").innerHTML = "비밀번호를 입력해주세요.";
		}
		else {
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
						$("#mail-login-layer").hide();
						resetInputBox();
						resetExceptionAlert();
						showAfterLoginBtn();
					}
					else {
						alert("아이디와 비밀번호를 확인해주세요.");
					}
				},
				error: function(jqXHR) {
					if (jqXHR.status === 1500) {
						var error = JSON.parse(jqXHR.responseText);
						if (error.errorCode === "NULL_ID") {
							$(".mail-login-email-addr-box").addClass("exception");
							$("#signin-email-addr-exception-alert").show();
							document.getElementById("signin-email-addr-exception-alert").innerHTML
								= error.errorMsg;
						}
						else if (error.errorCode === "WRONG_PW") {
							$(".mail-login-email-password-box").addClass("exception");
							$("#signin-password-exception-alert").show();
							document.getElementById("signin-password-exception-alert").innerHTML
								= error.errorMsg;
						}
					}
					else {
						alert(jqXHR.responseJSON.message);
					}
				},
			});
		}
	}

	// complete Layer //
	function hideCompleteLayer() {
		$(".complete-layer").fadeOut(1500);
	}

	// 비밀번호 찾기 //
	function findPassword() {
		var userId = $(".find-password-email-addr-box>.email-addr-inputbox").val();
		var emailForm = /[0-9a-zA-Z][_0-9a-zA-Z-]*@[_0-9a-zA-Z-]+(\.[_0-9a-zA-Z-]+){1,2}$/;

		if (userId === undefined || userId === "") {
			$(".find-password-email-addr-box").addClass("exception");
			$("#find-password-email-addr-exception-alert").show();
			document.getElementById("find-password-email-addr-exception-alert").innerHTML = "이메일 주소를 입력해주세요.";
		}
		else if (!userId.match(emailForm)) {
			$(".find-password-email-addr-box").addClass("exception");
			$("#find-password-email-addr-exception-alert").show();
			document.getElementById("find-password-email-addr-exception-alert").innerHTML = "이메일 양식이 맞지 않습니다.";
		}
		else {
			$.ajax({
				url: global.root + "/api2/member/findpw",
				method: "POST",
				data: {
					userId: userId,
				},
				success: function(data) {
					if(data.result === "ok") {
						$("#find-password-layer").hide();
						resetInputBox();
						resetExceptionAlert();
						$(".complete-layer.send-mail").show();
						setTimeout(hideCompleteLayer, 4000);
					}
					else {
						alert("이메일 주소를 확인해주세요.");
					}
				},
				error: function(jqXHR) {
					var error = JSON.parse(jqXHR.responseText);
					if (error.errorCode === "NULL_ID") {
						$(".find-password-email-addr-box").addClass("exception");
						$("#find-password-email-addr-exception-alert").show();
						document.getElementById("find-password-email-addr-exception-alert").innerHTML
							= error.errorMsg;
					}
					else {
						alert(jqXHR.responseJSON.message);
					}
				},
			});
		}
	}

	$(".mail-login-button").on("click", function() {
		resetExceptionAlert();
		signIn();
	});

	$(".login.email-addr-inputbox, .login.password-inputbox").on("keyup", function(event) {
		if (event.keyCode === 13) {
			resetExceptionAlert();
			signIn();
		}
		else if (event.keyCode === 27) {
			$(this).val("");
		}
	});

	$(".email-signup-complete-button").on("click", function() {
		resetExceptionAlert();
		signUp();
	});

	$(".signup.email-addr-inputbox, .signup.password-inputbox, .signup.again-password-inputbox").on("keyup",
		function(event) {
		if (event.keyCode === 13) {
			resetExceptionAlert();
			signUp();
		}
		else if (event.keyCode === 27) {
			$(this).val("");
		}
	});

	$(".find-password-button").on("click", function() {
		resetExceptionAlert();
		findPassword();
	});


	/* ----------------Local Category Layer----------------*/
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
	showMyLoginLayer();
	checkSignedIn();
});
