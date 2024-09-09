/*
Task -1:
Find the lowest number in the array below.
const heights2 = [167, 190, 120, 165, 137];
*/
function lownumber(arr){
    let min=arr[0];
    for(const num of arr){
        if(num<=min){
            min=num
        }
    }
    return min;
}
const heights2 = [167, 190, 120, 165, 137];
result=lownumber(heights2)
console.log('Task 1 output: ',result);

/*
Task -2:
Find the friend with the smallest name.
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
*/

function smallname(ar){
    let sm=ar[0];
    for(const char of ar){
        if(char.length<=sm.length){
            sm=char
        }
    }
    return sm;
}
const names= ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
console.log('Task 2 output :',smallname(names));

/*
Task-3:
Your task is to calculate the total budget required to buy electronics:

    laptop = 35000 tk
    tablet = 15000 tk
    mobile = 20000 tk
Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
*/

function calculateElectronicsBudget(gd1,gd2,gd3){
    let lapTotal=gd1*35000;
    let tabTotal=gd2*15000;
    let mblTotal=gd3*20000
    return lapTotal+tabTotal+mblTotal;
}
const lap=1,tab=2,mbl=3;
console.log('Task 3 output :',calculateElectronicsBudget(lap,tab,mbl));
