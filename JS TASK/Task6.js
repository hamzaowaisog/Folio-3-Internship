//Defination:
//Global Scope: Variables declared outside of any function are in the global scope.
//Function Scope: Variables declared inside a function are in the function scope.
//Block Scope: Variables declared inside a block are in the block scope.


var globalvar = 10;
let globallet = 20;
const globalconstant = 30;


function variableScopeTest(){
    var functionvar = 40;
    let functionlet = 50;
    const functionconstant = 60;

    if(true){
        var blockvar = 70;
        let blocklet = 80;
        const blockconstant = 90;
        console.log("Block Scope");
        console.log(blockvar); //accessible
        console.log(blocklet); //accessible
        console.log(blockconstant); //accessible
        //Functionscope variable access

        console.log("Function Scope Accessing inside block");
        console.log(functionvar); //accessible
        console.log(functionlet); //accessible
        console.log(functionconstant); //accessible

        //Global Scope variable access
        console.log("global scope accessing inside block");
        console.log(globalvar); //accessible
        console.log(globallet);//accessible
        console.log(globalconstant);//accessible
    }

    console.log("Function Scope");
    console.log(functionvar); //accessible
    console.log(functionlet); //accessible
    console.log(functionconstant);  //accessible

    //accessing block scope
    console.log("Block Scope variable Accessing outside block")
    console.log(blockvar); //accessible
    // console.log(blocklet); //not accessible
    // console.log(blockconstant) //not accessible

    //Global Scope variable access
    console.log("Accesing global scope variable inside function block");
    console.log(globalvar); //accessible
    console.log(globallet); //accessible
    console.log(globalconstant); //accessible

}

console.log("Global Scope");
console.log("Accessing global scope variable");
console.log(globalvar); //accessible
console.log(globallet); //accessible
console.log(globalconstant); //accessible

console.log("Accessing function scope variable outside function scope");
//console.log(functionvar); //not accessible
// console.log(functionlet); //not accessible
// console.log(functionconstant); //not accessible

console.log("Accessing block scope variable outside block");
//console.log(blockvar); //not accessible
// console.log(blocklet); //not accessible
// console.log(blockconstant); //not accessible


variableScopeTest();