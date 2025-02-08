let existingUserLogin = "the_best_user";
let existingUserPassword = "12345678";
let userLogin = prompt("Введите логин").trim();
let userPassword = prompt("Введите пароль").trim();

if (userLogin === existingUserLogin) {
  alert(`Добро пожаловать, ${userLogin}`);
} else {
  alert("Логин и (или) Пароль введены неверно!");
}

// switch (userLogin) {
//   case existingUserLogin:
//     alert(`Добро пожаловать, ${userLogin}`);
//     break;
//   default:
//     alert("Логин и (или) Пароль введены неверно!");
// }
