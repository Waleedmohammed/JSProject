// 1. function declaration
function test(a, b) {
    return a + b;
}

console.log(test(4, 5));


// 2. Function Expression
const multiply = function (x, y) {
    return x * y;
}

console.log(multiply(3, 6));

// 3. Arrow Function Expression
const Devide = (t1, t2) => t1 / t2;
console.log(Devide(10, 5));


// 4. Function Constructor
const substract = new Function('a', 'b', 'return a-b;')
console.log(substract(20, 5));


//5. IIFE(Immedietly Invoked Function Expression)
(function () {
    console.log("Hi I am here");
})();

//6. Generator Function
// function* and yield keyword
function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
}

let generator = generateNumbers();
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)
console.log(generator.next().value)

// 7. Anonymus Function
// no specific name
const numberArr = [1, 2, 3, 4, 5];
const multi = numberArr.map(function (e) {
    return e * e
})

console.log(multi)


// 8. Arrow Function
// no specific name
const multi2 = numberArr.map((e) => {
    return e * e
})

console.log(multi2)

// 9. Recursive Function
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    } else {
        return n * (factorial(n - 1))
    }
}

console.log(factorial(4))
console.log(factorial(0))
console.log(factorial(1))
console.log(factorial(100))

// 10. Higher Order Function
function add(a, b) {
    return a + b;
}

function operate(funcName, a, b) {
    return funcName(a, b);
}

console.log(operate(add, 3, 8));



