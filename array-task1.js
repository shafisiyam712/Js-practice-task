/*
Write a JavaScript code to reverse the array colors without using the reverse method.

Input: const colors = ['red', 'blue', 'green', 'yellow', 'orange']

Output:

['orange', 'yellow', 'green', 'blue', 'red']
*/
const colors = ['red', 'blue', 'green', 'yellow', 'orange']
let rev_color=[]
for (const num of colors) {
    rev_color.unshift(num);
}
 console.log("reverse in unshift :",rev_color);