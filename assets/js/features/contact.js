export function initContact(){
 const form=document.querySelector('#contactForm');
 form.addEventListener('submit',event=>{
  event.preventDefault();if(!form.reportValidity())return;
  const values=new FormData(form),subject=String(values.get('subject')||'Portfolio inquiry'),body=`From: ${values.get('name')}\nEmail: ${values.get('email')}\n\n${values.get('message')}`;
  location.href=`mailto:mo3mmad200617@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  document.querySelector('#formSuccess').classList.remove('d-none');
 });
}
