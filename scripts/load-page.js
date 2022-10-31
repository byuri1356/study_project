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
  location.href ='./index.html';
}