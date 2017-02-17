require.config({
    baseUrl: global.root,

    paths: {
        "async"         : "plugins/requirejs/async",

        "jquery"        : "plugins/jquery/jquery.min",
		"jquery-asRange": "plugins/jquery-asRange/js/jquery-asRange.min",
        "bootstrap"     : "plugins/bootstrap/js/bootstrap.min",
		"bootstrap-slider": "plugins/bootstrap-slider/js/bootstrap-slider.min",
        "clipboard"     : "plugins/clipboard/clipboard.min",

        "common"        : "js/common"
    },

    shim: {
        "bootstrap": {
            deps: ["jquery"]
        }
    },

    deps: []
});
