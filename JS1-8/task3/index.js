function getDivisorsCount(number) {
  if (number === undefined || Number(number) === false) {
    return NaN;
  }
  if (number < 0 || Number.isInteger(number) === false) {
    alert(`${number} должен быть целым числом и больше нуля!`);
  }
  let numberOfDivisors = 0;
  for (let i = 0; i <= number; i ++) {
    if (number % i === 0) {
      numberOfDivisors += 1;
    }
  }
  return numberOfDivisors;
} 

const result = getDivisorsCount(13);
console.log(result);


