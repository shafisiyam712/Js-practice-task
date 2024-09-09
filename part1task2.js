/*
You are given an array of numbers. Count how many times the a number is repeated in the array.

sample-input: numbers = [5,6,11,12,98, 5]

find: 5

output: 2
*/
function checker(numbs,fnd){
    let count=0
    for(const nm of numbs){
        //if(nm.includes(fnd))
        if(nm===fnd)
            count++
    }
    return count
}

const numbers = [5,6,11,12,98, 5,55,5,9,5]
const find=25
const result=checker(numbers,find)
console.log('Output: ',result);
