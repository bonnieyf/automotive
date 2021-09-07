const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let isShowPopup = JSON.parse(localStorage.getItem("isShowPopup")) || false;
let currentDevice;

if (isMobile) {
  currentDevice = "mobile";
} else {
  currentDevice = "desktop";
}


const warningDesc = `
  <div class="word w1">Recommended browser: Google Chrome 75+ ,MS Edge 18+,Apple Safari 12.1+ ,Mozilla Firefox 67+.</div>
  <div class="word w2">Recommended platform: Windows10 or newer,Mac OS version 10.6 or newer.</div>
  <div class="word w3">It is recommended to update to the latest version of the graphics card driver.</div>
`;

const progressNumberHtml = `
  Loading
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <span class="unity-percent">0</span>
  %
`;

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

    unityInstance.progressNumber = document.createElement("div");
    unityInstance.progressNumber.className = "unity-progress-number";
    unityInstance.progressNumber.innerHTML = progressNumberHtml;
    unityInstance.progress.appendChild(unityInstance.progressNumber);

    unityInstance.text.innerText =
      unityInstance.container.getAttribute("data-name");
    unityInstance.progress.bar = document.createElement("div");
    unityInstance.progress.bar.className = "bar";
    unityInstance.progress.appendChild(unityInstance.progress.bar);

    unityInstance.progress.full = document.createElement("div");
    unityInstance.progress.full.className = "full";
    unityInstance.progress.bar.appendChild(unityInstance.progress.full);

    unityInstance.desc = document.createElement("div");
    unityInstance.desc.className = "alert-desc";
    unityInstance.desc.innerHTML = warningDesc;
    unityInstance.progress.appendChild(unityInstance.desc);

    unityInstance.container.appendChild(unityInstance.progress);
  }

  document.querySelector(".unity-percent").innerText = Math.floor(
    100 * progress
  );
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
  let modalUserGuide = $("#modal-userguide");
  let unityProgress = $(".unity-progress");
  let tools = $(".unity-show-tools");
  let unityBg = $(".unity-bg");
  let btnHelper = $("#modal-helper");
  let body = $("body");

  if (!isShowPopup) {
    isShowPopup = true;
    localStorage.setItem("isShowPopup", isShowPopup);
    gsap.to(unityProgress, {
      duration: 1,
      opacity: 0,
      y: -10,
      ease: "power2.out",
    });

    modalUserGuide.modal("show");

    setTimeout(function () {
      gsap.to(unityBg, {
        duration: 1,
        opacity: 0,
        display: "none",
        ease: "power2.out",
        oncomplete: function () {
          setTimeout(function () {
            tools.addClass("initAnimation");
            body.addClass("menu-show");
          }, 800);
        },
      });
    }, 2000);
  } else {
    setTimeout(function () {
      gsap.to(unityProgress, {
        duration: 0.6,
        opacity: 0,
        display: "none",
        y: -10,
        ease: "power2.out",
      });
      gsap.to(unityBg, {
        duration: 0.6,
        opacity: 0,
        display: "none",
        ease: "power2.out",
        oncomplete: function () {
          setTimeout(function () {
            tools.addClass("initAnimation");
            body.addClass("menu-show");
          }, 400);
        },
      });
    }, 2000);
  }

  btnHelper.click(function () {
    modalUserGuide.modal("show");
  });
}

function MouseIconChange(val) {
  let body = document.body;
  if (val === "false") {
    body.classList.remove("mouse-hover");
  } else {
    body.classList.add("mouse-hover");
  }

  
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
  let newContent = content.replace(/^hotspot{1,}[0-9]+(_[0-9]|[0-9])?:</, "<");
  handleModalLayout(newContent);
}







        

        


        