function sovle(first_num, second_num, third_num) {
    let result

    if (first_num > second_num && first_num > third_num) {
        result = first_num
    } else if (second_num > first_num && second_num > third_num){
        result = second_num
    } else{
        result = third_num
    }

    console.log(`The largest number is ${result}.`);
}


sovle(-3, 5, 9)