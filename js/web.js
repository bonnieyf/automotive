//Get the button
// var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // mybutton.style.display = "block";
    document.querySelector(".header").classList.add("sticky");
  } else {
    // mybutton.style.display = "none";
    document.querySelector(".header").classList.remove("sticky");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

$(function () {
  let isLang = "en";

  localStorage.setItem("lang", isLang);
});

var swiper = new Swiper(".swiper-experience-card", {
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-experience-card .swiper-pagination",
  },
});

var imgSwiper = new Swiper(".swiper-imgcover-card", {
  effect: "fade",
  loop: true,
  fadeEffect: {
    crossFade: true,
  },
  autoplay: {
    delay: 8000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-imgcover-card .swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-imgcover-card .swiper-button-next",
    prevEl: ".swiper-imgcover-card .swiper-button-prev",
  },
});

