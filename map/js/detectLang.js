let getHashLang =
  getParameterByName("lang") || localStorage.getItem("lang")
    ? localStorage.getItem("lang")
    : "en";
localStorage.setItem("lang", getHashLang);
document.documentElement.setAttribute("lang", getHashLang);

window.onload = function () {
  let initLang = localStorage.getItem("lang");
  let langSelect = document.querySelector(".lang-dropdown");
  let lanSelectOption = langSelect.querySelectorAll("a");

  resetOption(lanSelectOption);
  lanSelectOption[findLangIndex(initLang)].classList.add("active");

  i18next.init(
    {
      fallbackLng: getHashLang,
      resources: i18nLang,
    },
    function (err, t) {
      console.log("error:" + err, t);
      updateContent();
    }
  );

  lanSelectOption.forEach((item) => {
    item.addEventListener("click", function () {
      let cur = this.getAttribute("data-lang") || "en";
      localStorage.setItem("lang", cur);
      document.documentElement.setAttribute("lang", cur);

      $(".dropdown-item.active").removeClass("active");
      $(this).addClass("active");

      changeLang(cur);
      MultiLanguage();
    });
  });

  let sideMenu = document.querySelector(".unity-menu");
  if (!sideMenu) return false;
  let btnSwitch = document.querySelector(".btn-switch-tab");
  btnSwitch.addEventListener("click", function () {
    document.body.classList.toggle("menu-show");
  });
};

function resetOption(elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].classList.remove = "active";
  }
}
