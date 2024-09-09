//Write a function to count the number of vowels in a string.

const str='ShafIUddinsiyAmaiuoOOeeeE'
const result=checker(str)
console.log('number of vowels in a string :',result);

function checker(str){
    let a=0,e=0,i=0,o=0,u=0,count=0
    for(const numbs of str.toLowerCase()){
        // if(numbs=='a' || numbs=='e' || numbs=='i' || numbs=='o' || numbs=='u')
        //     count++
        if(numbs=='a')
            a++
        else if(numbs=='e')
            e++
        else if(numbs=='i')
            i++
        else if(numbs=='o')
            o++
        else if(numbs=='u')
            u++
    }
        if(a>=1)
            a=1
        if(e>=1)
            e=1
        if(i>=1)
            i=1
        if(o>=1)
            o=1
        if(u>=1)
            u=1
    
    return (a+e+i+o+u)
}