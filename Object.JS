// object 
// const student = {
//     name: "Priyanshu",
//     age: 20,
//     course: "Web Development"
// };

// console.log(student);

// // object Syntax

// const car = {
//     brand:"KIA",
//     model:"M45",
//     color:"Black"
// };

// console.log(car);

// // Object Properties Uses

// const studentID = {
//     name:"Ronit",
//     age: 21,
// }

// console.log(studentID.name);
// console.log(studentID.age);

// // Bracket Notation 

// console.log(studentID["name"]);
// console.log(studentID["age"]);

// // Property Add 

// const ID = {
//     name: "Rahul"
// };

// ID.age = 20;
// ID.city = "Mumbai";

// console.log(ID);

// // Property Delete
// delete ID.city;

// // Function in Object 

// const identity = {
//     name: "Jackson",

//     greet: function () {
//         console.log("Welcome");
//     }
// };
// identity.greet();

// // this keyboard 

// const name = {
//     name: "Rahul",

//     intro: function (){
//         console.log("My Name is " + this.name);
//     }
// };
// name.intro();

// // Nested Object 
// const students = {
//     name: "Rahul",

//     address: {
//         city: "Delhi",
//         state: "Delhi"
//     }
// };
// console.log(students.address.city);

// // Array Object 

// const Card = [
//     {
//         name: "Amit",
//         age: 20
//     },
//     {
//         name: "Amit",
//         age: 21
//     },
//     {
//         name: "Amit",
//         age: 23
//     }
// ]

// console.log(Card[1].name);

// // Object Destructing 

// const employee = {
//     name: "Rahul",
//     age: 20
// };

// const { name, age } = employee;

// console.log(name);
// console.log(age);

// Rename While Destructuring

// const employees = {
//     name: "Joy",
//     age: 21
// };

// const { name: studentName } = employees;
// console.log(studentName);

// // Default Value

// const employeeID = {
//     name: "Rahul"
// };

// const { age = 18 } = employeeID;
// console.log(age);

// // Object.keys()

// const object = {
//     name: "Rahul",
//     age: 20
// };

// console.log(Object.keys(object));

// // Object.values()

// console.log(Object.values(object));

// // Object.entries()

// console.log(Object.entries(object));

// Object.assign() 

// const obj1 = {
//     a: 10
// };

// const obj2 = {
//     b: 20
// };

// const obj3 = Object.assign({},obj1, obj2);
// console.log(obj3);

// Spread Operator 

// const obj1 = {
//     name: "Rahul"
// };

// const obj2 = {
//     age: 20
// };

// const student = {
//     ...obj1,
//     ...obj2
// };
// console.log(student);

// for...in Loop

// const student = {
//     name: "Rahul",
//     age: 20,
//     city: "Delhi"
// };
// for (let key in student){
//     console.log(key,student[key]);
// }

// hasOwnProperty()

// const student = {
//     name: "Rahul"
// };
// console.log(student.hasOwnProperty("name"));
// console.log(student.hasOwnProperty("age"));

// Object.freeze()

// const student = {
//     name: "Rahul"
// };
// Object.freeze(student);
// student.name = "Amit";
// console.log(student.name);

// Object.seal()

// const student = {
//     name: "Rahul"
// };
// Object.seal(student);
// student.name = "Amit";
// console.log(student.name);

// Optional Chaining (?.)

// const student = {
//     name: "Rahul"
// };
// console.log(student.address?.city);

// Nullish Coalescing

// const student = {
//     name: "Rahul"
// };

// console.log(student.city ?? "No City");

// Object Short Property                           

// const name = "Rahul";
// const age = 20;

// const student  = {
//     name,
//     age
// };
// console.log(student);

// // Computed Property

// const key = "email";
// const user = {
//     [key]: "abc@gmail.com"
// };
// console.log(user);

// Object Clone 

// const obj1 = {
//     name: "Rahul"
// };
// const obj2 = {
//     ...obj1
// };
// console.log(obj2);

// // JSON Object

// const student = {
//     name: "Rahul",
//     age: 20
// };
// const jsonData = JSON.stringify(student);
// console.log(jsonData);

// JSON - Object

// const data = 
// '{"name":"Rahul", "age":20}';
// const student = 
// JSON.parse(data);
// console.log(student);

// //  Object Constructor

// const person = new Object();
// person.name = "Rahul";
// person.age = 20;
// console.log(person);

// Factory Function 
 
// function createStudent(name,age){
//     return{
//         name,
//         age
//     };
// }
// const s1 = createStudent("Rahul", 20);
// console.log(s1);

// // Constructor Function

// function Student(name, age){
//     this.name = name;
//     this.age = age;
// }
// const s1 = new 
// Student("Rahul", 20);
// console.log(s1);

// Object Comparison 

// const obj1 = {
//     name: "Rahul"
// };
// console.log(obj1 == obj2);
// console.log(obj1 === obj2);

// Shallow Copy

// const obj1 = {
//     name: "Rahul"
// };
// const obj2 = {...obj1 };
// console.log(obj2);

// Deep Copy

// const obj1 = {
//     name: "Rahul",
//     address: {
//         city:"Delhi"
//     }
// };
// const obj2 = structuredClone(obj1);
// obj2.address.city = "Mumbai";
// console.log(obj1.address.city);
// console.log(obj2.address.city);


