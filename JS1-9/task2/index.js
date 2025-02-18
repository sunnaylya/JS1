const numbers = [];
let sum = 0;
let firstElem = 0;
let lastElem = 0;

const getSumOfSequence = (number) => {
  for (let i = 1; i <= number; i ++) {
    firstElem = numbers[0];
    numbers.push(i);
  }
  lastElem = numbers[numbers.length - 1]
  return sum = firstElem + lastElem;
}

const result = getSumOfSequence(8);
console.log(result);