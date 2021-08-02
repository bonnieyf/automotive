window.onload = function () {
  let langSelect = document.querySelector(".select-lang--select");
  let langOptions = langSelect.options;
  let initLang = localStorage.getItem("lang")
    ? localStorage.getItem("lang")
    : localStorage.setItem("lang", "en");

  for (i = 0; i < langOptions.length; i++) {
    langOptions[i].selected = false;
  }
  langOptions[findLangIndex(initLang)].selected = true;

  langSelect.addEventListener("change", function () {
    let cur = this.value;
    localStorage.setItem("lang", cur);
    MultiLanguage();
  });
};

function findLangIndex(str) {
  switch (str) {
    case "es":
      str = 1;
      break;
    case "de":
      str = 2;
      break;
    case "it":
      str = 3;
      break;
    case "fr":
      str = 4;
      break;

    default:
      str = 0;
      break;
  }
  return str;
}

function MultiLanguage() {
  console.log(
    "update!!!!!!: " + localStorage.getItem("lang")
      ? localStorage.getItem("lang")
      : "en"
  );
  unityInstance.SendMessage(
    "Language_Manager",
    "SendToUnity",
    localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
  );
  unityInstance.SendMessage("Language_Manager", "loadLanguage");
}
