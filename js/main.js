(function ($) {
    "use strict";
    
    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.header').addClass('header-sticky');
        } else {
            $('.header').removeClass('header-sticky');
        }
    });
    
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 768) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });
    
    
    // Category News Slider
    $('.cn-slider').slick({
        autoplay: false,
        infinite: true,
        dots: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
})(jQuery);


// Contact Form

document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".image-carousel");
    const imageContainer = carousel.querySelector(".image");
    const images = Array.from(imageContainer.children);

    let currentIndex = 0;
    let slideInterval;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % images.length;
        updateSlide();
    }

    function updateSlide() {
        const slideWidth = carousel.clientWidth;
        const translateX = -currentIndex * slideWidth;
        imageContainer.style.transform = `translateX(${translateX}px)`;
    }

    function startAutoplay() {
        slideInterval = setInterval(nextSlide, 3000);
    }

    function stopAutoplay() {
        clearInterval(slideInterval);
    }

    carousel.addEventListener("mouseenter", stopAutoplay);
    carousel.addEventListener("mouseleave", startAutoplay);

    startAutoplay();
});




function validateForm() {
    var name = document.forms["contactForm"]["name"].value;
    var email = document.forms["contactForm"]["email"].value;
    var subject = document.forms["contactForm"]["subject"].value;
    var message = document.forms["contactForm"]["message"].value;

    if (name == "") {
        alert("Please enter your name.");
        return false;
    }

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    if (subject == "") {
        alert("Please enter the subject.");
        return false;
    }

    if (message == "") {
        alert("Please enter your message.");
        return false;
    }

    return true;
}


// Enail Form

function validateForm() {
    var email = document.forms["emailForm"]["email"].value;

    if (email == "") {
        alert("Please enter your email.");
        return false;
    }

    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    return true;
}