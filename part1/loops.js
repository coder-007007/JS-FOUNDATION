// let sum = 0;
// let i = 1;
// while (i <= 5) {
//   sum = sum + i; //
// }
// console.log(sum);

// let countdown = [];
// let j = 5;

// while (j > 0) {
//   countdown.push(j);
//   j--;
// }
// console.log(countdown);

// let teaCollection = [];
// let tea;

// do {
//   tea = prompt(`Enter your favourite tea (type "stop" to finish)`);

//   if (tea !== "stop") {
//     teaCollection.push(tea);
//   }
// } while (tea !== "stop");

// let total = 0;
// let i = 1;

// do {
//   total += i;
//   i++;
// } while (i <= 3);

// console.log(total);

//

/*10 Challenges on loops*/

// let arr = ["green tea ", "iced tea", "Oolong tea", "chai"];
// let selectedTeas = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === "chai") {
//     break;
//   }
//   selectedTeas.push(arr[i]);
// }
// console.log(selectedTeas);

// let cities = ["London", "New York", "Paris", "Berlin"];
// let city = [];
// for (i = 0; i < cities.length; i++) {
//   if (cities[i] === "paris" || cities[i] === "Paris") {
//     continue;
//   }
//   city.push(cities[i]);
// }
// console.log(city);

// let numbers = [1, 2, 3, 4, 5];
// let smallNumbers = [];

// for (num of numbers) {
//   smallNumbers.push(num);
//   if (num === 4) {
//     break;
//   }
// }
// console.log(smallNumbers);

// let numbers = [2, 3, 6, 7, 8];
// let doubleNumbers = [];

// numbers.forEach((num) => {
//   if (num === 7) {
//     return;
//   }
//   doubleNumbers.push(num * 2);
// });
// console.log(doubleNumbers);
//

let teaCollection = [
  "chai",
  "black tea",
  "green tea",
  "herbal tea",
  "jasmine tea",
];
let shortTeas = [];

for (const tea of teaCollection) {
  if (tea.length > 10) {
    break;
  }
  shortTeas.push(tea);
}
console.log(shortTeas);
