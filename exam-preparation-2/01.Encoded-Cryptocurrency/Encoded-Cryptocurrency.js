function solve(input) {
    let encodedWord = input.shift();
    let newWord = encodedWord;

    let line = input.shift();

    while (line !== "Buy") {
        let [command, argument1, argument2] = line.split("?");

        if (command === "TakeEven") {
            let currentWord = ''
            for (let index = 0; index < newWord.length; index++) {
                if (index % 2 == 0){
                    currentWord += newWord[index];
                }
            }
            newWord = currentWord;
            console.log(newWord);
        } else if (command === "ChangeAll") {
            let substring = argument1;
            let replacement = argument2;
            newWord = newWord.replace(new RegExp(substring, 'g'), replacement);
            console.log(newWord);
        } else if (command === "Reverse") {
            let substring = argument1;
            if (newWord.includes(substring)) {
                newWord = newWord.replace(substring, '');
                substring = substring.split("").reverse().join("");
                newWord += substring
                console.log(newWord);
            } else {
                console.log("error");
            }
        }

        line = input.shift();
    }

    console.log(`The cryptocurrency is: ${newWord}`);
}

solve((["PZDfA2PkAsakhnefZ7aZ", 
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"])
)