function UnityProgress(unityInstance, progress) {
  if (!unityInstance.Module) return;
  if (!unityInstance.bg) {
    unityInstance.bg = document.createElement("div");
    unityInstance.bg.className = `unity-bg unity-bg-${unityInstance.container.getAttribute(
      "data-idx"
    )}`;
    unityInstance.container.appendChild(unityInstance.bg);
  }

  if (!unityInstance.progress) {
    unityInstance.progress = document.createElement("div");
    unityInstance.progress.className = "unity-progress";
    unityInstance.container.appendChild(unityInstance.progress);

    unityInstance.text = document.createElement("div");
    unityInstance.text.className = `text text-${unityInstance.container.getAttribute(
      "data-name"
    )}`;
    unityInstance.progress.appendChild(unityInstance.text);

    unityInstance.text.innerText =
      unityInstance.container.getAttribute("data-name");
    unityInstance.progress.bar = document.createElement("div");
    unityInstance.progress.bar.className = "bar";
    unityInstance.progress.appendChild(unityInstance.progress.bar);

    unityInstance.progress.full = document.createElement("div");
    unityInstance.progress.full.className = "full";
    unityInstance.progress.bar.appendChild(unityInstance.progress.full);
    unityInstance.container.appendChild(unityInstance.progress);
  }

  unityInstance.progress.full.style.width = 100 * progress + "%";

  if (progress == 1) {
    unityInstance.bg.style.display = "none";
    unityInstance.progress.style.display = "none";
    handelTeachingPopup();
  }
}

function handelTeachingPopup() {
  let content = document.querySelector(".unity-teaching");
  let closeBtn = content.querySelector(".close-popup");

  content.style.display = "block";
  closeBtn.addEventListener("click", function () {
    content.style.display = "none";
  });
}

/* iframe 的 parent 就是包它的頁面 */
// window.addEventListener("load", () => {
//   parent.postMessage(document.title, "http://127.0.0.1:5501/");
// });

window.onload = function () {
  IsPC();

  // event listening
  let currentLang = localStorage.getItem("lang");
  MultiLanguage(currentLang);
  console.log("currentLang:" + currentLang);

  let langSelect = document.querySelector(".select-lang--select");
  langSelect.addEventListener("change", function () {
    let cur = this.value;
    // unityInstance.SendMessage("Canvas", "SendToUnity", "es");
    localStorage.setItem("lang", cur);
    MultiLanguage(cur);
    console.log("select", cur);
    console.log("updated!!");
  });
};

function MultiLanguage(lang) {
  unityInstance.SendMessage("Canvas", "SendToUnity", lang);
  unityInstance.SendMessage("Canvas", "loadLanguage");
}

function IsPC() {
  var userAgentInfo = navigator.userAgent;
  var Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  var flag = true;
  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }

  unityInstance.SendMessage("Man", "SendToUnity", String(flag));
  //unityInstance.SendMessage("BridgeX", "PL_check");
}
