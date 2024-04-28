const id = 5466;
let age = 22;
var name = "rajput";
password = "kushal123";

{
    const id = 5066;
    let age = 23;
    var name = "Kushal";
    password = "kushal@123";//dynamic type
}


//id = 678;  assignment to constant not allowed
console.log(id);

console.log(name);

console.log(age);

console.log(password);

console.table([id,name,age,password]);

/*
const  and  let has functional scope and var has global  scope
always use let foget var

*/

// output::
// kushal@Kushal:~/Desktop/backend/js$ node 04_vars.js
// 5466
// Kushal
// 22
// kushal@123
// ┌─────────┬──────────────┐
// │ (index) │ Values       │
// ├─────────┼──────────────┤
// │ 0       │ 5466         │
// │ 1       │ 'Kushal'     │
// │ 2       │ 22           │
// │ 3       │ 'kushal@123'
