$(document).ready(function () {
    AOS.init({
        offset: 200,
        duration: 600,
        easing: 'ease-in-sine',
        delay: 300,
        once: true,
        disable: 'mobile'
    });

    $('.content-menu-toggle').on('click', function (e) {
        e.preventDefault;
        $('.menu-right').toggleClass('open-menu');
        $('.content-menu-right').addClass('animated fadeInRight');
        return false;
    });

    $('.close-menu-right').on('click', function (e) {
        e.preventDefault;
        $('.content-menu-toggle').trigger('click');
    });

    $('body').on('click', function (e) {
        e.preventDefault;
        if (!$(e.target).is('.menu-right, .head - menu - right, .content - menu - right, .content - menu - right ul li, .content - menu - toggle, .content-menu-text, .content-menu-right ul, .container, .head-menu-right span')) {
            $('.menu-right').removeClass('open-menu');
            $('.content-menu-right').removeClass('animated fadeInRight');
        };
    });

    $(window).on('scroll', function () {

        if ($(window).scrollTop() > 150) {
            $('.content-menu').addClass('opaque');
        } else {
            $('.content-menu').removeClass('opaque');
        }
    });
    $(window).on('scroll', function () {

        if ($(window).scrollTop() >= 500) {
            $('.uptop').fadeIn();
        } else {
            $('.uptop').fadeOut();
        }
    });

    $('a[href="#top"]').on('click', function () {

        $('html, body').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });

    var $grid = $('.gallery-image').imagesLoaded(function () {
        $grid.masonry({
            itemSelector: '.gallery-image-items',
            percentPosition: true,

        });
    });

    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
          "download",
          "close",
      ],
        loop: true,
        //protect: true,
        animationEffect: "fade",
        caption: function (instance, item) {
            return $(this).find('.caption-fancybox').html();
        },


    });

    $('.cal1').owlCarousel({
        items: 6,
        dots: true,
        loop: true,
        margin: 50,
        dotsEach: 2,
        nav: false,
        responsive: {
            0: {
                items: 2
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }

    });

    $('.cal2').owlCarousel({
        items: 1,
        loop: true,
        margin: 500,
        nav: true,
        smartSpeed: 1000,
        navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
        dots: false,
        responsive: {
            0: {
                items: 1,
                nav: false,
                dots: true,
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });


});

$(function () {
    $('.count-about').waypoint(function () {
        $('.count-about').addClass('animated fadeInUp');
        $('.count').countTo({
            speed: 2000,
            refreshInterval: 50,
        });
    }, {
        offset: '90%'
    });

    $('.head-about').waypoint(function () {
        $('.head-about').addClass('animated fadeInUp');

    }, {
        offset: '90%'
    });

    $('.content-about').waypoint(function () {
        $('.content-about').addClass('animated fadeInUp');
    }, {
        offset: '90%'
    })
});
