// stack(for primitive data types) and heap (for non-primitive data types)

//stack
let name1 = "Kushal";
let name2 = name1;//copy of   variable is passed to new variable
console.log(name1);//output kushal
console.log(name2);//output kushal
name2 = "rajput";//doesn't affect name1 as copy of variable is passed not reference to variable
console.log(name1);//output kushal
console.log(name2);//output rajput

//heap

let myobj1 = {
    price:100,
    gst: 5,
}

let myobj2 = myobj1;//reference of myobj1 is passed 

console.log(myobj1.price);//price 100
console.log(myobj2.price);//price 100

myobj1.price = 200;
        //or
myobj2.price = 300;
console.log(myobj1.price);//300 (latest change)
console.log(myobj2.price);// 300 (latest change)

/* change in any one object will affect both object as reference to variable is passed */



