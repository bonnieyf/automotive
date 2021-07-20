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

window.onload = function () {
  var currentLang = localStorage.getItem("lang");
  MultiLanguage(currentLang);
  console.log("currentLang:" + currentLang);
  var langSelect = document.querySelector(".select-lang--select");
  langSelect.addEventListener("change", function () {
    var cur = Number(this.value);
    var nextLang;

    switch (cur) {
      case 1:
        nextLang = "es";
        break;

      case 2:
        nextLang = "jp";
        break;

      default:
        nextLang = "en";
    } // unityInstance.SendMessage("Canvas", "SendToUnity", "es");


    localStorage.setItem("lang", nextLang);
    console.log("select", cur);
    console.log("updated!!");
  });
};

function MultiLanguage(lang) {
  unityInstance.SendMessage("Canvas", "SendToUnity", "en");
}