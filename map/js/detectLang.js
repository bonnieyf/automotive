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

function getParameterByName(name, url = window.location.href) {
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return "";
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

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
