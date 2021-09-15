const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
let isShowPopup = JSON.parse(localStorage.getItem("isShowPopup")) || false;
let currentDevice;

if (isMobile) {
  currentDevice = "mobile";
} else {
  currentDevice = "desktop";
}


function UnityProgress(unityInstance, progress) {
  if (!unityInstance.Module) return;
  document.querySelector(".unity-percent").innerText = Math.floor(
    100 * progress
  );
  document.querySelector(".unity-progress-full").style.width =
    100 * progress + "%";

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







        

        


        