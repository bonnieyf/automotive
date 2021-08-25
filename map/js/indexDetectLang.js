let getHashLang =
  getParameterByName("lang") || localStorage.getItem("lang") || "en";
localStorage.setItem("lang", getHashLang);
document.documentElement.setAttribute("lang", getHashLang);

window.onload = function () {
  let initLang = localStorage.getItem("lang");
  let langSelect = document.querySelector(".select-lang--select");
  let lanSelectOption = langSelect.options;

  // inital lang
  resetOption(lanSelectOption);
  lanSelectOption[findLangIndex(initLang)].selected = true;
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

  langSelect.addEventListener("change", function () {
    let cur = this.value;
    localStorage.setItem("lang", cur);
    document.documentElement.setAttribute("lang", cur);
    resetOption(lanSelectOption);
    this.options[findLangIndex(cur)].selected = true;

    changeLang(cur);
  });
};

function resetOption(elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].removeAttribute("selected");
  }
}