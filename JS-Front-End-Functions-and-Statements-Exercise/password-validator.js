const passwordLength = password => password.length >= 6 && password.length <= 10;
const lettersDigits = password => /^[a-zA-Z0-9]+$/.test(password)
const hasTwoDigits = password => password
    .toString()
    .split("")
    .filter(element => Number.isInteger(Number(element)))
    .length >= 2;

function solve(password) {
    const validations = [
        [passwordLength, "Password must be between 6 and 10 characters"],
        [lettersDigits, "Password must consist only of letters and digits"],
        [hasTwoDigits, "Password must have at least 2 digits"]
    ]

    const errors = validations.map(([validator, messegae]) => validator(password) ? "" : messegae)
    const filteredErrors = errors.filter(messege => messege);

    filteredErrors.forEach(messege => console.log(messege));

    if (filteredErrors.length === 0) {
        console.log("Password is valid");
    }
}


solve('MyPass123')

