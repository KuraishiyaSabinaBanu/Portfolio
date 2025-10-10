// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click',function(e){
    e.preventDefault();
    const t = document.querySelector(this.getAttribute('href'));
    if(t) t.scrollIntoView({behavior:'smooth',block:'start'});
  });
});

// Simple contact form handler — opens mailto as fallback
const form = document.getElementById('contactForm');
const formMsg = document.getElementById('formMsg');
form.addEventListener('submit',function(e){
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim() || 'Message from portfolio';
  const message = document.getElementById('message').value.trim();
  if(!name || !email || !message){ 
    formMsg.textContent='Please complete the required fields.'; 
    return;
  }
  const body = encodeURIComponent('Name: '+name+'\nEmail: '+email+'\n\n'+message);
  window.location.href = 'mailto:kuraishiyasabi@gmail.com?subject='+encodeURIComponent(subject)+'&body='+body;
  formMsg.textContent='Opening your mail client...';
});
