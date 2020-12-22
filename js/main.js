new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 5,
    // init: false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        100: {
            slidesPerView: 2,
            spaceBetween: 5,
        },
        600: {
            slidesPerView: 3,
            spaceBetween: 5,
        },
        880: {
            slidesPerView: 4,
            spaceBetween: 15,
        },
        1220: {
            slidesPerView: 6,
            spaceBetween: 15,
        }
    },
    freeMode: true,
});