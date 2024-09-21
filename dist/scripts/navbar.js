// Função para mostrar o menu no clique
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  toggle.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
    toggle.classList.toggle("show-icon");
  });
};

showMenu("nav-toggle", "nav-menu");

// Dropdown Menu - Clique para expandir e hover
const dropdownItems = document.querySelectorAll(".dropdown__item");

dropdownItems.forEach((item) => {
  const dropdownButton = item.querySelector(".dropdown__button");

  dropdownButton.addEventListener("click", () => {
    const showDropdown = document.querySelector(".show-dropdown");
    toggleItem(item);

    if (showDropdown && showDropdown !== item) {
      toggleItem(showDropdown);
    }
  });

  // Abre o menu ao passar o mouse (hover)
  item.addEventListener("mouseenter", () => {
    item.classList.add("hover-dropdown");
    const dropdownContainer = item.querySelector(".dropdown__container");
    dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
  });

  // Fecha o menu ao tirar o mouse (hover out)
  item.addEventListener("mouseleave", () => {
    const dropdownContainer = item.querySelector(".dropdown__container");
    dropdownContainer.style.height = "0";
    item.classList.remove("hover-dropdown");
  });
});

const toggleItem = (item) => {
  const dropdownContainer = item.querySelector(".dropdown__container");

  if (item.classList.contains("show-dropdown")) {
    dropdownContainer.removeAttribute("style");
    item.classList.remove("show-dropdown");
  } else {
    dropdownContainer.style.height = dropdownContainer.scrollHeight + "px";
    item.classList.add("show-dropdown");
  }
};

// Remover estilos ao redimensionar a janela
const mediaQuery = matchMedia("(min-width: 1118px)"),
  dropdownContainer = document.querySelectorAll(".dropdown__container");

const removeStyle = () => {
  if (mediaQuery.matches) {
    dropdownContainer.forEach((e) => {
      e.removeAttribute("style");
    });

    dropdownItems.forEach((e) => {
      e.classList.remove("show-dropdown");
    });
  }
};
addEventListener("resize", removeStyle);
