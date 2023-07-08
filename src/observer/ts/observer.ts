interface IObserver<T> {
  refresh(value: T): void;
}

interface ISubject<T> {
  observers: IObserver<T>[];

  subscribe(observer: IObserver<T>): void;
  unsubscribe(observer: IObserver<T>): void;
  notify(value: T): void;
}

class Subject<T> implements ISubject<T> {
  observers: IObserver<T>[];

  constructor() {
    this.observers = [];
  }

  subscribe(observer: IObserver<T>) {
    this.observers.push(observer);
  }

  unsubscribe(observer: IObserver<T>) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(data: T) {
    this.observers.forEach((e) => {
      e.refresh(data);
    });
  }
}

class Observer<T> implements IObserver<T> {
  private fn: (value: T) => void;

  constructor(fn: (value: T) => void) {
    this.fn = fn;
  }

  refresh(value: T): void {
    this.fn(value);
  }
}

const subject = new Subject<number>();
const observer1 = new Observer<number>((n) => {
  console.log(`Hello ${n}`);
});

const observer2 = new Observer<number>((n) => {
  console.log(`Hi ${n}`);
});

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify(1.2);
subject.notify(30);

const subjectString = new Subject<string>();
const observerString1 = new Observer<string>((s) => {
  console.log(`${s.toUpperCase()}`);
});

const observerString2 = new Observer<string>((s) => {
  console.log(`${s.toLowerCase()}`);
});

subjectString.subscribe(observerString1);
subjectString.subscribe(observerString2);
subjectString.notify("Héctor");
subjectString.notify("De León");
