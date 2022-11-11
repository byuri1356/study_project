//
//make load-page function
//

// * -> index.html
function homePage() {
  location.href = "./index.html";
}

//index.html -> help.html
function helpPage() {
  saveVariable();
  location.href = "./help.html";
}

//help.html -> take.html
function takePage(event) {
  const selectedHelp = event.target;
  needHelp = selectedHelp.dataset.help;
  saveVariable();
  location.href = "./take.html";
}

//take.html -> main.html
function mainPage(event) {
  const selectedTake = event.target;
  takeInOUT = selectedTake.dataset.take;
  saveVariable();
  location.href = "./main.html";
}

//main.html -> take.html
function prevTakePage() {
  initPage = true;
  shoppingBasketItemElements = document.querySelectorAll(
    ".shopping-basket-items"
  );
  for(shoppingBasketItemElement of shoppingBasketItemElements){
    menuBasketInfos.push({row: shoppingBasketItemElement.dataset.row, column: shoppingBasketItemElement.dataset.column});
  }
  saveVariable();
  location.href = "./take.html";
}

//main.html -> check.html
function nextCheckPage() {
  initPage = true;
  shoppingBasketItemElements = document.querySelectorAll(
    ".shopping-basket-items"
  );
  for(shoppingBasketItemElement of shoppingBasketItemElements){
    menuBasketInfos.push({row: shoppingBasketItemElement.dataset.row, column: shoppingBasketItemElement.dataset.column});
  }
  saveVariable();
  location.href = "./check.html";
}

//check.html -> main.html     //// 이부분 내용 마지막에 수정필요 
function prevMainPage() {
  shoppingBasketItemElements = document.querySelectorAll(
    ".shopping-basket-items"
  );
  for(shoppingBasketItemElement of shoppingBasketItemElements){
    menuBasketInfos.push({row: shoppingBasketItemElement.dataset.row, column: shoppingBasketItemElement.dataset.column});
  }
  saveVariable();  
  location.href = "./main.html";
}

//check.html -> card.html     //// 이부분 내용 마지막에 수정필요      
function nextCardPage() {   
  shoppingBasketItemElements = document.querySelectorAll(
    ".shopping-basket-items"
  );
  for(shoppingBasketItemElement of shoppingBasketItemElements){
    menuBasketInfos.push({row: shoppingBasketItemElement.dataset.row, column: shoppingBasketItemElement.dataset.column});
  }
  saveVariable();  
  location.href = "./card.html";
}

//
//addEventListener load-page function
//

// * -> index.html
if (homeElement != null) {
  homeElement.addEventListener("click", homePage);
}

//index.html -> help.html
if (bodyElement != null) {
  bodyElement.addEventListener("click", helpPage);
}

//help.html -> take.html
if (helpItemElements != null) {
  for (const helpItemElement of helpItemElements) {
    helpItemElement.addEventListener("click", takePage);
  }
}

//take.html -> main.html
if (takeItemElements != null) {
  for (const takeItemElement of takeItemElements) {
    takeItemElement.addEventListener("click", mainPage);
  }
}

//main.html -> take.html
if (prevToTakeButtonElement != null) {
  prevToTakeButtonElement.addEventListener("click", prevTakePage);
}

//main.html -> check.html
if (nextToDetailButtonElement != null) {
  nextToDetailButtonElement.addEventListener("click", nextCheckPage);
}

//check.html -> main.html
if(prevToMainButtonElement != null){
  prevToMainButtonElement.addEventListener("click", prevMainPage);
}

//check.html -> card.html
if(nextToCardButtonElement != null){
  nextToCardButtonElement.addEventListener("click", nextCardPage);
}