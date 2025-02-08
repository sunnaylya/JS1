// for (let i = 0; i < 3; i += 1) {
//   let newStudent = prompt('Введите имя нового студента!');
//   if (newStudent) {
//     newStudent = newStudent.trim();
//     alert(`Добро пожаловать, ${newStudent}!`)
//   }
// }

let i = 0;

while (i < 3) {
  i += 1
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`)
  }

}

do {
  i += 1
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`)
  }

} while (i < 3);