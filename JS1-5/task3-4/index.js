const userName = prompt("Как вас зовут?");
let changedUserName = userName.toUpperCase().trim();

// alert(`Вас зовут ${changedUserName}`);

const userAge = prompt("Сколько вам лет?");
let changedUserAge = userAge.trim();
changedUserAge  = Number(userAge);

alert(`Вас зовут ${changedUserName} и вам ${changedUserAge} лет`);