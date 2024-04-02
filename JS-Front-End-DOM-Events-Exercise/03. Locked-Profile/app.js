function lockedProfile() {
    const profileElements = document.querySelectorAll(".profile");
    
    
    for (const profileElement of profileElements) {
        const lockedElement = profileElement.querySelector("input[type=radio][value=lock]");
        const showMoreButtonElement = profileElement.querySelector("button");
        
        showMoreButtonElement.addEventListener("click", () => {
            
            if(lockedElement.checked) {
                return;
            }
            
            const hiddenElement = profileElement.querySelector("div");
            
            if(showMoreButtonElement.textContent === "Show more"){
                hiddenElement.style.display = "inline-block";
                showMoreButtonElement.textContent = "Hide it";
            } else {
                hiddenElement.style.display = "none";
                showMoreButtonElement.textContent = "Show more";
            }
        })
    }
}