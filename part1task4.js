/*
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
*/
const str='I am learning Programming to become a programmer'
const result=checker(str)
console.log('Largest word in string is :',result);

function checker(str){
    const words=str.split(' ')//[I, ,am, ,learning, ,....]
    let longwords=''
    for(let word of words){//loop wise check I,....
        if(word.length > longwords.length)//1)1>0 3)2>1
            longwords=word//1)I 3)am
    }
    return longwords
}