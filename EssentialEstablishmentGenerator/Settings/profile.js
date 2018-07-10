setup.profileTooltip = function(id, ch) {
    var char = ch;
    jQuery(function() {
        var span = document.getElementById(id)
        if(span) {
            span.title = "A " + char.weight + " " + char.malefemale + " " + char.raceadjective + " " + char.dndclass + " with " + char.physicaltrait + " called " + char.name;
            tippy("#" + span.id);
        }
    });
};
