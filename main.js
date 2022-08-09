//header scroll
let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

//navbar
const sections = document.querySelectorAll('section');
const navli = document.querySelectorAll('.navbar li');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach( section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(pageYOffset >= (sectionTop - 400)){
            current = section.getAttribute('id');
        };
    });
    navli.forEach( li => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active')
        }
    });
});

//Swiper home
var swiper = new Swiper(".home", {
    loop:true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

//Swiper Clientes
var swiper = new Swiper(".clientes", {
    loop: true,
    slidesPerView: 5,
    spaceBetween: 1,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
  });
//FAQ
var hashLinks = document.querySelectorAll("a[href^='#'].pergunta-link");
[].forEach.call(hashLinks, function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    history.pushState({}, "", link.href);
    
    // Update the URL again with the same hash, then go back
    history.pushState({}, "", link.href);
    history.back();
  });
});
  

