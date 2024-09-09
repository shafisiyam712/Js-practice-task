//Count how many times a string has the letter a or A
const name='Hello I am shafi.I am doing SAT for USA admission'
let c=0,b=0;
for(const letter of name){
    if(letter=='a')
        c++;
    else if(letter=='A')
        b++;
}
console.log("a has :",c+" times");
console.log("A has :",b+" times");
