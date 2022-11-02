const homeElement = document.querySelector(".header-grid-imgItem");
const takeItemElements = document.querySelectorAll(".take-item-center");

for (takeItemElement of takeItemElements) {
  takeItemElement.addEventListener("click", mainPage);
}

homeElement.addEventListener("click", homePage);