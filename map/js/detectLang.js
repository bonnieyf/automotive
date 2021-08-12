window.onload = function () {
  let langSelect = document.querySelector(".lang-dropdown");
  let getHashLang = getParameterByName("lang") || "en";
  localStorage.setItem("lang", getHashLang);
  let initLang = localStorage.getItem("lang");

  let lanSelectOption = langSelect.querySelectorAll(".dropdown-item");

  for (i = 0; i < lanSelectOption.length; i++) {
    lanSelectOption[i].classList.remove = "active";
  }
  lanSelectOption[findLangIndex(initLang)].classList.add = "active";

  lanSelectOption.forEach((item) => {
    item.addEventListener("click", function () {
      let cur = this.getAttribute("data-lang");
      localStorage.setItem("lang", cur);
      MultiLanguage();
    });
  });

  let btnSwitch = document.querySelector(".btn-switch-tab");
  let sideMenu = document.querySelector(".unity-menu");
  btnSwitch.addEventListener("click", function () {
    sideMenu.classList.toggle("show");
  });
};
