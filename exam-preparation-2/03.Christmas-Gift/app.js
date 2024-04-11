const baseUrl = "http://localhost:3030/jsonstore/gifts";

const loadPresentsButton = document.getElementById("load-presents");
const giftListElement = document.getElementById("gift-list");
const editButton = document.getElementById("edit-present");
const addButton = document.getElementById("add-present");
const presentInputElement = document.getElementById("gift");
const forInputElement = document.getElementById("for");
const priceInputElement = document.getElementById("price");

let presentID = null;


loadPresentsButton.addEventListener("click", loadPresents);

addButton.addEventListener("click", async() => {
    const gift = presentInputElement.value;
    const forPerson = forInputElement.value;
    const price = priceInputElement.value;
    
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            gift,
            for: forPerson,
            price
        })
    })
    
    if (!response.ok){
        return;
    }

    clearInput();
    
    loadPresents();
    
});

editButton.addEventListener("click", async() => {
    const gift = presentInputElement.value;
    const forPerson = forInputElement.value;
    const price = priceInputElement.value;
    
    const response = await fetch(`${baseUrl}/${presentID}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            gift,
            for: forPerson,
            price,
            _id: presentID
        })
    });

    if (!response.ok){
        return;
    }

    clearInput();

    loadPresents();

    editButton.setAttribute("disabled", "disabled");
    addButton.removeAttribute("disabled");

})

async function loadPresents() {
    const response = await fetch(baseUrl);
    const data = await response.json();
    
    giftListElement.innerHTML = "";
    
    for (const present of Object.values(data)) {
        const changeButton = document.createElement("button");
        changeButton.classList.add("change-btn");
        changeButton.textContent = "Change";
        
        const deleteButton = document.createElement("button");
        deleteButton.classList.add("delete-btn");
        deleteButton.textContent = "Delete";
        
        const buttonsContainerElement = document.createElement("div");
        buttonsContainerElement.classList.add("buttons-container");
        buttonsContainerElement.appendChild(changeButton);
        buttonsContainerElement.appendChild(deleteButton);
        
        const pPresentElement = document.createElement("p");
        pPresentElement.textContent = present.gift;
        
        const pForElement = document.createElement("p");
        pForElement.textContent = present.for;
        
        const pPriceElement = document.createElement("p");
        pPriceElement.textContent = present.price;
        
        const contentDivConteiner = document.createElement("div");
        contentDivConteiner.classList.add("content");
        contentDivConteiner.appendChild(pPresentElement);
        contentDivConteiner.appendChild(pForElement);
        contentDivConteiner.appendChild(pPriceElement);
        
        const giftSockDivElement = document.createElement("div");
        giftSockDivElement.classList.add("gift-sock");
        giftSockDivElement.appendChild(contentDivConteiner);
        giftSockDivElement.appendChild(buttonsContainerElement);
        
        giftListElement.appendChild(giftSockDivElement);
        
        editButton.setAttribute("disabled", "disabled");


        changeButton.addEventListener("click", () => {
            presentInputElement.value = present.gift;
            forInputElement.value = present.for;
            priceInputElement.value = present.price;
            presentID = present._id;
            giftSockDivElement.remove();

            editButton.removeAttribute("disabled");
            addButton.setAttribute("disabled", "disabled");
        });

        deleteButton.addEventListener("click", async() => {
            const response = fetch(`${baseUrl}/${present._id}`,{
                method: 'DELETE'
            })

            
            giftSockDivElement.remove();

            loadPresents();
        })
    }
}

function clearInput() {
    presentInputElement.value = "";
    forInputElement.value = "";
    priceInputElement.value = "";
}