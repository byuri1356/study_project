let menuItemElements = document.querySelectorAll(".menu-sub-items");
let cancelButtonElements = document.querySelectorAll('.shopping-basket-x');
let downButtonElements = document.querySelectorAll('.shopping-basket-downButton');
let upButtonElements = document.querySelectorAll('.shopping-basket-upButton');
let currentRow;
let currentColumn;

function downAFew(){

}

function upAFew(){

}

function cancelMenu(event){
  const selectedMenuItem = event.target;
  const selectedRow = selectedMenuItem.dataset.row;
  const selectedColumn = selectedMenuItem.dataset.column;

  menu[selectedRow][selectedColumn].afew =0;
  menu[selectedRow][selectedColumn].isSelect =0;
  menuItemElements = document.querySelectorAll(".menu-sub-items");
  if(currentRow == selectedRow) {
    menuItemElements[selectedColumn].classList.remove('menu-sub-selected')
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
  for(menuItemElement of menuItemElements) {
    menuItemElement.addEventListener('click', selectMenu);
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
    menu[selectedRow][selectedColumn].isSelect = 0;
    menu[selectedRow][selectedColumn].afew =0;
    targetItem.classList.remove("menu-sub-selected");

    const shoppingBasketItemElements = document.querySelectorAll('.shopping-basket-item');
    for( shoppingBasketItemElement of shoppingBasketItemElements){
      if(shoppingBasketItemElement.dataset.row == selectedRow && shoppingBasketItemElement.dataset.column == selectedColumn){
        shoppingBasketItemElement.remove();
        // 여기에 total_sum 추가
        break;
      }
    }

  } else {
    menu[selectedRow][selectedColumn].isSelect = 1;
    targetItem.classList.add("menu-sub-selected");

    const shoppingBasketContainer = document.querySelector('.shopping-basket-item-container');

    const newDivItems = document.createElement('div');
    const newButtonX = document.createElement('button');
    const newSpanText = document.createElement('span');
    const newButtonDown = document.createElement('button');
    const newSpanNumber = document.createElement('span');
    const newButtonUp = document.createElement('button');
    const newSpanTotal = document.createElement('span');

    newDivItems.setAttribute('class', 'shopping-basket-item');
    newDivItems.setAttribute("data-row", selectedRow);
    newDivItems.setAttribute("data-column", selectedColumn);
    newButtonX.setAttribute('class', 'shopping-basket-x');
    newButtonX.setAttribute("data-row", selectedRow);
    newButtonX.setAttribute("data-column", selectedColumn);
    newSpanText.setAttribute('class', 'shopping-basket-text');
    newButtonDown.setAttribute('class', 'shopping-basket-upButton');
    newSpanNumber.setAttribute('class', 'shopping-basket-number');
    newButtonUp.setAttribute('class', 'shopping-basket-downButton');
    newSpanTotal.setAttribute('class', 'shopping-basket-total');

    newButtonX.innerText = "X";
    newSpanText.innerText = menu[selectedRow][selectedColumn].name;
    newButtonDown.innerText = "<";
    newSpanNumber.innerText = menu[selectedRow][selectedColumn].afew; 
    newButtonUp.innerText = ">";
    newSpanTotal.innerText = menu[selectedRow][selectedColumn].afew *  menu[selectedRow][selectedColumn].price +"원";

    newDivItems.appendChild(newButtonX);
    newDivItems.appendChild(newSpanText);
    newDivItems.appendChild(newButtonDown);
    newDivItems.appendChild(newSpanNumber);
    newDivItems.appendChild(newButtonUp);
    newDivItems.appendChild(newSpanTotal);

    shoppingBasketContainer.appendChild(newDivItems);
  }

  const sumElement = document.querySelector('.shopping-basket-sum h3');
  sumElement.innerText = total_price +"원";

  cancelButtonElements = document.querySelectorAll('.shopping-basket-x');
  for(cancelButtonElement of cancelButtonElements){
    cancelButtonElement.addEventListener('click', cancelMenu);
  }

  downButtonElements = document.querySelectorAll('.shopping-basket-downButton');
  for(downButtonElement of downButtonElements){
    downButtonElement.addEventListener('click', downAFew);
  }

  upButtonElements = document.querySelectorAll('.shopping-basket-downButton');
  for(upButtonElement of upButtonElements){
    upButtonElement.addEventListener('click', upAFew);
  }

}