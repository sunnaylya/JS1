let userText = prompt("Введите текст").trim();
let fragmentOfText = prompt("Введите слово из текста").trim();

let indexOfFragment = userText.indexOf(fragmentOfText);
let string = userText.slice(0, indexOfFragment);

alert(`Результат: ${string}`);