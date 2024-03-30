function solve() {
   const addButtonElements = document.querySelectorAll(".add-product");
   const textAreaElement = document.querySelector("textarea");
   const checkOutElement = document.querySelector(".checkout");
   let totalMoney = 0
   const list = {}


   for (const addButtonElement of addButtonElements) {
      addButtonElement.addEventListener("click", () => {
         const productElement = addButtonElement.parentElement.parentElement;
         const name = productElement.querySelector(".product-title").textContent;
         const money = Number(productElement.querySelector(".product-line-price").textContent);
         textAreaElement.value += `Added ${name} for ${money.toFixed(2)} to the cart.\n`

         totalMoney += money;
         list[name] = true;
      })
   }

   checkOutElement.addEventListener("click", (event) => {
      for (const addButtonElement of addButtonElements) {
         addButtonElement.setAttribute("disabled", "true");
      }
      checkOutElement.setAttribute("disabled", "true");
      textAreaElement.value += `You bought ${Object.keys(list).join(", ")} for ${totalMoney.toFixed(2)}.\n`
   })
}