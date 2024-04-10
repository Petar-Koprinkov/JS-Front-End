const baseUrl = "http://localhost:3030/jsonstore/tasks";

const loadMealButton = document.getElementById("load-meals");
const mealContainerElement = document.getElementById("list");
const addButtonElement = document.getElementById("add-meal");
const foodInputElement = document.getElementById("food");
const timeInputElement = document.getElementById("time");
const caloriesInputElement = document.getElementById("calories");
const editMealButton = document.getElementById("edit-meal");


let mealId = null;

const loadMeals = async() => {
    const response = await fetch(baseUrl);
    const data = await response.json();
    
    mealContainerElement.innerHTML = "";
    
    for (const meal of Object.values(data)) {
        const changeButtonElement = document.createElement("button");
        changeButtonElement.classList.add("change-meal");
        changeButtonElement.textContent = "Change";
        
        const deleteButtonElement = document.createElement("button");
        deleteButtonElement.classList.add("delete-meal");
        deleteButtonElement.textContent = "Delete";
        
        const divButtonContainer = document.createElement("div");
        divButtonContainer.id = "meal-buttons";
        divButtonContainer.appendChild(changeButtonElement);
        divButtonContainer.appendChild(deleteButtonElement);
        
        const h2FoodElement = document.createElement("h2");
        h2FoodElement.textContent = meal.food;
        
        const h3TimeElement = document.createElement("h3");
        h3TimeElement.textContent = meal.time;
        
        const h3CaloriesElement = document.createElement("h3");
        h3CaloriesElement.textContent = meal.calories;
        
        const mealElement = document.createElement("div");
        mealElement.classList.add("meal");
        mealElement.appendChild(h2FoodElement);
        mealElement.appendChild(h3TimeElement);
        mealElement.appendChild(h3CaloriesElement);
        mealElement.appendChild(divButtonContainer);
        
        mealContainerElement.appendChild(mealElement);
        
        changeButtonElement.addEventListener("click", () =>{
            mealId = meal._id;
            
            foodInputElement.value = meal.food;
            timeInputElement.value = meal.time;
            caloriesInputElement.value = meal.calories;
            
            mealElement.remove();
            
            editMealButton.removeAttribute("disabled");
            addButtonElement.setAttribute("disabled", "disabled")
            
        });

        deleteButtonElement.addEventListener("click", async() => {
            await fetch(`${baseUrl}/${meal._id}`, {
                method: 'DELETE',
            });

            mealElement.remove();

            await loadMeals();
        });
    }

}

loadMealButton.addEventListener("click", loadMeals);

editMealButton.addEventListener("click", async() => {
    
    let food = foodInputElement.value
    let time =timeInputElement.value;
    let calories = caloriesInputElement.value;

    const response = await fetch(`${baseUrl}/${mealId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            food,
            calories,
            time,
            _id: mealId,
        })
    });

    if(!response.ok){
        return;
    }

    foodInputElement.value = "";
    timeInputElement.value = "";
    caloriesInputElement.value = "";

    await loadMeals();

    editMealButton.setAttribute("disabled", "disabled");
    addButtonElement.removeAttribute("disabled");

    mealId = null;
    
});

addButtonElement.addEventListener("click", async() => {
    const food = foodInputElement.value;
    const time = timeInputElement.value;
    const calories = caloriesInputElement.value;
    
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers : {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            food,
            calories,
            time,
        })
    })
    
    if(!response.ok){
        return;
    }
    
    clearInputFields();
    
    await loadMeals();
});

function clearInputFields() {
    foodInputElement.value = "";
    timeInputElement.value = "";
    caloriesInputElement.value = "";
};