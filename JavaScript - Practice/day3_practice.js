// Task 1: Calculator Functions 
//  input
let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

// Addition 
function add(a, b) {
    return a + b;
}

// Subtrct 
function subtract(a, b) {
    return a - b;
}

// Multiply
function multiply(a, b) {
    return a * b;
}

// Divide
function divide(a, b) {
    return a / b;
}

// Mod
function modulus(a, b) {
    return a % b;
}

console.log("Addition: " + add(num1, num2));
console.log("Subtraction: " + subtract(num1, num2));
console.log("Multiplication: " + multiply(num1, num2));
console.log("Division: " + divide(num1, num2));
console.log("Modulus: " + modulus(num1, num2));

// Task 2: Student List 

let students = [
    "Ali", "Ahmed", "Bisma", "Sara", "Usman"
];

// Display all
console.log(students);

// Access 
console.log("First Student: " + students[0]);
console.log("Third Student: " + students[2]);

// Update a student's name
students[1] = "Hassan";

console.log("Updated Student List:");
console.log(students);

// Task 3: Student Object : We will add the details of students

let student = {
    name: "Bisma",
    age: 20,
    city: "Lahore",
    marks: 95
};

// Display details
console.log(student);

// access
console.log("Name: " + student.name);
console.log("Age: " + student.age);
console.log("City: " + student.city);
console.log("Marks: " + student.marks);

// Update property
student.marks = 98;

console.log("Updated Student Details:");
console.log(student);