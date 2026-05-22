//array = a variable like structure that can hold more than 1 value at a time.

//creating an array
let colors = ["red", "purple", "blue", "grey", "purple"];
let numbers = [1, 2, 3, 4, 5];

colors.push("green");
colors.push("orange");
colors.push("pink");

colors.pop(); //removes the last element of the array
colors.unshift("black"); //adds an element to the beginning of the array

console.log("length of colors array = " + colors.length);
console.log("length of numbers array = " + numbers.length);



