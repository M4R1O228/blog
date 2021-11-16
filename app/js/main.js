var $status = $('.main-news__slider-counter');
var $slickElement = $('.main-news__slider');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $status.text(i + ' / ' + slick.slideCount);
});

function slickify(){
    $('.main-news__slider').slick({
        arrows: false,
        responsive: [
            {
                breakpoint: 2200,
                settings: "unslick"
            },
            {
                breakpoint: 992,
                settings: {
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../img/main-news/arrow-prev.svg" alt=""></button>',
                    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../img/main-news/arrow-next.svg" alt=""></button>',
                    mobileFirst: true
                }
            }
        ]
    });
    $('.popular-video__slider').slick({
        arrows: false,
        responsive: [
            {
                breakpoint: 2200,
                settings: "unslick"
            },
            {
                breakpoint: 768,
                settings: {
                    mobileFirst: true,
                    infinite: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
}
slickify();
$(window).resize(function(){
    location.reload();
    if (window.innerWidth >= 992) {
        slickify();
    }
});


let loginBtn = document.querySelector('.login__button');
let login = document.querySelector('.login__list');

loginBtn.addEventListener('click', (event) =>{
	event.preventDefault();
	login.classList.toggle('active');
	loginBtn.classList.toggle('active');
});







