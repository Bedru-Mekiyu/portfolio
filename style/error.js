
AOS.init({once:true,duration:1000});
// Lottie failure animation
const anim=k=>lottie.loadAnimation({
  container:document.getElementById("error-animation"),
  renderer:"svg",
  loop:false,
  autoplay:true,
  path:"https://assets9.lottiefiles.com/packages/lf20_yGiLlb.json" // red X glow burst
});
anim();
// Countdown redirect
let sec=10;
const counter=document.getElementById("counter");
const countdown=setInterval(()=>{
  sec--;
  counter.textContent=sec;
  if(sec<=0){
    clearInterval(countdown);
    window.location.href='contact.html';
  }
},1000);



document.getElementById("contactForm").addEventListener("submit", function(e) {
e.preventDefault();
// simulate success/failure conditions
const isSuccess = Math.random() > 0.8; // 20% chance fail (example)
if (isSuccess) {
  window.location.href = "thank-you.html";
} else {
  window.location.href = "error.html";
}
});
