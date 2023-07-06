// Programación ORIENTADA A OBJETOS
// clase
class Drink {
  // private name: string;
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  info(): string {
    return this.name;
  }
}

const drink = new Drink("Bebidas");
// console.log(drink.name);
console.log(drink.info());

// interface
interface Product {
  price: number;
  getPrice(): string;
}

// herencia
class Beer extends Drink implements Product {
  private alcohol: number;
  price: number;

  constructor(name: string, alcohol: number, price: number) {
    super(name);
    this.alcohol = alcohol;
    this.price = price;
  }

  getPrice(): string {
    return "El precio de la cerveza es: $" + this.price;
  }

  info(): string {
    return (
      super.info() +
      " " +
      "grado de alcohol de: " +
      this.alcohol +
      " y su precio es: $" +
      this.price
    );
  }
}

const beer = new Beer("Corona, Cerveza que tiene un", 4.5, 100);
console.log(beer.info());

// Implementación de interface
class Snack implements Product {
  name: string;
  price: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
  }

  getPrice(): string {
    return "El precio del snack es: $" + this.price;
  }
}

const products: Product[] = [
  new Beer("Cusqueña", 6.5, 120),
  new Snack("Papas Fritas", 0.5),
  new Beer("Heineken", 7.5, 150),
];

function getPrices(items: Product[]) {
  for (const item of items) {
    console.log(item.getPrice());
  }
}

getPrices(products);
