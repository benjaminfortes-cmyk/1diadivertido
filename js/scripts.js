(function(){
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var intro = document.getElementById('intro');

  // Intro
  if(intro){
    if(reduce){
      intro.remove();
      document.body.classList.remove('con-intro');
    }else{
      setTimeout(function(){
        var logo = document.querySelector('.nav .logo img');
        var sol = intro.querySelector('svg');
        var r = logo.getBoundingClientRect();
        var s = sol.getBoundingClientRect();
        var dx = (r.left + r.width/2) - (s.left + s.width/2);
        var dy = (r.top + r.height/2) - (s.top + s.height/2);
        var sc = Math.max(r.height / s.height, .16);
        sol.style.transition = 'transform .85s cubic-bezier(.55,-.15,.35,1), opacity .35s .7s';
        sol.style.transform = 'translate(' + dx + 'px,' + dy + 'px) scale(' + sc + ')';
        sol.style.opacity = '0';
        intro.style.transition = 'opacity .45s .5s';
        intro.style.opacity = '0';
        setTimeout(function(){
          intro.remove();
          document.body.classList.remove('con-intro');
        }, 1250);
      }, 1900);
    }
  }

  // Rayos del sol con el scroll
  var rayos = document.getElementById('rayosHero');
  if(rayos && !reduce){
    window.addEventListener('scroll', function(){
      var angulo = Math.sin(window.scrollY / 90) * 9;
      rayos.style.transform = 'rotate(' + angulo + 'deg)';
    }, {passive:true});
  }
})();
