//CODE FOR NAV
document.querySelectorAll('nav ul li').forEach(function(li) {
    li.addEventListener('click', function() {
      var href = this.getAttribute('data-href');
      if (href) {
        window.location.href = href;
      }
    });
  });
//END FOR COE OF NAV
