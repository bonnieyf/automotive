window.onload = function () {
  i18next.use(i18nextBrowserLanguageDetector).init(
    {
      fallbackLng: "en",
      resources: i18nLang,
      detection: {
        lookupQuerystring: "lang",
      },
    },
    function (err, t) {
      console.log("error:" + err, t);
      updateContent();
    }
  );

  let langSelect = document.querySelector(".lang-dropdown");
  let lanSelectOption = langSelect.querySelectorAll("a");

  let languageOptionValues = $.map(lanSelectOption, function (option) {
    return option.getAttribute("data-lang");
  });

  for (var i = 0; i < i18next.languages.length; i++) {
    var i18nextLanguage = i18next.languages[i];
    if (languageOptionValues.includes(i18nextLanguage)) {
      let index = languageOptionValues.findIndex((x) => x == i18nextLanguage);
      lanSelectOption[index].classList.add("active");
      break;
    }
  }

  lanSelectOption.forEach((item) => {
    item.addEventListener("click", function () {
      let cur = this.getAttribute("data-lang");
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
