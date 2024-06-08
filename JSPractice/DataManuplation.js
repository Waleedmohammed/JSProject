let numbers = [1, 2, 3];

// 1. map
let doublenumbers = numbers.map((e) => e * 2);
console.log(doublenumbers);


let Fahrenheit = [32, 68, 86];
let Celsius = Fahrenheit.map((e) => (e - 32) * (5 / 9));

Fahrenheit.forEach((f, index) => {
    let c = Celsius[index];
    console.log("Fahrenheit : "+f+" is equavilant to: "+c+" Celsius");
});






