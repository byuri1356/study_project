function homePage(){
  needHelp = -1;
  takeInOUT = -1;
  for(let i=0; i<4; ++i){
    for(let j=0; j<menu[i].length; ++j){
      menu[i][j].isSelect=0;
      menu[i][j].afew=1;
    }
  }
  location.href ='./index.html';
}

function helpPage() {
  location.href = "./help.html";
}

function takePage(event) {
  const selectedHelp = event.target;
  needHelp = selectedHelp.dataset.help;
  location.href = './take.html';
}

function mainPage(event) {
    const selectedTake = event.target;
    takeInOUT = selectedTake.dataset.take;
    location.href = './main.html';
}

bodyElement.addEventListener('click', helpPage);

for (const helpItemElement of helpItemElements) {
  helpItemElement.addEventListener("click", takePage);
}

homeElement.addEventListener("click", homePage);