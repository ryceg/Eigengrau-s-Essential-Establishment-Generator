setup.profileTooltip = function(id, char) {
    jQuery(function() {
        var span = document.getElementById(id)
        if(span) {
            span.title = char.descriptor.random() + " " + char.dndclass + " called " + char.name;
        }
    });
};
