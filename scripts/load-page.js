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
  saveVariable();
  location.href = "./take.html";
}

//main.html -> detail.html
function nextDetailPage() {
  saveVariable();
  location.href = "./detail.html";
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
if (prevButtonElement != null) {
  prevButtonElement.addEventListener("click", prevTakePage);
}

//main.html -> detail.html
if (nextButtonElement != null) {
  nextButtonElement.addEventListener("click", nextDetailPage);
}
