const breakpoint=window.matchMedia("(min-width:769px)");let mySwiper;const breakpointChecker=function(){if(!0!==breakpoint.matches)return!1===breakpoint.matches?enableSwiper():void 0;void 0!==mySwiper&&mySwiper.destroy(!0,!0)},enableSwiper=function(){mySwiper=new Swiper("#modal-swiper.swiper-container",{loop:!0,centeredSlides:!0,slidesPerView:1,pagination:{el:"#modal-swiper .swiper-pagination",clickable:!0}})};function handleModalLayout(e){let t=$("#modal-detail");t.modal("show"),t.on("shown.bs.modal",(function(i){let o=$(this),n=o.find(".detail-content");n.find(".overflow-scrollbar").remove(),n.append(e),o.find(".tab-content.show").removeClass("show"),o.find(".tab.active").removeClass("active"),o.find(".tab").eq(0).addClass("active"),o.find(".tab-content").eq(0).addClass("show"),o.find(".tab").on("click",(function(e){e.preventDefault();let t=$(this).closest(".detail-content"),i=$(this).index();t.find(".tab.active").removeClass("active"),t.find(".tab-content.show").removeClass("show"),$(this).addClass("active"),t.find(`.tab${i+1}-content`).addClass("show"),2===i&&breakpointChecker()})),t.on("hidden.bs.modal",(function(e){console.log("hidden"),$(this).find(".detail-content").find(".overflow-scrollbar").remove()})),$(".video-iframe-link").on("click",(function(e){e.preventDefault();let t=`<iframe width="560" height="315" src="https://www.youtube.com/embed/${$(this).data("youtube")}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`,i=$(this).data("title"),o=$("#modal-video"),n=o.find(".title"),a=o.find(".youtube-iframe");n.text(i),a.empty(),a.append(t),o.css({top:0})}))}))}$((function(){$(window).resize((function(){null!=document.getElementById("modal-swiper")&&breakpointChecker()})),$("#modal-video").find(".close").click((function(){let e=$("#modal-video");e.find(".youtube-iframe").empty(),e.css({top:"100%"})}))}));