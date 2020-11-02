var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var mm = document.getElementById('mobileMenu');
  var mc = document.getElementById('mobileContainer');
  var dm = document.getElementById('desktopMenu');
  var dc = document.getElementById('desktopContainer');
  var sidebar = document.getElementById('sidebar');
  var menubar = document.getElementById('menubar');

  
  if ((prevScrollpos > currentScrollPos) && (window.innerWidth>960)) {
    document.getElementById("navbar").style.top = "0";
  } else if ((prevScrollpos < currentScrollPos) && (window.innerWidth>960)){
    document.getElementById("navbar").style.top = "-350px";
  }
  prevScrollpos = currentScrollPos;
  if (mm.classList.contains('active')){
    mm.classList.toggle('active');
    mc.classList.toggle('change');
  }
  if (dm.classList.contains('active')){
    dm.classList.toggle('active');
    dc.classList.toggle('change');
  }

  if (window.pageYOffset<=120){
    sidebar.classList.add('none')
  }
  if (window.pageYOffset>120){
    sidebar.classList.remove('none')
  }
  if (window.pageYOffset<=120){
    menubar.classList.remove('none')
  }
  if (window.pageYOffset>120){
    menubar.classList.add('none')
  }
  
}
