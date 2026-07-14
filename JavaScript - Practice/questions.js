
// Practice: Age Calculator
let currentyear = 2026;
let birthyear = 2005;

let age = currentyear - birthyear;
console.log("Age is :" + age);

// Practice: Temperature Converter
let calcius = 30;
let fahrenheit = (calcius * 9/5) + 32;
console.log(calcius + "°C is " + fahrenheit + "°F");


// Practice: Grade Calculator
let numbers = 85;

if (numbers >= 90) {
    console.log("Grade A");
}
else if (numbers >= 80) {
    console.log("Grade B");
}
else if (numbers >= 70) {
    console.log("Grade C");
}
else if (numbers >= 60) {
    console.log("Grade D");
}
else {
    console.log("Fail");
}

// Practice: Login Validation
let email = "bisma123@gmail.com";
let password = "12345";

let useremail = prompt("Enter your email:");
let userpassword = Number(prompt("Enter your password:"))bn;   // NOTE: "bn" here is a leftover typo in the original file and will throw a syntax error

console.log(useremail);
console.log(userpassword);

if (email === useremail && password === userpassword) {
    console.log(" Login Successful");
}
else if (email !== useremail && password === userpassword) {
    console.log(" Email is incorrect. Please try again.");
}
else if (email === useremail && password !== userpassword) {
    console.log(" Password is incorrect. Please try again.");
}
else {
    console.log(" Both email and password are incorrect.");
}

// Practice: Multiplication Table Generator
let number = Number(prompt("Enter Your Number:"));

for(let i = 1; i<=10; i++){
    console.log(number + "x" + i + "=" + (number*i));
}

// Practice: Number Pattern Programs
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}

// 2nd Pattern
for (let i = 5; i >= 1; i--) {
    let row = "";
    for (let j = 1; j <= i; j++) {
        row += j;
    }
    console.log(row);
}


// Practice: Calculator Functions
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    return a / b;
}
function modulus(a, b) {
    return a % b;
}

console.log("Addition: " + add(num1, num2));
console.log("Subtraction: " + subtract(num1, num2));
console.log("Multiplication: " + multiply(num1, num2));
console.log("Division: " + divide(num1, num2));
console.log("Modulus: " + modulus(num1, num2));

// Practice: Student List
let students = [
    "Ali", "Ahmed", "Bisma", "Sara", "Usman"
];

console.log(students);
console.log("First Student: " + students[0]);
console.log("Third Student: " + students[2]);

students[1] = "Hassan";

console.log("Updated Student List:");
console.log(students);

// Practice: Student Object
let student = {
    name: "Bisma",
    age: 20,
    city: "Lahore",
    marks: 95
};

console.log(student);
console.log("Name: " + student.name);
console.log("Age: " + student.age);
console.log("City: " + student.city);
console.log("Marks: " + student.marks);

student.marks = 98;

console.log("Updated Student Details:");
console.log(student);



// Practice: Student Search System
let studentsForSearch = [
  { name: "Ali", age: 20 },
  { name: "Ahmed", age: 21 },
  { name: "Sara", age: 22 },
  { name: "Bisma", age: 20 },
];

let foundStudent = studentsForSearch.find( student => {
  return studentsForSearch.name == "Bisma";   // NOTE: original bug — should be `student.name`, not the array name
});

console.log(foundStudent);

// Practice: Student Filtering
let studentsForFilter = [
    { name: "Ali", marks: 45 },
    { name: "Ahmed", marks: 90 },
    { name: "Sara", marks: 78 },
    { name: "Bisma", marks: 95 },
    { name: "Usman", marks: 50 }
];

let highScorers = studentsForFilter.filter( student => {
    return student.marks >= 80;
});

// Practice: Marks Processing
let marks = [55, 70, 85, 90, 60];

let updatedMarks = marks.map(mark => mark + 5);

console.log(updatedMarks);
