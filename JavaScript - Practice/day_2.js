// Task 1 : Grade Calculator
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

// Task 2: Login Validation

let email = "bisma123@gmail.com";
let password = "12345";


let useremail = prompt("Enter your email:");
let userpassword = Number(prompt("Enter your password:"))bn;

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

// Task 3 : Multiplication table generator

