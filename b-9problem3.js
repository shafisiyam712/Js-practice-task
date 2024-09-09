function deleteInvalid(arr){
    if(!Array.isArray(arr)){
        return 'INVALID'
    }
    let numbers=[]
    for(let numb of arr){
        if(typeof numb=='number' && !isNaN(numb))
            numbers.push(numb)
    }
        return numbers

}
const arr=[3,5,'siyam',{name:2},NaN]
const result=deleteInvalid(arr);
console.log(result);
