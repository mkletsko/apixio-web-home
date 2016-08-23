var App;

/* global variable App - window.App */
App = (function(){

    /* drop-down-menu */
    (function () {
        var linkDrop = document.querySelector('.drop-down-menu'),
            dropMenuOpen = document.querySelector('.drop-menu-open'),
        openMenu = function (event) {
            dropMenuOpen.style.display = 'block';

            event.stopPropagation();
            event.preventDefault();
        },
        closeMenu = function (event) {
            dropMenuOpen.style.display = '';

            event.stopPropagation();
            event.preventDefault();
        };

        if (linkDrop.addEventListener) {
            linkDrop.addEventListener('mouseenter', openMenu);
            linkDrop.addEventListener('mouseleave', closeMenu);
        } else if (linkDrop.attachEvent) {
            linkDrop.attachEvent('onmouseenter', openMenu);
            linkDrop.attachEvent('onmouseleave', closeMenu);
        } else {
            linkDrop.onmouseenter = openMenu;
            linkDrop.onmouseleave = closeMenu;
        };

    })();
    /* END drop-down-menu */


    /* carousel */
    (function () {
        var carouselElem = document.querySelector('.carousel'),
            galleryLi = document.getElementsByClassName('carousel-content'),
            navCarousel = document.getElementsByClassName('nav-carousel');
            buttonPrev = document.querySelector('.prev'),
            buttonNext = document.querySelector('.next'),
            positionSlide = 0,

            showPrev = function (e) {
                galleryLi[positionSlide].classList.remove('slide-showed');
                navCarousel[positionSlide].classList.remove('active-nav-carousel');
                positionSlide = positionSlide - 1;

                if (positionSlide < 0) {
                    positionSlide = galleryLi.length - 1;
                }

                galleryLi[positionSlide].classList.add('slide-showed');
                navCarousel[positionSlide].classList.add('active-nav-carousel');
            },

            showNext = function () {
                galleryLi[positionSlide].classList.remove('slide-showed');
                navCarousel[positionSlide].classList.remove('active-nav-carousel');
                positionSlide = positionSlide + 1;

                if (positionSlide >= galleryLi.length) {
                    positionSlide = 0;
                }
                galleryLi[positionSlide].classList.add('slide-showed');
                navCarousel[positionSlide].classList.add('active-nav-carousel');
            };

        /* click prev */
        var clickPrev = function (e) {
            var e = e || window.event;
            showPrev();
        };
        /* END click prev */

        /* click next */
        var clickNext = function (e) {
            var e = e || window.event;
            showNext();
        };
        /* END click next */

        /* click next */
        var clickNavigationNext = function (event) {
            var target = event.target;

            if (!target.classList.contains('nav-carousel')) {
                return;
            }

            for (; positionSlide < navCarousel.length; positionSlide++) {
                if (navCarousel[positionSlide].classList.contains('active-nav-carousel')) {
                    navCarousel[positionSlide].classList.remove('active-nav-carousel');
                }
            }

            target.classList.add('active-nav-carousel');

        };
        /* END click next */


        /*  event add elements */
        if (buttonPrev.addEventListener || buttonNext.addEventListener || document.addEventListener){
            buttonPrev.addEventListener('click', clickPrev);
            buttonNext.addEventListener('click', clickNext);
        } else if (buttonPrev.attachEvent || buttonNext.attachEvent || document.attachEvent){
            buttonPrev.attachEvent('onclick', clickPrev);
            buttonNext.attachEvent('onclick', clickNext);
        } else {
            buttonPrev.onclick = clickPrev;
            buttonNext.onclick = clickNext;
        };
        /*  END event add elements */

    })();
    /* END carousel */


    /* toggle-menu */
    (function () {
        var toggleMenu = document.querySelector('.nav-toggle'),
            closeMenu = document.querySelector('.icon-close'),
            navElem = document.querySelector('nav.nav-site'),
            openToggleMenu = function (event) {

                navElem.style.display = 'block';
                closeMenu.style.display = 'block';

                event.preventDefault();
                event.stopPropagation();

            },
            closeToggleMenu = function (event) {

                if(navElem.style.display == 'block') {
                    navElem.style.display = 'none';
                    closeMenu.style.display = 'none';
                }

                event.preventDefault();
                event.stopPropagation();

            };

        /*  event add elements menu */
        if (toggleMenu.addEventListener || closeMenu.addEventListener) {
            toggleMenu.addEventListener('click', openToggleMenu);
            closeMenu.addEventListener('click', closeToggleMenu);
        } else if (toggleMenu.attachEvent || closeMenu.attachEvent){
            toggleMenu.attachEvent('onclick', openToggleMenu);
            closeMenu.attachEvent('onclick', closeToggleMenu);

        } else {
            toggleMenu.onclick = openToggleMenu;
            closeMenu.onclick = closeToggleMenu;
        };
        /*  END event add elements menu */

    })();
    /* END toggle-menu */


    /* carousel middle */
    (function () {
        var middleCarouselElem = document.querySelector('.carousel-middle-content'),
            middleCarouselLi = document.getElementsByClassName('carousel-middle-content'),
            buttonPrev = document.querySelector('.backward'),
            buttonNext = document.querySelector('.forward'),
            positionSlide = 0,

            showPrev = function (e) {
                middleCarouselLi[positionSlide].classList.remove('slide-showed');
                positionSlide = positionSlide - 1;

                if (positionSlide < 0) {
                    positionSlide = middleCarouselLi.length - 1;
                }

                middleCarouselLi[positionSlide].classList.add('slide-showed');
            },

            showNext = function () {
                middleCarouselLi[positionSlide].classList.remove('slide-showed');
                positionSlide = positionSlide + 1;

                if (positionSlide >= middleCarouselLi.length) {
                    positionSlide = 0;
                }
                middleCarouselLi[positionSlide].classList.add('slide-showed');
            };

        /* click prev */
        var clickPrev = function (e) {
            var e = e || window.event;
            showPrev();
        };
        /* END click prev */

        /* click next */
        var clickNext = function (e) {
            var e = e || window.event;
            showNext();
        };
        /* END click next */

        /*  event add elements */
        if (buttonPrev.addEventListener || buttonNext.addEventListener){
            buttonPrev.addEventListener('click', clickPrev);
            buttonNext.addEventListener('click', clickNext);
        } else if (buttonPrev.attachEvent || buttonNext.attachEvent){
            buttonPrev.attachEvent('onclick', clickPrev);
            buttonNext.attachEvent('onclick', clickNext);
        } else {
            buttonPrev.onclick = clickPrev;
            buttonNext.onclick = clickNext;
        };
        /*  END event add elements */

    })();
    /* END carousel middle */


    /* button position for middle carousel */
    (function () {
        var backArrow = document.querySelector('.backward'),
            nextArrow = document.querySelector('.forward'),
            caroselMiddleContent = document.querySelector('.content-for-slider'),
            resizeMiddleCarousel = function () {
            backArrow.style.left = caroselMiddleContent.getBoundingClientRect().left + 'px';
            nextArrow.style.right = caroselMiddleContent.getBoundingClientRect().left + 'px';
        };

        backArrow.style.left = caroselMiddleContent.getBoundingClientRect().left + 'px';
        nextArrow.style.right = caroselMiddleContent.getBoundingClientRect().left  + 'px';


        /*  event add elements */
        if (window.addEventListener){
            window.addEventListener('resize', resizeMiddleCarousel);
        } else if (window.attachEvent){
            buttonPrev.attachEvent('onresize', resizeMiddleCarousel);
        } else {
            window.onresize = resizeMiddleCarousel;
        };
        /*  END event add elements */

    })();
    /* END button position for middle carousel */


})();
/* END global variable App - window.App */