/*
    Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.

*/
function make_avg(num,size){
    let sum=0
    for(const s of num){
       sum=sum+s
    }
    return (sum/size)
}
const num=[2,4,9,4,2,1,6,2]
const size=num.length
const result=make_avg(num,size)
console.log(result);