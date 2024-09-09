/*
Create two arrays of your choice.
Use the concat method to combine the two arrays into a new array.
Print both the original arrays and the combined array using console.log().
*/

let odd=[1,3,5,7,9]
let ev=[2,4,6,8,10]
let full=odd.concat(ev)
console.log("array odd", odd)
console.log("array even", ev)
console.log("array total", full)
console.log(Array.isArray(full));
