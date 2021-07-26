"use strict";

var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
var isShowPopup = JSON.parse(localStorage.getItem("isShowPopup")) || false;
var currentDevice;

if (isMobile) {
  currentDevice = "mobile";
} else {
  currentDevice = "desktop";
}

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

function UnityProgress(unityInstance, progress) {
  if (!unityInstance.Module) return;

  if (!unityInstance.bg) {
    unityInstance.bg = document.createElement("div");
    unityInstance.bg.className = "unity-bg unity-bg-".concat(unityInstance.container.getAttribute("data-idx"));
    unityInstance.container.appendChild(unityInstance.bg);
  }

  if (!unityInstance.progress) {
    unityInstance.progress = document.createElement("div");
    unityInstance.progress.className = "unity-progress";
    unityInstance.container.appendChild(unityInstance.progress);
    unityInstance.text = document.createElement("div");
    unityInstance.text.className = "text text-".concat(unityInstance.container.getAttribute("data-name"));
    unityInstance.progress.appendChild(unityInstance.text);
    unityInstance.text.innerText = unityInstance.container.getAttribute("data-name");
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
  var content = document.querySelector(".unity-teaching");
  var closeBtn = content.querySelector(".close-popup");
  var popupText = document.querySelector(".img-detect");
  console.log("openPopup:" + isShowPopup);

  if (!isShowPopup) {
    console.log("false open");
    isShowPopup = true;
    localStorage.setItem("isShowPopup", isShowPopup);
    content.style.display = "block";
  }

  popupText.innerText = currentDevice;
  closeBtn.addEventListener("click", function () {
    content.style.display = "none";
  });
}

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

  unityInstance.SendMessage("Man", "SendToUnity", String(flag)); //unityInstance.SendMessage("BridgeX", "PL_check");
}