function focused() {
    const inputElements = document.querySelectorAll("input[type=text]");
    
    Array.from(inputElements).forEach(element => {
        element.addEventListener("focus", () => {
            element.parentElement.classList.add("focused")
        })
    })
    
    Array.from(inputElements).forEach(element => {
        element.addEventListener("blur", () => {
            element.parentElement.classList.remove("focused")
        })
    })
}