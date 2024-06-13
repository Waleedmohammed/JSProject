// 1. Object litterals: {}
const user = { name: 'Waleed', age: 30, address: 'Munich' };
console.log(user.name);



//2. Constructor Function : new keyword
function Car(brand, model, price) {
    this.brand = brand;
    this.model = model;
    this.price = price;
};

const c1 = new Car("BMW", "502", "3000")
console.log(c1.brand);




//3. Class Style
class customer {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;
    }

    addToCart() {
        console.log(`${this.brand} added to cart`)
    }
}

// instance of the class
const c2 = new customer("VW", "Golf", 3400)
console.log(c2.brand);
c2.addToCart("Mercedes")





// 4. Object.create: with some prototype
const employee = {
    printInfo: function () {
        console.log(`Hello , emplyee name is ${this.name}`)
    }
}

const employeeInfo = Object.create(employee);
console.log(employeeInfo.name = 'Tom');
employeeInfo.printInfo();





// 5. Using Factory Function : returns an Object
function department(name, head, count) {
    return {
        name: name,
        head: head,
        count: count,
        printInfo: function () {
            console.log(`Department ${this.name} has head manager ${this, head} and ${this.count} members`)
        }
    }
}

const dpet = department("IT", "Waleed", 20);
dpet.printInfo();