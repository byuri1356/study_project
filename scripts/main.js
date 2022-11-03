const homeElement = document.querySelector(".header-grid-imgItem");
const caterogyElemnts = document.querySelectorAll(".menu-category-items");


for (caterogyElemnt of caterogyElemnts) {
  caterogyElemnt.addEventListener("click", selectCategory);
}

homeElement.addEventListener("click", homePage);