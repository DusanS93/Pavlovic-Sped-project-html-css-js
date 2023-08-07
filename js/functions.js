/* Menu scroll */
let menuLinks = document.getElementsByClassName("menu-links");
let mainBanners = document.getElementById("main-banners");
let main = document.getElementById("main");
let about = document.getElementById("about-us");
let ourWorks = document.getElementById("gallery");
let prices = document.getElementById("prices");
let footer = document.getElementById("footer");
let menuCheck = document.getElementById("menu-check");
let headerHeight = 150;
//let headerHeight = 120;

function scrollToDiv() {
   if(this.innerText === "DOBRODOŠLI") {
        let rect = mainBanners.getBoundingClientRect();
        let topPosition = rect.top + window.scrollY - headerHeight;
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
        menuCheck.checked = false;
   }
   if(this.innerText === "ČIME SE BAVIMO?") {
        let rect = main.getBoundingClientRect();
        let topPosition = rect.top + window.scrollY - headerHeight;
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
        menuCheck.checked = false;
   }
   if(this.innerText === "O NAMA") {
        let rect = about.getBoundingClientRect();
        let topPosition = rect.top + window.scrollY - headerHeight;
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
        menuCheck.checked = false;
   }
   if(this.innerText === "NAŠI RADOVI") {
        let rect = ourWorks.getBoundingClientRect();
        let topPosition = rect.top + window.scrollY - headerHeight;
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
        menuCheck.checked = false;
   }
   if(this.innerText === "CENOVNIK") {
        let rect = prices.getBoundingClientRect();
        let topPosition = rect.top + window.scrollY - headerHeight;
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
        menuCheck.checked = false;
   }
   if(this.innerText === "KONTAKT") {
        let rect = footer.getBoundingClientRect();
        let topPosition = rect.top + window.scrollY - headerHeight;
        window.scrollTo({
            top: topPosition,
            behavior: 'smooth'
        });
        menuCheck.checked = false;
    }
}

for(let i=0; i<menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", scrollToDiv);
}
/* End menu scroll */

/* Logo scroll */
let logo = document.getElementById("logo-img");
logo.addEventListener("click", scrollToTop);

function scrollToTop() {
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
}
/* End logo scroll */

/* Prices animation */
const animateDivs = document.querySelectorAll('.animate-div');

function checkViewport() {
  animateDivs.forEach(div => {
    const rect = div.getBoundingClientRect();
    const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
    
    if (isVisible) {
      div.classList.add('animate');
    }
  });
}

window.addEventListener('scroll', checkViewport);
/* End prices animation */

/* Div scroll to top */
const animateText = document.querySelector('#about');

function animateOnScroll() {
  const rect = animateText.getBoundingClientRect();
  const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0)

  if (isVisible) {
    animateText.classList.add('about');
  }
}

window.addEventListener('scroll', animateOnScroll);
/* End div scroll to top */

/* Arrow for scroll */
const arrow = document.getElementById("arrow");
arrow.addEventListener("click", scrollToTop);

function arrowScroll() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;

    if (scrollPercentage >= 50) {
      arrow.style.display = "block";
    } else {
      arrow.style.display = "none";
    }
}
window.addEventListener("scroll", arrowScroll);
/* End arrow */