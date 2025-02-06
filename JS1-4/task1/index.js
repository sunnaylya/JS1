let num = 1;
let str = "Hi";
let isTrue = true;
let id = Symbol("id");
let bigNumber = 10n;
let empty = null;
let notDefined = undefined;
let obj= {
  name: "Ivan",
  surName: "Ivanov"
}

console.log(Number(num), Boolean(num), String(num));
console.log(Number(str), Boolean(str), String(str));
console.log(Number(isTrue), Boolean(isTrue), String(isTrue));
console.log(Boolean(id), String(id));
console.log(Number(bigNumber), Boolean(bigNumber), String(bigNumber));
console.log(Number(empty), Boolean(empty), String(empty));
console.log(Number(notDefined), Boolean(notDefined), String(notDefined));
console.log(Number(obj), Boolean(obj), String(obj));