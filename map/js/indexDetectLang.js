window.onload = function () {
  // inital lang
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

  let langSelect = document.querySelector(".select-lang--select");
  let lanSelectOptions = langSelect.options;

  let languageOptionValues = $.map(lanSelectOptions, function (option) {
    return option.value;
  });

  for (var i = 0; i < i18next.languages.length; i++) {
    var i18nextLanguage = i18next.languages[i];
    if (languageOptionValues.includes(i18nextLanguage)) {
      langSelect.value = i18nextLanguage;
      break;
    }
  }

  langSelect.addEventListener("change", function () {
    let val = this.value;
    changeLang(val);
  });
};
