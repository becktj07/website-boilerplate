
$(document).ready(function(){
    $("#sticky-nav").sticky({ topSpacing: 0 });
    $(window).smartresize(function () {
        if (window.matchMedia("screen and (min-width: 768px)").matches) {
            $('.sticky-wrapper').removeAttr('style');
        } else {
            $('.sticky-wrapper').css('height', '0');
        }
    });
});