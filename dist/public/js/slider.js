var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  loop: true,
  initialSlide: 5,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 300,
    modifier: 1,
    slideShadows: false,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});

const dropdownLinks = document.querySelectorAll(".dropdown-link");

dropdownLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const slideIndex = parseInt(this.getAttribute("data-slide"));

    swiper.slideToLoop(slideIndex);
  });
});
