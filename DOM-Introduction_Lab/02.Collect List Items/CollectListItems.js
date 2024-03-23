function extractText() {
    const textInputElement = document.getElementById("items");
    const textAreaElement = document.getElementById("result");
    textAreaElement.value = textInputElement.textContent
}