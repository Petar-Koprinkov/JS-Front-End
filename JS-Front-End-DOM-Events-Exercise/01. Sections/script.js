function create(words) {
   const divContent = document.getElementById("content");

   const divElements = words
   .map(word => {
    const pElement = document.createElement("p");
    pElement.textContent = word;
    pElement.style.display = "none";

    const divElement = document.createElement("div");
    divElement.appendChild(pElement);

    divElement.addEventListener("click", () => {
        pElement.style.display = "block";
    })

    return divElement;
   });

   const divFragment = document.createDocumentFragment();
   divElements.forEach(divElement => divFragment.appendChild(divElement));
   divContent.appendChild(divFragment);
}