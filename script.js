//CODE FOR NAV
document.querySelectorAll("nav ul li").forEach(function (li) {
  li.addEventListener("click", function () {
    var href = this.getAttribute("data-href");
    if (href) {
      window.location.href = href;
    }
  });
});
document.querySelectorAll("[data-href]").forEach((button) => {
  button.addEventListener("click", function () {
    // Get the value of data-href attribute
    var target = this.getAttribute("data-href");

    // If the target exists, navigate to it
    if (target) {
      // Scroll to the target section smoothly
      document.querySelector(target).scrollIntoView({
        behavior: "smooth",
      });
    }
  });
});
//END FOR COE OF NAV

// CODE FOR QUOTE SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

// OBJECTS FOR GALLERY

const toysForSale = [
  {
    name: "Block Set",
    price: 39.99,
    img: "imgs/block5.jpg",
    link: "",
  },
  {
    name: "Boat",
    price: 14.99,
    img: "imgs/boat2.jpg",
    link: "",
  },
  {
    name: "Car",
    price: 11.99,
    img: "imgs/car3.jpg",
    link: "",
  },
  {
    name: "Plane",
    price: 29.99,
    img: "imgs/plane3.jpg",
    link: "",
  },
  {
    name: "Train",
    price: 49.99,
    img: "imgs/train7.jpg",
    link: "",
  },
  {
    name: "Xylophone",
    price: 24.99,
    img: "imgs/xylophone.webp",
    link: "",
  },
];

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
        <div class = "card text-dark" style="z-index: -1;">
            <div class = "card-header">
                ${toy.name}
            </div>
            <div class = "card-image">
              <img src="${toy.img}" class="img-fluid" style="min-height: 250px; height: 275px;">
            </div>
            <div class = "card-body py-1" style="background-color:${backgroundColor};">
                <p><strong>Price: </strong>$${toy.price}</p> 
            </div>
            <div class="card-footer text-center bg-white border-none">
              <button class="module-border-wrap learn-more-btn" id="myBtnOne">Learn More!</button>
              <div id="myModalOne" class="modal">
                <div class="modal-content">
                  <span class="close closeOne">&times;</span>
                  <h1 class="text-center">2007</h1>
                  <hr>
                  <img class="imgstyle2" src="${toy.img}" />
                  <hr>
                  <p class="text-center mt-3">I was born.</p>
                  <p class="text-center"><b>Two whole days before Benjamin Lipsky.</b></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        `;
    for (let i = 0; i < card.children.length; i++) {
      card.children[i].style.backgroundColor = backgroundColor;
    }
    toysForSaleContainer.appendChild(card);
  });
}

// Get the modal
var modalOne = document.getElementById("myModalOne");

// Get the button that opens the modal
var btn = document.getElementById("myBtnOne");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeOne")[0];

// When the user clicks anywhere outside of the modal, close it
window.onload = function (event) {
  setInterval(function () {
    plusSlides(1);
  }, 7500);
  generateToysForSale();
};

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modalOne.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modalOne.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modalOne) {
    modalOne.style.display = "none";
  }
}