/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});



var project = $('#projects-carousel').owlCarousel({
    nav: true,
    loop: true,
    margin:20,
    navText: ['<i class="fa fa-long-arrow-left"></i> Anterios', 'Siguiente<i class="fa fa-long-arrow-right"></i>'],
    responsive:{
        0:{
            items:1,
            margin: 0
        },
        600:{
            items:2
        },
        800:{
            items:2
        },
        992:{
            items:3
        },
        1200:{
            items:4
        },
    }
});




    /*------------------
        Background set
    --------------------*/
    $('.set-bg').each(function() {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });



        function hidePlaceholder() {
            document.querySelector('.map-container').classList.add('map-loaded');
        }
        
        // Fallback en caso de error
        setTimeout(() => {
            document.querySelector('.map-container')?.classList.add('map-loaded');
        }, 5000);
