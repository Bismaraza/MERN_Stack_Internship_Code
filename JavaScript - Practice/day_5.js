// This keyword: refers to object that refers to current piee of code..

const students = {
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


// try and Catch
// define a block of code to be tested for errors
// Catch: if error occurs in try block, this block will run

// try {
//     console.log(a);
// } catch(err) {
//     console.log("Variable a is not defined");
//     console.log(err);
// }


// Arrow Functions

const summ = (a,b) => {
    console.log( a+b);
}

const sum = (a,b) => (a+b);

const cube = (n) =>{
    return (n*n*n);
}

const mul = (a,b) => (a*b); 

// Set Time out Function 

console.log( "Hi There");

// setTimeout( () => {
//     console.log(" Bisma raza");
// } , 4000);

console.log("Welcome to");


// Set Interval

console.log( "Hi There");

// setInterval( () => {
//     console.log(" Bisma raza");
// } , 2000);

console.log("Welcome to");


// this keyword with arrow functions
// this depends on calling object.

// IN this they have lexical scope... parent ka jo bhi scope hai 

const student = {
    name:"Bisma",
    marks:96,
    prop:this, // global

    getName: function() {
        console.log(this);
        return this.name;
    },

    getMarks:() => {
        console.log(this); // parent Scope 
        return this.name;
    },
};


// Questions
const square = (n) =>(n*n);


let id = setInterval(() => {
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id);
    console.log("Clear Interval Ran");
},10000 );