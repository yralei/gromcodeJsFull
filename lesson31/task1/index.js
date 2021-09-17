// eslint-disable-next-line max-classes-per-file
class Sportsman {
  constructor(name) {
    this.name = name;
  }

  run() {
    console.log(`${this.name} is running`);
  }
}

class Swimmer extends Sportsman {
  constructor(name, style) {
    super(name);
    this.style = style;
  }

  swim() {
    console.log(`${this.name} is swimming ${this.style}`);
  }
}

const newSwimmer = new Swimmer('John', 'breaststroke');
console.log(newSwimmer);
newSwimmer.run();
newSwimmer.swim();
