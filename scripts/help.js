// const homeElement = document.querySelector(".header-grid-imgItem");
// const helpItemElements = document.querySelectorAll(".help-item-center");

for (const helpItemElement of helpItemElements) {
  helpItemElement.addEventListener("click", takePage);
}

homeElement.addEventListener("click", homePage);