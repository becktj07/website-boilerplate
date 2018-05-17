
$(document).ready(function () {
    imageSlider();
});

function imageSlider() {
    $('.image-slider').slick({
        autoplay: false,
        dots: true,
        arrows: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
    });
};