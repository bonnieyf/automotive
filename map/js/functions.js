const i18nLang = {
  en: {
    translation: {
      mapTitle: "AUTOMOTIVE VIRTUAL EXHIBITION",
      mapDesc:
        "Take a walk through our virtual exhibition to see how rugged mobile solutions can drive a smarter approach throughout the Automotive value-chain.",

      ShowRoomScene1: "Map",
      ShowRoomScene2: "Workshop",
      ShowRoomScene3: "Warehouse",
      ShowRoomScene4: "Automotive Manufacturing",
      ShowRoomScene5: "R&D and Engineering",
      popupUserguideTitle1: "Turn Around",
      popupUserguideTitle2: "Move",
      popupTab1: "Intro",
      popupTab2: "Why Getac",
      popupTab3: "Getac Solution",
      popupTab4: "Device in AR",
    },
  },
  de: {
    translation: {
      mapTitle: "VIRTUELLE AUTOMOBIL-MESSE",
      mapDesc:
        "Gehen Sie auf einen Rundgang durch unsere virtuelle Ausstellung und erfahren Sie, wie robuste mobile Lösungen einen intelligenteren Ansatz in der gesamten Wertschöpfungskette der Automobilbranche voranbringen können.",
      ShowRoomScene1: "Hauptkarte",
      ShowRoomScene2: "Werkstatt",
      ShowRoomScene3: "Warehouse",
      ShowRoomScene4: "Automobilfertigung",
      ShowRoomScene5: "F&E und Technik",
      popupUserguideTitle1: "Umdrehen",
      popupUserguideTitle2: "Vorwärts gehen",
      popupTab1: "Einleitung",
      popupTab2: "Warum Getac",
      popupTab3: "Getac-Lösungen",
      popupTab4: "Gerät in AR",
    },
  },
};

function updateContent() {
  console.log("update");
  let elem = document.querySelectorAll("[data-i18n]");
  elem.forEach((item) => {
    item.innerHTML = i18next.t(item.dataset.i18n);
  });
}

function changeLang(lng) {
  i18next.changeLanguage(lng);
}

i18next.on("languageChanged", () => {
  updateContent();
});

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
    // case "es":
    //   str = 1;
    //   break;
    case "de":
      str = 1;
      break;
    // case "it":
    //   str = 3;
    //   break;
    // case "fr":
    //   str = 4;
    //   break;

    default:
      str = 0;
      break;
  }
  return str;
}

function MultiLanguage() {
  unityInstance.SendMessage(
    "Language_Manager",
    "SendToUnity",
    localStorage.getItem("lang") ? localStorage.getItem("lang") : "en"
  );
  unityInstance.SendMessage("Language_Manager", "loadLanguage");
}


function isMobileDevice() {
  const mobileDevice = [
    "Android",
    "webOS",
    "iPhone",
    "iPad",
    "iPod",
    "BlackBerry",
    "Windows Phone",
  ];
  let isMobileDevice = mobileDevice.some((e) => navigator.userAgent.match(e));
  return isMobileDevice;
}
