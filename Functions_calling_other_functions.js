//FUNCTIONS CALLING OTHER FUNCTIONS
//Having a function calling other functions is very common and something a developer does all the time

function slice(breakfast){
    return breakfast *2;
    //we have 1 piece and we cut it returns 2 pieces
}

function makeSandwich(bread, cheese){
    const breadSlices=slice(bread);
    const cheeseSlices =slice(cheese);
    //calling for the slice () function inside of another function

    const sandwich = `I'm having ${breadSlices} slices of bread with ${cheeseSlices} slices of cheese for breakfast`;
    return sandwich;

}

console.log(makeSandwich (2,3))