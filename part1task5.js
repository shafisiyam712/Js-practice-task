
// const rand = Math.round(Math.random()*10)+10
// console.log(rand)

//Math.round(Math.random()*10)==(0 to 10)
//Math.round(Math.random()*n)==(0 to n)

// find 60 to 90
// const rand = Math.round(Math.random()*30)+60
// console.log(rand)
// difference hobe gub ar lower value hbe plus

//Generate a random number between 10 to 20.
function random(low,high){
    const rand = Math.round(Math.random()*(high-low))+low
    return rand
}
const num1=10,num2=20
const result=random(num1,num2)
console.log("random num from ",num1,"to",num2,'is',result);