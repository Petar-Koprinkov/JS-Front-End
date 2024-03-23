function sumTable() {
    const inputElement = document.querySelectorAll("td:nth-child(2n):not(#sum)");
    const result = document.querySelector("#sum");

    result.textContent = Array
                            .from(inputElement)
                            .reduce((acc, element) => acc + Number(element.textContent), 0)
 
}



