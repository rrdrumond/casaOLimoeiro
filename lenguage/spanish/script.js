const restaurantsData = [
    
]



  // Funciones para el listado de objetos
  const categoryButtons = document.querySelectorAll(".category-item");
  const dialog = document.getElementById("dialog");
  const dialogTitle = document.querySelector(".dialog-title");
  const dialogText = document.querySelector(".dialog-text");
  const closeBtn = document.getElementById("closeBtn");
  let currentOpenList = null;

 


  
  function toggleList(containerId, dataList) {
    const container = document.getElementById(containerId);
    const isListOpen = !container.classList.contains("hidden");
  
    closeAllListsExcept(container);
  
    if (!isListOpen) {
      currentOpenList = container;
      renderObjectList(container, dataList);
      container.scrollIntoView({ behavior: "smooth" });
      container.classList.remove("hidden"); // Mostrar el contenedor
    } else {
      currentOpenList = null;
      container.classList.add("hidden"); // Ocultar el contenedor
    }
  }
  





  
  function closeAllListsExcept(excludeContainer) {
    const allContainers = document.querySelectorAll(".list-container");
    allContainers.forEach((container) => {
      if (container !== excludeContainer) {
        container.classList.remove("show");
        container.querySelectorAll(".object-button").forEach((button) => {
          button.style.display = "none";
        });
      }
    });
  }



  
  function createObjectButton(name, className) {
    const objectButton = document.createElement("button");
    objectButton.textContent = name;
    objectButton.classList.add("object-button");
    if (className) {
      objectButton.classList.add(className);
    }
    return objectButton;
  }
  


  function renderObjectList(container, data) {
    container.innerHTML = "";
    data.forEach((item) => {
      const objectButton = createObjectButton(
        item.nome,
        container.id === "restaurantListContainer" ? item.clase : ""
      );
      container.appendChild(objectButton);
      objectButton.addEventListener("click", () => {
        showObjectInfo(item);
      });
    });
  
    container.querySelectorAll(".object-button").forEach((button) => {
      button.style.display = "block";
    });
  };
  
  
  
  
  
  
  
  function showObjectInfo(object) {
    dialogTitle.textContent = object.nome;
    dialogText.innerHTML = `
      <p>Endereço: ${object.endereco}</p>
      <p>Número de teléfone: ${object.telefone}</p>
      <p>Puntuação: ${object.puntuacao}</p>
      <p>Comentarios: ${object.comentarios}</p>
      <a  class="link" href="${object.urlWeb}" target="_Website">
        <button class="custom-btn btn-5"; style="cursor:pointer">${object.website}</button>
        </a>
        <a class="link" href="${object.urlMenu}" target="_blank">
        <button class="custom-btn btn-5" style="cursor: pointer;">${object.menu}</button>
        </a>
        <a class="link" href="${object.urlMaps}" target="_blank">
        <button class="custom-btn btn-5" style="cursor: pointer;">${object.maps}</button>
        </a>
        `;
        dialog.style.display = "block";

        const listContainers = document.querySelectorAll(".list-container");
        listContainers.forEach((listContainer) => {
          listContainer.style.filter = "blur(5px)";
        });
  }
      
    

  function closeDialog() {
    dialog.style.display = "none";
    currentOpenList = null;
    const listContainers = document.querySelectorAll(".list-container");
    listContainers.forEach((listContainer) => {
      listContainer.style.filter = "none";
    });
  }
  

        
      
      // Al cerrar el diálogo, eliminar la clase "show" del .list-container para que el filtro "blur" se elimine
      
  window.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeDialog();
    }
  });
  
  categoryButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      const dataList = getData(target);
      toggleList(target, dataList);
    });
  });
  
  closeBtn.addEventListener("click", closeDialog);
  
  function getData(listId) {
    switch (listId) {
      case "restaurantListContainer":
        return restaurantsData;
      case "eventsListContainer":
        return eventosData;
      case "busListContainer":
        return autocarrosData;
      case "touristListContainer":
        return locaisTuristicosData;
      case "recommendationsListContainer":
        return recomendacoesData;
      default:
        return [];
    }
  }


  // Agregar evento click a todos los botones .object-button
  const objectButtons = document.querySelectorAll(".object-button");
  objectButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const object = getItemFromButton(button);
      showObjectInfo(object);
      // Actualizar el filtro "blur" en el .list-container cuando se haga click en un .object-button
      const listContainers = document.querySelectorAll(".list-container");
      listContainers.forEach((listContainer) => {
        if (listContainer === currentOpenList && dialog.style.display === "block") {
          listContainer.style.filter = "blur(5px)";
        } else {
          listContainer.style.filter = "none";
        }
      });
    });
  });
  
// Función para obtener el objeto item asociado al botón
function getItemFromButton(button) {
  const container = button.closest(".list-container");
  const dataIndex = parseInt(button.dataset.index);
  const dataList = getData(container.id);
  return dataList[dataIndex];
}
  
  
  
  
  // Galería de imágenes
  const galleryContainer = document.querySelector('.image-gallery');
  
  galleryContainer.addEventListener('mouseenter', () => {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
      img.style.animationPlayState = 'paused';
    });
  });
  
  galleryContainer.addEventListener('mouseleave', () => {
    const images = document.querySelectorAll('.gallery img');
    images.forEach(img => {
      img.style.animationPlayState = 'running';
    });
  });
  
  // Scroll to Top
  function toggleScrollToTopButton() {
    const scrollToTopButton = document.getElementById("scrollToTopButton");
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  }
  
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  
  document.addEventListener("scroll", toggleScrollToTopButton);
  
  
  // Modal de mapa de Google
  const mapButton = document.getElementById('mapButton');
  const mapModal = document.getElementById('mapModal');
  const modalClose = document.querySelector('.modal-close');
  
  mapButton.addEventListener('click', () => {
    mapModal.style.display = 'block';
  });
  
  modalClose.addEventListener('click', () => {
    mapModal.style.display = 'none';
  });
  
  window.addEventListener('click', (event) => {
    if (event.target === mapModal) {
      mapModal.style.display = 'none';
    }
  });
  
  
  
  
  
  //Menu Hamurguesa
  const menuSwitcherMobile = document.querySelector('.menu-switcher-mobile');
  const navbar = document.querySelector('.navbar');
  const dropdownItem = document.querySelector('.dropdown');
  
  // Evento click en el icono de hamburguesa para abrir el menú hamburguesa
  menuSwitcherMobile.addEventListener('click', function() {
    navbar.classList.toggle('show');
    const dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.remove('show');
  });
  
  // Evento click en "opciones" para mostrar el menú desplegable
  dropdownItem.addEventListener('click', function(event) {
    event.stopPropagation();
    const dropdownMenu = this.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
  });
  
  // cerrar y abrir menu de hamburguesa
  



  ScrollReveal().reveal('.header')
  ScrollReveal().reveal('.navbar', {delay:900, duration: 900, interval:400, easing:'ease-in', origin:'top'}) ; 
  ScrollReveal().reveal('.container', {delay:500, easing: 'ease-in'}) ; 
  ScrollReveal().reveal('.title', {delay:500, duration: 600, easing:'ease-in', interval:300, distance: '70px', origin:'top'}) ; 
  ScrollReveal().reveal('.category-btn', {delay:300, duration: 300, easing:'ease-in', interval:400, distance: '70px', origin:'right'}) ; 
  ScrollReveal().reveal('.image-gallery', {delay:300, duration: 300, easing:'ease-out', interval:400, distance: '70px', origin:'bottom'}) ;
  ScrollReveal().reveal('.localidad-background', {delay:500, duration: 500, easing:'ease-in', interval:400, distance: '70px',origin:'left'}) ;  
  ScrollReveal().reveal('.footer', {delay:500, duration: 500, easing:'ease-in', interval:400, distance: '70px',origin:'bottom'}) ;  
  ScrollReveal().reveal('.scroll-to-top-btn', {delay:900, duration: 900, easing:'ease-in', interval:900, distance: '70px',origin:'bottom'}) ;  
  ScrollReveal().reveal('.social-section', {delay:400, duration: 400, easing:'ease-in', interval:400}) ;  
