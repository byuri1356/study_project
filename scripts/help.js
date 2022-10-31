const homeElement = document.querySelector(".home-img");
const helpItemElements = document.querySelectorAll(".help-item-center");

for (const helpItemElement of helpItemElements) {
  helpItemElement.addEventListener("click", takePage);
}

homeElement.addEventListener("click", homePage);