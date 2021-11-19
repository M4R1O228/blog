const $mainNewsStatus = $('.main-news-slider__counter');
const $mainNewsSlider = $('.main-news__slider');
const $mastTalkedStatus = $('.most-talked-slider__counter');
const $mostTalkedSlider = $('.most-talked__slider');
const $popularArticlesStatus = $('.popular-articles-slider__counter');
const $popularArticlesSlider = $('.popular-articles__slider');

$mainNewsSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    const i = (currentSlide ? currentSlide : 0) + 1;
    $mainNewsStatus.text(i + ' / ' + slick.slideCount);
});

$mostTalkedSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    const i = (currentSlide ? currentSlide : 0) + 1;
    $mastTalkedStatus.text(i + ' / ' + slick.slideCount);
});

$popularArticlesSlider.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    const i = (currentSlide ? currentSlide : 0) + 1;
    $popularArticlesStatus.text(i + ' / ' + slick.slideCount);
});

$('.popular-tags__slider').slick({
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: false,
    responsive: [
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 2,
                mobileFirst: true
            }
        },
        {
            breakpoint: 321,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});

$('.interesting__list-slider').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../img/main-news/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../img/main-news/arrow-next.svg" alt=""></button>',

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
function mostTalkedSlider() {
    $('.most-talked__slider').slick({
        arrows: false,
        responsive: [
            {
                breakpoint: 2200,
                settings: "unslick"
            },
            {
                breakpoint: 576,
                settings: {
                    mobileFirst: true,
                    infinite: false,
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../img/main-news/arrow-prev.svg" alt=""></button>',
                    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../img/main-news/arrow-next.svg" alt=""></button>',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
    $('.popular-articles__slider').slick({
        arrows: false,
        responsive: [
            {
                breakpoint: 2200,
                settings: "unslick"
            },
            {
                breakpoint: 576,
                settings: {
                    mobileFirst: true,
                    infinite: false,
                    arrows: true,
                    prevArrow: '<button type="button" class="slick-btn slick-prev"><img src="../img/main-news/arrow-prev.svg" alt=""></button>',
                    nextArrow: '<button type="button" class="slick-btn slick-next"><img src="../img/main-news/arrow-next.svg" alt=""></button>',
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });
}
mostTalkedSlider();
$(window).resize(function(){
    location.reload();
    if (window.innerWidth >= 992) {
        slickify();
    }
    if (window.innerWidth >= 576) {
        mostTalkedSlider();
    }
});




let loginBtn = document.querySelector('.login__button');
let login = document.querySelector('.login__list');

loginBtn.addEventListener('click', (event) =>{
	event.preventDefault();
	login.classList.toggle('active');
	loginBtn.classList.toggle('active');
});











