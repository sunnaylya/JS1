const numbers = [10, 4, 100, -5, 54, 2];
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;
let cubeNumbers = 0;

for (let i = 0; i < numbers.length; i ++) {
  cubeNumbers = numbers[i] ** 3;
  sum1 += cubeNumbers;
}
console.log("for:", sum1);

for (let number of numbers) {
  sum2 += number ** 3;
}
console.log("for of:", sum2);

const cubes1 = numbers.forEach((number) => {
  sum3 += number ** 3;
})
console.log("forEach:", sum3);

const cubes2 = numbers.reduce((sum, number) => {
  return sum += number ** 3;
}, 0);
console.log("reduce:", cubes2);