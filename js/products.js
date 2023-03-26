import {allJackets} from "./jackets.js";

console.log(allJackets)

const htmlElement = document.querySelector("#placeholder");

let jacketHTML = '';

allJackets.forEach(thisJacket => {
    jacketHTML = jacketHTML + `<section class="product-list">
    <div class="products">
    <img
      src="${thisJacket.img}"
      alt="${thisJacket.productName}"
    />
    <p class="product-name">${thisJacket.productName}</p>
    <p>$${thisJacket.price}</p>
    <a href="jacket-details.html?jacketId=${thisJacket.id}" class="shopnow-button">Shop Now</a>
  </div>
  </section>`
});
htmlElement.innerHTML = jacketHTML;
