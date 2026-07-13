// For Each Function

let arr = [1, 2, 3, 4, 5];

let print = function (el) {
  console.log(el);
};

arr.forEach(print);

// 2nd method

arr.forEach((el) => {
  console.log(el);
});

// Map Function : Let new Arr = arr.Map( some function or name)
// New Array will be created.
let num = [1, 2, 3, 4, 5];

let double = num.map((el) => {
  return el * 2;
});

let students = [
  {
    name: "Bisma",
    marks: 95,
  },
  {
    name: "Raza",
    marks: 94,
  },
  {
    name: "Azar",
    marks: 92,
  },
];

let gpa = students.map((el) => {
  return el.marks / 10;
});

// Filter

let nums = [1,2,3,4,5,6,7,8,9];

let ans =  nums.filter ((el) => {
    return el%2== 0;
}); let num = [1,2,3,4,5];

 let double = num.map((el) => {
    return el*2;
 });

// Question.. check if all numbers in our array are multiple of 10 or not

let numms = [10, 20, 30, 40];

let answer = numms.every((el) => el % 10 == 0);
console.log(answer);

// Question 2

function getMinn(numms) {
  let min = numms.reduce((min, el) => {
    if (min < el) {
      return min;
    } else {
      return el;
    }
  });

  return min;
}

let numms = [10, 20, 30, 40];

// Spreads with Array literals
let arr = [1, 2, 3, 4, 5];

let newArr = [...arr];

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8];

let final = [...odd, ...even];

// Destructuring

let names = ["tony", " Stark", "Bisma", "Raza"];
let [winner, runnerup, ...others] = names;

// Day 06 Practice Questionss
let students = [
  { name: "Ali", age: 20 },
  { name: "Ahmed", age: 21 },
  { name: "Sara", age: 22 },
  { name: "Bisma", age: 23 },
];

let student = students.find(function (student) {
  return students.name == "Sara";
});

console.log(student);

// 2nd question Filter 

let students = [
    { name: "Ali", marks: 45 },
    { name: "Ahmed", marks: 90 },
    { name: "Sara", marks: 78 },
    { name: "Bisma", marks: 95 },
    { name: "Usman", marks: 50 }
];

let result = students.filter(student => {
    return student.marks >= 80;
});


// Question # 03
