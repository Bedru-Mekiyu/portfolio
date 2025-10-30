

/* progress bar counters */
const bars=document.querySelectorAll('.progress-bar'),counters=document.querySelectorAll('.skill-counter');
const triggerHeight=200;
window.addEventListener('scroll',()=>{ 
  bars.forEach(b=>{const r=b.getBoundingClientRect().top;if(r<innerHeight-triggerHeight&&!b.classList.contains('animated')){b.classList.add('animated');const t=parseInt(b.dataset.target);b.style.transition='width 2s';b.style.width=t+'%';}});
  counters.forEach(c=>{const r=c.getBoundingClientRect().top;if(r<innerHeight-triggerHeight&&!c.classList.contains('counted')){c.classList.add('counted');let cur=0,t=parseInt(c.dataset.target),d=t/60;
    const step=()=>{cur+=d;if(cur<t){c.textContent=Math.round(cur)+'%';requestAnimationFrame(step);}else{c.textContent=t+'%';}};requestAnimationFrame(step);}});
});

AOS.init({ once:true, duration:900 });
if(document.querySelector('.typed')){
new Typed('.typed',{strings:document.querySelector('.typed').dataset.typedItems.split(','),loop:true,typeSpeed:80,backSpeed:40,backDelay:2000});
}
GLightbox({ selector: '.glightbox' });