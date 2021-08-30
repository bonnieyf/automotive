// swiper slide
const breakpoint = window.matchMedia("(min-width:769px)");
let mySwiper;
const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (mySwiper !== undefined) {
      mySwiper.destroy(true, true);
    }
    return;
  } else if (breakpoint.matches === false) {
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
  var globalLazyLoad = new LazyLoad();
  var modalLazyLoad;

  $(window).resize(function () {
    if (document.getElementById("modal-swiper") == null) return;
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
  let html =
    '<div class="overflow-scrollbar"><div class="modal-infor"><div class="modal-infor--main"><div class="tab-content show tab1-content"><div class="row mb-sm-5 mb-md-0"><div class="col-md-5"><div class="intro-img"><picture><source media="(min-width: 1200px)" data-srcset="../assets/modal_detail/manufacturing/img_Shop Floor & Production.png 1x, ../assets/modal_detail/manufacturing/img_Shop Floor & Production.png 2x"><source media="(min-width: 800px)" data-srcset="../assets/modal_detail/manufacturing/img_Shop Floor & Production.png, ../assets/modal_detail/manufacturing/img_Shop Floor & Production.png 2x"><img alt="A lazy image" class="lazy mb-3 img-fluid" data-src="../assets/modal_detail/manufacturing/img_Shop Floor & Production.png"></picture></div></div><div class="col-md-7"><h2 class="title">Shop Floor & Production</h2><p class="txt">The shop floor is a tough environment - with heavy machinery, high levels of vibration and increasingly sophisticated software solutions bringing everything together.</p></div></div></div><div class="tab-content tab2-content"><div class="row mb-sm-5 mb-md-3"><div class="col-md-5"><img src="../assets/modal_detail/img_32.png" class="mb-3 img-fluid"></div><div class="col-md-7"><h2 class="title">Challenge</h2><p class="txt">Aside from environmental factors, the shop floor also serves as the crossroads for a number of other areas including material routing, inventory management, part availability and workforce scheduling.</p></div></div><div class="row mb-5 mb-sm-5 mb-md-3"><div class="col-md-5"><img src="../assets/modal_detail/img_22.png" class="mb-3 img-fluid"></div><div class="col-md-7"><h2 class="title">Solution</h2><p class="txt">Getac devices are rugged enough to stand up to any environment - including your shop floor. They have a range of key benefits that make running a shop floor easier, smoother and more intelligent:</p><ol class="list"><li><i class="fas fa-chevron-right"></i> Mobile performance monitoring for real-time production tracking.</li><li><i class="fas fa-chevron-right"></i> Integration with WMS software for seamless interoperability.</li><li><i class="fas fa-chevron-right"></i> Easy to read screens and ease of use for data capture in extreme environments.</li></ol></div></div><div class="row mb-5 mb-sm-5 mb-md-3"><div class="col-md-5"><img src="../assets/modal_detail/img_23.png" class="mb-3 img-fluid"></div><div class="col-md-7"><h2 class="title">Benefits</h2><p class="txt">Leading industrial manufacturers trust Getac to provide quality devices that blend rugged hardware with optimized software for the challenges of the shop floor.</p><ol class="list"><li><i class="fas fa-chevron-right"></i> Getac products are inherently rugged and built to survive in the harshest conditions.</li><li><i class="fas fa-chevron-right"></i> We give you comprehensive field engineering support for areas including system integration and compatibility testing, development of docking solutions, software imaging, and aftersales support</li><li><i class="fas fa-chevron-right"></i> Our products are trusted by leading global manufacturers.</li><li><i class="fas fa-chevron-right"></i> Get the industry-best warranty for a minimum of three years, including accidental damage.</li></ol></div></div></div><div class="tab-content tab3-content"><div class="row mb-sm-5 mb-md-0"><div class="col-md-5"><div class="swiper-container" id="modal-swiper"><div class="swiper-wrapper"><div class="swiper-slide"><div class="video-iframe"><a class="video-iframe-link" href="#" data-youtube="2cVl8tj-hYo" data-title="New Generation UX10 Rugged Tablet"><img src="./../assets/YT_UX10.png"> </a><span class="note">New Generation UX10 Rugged Tablet</span></div></div><div class="swiper-slide"><div class="video-iframe"><a class="video-iframe-link" href="#" data-youtube="dgAxqFnfmsQ" data-title="Next Generation F110 Fully Rugged Tablet"><img src="./../assets/YT_F110.png"> </a><span class="note">Next Generation F110 Fully Rugged Tablet</span></div></div><div class="swiper-slide"><div class="video-iframe"><a class="video-iframe-link" href="#" data-youtube="t8jY_l95qvA" data-title="Next Generation K120 Fully Rugged Tablet"><img src="./../assets/YT_K120.png"> </a><span class="note">Next Generation K120 Fully Rugged Tablet</span></div></div><div class="swiper-slide"><div class="video-iframe"><a class="video-iframe-link" href="#" data-youtube="2qzZ_Vym8ng" data-title="B360 and B360 Pro Fully Rugged Laptops"><img src="./../assets/YT_B360.png"> </a><span class="note">B360 and B360 Pro Fully Rugged Laptops</span></div></div><div class="video-iframe"><div class="video-iframe"><a class="video-iframe-link" href="#" data-youtube="W98rgqUcbxA" data-title="Getac Device Monitoring System (GDMS)"><img src="./../assets/YT_GDMS.png"> </a><span class="note">Getac Device Monitoring System (GDMS)</span></div></div></div><div class="swiper-pagination"></div></div></div><div class="col-md-7"><h2 class="title">Getac Device</h2><ol class="list"><li><i class="fas fa-chevron-right"></i> ZX70, ZX70-EX</li><li><i class="fas fa-chevron-right"></i> T800, T800-EX</li><li><i class="fas fa-chevron-right"></i> UX10, UX10-EX</li><li><i class="fas fa-chevron-right"></i> F110, F110-EX</li><li><i class="fas fa-chevron-right"></i> K120, K120-EX</li><li><i class="fas fa-chevron-right"></i> A140</li><li><i class="fas fa-chevron-right"></i> B360</li></ol><br><br><h2 class="title">Software</h2><ol class="list"><li><i class="fas fa-chevron-right"></i> Getac Device Monitoring System</li><li><i class="fas fa-chevron-right"></i> Getac KeyWedge Barcode Reader Utility</li><li><i class="fas fa-chevron-right"></i> Absolute</li></ol><br><h2 class="title">Accessories</h2><ol class="list"><li><i class="fas fa-chevron-right"></i> Carrying Solutions</li><li><i class="fas fa-chevron-right"></i> Docking Solutions</li><li><i class="fas fa-chevron-right"></i> Charging Solutions</li><li><i class="fas fa-chevron-right"></i> Keyboards</li></ol></div></div></div><div class="tab-content tab4-content"><div class="row mb-sm-5 mb-md-0"><div class="col-md-7"><div class="device-ar"><iframe src="../../ar/?device=B360" frameborder="0" width="100%" height="400"></iframe></div></div><div class="col-md-5 device-ar-main"><h2 class="title">Experience Getac Devices with Augmented Reality</h2><p class="txt">Scan the QR code with your smartphone, place the device in your environment. You are ready to play with it!</p><div class="device-ar-code"><a href="../../ar/?device=B360" target="_blank"><img src="./../../images/qrcode_b360.png" alt="B360"></a></div></div></div></div></div></div></div>';
  $(".btn-primary").click(function () {
    let $modal = $("#modal-detail");
    $modal.modal("show");
    $modal.on("shown.bs.modal", function (e) {
      let $this = $(this);

      $this.find(".detail-content").append(html);

      modalLazyLoad = new LazyLoad({
        container: this,
      });

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
  });
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
      parentElement.find(".tab.active").removeClass("active");
      parentElement.find(".tab-content.show").removeClass("show");
      $(this).addClass("active");
      parentElement.find(`.tab${_idx + 1}-content`).addClass("show");

      if (_idx === 2) {
        breakpointChecker();
      }
    });

    // $("#modal-detail .close").on("click", function () {
    //   let $this = $(this);
    //   let $content = $this.find(".detail-content");
    //   $content.find(".overflow-scrollbar").remove();
    // });

    $modal.on("hidden.bs.modal", function (e) {
      console.log("hidden");
      let $this = $(this);
      let $content = $this.find(".detail-content");
      $content.find(".overflow-scrollbar").remove();
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
