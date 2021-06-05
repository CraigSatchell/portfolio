
// show modal dialog box
const showModal = () => {
   const element1 = document.getElementById("overlay");
   element1.classList.add("wrapper-overlay");

   const element2 = document.getElementById("modal");
   element2.classList.remove("hide");
}

// hide modal dialog box
const hideModal = () => {
   const element1 = document.getElementById("overlay");
   element1.classList.remove("wrapper-overlay");

   const element2 = document.getElementById("modal");
   element2.classList.add("hide");
}


