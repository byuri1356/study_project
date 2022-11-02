function selectCategory(event) {
  const caterogyElemnts = document.querySelectorAll(".menu-category-items");
  const selectedCategory = event.target;
  const subCategory = selectedCategory.dataset.category;
  const menuContainer = document.querySelector("#menu-sub-container");

  for (let i = 0; i < 4; ++i) {
    if (i == subCategory) {
      caterogyElemnts[i].classList.add("menu-category-selected");
    } else {
      caterogyElemnts[i].classList.remove("menu-category-selected");
    }
  }

  menuContainer.innerHTML = "";

  for (let i = 0; i < menu[subCategory].length; ++i) {
    const newDivItems = document.createElement("div");
    const newImg = document.createElement("img");
    const newDivText = document.createElement("div");
    const newDivPrice = document.createElement("div");
    const newDivPutRemove = document.createElement("div");

    newDivItems.setAttribute("class", "menu-sub-items");
    newImg.setAttribute("class", "menu-sub-img");
    newDivText.setAttribute("class", "menu-sub-text");
    newDivPrice.setAttribute("class", "menu-sub-price");

    newImg.setAttribute("src", menu[subCategory][i].imgSrc);
    newDivText.innerText = menu[subCategory][i].name;
    newDivPrice.innerText = menu[subCategory][i].price + "원";

    if (!menu[subCategory][i].isSelect) {
      newDivItems.classList.add("menu-sub-selected");
      newDivPutRemove.setAttribute("class", "menu-sub-put");
      newDivPutRemove.innerText = "담기";
    } else {
      newDivItems.classList.remove("menu-sub-selected");
      newDivPutRemove.setAttribute("class", "menu-sub-remove");
      newDivPutRemove.innerText = "빼내기";
    }

    newDivItems.appendChild(newImg);
    newDivItems.appendChild(newDivText);
    newDivItems.appendChild(newDivPrice);
    newDivItems.appendChild(newDivPutRemove);
    menuContainer.appendChild(newDivItems);
  }

  const a = document.querySelectorAll('.shopping-basket-item');
  for(b of a ){
    console.dir(b.firstElementChild.textContent);
  }
  

}

function selectMenu(event) {
 const selectedMenuItem = event.target;
 const selectedRow = selectedMenuItem.dataset.row;
 const selectedColumn = selectedMenuItem.dataset.column;
}