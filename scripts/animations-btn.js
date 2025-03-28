const dayCards = [...document.querySelectorAll(".days-style")];
const returningBtn = document.querySelector(".return-btn")

const chooseCard = (e) => { //function to select card
  const selectedCard = e.target;
  // console.log(selectedCard);
  if (selectedCard.classList.contains("days-style")) { //execute on elements whose has class days-style
    showDaysBtn.style.transform = 'scale(0)'
    returningBtn.style.display = "block";
    dayCards.forEach((element) => {
      if (element == selectedCard) { //checking clicked element
        selectedCard.classList.remove("non-clicked");
        selectedCard.style.display = "block";
        selectedCard.style.transform = "scale(1.2)";
        selectedCard.dataset.active = "true";
        active = !active
      } else {
        function delayReplacingButtons() {
          showDaysBtn.style.display = "none";
          returningBtn.style.transform = "scale(1)"
        }
        setTimeout(delayReplacingButtons, 550)
        element.style.display = "none";
      }
    });
  } else {
    return
  }
};

dayCards.forEach((element) => {
  element.addEventListener("click", chooseCard);
});
