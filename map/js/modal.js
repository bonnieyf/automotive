// swiper slide
const breakpoint = window.matchMedia("(min-width:769px)");
let mySwiper;
const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    console.log("destroy");
    if (mySwiper !== undefined) mySwiper.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    console.log("enable");
    return enableSwiper();
  }
};

const enableSwiper = function () {
  mySwiper = new Swiper("#modal-swiper.swiper-container", {
    loop: true,
    centeredSlides: true,
    slidesPerView: 1,
    pagination: {
      el: "#modal-swiper .swiper-pagination",
      clickable: true,
    },
  });
};

$(function () {
  $(window).resize(function () {
    breakpointChecker();
  });

  $("#modal-video")
    .find(".close")
    .click(function () {
      let $video = $("#modal-video");
      let $videoTitle = $video.find(".youtube-iframe");
      $videoTitle.empty();
      $video.css({ top: "100%" });
    });

  // 測試用
  // $(".btn-primary").click(function () {
  //   let $modal = $("#modal-detail");
  //   $modal.modal("show");
  //   $modal.on("shown.bs.modal", function (e) {
  //     let $this = $(this);

  //     $this.find(".tab-content.show").removeClass("show");
  //     $this.find(".tab.active").removeClass("active");

  //     $this.find(".tab").eq(0).addClass("active");
  //     $this.find(".tab-content").eq(0).addClass("show");

  //     $this.find(".tab").on("click", function (e) {
  //       e.preventDefault();

  //       let parentElement = $(this).closest(".detail-content");
  //       let _idx = $(this).index();
  //       console.log(parentElement);
  //       parentElement.find(".tab.active").removeClass("active");
  //       parentElement.find(".tab-content.show").removeClass("show");
  //       $(this).addClass("active");
  //       parentElement.find(`#tab${_idx + 1}-content`).addClass("show");

  //       if (_idx === 2) {
  //         breakpointChecker();
  //       }
  //     });

  //     // click video to open full popup
  //     $(".video-iframe-link").on("click", function (e) {
  //       e.preventDefault();
  //       let code = $(this).data("youtube");
  //       let youtube = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${code}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
  //       let innerTitle = $(this).data("title");
  //       let $video = $("#modal-video");
  //       let $videoTitle = $video.find(".title");
  //       let $videoIframe = $video.find(".youtube-iframe");
  //       $videoTitle.text(innerTitle);
  //       $videoIframe.empty();
  //       $videoIframe.append(youtube);
  //       $video.css({ top: 0 });
  //     });
  //   });
  // });
});

function handleModalLayout(content) {
  let $modal = $("#modal-detail");
  $modal.modal("show");
  $modal.on("shown.bs.modal", function (e) {
    let $this = $(this);
    let $content = $this.find(".detail-content");
    $content.find(".overflow-scrollbar").remove();
    $content.append(content);

    $this.find(".tab-content.show").removeClass("show");
    $this.find(".tab.active").removeClass("active");

    $this.find(".tab").eq(0).addClass("active");
    $this.find(".tab-content").eq(0).addClass("show");

    $this.find(".tab").on("click", function (e) {
      e.preventDefault();

      let parentElement = $(this).closest(".detail-content");
      let _idx = $(this).index();
      console.log(parentElement);
      parentElement.find(".tab.active").removeClass("active");
      parentElement.find(".tab-content.show").removeClass("show");
      $(this).addClass("active");
      parentElement.find(`#tab${_idx + 1}-content`).addClass("show");

      if (_idx === 2) {
        breakpointChecker();
      }
    });

    // click video to open full popup
    $(".video-iframe-link").on("click", function (e) {
      e.preventDefault();
      let code = $(this).data("youtube");
      let youtube = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${code}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      let innerTitle = $(this).data("title");
      let $video = $("#modal-video");
      let $videoTitle = $video.find(".title");
      let $videoIframe = $video.find(".youtube-iframe");
      $videoTitle.text(innerTitle);
      $videoIframe.empty();
      $videoIframe.append(youtube);
      $video.css({ top: 0 });
    });
  });
}
