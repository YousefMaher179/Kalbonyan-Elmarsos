class Course {
  #price;
  get price() {
    return "$" + this.#price;
  }

  set price(value) {
    if (value < 0) {
      throw "Invalid value!";
    }
    this.#price = value;
  }
  constructor(title, length, price) {
    this.t = title;
    this.l = length;
    this.p = price;
  }
  A() {
    return `the much length you get for the amount paid is = ${
      this.l / this.#price
    }$`;
  }
  B() {
    return `The course name is: ${this.t}, you will finish it in : ${this.l}H and the price of is is: ${this.p}$`;
  }
}
class PracticalCourse extends Course {
  constructor(title, length, price, numOfExercises) {
    super(title, length, price);
    this.num = numOfExercises;
  }
}
class TheoreticalCourse extends Course {
  puplish() {
    return "something";
  }
}

let objectOne = new Course("Html  && CSS", 32.5, 10);
let objectTwo = new Course("Javascript", 52.5, 15);
let objectThree = new PracticalCourse("React", 64.5, 20, 30);
let objectFour = new TheoreticalCourse("Node.js", 48.5, 25);
console.log(objectOne);
console.log(objectTwo);
console.log(objectOne.A());
console.log(objectTwo.A());
console.log(objectOne.B());
console.log(objectTwo.B());
console.log(objectThree);
console.log(objectFour);
console.log(objectThree.A());
console.log(objectFour.A());
console.log(objectThree.B());
console.log(objectFour.B());
console.log(objectFour.puplish());
