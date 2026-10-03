export function initMotion(){
 const scene=document.querySelector('.profile-scene'), card=document.querySelector('.profile-card-inner'), fine=matchMedia('(hover:hover) and (pointer:fine)');
 let frame=0;
 scene.addEventListener('pointermove',event=>{
  if(!fine.matches||document.documentElement.dataset.motion==='paused')return;
  const r=scene.getBoundingClientRect(),x=(event.clientX-r.left)/r.width-.5,y=(event.clientY-r.top)/r.height-.5;
  cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>{if(document.documentElement.dataset.motion!=='paused')card.style.transform=`rotateX(${-y*12}deg) rotateY(${x*16}deg) translateZ(10px)`;});
 });
 scene.addEventListener('pointerleave',()=>{cancelAnimationFrame(frame);card.style.transform='';});
 if(!('IntersectionObserver' in window))return;
 const reveal=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('animate-in');reveal.unobserve(e.target);}}),{threshold:.1});
 document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right').forEach(e=>reveal.observe(e));
 const visible=new Set(),animated=[scene,...document.querySelectorAll('.project-visual')];
 const sync=()=>animated.forEach(e=>e.classList.toggle('motion-offscreen',document.hidden||!visible.has(e)));
 const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)visible.add(e.target);else visible.delete(e.target);});sync();});animated.forEach(e=>observer.observe(e));document.addEventListener('visibilitychange',sync);
}
