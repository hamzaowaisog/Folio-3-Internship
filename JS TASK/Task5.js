//Hoisting

//Var

console.log(a); // undefined
var a=1;
console.log(a); // 1

//Variables declared with var are hoisted to the top of their scope and initialized with undefined

//Let
console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b=1;
console.log(b); // 1

//Variables declare with let are hoisted to the top of their scope but are not inititalized accessing them will result in a reference error

//Const
console.log(c); // ReferenceError: Cannot access 'c' before initialization
const c=1;
console.log(c); //1

//Variables declare with const are hoisted to the top of their scope but are not inititalized accessing them will result in a reference error