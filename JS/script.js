const audio = document.getElementById("myAudio");
const playButton = document.getElementById("playButton");
const section = document.getElementById("sectionKecil");
const openButton = document.getElementById("open");
const ayat = document.getElementById("ayat");
const afterclick = document.getElementById("afterclick");
const beforeclick = document.getElementById("beforeclick");

playButton.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playButton.classList.add("playing");
    playButton.classList.remove("paused");
  } else {
    audio.pause();
    playButton.classList.add("paused");
    playButton.classList.remove("playing");
  }
});

openButton.addEventListener("click", () => {
  audio.play();
  section.classList.add("scrollon");
  section.classList.remove("scrolloff");

  ayat.scrollIntoView({ behavior: "smooth" });

  afterclick.classList.add("displayon");
  afterclick.classList.remove("displayoff");

  beforeclick.classList.add("displayoff");
  beforeclick.classList.remove("displayon");

  openButton.classList.add("displayoff");
});
