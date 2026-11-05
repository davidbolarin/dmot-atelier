(function(){
  var state={c:'Black',s:'M'},shots={Black:'assets/black-tee.webp',White:'assets/white-tee.webp'};
  var sizes=document.querySelectorAll('.sizes button'),sw=document.querySelectorAll('.swatches button'),order=document.getElementById('order'),sz=document.getElementById('sz'),clr=document.getElementById('clr'),shot=document.getElementById('pshot');
  function upd(){sz.textContent=state.c.toLowerCase()+', size '+state.s;clr.textContent=state.c;shot.src=shots[state.c];shot.alt='Front of the '+state.c.toLowerCase()+' round neck t-shirt';order.href='mailto:dmotatelier@gmail.com?subject='+encodeURIComponent('Order: Round neck t-shirt, '+state.c+', size '+state.s)}
  sizes.forEach(function(b){b.addEventListener('click',function(){sizes.forEach(function(x){x.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');state.s=b.textContent;upd()})});
  sw.forEach(function(b){b.addEventListener('click',function(){sw.forEach(function(x){x.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');state.c=b.getAttribute('data-c');upd()})});
  var root=document.documentElement,tb=document.getElementById('theme');
  function isDark(){return root.getAttribute('data-theme')==='dark'}
  tb.addEventListener('click',function(){var n=isDark()?'light':'dark';root.setAttribute('data-theme',n);try{localStorage.setItem('dmot-theme-v2',n)}catch(e){}});
  var mq=document.querySelector('.marquee'),mb=document.getElementById('marqBtn');
  mb.addEventListener('click',function(){var p=mb.getAttribute('aria-pressed')!=='true';mb.setAttribute('aria-pressed',p?'true':'false');mb.setAttribute('aria-label',p?'Play scrolling banner':'Pause scrolling banner');mq.classList.toggle('paused',p)});
})();
