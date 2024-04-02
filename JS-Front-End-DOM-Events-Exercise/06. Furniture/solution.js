function solve() {
    const inputTextElement = document.querySelector("#exercise textarea:first-of-type");
    const generateButtonElement = document.querySelector("#exercise button:first-of-type");
    const outputTextElement = document.querySelector("#exercise textarea:last-of-type");
    const buyButtonElement = document.querySelector("#exercise button:last-of-type");
    
    const tBodyElement = document.querySelector("#exercise .table tbody")
    
    generateButtonElement.addEventListener("click", () => {
        const furnitures = JSON.parse(inputTextElement.value);
        
        for (const furniture of furnitures) {
            
            const tdImgElement = document.createElement("td");
            const imgElement = document.createElement("img");
            imgElement.src = furniture.img;
            tdImgElement.appendChild(imgElement);
            
            const tdNameElement = document.createElement("td");
            const pNameElement = document.createElement("p");
            pNameElement.textContent = furniture.name;
            tdNameElement.appendChild(pNameElement);
            
            const tdPriceElement = document.createElement("td");
            const pPriceElement = document.createElement("p");
            pPriceElement.textContent = furniture.price;
            tdPriceElement.appendChild(pPriceElement);
            
            const tdDfFactor = document.createElement("td");
            const pDfFactor = document.createElement("p");
            pDfFactor.textContent = furniture.decFactor;
            tdDfFactor.appendChild(pDfFactor);
            
            const tdCheckbox = document.createElement("td");
            const inputCheckbox = document.createElement("input");
            inputCheckbox.setAttribute("type", "checkbox");
            tdCheckbox.appendChild(inputCheckbox);

            const furnitureTrElement = document.createElement('tr');
            
            furnitureTrElement.appendChild(tdImgElement);
            furnitureTrElement.appendChild(tdNameElement);
            furnitureTrElement.appendChild(tdPriceElement);
            furnitureTrElement.appendChild(tdDfFactor);
            furnitureTrElement.appendChild(tdCheckbox);

            tBodyElement.appendChild(furnitureTrElement);
        }
    })
    
    buyButtonElement.addEventListener("click", () => {
        
        let names = [];
        let totalPrice = 0;
        let Dfactor = 0;
        let markedItems = 0

        console.log(tBodyElement.children);
        
        Array.from(tBodyElement.children)
        .forEach(furnitureTrElement => {
            const markedElement = furnitureTrElement.querySelector('input[type=checkbox]');
            if (!markedElement.checked) {
                return;
            }
            
            const name = furnitureTrElement.children.item(1).textContent;
            const price = Number(furnitureTrElement.children.item(2).textContent);
            const factor = Number(furnitureTrElement.children.item(3).textContent);
            
            names.push(name);
            totalPrice += price;
            Dfactor += factor;
            markedItems ++;
        });
        
        outputTextElement.value += `Bought furniture: ${names.join(", ")}\n`;
        outputTextElement.value += `Total price: ${totalPrice.toFixed(2)}\n`;
        outputTextElement.value += `Average decoration factor: ${Dfactor/ markedItems}\n`;

        
    })
    
}
