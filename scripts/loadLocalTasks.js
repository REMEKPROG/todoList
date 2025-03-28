const loadAllTasks = () => {
    // localStorage.clear()
    const count = (s) => s ? s.trim().split(/,/).length : 0; //function to split string elements to one words
    const reloadMondayTasks = (e) => { //add element to Array list and deploy informations
        const mondayTasksStorage = localStorage.getItem("taskListMonday");
        for (i = 0; i < count(mondayTasksStorage); i++) {
            const listLiElement = document.createElement("li");
            mondayTasks.push(localStorage.getItem(`M${i + 1}`))
            mondayList.appendChild(listLiElement).innerHTML = `${i + 1}. ` + localStorage.getItem(`M${i + 1}`);
        }
    }
    const reloadTuesdayTasks = (e) => { //add element to array list and deploy
        // localStorage.clear();
        // console.log(localStorage.getItem("taskListTuesday"));
        const tuesdayTasksStorage = localStorage.getItem("taskListTuesday");
        // console.log(count(tuesdayTasksStorage))
        for (i = 0; i < count(tuesdayTasksStorage); i++) {
            const listLiElement = document.createElement("li");
            tuesdayTasks.push(localStorage.getItem(`TU${i + 1}`))
            tuesdayList.appendChild(listLiElement).innerHTML = `${i + 1}. ` + localStorage.getItem(`TU${i + 1}`);
        }
    }
    const reloadWednesdayTasks = (e) => { //add element to array list and deploy
        // localStorage.clear();
        // console.log(localStorage.getItem("taskListWednesday"));
        const wednesdayTasksStorage = localStorage.getItem("taskListWednesday");
        // console.log(count(wednesdayTasksStorage))
        for (i = 0; i < count(wednesdayTasksStorage); i++) {
            const listLiElement = document.createElement("li");
            wednesdayTasks.push(localStorage.getItem(`W${i + 1}`))
            wednesdayList.appendChild(listLiElement).innerHTML = `${i + 1}. ` + localStorage.getItem(`W${i + 1}`);
        }
    }
    const reloadThursdayTasks = (e) => { //add element to array list and deploy
        console.log("working")
        // localStorage.clear();
        // console.log(localStorage.getItem("taskListThursday"));
        const thursdayTasksStorage = localStorage.getItem("taskListThursday");
        // console.log(count(thursdayTasksStorage))
        for (i = 0; i < count(thursdayTasksStorage); i++) {
            const listLiElement = document.createElement("li");
            thursdayTasks.push(localStorage.getItem(`THU${i + 1}`))
            thursdayList.appendChild(listLiElement).innerHTML = `${i + 1}. ` + localStorage.getItem(`THU${i + 1}`);
        }
    }
    const reloadFridayTasks = (e) => { //add element to array list and deploy
        // localStorage.clear();
        // console.log(localStorage.getItem("taskListFriday"));
        const fridayTasksStorage = localStorage.getItem("taskListFriday");
        // console.log(count(fridayTasksStorage))
        for (i = 0; i < count(fridayTasksStorage); i++) {
            const listLiElement = document.createElement("li");
            fridayTasks.push(localStorage.getItem(`F${i + 1}`))
            fridayList.appendChild(listLiElement).innerHTML = `${i + 1}. ` + localStorage.getItem(`F${i + 1}`);
        }
    }
    const reloadSaturdayTasks = (e) => { //add element to array list and deploy
        // localStorage.clear();
        // console.log(localStorage.getItem("taskListSaturday"));
        const saturdayTasksStorage = localStorage.getItem("taskListSaturday");
        // console.log(count(saturdayTasksStorage))
        for (i = 0; i < count(saturdayTasksStorage); i++) {
            const listLiElement = document.createElement("li");
            saturdayTasks.push(localStorage.getItem(`SA${i + 1}`))
            saturdayList.appendChild(listLiElement).innerHTML = `${i + 1}. ` + localStorage.getItem(`SA${i + 1}`);
        }
    }
    const reloadSundayTasks = (e) => { //add element to array list and deploy
        // localStorage.clear();
        // console.log(localStorage.getItem("taskListSunday"));
        const sundayTasksStorage = localStorage.getItem("taskListSunday");
        // console.log(count(sundayTasksStorage))
        for (i = 0; i < count(sundayTasksStorage); i++) {
            const listLiElement = document.createElement("li");
            sundayTasks.push(localStorage.getItem(`SUN${i + 1}`))
            sundayList.appendChild(listLiElement).innerHTML = `${i + 1}. ` + localStorage.getItem(`SUN${i + 1}`);
        }
    }
    
        const safeExecute = (fn, name) => { //check errors(this function is to execute all functions when errors in other functions exists)
            try {
                fn();
            } catch (error) {
                console.error(`Błąd w funkcji ${name}:`, error);
            }
        };
    
        safeExecute(reloadMondayTasks, "reloadMondayTasks");
        safeExecute(reloadTuesdayTasks, "reloadTuesdayTasks");
        safeExecute(reloadWednesdayTasks, "reloadWednesdayTasks");
        safeExecute(reloadThursdayTasks, "reloadThursdayTasks");
        safeExecute(reloadFridayTasks, "reloadFridayTasks");
        safeExecute(reloadSaturdayTasks, "reloadSaturdayTasks");
        safeExecute(reloadSundayTasks, "reloadSundayTasks");
    
}




window.addEventListener("load", loadAllTasks);