function scrollFunction(){let e=document.body.scrollTop||document.documentElement.scrollTop,o=document.querySelector("#intro-content").offsetTop,t=document.querySelector(".header");e>0?t.classList.add("sticky"):t.classList.remove("sticky"),e>o?t.classList.add("show-button"):t.classList.remove("show-button")}function topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}window.onscroll=function(){scrollFunction()},scrollFunction(),$((function(){localStorage.setItem("lang","en")}));var swiper=new Swiper(".swiper-experience-card",{effect:"fade",loop:!0,centeredSlides:!0,slidesPerView:1,coverflowEffect:{rotate:50,stretch:0,depth:100,modifier:1},autoplay:{delay:2e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},pagination:{el:".swiper-experience-card .swiper-pagination",clickable:!0}}),imgSwiper=new Swiper(".swiper-imgcover-card",{effect:"fade",loop:!0,fadeEffect:{crossFade:!0},autoplay:{delay:8e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},pagination:{el:".swiper-imgcover-card .swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-imgcover-card .swiper-button-next",prevEl:".swiper-imgcover-card .swiper-button-prev"}});