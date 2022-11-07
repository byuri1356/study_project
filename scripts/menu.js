let menuItemElements = document.querySelectorAll(".menu-sub-items");
let cancelButtonElements = document.querySelectorAll(".shopping-basket-x");
let downButtonElements = document.querySelectorAll(
  ".shopping-basket-downButton"
);
let upButtonElements = document.querySelectorAll(".shopping-basket-upButton");
let totalPriceElement = document.querySelector(".shopping-basket-sum h3");
let currentRow;
let currentColumn;
let testquery = document.querySelector('#menu-category-container');

function downAFew(event) {
  const selectedDownButton = event.target;
  const selectedRow = selectedDownButton.dataset.row;
  const selectedColumn = selectedDownButton.dataset.column;
  const downParentElement = selectedDownButton.parentElement;
  console.dir(downParentElement);

  if (menu[selectedRow][selectedColumn].afew <= 1) return;
  else {
    menu[selectedRow][selectedColumn].afew -= 1;
    total_price -= menu[selectedRow][selectedColumn].price;
    downParentElement.children[3].innerText =
      menu[selectedRow][selectedColumn].afew;
    downParentElement.children[5].innerText =
      menu[selectedRow][selectedColumn].afew *
      menu[selectedRow][selectedColumn].price + "원";;
    totalPriceElement.innerText = total_price + "원";
  }
}

function upAFew(event) {
  console.dir(testquery.innerHTML);
  const selectedupButton = event.target;
  const selectedRow = selectedupButton.dataset.row;
  const selectedColumn = selectedupButton.dataset.column;
  const upParentElement = selectedupButton.parentElement;

  if (menu[selectedRow][selectedColumn].afew >= 10) return;
  else {
    menu[selectedRow][selectedColumn].afew += 1;
    total_price += menu[selectedRow][selectedColumn].price;
    upParentElement.children[3].innerText =
      menu[selectedRow][selectedColumn].afew;
    upParentElement.children[5].innerText =
      menu[selectedRow][selectedColumn].afew *
      menu[selectedRow][selectedColumn].price + "원";
    totalPriceElement.innerText = total_price + "원";
  }
}

function cancelMenu(event) {
  const selectedMenuItem = event.target;
  const selectedRow = selectedMenuItem.dataset.row;
  const selectedColumn = selectedMenuItem.dataset.column;

  total_price -=
    menu[selectedRow][selectedColumn].afew *
    menu[selectedRow][selectedColumn].price;
  totalPriceElement.innerText = total_price + "원";
  menu[selectedRow][selectedColumn].afew = 1;
  menu[selectedRow][selectedColumn].isSelect = 0;
  menuItemElements = document.querySelectorAll(".menu-sub-items");
  if (currentRow == selectedRow) {
    menuItemElements[selectedColumn].classList.remove("menu-sub-selected");
  }

  selectedMenuItem.parentElement.remove();
  
}

function selectCategory(event) {
  const caterogyElemnts = document.querySelectorAll(".menu-category-items");
  const selectedCategory = event.target;
  const subCategory = selectedCategory.dataset.category;
  const menuContainer = document.querySelector("#menu-sub-container");

  for (let i = 0; i < 4; ++i) {
    if (i == subCategory) {
      caterogyElemnts[i].classList.add("menu-category-selected");
      currentRow = i;
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

    newDivItems.setAttribute("class", "menu-sub-items");
    newDivItems.setAttribute("data-row", subCategory);
    newDivItems.setAttribute("data-column", i);
    newImg.setAttribute("class", "menu-sub-img");
    newImg.setAttribute("data-row", subCategory);
    newImg.setAttribute("data-column", i);
    newDivText.setAttribute("class", "menu-sub-text");
    newDivText.setAttribute("data-row", subCategory);
    newDivText.setAttribute("data-column", i);
    newDivPrice.setAttribute("class", "menu-sub-price");
    newDivPrice.setAttribute("data-row", subCategory);
    newDivPrice.setAttribute("data-column", i);

    newImg.setAttribute("src", menu[subCategory][i].imgSrc);
    newDivText.innerText = menu[subCategory][i].name;
    newDivPrice.innerText = menu[subCategory][i].price + "원";

    if (menu[subCategory][i].isSelect) {
      newDivItems.classList.add("menu-sub-selected");
    } else {
      newDivItems.classList.remove("menu-sub-selected");
    }

    newDivItems.appendChild(newImg);
    newDivItems.appendChild(newDivText);
    newDivItems.appendChild(newDivPrice);
    menuContainer.appendChild(newDivItems);
  }

  menuItemElements = document.querySelectorAll(".menu-sub-items");
  for (menuItemElement of menuItemElements) {
    menuItemElement.addEventListener("click", selectMenu);
  }
}

function selectMenu(event) {
  const selectedMenuItem = event.target;
  const selectedRow = selectedMenuItem.dataset.row;
  const selectedColumn = selectedMenuItem.dataset.column;
  let targetItem = event.target;

  if (!selectedMenuItem.classList.contains("menu-sub-items")) {
    targetItem = selectedMenuItem.parentElement;
  }

  if (targetItem.classList.contains("menu-sub-selected")) {
    total_price -=
      menu[selectedRow][selectedColumn].afew *
      menu[selectedRow][selectedColumn].price;
    totalPriceElement.innerText = total_price + "원";

    menu[selectedRow][selectedColumn].isSelect = 0;
    menu[selectedRow][selectedColumn].afew = 1;
    targetItem.classList.remove("menu-sub-selected");

    const shoppingBasketItemElements = document.querySelectorAll(
      ".shopping-basket-items"
    );
    for (shoppingBasketItemElement of shoppingBasketItemElements) {
      if (
        shoppingBasketItemElement.dataset.row == selectedRow &&
        shoppingBasketItemElement.dataset.column == selectedColumn
      ) {
        shoppingBasketItemElement.remove();
        // 여기에 total_sum 추가
        break;
      }
    }
  } else {
    total_price +=
      menu[selectedRow][selectedColumn].afew *
      menu[selectedRow][selectedColumn].price;
    totalPriceElement.innerText = total_price + "원";

    menu[selectedRow][selectedColumn].isSelect = 1;
    targetItem.classList.add("menu-sub-selected");

    const shoppingBasketContainer = document.querySelector(
      ".shopping-basket-item-container"
    );

    const newDivItems = document.createElement("div");
    const newButtonX = document.createElement("button");
    const newSpanText = document.createElement("span");
    const newButtonDown = document.createElement("button");
    const newSpanNumber = document.createElement("span");
    const newButtonUp = document.createElement("button");
    const newSpanTotal = document.createElement("span");

    newDivItems.setAttribute("class", "shopping-basket-items");
    newDivItems.setAttribute("data-row", selectedRow);
    newDivItems.setAttribute("data-column", selectedColumn);
    newButtonX.setAttribute("class", "shopping-basket-x");
    newButtonX.setAttribute("data-row", selectedRow);
    newButtonX.setAttribute("data-column", selectedColumn);
    newSpanText.setAttribute("class", "shopping-basket-text");
    newButtonDown.setAttribute("class", "shopping-basket-downButton");
    newButtonDown.setAttribute("data-row", selectedRow);
    newButtonDown.setAttribute("data-column", selectedColumn);
    newSpanNumber.setAttribute("class", "shopping-basket-number");
    newButtonUp.setAttribute("class", "shopping-basket-upButton");
    newButtonUp.setAttribute("data-row", selectedRow);
    newButtonUp.setAttribute("data-column", selectedColumn);
    newSpanTotal.setAttribute("class", "shopping-basket-total");

    newButtonX.innerText = "X";
    newSpanText.innerText = menu[selectedRow][selectedColumn].name;
    newButtonDown.innerText = "<";
    newSpanNumber.innerText = menu[selectedRow][selectedColumn].afew;
    newButtonUp.innerText = ">";
    newSpanTotal.innerText =
      menu[selectedRow][selectedColumn].afew *
        menu[selectedRow][selectedColumn].price +
      "원";

    newDivItems.appendChild(newButtonX);
    newDivItems.appendChild(newSpanText);
    newDivItems.appendChild(newButtonDown);
    newDivItems.appendChild(newSpanNumber);
    newDivItems.appendChild(newButtonUp);
    newDivItems.appendChild(newSpanTotal);

    shoppingBasketContainer.appendChild(newDivItems);
  }

  const sumElement = document.querySelector(".shopping-basket-sum h3");
  sumElement.innerText = total_price + "원";

  cancelButtonElements = document.querySelectorAll(".shopping-basket-x");
  for (cancelButtonElement of cancelButtonElements) {
    cancelButtonElement.addEventListener("click", cancelMenu);
  }

  downButtonElements = document.querySelectorAll(".shopping-basket-downButton");
  for (downButtonElement of downButtonElements) {
    downButtonElement.addEventListener("click", downAFew);
  }

  upButtonElements = document.querySelectorAll(".shopping-basket-upButton");
  for (upButtonElement of upButtonElements) {
    upButtonElement.addEventListener("click", upAFew);
  }
}
