//Prototype Basics
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Add a method to the Person prototype
Person.prototype.getFullName = function() {
    return this.firstName + ' ' + this.lastName;
};

const person1 = new Person('John', 'Doe');
const person2 = new Person('Jane', 'Smith');

console.log(person1.getFullName());  // John Doe
console.log(person2.getFullName());  // Jane Smith

//Modifying Prototypes after Object Creation
function Car(model, year) {
    this.model = model;
    this.year = year;
}

const car1 = new Car('Toyota', 2010);
const car2 = new Car('Honda', 2015);

// Add a method to Car's prototype
Car.prototype.getCarInfo = function() {
    return `${this.model} (${this.year})`;
};

console.log(car1.getCarInfo());  // Toyota (2010)
console.log(car2.getCarInfo());  // Honda (2015)

//Prototype Chain
const animal = {
    eats: true
};

const dog = {
    barks: true
};

// Set `animal` as the prototype of `dog`
Object.setPrototypeOf(dog, animal);

console.log(dog.eats);   // true
console.log(dog.barks);  // true

//Constructor and Prototype
function User(name) {
    this.name = name;
}

User.prototype.sayHi = function() {
    console.log(`Hi, I am ${this.name}`);
};

const user1 = new User('Alice');
const user2 = new User('Bob');

user1.sayHi();  // Hi, I am Alice
user2.sayHi();  // Hi, I am Bob

// Checking the constructor
console.log(user1.constructor === User);  // true

//Prototype Inheritance
function Animal(name) {
    this.name = name;
}

Animal.prototype.speak = function() {
    console.log(`${this.name} makes a sound.`);
};

function Dog(name, breed) {
    Animal.call(this, name);  // Inherit properties from Animal
    this.breed = breed;
}

// Inherit methods from Animal.prototype
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;  // Reset constructor to Dog

Dog.prototype.speak = function() {
    console.log(`${this.name} barks.`);
};

const myDog = new Dog('Rex', 'German Shepherd');
myDog.speak();  // Rex barks.

//Using Object.create for Prototypal Inheritance
const vehicle = {
    type: 'Vehicle',
    start: function() {
        console.log(`${this.type} is starting...`);
    }
};

const car = Object.create(vehicle);
car.type = 'Car';
car.start();  // Car is starting...

//Extending Native Prototypes (Caution)
Array.prototype.first = function() {
    return this[0];
};

const myArray = [1, 2, 3, 4];
console.log(myArray.first());  // 1
