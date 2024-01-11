$('.slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: false,
    useTransform: false,
    speed: 300,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
    }, {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
          dots: true
        }
    }]
})