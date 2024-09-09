//count the numbers of properties in an object
let student = {
    name: 'Ariana Grande',
    age: 21,
    city: 'Gaibandha',
    isStudent: true
};
let count=0;
for(const prop in student){ 
    count++;
}
console.log('the count is:',count);

//Display the physics marks as output.
const student3 = {
    name: "Hamim Sakep",
    id: 5421,
    physics: {
        subject: "HSC Physics",
        author: "Shahjahan Tapan",
        marks: 30
    }
};
console.log('Her physics mark is',student3.physics.marks);

//For this object below add a property named passenger capacity with value 5

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
car['passenger capacity']=5
console.log(car);
