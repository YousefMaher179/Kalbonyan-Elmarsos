const age = [30, 29, 54];

age.push(60);

age.unshift(10);

const myAge = age[1];

const namePopularity = [
  { userName: "Yousef", usages: 5 },
  { userName: "Youssef", usages: 6 },
];

const youssefUsages = namePopularity.find(
  (pers) => pers.userName === "Youssef"
).usages;

const nameMap = {
  Yousef: 5,
  Youssef: 6,
};

const yousefUsages = nameMap["Yousef"];
