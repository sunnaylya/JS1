let health = prompt('Введите число параметра "здоровье" для персонажа');
console.log(health);
if (health < 0 || !health) {
  debugger;
  alert('Параметр "здоровье" должен быть больше нуля!');
} else {
  alert(`Параметр "здоровье" равен ${health}`);
}