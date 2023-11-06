var TrandingSlider = new Swiper('.tranding-slider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

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
        if (window.scrollY < 400) {
            iconRemonter.style.visibility = "hidden";
        }
        else {
            iconRemonter.style.visibility = "visible";
        }

    });


    document.addEventListener("DOMContentLoaded", function() {

        animate_text();

        
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
    
