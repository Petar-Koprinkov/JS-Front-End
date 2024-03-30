function addItem() {
    const listElements = document.getElementById("items");
    const inputElement = document.getElementById("newItemText");

    const newItemElement = document.createElement("li");
    newItemElement.textContent = inputElement.value;

    listElements.appendChild(newItemElement);

    inputElement.value = "";
}