import {allJackets, getJacketById} from "./jackets.js";


const jacketId = new URLSearchParams(document.location.search).get("jacketId");
console.log(jacketId);

const thisJacket = getJacketById(jacketId);
    document.title = thisJacket.productName;
    const jacketHtml = `<section class="product-one">
    <div class="product-one-details">
      <h1 class="product-one-header">${thisJacket.productName}</h1>
      <p class="boldtext">$${thisJacket.price}</p>
      <p class="product-text">${thisJacket.productText}</p>
    </div>
    <div class="center">
          <img
            src="${thisJacket.img}"
            alt="${thisJacket.productName}"
            class="product-one-img"
          />
        </div>
        <div class="size-button-margin center-two">
          <button class="size-button">S</button>
          <button class="size-button">M</button>
          <button class="size-button">L</button>
        </div>

        <div class="center-three" id="linkToCart">
          <a href="cart.html?jacketId=${thisJacket.id}" class="addtocart-button">Add to cart</a>
        </div>
      </section>
     
    `
    const thisJacketHtml = document.querySelector("#placeHolderThisJacket");
    thisJacketHtml.innerHTML = jacketHtml;


function isAnyButtonClicked(buttons) {
    let anyButtonIsClicked = false
buttons.forEach(button => {
    if(button.isClicked) {
        anyButtonIsClicked = true
    } 
})
return anyButtonIsClicked;
}

const sizeButtons = document.querySelectorAll(".size-button");

function registerEventListenerOnAddToCartButton() {
const addToCartBtn = document.querySelector(".addtocart-button");
addToCartBtn.addEventListener("click", function onClick(event) {
    const isSizeChosen = isAnyButtonClicked(sizeButtons)
    if(!isSizeChosen) {
        event.preventDefault();
        alert("Please select a size")
    } 

})
}
registerEventListenerOnAddToCartButton();



sizeButtons.forEach(btn => {
    btn.isClicked = false;
    btn.addEventListener("click", function onClick() {
        btn.isClicked = !btn.isClicked;
        if(btn.isClicked) {
        sizeButtons.forEach(entry => {
            if(entry != btn) {
            entry.isClicked = false;
            entry.style.color = "#0A3641";
            entry.style.backgroundColor = "#D0E4E5";
            }
        })
        btn.style.color = "white";
        btn.style.backgroundColor = "#0A3641"
        } else {
            btn.style.color = "#0A3641";
            btn.style.backgroundColor = "#D0E4E5";
        }
        console.log(btn.innerHTML);
       const linkToCartHtml = document.querySelector("#linkToCart");
       const chosenSize = btn.isClicked ? btn.innerHTML : '';
       linkToCartHtml.innerHTML =  `<a href="cart.html?jacketId=${thisJacket.id}&size=${chosenSize}" class="addtocart-button">Add to cart</a>`
       registerEventListenerOnAddToCartButton();
    })
})








