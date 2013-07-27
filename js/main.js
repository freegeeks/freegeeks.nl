// Init Skrollr
skrollr.init({
    forceHeight: false
});

$(function() {
    // Myth? On iOS it would make the website fullscreen
    //TODO test if this is iOS before apply
    $(window).scrollTop(1);
});
