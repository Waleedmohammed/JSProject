const multiple = num => num * num
const result = multiple(6);
console.log(result);


const msg = () => 'HI JavaScript';
console.log(msg());


const add = (a, b) => a + b
const result2 = add(6, 3);
console.log(result2);



const person =
    { name: 'Waleed', age: 30, lname: 'Mohammed' }

const Fname = person => `${person.name} ${person.lname}`

console.log(Fname(person));


const greeting = (userName = 'guest', age = 10) => `Hi ${userName} ! , Your age is ${age} `;
console.log(greeting())


const sum = (...numbers) => numbers.reduce((acc, numb) => acc + numb, 0);
console.log(sum(1, 2, 3, 4, 5, 6));

const browserInfo = (browser = 'chrome', ...details) => {
    console.log(`Browser is ${browser}`)
    console.log(`Its details details`, details)
}

browserInfo('FireFox', '115', 'Mozila');


// MAx Number using Math
const getMax = (a, b, c) => {
    return Math.max(a, b, c)
}

console.log(getMax(10, 40, 60));