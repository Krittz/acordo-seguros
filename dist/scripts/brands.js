document.addEventListener("DOMContentLoaded", function () {
  const brands = [
    "dist/assets/logos/allianz.svg",
    "dist/assets/logos/axa.svg",
    "dist/assets/logos/azul.svg",
    "dist/assets/logos/bradesco.svg",
    "dist/assets/logos/brasilprev.svg",
    "dist/assets/logos/essor.svg",
    "dist/assets/logos/hdi.svg",
    "dist/assets/logos/itau.svg",
    "dist/assets/logos/mapfre.svg",
    "dist/assets/logos/porto.svg",
    "dist/assets/logos/protector.svg",
    "dist/assets/logos/sompo.svg",
    "dist/assets/logos/suhai.svg",
    "dist/assets/logos/sul-america.svg",
    "dist/assets/logos/tokiomarine.svg",
    "dist/assets/logos/unimed.svg",
    "dist/assets/logos/zurich.svg",
  ];

  const carousel = document.querySelector(".brand-carousel");

  // Função para criar os logos dinamicamente com tag <img>
  brands.forEach((brand) => {
    const item = document.createElement("div");
    item.classList.add("brand-carousel-item");

    const img = document.createElement("img"); // Criar a tag <img>
    img.src = brand; // Definir o caminho da imagem
    img.alt = "Logo"; // Definir um texto alternativo para acessibilidade
    img.style.height = "56px"; // Definir altura da imagem
    img.style.objectFit = "contain"; // Garantir que a imagem se encaixe corretamente

    item.appendChild(img); // Inserir a imagem dentro do item
    carousel.appendChild(item); // Inserir o item dentro do carrossel
  });

  // Clonagem para o loop infinito
  const items = Array.from(carousel.children);

  // Duplicar os itens para um loop contínuo
  items.forEach((item) => {
    const clone = item.cloneNode(true);
    carousel.appendChild(clone);
  });

  // Ajustar a largura do carrossel com base no conteúdo
  let totalWidth = 0;
  items.forEach((item) => {
    totalWidth += item.offsetWidth + 50; // Inclui a margem entre os logos
  });

  carousel.style.width = `${totalWidth * 2}px`; // O dobro da largura dos logos
});
