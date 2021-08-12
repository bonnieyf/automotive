$(function () {
  // gasp timeline
  const tl = gsap.timeline();
  tl.to(".unity-map-overlay", {
    opacity: 0,
    display: "none",
    duration: 0.8,
    ease: "power2.out",
  })
    .from(
      ".unity-map-slogan ,.unity-map--logo",
      { opacity: 0, x: -90, duration: 1, ease: "power2.out" },
      "-=.8"
    )
    .from(
      ".unity-map--screen",
      {
        opacity: 0,
        marginTop: 100,
        duration: 0.8,
        stagger: 0.3,
        ease: "power2.out",
      },
      "-=.5"
    )
    .from(".unity-map-bg .base-bg", {
      opacity: 0,
      duration: 1,
      scale: 1.01,
      ease: "power2.out",
    })
    .to(".unity-map-hover", { display: "block" });

  let changeBg = $(".unity-map--screen");
  let currentIndex = null;
  $(".unity-map-hover-screen")
    .on("mouseover", function () {
      let _index = $(this).index();
      changeBg.eq(_index).addClass("active");
    })
    .on("mouseleave", function () {
      let _index = $(this).index();
      changeBg.eq(_index).removeClass("active");
    });
});
