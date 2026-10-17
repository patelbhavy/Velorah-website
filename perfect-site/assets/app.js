(()=>{const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
const B='https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260727_';
const img=f=>'https://images.higgs.ai/?default=1&output=webp&url='+encodeURIComponent(B+f+'.png')+'&w=1280&q=85';
const T=[['Andrei Baranov','Design Chief','225202_f9e684f3-dc19-469a-8142-eb391bfc601b','Andrei sets the visual direction of every project, turning rough ideas into clear, confident design languages.'],
['Daria Lebedeva','Interface Expert','225149_7937e8ea-3b0a-46ab-919f-775627695a23','Daria crafts interfaces people understand at first glance, making complex products feel simple and warm.'],
['Ivan Sorokin','Concept Chief','225153_f2b1fc04-776a-4f2e-879b-b764ea762e77','Ivan digs into every brief until the core story emerges, then builds concepts that give each project its reason to exist.'],
['Anna Fedorova','Brand Consultant','225847_f456fd9c-8938-4103-836d-51b0e88a9510','Anna helps brands find their voice, building identities that stay consistent everywhere.'],
['Pavel Smirnov','Movement Artist','225854_3958a522-6203-4f84-a7fa-3b3f1dcd7256','Pavel brings stillness to life with transitions that feel natural and precise.'],
['Olga Kravtsova','UX Specialist','231111_fcefaa07-6851-4fdc-ac7b-98754ac9d5c4','Olga studies how people actually use what we make, keeping every decision grounded in real behavior.'],
['Igor Zakharenko','Graphic Creator','231124_9a1505aa-8c44-4046-aff8-1aa0bc7b3ef3','Igor sweats the visual details, from typography to illustration, that separate good work from unforgettable.'],
['Ksenia Romanova','Studio Head','230413_62e8b331-89be-4d35-84fe-330ba9b1b64f','Ksenia connects people, plans, and priorities so every project ships on time without losing craft.']];
let cur=-1;const bgs=$('#bgs'),pick=$('#pick');
T.forEach((t,i)=>{const d=document.createElement('div');d.style.backgroundImage=`url("${img(t[2])}")`;bgs.append(d);
 const b=document.createElement('button');b.innerHTML=`<i></i><img src="${img(t[2])}" alt="${t[0]}">`;b.onclick=()=>show(i);pick.append(b)});
function show(i){if(i===cur)return;cur=i;$$('div',bgs).forEach((d,k)=>d.classList.toggle('on',k===i));$$('button',pick).forEach((b,k)=>b.classList.toggle('on',k===i));
 const p=$('#tdesc');p.textContent=T[i][3];p.style.animation='none';p.offsetWidth;p.style.animation='';$('#tname').textContent=T[i][0];$('#trole').textContent=T[i][1];
 const k=$('.tdrag .knob');if(k&&!k.classList.contains('drag'))place(k,i/(T.length-1))}
function place(k,p){const tr=k.parentElement;k.style.left=4+p*(tr.clientWidth-56)+'px'}
// draggable arrow
function dragger(root,onMove,onEnd){const k=$('.knob',root),tr=$('.track',root);
 k.addEventListener('pointerdown',e=>{e.preventDefault();k.setPointerCapture(e.pointerId);k.classList.add('drag');
  const mv=ev=>{const r=tr.getBoundingClientRect();const p=Math.min(1,Math.max(0,(ev.clientX-r.left-28)/(r.width-56)));k.style.left=4+p*(r.width-56)+'px';onMove&&onMove(p)};
  const up=()=>{k.removeEventListener('pointermove',mv);k.removeEventListener('pointerup',up);k.classList.remove('drag');const p=(parseFloat(k.style.left)-4)/(tr.clientWidth-56);onEnd&&onEnd(p)};
  k.addEventListener('pointermove',mv);k.addEventListener('pointerup',up)})}
const hd=$('.hero .dragger');dragger(hd,null,p=>{const k=$('.knob',hd);if(p>.85){$(hd.dataset.target).scrollIntoView({behavior:'smooth'})}k.style.transition='left .5s';k.style.left='4px';setTimeout(()=>k.style.transition='',500)});
const td=$('.tdrag');dragger(td,p=>show(Math.round(p*(T.length-1))),p=>{const k=$('.knob',td);k.style.transition='left .3s';place(k,Math.round(p*(T.length-1))/(T.length-1));setTimeout(()=>k.style.transition='',300)});
show(0);addEventListener('resize',()=>{const k=$('.tdrag .knob');place(k,cur/(T.length-1))});
// reveal on scroll
const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&e.target.classList.add('in')),{threshold:.15});$$('.reveal').forEach(el=>io.observe(el));
// custom arrow cursor + magnetic buttons + hero parallax
const c=$('#cursor');let mx=0,my=0,cx=0,cy=0;addEventListener('pointermove',e=>{mx=e.clientX;my=e.clientY;c.classList.toggle('big',!!e.target.closest('button,a,.knob'))});
(function loop(){cx+=(mx-cx)*.2;cy+=(my-cy)*.2;const a=Math.atan2(my-cy,mx-cx)*180/Math.PI;c.style.transform=`translate(${cx}px,${cy}px) rotate(${a}deg)`;requestAnimationFrame(loop)})();
$$('.magnet').forEach(b=>{b.addEventListener('pointermove',e=>{const r=b.getBoundingClientRect();b.style.translate=`${(e.clientX-r.left-r.width/2)*.2}px ${(e.clientY-r.top-r.height/2)*.3}px`});b.addEventListener('pointerleave',()=>b.style.translate='')});
addEventListener('scroll',()=>{const v=$('.hero video');if(v&&scrollY<innerHeight)v.style.transform=`scale(${1+scrollY/4000}) translateY(${scrollY*.15}px)`},{passive:true});
// modal
const M=$('#modal'),txt={signup:['Begin your journey','Enter your email to get started.'],hello:['Say hello','Drop us a note and we will reply shortly.'],informed:['Stay informed','Enter your email for thoughtful updates.'],faq:['FAQ','Is there a free tier? Yes — start free with core features.']};
document.addEventListener('click',e=>{const m=e.target.closest('[data-modal]');if(m){const t=txt[m.dataset.modal];$('h3',M).textContent=t[0];$('p',M).textContent=t[1];M.hidden=false}
 if(e.target===M||e.target.closest('.x'))M.hidden=true;if(e.target.closest('.go')){$('p',M).textContent='Thank you! We received your note.';setTimeout(()=>M.hidden=true,1200)}});
})();
