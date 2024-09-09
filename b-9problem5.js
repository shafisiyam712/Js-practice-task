function monthlySaving(arr,lvcost){
    if(!Array.isArray(arr) || typeof lvcost!=='number'){
        return 'INVALID'
    }
    let income=0
    for(let tk of arr){
        if(tk<3000)
            income+=tk
         else{
            tk=tk-(tk*0.20)
            income+=tk
         }
    }
    const left=income-lvcost
    if(left>=0)
        return left
   else
        return 'earn more'

}
const arr=[900,2700,3400]
const lvcost=10000
const result=monthlySaving(arr,lvcost);
console.log(result);
