let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let filterArr = array.filter((e) => e > 5);
console.log(filterArr);

let mapArr = array.map((val) => ({ num: val }));
console.log(mapArr);

let reduceArr = array.reduce((cr, cv) => cr * cv);
console.log(reduceArr);

function findMaxNumber(arr) {
  let maxNum = Math.max(...arr);
  console.log(maxNum);
}
findMaxNumber(array);

function findMinAndMax(arr) {
  let minVal = Math.min(...arr);
  let maxVal = Math.max(...arr);
  return [minVal, maxVal];
}
const [min, max] = findMinAndMax(array);
console.log(min, max);

const userIds = new Set();
userIds.add(10);
userIds.add(-5);
userIds.add(-5);

console.log(userIds);
