let firstQuestion = confirm("JavaScript появился в 1995 году?");
if (firstQuestion) {
  alert("Верно")
} else {
  alert("Неверно. JavaScript появился в 1995 году");
}

let secondQuestion = confirm("Спецификация JavaScript называется ECMAScript?");
if (secondQuestion) {
  alert("Верно")
} else {
  alert("Неверно. Спецификация JavaScript называется ECMAScript?");
}

let thirdQuestion = confirm("JavaScript был создан за 1 месяц?");
if (!thirdQuestion) {
  alert("Верно")
} else {
  alert("Неверно. JavaScript был создан за 10 дней");
}

