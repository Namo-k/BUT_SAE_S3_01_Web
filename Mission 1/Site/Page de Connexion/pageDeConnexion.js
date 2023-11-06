const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

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


