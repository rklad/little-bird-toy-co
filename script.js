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


 // OBJECTS FOR GALLERY

 const toysForSale = [
  {
    name: "Block Set",
    price: 39.99,
    img: "imgs/jasonrobertson.png",
    link: "",
  },
  {
    name: "Boat",
    price: 14.99,
    img: "imgs/jackhughes.png",
    link: "",
  },
  {
    name: "Car",
    price: 11.99,
    img: "imgs/nikitakucherov.png",
    link: "",
  },
  {
    name: "Plane",
    price: 29.99,
    img: "imgs/artemipanarin.png",
    link: "",
  },
  {
    name: "Train",
    price: 49.99,
    img: "imgs/connormcdavid.png",
    link: "",
  },
  {
    name: "Xylophone",
    price: 24.99,
    img: "imgs/pastrnak.png",
    link: "",
  }

 ]

 function generateToysForSale() {
  const toysForSaleContainer = document.getElementById("toysForSale");

  toysForSale.forEach((toy) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4");
    card.classList.add("py-2");

    let backgroundColor;
    switch (toy.name) {
      default:
        backgroundColor = "white"; // White background
    }

    card.innerHTML = `
        <div class = "card text-dark">
            <div class = "card-header">
                ${toy.name}
            </div>
            <div class = "card-image">
              <img src="${toy.img}" class="img-fluid">
            </div>
            <div class = "card-body py-1" style="background-color:${backgroundColor};">
                <p><strong>Price: </strong>$${toy.price}</p> 
            </div>
            <div class="card-footer text-center bg-white border-none">
              <a
                href="${toy.modal}"
                class="btn btn-primary"
                >Learn more!</a
              >
            </div>
        </div>
        `;
    for (let i = 0; i < card.children.length; i++) {
      card.children[i].style.backgroundColor = backgroundColor;
    }
    toysForSaleContainer.appendChild(card);
  });
 }

 window.onload = generateToysForSale();