function deleteByEmail() {
    const inputElement = document.querySelector("input[type=text]")
    const trElements = document.querySelectorAll("tbody tr");
    const resultElement = document.getElementById("result");

    const trElement = Array
    .from(trElements)
    .find(element => element.children[1].textContent.includes(inputElement.value));

    if (trElement) {
        trElement.remove();
        resultElement.textContent = "Deleted."
    } else {
        resultElement.textContent = "Not found."
    }

    inputElement.value = ""
}