const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
const random = Math.random(); // produces random number between 0 (including) and 1 (excluding)

if (randomNumber >= 0.7) {
  alert("You skipped the maximum number!");
  console.log(randomNumber);
} else {
  console.log(randomNumber);
}
if (
  (random >= 0.7 && randomNumber >= 0.7) ||
  random <= 0.2 ||
  randomNumber <= 0.2
) {
  alert("You skipped the maximum number!!");
  console.log(randomNumber, "----", random);
} else {
  console.log(randomNumber, "----", random);
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}

console.log("--------------------------");

let j = 0;
while (j < 10) {
  console.log(array[j]);
  j++;
}

console.log("--------------------------");

for (let i = array.length - 1; i >= 0; i--) {
  console.log(array[i]);
}
