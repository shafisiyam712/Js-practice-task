/*
BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.
*/

const w=55;
const h=1.661;
let r=w/(h*h);
let bmi=r.toFixed(2);
bmi=30.23;
if(bmi<18.5){
    console.log("your bmi is: ",bmi);
    console.log("And you are underweight.");
}
else{
    if(bmi>=18.5 && bmi<=24.9){
        console.log("your bmi is: ",bmi);
        console.log("And you are Normal.");
    }
    else if(bmi>=25 && bmi<=29.9){
        console.log("your bmi is: ",bmi);
        console.log("And you are Overweight.");
    }
    else{
        console.log("your bmi is: ",bmi);
        console.log("And you are Obese.");
    }

}