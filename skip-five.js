/*
display odd number from 55 to 85 and skip the numbers divisible by 5.
*/
let n=86;
while(n>=55){
    n--;
    if(n%5==0){
        continue;
    }
    if(n%2 !== 0){
        console.log(n);
    }
    
}