/*
you have two numbers in two variables, called: num1, num2

now declare a variable called result. 
if num1 is bigger than num2 then result will be double of num1. if not, then the value of the variable result will be the sum of num1 and num2.

write a simple if-else. 

also, write it using ternary operator.

 */

let num1=45;
let num2=35;
let r=0;

if(num1>num2){
    r=2*num1;
    console.log(r);
}
else{
    r=num1+num2;
    console.log(r);
}

// using ternary 
num1>num2 ? console.log(r=2*num1) : console.log( r=num1+num2); 