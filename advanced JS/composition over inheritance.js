// problems woth object inheritance
class Pizza{
    constructor(size,crust,sauce)
    {
        this.size=size;
        this.crust=crust;
        this.sauce=sauce;
        this.toppings=[];
    }
    prepare(){console.log(`preparing....`)}
    bake(){console.log(`Baking...`)}
    ready(){console.log(`Ready!`)}
}

class Salad {
    constructor(size,dressing)
    {
        this.size=size;
        this.dressing=dressing;
    }
    prepare(){console.log(`Preparing...`)}
    toss(){console.log(`Tossing...`)}
    ready(){console.log(`Ready!`)}
}
class stuffedCrustPizza extends Pizza{
    stuff(){console.log('Stuffing the crust...')}
}

class butteredCrustPizza extends Pizza{
    butter(){console.log('Buttering the crust...')}
}

class stuffedButteredCrustPizza extends Pizza{
    stuff(){console.log('Stuffing the crust...')}
    butter(){console.log('Buttering the crust...')}

}

const myPizza =new stuffedButteredCrustPizza();
myPizza.stuff();
myPizza.butter();

//Composition to the Rescue
const canFly = {
    fly: function() {
      console.log("Flying...");
    }
  };
  
  const canSwim = {
    swim: function() {
      console.log("Swimming...");
    }
  };
  
  function createDuck() {
    return Object.assign({}, canFly, canSwim);
  }
  
  const duck = createDuck();
  duck.fly();  // "Flying..."
  duck.swim(); // "Swimming..."

//Data Structure Mutation & Cloning to Avoid Mutation
const original = { name: "John", address: { city: "New York" } };
const shallowCopy = { ...original };
shallowCopy.address.city = "Los Angeles";  // Modifies both original and shallowCopy

const or = { name: "John", address: { city: "New York" } };
const deepCopy = JSON.parse(JSON.stringify(or));
deepCopy.address.city = "Los Angeles";  // Only modifies deepCopy

//Refactoring to a Declarative Expression

const numbers = [1, 2, 3, 4, 5];
let doubled = [];
for (let i = 0; i < numbers.length; i++) {
  doubled.push(numbers[i] * 2);
}
console.log(doubled); // [2, 4, 6, 8, 10]

const numb = [1, 2, 3, 4, 5];
const dou = numb.map(num => num * 2);
console.log(dou); // [2, 4, 6, 8, 10]

//Review of Composition Examples




