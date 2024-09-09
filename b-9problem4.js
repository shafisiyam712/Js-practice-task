const object={
    name:'shafisiyam',
    birthYear: 1998,
    siteName:'google',
}
console.log("The password is :",password(object));

function password(ob){
    if(ob.name=='' || ob.siteName=='' || ob.birthYear=='' || ob.birthYear.toString().length<4){
        return 'invalid input'
    }
    let site=ob.siteName[0].toUpperCase()+ob.siteName.slice(1)
    let newpass=site+'#'+ob.name+'@'+ob.birthYear;
    return newpass
}
//slice(1) dara catination korle baki letter gulo chole ashbe