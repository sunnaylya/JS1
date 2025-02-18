const coffees = ['Latte', 'Cappuccino', 'Americano'];
let number = 0;

const getCofeeName = () => {
  let coffeeName = prompt("Поиск кофе по названию:").trim();
  if (coffeeName[coffeeName.length - 1] === ".") {
    coffeeName = coffeeName.slice(0, -1);
  }
  let lowerCase = coffeeName.toLowerCase();
  let sliced = lowerCase.slice(1, coffeeName.length);
  let firstLetter = lowerCase.slice(0, 1);
  let upperCase = firstLetter.toUpperCase();
  const changedCoffee = `${upperCase}${sliced}`
  return changedCoffee;
}

const changedCoffeeName = getCofeeName();

const isRightCoffee = (elem) => elem === changedCoffeeName;

let coffeeIndex = coffees.findIndex(isRightCoffee);

if (coffeeIndex === -1) {
  alert("К сожалению, такого вида кофе нет в наличии");
}
for (let i = 0; i < coffees.length; i ++) {
  number += 1;
  if (changedCoffeeName === coffees[i]) {
    let coffee = coffees[i];
    alert(`Держите ваш любимый кофе ${coffee}. Он ${number}-й по популярности в нашей кофейне.`)
  }
}




