var tippyLoaded = new Promise(function(resolve, reject) {
    importScripts("https://unpkg.com/tippy.js@2.5.3/dist/tippy.all.min.js")
        .then(function() { resolve(); });
});

setup.tippy = function(selector) {
    tippyLoaded.then(function() { tippy(selector); });
}
