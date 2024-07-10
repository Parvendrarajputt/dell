"use strict";
// tyescript is writtng js with more accurate behaviour
// type-script is all about type safety
// Typescript is about static checking
// TS --> JS
// console.log("wesley")
// const user  = {name: "Parvendra"  , age: 19}
// console.log(user.name);
// let greetings: string = "Hellow wesley";
// console.log(greetings);
// let userId = 390223;
// userId.toFixed();
// console.log("The userid is " + userId);
//any
// this just turns off the type checking for the perticuler number 
// function processInput(input: any): any {
//     console.log("Processing:", input);
//     return input;
// }
// let result: any;
// result = processInput("Hello");
// console.log(result); 
// result = processInput(123);
// console.log(result); 
// result = processInput({ key: "value" });
// console.log(result);
// function twoSum (name:any)
// {
//     return name+2;
// }
// console.log(twoSum(true))
// ts passing fucntion syntax
// function signUp(name:string , email:string , passwod:string):string{
//     let sol: string = name +" "+email +" "+passwod;
//     return sol;
// }
// console.log(signUp("Parvendra ", "prvenrjputs@gmail.com" , "@1244"))
// function myValue(address:string) {
//     if (address=="not found") {
//         return 0;
//     }
//     else
//     {
//         return "Sorry"
//     }
// }
// console.log(myValue("not found"))
// objects 
// function createUser ({name:string , isPaid:boolean}) {
//     return {name:string , isPaid:boolean}
// }
// console.log(createUser({name :"wesley" , isPaid:true}));
// function createUser():{name :string , price :number}{
//     return{name :"reactjs" , price: 799};
// }
// type user =  {
//     name:string,
//     email:string,
//     age:number
//     isActive:boolean
// }
// function createUser(user:user):user {
//     return {name:" " , email: " ",age:90, isActive: true , }
// }
// createUser({name:"Parvendra" , email: "Rajput",age:90, isActive: true , })
// type User = { 
//     readonly _id :number,
//     name :string,
//     email :string,
//     isActive: boolean,
//     cardDetails?: string
// }
// let  myUser:User = {
//     _id:1234567890,
//     email :"prvenrjputs@gmail.com",
//     name : "Parvendra Rajput",
//     isActive:true,
// }
// console.log(myUser)
// function createUser (u: User)
// {
// }
// ++++++++++++++++++++++++++++++++++++++ARRAY+++++++++++++++++++++++++++++++++++++++++++++++
// const superHero:string []  = []; 
// const superPower:Array<number>= []
// superHero.push("spiderman")
// console.log(superHero)
// ++++++++++++++++++++++++++++++++++Union in type script++++++++++++++++++++++++++++++++++++++++++++
// let number :number | string=10;
// number =10;
// console.log(typeof(number))
// number="wesley"
// console.log(typeof(number))
// let array1 :number[]=[10,20,40];
// let array2: string[]=["hello", "how ", "are" , "you"];
// let array3: (string| number)[]= [1,2,3,4,5,"casj" , "hellow"];
// console.log(array3)
// ++++++++++++++++++++++++++++++++++++++++++++tuples in TS++++++++++++++++++++++++++++++++++++++++++
// in order to follow the same syntax and order we use this touple concept 
// let tUser : [boolean , number , string]
// tUser= [true , 89 , "hellow "]
// console.log(tUser)
// +++++++++++++++++++++++++++++++++++++++enum++++++++++++++++++++++++++++++++++++++++++
// enum Helow {
//     firstNumber=1,
//     secondNumber,
//     thirdNumber = "heksednksdbk"
// }
// console.log(Helow.thirdNumber)
// ++++++++++++++++++++++++++++++++++++++INTERFACE IN TS++++++++++++++++++++++++++++++++++++++++++++++++++
//Iterface proide us inheritance as well 
// interface userInformation {
//     name: string,
//     email: string,
//     age: number,
//     googleId?: string,
//     startTrial(): string;
// }
// interface userInformation {
//     surName: string
// }
// interface Admin extends userInformation 
// {
//     Role: "Admin"  | "TA" | "Learner"
// }
// const info = {
//     name: "Parvedra",
//     email: "weley@gmail.com",
//     age: 90,
//     startTrial: () => {
//         return "start triel is executed   "
//     },
//     surName: "Rajput",
//     Role : "Admin"
// }
// console.log(info)
///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
