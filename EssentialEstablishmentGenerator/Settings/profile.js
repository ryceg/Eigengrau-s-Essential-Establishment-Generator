setup.profileTooltip = function(id, ch) {
    var char = ch;
    jQuery(function() {
        var span = document.getElementById(id)
        if(span) {
            span.title = char.descriptor.random() + " " + char.dndclass + " called " + char.name;
            tippy("#" + span.id);
        }
    });
};
