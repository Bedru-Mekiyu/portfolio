
AOS.init({ once:true, duration:1000, easing:"ease-in-out" });

// Redirect to thank-you page on form submit
document.getElementById('contactForm').addEventListener('submit', function(event){
  event.preventDefault();
  // Redirect using JavaScript
  window.location.href = "thank-you.html";
});