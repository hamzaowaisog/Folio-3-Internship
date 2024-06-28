class Person{       //class of person with the constructor that initializes the age and name
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet = ()=>{       //greet function that returns the message
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
}

const people = new Person("Hamza",23);      //Instance of class
people.greet();