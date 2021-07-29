//Get the button
// var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  let bodyScrollTop =
    document.body.scrollTop || document.documentElement.scrollTop;

  let introScrollTop = document.querySelector("#intro-content").offsetTop;
  let header = document.querySelector(".header");
  if (bodyScrollTop > 0) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }

  if (bodyScrollTop > introScrollTop) {
    header.classList.add("show-button");
  } else {
    header.classList.remove("show-button");
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
    clickable: true,
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
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-imgcover-card .swiper-button-next",
    prevEl: ".swiper-imgcover-card .swiper-button-prev",
  },
});

