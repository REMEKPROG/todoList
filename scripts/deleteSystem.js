const selectTasks = (e) => { //function to select li elements from lists
    if (e.target.matches("li")) { //checking if clicked element is li
        if (e.target.dataset.remove === "active") { //when li is clicked
            e.target.dataset.remove = "";
            e.target.style.backgroundColor = "" 
        } else{ //when li is not clicked
        e.target.style.backgroundColor = "red";
        e.target.dataset.remove = "active";
        }
    }
}


const removingBtnMonday = document.querySelector(".monday-alltasks-remover");

const removeSelectedMondayTasks = (e) => { //function to delete selected tasks
    const mondayLiElements = [...document.querySelectorAll(".monday-list li")];
    mondayLiElements.forEach((element) => {
        if (element.dataset.remove === "active") {
            const elementText = element.innerHTML;
            if (elementText.includes(element.innerHTML)) { //deleting selected task from array
                const indexofElement = mondayTasks.indexOf(elementText.slice(3,elementText.length))
                mondayTasks.splice(indexofElement, 1);
            }
            localStorage.setItem("taskListMonday", mondayTasks);
            clearLists("monday-list");
            mondayTasks.forEach((element, index) => { //display elements from element
                const listLiElement = document.createElement("li");
                localStorage.setItem(`M${index + 1}`, element);
                mondayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`M${index + 1}`);
            })
        }
    })
}

const removingBtnTuesday = document.querySelector(".tuesday-alltasks-remover");

const removeSelectedTuesdayTasks = (e) => {
    const tuesdayLiElements = [...document.querySelectorAll(".tuesday-list li")];
    tuesdayLiElements.forEach((element) => {
        if (element.dataset.remove === "active") {
            const elementText = element.innerHTML;
            if (elementText.includes(element.innerHTML)) {
                const indexofElement = tuesdayTasks.indexOf(elementText.slice(3,elementText.length))
                tuesdayTasks.splice(indexofElement, 1);
            }
            localStorage.setItem("taskListTuesday", tuesdayTasks);
            clearLists("tuesday-list");
            tuesdayTasks.forEach((element, index) => {
                const listLiElement = document.createElement("li");
                localStorage.setItem(`TU${index + 1}`, element);
                tuesdayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`TU${index + 1}`);
            })
        }
    })
}

const removingBtnWednesday = document.querySelector(".wednesday-alltasks-remover")

const removeSelectedWednesdayTasks = (e) => {
    const wednesdayLiElements = [...document.querySelectorAll(".wednesday-list li")];
    wednesdayLiElements.forEach((element) => {
        if (element.dataset.remove === "active") {
            const elementText = element.innerHTML;
            if (elementText.includes(element.innerHTML)) {
                const indexofElement = wednesdayTasks.indexOf(elementText.slice(3,elementText.length))
                wednesdayTasks.splice(indexofElement, 1);
            }
            localStorage.setItem("taskListWednesday", wednesdayTasks);
            clearLists("wednesday-list");
            wednesdayTasks.forEach((element, index) => {
                const listLiElement = document.createElement("li");
                localStorage.setItem(`W${index + 1}`, element);
                wednesdayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`W${index + 1}`);
            })
        }
    })
}

const removingBtnThursday = document.querySelector(".thursday-alltasks-remover")

const removeSelectedThursdayTasks = (e) => {
    const thursdayLiElements = [...document.querySelectorAll(".thursday-list li")];
    thursdayLiElements.forEach((element) => {
        if (element.dataset.remove === "active") {
            const elementText = element.innerHTML;
            if (elementText.includes(element.innerHTML)) {
                const indexofElement = thursdayTasks.indexOf(elementText.slice(3,elementText.length))
                thursdayTasks.splice(indexofElement, 1);
            }
            localStorage.setItem("taskListThursday", thursdayTasks);
            clearLists("thursday-list");
            thursdayTasks.forEach((element, index) => {
                const listLiElement = document.createElement("li");
                localStorage.setItem(`THU${index + 1}`, element);
                thursdayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`THU${index + 1}`);
            })
        }
    })
}

const removingBtnFriday = document.querySelector(".friday-alltasks-remover")

const removeSelectedFridayTasks = (e) => {
    const fridayLiElements = [...document.querySelectorAll(".friday-list li")];
    fridayLiElements.forEach((element) => {
        if (element.dataset.remove === "active") {
            const elementText = element.innerHTML;
            if (elementText.includes(element.innerHTML)) {
                const indexofElement = fridayTasks.indexOf(elementText.slice(3,elementText.length))
                fridayTasks.splice(indexofElement, 1);
            }
            localStorage.setItem("taskListFriday", fridayTasks);
            clearLists("friday-list");
            fridayTasks.forEach((element, index) => {
                const listLiElement = document.createElement("li");
                localStorage.setItem(`F${index + 1}`, element);
                fridayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`F${index + 1}`);
            })
        }
    })
}

const removingBtnSaturday = document.querySelector(".saturday-alltasks-remover")

const removeSelectedSaturdayTasks = (e) => {
    const saturdayLiElements = [...document.querySelectorAll(".saturday-list li")];
    saturdayLiElements.forEach((element) => {
        if (element.dataset.remove === "active") {
            const elementText = element.innerHTML;
            if (elementText.includes(element.innerHTML)) {
                const indexofElement = saturdayTasks.indexOf(elementText.slice(3,elementText.length))
                saturdayTasks.splice(indexofElement, 1);
            }
            localStorage.setItem("taskListSaturday", saturdayTasks);
            clearLists("saturday-list");
            saturdayTasks.forEach((element, index) => {
                const listLiElement = document.createElement("li");
                localStorage.setItem(`SA${index + 1}`, element);
                saturdayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`SA${index + 1}`);
            })
        }
    })
}

const removingBtnSunday = document.querySelector(".sunday-alltasks-remover")

const removeSelectedSundayTasks = (e) => {
    const sundayLiElements = [...document.querySelectorAll(".sunday-list li")];
    sundayLiElements.forEach((element) => {
        if (element.dataset.remove === "active") {
            const elementText = element.innerHTML;
            if (elementText.includes(element.innerHTML)) {
                const indexofElement = sundayTasks.indexOf(elementText.slice(3,elementText.length))
                sundayTasks.splice(indexofElement, 1);
            }
            localStorage.setItem("taskListSunday", sundayTasks);
            clearLists("sunday-list");
            sundayTasks.forEach((element, index) => {
                const listLiElement = document.createElement("li");
                    localStorage.setItem(`SUN${index + 1}`, element);
                sundayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`SUN${index + 1}`);
            })
        }
    })
}

removingBtnMonday.addEventListener("click", removeSelectedMondayTasks);
removingBtnTuesday.addEventListener("click", removeSelectedTuesdayTasks);
removingBtnWednesday.addEventListener("click", removeSelectedWednesdayTasks);
removingBtnThursday.addEventListener("click", removeSelectedThursdayTasks);
removingBtnFriday.addEventListener("click", removeSelectedFridayTasks);
removingBtnSaturday.addEventListener("click", removeSelectedSaturdayTasks);
removingBtnSunday.addEventListener("click", removeSelectedSundayTasks);
document.addEventListener("click", selectTasks);

