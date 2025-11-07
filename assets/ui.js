function setupStart(vid,hint){
  hint.style.display='block';
  let loading=document.getElementById('loadingchip');
  if(!loading){loading=document.createElement('div');loading.id='loadingchip';loading.className='tapchip';loading.textContent='불러오는 중...';loading.style.display='none';hint.parentNode.appendChild(loading);}
  const tapChip=document.getElementById('tap');let started=false;
  const start=()=>{if(started)return;started=true;hint.style.display='none';loading.style.display='inline-block';vid.muted=true;vid.playsInline=true;const p=vid.play();
    const clearLoading=()=>{loading.style.display='none';};vid.addEventListener('playing',clearLoading,{once:true});
    const fallback=()=>{clearLoading();if(tapChip)tapChip.style.display='inline-block';};
    if(p&&p.catch){p.catch(()=>fallback());}setTimeout(()=>{if(vid.readyState<2)fallback();},1000);
    ['click','touchend','pointerdown'].forEach(ev=>{document.removeEventListener(ev,start,{passive:true});hint.removeEventListener(ev,start,{passive:true});vid.removeEventListener(ev,start,{passive:true});});};
  ['click','touchend','pointerdown'].forEach(ev=>{document.addEventListener(ev,start,{passive:true});hint.addEventListener(ev,start,{passive:true});vid.addEventListener(ev,start,{passive:true});});}
function awaitTapOnce(next){const stage=document.querySelector('.stage');const onTap=(e)=>{if(e.target.closest&&e.target.closest('.btn'))return;stage.removeEventListener('click',onTap);stage.removeEventListener('touchend',onTap);next();};stage.addEventListener('click',onTap,{passive:true});stage.addEventListener('touchend',onTap,{passive:true});}
function heartBurst(container){container.innerHTML='';for(let i=0;i<10;i++){const s=document.createElement('span');s.className='heart';s.textContent='❤';s.style.setProperty('--dx',(Math.random()*120-60)+'px');s.style.setProperty('--dy',(-(80+Math.random()*120))+'px');s.style.left=(Math.random()*80-40)+'px';s.style.animationDelay=(Math.random()*0.2)+'s';container.appendChild(s);}setTimeout(()=>{container.innerHTML='';},1600);}