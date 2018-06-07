Setting.addToggle("showSliders", {
    label : "Show sliders?"
    default: true,
});

Setting.addToggle("showTutorial", {
    label : "Show tutorial?"
    default: true,
});

Setting.addToggle("$showCelsius", {
    label : "Show celsius?"
    default: true,
});

var settingWidescreenHandler = function () {
    if (settings.widescreen) { // is true
        $("html").addClass("widescreen");
    }
    else { // is false
        $("html").removeClass("widescreen");
    }
};
Setting.addToggle("widescreen", {
    label    : "Allow the story to use the full width of your browser window?",
    default  : false,
    onInit   : settingWidescreenHandler,
    onChange : settingWidescreenHandler
});
