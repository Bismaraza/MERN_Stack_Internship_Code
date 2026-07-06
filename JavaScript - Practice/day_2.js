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
let number = Number(prompt("Enter Your Number:"));

for(let i = 1; i<=10; i++){
    console.log(number + "x" + i + "=" + (number*i));
}


// Task 4: Pattern Problem
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