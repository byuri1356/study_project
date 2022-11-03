function helpPage() {
  location.href = "./help.html";
}

function takePage(event) {
  const selectedHelp = event.target;
  needHelp = selectedHelp.dataset.help;
  location.href = './take.html';
}

function mainPage() {
    const selectedTake = event.target;
    takeInOUT = selectedTake.dataset.take;
    location.href = './main.html';
}

function homePage(){
  needHelp = -1;
  takeInOUT = -1;
  for(let i=0; i<4; ++i){
    for(let j=0; j<menu[i].length; ++j){
      menu[i][j].isSelect=0;
      menu[i][j].afew=0;
    }
  }
  location.href ='./index.html';

}