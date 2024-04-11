const drums = new Howl({
  src: ["./drums/drums.webm", "./drums/drums.mp3"],
  sprite: {
    clap: [0, 250.56689342403627],
    "closed-hihat": [2000, 124.37641723355996],
    crash: [4000, 1179.9999999999998],
    kick: [7000, 284.2403628117918],
    openhat: [9000, 159.47845804988603],
    snare: [11000, 296.55328798185997],
  },
});

const drumkit = document.querySelector(".drumkit");
function playdrum() {
  if (event.target.classList.contains("pad")) {
    event.preventDefault();
    let soundToPlay = event.target.dataset.sound;
    drums.play(soundToPlay);
  }
}




drumkit.addEventListener("click", playdrum);
drumkit.addEventListener("touchstart", playdrum);
