
    AOS.init({ once:true, duration:900, easing:'ease-in-out' });
    document.querySelectorAll('.counter').forEach(counter=>{
      const animate=()=>{const value=+counter.dataset.target;const data=+counter.innerText;const speed=80;
        const inc=value/speed;if(data<value){counter.innerText=Math.ceil(data+inc);setTimeout(animate,30);}else{counter.innerText=value;}}
      animate();
    });
  