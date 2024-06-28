function checkPrimitiveTypes(data){  //CheckPrimitveType function takes parameter as input and then log its type 
    console.log("The type of " + String(data) + " is "+ typeof(data));
}
checkPrimitiveTypes(3); //The type of 3 is number
checkPrimitiveTypes("Hello"); //The type of Hello is string
checkPrimitiveTypes(true); //The type of true is boolean
checkPrimitiveTypes(null); //The type of null is object
checkPrimitiveTypes(undefined); //The type of undefined is undefined
checkPrimitiveTypes(Symbol("symbol")); //The type of Symbol(symbol) is symbol
checkPrimitiveTypes({}); //The type of [object Object] is object
checkPrimitiveTypes([]); //The type of  is object
checkPrimitiveTypes(function(){}); //The type of function(){} is function
checkPrimitiveTypes(new Number(3)); //The type of 3 is object
