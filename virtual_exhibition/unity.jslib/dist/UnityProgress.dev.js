"use strict";

function UnityProgress(unityInstance, progress) {
  if (!unityInstance.Module) return;

  if (!unityInstance.logo) {
    unityInstance.logo = document.createElement("div");
    unityInstance.logo.className = "logo " + unityInstance.Module.splashScreenStyle;
    unityInstance.container.appendChild(unityInstance.logo);
  }

  if (!unityInstance.progress) {
    unityInstance.progress = document.createElement("div");
    unityInstance.progress.className = "progress " + unityInstance.Module.splashScreenStyle;
    unityInstance.progress.empty = document.createElement("div");
    unityInstance.progress.empty.className = "empty";
    unityInstance.progress.appendChild(unityInstance.progress.empty);
    unityInstance.progress.full = document.createElement("div");
    unityInstance.progress.full.className = "full";
    unityInstance.progress.appendChild(unityInstance.progress.full);
    unityInstance.container.appendChild(unityInstance.progress);
  }

  unityInstance.progress.full.style.width = 100 * progress + "%";
  unityInstance.progress.empty.style.width = 100 * (1 - progress) + "%";
  if (progress == 1) unityInstance.logo.style.display = unityInstance.progress.style.display = "none";
}
/* iframe 的 parent 就是包它的頁面 */
// window.addEventListener("load", () => {
//   parent.postMessage(document.title, "http://127.0.0.1:5501/");
// });


window.onload = function () {
  IsPC(); // event listening

  var currentLang = localStorage.getItem("lang");
  MultiLanguage(currentLang);
  console.log("currentLang:" + currentLang);
  var langSelect = document.querySelector(".select-lang--select");
  langSelect.addEventListener("change", function () {
    var cur = this.value; // unityInstance.SendMessage("Canvas", "SendToUnity", "es");

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
  var Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];
  var flag = true;

  for (var v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }

  unityInstance.SendMessage("RigidBodyFPSController", "SendToUnity", String(flag)); //unityInstance.SendMessage("BridgeX", "PL_check");
}