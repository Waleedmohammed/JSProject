let myArray = [];
let number = [1, 2, 3, 4];
let fruites = ["apple", "banana", "orange"];

let language = ["JAVA", "Python"];

function printArray(array) {
    console.log("Array Item is " + array);
}

// 1. Push (Add Element at the end of array)
console.log("***************** Push **************")
language.push("JavaScript");
printArray(language);

// 2. Pop (Remove the last element from Array)
console.log("***************** Pop **************")
let newLanguage = ["JAVA", "Python"];
newLanguage.pop();
printArray(newLanguage);

// 3. Shift (Remove the first element from Array and return the deleted item)
console.log("***************** Shift **************")
let newLanguage2 = ["JAVA", "Python"];
console.log(newLanguage2.shift());
printArray(newLanguage2);


// 4. Unshift (Add to the begining of Array and return new length of that array)
console.log("***************** Unshift **************")
let newLanguage3 = ["JAVA", "Python"];
newLanguage3.unshift("JavaScript", "Ruby")
printArray(newLanguage3);
console.log(newLanguage3.unshift());


// 5. Slice (Returns a copy of a section of an array)
console.log("***************** Slice **************")
let newLanguage4 = ["JAVA", "Python", "JavaScript", "Ruby"];
newLanguage4.slice(0, 2)
console.log(newLanguage4.slice(0, 2));
console.log(newLanguage4.slice(newLanguage4.length - 1));
console.log(newLanguage4.slice(-2));
console.log(newLanguage4.slice(3));
console.log(newLanguage4.slice(0, 3));


// 6. Splice (Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements)
console.log("***************** Splice **************")
let newLanguage5 = ["JAVA", "Python", "JavaScript", "Ruby"];
newLanguage5.splice(1, 1, "C#");
printArray(newLanguage5);
console.log(newLanguage5.splice(1, 1, "C#"));


// 7.concat (Combines two or more arrays)
console.log("***************** Concat **************")
let newLanguage6 = ["JAVA", "Python"];
let newLanguage7 = ["JavaScript", "Ruby"];
console.log(newLanguage6.concat(newLanguage7));


// 8.IndexOf (Returns the index of the first occurrence of a value in an array)
console.log("***************** IndexOf **************")
let newLanguage8 = ["JAVA", "Python", "JavaScript", "Ruby", "JAVA"];
console.log(newLanguage8.indexOf("Python"));
console.log(newLanguage8.indexOf("python"));
console.log(newLanguage8.indexOf("Python", 2));
// 2nd red index
console.log(newLanguage8.indexOf("JAVA", 2));


// 9.Includes (Determines whether an array includes a certain element, returning true or false as appropriate)
console.log("***************** Includes **************")
let newLanguage9 = ["JAVA", "Python", "JavaScript", "Ruby", "JAVA"];
console.log(newLanguage9.includes("JAVA"));
console.log(newLanguage9.includes("TST"));
console.log(newLanguage9.includes("JAVA", "TST"));
console.log(newLanguage9.includes("Python", 2));


// 10.ForEach (Performs the specified action for each element in an array.)
console.log("***************** ForEach **************")
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((e) => {
    console.log(e);
})






