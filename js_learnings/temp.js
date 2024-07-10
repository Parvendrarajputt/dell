// //spread 
// const firstBowl = ['pawpaw', 'cucumber', 'watermelon'];
// const secondBowl = ['Pineapple', 'Apple', 'banana'];
// const thirdBowl = ['cashew nut', 'Date', 'Strawberry'];

// const fruitMix =  [...firstBowl, ...secondBowl, ...thirdBowl];
// console.log("This is fruit mix via spread" , fruitMix); 

// //rest 
// function collectBowls(...bowls) {
//     return bowls;

// }
// const allBowls = collectBowls(firstBowl,secondBowl,thirdBowl);
// console.log("This are all bowsls ", allBowls)


// +++++++++++++++++++Hoisting++++++++++++++++++++++++++++

// hello();
// console.log(x);


//arrow fucntion behaves like an variable which give error  
// function hello() {
//     console.log("Hellow Javascript!");
// }

// let x=10;


// +++++++++++++++++++Promises++++++++++++++
// const promiseOne = new Promise(function (resolve, reject) {

//     setTimeout(() => {
//             console.log("Async task is completed ");
//             resolve();
//     }, 2000);

// })

// promiseOne.then(function()
// {
//     console.log("Promise consumed ")
// })



// +++++++++++++++++++callbackfucntion+++++++++++
// ek function ko dusre function k ander as a parameter pass karna

// const calculate = (a, b, operation) => {
//     return operation(a, b);
// }

// addition = (a, b) => {
//     return a + b;
// }
// substraction = (a, b) => {
//     return a - b;
// }
// const sol = calculate (20,10 ,substraction);
// console.log( "The substraction", sol)

// const result = calculate(2, 4, addition);
// console.log(result);

// setTimeout(() => {
//     function sayHellow() {
//         console.log("Namaste javascript ")

//     }
//     sayHellow();

// }, 2000);



// ++++++++++++++++Lexical scoping +++++++++++++++++

function outerFunction() {
    let name = "Parvendra";
    function innerFunction() {

        console.log("The name inside inner fucntion is ", name);

    }
    innerFunction();

}
// console.log("The outer fucntion", name);
outerFunction();


// +++++++++++++++++++++Cosures+++++++++++++++++++++++

// function outer() {
//     let name = "ram";
//     function inner() {
//         console.log(name);
//     }
//     return inner;
// }

// const innerFunction = outer();
// innerFunction();

//here when you are returning a fucntion , not only the fucntion will be returned but also full lexical scope will get returned  =this is called closure 



// +++++++++++++++++++++++++++++NULLISH OPERATOR++++++++++++++++++++++++++++++++++++++++++++
// let name = "ram ";
// console.log(name??"Name is not available ");

// let bool = false;

// +++++++++++++++++++++++++++++++++try and catch +++++++++++++++++++++++++++++++

// try {
//     if (bool) {
//         console.log("The boolean value is true");
//     } else {
//         throw new Error("The boolean value is false");
//     }
// } catch (e) {
//     console.log("An error occurred:", e.message);
// }


// +++++++++++++++++++++++++++++++++Async and await+++++++++++++++++++++++++++++++
// function api() {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         console.log("The weater data is feched")
//         resolve(200)
        
//       }, 2000);
//     })
    
// }

// async function apiCall() {
//     console.log("getting data 1")

//     api();
    
// }
// apiCall();

// ++++++++++++++++++++++++++++++++Prototype in js ++++++++++++++++++++++++++++++++++++++++++++

// function Animal() {
//     this.eats = true;
// }


// Animal.prototype.walk = function() {
//     console.log("Animal is walking");
// };


// let rabbit = new Animal();

// rabbit.walk();


// ++++++++++++++++++++++++++++++++Calback fucntion using promise chaining++++++

// const promiseOne = new Promise((resolve, reject) => {
//     let ans = true;
//     if (ans) {
//         console.log("the ans is resolved");
//         resolve(200);
//     } else {
//         reject("Error occurred");
//     }
// });

// promiseOne.then((response) => {
//     console.log("Resolved with:", response);
// }).catch((error) => {
//     console.log("Rejected with error:", error);
// }).finally(() => {
//     console.log("final block is executed ");


// });
