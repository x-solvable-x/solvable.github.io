(function ($) {
    "use strict"; $('#preloader').fadeOut();
    var owl = $("#client-testimonial");
    owl.owlCarousel({
        navigation: true,
        pagination: false,
        slideSpeed: 1000,
        stopOnHover: true,
        autoPlay: true,
        items: 1,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        addClassActive: true,
        itemsDesktop: [1199, 1],
        itemsDesktopSmall: [980, 1],
        itemsTablet: [768, 1],
        itemsTablet: [767, 1],
        itemsTabletSmall: [480, 1],
        itemsMobile: [479, 1],
    });

    $('#client-testimonial')
        .find('.owl-prev')
        .html('<i class="lni-chevron-left"></i>');

    $('#client-testimonial')
        .find('.owl-next')
        .html('<i class="lni-chevron-right"></i>');

    var owl = $(".showcase-slider");
    owl.owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 1000,
        margin: 10,
        stopOnHover: true,
        autoPlay: true,
        items: 5,
        responsive: {
            1199: {
                items: 5
            },
            992: {
                items: 4
            },
            768: {
                items: 3
            },
            480: {
                items: 2
            },
            0: {
                items: 1
            }
        }
    });

    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 20) {
            $(".navbar-area").removeClass("sticky menu-bg");
        }
        else {
            $(".navbar-area").addClass("sticky menu-bg");
        }
    });

    $('.page-scroll').click(function () {
        var hash = this.hash;
        var position = $(hash).offset().top - 60;
        $('html').animate({ scrollTop: position }, 900);
    });

    var scrollLink = $('.page-scroll');
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
            if (scrollLink.length) {
                var my_hash = this.hash
                var sectionOffset = $(my_hash).offsetTop - 73;
                if (sectionOffset <= scrollbarLocation) {
                    $(this).parent().addClass('active');
                    $(this).parent().siblings().removeClass('active');
                }
            }
        });
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-collapse").removeClass("show");
    });

    $(".navbar-toggler").on('click', function () {
        $(this).toggleClass("active");
    });

    $(".navbar-nav a").on('click', function () {
        $(".navbar-toggler").removeClass('active');
    });

    $('.video-popup').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
    });

    var offset = 200;
    var duration = 500;
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset) {
            $('.back-to-top').fadeIn(400);
        }
        else {
            $('.back-to-top').fadeOut(400);
        }
    });

    $('.back-to-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 600); return false;
    })

    $(window).on('load', function () {
        $('body').scrollspy({
            target: '.navbar-collapse',
            offset: 195
        });
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > 100) {
                $('.fixed-top').addClass('menu-bg');
            }
            else {
                $('.fixed-top').removeClass('menu-bg');
            }
        });
    });

    function close_toggle() {
        if ($(window).width() <= 768) {
            $('.navbar-collapse a').on('click', function () {
                $('.navbar-collapse').collapse('hide');
            });
        }
        else {
            $('.navbar .navbar-inverse a').off('click');
        }
    }
    close_toggle();
    $(window).resize(close_toggle);
    $('.lightbox').nivoLightbox({
        effect: 'fadeScale',
        keyboardNav: true,
    });
}(jQuery));