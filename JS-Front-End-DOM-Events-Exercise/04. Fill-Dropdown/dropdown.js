function addItem() {
    const newItemTextElement = document.getElementById("newItemText");
    const newItemValueElement = document.getElementById("newItemValue");
    const listElements = document.getElementById("menu");
    const addButton = document.querySelector("input[type=button][value=Add]");
    
    
    const text = newItemTextElement.value;
    const eValue = newItemValueElement.value;
    
    const optionElement = document.createElement("option");
    optionElement.value = eValue;
    optionElement.textContent = text;
    
    listElements.appendChild(optionElement);
    
    
    newItemTextElement.value = ""
    newItemValueElement.value = ""
    
}