import {allJackets, getJacketById} from "./jackets.js";




const jacketId = new URLSearchParams(document.location.search).get("jacketId");
const jacketSize = new URLSearchParams(document.location.search).get("size");


const thisJacket = getJacketById(jacketId);
    document.title = thisJacket.productName;
    const jacketHtml = `<section class="shopping-cart">
    <div>
      <img
        src="${thisJacket.img}"
        alt="${thisJacket.productName}"
        class="cart-img"
      />
    </div>
    <div class="cart-details">
      <h1 class="cart-header">${thisJacket.productName}</h1>
      <p>Size: ${jacketSize}</p>
      <p>$${thisJacket.price}</p>
      <p class="subtotal">Subtotal: $${thisJacket.price}</p>
      <a href="checkout.html?jacketId=${thisJacket.id}" class="checkout-button">Checkout</a>
    </div>
  </section>

  <a href="products.html" class="continue-shopping-button"
    >⟵ Continue Shopping</a
  >
    `

    const cartJacketHtml = document.querySelector("#placeHolderJacketInCart");
    cartJacketHtml.innerHTML = jacketHtml;