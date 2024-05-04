$(window).scroll(function () {
    var sticky = $('.header-nav'),
        scroll = $(window).scrollTop();

    if (scroll >= 40) sticky.addClass('fixed');
    else sticky.removeClass('fixed');
});
