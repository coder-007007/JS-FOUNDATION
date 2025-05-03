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

let cities = ["Paris", "New York", "London"];
let cityList = [];
// for (city of cities) {
//   cityList.push(city);
// }
// console.log(cityList);

for (let c = 0; c < cities.length; c++) {
  cityList.push(cities[c]);
}
console.log(cityList);
