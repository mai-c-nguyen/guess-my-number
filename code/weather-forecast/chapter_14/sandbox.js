// //store data in local storage

// localStorage.setItem('name', 'mario');
// localStorage.setItem('age', 50);

// // get data from local storage

// let name = localStorage.getItem('name');
// let age = localStorage.getItem('age');
// console.log(name, age);

// //update local storage

// localStorage.setItem('name', 'luigi');
// localStorage.age = '40';
// name = localStorage.getItem('name');
// age = localStorage.getItem('age');
// console.log(name, age);

// //deleting data from the local storage

// // localStorage.removeItem('name');
// localStorage.clear();

// name = localStorage.getItem('name');
// age = localStorage.getItem('age');
// console.log(name, age);

const todos = [
  {text: "play football", author: "shaun"},
  {text: "buy some fruits", author: "mario"}
];

localStorage.setItem(todos, JSON.stringify(todos));
const stored = localStorage.getItem(todos);
console.log(todos);
console.log(stored);
console.log(JSON.parse(stored));
