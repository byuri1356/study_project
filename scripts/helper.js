//
//make help function
//

//main.html open Help
function openMainHelp() {
  backdropElements.style.display = "block";
  carouselElements.style.display = "block";
}

//main.html close Help 
function closeMainHelp() {
  backdropElements.style.display = "none";
  carouselElements.style.display = "none";
}

//
//addEventListener load-page function
//

//help button click -> open help
if(mainHelpElements != null){
    mainHelpElements.addEventListener('click', openMainHelp);
}

// close or backdrop click -> close help
if(backdropElements != null && closeButtonElements != null){
    backdropElements.addEventListener('click', closeMainHelp);
    for(closeButtonElement of closeButtonElements){
        closeButtonElement.addEventListener('click', closeMainHelp);
    }
}

//
//init page
//

if(needHelp == 1){
  console.log(needHelp);
  openMainHelp();
}