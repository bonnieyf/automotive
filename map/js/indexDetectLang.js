let getHashLang =
  getParameterByName("lang") || localStorage.getItem("lang") || "en";
localStorage.setItem("lang", getHashLang);

window.onload = function () {
  let initLang = localStorage.getItem("lang");
  let result = mapData.filter((item) => item.lang === initLang)[0].map;
  let langSelect = document.querySelector(".select-lang--select");
  let lanSelectOption = langSelect.options;

  // inital lang
  resetOption(lanSelectOption);
  lanSelectOption[findLangIndex(initLang)].selected = true;
  handleReplaceHTML(result);

  langSelect.addEventListener("change", function () {
    let cur = this.value;
    localStorage.setItem("lang", cur);
    resetOption(lanSelectOption);
    this.options[findLangIndex(cur)].selected = true;

    //new

    let newResult = mapData.filter((item) => item.lang === cur)[0].map;
    handleReplaceHTML(newResult);
  });
};

function resetOption(elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].removeAttribute("selected");
  }
}

function handleReplaceHTML(data) {
  let sloganBox = document.querySelector(".unity-map-slogan");
  let title = sloganBox.querySelector(".title");
  let txt = sloganBox.querySelector(".txt");
  title.innerText = data.title;
  txt.innerText = data.desc;
}
