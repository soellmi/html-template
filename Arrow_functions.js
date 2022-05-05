//ARROW FUNCTIONS
//Introduced in es6 the superhero of function and a much faster way of writing functions

//function expression
const calcAgeOldway =function(birthYear){
    return 2022 -birthYear
}

//arrow function
const calcAge = (birthYear)=> 2022-birthYear;
//Also an expression
//We do not have to write the return keyword

const age = calcAge(1985);
console.log(age)

const yearsUntilRetire =(birthday) => {
    const age = 2022-birthday;
    const retire =65-age;
    return retire;
}

const yearsLeft = yearsUntilRetire(1985);
console.log(`You have ${yearsLeft} years left until you can retire`);

const newYearsRetire= (birthYear, firstName)=>{

}

//You should not always use arrow functions.
//You have to learn when to use them.
//Arrow functions do not have the keyword 'this'.