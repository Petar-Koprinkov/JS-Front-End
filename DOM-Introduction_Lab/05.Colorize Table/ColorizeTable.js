function colorize() {
    const tableElements = document.querySelectorAll("table tr");
    for (let index = 1; index < tableElements.length; index+=2) {
        tableElements[index].style.backgroundColor = "teal";
    }
}

