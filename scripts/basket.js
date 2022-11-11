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

    //td -> tr
    newBasketTrClass.appendChild(newItemImg);
    newBasketTrClass.appendChild(newItemName);
    newBasketTrClass.appendChild(newItemCount);
    newBasketTrClass.appendChild(newItemPrice);
  }
}

fillBasket();

totalCost.textContent = total_price;

if (takeInOUT == 0) {
  orderMethod.textContent = "포장";
} else {
  orderMethod.textContent = "매장식사";
}
