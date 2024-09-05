"use strict";

let name = "Джон";
let admin = name;

alert(admin);

const city = prompt("Ваш город:");
const year = prompt("Год образование города:");
const population = prompt("Население города:");

let age = 2024 - year;

alert(`Городу ${city} исполнилось ${age}  лет с момента его образования. Население - ${population} человек`);

let radius = prompt('Радиус круга: ');

const square = 3.14 * (radius * radius);

alert(`Площадь круга равна ${square}`);

let one = parseFloat(prompt("Первое число:"));
let two = parseFloat(prompt("Второе число:"));

let sum = one + two;
let difference = one - two;
let particular = one / two;
let composition = one * two;

alert(`Сумма: ${sum}, разность: ${difference}, частное: ${particular}, произведение: ${composition}`);

console.log(sum);

