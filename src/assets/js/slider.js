$('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
    }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
    }]
})