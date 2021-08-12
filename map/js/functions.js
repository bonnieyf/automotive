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
