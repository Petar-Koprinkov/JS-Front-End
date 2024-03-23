function calc() {
    const firstNumberElement = document.getElementById("num1");
    const secondNumberElement = document.getElementById("num2");
    const resultElement = document.querySelector("#sum");
    
    const firstNumber = Number(firstNumberElement.value);
    const secondNumber = Number(secondNumberElement.value);
    
    resultElement.value = firstNumber + secondNumber;
}
