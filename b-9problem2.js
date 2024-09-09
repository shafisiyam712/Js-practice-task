function checkName(check){
    if(typeof check!=='string'){
        return 'INVALID'
    }
    let result=false
    let lastletter=check.slice(-1).toLowerCase()
    const array=['a','e','i','o','u','w']
    for(let char of array){
        if(char===lastletter)
            result=true
    }
    return result? 'Good name' : 'Bad name'
}
const name='Siyam'
const result=checkName(name);
console.log(result);

//slice(-1) last index return kore