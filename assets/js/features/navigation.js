export function initNavigation(){
 const nav=document.querySelector('#mainNav'), menu=document.querySelector('#navMenu'), toggle=document.querySelector('.navbar-toggler'), links=[...document.querySelectorAll('.nav-link')], sections=[...document.querySelectorAll('section[id]')], top=document.querySelector('#scrollTop');
 const close=()=>{if(window.bootstrap) window.bootstrap.Collapse.getOrCreateInstance(menu,{toggle:false}).hide();else{menu.classList.remove('show');toggle.setAttribute('aria-expanded','false');}};
 if(!window.bootstrap) toggle.addEventListener('click',()=>{const open=menu.classList.toggle('show');toggle.setAttribute('aria-expanded',String(open));});
 links.forEach(link=>link.addEventListener('click',close));
 document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.classList.contains('show')){close();toggle.focus();}});
 let pending=false;
 const update=()=>{pending=false;nav.classList.toggle('scrolled',scrollY>60);top.classList.toggle('visible',scrollY>400);top.tabIndex=scrollY>400?0:-1;let current='home';sections.forEach(s=>{if(s.getBoundingClientRect().top<=130)current=s.id;});links.forEach(l=>{const active=l.hash===`#${current}`;l.classList.toggle('active',active);if(active)l.setAttribute('aria-current','location');else l.removeAttribute('aria-current');});const total=document.documentElement.scrollHeight-innerHeight;document.querySelector('.reading-progress').style.transform=`scaleX(${total>0?Math.min(1,scrollY/total):0})`;};
 const schedule=()=>{if(!pending){pending=true;requestAnimationFrame(update);}};
 addEventListener('scroll',schedule,{passive:true});addEventListener('resize',schedule);
 if('ResizeObserver' in window)new ResizeObserver(schedule).observe(document.body);
 top.addEventListener('click',()=>{scrollTo({top:0,behavior:document.documentElement.dataset.motion==='paused'?'instant':'smooth'});document.querySelector('.navbar-brand').focus({preventScroll:true});});update();
}
