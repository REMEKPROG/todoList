const taskInputs = [...document.querySelectorAll(".text-input-task")];
const addTaskButtons = [...document.querySelectorAll(".button-add-task")];
const removeLastTaskButtons = [...document.querySelectorAll(".button-remove-task")];

const mondayTasks = [];
const tuesdayTasks = [];
const wednesdayTasks = [];
const thursdayTasks = [];
const fridayTasks = [];
const saturdayTasks = [];
const sundayTasks = [];
const mondayList = document.getElementById("monday-list");
const tuesdayList = document.getElementById("tuesday-list");
const wednesdayList = document.getElementById("wednesday-list");
const thursdayList = document.getElementById("thursday-list");
const fridayList = document.getElementById("friday-list");
const saturdayList = document.getElementById("saturday-list");
const sundayList = document.getElementById("sunday-list");

const clearLists =  function(idList) { //cleaning function, argument is id of list
    const ulList = document.getElementById(idList);
    ulList.innerHTML = "";
}

const errorWhileRemovingElements = (array) => { //alert when list is empty
    if (array.length === 0) {
        return alert("Nie możesz usunąć więcej zadań, ponieważ lista jest pusta");
    }
}

const removeLastItem = (e) => { //function to delete last item from list
    if (e.target.parentNode.classList.contains("monday-input-container")) { //checking which button was clicked
        // console.log("monday");
        errorWhileRemovingElements(mondayTasks); //get alert
        mondayTasks.pop();
        clearLists("monday-list");
        localStorage.clear();
        mondayTasks.forEach((element, index) => {
            const listLiElement = document.createElement("li");
            localStorage.setItem(`M${index + 1}`, element);
            mondayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`M${index + 1}`);
        })
    } else if(e.target.parentNode.classList.contains("tuesday-input-container")) { //checking which button was clicked
        // console.log("tuesday");
        errorWhileRemovingElements(tuesdayTasks); //get alert
        tuesdayTasks.pop();
        clearLists("tuesday-list");
        localStorage.clear();
        tuesdayTasks.forEach((element, index) => {
            const listLiElement = document.createElement("li");
            localStorage.setItem(`${index + 1}`, element);
            tuesdayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`${index + 1}`);
        })
    } else if (e.target.parentNode.classList.contains("wednesday-input-container")) { //checking which button was clicked
        // console.log("wednesday");
        errorWhileRemovingElements(wednesdayTasks); //get alert
        wednesdayTasks.pop();
        clearLists("wednesday-list");
        localStorage.clear();
        wednesdayTasks.forEach((element, index) => {
            const listLiElement = document.createElement("li");
            localStorage.setItem(`${index + 1}`, element);
            wednesdayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`${index + 1}`);
        })
    } else if (e.target.parentNode.classList.contains("thursday-input-container")) { //checking which button was clicked
        // console.log("thursday");
        errorWhileRemovingElements(thursdayTasks); //get alert
        thursdayTasks.pop();
        clearLists("thursday-list");
        localStorage.clear();
        thursdayTasks.forEach((element, index) => {
            const listLiElement = document.createElement("li");
            localStorage.setItem(`${index + 1}`, element);
            thursdayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`${index + 1}`);
        })
    } else if (e.target.parentNode.classList.contains("friday-input-container")) { //checking which button was clicked
        // console.log("friday");
        errorWhileRemovingElements(fridayTasks); //get alert
        fridayTasks.pop();
        clearLists("friday-list");
        localStorage.clear();
        fridayTasks.forEach((element, index) => {
            const listLiElement = document.createElement("li");
            localStorage.setItem(`${index + 1}`, element);
            fridayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`${index + 1}`);
        })
    } else if (e.target.parentNode.classList.contains("saturday-input-container")) { //checking which button was clicked
        // console.log("saturday");
        errorWhileRemovingElements(saturdayTasks); //get alert
        saturdayTasks.pop();
        clearLists("saturday-list");
        localStorage.clear();
        saturdayTasks.forEach((element, index) => {
            const listLiElement = document.createElement("li");
            localStorage.setItem(`${index + 1}`, element);
            saturdayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`${index + 1}`);
        })
    } else if (e.target.parentNode.classList.contains("sunday-input-container")) { //checking which button was clicked
        // console.log("sunday");
        errorWhileRemovingElements(sundayTasks);
        sundayTasks.pop();
        clearLists("sunday-list");
        localStorage.clear();
        sundayTasks.forEach((element, index) => {
            const listLiElement = document.createElement("li");
            localStorage.setItem(`${index + 1}`, element);
            sundayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`${index + 1}`);
        })
    }
}



const mondayTaskManager = (e) => { //managment monday task - adding and display tasks
    taskInputs.forEach((input) => { 
        if (input.classList.contains("monday-task-input")) { //check if input is for monday input
            if (!(input.value === "")) { //check input value - if not empty, add to array
                // console.log(input.value);
                clearLists("monday-list"); //cleaner function
                const inputMondayValue = input.value;
                mondayTasks.push(inputMondayValue);
                // console.log(inputMondayValue);
            } else {
                alert(input.classList + " Wypełnij dobrze to pole")
                return;
            }
            const addTaskToMondayList = (e) => { //add element to Array list and deploy informations
                localStorage.clear();
                mondayTasks.forEach((element, index) => {
                    const listLiElement = document.createElement("li");
                    localStorage.setItem(`M${index + 1}`, element);
                    mondayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`M${index + 1}`);
                })
                // console.log(localStorage.length)
            }
            input.value = "";
            return addTaskToMondayList();
        }
    })
}

const tuesdayTaskManager = (e) => {
    console.log("działa1")
    taskInputs.forEach((input) => { 
        if (input.classList.contains("tuesday-task-input")) { //check if input is for monday input
            if (!(input.value === "")) { //check input value - if not empty, add to array
                // console.log(input.value);
                clearLists("tuesday-list"); //cleaner function
                const inputTuesdayValue = input.value;
                tuesdayTasks.push(inputTuesdayValue);
                // console.log(inputMondayValue);
            } else {
                alert(input.classList + " Wypełnij dobrze to pole")
                return;
            }
            const addTaskToThursdayList = (e) => { //add element to Array list and deploy informations
                localStorage.clear();
                tuesdayTasks.forEach((element, index) => {
                    const listLiElement = document.createElement("li");
                    localStorage.setItem(`${index + 1}`, element);
                    tuesdayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`${index + 1}`);
                })
                // console.log(localStorage.length)
            }
            input.value = "";
            return addTaskToThursdayList();
        }
    })
}

const wednesdayTaskManager = (e) => {
    console.log("działa2")
    taskInputs.forEach((input) => { 
        if (input.classList.contains("wednesday-task-input")) { //check if input is for monday input
            if (!(input.value === "")) { //check input value - if not empty, add to array
                // console.log(input.value);
                clearLists("wednesday-list"); //cleaner function
                const inputWednesdayValue = input.value;
                wednesdayTasks.push(inputWednesdayValue);
                // console.log(inputMondayValue);
            } else {
                alert(input.classList + " Wypełnij dobrze to pole")
                return;
            }
            const addTaskToWednesdayList = (e) => { //add element to Array list and deploy informations
                localStorage.clear();
                wednesdayTasks.forEach((element, index) => {
                    const listLiElement = document.createElement("li");
                    localStorage.setItem(`${index + 1}`, element);
                    wednesdayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`${index + 1}`);
                })
                // console.log(localStorage.length)
            }
            input.value = "";
            return addTaskToWednesdayList();
        }
    })
}

const thursdayTaskManager = () => {
    console.log("to jest czwartek")
    taskInputs.forEach((input) => { 
        if (input.classList.contains("thursday-task-input")) { //check if input is for monday input
            if (!(input.value === "")) { //check input value - if not empty, add to array
                // console.log(input.value);
                clearLists("thursday-list"); //cleaner function
                const inputThursdayValue = input.value;
                thursdayTasks.push(inputThursdayValue);
                // console.log(inputMondayValue);
            } else {
                alert(input.classList + " Wypełnij dobrze to pole")
                return;
            }
            const addTaskToThursdayList = (e) => { //add element to Array list and deploy informations
                localStorage.clear();
                thursdayTasks.forEach((element, index) => {
                    const listLiElement = document.createElement("li");
                    localStorage.setItem(`${index + 1}`, element);
                    thursdayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`${index + 1}`);
                })
                // console.log(localStorage.length)
            }
            input.value = "";
            return addTaskToThursdayList();
        }
    })
}

const fridayTaskManager = () => {
    console.log("działa4")
    taskInputs.forEach((input) => { 
        if (input.classList.contains("friday-task-input")) { //check if input is for monday input
            if (!(input.value === "")) { //check input value - if not empty, add to array
                // console.log(input.value);
                clearLists("friday-list"); //cleaner function
                const inputFridayValue = input.value;
                fridayTasks.push(inputFridayValue);
                // console.log(inputMondayValue);
            } else {
                alert(input.classList + " Wypełnij dobrze to pole")
                return;
            }
            const addTaskToFridayList = (e) => { //add element to Array list and deploy informations
                localStorage.clear();
                fridayTasks.forEach((element, index) => {
                    const listLiElement = document.createElement("li");
                    localStorage.setItem(`${index + 1}`, element);
                    fridayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`${index + 1}`);
                })
                // console.log(localStorage.length)
            }
            input.value = "";
            return addTaskToFridayList();
        }
    })

}



const saturdayTaskManager = () => {
    console.log("działa5")
    taskInputs.forEach((input) => { 
        if (input.classList.contains("saturday-task-input")) { //check if input is for monday input
            if (!(input.value === "")) { //check input value - if not empty, add to array
                // console.log(input.value);
                clearLists("saturday-list"); //cleaner function
                const inputSaturdayValue = input.value;
                saturdayTasks.push(inputSaturdayValue);
                // console.log(inputMondayValue);
            } else {
                alert(input.classList + " Wypełnij dobrze to pole")
                return;
            }
            const addTaskToSaturdayList = (e) => { //add element to Array list and deploy informations
                localStorage.clear();
                saturdayTasks.forEach((element, index) => {
                    const listLiElement = document.createElement("li");
                    localStorage.setItem(`${index + 1}`, element);
                    saturdayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`${index + 1}`);
                })
                // console.log(localStorage.length)
            }
            input.value = "";
            return addTaskToSaturdayList();
        }
    })
}

const sundayTaskManager = () => {
    // console.log("działa6");
    taskInputs.forEach((input) => { 
        if (input.classList.contains("sunday-task-input")) { //check if input is for monday input
            if (!(input.value === "")) { //check input value - if not empty, add to array
                // console.log(input.value);
                clearLists("sunday-list"); //cleaner function
                const inputSundayValue = input.value;
                sundayTasks.push(inputSundayValue);
                // console.log(inputMondayValue);
            } else {
                alert(input.classList + " Wypełnij dobrze to pole")
                return;
            }
            const addTaskToSundayList = (e) => { //add element to Array list and deploy informations
                localStorage.clear();
                sundayTasks.forEach((element, index) => {
                    const listLiElement = document.createElement("li");
                    localStorage.setItem(`${index + 1}`, element);
                    sundayList.appendChild(listLiElement).innerHTML = `${index + 1}. ` + localStorage.getItem(`${index + 1}`);
                })
                // console.log(localStorage.length)
            }
            input.value = "";
            return addTaskToSundayList();
        }
    })
}


addTaskButtons.forEach((button) => { //giving eventListener for specific buttons
    if (button.classList.contains("monday-task-adder")) {
        button.addEventListener("click", mondayTaskManager);
    } else if (button.classList.contains("tuesday-task-adder")) {
        button.addEventListener("click", tuesdayTaskManager);
    } else if (button.classList.contains("wednesday-task-adder")) {
        button.addEventListener("click", wednesdayTaskManager);
    } else if(button.classList.contains("thursday-task-adder")) {
        button.addEventListener("click", thursdayTaskManager);
    } else if (button.classList.contains("friday-task-adder")) {
        button.addEventListener("click", fridayTaskManager);
    } else if(button.classList.contains("saturday-task-adder")) {
        button.addEventListener("click", saturdayTaskManager);
    } else {
        button.addEventListener("click", sundayTaskManager);
    }
})

removeLastTaskButtons.forEach((button) => {
    button.addEventListener("click", removeLastItem);
})

//ZRÓB DZIAŁANIE Z LOCALSTORAGE --- NA ZAŁADOWANIE STRONY MUSZĄ SIĘ UZUPEŁNIĆ LISTY



