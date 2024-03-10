function getGrade(grade) {
    if (grade >= 5.50){
        return `Excellent (${grade.toFixed(2)})`
    } else if (grade >= 4.50) {
        return `Very good (${grade.toFixed(2)})`
    } else if (grade >= 3.50) {
        return `Good (${grade.toFixed(2)})`
    } else if (grade >= 3.00 ) {
        return `Poor (${grade.toFixed(2)})`
    } else {
        return "Fail (2)"
    }
}

function solve(grade) {
    
    const result = getGrade(grade)
    
    console.log(result);
}

solve(5.69)