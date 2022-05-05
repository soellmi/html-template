//ARRAY METHODS

const dogs = ["Tore", "Clementine", "Doris"]
//REMEBER: arrays always start with zero

//Push is an easy method to add something to an array 
//Also return the new length of the array
//Push is technically a function because it also returns something
dogs.push("Trasan")
console.log(dogs)

//Unshift adds something to the beginning of the array
//Just like push it returns the new length
dogs.unshift("Kerstin")
console.log(dogs)


//Pop cannot execute anything else than remove the last element. (Does not return the new length)
//Therefore nothing else is needed after. It can only do one thing. 
dogs.pop();
console.log(dogs)

//Shift removes the first element. Works in the same way as pop and does not need an argument. 
dogs.shift()
console.log(dogs)

//IndexOf-If you want to see what position a certain element has.
//From this example you can see that Doris has number 2
console.log(dogs.indexOf("Doris"));

//Includes-if we want to check if something is included in the array.
//If it is it will show true, otherwise false
console.log(dogs.includes("Doris"))
