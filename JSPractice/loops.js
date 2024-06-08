// foor loop 
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("-------------------------");

// for .... of loop (foreach in java)
const array = [1, 2, 3, 4];
for (const e of array) {
    console.log(e);
}

console.log("*************************");

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

console.log("++++++++++++++++++++++++");
// While loop
let p = 1;
while (p <= 10) {
    console.log(p);
    p++;
}


console.log("++++++++++++++++++++++++");
// While loop
let l = 2;
while (l <= 10) {
    console.log(l);
    l = l + 2;
}

console.log("++++++++++++++++++++++++");
// do While loop
let f = 1;
do {
    console.log(f);
    f++;
}
while (f <= 10);

console.log("!!!!!!!!!!!!!!!!!!!!!!!");

// 1 to 100: print hi when you see multiplication of 5 and break
let h = 0;
while (h <= 100) {
    if (h % 5 == 0) {
        console.log("Hi I found multiplication of 5 and it is " + h)
    }
    h++;
}


const browser = ["Chrome", "FireFox", "Edge"]
for (const e of browser) {
    console.log(e);
    if (e == "Edge") {
        console.log("Launch Edge");
        break;
    }
}


// for .... of on Object (Key in) Not (Key of)
const user = { name: "Waleed", age: 30, city: "Mansoura" }
for (const key in user) {
    console.log(key + " : " + user[key])
}

