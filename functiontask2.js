/*
    Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
*/
function checker(num){
    if(num % 2!==0)
        return num*2
    else
    return num/2
    
}
const nu=5
const result=checker(nu)
console.log(result);


