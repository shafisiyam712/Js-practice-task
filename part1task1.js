//Write a function to convert temperature from Celsius to Fahrenheit.

function converter(tem){
    const f=(tem*(9/5)+32)
    return f
}
const Celsius=39.4
const result=converter(Celsius)
console.log("temperature in fahrenheit :",result);
