/*
    Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

*/
function count_zero(str){
    let c=0
    for(const s of str){
        if(s==='0')
            c++
    }
    return c
}
const num='1101010011010101110'
const result=count_zero(num)
console.log(result);