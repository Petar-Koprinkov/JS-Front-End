function attachEventsListeners() {
    const daystButtonElements = document.getElementById("daysBtn");
    const hourstButtonElements = document.getElementById("hoursBtn");
    const minutesButtonElements = document.getElementById("minutesBtn");
    const secondsButtonElements = document.getElementById("secondsBtn");
    
    const daysTextElement = document.getElementById("days");
    const hoursTextElement = document.getElementById("hours");
    const minutesTextElement = document.getElementById("minutes");
    const secondsTextElement = document.getElementById("seconds");
    
    daystButtonElements.addEventListener("click", () => {
        
        if(daysTextElement.value) {
            hoursTextElement.value = Number(daysTextElement.value) * 24
            minutesTextElement.value = Number(daysTextElement.value) * 24 * 60
            secondsTextElement.value = Number(daysTextElement.value) * 24 * 60 * 60
        }
    })
    
    hourstButtonElements.addEventListener("click", () => {
        
        if(hoursTextElement.value) {
            daysTextElement.value = Number(hoursTextElement.value) / 24
            minutesTextElement.value = Number(hoursTextElement.value)  * 60
            secondsTextElement.value = Number(hoursTextElement.value) * 60 * 60
        }
    })
    
    minutesButtonElements.addEventListener("click", () => {
        
        if(minutesTextElement.value) {
            daysTextElement.value = Number(minutesTextElement.value) / 60 / 24
            hoursTextElement.value = Number(minutesTextElement.value)  / 60
            secondsTextElement.value = Number(minutesTextElement.value) * 60
        }
    })
    
    secondsButtonElements.addEventListener("click", () => {
        
        if(secondsTextElement.value) {
            daysTextElement.value = Number(secondsTextElement.value) / 60 / 60 / 24
            hoursTextElement.value = Number(secondsTextElement.value) / 60 / 60
            minutesTextElement.value = Number(secondsTextElement.value) / 60 
            
        }
    })   
    
}