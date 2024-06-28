function shallowClone(data){
    return {...data};   //spread operator is used to create the shallow copy of the object
}

const object = {    //object created
    name : "Hamza",
    age : 23,
    qualification : "Bachelors",
    address:{
        city: "karachi",
        zip : 75500,
    }
}

const clonedObject = shallowClone(object);     //shallow object is created
console.log("Before Modification");
console.log(object);    //before modification object is logged
console.log(clonedObject);  
clonedObject.address.city = "Islamabad";
clonedObject.name = "Ali";
console.log("After Modification");
console.log(object);    //after modification object is logged
console.log(clonedObject);