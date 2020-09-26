$(document).ready(function () {
    $('.carousel').slick({
        infinity: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 1008,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              },
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
              }
            }
          ],
        appendArrows: $('.arrows'),
        prevArrow: '<button id="prev" type="button" class="arrow prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',
        nextArrow: '<button id="next" type="button" class="arrow next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'
    });
});