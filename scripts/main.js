const homeElement = document.querySelector(".header-grid-imgItem");
const caterogyElemnts = document.querySelectorAll(".menu-category-items");
const prevButtonElements = document.querySelector("#prev-to-take");
const nextButtonElements = document.querySelector("#next-to-detail");

for (caterogyElemnt of caterogyElemnts) {
  caterogyElemnt.addEventListener("click", selectCategory);
}

function prevTakePage(){
  menuInnerHTML = document.querySelector('.menu-sub-items');
  shoppingBasketInnerHTML = document.querySelector('.shopping-basket-items');
  console.log(menuInnerHTML);
  console.log(shoppingBasketInnerHTML);
  location.href = './take.html';
}

homeElement.addEventListener("click", homePage);
prevButtonElements.addEventListener("click", prevTakePage);
nextButtonElements.addEventListener("click", prevTakePage);
