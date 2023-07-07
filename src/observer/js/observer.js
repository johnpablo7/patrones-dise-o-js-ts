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

class Observer {
  constructor(fn) {
    this.fn = fn;
  }

  refresh(data) {
    this.fn(data);
  }
}

const subject = new Subject();
const observer1 = new Observer((dat) =>
  console.log("Hola soy el observador 1" + dat)
);
const observer2 = new Observer((dat) => {
  div1.innerHTML = dat;
});
const observer3 = new Observer((dat) => {
  div2.innerHTML = dat.split("").reverse().join("");
});

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);
subject.unsubscribe(observer1);

function change() {
  subject.notify(myText.value);
}
