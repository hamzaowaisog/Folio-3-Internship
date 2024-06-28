function createCounter(){     //Closure function created that have counter value initially to be 0
    let counter = 0;

    return {  // returns function with two object increment and get value
        increment: function(){  //increment function increases the value of counter by 1
            counter +=1;
        },
        getValue: function(){  //getValue function returns the counter value
            return counter;
        }
    }
};

const counter = createCounter();  //const counter created that takes CreaterFunction objects into it
console.log(counter.getValue()); //returns counter value of 0
counter.increment(); //increment counter value to 1
console.log(counter.getValue()); //returns counter value of 1
counter.increment(); //increment counter value to 2
console.log(counter.getValue()); //returns counter value of 2