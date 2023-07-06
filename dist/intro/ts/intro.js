"use strict";
// Programación ORIENTADA A OBJETOS
// clase
class Drink {
    constructor(name) {
        this.name = name;
    }
    info() {
        return this.name;
    }
}
const drink = new Drink("Bebidas");
// console.log(drink.name);
console.log(drink.info());
// herencia
class Beer extends Drink {
    constructor(name, alcohol, price) {
        super(name);
        this.alcohol = alcohol;
        this.price = price;
    }
    getPrice() {
        return "El precio de la cerveza es: $" + this.price;
    }
    info() {
        return (super.info() +
            " " +
            "grado de alcohol de: " +
            this.alcohol +
            " y su precio es: $" +
            this.price);
    }
}
const beer = new Beer("Corona, Cerveza que tiene un", 4.5, 100);
console.log(beer.info());
// Implementación de interface
class Snack {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getPrice() {
        return "El precio del snack es: $" + this.price;
    }
}
const products = [
    new Beer("Cusqueña", 6.5, 120),
    new Snack("Papas Fritas", 0.5),
    new Beer("Heineken", 7.5, 150),
];
function getPrices(items) {
    for (const item of items) {
        console.log(item.getPrice());
    }
}
getPrices(products);
