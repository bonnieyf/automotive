const mapData = [
  {
    lang: "en",
    map: {
      title: "AUTOMOTIVE VIRTUAL EXHIBITION",
      desc: "Take a walk through our virtual exhibition to see how rugged mobile solutions can drive a smarter approach throughout the Automotive value-chain.",
    },
    unity: {
      popup: {
        userguideTitle: ["Turn Around", "Move"],
      },
    },
  },
  {
    lang: "es",
    map: {
      title: "ES AUTOMOTIVE VIRTUAL EXHIBITION",
      desc: "Take a walk through our virtual exhibition to see how rugged mobile solutions can drive a smarter approach throughout the Automotive value-chain.",
    },
    unity: {
      popup: {
        userguideTitle: ["ES Turn Around", "Move Forward"],
      },
    },
  },
  {
    lang: "de",
    map: {
      title: "VIRTUELLE AUTOMOBIL-MESSE",
      desc: "Gehen Sie auf einen Rundgang durch unsere virtuelle Ausstellung und erfahren Sie, wie robuste mobile Lösungen einen intelligenteren Ansatz in der gesamten Wertschöpfungskette der Automobilbranche voranbringen können.",
    },
    unity: {
      popup: {
        userguideTitle: ["Umdrehen", "Vorwärts gehen"],
      },
    },
  },
  {
    lang: "it",
    map: {
      title: "IT AUTOMOTIVE VIRTUAL EXHIBITION",
      desc: "Take a walk through our virtual exhibition to see how rugged mobile solutions can drive a smarter approach throughout the Automotive value-chain.",
    },
    unity: {
      popup: {
        userguideTitle: ["IT Turn Around", "Move Forward"],
      },
    },
  },
  {
    lang: "fr",
    map: {
      title: "FR AUTOMOTIVE VIRTUAL EXHIBITION",
      desc: "Take a walk through our virtual exhibition to see how rugged mobile solutions can drive a smarter approach throughout the Automotive value-chain.",
    },
    unity: {
      popup: {
        userguideTitle: ["FR Turn Around", "Move Forward"],
      },
    },
  },
];

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