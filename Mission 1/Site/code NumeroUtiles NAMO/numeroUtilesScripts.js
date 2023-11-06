
window.onload = () => {

    animate_text();

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




    //Animation Text
    function animate_text() {
        let temps = 50,
            debut = 0,
            text,
            lettres;

        document.querySelectorAll(".animate-text").forEach(function (elem) {
            text = elem.textContent.trim();
            elem.textContent = "";
            lettres = text.split("");
            elem.style.visibility = 'visible';

            lettres.forEach(function (lettre, index_1) {
                setTimeout(
                    function () {
                        elem.textContent += lettre;

                    },
                    debut + temps * index_1);
            });
            debut += temps * lettres.length;
        });
    }

    //Accordion extérieur
    const accBlocks = document.querySelectorAll(".blockAccordion");

    for (let block of accBlocks) {
        const titleAccordion = block.querySelector(".titleAccordion");
        const accordion = block.querySelector(".accordion");

        titleAccordion.addEventListener("click", function () {
            const allAccordions = document.querySelectorAll(".accordion");
            for (let otherAccordion of allAccordions) {
                if (otherAccordion !== accordion) {
                    otherAccordion.classList.remove("active");
                    otherAccordion.style.height = "0";
                    otherAccordion.querySelector(".accordion-element:first-child").style.borderTop = "none";
                }
            }

            accordion.classList.toggle("active");
            const heightContentAccordion = accordion.offsetHeight + 250;
            if (accordion.classList.contains("active")) {
                accordion.style.height = heightContentAccordion + "px";
                block.querySelector(".accordion-element:first-child").style.borderTop = "1px solid grey";
            } else {
                accordion.style.height = "0";
                block.querySelector(".accordion-element:first-child").style.borderTop = "none";
            }
        });
    }

    // Pour l'accordion intérieur
    const accElement = document.querySelectorAll(".accordion-element");

    for (let element of accElement) {
        element.addEventListener("click", function () {
            let plusMoins = this.querySelector(".plusMoins");
            let result = this.classList.toggle("active");

            // Fermer les autres éléments
            const allAccElements = document.querySelectorAll(".accordion-element");
            for (let otherElement of allAccElements) {
                if (otherElement !== element) {
                    otherElement.classList.remove("active");
                    otherElement.children[1].style.height = 0;
                    let otherPlusMoins = otherElement.querySelector(".plusMoins");
                    otherPlusMoins.textContent = "+";
                    otherPlusMoins.style.color = "rgb(71, 145, 209)";
                    otherPlusMoins.style.width = "25px";
                }
            }

            if (result) {
                let content = this.children[1].querySelector("p");
                let contentHeight = content.offsetHeight + 5;  //recupere la hauteur de p
                this.children[1].style.height = contentHeight + "px"; // et on l'agrandit
                plusMoins.textContent = "-";
                plusMoins.style.color = "black";
                plusMoins.style.width = "21px";
            } else {
                this.classList.remove("active");
                this.children[1].style.height = 0;
                plusMoins.textContent = "+";
                plusMoins.style.color = "rgb(71, 145, 209)";
                plusMoins.style.width = "25px";
            }
        });
    }


    const menuHamburger = document.querySelector(".menu-hamburger");
    const navLinks = document.querySelector(".nav-likns");
  
    menuHamburger.addEventListener('click',()=>{
    navLinks.classList.toggle('mobile-menu') });
  
    menuHamburger.addEventListener('click', visible);
      function visible(){
          menuHamburger.removeEventListener("click", visible);
      }
  
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

