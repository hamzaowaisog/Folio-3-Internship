function deepClone (data){
    return JSON.parse(JSON.stringify(data)); //json parse and stringify is used to create deep copy 
}

const object = {       //object created containing nested objects
    name : "Hamza",
    age : 23,
    qualification : "Bachelors",
    address:{
        city: "karachi",
        zip : 75500,
    }
}

const clonedObject = deepClone(object); //deep copy function is called
console.log("Before Modification");
console.log(object);    //object before modification is logged
console.log(clonedObject);

clonedObject.address.city = "Islamabad";
clonedObject.name = "Ali";

console.log("After Modification");
console.log(object);    //object after modification is logged
console.log(clonedObject);