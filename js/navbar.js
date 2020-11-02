var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

  var currentScrollPos = window.pageYOffset;
  var mm = document.getElementById('mobileMenu');
  var mc = document.getElementById('mobileContainer');
  var dm = document.getElementById('desktopMenu');
  var dc = document.getElementById('desktopContainer');
  var sidebar = document.getElementById('sidebar');
  var menubar = document.getElementById('menubar');

  if ((window.pageYOffset%20==0) || (window.pageYOffset==0)){
    if ((prevScrollpos > currentScrollPos) && (window.innerWidth>960) && (window.pageYOffset<=199)) {
      menubar.style.top = "0";
    }
    if ((prevScrollpos < currentScrollPos) && (window.innerWidth>960)){
      menubar.style.top = "-350px";
    }
    if ((prevScrollpos < currentScrollPos) && (window.innerWidth>960) && (window.pageYOffset>=200)){
      sidebar.style.top = "0";
    }
    if ((prevScrollpos > currentScrollPos) && (window.innerWidth>960) && (window.pageYOffset<=200)){
      sidebar.style.top = "-200px";
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
  }
}
