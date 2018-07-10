var tippyLoaded = importScripts("https://unpkg.com/tippy.js@2.5.3/dist/tippy.all.min.js");
setup.tippy = function (selector) {
    tippyLoaded.then(function () {
        tippy(selector);
    });
}
