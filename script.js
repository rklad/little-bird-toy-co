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

const Products = [
  {
      product: 'Car',
      price: '11.99',
      description: 'This heirloom-quality wooden car is a timeless treasure. Handcrafted from domestic and exotic hardwoods with a clear lacquer finish, this unique car will inspire generations of imaginative play. Please note potential choking hazards for small children.',
      cardimg: 'imgs/car3.jpg',
      img: 'imgs/car3.jpg',
      modalID: 'modal2'
  },
  {
      product: 'Train',
      price: '49.99',
      description: 'Embark on a charming journey with this beautiful handcrafted wooden train set. Engine and three interchangeable cars boast intricate details made from real beech wood. Large size with moving wheels and a fully ecological design.',
      cardimg: 'imgs/train7.jpg',
      img: 'imgs/train7.jpg',
      modalID: 'modal3'
  },
  {
      product: 'Airplane',
      price: '29.99',
      description: 'Soar through imaginative skies with this classic wooden airplane. Handcrafted from sustainable Baltic birch wood with a safe, natural harvest finish and a spinning propeller. ',
      cardimg: 'imgs/plane3.jpg',
      img: 'imgs/plane3.jpg',
      modalID: 'modal4'
  },
  {
      product: 'Boat',
      price: '14.99',
      description: 'Set sail for bathtub adventures with this adorable wooden boat. Made from solid Maine white pine, this handcrafted toy floats and features rounded edges for safety.',
      cardimg: 'imgs/boat2.jpg',
      img: 'imgs/boat2.jpg',
      modalID: 'modal5'
  },
  {
      product: 'Block Set',
      price: '39.99',
      description: 'Build creativity and imagination with this high-quality, 72-piece block set. Made from naturally finished and smooth-sanded hardwood blocks, this set comes in a convenient wooden storage crate',
      cardimg: 'imgs/block5.jpg',
      img: 'imgs/block5.jpg',
      modalID: 'modal6'
  },
  {
      product: 'Xylophone',
      price: '24.99',
      description: 'hi',
      cardimg: 'imgs/xylophone.webp',
      img: 'imgs/xylophone.webp',
      modalID: 'modal7'
  },
];

function generateProductCards() {
  const productCardsContainer = document.getElementById('productCards');

  Products.forEach((product, index) => {
      const card = document.createElement('div');
      card.classList.add('col-lg-4', 'col-md-6', 'col-sm-12');

      card.innerHTML = `
          <div class = "card text-dark">
            <div class = "card-header">
                ${product.product}
            </div>
            <div class = "card-image">
              <img src="${product.img}" class="img-fluid" style="min-height: 250px; height: 275px;">
            </div>
            <div class = "card-body py-1" style="background-color:$     {backgroundColor};">
              <p><strong>Price: </strong>$${product.price}</p> 
            </div>
            <div class="card-footer text-center bg-white border-none">
              <a href="#" class="learn-more-btn" data-toggle="modal" data-target="#${product.modalID}">Learn More</a>
            </div>
          </div>  
          <!-- Modal -->
          <div class="modal fade"  role="dialog" aria-labelledby="ModelLabel" aria-hidden="true" id="${product.modalID}">
              <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable" >
                  <div class="modal-content">
                      <div class="modal-body">
                          <div class="row">
                              <div class="col-md-12 col-lg-10 text-center">
                                  <img id="mainPic${index}" class="mainPic img-fluid py-0" src="${product.img}">
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-12">
                                  <h4><br>${product.description}</h4>
                                  <h6>Price: ${product.price}</h6>
                              </div>
                          </div>
                      </div>
                      <div class="modal-footer" style="display: flex; justify-content: space-between;">
                          <button type="button" class="btn btn-secondary close" data-dismiss="modal">Close</button>
                      </div>
                  </div>
              </div>
          </div>
      `;
      productCardsContainer.appendChild(card);
  });
}
  function refresh() {
    location.reload();
  }
  
  // Call the function to generate toys for sale
  window.onload = function (event) {
    setInterval(function () {
      plusSlides(1);
    }, 7500);
    generateProductCards();
  };