$(document).ready(function () {
    $(".menu-icon").on("click", function () {
        $("nav ul ").toggleClass("show");
    });
});

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        $("nav").addClass("black");
    }
    else {
        $("nav").removeClass("black");
    }
});