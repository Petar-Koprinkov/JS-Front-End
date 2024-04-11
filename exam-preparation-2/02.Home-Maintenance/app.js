window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById("add-btn");
    const placeInputElement = document.getElementById("place");
    const actionInputElement = document.getElementById("action");
    const personInputElement = document.getElementById("person");
    const taskListUl = document.getElementById("task-list");
    const doneListUl = document.getElementById("done-list");
    
    addButton.addEventListener("click", () => {
        if(!placeInputElement.value || !actionInputElement.value || !personInputElement.value){
            return;
        }
        
        let place = placeInputElement.value;
        let action = actionInputElement.value;
        let person = personInputElement.value;
        
        const editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.textContent = "Edit";
        
        const doneButton = document.createElement("button");
        doneButton.classList.add("done");
        doneButton.textContent = "Done";
        
        const divButtonContainer = document.createElement("div");
        divButtonContainer.classList.add("buttons");
        divButtonContainer.appendChild(editButton);
        divButtonContainer.appendChild(doneButton);
        
        const pPlacenElement = document.createElement("p");
        pPlacenElement.textContent = `Place:${place}`;
        
        const pActionElement = document.createElement("p");
        pActionElement.textContent = `Action:${action}`;
        
        const pPersonElement = document.createElement("p");
        pPersonElement.textContent = `Person:${person}`;
        
        const articleInputContainer = document.createElement("article");
        articleInputContainer.appendChild(pPlacenElement);
        articleInputContainer.appendChild(pActionElement);
        articleInputContainer.appendChild(pPersonElement);
        
        const liCleanTask = document.createElement("li");
        liCleanTask.classList.add("clean-task");
        liCleanTask.appendChild(articleInputContainer);
        liCleanTask.appendChild(divButtonContainer);
        
        taskListUl.appendChild(liCleanTask);
        
        placeInputElement.value = "";
        actionInputElement.value = "";
        personInputElement.value = "";
        
        editButton.addEventListener("click", () => {
            placeInputElement.value = place;
            actionInputElement.value = action;
            personInputElement.value = person;

            const deleteRecord = taskListUl.querySelector(".clean-task");
            deleteRecord.remove();
        });

        doneButton.addEventListener("click", () => {
            const moveElement = taskListUl.querySelector(".clean-task");
            const removedButtons = moveElement.querySelector(".buttons")
            removedButtons.remove();
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("delete")
            deleteButton.textContent = "Delete";
            moveElement.appendChild(deleteButton);
            doneListUl.appendChild(moveElement);


            deleteButton.addEventListener("click", () => {
                const deletedElemet = doneListUl.querySelector(".clean-task");
                deletedElemet.remove();
            })
        });
    });
}