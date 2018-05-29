function change(state) {
    if(state === null) {
        $("div").text("Original");
    } else {
        $("div").text(state.url);
    }
}

$(window).on("popstate", function(e) {
    change(e.originalEvent.state);
});

$("a").click(function(e) {
    e.preventDefault();
    history.pushState({ url: "/page2" }, "/page2", "page 2");
});

(function(original) {
    history.pushState = function(state) {
        change(state);
        return original.apply(this, arguments);
    };
})(history.pushState);
