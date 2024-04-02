function encodeAndDecodeMessages() {
    const messageTextAreaElement = document.querySelector("main div:first-of-type textarea");
    const recieverTextAreaElement = document.querySelector("main div:last-of-type textarea");

    const encodeButton = document.querySelector("main div button:first-of-type");
    const decodeButton = document.querySelector("main div:last-of-type button");

    encodeButton.addEventListener("click", () => {
        const text = messageTextAreaElement.value;
        let newText = ""

        for (let index = 0; index < text.length; index++) {
            const newNumber = text[index].charCodeAt(0) + 1;
            const newLetter = String.fromCharCode(newNumber);

            newText += newLetter
        }

        recieverTextAreaElement.value = newText;
        messageTextAreaElement.value = ""

    })

    decodeButton.addEventListener("click", ()=> {
        const text = recieverTextAreaElement.value;
        let newText = ""

        for (let index = 0; index < text.length; index++) {
            const newNumber = text[index].charCodeAt(0) - 1;
            const newLetter = String.fromCharCode(newNumber);

            newText += newLetter
        }
        
        recieverTextAreaElement.value = newText;
    })
}