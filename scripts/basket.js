function fillBasket() {
  console.log(itemDivElement);

  for (const menuBasketInfo of menuBasketInfos) {
    const menuBasketRow = menuBasketInfo.row;
    const menuBasketColumn = menuBasketInfo.column;
    console.log(menuBasketRow);
    console.log(menuBasketColumn);

    const newItemDivElement = document.createElement("div");
    newItemDivElement.classList.add("item-div");
    console.dir(newItemDivElement);

    //table -> div
    const newBasketTableClass = document.createElement("table");
    itemDivElement.appendChild(newBasketTableClass);
    newBasketTableClass.classList.add("item-table");

    const newBasketTbodyClass = document.createElement("tbody");
    newBasketTableClass.appendChild(newBasketTbodyClass);

    //tr -> table
    const newBasketTrClass = document.createElement("tr");
    newBasketTrClass.classList.add("item-breakdown");
    newBasketTbodyClass.appendChild(newBasketTrClass);

    //append img
    const newItemImg = document.createElement("td");
    const newImg = document.createElement("img");
    const imgSrc = menu[menuBasketRow][menuBasketColumn].imgSrc;

    //사진안나오는 에러 수정
    //newImg.src = "imgSrc";  //원래코드
    newImg.setAttribute("src", imgSrc); // 수정 코드

    newItemImg.appendChild(newImg);
    newItemImg.classList.add("article");

    //append name
    const newItemName = document.createElement("td");
    newItemName.textContent = menu[menuBasketRow][menuBasketColumn].name;
    newItemName.classList.add("article");

    //append count
    const newItemCount = document.createElement("td");
    newItemCount.textContent = menu[menuBasketRow][menuBasketColumn].afew;
    newItemCount.classList.add("article");

    //append price
    const newItemPrice = document.createElement("td");
    newItemPrice.textContent = menu[menuBasketRow][menuBasketColumn].price;
    newItemPrice.classList.add("article");

    const cancelButtontd = document.createElement("td");
    const cancelButton = document.createElement("button");
    cancelButton.textContent = "X";
    cancelButton.classList.add("article-button-x")
    cancelButtontd.classList.add("article-button");
    cancelButtontd.appendChild(cancelButton);

    const cntLeftButtontd = document.createElement("td");
    const cntLeftButton = document.createElement("button");
    cntLeftButton.textContent = "<";
    cntLeftButton.classList.add("article-button-down");
    cntLeftButtontd.classList.add("article-button");
    cntLeftButtontd.appendChild(cntLeftButton);

    const cntRightButtontd = document.createElement("td");
    const cntRightButton = document.createElement("button");
    cntRightButton.textContent = ">";
    cntRightButton.classList.add("article-button-up");
    cntRightButtontd.classList.add("article-button");
    cntRightButtontd.appendChild(cntRightButton);

    cancelButton.setAttribute("data-row", menuBasketRow);
    cancelButton.setAttribute("data-column", menuBasketColumn);
    cntLeftButton.setAttribute("data-row", menuBasketRow);
    cntLeftButton.setAttribute("data-column", menuBasketColumn);
    cntRightButton.setAttribute("data-row", menuBasketRow);
    cntRightButton.setAttribute("data-column", menuBasketColumn);

    //td -> tr
    newBasketTrClass.appendChild(cancelButtontd);
    newBasketTrClass.appendChild(newItemImg);
    newBasketTrClass.appendChild(newItemName);
    newBasketTrClass.appendChild(cntLeftButtontd);
    newBasketTrClass.appendChild(newItemCount);
    newBasketTrClass.appendChild(cntRightButtontd);
    newBasketTrClass.appendChild(newItemPrice);
  }
}

fillBasket();

function upMenuCnt(event) {
  const selectedupButton = event.target;
  const selectedRow = selectedupButton.dataset.row;
  const selectedColumn = selectedupButton.dataset.column;
  const upParentElement = selectedupButton.parentElement.parentElement;
  console.log(selectedRow);
  console.log(selectedColumn);

  if (menu[selectedRow][selectedColumn].afew >= 10) return;
  else {
    menu[selectedRow][selectedColumn].afew += 1;
    total_price += menu[selectedRow][selectedColumn].price;
    console.log(upParentElement);
    upParentElement.children[4].textContent =
      menu[selectedRow][selectedColumn].afew;
    
    upParentElement.children[6].textContent =
      menu[selectedRow][selectedColumn].afew *
        menu[selectedRow][selectedColumn].price +
      "원";
    totalCost.textContent = total_price + "원";
  }
}

function downMenuCnt(event) {
  const selectedDownButton = event.target;
  const selectedRow = selectedDownButton.dataset.row;
  const selectedColumn = selectedDownButton.dataset.column;
  const downParentElement = selectedDownButton.parentElement.parentElement;

  if (menu[selectedRow][selectedColumn].afew <= 1) return;
  else {
    menu[selectedRow][selectedColumn].afew -= 1;
    total_price -= menu[selectedRow][selectedColumn].price;
    downParentElement.children[4].textContent =
      menu[selectedRow][selectedColumn].afew;
    downParentElement.children[6].textContent =
      menu[selectedRow][selectedColumn].afew *
        menu[selectedRow][selectedColumn].price +
      "원";
    totalCost.textContent = total_price + "원";
  }
}

function cancelMenuCnt(event) {
  const selectedMenuItem = event.target;
  const selectedRow = selectedMenuItem.dataset.row;
  const selectedColumn = selectedMenuItem.dataset.column;

  total_price -=
    menu[selectedRow][selectedColumn].afew *
    menu[selectedRow][selectedColumn].price;
  totalCost.textContent = total_price + "원";
  menu[selectedRow][selectedColumn].afew = 1;
  menu[selectedRow][selectedColumn].isSelect = 0;


  for(let i=0; i<menuBasketInfos.length; i++){
    const menuRow = menuBasketInfos[i].row;
    const menuColumn = menuBasketInfos[i].column;
    if(menuRow == selectedRow && menuColumn == selectedColumn){
      menuBasketInfos.splice(i, 1);
    }
  }
  // menuSubItemElements = document.querySelectorAll(".menu-sub-items");
  // if (currentRow == selectedRow) {
  //   menuSubItemElements[selectedColumn].classList.remove("menu-sub-selected");
  // }

  selectedMenuItem.parentElement.parentElement.parentElement.remove();
}

downCntButton = document.querySelectorAll('.article-button-down');
for (downCntBut of downCntButton) {
  downCntBut.addEventListener("click", downMenuCnt);
}

upCntButton = document.querySelectorAll('.article-button-up');
for (upCntBut of upCntButton) {
  upCntBut.addEventListener("click", upMenuCnt);
}

cancelCntButton = document.querySelectorAll('.article-button-x');
for(cancleCntBut of cancelCntButton){
  cancleCntBut.addEventListener("click", cancelMenuCnt);
} 

totalCost.textContent = total_price;

if (takeInOUT == 0) {
  orderMethod.textContent = "포장";
} else {
  orderMethod.textContent = "매장식사";
}
