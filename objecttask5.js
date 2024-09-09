//Loop through an object and print the key-value pairs with their types
let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
    };
    for(const prop in myObject){
        // console.log("Key: ",prop ,"| Type: ",`${typeof myObject[prop]}`);
       // console.log(`key: ${prop} | type: ${typeof myObject[prop]}`);
        let value=myObject[prop];
        console.log("Key: ",prop ,"| Type:",typeof(value));

    }
    
    