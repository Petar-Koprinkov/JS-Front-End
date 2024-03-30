function addItem() {
    const listElement = document.getElementById("items");
    const inputElement = document.getElementById("newItemText");
    
    const newElement = document.createElement("li");
    newElement.textContent = inputElement.value;
    
    listElement.appendChild(newElement);
    
    const deleteElement = document.createElement("a");
    deleteElement.href = "#";
    deleteElement.textContent = "[Delete]"

    newElement.appendChild(deleteElement)


    deleteElement.addEventListener("click", () => {
        newElement.remove();
    })

    inputElement.value = ""
}