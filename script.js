//CODE FOR NAV
document.querySelectorAll('nav ul li').forEach(function(li) {
    li.addEventListener('click', function() {
      var href = this.getAttribute('data-href');
      if (href) {
        window.location.href = href;
      }
    });
  });
  document.querySelectorAll('[data-href]').forEach(button => {
    button.addEventListener('click', function() {
        // Get the value of data-href attribute
        var target = this.getAttribute('data-href');
        
        // If the target exists, navigate to it
        if (target) {
            // Scroll to the target section smoothly
            document.querySelector(target).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
//END FOR COE OF NAV

// CODE FOR QUOTE SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
window.onload= function () {
 setInterval(function(){ 
     plusSlides(1);
 }, 10000);
 }
