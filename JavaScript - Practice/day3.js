// Arrays
let students = ["Bisma", "raza", "Anas"];

// Access Arrays
console.log(students[0]);

// Different types are combined in single array

let className = ["BS", 4, "UMW"];

// Updating
className[2] = "University";
'University'
className[2];
'University'
className
(3) ['BS', 4, 'University']

// Arrays Methods
// Push: add to end , Pop: Delete from end or return it , Shift: delete from start and return it
// Unshift: Add to start

className.push("Bisma");

// Objects Literals  : Collection of properties : Property => (Key, Value) Pair 

let student = {
  name = "Bisma",
  age = 20,
};

const student = {
  name = "Bisma",
  age = 20,
};

// Memory address will be same of this object.

// Add update or delete values

student.name = "Raza";
// New property add 
student.gender= "Female"; 
// Delete property
delete student.gender;


// Functions Declaration
function greet() {
    console.log("Hello, Bisma!");
}

/// Function Calling
greet();

// Parameters

function greet(name) {
    console.log("Hello " + name);
}

greet("Bisma");
greet("Ali");
greet("Ahmed");

// Multiple Parameters

function add(a, b) {
    console.log(a + b);
}
add(10, 20);

// Parameters written in function defination
// Arguments passed when calling the function

