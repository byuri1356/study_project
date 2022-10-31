const homeElement = document.querySelector(".home-img");
const takeItemElements = document.querySelectorAll(".take-item-center");

for (takeItemElement of takeItemElements) {
  takeItemElement.addEventListener("click", mainPage);
}

homeElement.addEventListener("click", homePage);