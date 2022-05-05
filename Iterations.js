//ITERATIONS
//Loops are controlled structures (just like if/else statements) and a fundamental part of programming

//console.log("Lifting weights rep 1");
//We want 10 reps

//for loop
for (let rep=1; rep<=10; rep++){
    //console.log(`Lifting weights rep ${rep}`)
}
//for loops have three parts (each part separated with semicolon)
//Rep, which is one at the start is going to below or equal to 10
//The second part is the condition, the value needs to be 1 or equal to 10 for it to run. 
//The last part is taking the first part and adding it until it reaching the condition 10
//The last part is what is keeping it running.
//${rep} we take the value and use it in a template literal

//LOOPING THROUGH ARRAYS
//'I' represents iteration and best practice is to name them like this

const helena = ["Helena", "Johansson", 2022-1985, "developer"];

//for (let i=0; i<5; i++){
    //console.log(helena[i])}
//the i value will look through Helena, Johansson, 2022-1985 and developer until it's done. 
//We set the condition to 5 since we have 5 items

for (let i=0; i<helena.length; i++){
   // console.log(helena[i])
}

//helena.length will add all the elemets in the array. A lot of times we don't know how many elements we have.

const types =[];
//empty array
console.log(types)
for (let i=0;i<helena.length;i++){
    //reading from the old array
    console.log(helena[i], typeof helena);
    //fill the new array with types
    //types[i]=typeof helena[i];
    types.push(typeof helena[i]);
    //same but a little bit cleaner way of filling out the array
}

console.log(types)

//CONNTINUE AND BREAK
//continue is used to exit the current iteration in the loop and go to the next

console.log("ONLY STRINGS");
for (let i=0; i < helena.length; i++){
    if (typeof helena[i] !=="string")
    continue;
    //if a current index of Helena is not a string then skip this and move on to the next iteration. 
    //That is what we are doing by using the keyword continue
    console.log(helena[i], typeof helena[i]);
}
//Now we are outputting only strings (not the numbers)

//BREAK
//Completely terminates the whole loop

console.log("BREAK WITH NUMBERS!")
for (let i=0; i<helena.length; i++){
    if (typeof helena[i]==="number") break;
    //if the current interation is not a string, skip this and move to the next iteration
    console.log(helena[i], typeof helena[i]);
}