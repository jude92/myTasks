class Animal {
  constructor(name, call, age, gender) {
    this.name = name;
    this.call = call;
    this.age = age;
    this.gender = gender;
  }

  speak() {
    console.log(`${this.call}!`);
  }
}
class Fish extends Animal {
  constructor(name, call, age, gender, schooling) {
    super(name, call, age, gender);

    // properties and methods specific to Fish
    this.schooling = schooling;
  }
  swim() {
    if (this.schooling) {
      console.log("I swim in a school!");
    } else {
      console.log("I swim solo!");
    }
  }
  get schooling() {
    return this._schooling;
  }

  set schooling(newSchooling) {
    this._schooling = newSchooling;
  }
}
let dory = new Fish("Dory", "Just keep swimming", 1, "female", false);
dory.name; //Dory
dory.schooling = true; //sets to true

console.log(dory.schooling); //gets the value of schooling
dory.age; //1
dory.gender; //female
dory.speak(); //Just keep swimming!
dory.swim();

let scarlet = new Animal("Scarlet", "Meow", 2, "female");
scarlet.name; //Scarlet
scarlet.speak(); //Meow!
scarlet.age; //2
scarlet.gender; //female
