let getHashLang =
  getParameterByName("lang") || localStorage.getItem("lang")
    ? localStorage.getItem("lang")
    : "en";
localStorage.setItem("lang", getHashLang);

window.onload = function () {
  let initLang = localStorage.getItem("lang");
  let result = mapData.filter((item) => item.lang === initLang)[0].unity;
  let langSelect = document.querySelector(".lang-dropdown");
  let lanSelectOption = langSelect.querySelectorAll(".dropdown-item");

  resetOption(lanSelectOption);
  lanSelectOption[findLangIndex(initLang)].classList.add = "active";
  handleReplaceHTML(result);

  lanSelectOption.forEach((item) => {
    item.addEventListener("click", function () {
      let cur = this.getAttribute("data-lang");
      let newResult = mapData.filter((item) => item.lang === cur)[0].unity;
      localStorage.setItem("lang", cur);
      handleReplaceHTML(newResult);
      MultiLanguage();
    });
  });

  let sideMenu = document.querySelector(".unity-menu");
  if (!sideMenu) return false;
  let btnSwitch = document.querySelector(".btn-switch-tab");
  btnSwitch.addEventListener("click", function () {
    sideMenu.classList.toggle("show");
  });
};

function resetOption(elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].classList.remove = "active";
  }
}

function handleReplaceHTML(data) {
  console.log("-------");
  console.log(data);
  let popupBox = document.querySelector("#modal-userguide");
  let title1 = popupBox.querySelector(".color-title1 span");
  let title2 = popupBox.querySelector(".color-title2 span");
  title1.innerText = data.popup.userguideTitle[0];
  title2.innerText = data.popup.userguideTitle[1];
}
