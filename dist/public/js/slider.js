var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  initialSlide: 5,  // Define o slide inicial
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

// Captura os links do menu
const dropdownLinks = document.querySelectorAll('.dropdown-link');

// Adiciona o evento de clique para cada link
dropdownLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault(); // Previne o comportamento padrão do link
    
    // Obtém o índice do slide através do atributo data-slide
    const slideIndex = this.getAttribute('data-slide');

    // Move o Swiper para o slide correspondente
    swiper.slideTo(slideIndex);
  });
});