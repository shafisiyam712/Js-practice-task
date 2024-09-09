/*
Use a for...of loop to concatenate all the elements of an array into a single string.

Input: var numbers = ['Tom', 'Tim', 'Tin', 'Tik']

Output:

'TomTimTinTik'
*/
var numbers = ['Tom', 'Tim', 'Tin', 'Tik']
let cng=''
for(const num of numbers){
    console.log(num);
    cng=cng.concat(num)
}
console.log(cng);
