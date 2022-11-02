const homeElement = document.querySelector(".header-grid-imgItem");
const caterogyElemnts = document.querySelectorAll(".menu-category-items");
const menuItemElements = document.querySelectorAll(".menu-sub-items");

for (caterogyElemnt of caterogyElemnts) {
  caterogyElemnt.addEventListener("click", selectCategory);
}

for(menuItemElement of menuItemElements) {
    menuItemElement.addEventListener('click', selectMenu);
}

homeElement.addEventListener("click", homePage);
