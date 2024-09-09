//Check whether a string contains all the vowels a, e, i, o, u

const name='AThioUAaaIuO'

let c=0,b=0,p=0,d=0,f=0;
let z=0;
for(const letter of name.toLowerCase()){
    if(letter=='a')
        c++;
    else if(letter=='e')
        b++;
    else if(letter=='i')
        d++;
    else if(letter=='o')
        z++;
    else if(letter=='u')
        f++;
}
console.log("a has :",c+" times");
console.log("e has :",b+" times");
console.log("i has :",d+" times");
console.log("o has :",z+" times");
console.log("u has :",f+" times");

if(c>=1 && b>=1 && d>=1 && z>=1 && f>=1){
    console.log("yes all of them are in:");
}
else{
    console.log("There are missing some: ");
}
//another way
const str='AEIOu'
let result=false;
if(str.toLowerCase().includes('a' && 'e' && 'i' && 'o' && 'u')){
    result=true
}
else
result=false
    
console.log(result);
console.log(str);


