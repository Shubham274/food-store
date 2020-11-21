$(document).ready(function () {
  $(".food-slider").slick({
    autoplay: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev-btn",
    nextArrow: ".next-btn",
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  let navTrigger = document.querySelector(".nav-trigger");
  let siteWrapper = document.querySelector(".site-content-wrapper");

  navTrigger.addEventListener("click", () => {
    siteWrapper.classList.toggle("scaled");
  });
});
