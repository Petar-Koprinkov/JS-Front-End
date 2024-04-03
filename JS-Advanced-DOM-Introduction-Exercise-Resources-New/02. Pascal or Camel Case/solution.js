function solve() {
    const textInputElement = document.getElementById("text");
    const namingConventionElement = document.getElementById("naming-convention");
    const resultElement = document.getElementById("result");

    const text = textInputElement.value
    const convention = namingConventionElement.value

    const functionPascalCase = (text) => text
                                    .split(" ")
                                    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                                    .join("")

    const conventor = {
        "Pascal Case": functionPascalCase,
        "Camel Case": text => functionPascalCase(text).charAt(0).toLowerCase() + functionPascalCase(text).slice(1),
    }

    if(!conventor[convention]) {
        resultElement.textContent = "Error!"
    } else {
        resultElement.textContent = conventor[convention](text)
    }

}