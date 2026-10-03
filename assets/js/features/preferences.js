export function initPreferences(){
 const root=document.documentElement, theme=document.querySelector('#themeToggle'), motion=document.querySelector('#motionToggle'), reduced=matchMedia('(prefers-reduced-motion: reduce)');
 let paused=false;
 try{paused=localStorage.getItem('portfolio-motion')==='paused';}catch{}
 function sync(){
  const dark=root.dataset.theme==='dark';
  document.querySelector('#themeIcon').className=dark?'fas fa-moon':'fas fa-sun';
  theme.setAttribute('aria-label',`Switch to ${dark?'light':'dark'} theme`);
  root.dataset.motion=paused||reduced.matches?'paused':'running';
  motion.setAttribute('aria-pressed',String(paused||reduced.matches));
  motion.textContent=reduced.matches?'Reduced motion':paused?'Resume animation':'Pause animation';motion.disabled=reduced.matches;
  if(root.dataset.motion==='paused') document.querySelector('.profile-card-inner').style.transform='none';
 }
 theme.addEventListener('click',()=>{root.dataset.theme=root.dataset.theme==='dark'?'light':'dark';try{localStorage.setItem('theme',root.dataset.theme);}catch{}sync();});
 motion.addEventListener('click',()=>{paused=!paused;try{localStorage.setItem('portfolio-motion',paused?'paused':'running');}catch{}sync();});
 reduced.addEventListener('change',sync);sync();
}
