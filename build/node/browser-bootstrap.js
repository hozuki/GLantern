/**
 * Created by MIC on 2015/12/4.
 */
/*
 Prepare to run in browsers.
 In browsers, we must find the "window" object as global object in highest priority,
 instead of Node's "global" object.
 */
(function ($global) {
    if (!$global) {
        console.error("GLantern must run in a browser.");
    }
    else {
        ($global).GLantern = require("./index");
    }
})(window);

//# sourceMappingURL=browser-bootstrap.js.map
