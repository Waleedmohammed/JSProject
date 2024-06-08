let numbers = [1, 2, 3];

// 1. map
let doublenumbers = numbers.map((e) => e * 2);
console.log(doublenumbers);


let Fahrenheit = [32, 68, 86];
let Celsius = Fahrenheit.map((e) => (e - 32) * (5 / 9));

Fahrenheit.forEach((f, index) => {
    let c = Celsius[index];
    console.log("Fahrenheit : " + f + " is equavilant to: " + c + " Celsius");
});

// 2. filter
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let evennumbers = num.filter((e) => (e % 2 == 0));
let oddnumbers = num.filter((e) => (e % 2 == 1));
console.log("Odd Numbers are: " + oddnumbers);
console.log("Even Numbers are: " + evennumbers);

let employee = [
    { name: "Waleed", age: 36, gender: "male" },
    { name: "Mai", age: 36, gender: "female" },
    { name: "Habeeba", age: 8, gender: "female" },
    { name: "Yousef", age: 4, gender: "male" },
]
let femaleOverAge = employee.filter((m) => {
    return m.age > 30 && m.gender == "female"
})
let maleOverAge = employee.filter((m) => {
    return m.age > 30 && m.gender == "male"
})
console.log(femaleOverAge);
console.log(maleOverAge);

// 3. reduce
let numb = [1, 2, 3, 4, 5];
let totals = numb.reduce((acc, num) => acc + num, 0);
console.log(totals);


// Find Max Number in Array
let numbw = [10, 28, 60, 164, 29, 7]
let Max = numbw.reduce((max, num) => {
    if (num > max) {
        return num;
    } else {
        return max;
    }
}, numb[0])
console.log("Max Number is " + Max);

// Total cart amount
let cart = [
    { name: "Jeans", Price: 300 },
    { name: "Shirt", Price: 500 },
    { name: "Hat", Price: 400 },
    { name: "TShirt", Price: 600 },
]
let totalCartAmount = cart.reduce((total, price) => total + price.Price, 0);
console.log("Total Cart is " + totalCartAmount)