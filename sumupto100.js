/* 
Write a while loop that adds numbers starting from 1, but stops (using break) as soon as the sum reaches or exceeds 100
*/

let n=0,s=0;
while(n<100){
    s=s+n;
    n++
    if(s>=100){
        console.log(s);
        break;
    }
}
