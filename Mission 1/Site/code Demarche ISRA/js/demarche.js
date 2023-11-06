




function init() {
    
  initSwiper('carousel1');

  initSwiper('carousel2');
}




function initSwiper(containerId) {
new Swiper(`#${containerId} .slide-container`, {
  spaceBetween: 30,
  slidesPerView: 3,  
  centerSlide: true,
  grabCursor: true,
  fade: true,
  pagination: {
    el: `#${containerId} .swiper-pagination`,
    clickable: true,
  },
  navigation: {
    prevEl: `#${containerId} .swiper-button-prev`,
    nextEl: `#${containerId} .swiper-button-next`,
  },
  breakpoints: {
    0: {
      slidesPerView: 1, 
    },
    685: {
      slidesPerView: 2, 
    },
    1031: {
      slidesPerView: 3, 
    },
  },
});
}



document.addEventListener('DOMContentLoaded', function () {

initSwiper('carousel1');
initSwiper('carousel2');
initSwiper('carousel3');
initSwiper('carousel4');
initSwiper('carousel5');
initSwiper('carousel6');
initSwiper('carousel7');

});

function scrollToElement(elementId) {
var element = document.getElementById(elementId);
if (element) {
  element.scrollIntoView({ behavior: "smooth", block: "center" });
}
}

document.getElementById("scrollToElections").addEventListener("click", function() {
scrollToElement("carousel2");
});

document.getElementById("scrollToAff").addEventListener("click", function() {
scrollToElement("carousel3");
});

document.getElementById("scrollToPaiement").addEventListener("click", function() {
scrollToElement("carousel1");
});


document.getElementById("scrollToEtatCivil").addEventListener("click", function() {
scrollToElement("carousel4");
});

document.getElementById("scrollToTravaux").addEventListener("click", function() {
scrollToElement("carousel5");
});

document.getElementById("scrollToFamille").addEventListener("click", function() {
scrollToElement("carousel6");
});

document.getElementById("scrollToProprete").addEventListener("click", function() {
scrollToElement("carousel7");
});

const menuHamburger = document.querySelector(".menu-hamburger");
const navLinks = document.querySelector(".nav-likns");

menuHamburger.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu') });

menuHamburger.addEventListener('click', visible);
  function visible(){
      navLinks.style.display = "flex";
      menuHamburger.removeEventListener("click", visible);
  }

  // Icon Remonter
  const iconRemonter = document.querySelector(".iconRemonter");
  iconRemonter.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth"
      })
  })

  window.addEventListener('scroll', () => {
      iconRemonter.style.visibility = "hidden";
      if (window.scrollY < 500) {
          iconRemonter.style.visibility = "hidden";
      }
      else {
          iconRemonter.style.visibility = "visible";
      }
  });

  function hover(img, i)
  {
      switch(i){
          case 1 : 
              img.src = "../images/recherche-hover.png";
              break;
          case 2 : 
              img.src = "../images/connexion-hover.png";
              break;
          case 3 : 
              img.src = "../images/hamburger-hover.png";
              break;
          default: break;
      }
  }
  function hoverOut(img, i)
  {
      switch(i){
          case 1 : 
              img.src = "../images/recherche.png";
              break;
          case 2 : 
              img.src = "../images/connexion.png";
              break;
          case 3 : 
              img.src = "../images/hamburger.png";
              break;
          default: break;
      }
  }

  document.addEventListener("DOMContentLoaded", function() {
    const btnSearch = document.querySelector(".btnSearch");
    const inputSearch = document.querySelector(".inputSearch");
    const navLikns = document.querySelector(".nav-likns");

    let isInputVisible = false; 

    btnSearch.addEventListener("click", function() {
        if (isInputVisible) {
            inputSearch.style.display = "none";
            navLikns.style.display = "block";
            isInputVisible = false;
        } else {
            inputSearch.style.display = "block";
            navLikns.style.display = "none";
            isInputVisible = true;
        }
    });

    

});