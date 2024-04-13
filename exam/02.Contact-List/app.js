window.addEventListener("load", solve);

function solve() {
    const addButton = document.getElementById("add-btn");
    const nameInputElement = document.getElementById("name");
    const phoneInputElement = document.getElementById("phone");
    const categoryInputElement = document.getElementById("category");
    const checkListUl = document.getElementById("check-list");
    const contactListUl = document.getElementById("contact-list");
    
    addButton.addEventListener("click", () => {
        
        if(!nameInputElement.value || !phoneInputElement.value || !categoryInputElement.value) {
            return;
        }
        
        let name = nameInputElement.value;
        let phone = phoneInputElement.value;
        let category = categoryInputElement.value;
        
        const saveButton = document.createElement("button");
        saveButton.classList.add("save-btn");
        
        
        const editButton = document.createElement("button");
        editButton.classList.add("edit-btn");
        
        const divButtonsContainer = document.createElement("div");
        divButtonsContainer.classList.add("buttons");
        divButtonsContainer.appendChild(editButton);
        divButtonsContainer.appendChild(saveButton);
        
        const pNameElement = document.createElement("p");
        pNameElement.textContent = `name:${name}`;
        
        const pPhoneElement = document.createElement("p");
        pPhoneElement.textContent = `phone:${phone}`;
        
        const pCategoryElement = document.createElement("p");
        pCategoryElement.textContent = `category:${category}`
        
        const articlePContainer = document.createElement("article");
        articlePContainer.appendChild(pNameElement);
        articlePContainer.appendChild(pPhoneElement);
        articlePContainer.appendChild(pCategoryElement);
        
        const liElement = document.createElement("li");
        liElement.appendChild(articlePContainer);
        liElement.appendChild(divButtonsContainer);
        
        checkListUl.appendChild(liElement);
        
        nameInputElement.value = "";
        phoneInputElement.value = "";
        categoryInputElement.value = "";
        
        
        editButton.addEventListener("click", () => {
            nameInputElement.value = name;
            phoneInputElement.value = phone;
            categoryInputElement.value = category;

            liElement.remove();
        });

        saveButton.addEventListener("click", () => {
            divButtonsContainer.remove();
            const deleteButton = document.createElement("button");
            deleteButton.classList.add("del-btn");
            liElement.appendChild(deleteButton);
            contactListUl.appendChild(liElement);


            deleteButton.addEventListener("click", () => {
                liElement.remove();
            })
        });
    })
}
