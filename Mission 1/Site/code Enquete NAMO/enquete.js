/* mixitup filter portfolio */
let mixerD = mixitup('.pathoContainer', {
    selectors: {
        target: '.tab'
    },
    animation:{
        duration: 300
    }
});

/* link active work */
const linkTab = document.querySelectorAll('.patho_item')

function activeTab(){
    linkTab.forEach(l=> l.classList.remove('active-tab'))
    this.classList.add('active-tab')
}

linkTab.forEach(l=> l.addEventListener("click", activeTab))


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


    //Menu Hamberger

    const mH = document.querySelector(".menu-hamburger");
    const nL = document.querySelector(".nav-likns");

    mH.addEventListener('click', () => {
        nL.classList.toggle('mobile-menu')
    });

    mH.addEventListener('click', visible);
    function visible() {
        nL.style.display = "flex";
        mH.removeEventListener("click", visible);
    }



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
}


