$(() => {
  $(".slide-show div").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: ".flex-next",
    prevArrow: ".flex-prev"
  });
})
