window.addEventListener("load", solve);

function solve() {
    const addButtonElement = document.getElementById("add-btn");
    const inputExspenseTypeElement = document.getElementById("expense");
    const inputAmountElement = document.getElementById("amount");
    const inputDateElement = document.getElementById("date");
    const previewListElement = document.getElementById("preview-list");
    const expensesListElement = document.getElementById("expenses-list");
    const deleteButtonElement = document.querySelector(".btn.delete");
    
    addButtonElement.addEventListener("click", () => {
        if (!inputExspenseTypeElement.value || !inputAmountElement.value || !inputDateElement.value) {
            return;
        }
        
        const pFoodElement = document.createElement("p");
        pFoodElement.textContent = `Type: ${inputExspenseTypeElement.value}`;
        
        const pAmountElement = document.createElement("p");
        pAmountElement.textContent = `Amount: ${inputAmountElement.value}$`;
        
        const pDateElement = document.createElement("p");
        pDateElement.textContent = `Date: ${inputDateElement.value}`;
        
        const articleElement = document.createElement("article");
        articleElement.appendChild(pFoodElement);
        articleElement.appendChild(pAmountElement);
        articleElement.appendChild(pDateElement);
        
        const editButtonElement = document.createElement("button");
        editButtonElement.textContent = "edit";
        editButtonElement.classList.add("btn", "edit");
        
        const okButtonElement = document.createElement("button");
        okButtonElement.textContent = "ok";
        okButtonElement.classList.add("btn", "ok");
        
        const divButtonConteiner = document.createElement("div");
        divButtonConteiner.classList.add("buttons");
        divButtonConteiner.appendChild(editButtonElement);
        divButtonConteiner.appendChild(okButtonElement);
        
        const liElement = document.createElement("li");
        liElement.classList.add("expense-item");
        liElement.appendChild(articleElement);
        liElement.appendChild(divButtonConteiner);
        
        previewListElement.appendChild(liElement);
        
        addButtonElement.setAttribute("disabled", "disabled");
        
        const exspenseType = inputExspenseTypeElement.value;
        const amount = inputAmountElement.value;
        const date = inputDateElement.value
        
        inputExspenseTypeElement.value = "";
        inputAmountElement.value = "";
        inputDateElement.value = "";
        
        editButtonElement.addEventListener("click", () => {

            inputExspenseTypeElement.value = exspenseType;
            inputAmountElement.value = amount;
            inputDateElement.value = date;

            previewListElement.remove();
            addButtonElement.removeAttribute("disabled");
        })

        okButtonElement.addEventListener("click", () => {
            const buttonsElement = liElement.querySelector(".buttons");
            buttonsElement.remove();
            expensesListElement.appendChild(liElement)
            addButtonElement.removeAttribute("disabled");
        })
    })

    deleteButtonElement.addEventListener("click", () => {
        expensesListElement.innerHTML = "";
        addButtonElement.removeAttribute("disabled");
    })
}

