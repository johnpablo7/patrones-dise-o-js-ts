class Singleton {
  static getInstance() {
    return Singleton.instance;
  }

  constructor() {
    this.random = Math.random();

    // console.log("Entrando al contructor");

    // Si quito la validacion de la condicional if me daria false y serian diferentes
    if (Singleton.instance) {
      // console.log("Ya existe");
      return Singleton.instance;
    }

    // console.log("No existe y se crea");
    Singleton.instance = this;
  }
}

const singleton = new Singleton();
const singleton2 = new Singleton();
const singleton3 = Singleton.getInstance();

console.log(singleton.random);
console.log(singleton2.random);
console.log(singleton3.random);

console.log(singleton === singleton2);
console.log(singleton3 === singleton2);

// Otro Ejemplo
class WeekDays {
  daysEs = [
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
    "Domingo",
  ];

  daysEn = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  constructor(lang) {
    this.lang = lang;

    if (WeekDays.instace) {
      return WeekDays.instace;
    }

    WeekDays.instace = this;
  }

  getDays() {
    return this.lang === "es" ? this.daysEs : this.daysEn;
  }
}

const weekDays = new WeekDays("es");
const weekDays2 = new WeekDays("en");
console.log(weekDays.getDays());
console.log(weekDays.getDays());
