// --------------MOBILE NAV---------------
const mobNavBtn = document.querySelector(".mobile-nav-button");
const mobNavIcon = document.querySelector(".mobile-nav-button__icon");
const mobNav = document.querySelector(".mobile-nav");

mobNavBtn.addEventListener("click", function () {
  mobNavIcon.classList.toggle("active");
  mobNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// --------------VIDEO---------------

const videoBtn = document.querySelector("#video-story-btn");
const videoFile = document.querySelector("#video-story");
const videoBtnIcon = document.querySelector("#video-story-btn-icon");
const videoOverlay = document.querySelector("#video-story-overlay");

videoBtn.addEventListener("click", function () {
  function toggleOverlay(e) {
    if (e.type === "mouseleave") {
      videoOverlay.classList.add("hidden");
    } else {
      videoOverlay.classList.remove("hidden");
    }
  }

  if (videoFile.paused) {
    videoFile.play();
    videoBtnIcon.src = "./img/pauseBtn.png";

    videoOverlay.onmouseleave = toggleOverlay;
    videoOverlay.onmouseenter = toggleOverlay;
  } else {
    videoFile.pause();
    videoBtnIcon.src = "./img/play.png";
    videoOverlay.onmouseleave = null;
  }
});
