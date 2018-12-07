//=require ../../node_modules/slick-carousel/slick/slick.min.js
//=require ../../node_modules/object-fit-images/dist/ofi.min.js

//=require partials/app.js

$(function () {
    objectFitImages()
});


$('.reviews__slider').slick({
    slidesToShow: 3,
    slidesToScroll: 2,
    infinite: true,
    dots: true,
    arrows: true,
    variableWidth: true,
    prevArrow: $('.reviews__prev'),
    nextArrow: $('.reviews__next'),

    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false,
                infinite: true
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: false,
                dots: false,
                infinite: true
            }
        }
    ]
});

$('.text__open').click(function () {
    $(this).closest('.content__item').toggleClass('active').siblings().removeClass('active');
});

$('.reviews__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var contItem = $('.content__item');
    contItem.removeClass('active');
});

$('.btn-review').click(function () {
    var reviewInput1 = $('.input__val-1').val().length,
        reviewInput2 = $('.input__val-2').val().length,
        reviewInput3 = $('.input__val-3').val().length;
    if (reviewInput1 !== 0 && reviewInput2 !== 0 && reviewInput3 !== 0) {
        $('.input__val-1').val("");
        $('.input__val-2').val("");
        $('.input__val-3').val("");
        $('.popup__review').addClass('active');
        $('.popup__review').click(function () {
            $(this).removeClass('active');
        });
    } else {
        alert('Заполните поля');
    }
});

$('.review__file-trigger').on('click', function () {
    $('.answer__file').click();
});

$('.answer__file').on('change', function () {
    var name = $(this)[0].value.split('\\');
    var filesName = name[name.length - 1];
    // $('.file-name').text('Hoi');
    alert('Ваш файл ' + filesName + ' загружен');
});