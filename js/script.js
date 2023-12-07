$(document).ready(function () {
  $(".main-slider__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinity: true,
    arrows: true,
    dots: true,
    centerPadding: "0px",
    dotsClass: "main-slider__dots",
  });

  $(".business__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    // infinity: true,
    // autoplaySpeed: 1500,
    // arrows: false,
    // pauseOnHover: true,
    dots: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  });

  $(".education__slider").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinity: true,
    dots: false,
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  });

  $(".news__slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    infinity: true,
    // autoplay: true,
    autoplaySpeed: 1500,
    arrows: false,
    dots: false,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 3,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          centerPadding: "50px",
        },
      },
      {
        breakpoint: 540,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "50px",
        },
      },
    ],
  });
});
