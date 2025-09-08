// Play sound when a key is pressed
window.addEventListener("keydown", function(e) {
  playSound(e.keyCode);
});

// Play sound when a button is clicked
document.querySelectorAll(".drum").forEach(button => {
  button.addEventListener("click", function() {
    playSound(this.dataset.key);
  });
});

function playSound(key) {
  const audio = document.querySelector(`audio[data-key="${key}"]`);
  const button = document.querySelector(`button[data-key="${key}"]`);
  if (!audio) return;

  audio.currentTime = 0; // rewind to start
  audio.play();

  button.classList.add("playing");
  setTimeout(() => button.classList.remove("playing"), 200);
}
