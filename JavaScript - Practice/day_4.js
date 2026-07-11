// Modern JS (ES6+)
  function helloname(){
    console.log("Hello!");
  }

//   helloname();

  function table(){
    for (let index = 1; index <= 5; index++) {
        console.log(index);
    }
  }

//   table();

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


// Print table
 function table(n){
    for( let i=n; i<=n*10; i+=n){
        console.log(i);
    }
 }

//  table(7);

function getsum(n){

    let sum=0;
    for(let i=0; i<=n; i++){
        sum = sum+i;
    }

    return sum;
}

getsum(7);