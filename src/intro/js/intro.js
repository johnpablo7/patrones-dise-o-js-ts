function sum(a, b) {
  return a + b;
}

let res = sum(1, 2);
console.log(res);

const fSum = sum;

// Función de primer Order
res = fSum(5, 6);
console.log(res);

// Funcion de Orden Superior
function operation(fn, a, b) {
  console.log("se hace algo");
  console.log(fn(a, b));
}

operation(sum, 10, 20);

// Arrow Function
// let fA = () => console.log("algo");
// fA();

operation((a, b) => a * b, 5, 5);

operation(
  (a, b) => {
    const c = a + b;
    return c * 2;
  },
  1,
  2
);

// foreach
const names = ["Hector", "Julia", "Pablo", "Ana"];
names.forEach((name) => console.log(name));
names.forEach((name) => console.log(name.toUpperCase()));
console.log(names);
names.sort();
console.log(names);

// map
const namesUpper = names.map((name) => name.toUpperCase());
console.log(namesUpper);
console.log(names);

// reduce
const numbers = [1, 2, 3, 4, 5];
const total = numbers.reduce((acc, number) => acc + number, 0);
console.log(total);

// Programación ORIENTADA A OBJETOS
// clase
class Drink {
  constructor(name) {
    this.name = name;
  }

  info() {
    return "la bebida es: " + this.name;
  }
}

const drink = new Drink("Agua");
// console.log(drink.name);
console.log(drink.info());

// funcional
function Drink2(name) {
  this.name = name;
  this.info = function () {
    return "la bebida es: " + this.name;
  };
}

const drink2 = new Drink2("Vino");
console.log(drink2.info());

// herencia
class Beer extends Drink {
  constructor(name, alcohol) {
    super(name);
    this.alcohol = alcohol;
  }

  info() {
    return super.info() + " " + this.alcohol;
  }
}

const beer = new Beer("Corona", 4.5);
console.log(beer.info());
