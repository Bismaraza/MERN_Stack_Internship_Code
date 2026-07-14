

let students = ["Bisma", "raza", "Anas"];

console.log(students[0]);

let className = ["BS", 4, "UMW"];

className[2] = "University";
'University'
className[2];
'University'
className
(3) ['BS', 4, 'University']

className.push("Bisma");

let student = {
  name = "Bisma",     // NOTE: original syntax error — should be `name: "Bisma"`
  age = 20,
};

const student = {
  name = "Bisma",     // NOTE: original syntax error — should be `name: "Bisma"`
  age = 20,
};

student.name = "Raza";
student.gender= "Female";
delete student.gender;

function greet() {
    console.log("Hello, Bisma!");
}

greet();

function greet(name) {
    console.log("Hello " + name);
}

greet("Bisma");
greet("Ali");
greet("Ahmed");

function add(a, b) {
    console.log(a + b);
}
add(10, 20);


// ---------------- from day_4.js ----------------
// (Modern JS topic exploration — functions, template literals)

function helloname(){
    console.log("Hello!");
}
// helloname();

function table(){
    for (let index = 1; index <= 5; index++) {
        console.log(index);
    }
}
// table();

function isadult(){
    let age = 20;
    if(age>=18){
        console.log("Not Adult");
    }
    else
    {
        console.log("Adult");
    }
}
// isadult();

function poem(){
    console.log(" Twinkle twinkle Little Star");
    console.log("How i wonder what you are");
}
// poem();

function printname(name,age){
    console.log(`${name}'s age is ${age}.`);
}
// printname("Bisma",20);
// printname("Rukhsar",50);
// printname("Bisma");

function table(n){
    for( let i=n; i<=n*10; i+=n){
        console.log(i);
    }
}
// table(7);

function getsum(n){
    let sum=0;
    for(let i=0; i<=n; i++){
        sum = sum+i;
    }
    return sum;
}
// console.log(getsum(7));

let str = ["hi", "hello","bye","!"];

function concat(str){
    let result = "";
    for(let i=0; i<str.length; i++){
        result= result + str[i];
    }
    return result;
}
// console.log(concat(str));

let add = function(a, b){
    return a+b;
}
add(1,2);


// ---------------- from day_5.js ----------------
// ("this" keyword, try/catch, arrow functions, timers — topic exploration)

const studentsObj = {
    name:"Bisma",
    age : 20,
    eng:95,
    math: 96,
    getAvg(){
        let avg = (this.eng + this.math) /2;
        console.log(`${this.name} got abg marks = ${avg}`);
    }
}

function getAvg(){
    console.log(this);
}

// try {
//     console.log(a);
// } catch(err) {
//     console.log("Variable a is not defined");
//     console.log(err);
// }

const summ = (a,b) => {
    console.log( a+b);
}

const sum = (a,b) => (a+b);

const cube = (n) =>{
    return (n*n*n);
}

const mul = (a,b) => (a*b);

console.log( "Hi There");
// setTimeout( () => {
//     console.log(" Bisma raza");
// } , 4000);
console.log("Welcome to");

console.log( "Hi There");
// setInterval( () => {
//     console.log(" Bisma raza");
// } , 2000);
console.log("Welcome to");

const studentThis = {
    name:"Bisma",
    marks:96,
    prop:this,

    getName: function() {
        console.log(this);
        return this.name;
    },

    getMarks:() => {
        console.log(this);
        return this.name;
    },
};

const square = (n) =>(n*n);

let id = setInterval(() => {
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear Interval Ran");
},10000 );


// ---------------- from day_6.js ----------------
// (forEach / map / filter / every / reduce / spread / destructuring — topic exploration;
//  the Student Search / Filter / Marks Processing questions from this file were moved
//  to Document_Questions_Code.js since they match the Day 5 practice list)

let arr = [1, 2, 3, 4, 5];

let print = function (el) {
  console.log(el);
};
arr.forEach(print);

arr.forEach((el) => {
  console.log(el);
});

let num = [1, 2, 3, 4, 5];

let double = num.map((el) => {
  return el * 2;
});

let studentsGpa = [
  { name: "Bisma", marks: 95 },
  { name: "Raza", marks: 94 },
  { name: "Azar", marks: 92 },
];

let gpa = studentsGpa.map((el) => {
  return el.marks / 10;
});

let nums = [1,2,3,4,5,6,7,8,9];

let ans =  nums.filter ((el) => {
    return el%2== 0;
});

// Question: check if all numbers in our array are multiple of 10 or not
let numms = [10, 20, 30, 40];
let answer = numms.every((el) => el % 10 == 0);
console.log(answer);

// Question 2: get the minimum value in an array
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

let spreadArr = [1, 2, 3, 4, 5];
let newArr = [...spreadArr];

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8];
let final = [...odd, ...even];

let names = ["tony", " Stark", "Bisma", "Raza"];
let [winner, runnerup, ...others] = names;
