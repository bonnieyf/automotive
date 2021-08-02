const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let isShowPopup = JSON.parse(localStorage.getItem("isShowPopup")) || false;
let currentDevice;

if (isMobile) {
  currentDevice = "mobile";
} else {
  currentDevice = "desktop";
}

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
    handelTeachingPopup();
  }
}

function fadeOutEffect() {
  var fadeTarget = document.getElementById("target");
  var fadeEffect = setInterval(function () {
    if (!fadeTarget.style.opacity) {
      fadeTarget.style.opacity = 1;
    }
    if (fadeTarget.style.opacity > 0) {
      fadeTarget.style.opacity -= 0.1;
    } else {
      clearInterval(fadeEffect);
    }
  }, 200);
}

function handelTeachingPopup() {
  let content = document.querySelector(".unity-userguide");
  let closeBtn = content.querySelector(".close-popup");
  let popupText = document.querySelector(".img-detect");
  let unityBg = document.querySelector(".unity-bg");
  let unityProgress = document.querySelector(".unity-progress");
  if (!isShowPopup) {
    isShowPopup = true;
    localStorage.setItem("isShowPopup", isShowPopup);
    gsap.to(unityProgress, {
      duration: 1,
      opacity: 0,
      y: -10,
      ease: "power2.out",
    });
    gsap.to(content, {
      duration: 1,
      opacity: 1,
      display: "block",
      ease: "power2.out",
    });
    setTimeout(function () {
      gsap.to(unityBg, {
        duration: 1,
        opacity: 0,
        display: "none",
        ease: "power2.out",
      });
    }, 2000);
  } else {
    setTimeout(function () {
      gsap.to(unityProgress, {
        duration: 1,
        opacity: 0,
        display: "none",
        y: -10,
        ease: "power2.out",
      });
      gsap.to(unityBg, {
        duration: 1,
        opacity: 0,
        display: "none",
        ease: "power2.out",
      });
    }, 2000);
  }

  // popupText.innerText = currentDevice;
  closeBtn.addEventListener("click", function () {
    gsap.to(content, {
      duration: 1,
      opacity: 0,
      display: "none",
      ease: "power2.out",
    });
  });
}

function MultiLanguage(lang) {
  unityInstance.SendMessage("Language_Manager", "SendToUnity", lang);
  unityInstance.SendMessage("Language_Manager", "loadLanguage");
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

function handleClickDetail(content) {
  $("#modal-detail").modal("show");
  $("#modal-detail").on("shown.bs.modal", function (e) {
    $("#modal-inner").html(content.replace(content.substr(0, 11), ""));
  });
}
