// function sayHello(name) {
//   console.log('Hi ' + name);
// }

const sayHello = (name) => console.log("Hi " + name); ///////////////////////function 1

const sayHello1 = (hi, name) => {
  /////////////////////////////////function 2
  console.log(hi + " " + name);
};

const sayHello2 = () => console.log("Hi Hard-coded!"); ////////////////////////function 3

const sayHello3 = (name) => "Hi " + name; //////////////////function 4

sayHello("YOUSEF");
sayHello1("hi", "YOUSEF");
sayHello2();
console.log(sayHello3("YOUSEF"));

const sayHello4 = (name, hi = "Hi") => {
  /////////////////////////////////function 5
  console.log(hi + " " + name);
};

sayHello4("Abdo");
sayHello4("Abdo", "Hi");

const checkInput = (cb, ...names) => {
  let hasEmptyText = false;
  for (const text of names) {
    if (!text) {
      hasEmptyText = true;
      break;
    }
  }
  if (!hasEmptyText) {
    cb();
  }
};

checkInput(
  () => {
    console.log("ALL not empty!");
  },
  "hello",
  "12",
  "yousef",
  "abdo"
);
