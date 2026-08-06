const profileImg = document.querySelector(".profile");
const hoverVideo = document.querySelector(".video");

profileImg.addEventListener("mouseenter", () => {
  hoverVideo.play();
});

profileImg.addEventListener("mouseleave", () => {
  hoverVideo.pause();
  hoverVideo.currentTime = 0; // reset to start, so it replays from beginning next hover
});
