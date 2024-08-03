// 'var' is globally scoped while 'let' and 'const' are block scoped
// 'let' if declared outside of any block then acts as global scoped
// values in const can't be changed once defined

// 'var'
var a = 25;

// 'let'
let b = 50;

{
    let a = 100;
    console.log(a)  // output -> 100
}

console.log(a)  // output -> 25

// 'const'
const c = 75;   // c = c + 1  -->  not possible

// Data Types
// 1.Null 2.undefined 3.Number 4.String 5.Boolean
// Typeof Null is object

// Object
let o = {
    Name: "Apoorva",
    Age: 25,
    "Job Role": "Software Developer"
}

o.Gender = "Male";
console.log(o)

// Loops
let p = 0;
for (let i = 0; i < 10; i++) {
    console.log(p + i);    
}


let data = {
    Name: "Apoorva",
    Age: 25,
    "Job Role": "Software Developer"
}

for (const key in data) {
    if (Object.hasOwnProperty.call(data, key)) {
        const element = data[key];
        console.log(element);
    }
}


for (const c of "Apoorva") {
    console.log(c)
}

// Functions
function sum(a,b){
    return a + b
}
res = sum(3,5)
console.log("Sum is:",res);


function sum(a,b,c=10){
    return a + b
}
res = sum(3,5)
res = sum(3,5,7)
// c is a default parameter here its value will be automatically taken from definition while function call
// if we pass the value of c during function call then it gets updated 

// arrow function
const fun = (x)=> {
    console.log(x)
}
fun(10)

// Strings 
let n = "Apoorva"
let f = "Nandini"

console.log(n.length);
// template literals
console.log(`My name is ${n} and my friend's name is ${f}`);

let nam = "SAKHI"
console.log(nam.slice(1,4))

console.log(nam.replace("HI","SHI"))  // only first occurence will be replaced