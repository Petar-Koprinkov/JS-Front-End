function attachGradientEvents() {
    const gradientBox = document.getElementById("gradient");
    const resultElement = document.getElementById("result");

    gradientBox.addEventListener("mousemove", (event) => {
        const currentMousePosition = Number(event.offsetX);
        const boxWidth = Number(event.target.clientWidth);

        let result = Math.floor((currentMousePosition / boxWidth) * 100)

        resultElement.textContent = `${result}%`
    })
}