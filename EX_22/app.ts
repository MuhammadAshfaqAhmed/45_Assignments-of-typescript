let name1:string ="ashfaq";
let name2:string ="ahmed";
let name3:string ="ASHFAQ";
let num1:number = 10;
let num2:number = 5;
let username:string ="ashu";
let password:string ="1234";

const fruits:string[]=["apple","banana","grapes"];

// Tests for equality and inequality with strings
console.log("if name1 == name2 then i predict false");
console.log(name1 == name2)

console.log("if name1 != name2 then i predict true");
console.log(name1 != name2);

// Tests using the lower case function
console.log("if name1 == name3.lowercase then i predict true");
console.log(name1 == name3.toLocaleLowerCase());

// Numerical tests involving equality and inequality, 
// greater than and less than, greater than or equal to,
//  and less than or equal to
console.log("if num1 > num2  then i predict true");
console.log(num1 > num2);
// Test 
console.log("if num1 < num2  then i predict false");
console.log(num1 < num2);
// Test 
console.log("if num1 >= num2 then i predict true");
console.log(num1 >= num2);
// Test 
console.log("if num1 <= num2  then i predict false");
console.log(num1 <= num2);

// Tests using "and" and "or" operators
console.log("if username OR password a true then give acces to a user ");
console.log(username == "ashu" || password == "123456");

console.log("if username & password a true then give acces to a user ");
console.log(username == "ashu" && password == "1234");

// Test whether an item is in a array
console.log("Test whether an item is in a array");
console.log(fruits.includes("apple"));

// Test whether an item is not in an array

console.log("Test whether an item is not in an array");
console.log(!fruits.includes("orange"));
