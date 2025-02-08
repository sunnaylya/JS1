let correctAnswers = 0;
let incorrectAnswers  = 0;

const firstQuestion = prompt("Сколько будет 2 + 2?");
const firstAnswer = 4;
if (Number(firstQuestion) === firstAnswer) {
  alert("Ответ Верный");
  correctAnswers += 1;
} else {
  alert("Ответ Неверный");
  incorrectAnswers += 1;
} 

const secondQuestion = prompt("Сколько будет 2 * 2?");
const secondAnswer = 4;
if (Number(secondQuestion) === secondAnswer) {
  alert("Ответ Верный");
  correctAnswers += 1;
} else {
  alert("Ответ Неверный");
  incorrectAnswers += 1;
}

const thirdQuestion = prompt("У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?");
const thirdAnswer = 1;
if (Number(thirdQuestion) === thirdAnswer) {
  alert("Ответ Верный");
  correctAnswers += 1;
} else {
  alert("Ответ Неверный");
  incorrectAnswers += 1;
}

const fourthQuestion = prompt("У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?");
const fourthAnswer = 12;
if (Number(fourthQuestion) === fourthAnswer) {
  alert("Ответ Верный");
  correctAnswers += 1;
} else {
  alert("Ответ Неверный");
  incorrectAnswers += 1;
}

const fifthQuestion = prompt("Сколько будет 2 + 2 * 2?");
const fifthAnswer = 6;
if (Number(fifthQuestion) === fifthAnswer) {
  alert("Ответ Верный");
  correctAnswers += 1;
} else {
  alert("Ответ Неверный");
  incorrectAnswers += 1;
}

alert(`Конец теста! Правильные ответы — ${correctAnswers}; Неправильные ответы — ${incorrectAnswers}`);

// function getResult (question, answer) {
//   if (Number(question) === answer) {
//     alert("Ответ Верный");
//     correctAnswers += 1;
//   } else {
//     alert("Ответ Неверный");
//     incorrectAnswers += 1;
//   }
// }









