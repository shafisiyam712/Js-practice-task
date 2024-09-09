// Capitalize Every first Letter of each word in a String

//using normal method
// const name='Capitalize Every first Letter of each word in a String'
// let capital=''
// capital=capital+name[0].toUpperCase()

// for(let i=1; i<name.length; i++){
//    if(name[i]===' '){
//     capital=capital+name[i]
//     capital=capital+name[i+1].toUpperCase()
//     i++
//    }
//    else
//    capital=capital+name[i]

// }
// console.log(name);

// console.log(capital);

const name='Capitalize Every first Letter of each word in a String'
const words=name.split(' ')// capital,every,first,... 
let capital=''
for(let word of words ){
    const tem=word.split('')//c,a,p,i,t,a,l
    tem[0]=tem[0].toUpperCase()//c->C
    capital+=tem.join('')+' '//Capital
}
console.log(capital);







