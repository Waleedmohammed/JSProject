// 1. var: old way 
// Scope : var
// functionally/locally + global scope

var x = 10; // here it is global scope
function test() {
    var y = 20; // here it is functional scope 
}

console.log(x);

var pop = "hi js";

function rell() {
    var top = "hello JS";
    console.log(top);
}
rell();
console.log(pop);


// Redeclaration with same var name is allowed 
var browser = "Chrome";
var browser = "FireFox";

console.log(browser);

browser = "edge";
console.log(browser);

var g;
console.log(g); //undefined
g = "hello world";
console.log(g);


// issues with var 
var flag = "Hi Waleed";
var number = 4;
if (number > 3) {
    var flag = "Hi Yousef";
}

console.log(flag); // var flag = "Hi Waleed" can not be accessed as long as it is reinitialised after if condition



//Let :
// Scope : block scoped {}
let m = "Hi Waleed";
let time = 4;
if (time > 3) {
    let msg = "Hi Yousef";
    console.log(msg);
}
//console.log(msg); // After block {} let can not work (msg is not defined)
console.log(m);

// redefine variable with the same name is not allowed with let
// let len = 4 ;
// let len = 5 ;

//const: 
const mg = "Hi Habeeba"; // Equal to final in java 
//mg = "Hi Mai";
console.log(mg);

const days = 7;
console.log("Calculation is " + 1000 * days);
