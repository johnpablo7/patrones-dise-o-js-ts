class SaleContext {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calculate(amount) {
    return this.strategy.calculate(amount);
  }
}

class RegularSaleStrategy {
  constructor(tax) {
    this.tax = tax;
  }

  calculate(amount) {
    return amount + amount * this.tax;
  }
}

class DiscountSaleStrategy {
  constructor(tax, discount) {
    this.tax = tax;
    this.discount = discount;
  }

  calculate(amount) {
    return amount + amount * this.tax - this.discount;
  }
}

class ForeignStrategy {
  calculate(amount) {
    return amount * this.getDollarPrice();
  }

  getDollarPrice() {
    return 3.8;
  }
}

// const regularSale = new RegularSaleStrategy(0.18);
// const discountSale = new DiscountSaleStrategy(0.18, 1);
// const foreignSale = new ForeignStrategy();

// const sale = new SaleContext(regularSale);
// console.log("El monto por el impuesto(tas) es: $" + sale.calculate(10));

// sale.setStrategy(discountSale);
// console.log(
//   "El monto con el impuesto menos el descuento es: $" + sale.calculate(10)
// );

// sale.setStrategy(foreignSale);
// console.log("El monto en dolar es: $" + sale.calculate(10));

// Explicación práctica
const data = [
  {
    name: "Heineken",
    country: "Alemania",
    info: "Erdinger Pikantus es una cerveza de estilo weizenbock elaborada en la localidad bávara de Erding.",
    img: "https://elpozito.com.pe/tienda/corpac/wp-content/uploads/2021/01/heineken-six-pack.jpg",
  },

  {
    name: "Corona",
    country: "México",
    info: "La cerveza Corona es una marca mundialmente conocida, distribuida a lo largo de más de 159 países en los cinco continentes.",
    img: "https://d20f60vzbd93dl.cloudfront.net/uploads/tienda_003842/tienda_003842_447b718bf88dba6da69ff5405d1190d463221379_producto_large_90.png",
  },

  {
    name: "Delirium Tremens",
    country: "Bélgica",
    info: "Esta pale ale tiene una efervescencia fina con un toque un tanto picante. Al tomarse, calienta el paladar y deja un sabor fuerte y de un amargor seco.",
    img: "https://m.media-amazon.com/images/I/916nyaNKNXL._AC_UF1000,1000_QL80_.jpg",
  },
];

class InfoContext {
  constructor(strategy, data, element) {
    this.setStrategy(strategy);
    this.data = data;
    this.element = element;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  show() {
    this.strategy.show(this.data, this.element);
  }
}

class ListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, beer) => {
      return (
        acc +
        `
          <div>
            <h2>${beer.name}</h2>
            <p>${beer.country}</p>
          </div>
          <hr/>
        `
      );
    }, "");
  }
}

class DetailedListStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, beer) => {
      return (
        acc +
        `
          <div>
            <h2>${beer.name}</h2>
            <p>${beer.country}</p>
            <p>${beer.info}</p>
          </div>
          <hr/>
        `
      );
    }, "");
  }
}

class ListWithImageStrategy {
  show(data, element) {
    element.innerHTML = data.reduce((acc, beer) => {
      return (
        acc +
        `
          <div>
            <h2>${beer.name}</h2>
            <img width="10%" src="${beer.img}" />
          </div>
          <hr/>
        `
      );
    }, "");
  }
}

const strategies = [
  new ListStrategy(),
  new DetailedListStrategy(),
  new ListWithImageStrategy(),
];

const info = new InfoContext(new ListStrategy(), data, content);
info.show();

selectOptions.addEventListener("change", (event) => {
  const option = event.target.value;
  info.setStrategy(strategies[option]);
  info.show();
});
