$(function(){


  $('.slider__inner').slick({
    arrows: false, dots: true, infinity: true,
  });

  $('.works__inner').slick({
    arrows: true, 
    dots: false, 
    infinity: true, 
    slidesToShow: 4, 
    slidesToScrol: 1,
    prevArrow: '<button class="slick-arrow slick-prev"><img src="img/svg/bigger-left-arrow.svg" alt=""></button>',
    nextArrow: '<button class="slick-arrow slick-next"><img src="img/svg/bigger-right-arrow.svg" alt=""></button>',
  });

});