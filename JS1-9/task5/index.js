const clientsEstimations = [];

const askClientToGiveEstimation = () => {
  const estimation = prompt("Как вы оцениваете нашу кофейню от 1 до 10?");
  let estimationToNumber = Number(estimation);
  if (estimationToNumber > 0 && estimationToNumber <= 10) {
    clientsEstimations.push(estimationToNumber);
  }
}

for (let i = 0; i !== 5; i ++) {
  askClientToGiveEstimation();
}

const goodEstimationsArray = clientsEstimations.filter((clientEstimation) => clientEstimation > 5);
const notGoodEstimationsArray = clientsEstimations.filter((clientEstimation) => clientEstimation <= 5);

const goodEstimations = goodEstimationsArray.length;
const notGoodEstimations = notGoodEstimationsArray.length;

alert(`Всего положительных оценок: ${goodEstimations}`);
alert(`Всего отрицательных оценок: ${notGoodEstimations}`);

console.log(goodEstimationsArray);
console.log(notGoodEstimationsArray);



// const askClientToGiveEstimation = (num) => {
//   for (let i = 0; i < num; i ++) {
//     const estimation = prompt("Как вы оцениваете нашу кофейню от 1 до 10?");
//     let estimationToNumber = Number(estimation);
//     if (estimationToNumber > 0 && estimationToNumber <= 10) {
//       clientsEstimations.push(estimationToNumber);
//     }
//   }
// }