const getSumOfNumbers = function(number, type ="odd") {
  let sum = 0;
  if (typeof number !== "number" || number === undefined) {
    return NaN;
  }
  for (let i = 0; i <= number; i ++) {
    if (i % 2 !== 0 && type === "odd") {
      sum += i;
      console.log("odd", sum);
 } else if (i % 2 === 0 && type === "even") {
    sum += i;
    console.log("even", sum);
  } else if (type === "") {
      sum += i;
    }
  }
  return sum;
}
const result = getSumOfNumbers(7);
console.log(result);

// if ((i % 2 !== 0) && (type === "odd")) {
//   sum += i;
//   console.log("odd", sum);
// } else if ((i % 2 === 0) && (type === "even")) {
//   sum += i;
//   console.log("even", sum);
// } else {
//   return NaN;
//   // sum += i;
//   // console.log("overall", sum)
// } 