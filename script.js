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
      description: 'The wooden toy car, expertly crafted from smooth, polished oak, combines simplicity and elegance. Its natural finish highlights the wood grain, while sturdy wheels ensure durability. This charming toy, free from harsh chemicals and vibrant in its timeless design, sparks children\'s imagination and creativity during play.',
      cardimg: 'imgs/car3.jpg',
      img: 'imgs/car3.jpg',
      modalID: 'modal2',
      age: '3+'
  },
  {
      product: 'Train',
      price: '49.99',
      description: 'The wooden toy train set, meticulously crafted from polished hardwood, includes a charming locomotive and cars with a natural finish. Durable and eco-friendly, this timeless toy sparks creativity and imaginative play in children, offering hours of joy and storytelling, making it a cherished classic.',
      cardimg: 'imgs/train7.jpg',
      img: 'imgs/train7.jpg',
      modalID: 'modal3',
      age: '5+'
  },
  {
      product: 'Airplane',
      price: '29.99',
      description: 'The wooden toy airplane, expertly carved from polished hardwood, features a sleek, natural finish. Its sturdy design and smooth edges ensure safe, imaginative play. This timeless toy, free from harsh chemicals, sparks children\'s creativity and love for adventure, making it a cherished classic in any toy collection. ',
      cardimg: 'imgs/plane3.jpg',
      img: 'imgs/plane3.jpg',
      modalID: 'modal4',
      age: '3+'
  },
  {
      product: 'Boat',
      price: '14.99',
      description: 'The wooden toy boat, beautifully crafted from polished hardwood, showcases a natural finish and smooth, rounded edges. Its sturdy, durable design ensures safe, imaginative play. This timeless toy, free from harsh chemicals, inspires children\'s creativity and love for adventure, making it a cherished classic in any toy collection.',
      cardimg: 'imgs/boat2.jpg',
      img: 'imgs/boat2.jpg',
      modalID: 'modal5',
      age: '4+'
  },
  {
      product: 'Block Set',
      price: '39.99',
      description: 'The wooden block set, expertly crafted from polished hardwood, features pieces in various shapes and sizes with a smooth, natural finish. Durable and eco-friendly, these blocks encourage creativity, problem-solving, and imaginative play in children. This timeless toy set is a cherished classic, perfect for endless building adventures.',
      cardimg: 'imgs/block5.jpg',
      img: 'imgs/block5.jpg',
      modalID: 'modal6',
      age: '5+'
  },
  {
      product: 'Xylophone',
      price: '24.99',
      description: 'The wooden xylophone, beautifully crafted from polished hardwood, features vibrant, multicolored bars. Each bar produces a clear, melodious tone when struck, encouraging musical exploration. This durable, eco-friendly instrument inspires children\'s creativity and love for music, making it a cherished classic in any toy collection. This xylophone brings out how Drake is Not Like Us, and shows us that Family Matters.',
      cardimg: 'imgs/xylophone.webp',
      img: 'imgs/xylophone.webp',
      modalID: 'modal7',
      age: '4+'
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
          <div class="modal fade justify-content-center align-items-center"  role="dialog" aria-labelledby="ModelLabel" aria-hidden="true" id="${product.modalID}">
              <div class="modal-dialog modal-dialog-centered modal-lg modal-dialog-scrollable justify-content-center align-items-center" >
                  <div class="modal-content">
                      <div class="modal-body">
                          <div class="row">
                              <div class="col-md-12 col-lg-10 text-center justify-content-center align-items-center">
                                  <img id="mainPic${index}" class="mainPic img-fluid py-0" src="${product.img}">
                              </div>
                          </div>
                          <div class="row pt-0">
                              <div class="col-12">
                                  <h4><br>${product.description}</h4>
                                  <h6>Ages ${product.age}</h6>
                                  <h6>Price: $${product.price}</h6>
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


  