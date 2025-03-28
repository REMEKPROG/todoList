const showDaysBtn = document.querySelector(".choice-btn")
const daysContainer = document.querySelector(".days-container")
let active = true;


const showDaysCards = (e) => { //function to animate loadings of cards
    if (active) {
        active = !active;
        console.log(active);
    returningBtn.style.transform = "scale(0)"
    showDaysBtn.style.display = "block";
    function replaceButtonsAfter() { //replacing buttons 
        returningBtn.style.display = "none";
        showDaysBtn.style.transform = "scale(1)";
    }
    setTimeout(replaceButtonsAfter, 550);
        dayCards.forEach((element) => {
            if (element.dataset.active === "true") {
                element.style.transform = "";
                element.dataset.active = "";
            }
            element.classList.add("non-clicked");
            element.style.display = "block";
        })
        showDaysBtn.style.top = 0 //gives animation for main button
        daysContainer.style.display = "flex"; 
    let i = 0;
    function showCards() { //function to animate cards
        if (i === (dayCards.length)) {
            clearInterval(idDaysInterval);
        }
        for (i = i; i < dayCards.length; i++) { //loop for give animations
            // console.log(i)
            dayCards[i].style.opacity = 1;
            dayCards[i].style.pointerEvents = "all";
            return i++;
        }
    }
    const idDaysInterval = setInterval(showCards, 300)
    }
}



returningBtn.addEventListener("click", showDaysCards);
showDaysBtn.addEventListener("click",showDaysCards);