
AOS.init({ once:true, duration:1000 });

// Lottie animation loader
const animContainer = document.getElementById("success-animation");
lottie.loadAnimation({
  container: animContainer,
  renderer: "svg",
  loop: false,
  autoplay: true,
  path: "https://assets9.lottiefiles.com/private_files/lf30_editor_fzclawiz.json" // success particle animation
});

// Auto redirect counter
let sec = 10;
const counter = document.getElementById("counter");
const countdown = setInterval(() => {
  sec--;
  counter.textContent = sec;
  if (sec <= 0) {
    clearInterval(countdown);
    window.location.href = "index.html";
  }
}, 1000);
