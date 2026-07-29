

if(window.innerWidth>768){
  const cur=document.getElementById('cur'),ring=document.getElementById('cur-ring');
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;cur.style.left=mx+'px';cur.style.top=my+'px';});
  (function a(){rx+=(mx-rx)*.1;ry+=(my-ry)*.1;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(a);})();
  document.querySelectorAll('a,button,.svc-card,.why-card,.testi-card,.hstat,.office-card,.pstat,.sband-card').forEach(el=>{el.addEventListener('mouseenter',()=>{cur.classList.add('big');ring.classList.add('big');});el.addEventListener('mouseleave',()=>{cur.classList.remove('big');ring.classList.remove('big');});});
}
const hpts=document.getElementById('hpts');
for(let i=0;i<18;i++){const p=document.createElement('div');p.className='pt';const s=Math.random()*7+3;p.style.cssText=`left:${Math.random()*100}%;width:${s}px;height:${s}px;background:${Math.random()>.5?'rgba(245,158,11,.7)':'rgba(94,234,212,.5)'};animation-duration:${Math.random()*14+8}s;animation-delay:${Math.random()*8}s;`;hpts.appendChild(p);}
const nav=document.getElementById('nav');
window.addEventListener('scroll',()=>{nav.classList.toggle('scrolled',scrollY>40);document.getElementById('stb').classList.toggle('visible',scrollY>300);});
const ham=document.getElementById('ham'),mob=document.getElementById('mobmenu');
ham.addEventListener('click',()=>{ham.classList.toggle('open');mob.classList.toggle('open');});
function cm(){ham.classList.remove('open');mob.classList.remove('open');}
const obs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');obs.unobserve(e.target);}});},{threshold:.08,rootMargin:'0px 0px -50px 0px'});
document.querySelectorAll('.r,.r2,.r3').forEach(el=>obs.observe(el));
const cobs=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){const t=parseInt(e.target.getAttribute('data-t'));const noplus=e.target.hasAttribute('data-noplus');const s=performance.now(),dur=1800;const tick=n=>{const p=Math.min((n-s)/dur,1),ease=1-Math.pow(1-p,3);e.target.textContent=Math.floor(ease*t)+(p>=1&&!noplus&&t>2?'+':'');if(p<1)requestAnimationFrame(tick);};requestAnimationFrame(tick);cobs.unobserve(e.target);}});},{threshold:.5});
document.querySelectorAll('[data-t]').forEach(el=>cobs.observe(el));
function showTab(t){['tax','reg','trade','comp'].forEach(id=>{document.getElementById('tab-'+id).style.display=id===t?'block':'none';});document.querySelectorAll('.stab').forEach((b,i)=>{b.classList.toggle('active',['tax','reg','trade','comp'][i]===t);});}

document.querySelectorAll('a[href^="#"]').forEach(a=>{a.addEventListener('click',e=>{e.preventDefault();const t=document.querySelector(a.getAttribute('href'));if(t)t.scrollIntoView({behavior:'smooth',block:'start'});});});
const responses={'gst registration':'GST Registration takes 3-5 days. We handle everything — registration, monthly GSTR-1/3B, annual returns & refunds. Call +91 93420 00845!','gst':'We handle all GST — Registration, GSTR-1, GSTR-3B, Annual Returns, Refunds & more. Want to book a free consultation?','income tax':'We file ITR-1 to ITR-6 for individuals, firms & companies with maximum deductions. TDS returns, Form 16, advance tax — all covered.','company registration':'We register Pvt Ltd, LLP, OPC & Sole Proprietorships with DIN, DSC, MOA/AOA & MCA filing. Takes 7-10 days.','trademark':'Full brand protection — search, filing, objection reply & renewal. We file within 2-3 days.','import export':'IEC registration takes 3-5 days. We also handle AD Code, DGFT & export documentation.','msme':'MSME/Udyam Registration for government subsidies & priority loans. Done in 1-2 days!','fees':'Our fees are fully transparent — no hidden charges. Call +91 93420 00845 for a FREE quote!','price':'Transparent pricing always. Call +91 93420 00845 for a free quote.','contact':'📞 +91 93420 00845\n✉️ chennaigtax@gmail.com\n📍 Porur, Chennai 600 116','book':'Book via the form on this page, or call +91 93420 00845. We respond within 2 hours!','default':'For accurate info, call us at 📞 +91 93420 00845 or fill the consultation form. We respond within 2 hours!'};
function getBotReply(msg){const m=msg.toLowerCase();for(const key of Object.keys(responses)){if(key!=='default'&&m.includes(key))return responses[key];}return responses['default'];}
function addMsg(text,type){const msgs=document.getElementById('chatMsgs');const div=document.createElement('div');div.className='chat-msg '+type;div.innerHTML=text.replace(/\n/g,'<br>');msgs.appendChild(div);msgs.scrollTop=msgs.scrollHeight;}
function toggleChat(){document.getElementById('chatBox').classList.toggle('open');document.querySelector('.chat-badge').style.display='none';}
function askQ(q){document.getElementById('chatQuick').style.display='none';addMsg(q,'user');setTimeout(()=>addMsg(getBotReply(q),'bot'),500);}
function sendChat(){const inp=document.getElementById('chatInput');const msg=inp.value.trim();if(!msg)return;document.getElementById('chatQuick').style.display='none';addMsg(msg,'user');inp.value='';setTimeout(()=>addMsg(getBotReply(msg),'bot'),600);}



function submitForm(){
  // honeypot check
  if(document.querySelector('[name="website"]').value!=''){return;}
  
  // time check — less than 3 seconds = bot
  if(Date.now()-parseInt(document.getElementById('formTime').value)<3000){return;}

  const n=document.getElementById('fn').value.trim();
  const p=document.getElementById('fp').value.trim();
  const pc=document.getElementById('fpc')?.value||'+91';
  const e=document.getElementById('fe')?.value.trim();
  const s=document.getElementById('fs')?.value||'Not specified';
  const m=document.getElementById('fm')?.value.trim();

  // reset borders
  document.getElementById('fn').style.borderColor='';
  document.getElementById('fp').style.borderColor='';
  if(document.getElementById('fe'))document.getElementById('fe').style.borderColor='';

  // validate
  let valid=true;
  if(!n){document.getElementById('fn').style.borderColor='#f97316';valid=false;}
  if(!p||!/^[0-9\s\-]{6,14}$/.test(p)){document.getElementById('fp').style.borderColor='#f97316';valid=false;}
  if(!e||!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)){document.getElementById('fe').style.borderColor='#f97316';valid=false;}
  if(!valid){alert('Please enter valid Name, Phone and Email.');return;}

  const btn=document.querySelector('.f-sub');
  btn.textContent='Sending...';
  btn.disabled=true;
  btn.style.background='#6b7280';

  fetch("https://api.web3forms.com/submit",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({
      access_key:"2495f3be-c6ff-44ca-8fc5-869a54644bac",
      name:n,
      phone:pc+' '+p,
      email:e,
      service:s,
      message:m||'None',
      subject:"New Consultation Request — G-TAX — "+s,
      botcheck:false
    })
  }).then(r=>r.json()).then(data=>{
    if(data.success){
      btn.textContent='✅ Consultation Request Sent!';
      btn.style.background='#16a34a';
      btn.disabled=true;
      setTimeout(()=>{
        document.getElementById('fn').value='';
        document.getElementById('fp').value='';
        if(document.getElementById('fe'))document.getElementById('fe').value='';
        if(document.getElementById('fpc'))document.getElementById('fpc').selectedIndex=0;
        if(document.getElementById('fs'))document.getElementById('fs').selectedIndex=0;
        if(document.getElementById('fm'))document.getElementById('fm').value='';
        // reset time for next submission
        document.getElementById('formTime').value=Date.now();
      },2000);
      setTimeout(()=>{
        btn.textContent='Send Consultation Request →';
        btn.style.background='';
        btn.disabled=false;
      },3000);
    } else {
      alert("Failed: "+data.message);
      btn.textContent='Send Consultation Request →';
      btn.style.background='';
      btn.disabled=false;
    }
  }).catch(err=>{
    alert("Network error: "+err.message);
    btn.textContent='Send Consultation Request →';
    btn.style.background='';
    btn.disabled=false;
  });
}

document.getElementById('formTime').value=Date.now();

// Conference Gallery
let confIdx=0;
const confTotal=10;
const confTrack=document.getElementById('confTrack');
const confDots=document.querySelectorAll('.conf-dot');

function confGoTo(n){
  confIdx=(n+confTotal)%confTotal;
  confTrack.style.transform=`translateX(-${confIdx*100}%)`;
  confDots.forEach((d,i)=>{d.style.background=i===confIdx?'#fcd34d':'#fff';d.style.opacity=i===confIdx?'1':'.5';});
}
function confNext(){confGoTo(confIdx+1);}
function confPrev(){confGoTo(confIdx-1);}
confDots.forEach((d,i)=>d.addEventListener('click',()=>confGoTo(i)));
setInterval(confNext, 3000);
