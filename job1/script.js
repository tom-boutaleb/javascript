function fizzBuzz() {
    for (let i = 0; i <= 1337; i++) {
        if (i % 15 === 0) {
            console.log("FizzBuzz")
        } else if (i % 5 === 0) {
            console.log("Fizz");
        } else if (i % 3 === 0) {
            console.log("Buzz");
        }
        console.log(i);
    }
}

fizzBuzz();
