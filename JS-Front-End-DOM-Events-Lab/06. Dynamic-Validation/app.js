function validate() {
    const inputElement = document.getElementById("email");

    const pattern = /^[a-z]+@[a-z]+\.[a-z]+/;

    inputElement.addEventListener("change", () => {
        if (!pattern.test(inputElement.value)){
            inputElement.classList.add("error");
        } else {
            inputElement.classList.remove("error");
        }
    })
}