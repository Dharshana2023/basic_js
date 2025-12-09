var a="hello";
let b="world";
var y="hello";
const c="!";
var e=10;
var f=20;
console.log(e+f);
console.log(e*f);
console.log(e/f);
console.log(e-f);
function greet(b){
    console.log("Hello " + b);
}
greet("Dharshana");
  
function checkage(age){
    if(age>=18){
        console.log("You are eligible to vote");
    }
    else{
        console.log("You are not eligible to vote");
    }   
}   
checkage(20);
checkage(16);

for(let i=0;i<5;i++){
    console.log(i);
}

let fruits=["apple","banana","mango"];
let car={
    brand:"Toyota",
    model:"Camry",
    year:2020
};
console.log(fruits[2]);
console.log(car.brand);
console.log(car.model);


console.log(t);
var t=100;

//console.log(d);
//let d=50;
// //hoisting does not occur with let and const

let q=null;
let r;
console.log(q);
console.log(r);

let fruit = "apple";   
let message = "";

switch(fruit) {
    case "apple":
        message = "Apple is selected";
        break;

    case "banana":
        message = "Banana is selected";
        break;

    case "mango":
        message = "Mango is selected";
        break;

    default:
        message = "Invalid fruit";
}

console.log(message);

let person ={
    name: "John",
    age: 30,
    city: "New York"
}
for(let key in person){
    console.log(key + ": " + person[key]);
}

function agecheck(age){
    let result = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";
    console.log(result);
}

agecheck(25);

const greets=(name) => {
    console.log(`Hello, ${name}!`);
};
greets("Dharshana");

//spread operator
let arr1=[1,2,3];
let arr2=[4,5,6];
let combined=[0,...arr1,...arr2];
console.log(combined);    

const num=[1,2,3];
const [u,v,w]=num;
console.log(u,v,w);

const[first,third]=num;
console.log(first,third);

const[p,i,...rest]=num;
console.log(p,i);
console.log(rest);

const person1={
    name:"Alice",
    age:28,
    city:"sathy"
};
const{name,age,city}=person1;
console.log(name,age,city);

const n1=[1,2,3,4,5,6];
const s=n1.map(n1=>n1*n1);
console.log(s);

const evennumbers=n1.filter(n1=>n1%2===0);
console.log(evennumbers);


//reduce
const sum2  =n1.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum2);   

function sum3(...numbers){
    return numbers.reduce((total,n1)=>total+n1,0);
}
console.log(sum3(1,2,3,4,5));

//push at last
const arr3=[10,20,30];
arr3.push(40);
console.log(arr3);
arr3.push(4);
console.log(arr3);
arr3.pop();
console.log(arr3);

//pust at first use unshift and pop at first use shift
arr3.unshift(5);
console.log(arr3);
arr3.shift();
console.log(arr3); 

//string methods
let str="Hello World";
console.log(str.length);
console.log(str.charAt(0));

//concat
let str1="Hello";
let str2="World";       
let str3=str1.concat(str2);
console.log(str3);
console.log(str.includes("World"));
console.log(str.indexOf("o"));
console.log(str.replace("World","Dharshana"));
console.log(str.split(" "));
console.log(str.substring(0,5));
console.log(str.toUpperCase());
console.log(str.toLowerCase());