function calculateArea(radius){     //calulateArea function that takes radius as a parameter
    return Math.PI * radius * radius; //Math.pi module is used that get 3.142 along with radius^2
}

const radius = 10;
console.log("Area of circle with radius 10 is: " + calculateArea(radius)); //area is logged