class Subject {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data) {
    this.observers.forEach((e) => {
      e.refresh(data);
    });
  }
}

class ItemsSubject extends Subject {
  constructor() {
    super();

    this.data = [];
  }

  add(item) {
    this.data.push(item);
    this.notify(this.data);
  }
}

class HtmlElementObserver {
  constructor(element) {
    this.element = element;
  }

  refresh(data) {
    this.element.innerHTML = data.reduce((acc, e) => {
      return acc + `<p>${e}</p>`;
    }, "");
  }
}

class Observer {
  constructor(fn) {
    this.fn = fn;
  }

  refresh(data) {
    this.fn(data);
  }
}

const items = new ItemsSubject();
const divObserver1 = new HtmlElementObserver(div1);
const divObserver2 = new HtmlElementObserver(div2);
const divObserver3 = new Observer((data) => {
  div3.innerHTML = data.length;
});

items.subscribe(divObserver1);
items.subscribe(divObserver2);
items.subscribe(divObserver3);

function add() {
  const name = txtName.value;
  items.add(name);
}
