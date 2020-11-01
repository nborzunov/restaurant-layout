var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if ((prevScrollpos > currentScrollPos) && (window.innerWidth>960)) {
    document.getElementById("navbar").style.top = "0";
  } else if ((prevScrollpos < currentScrollPos) && (window.innerWidth>960)){
    document.getElementById("navbar").style.top = "-350px";
  }
  prevScrollpos = currentScrollPos;
  if (document.getElementById('menu').classList.contains('active')){
    document.getElementById('menu').classList.toggle('active')
    document.getElementById('container').classList.toggle('change')
  }
  
}
