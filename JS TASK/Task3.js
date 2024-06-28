function oddNumber(data){  //Filter array method is used to filter array returning odd numbers as a new array
    return data.filter(data => data %2 !== 0);
}
function firstgreaterthanfifty(data){
    return data.find(data => data>50);  //find function is used to return the first element that passes the condition given
} 
function logging (data){
    data.forEach(element => {
        console.log(element);  //for each loop is used that takes function of finding and logging element for this we have declared the function inside the for each loop making it to log every element
    });
}

const data = [2,3,4,5,6,7,8,10,12,34,45,66,7,68,797,6,43,423,42,4234,35,35,36]; //const array declared

console.log("Odd Numbers");
console.log(oddNumber(data)); //odd Number array is generated through this function
console.log("First Number Greater than 50");
console.log(firstgreaterthanfifty(data)); //number greater than 50 is given through this function
console.log("For each used")
logging(data); //every element of array is logged through this one