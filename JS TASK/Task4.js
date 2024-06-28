function logObjectProperties (obj){ //function logObjectProperties is created that takes object as a parameter
    console.log("For Loop used") 
    for (let i=1; i<11 ; i++){      //for loop is used that log numbers from 1 to 10
        console.log(i);
    }

    console.log("For in loop used")
    for(const properties in obj){  //for in loop used that takes the key from object and then prints object properties and values
        console.log(`${properties}: ${obj[properties]}`);
    }


}

const obj = {
    name: "John",
    age: 30,
    city: "New York"
};

const arr = [1,2,3,4,4,5,6,67,8,89,9,9,0,324,2,4,24,235,346];

logObjectProperties(obj); //takes object as a parameter and performs the job
logObjectProperties(arr); //as array are also an object 