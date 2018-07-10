var tippyLoaded = importScripts("https://unpkg.com/tippy.js@2.5.3/dist/tippy.all.min.js");
setup.tippy = function (selector) {
    tippyLoaded.then(function () {
        tippy(selector);
    });
}

tippy.browser.onUserInputChange = type => {
  const method = type === 'touch' ? 'disable' : 'enable'
  for (const tooltip of tip.tooltips) {
    tooltip[method]()
  }
}

$(document).on(':passageend', function (ev) {
    tippy('.tip');
});
