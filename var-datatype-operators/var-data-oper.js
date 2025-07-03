                              // variables assignment

// 1. Declare variables using let, var, and const to store a name, age, and favorite color
// var Name = "faizan malik";
// let age = 22;
// const color = "black";


// 2. Create variables inside and outside a block ({}) using let and const.
// const z = 10;
// let y = 20;
// {
//           let Block = 15;
//           const Block2 = 30;

//           console.log(Block)
//           console.log(Block2)
// }

// console.log(z)
// console.log(y)


// 3. Follow JavaScript naming conventions to create variables for a username, email address,and password.
// let userName = "faizan_malik";
// let userEmail = "faizanmalik123@gmail.com";
// let userPassword = "Faizan@123";
  

// 4. a variable inside a block ({})  and try accessing it outside  
// {
//           let a = 25;
//           let b = 5;
//           let c = a + b;
// }
// console.log(c);

// {
//           var count = 13;
//           let count = 12;
          
//           console.log(count);
// }


// 5. Declare a variable with let for a number. Then assign it a string value and console.
// let Num = "faizan";
// console.log(Num);


// 6. Try creating variables with names that start with numbers or contain special characters.Discuss why some names are invalid
// let 1faizan = 34;

//  7. Declare variables with let and const in different scopes (e.g., global scope, block scope).Discuss their visibility and scope
// let a = 37;
// {
//           const a = 39;
// }

// . Declare a variable without assigning a value.
// let x;
// console.log(x); // Answer = undefined

// 9. Create variables for a first name, last name, and age. Apply camelCase naming convention

// let firstName = "faizan";
// let lastName = "malik";
// let age = 22;


                              //  Datatype assignment

// What are the two main categories of data types in JavaScript?

// 1 primitive datatype
// 2 Non primitive datatype

// What is a primitive data type? List all the primitive data types in JavaScript.

// 1 string
// 2 number
// 3 boolean
// 4 null
// 6 undifined

// let a = "faizan malik";
// console.log(typeof (a)); // string

// What will the following code output?

// console.log(typeof 42); // Number
// console.log(typeof 'Hello'); // string
// console.log(typeof true); // boolean
// console.log(typeof { name: 'John' }); //object
// console.log(typeof [1, 2, 3]); //array

// What data type is returned by the expression '3 + "3"'?

// let A = 3;
// let B = "3";
// let c = A + B;
// console.log(typeof (c)); // string

// . What will be the result of the following code ?.

// let num = 10;
// let str = '10';
// console.log(num == str); //true
// console.log(num === str); // false

// Explain the difference between `==` and `===` in JavaScript.

// == is a Number compar 
// === is a datatype compar

// What data type is used to represent a sequence of characters in Javascript

// string

//  what will be the output of the following code?


// let obj = { a: 1, b: 2 }; //objact
// console.log(typeof obj);
// console.log(typeof obj.a); //Number

// What are the datatypes of `a`, `b`, `c`, `d`, `e`, `f`, and `g`?Identify the datatype:

// let a = 42;              // number
// let b = "JavaScript";    // string
// let c = false;           // boolean
// let d = undefined;       // undefined
// let e = null;            // null
// let f = { key: "value" };// objact
// let g = [1, 2, 3];       // array

// What is the datatype of the following values?

// console.log(typeof "Hello World");   //string
// console.log(typeof 12345);           // number
// console.log(typeof true);            // boolean  
// console.log(typeof { foo: "bar" });  // objact
// console.log(typeof [1, 2, 3]);       // objact
// console.log(typeof function() {});   //fun
// console.log(typeof undefined);       //undefinad

// What will be the result of the following codw

// let x = 10;
// let y = "10";
// console.log(typeof x);  // number
// console.log(typeof y); // string

// Determine the datatype of the result of these expressions:

// console.log(typeof (10 + 20)); //Number
// console.log(typeof (10 - "2")); //number
// console.log(typeof ("5" * 3)); //number
// console.log(typeof ("hello" / 2)); //number

                    //       (Operators Assignment)
                    //       (assign oprators)          

// 1. Assign `a = 10` and `b = 5`. Log the result of `a + b` to the console
// let a = 10;
// let b = 5;
// console.log(a + b); //Answer = 15


// 2. Assign `a = 20` and `b = 8`. Log the result of `a - b` to the console.
// let a = 20;
// let b = 8;
// console.log(a - b); //Answer = 12


// 3. Assign `a = 4` and `b = 7`. Log the result of `a * b` to the console.
// let a = 4;
// let b = 7;
// console.log(a * b); //Answer = 28


// 4. Assign `a = 16` and `b = 4`. Log the result of `a / b` to the console.
// let a = 16;
// let b = 4;
// console.log(a / b); //Answer = 4


// 5. Assign `a = 13` and `b = 4`. Log the result of `a % b` to the console.
// let a = 13;
// let b = 4;
// console.log(a % b); //Answer = 1


// 6. Assign `num = 10`. Use `num += 7`, `num -= 3`, `num *= 2`, and `num /= 5`, logging the value
// of `num` after each operation.
// let num = 10;
// num += 7;
// console.log(num); //Answer = 17
// num -= 3;
// console.log(num); //Answer = 14
// num *= 2;
// console.log(num); //Answer = 28
// num /= 5;
// console.log(num); //Answer = 5.6


// 7. Assign `a = 10` and `b = 10`. Log `a == b` to the console.
// let a = 10;
// let b = 10;
// console.log(a == b); // Answer = true


// 8. Assign `a = 10` and `b = '10'`. Log `a === b` to the console.
// let a = 10;
// let b = '10';
// console.log(a === b); // Answer = false


// 9. Assign `a = 15` and `b = 20`. Log whether `a` is greater than, less than, or equal to `b`. let
// // a = 15;
// // let b = 20;
// // if (a > b) {
// // console.log('greater than');
// // } else if (a < b) {
// // console.log('less than');
// // } else {
// // console.log('equal to');  //Answer = less than
// }                              


// 10. Assign `x = true` and `y = false`. Log the result of `x && y` and `x || y` to the console.
// let x = true;
// let y = false;
// console.log(x && y); // Answer = false
// console.log(x || y); // Answer = true


// 11. Assign `x = false`. Log the result of `!x` to the console.
// let x = false;
// console.log(!x); // Answer = true


// // 12. Assign `age = 22`. Use a ternary operator to log `'Adult'` if `age` is 18 or older, and `'Minor'`
// otherwise.
// let age = 22;
// console.log(age >= 18 ? 'Adult' : 'Minor');  //Answer = Adult


// 13. Assign `value = 100`. Log the result of `typeof value` to the console.
// let value = 100;
// console.log(typeof value);  // Answer = Number


// 14. Assign `value = '5'`. Log the result of `+value` to the console.
// let value = '5';
// console.log(+value);  // Answer = 5


// 15. Assign `value = 7`. Log the results of `++value`, `value++`, `--value`, and `value--` to the
// console.
// let value = 7;
// console.log(++value); // Pre-increment  // Answer = 8
// console.log(value++); // Post-increment // Answer = 8
// console.log(--value); // Pre-decrement  // Answer = 8
// console.log(value--); // Post-decrement // Answer = 8


                              //    (Arithmetic operators)


// 1. Addition:
// let a = 10;
// let b = 12;
// let c = a + b;
// console.log(c);     // Answer = 22 

// 2. Subtraction:
// let a = 20;
// let b = 12;
// let c = a - b;
// console.log(c);    // Answer = 8


// 3. Multiplication:
// let a = 10;
// let b = 12;
// let c = a * b;
// console.log(c);    // Answer = 120


// 4. Addition:
// let a = 20;
// let b = 5;
// let c = a / b;
// console.log(c);  // Answer = 4


// 5. modulus
// let a = 5;
// let b = 2;
// let c = a % b;
// console.log(c);   // Answer = 1


// 6. Basic Assignment:
//  Create a variable num and assign it the value 10. Use the += operator to add 5 to
// num, -= to subtract 3, *= to multiply by 2, and /= to divide by 4. Log the final
// value of num after each operation.
// let num = 10;
// num += 5;
// console.log(num);  // Answer = 15
// num -= 3;
// console.log(num);  // Answer = 12
// num *= 2;
// console.log(num);  // Answer = 24
// num /= 4;
// console.log(num);  // Answer = 6


// 7. Equal to:
//  Create two variables, a and b, and assign them values. Use the == operator to
// check if a is equal to b and log the result.
// let a = 10;
// let b = 10;
// let c = (a == b);
// console.log(c);  // Answer = true


// 8. Strict Equality:
//  Create two variables, a and b, and assign them values of different types. Use the
// === operator to check if a is strictly equal to b (both value and type) and log the
// result.
// let a = "10";
// let b = "10";
// let c = (a === b);
// console.log(c); // Answer = true


// 9. Greater than and Less than:
//  Create two variables, a and b, and assign them values. Use the > and <
// operators to compare a and b. Log whether a is greater than, less than, or equal
// to b.
// let a = 22;
// let b = 25;
// let c = a < b;
// console.log(c);  // Answer = true
// let c = a > b;
// console.log(c);    // Answer = false


//                                10. Logical AND/OR:
//  Create two boolean variables, x and y. Use the && operator to combine x and y,
// and the || operator to combine x and y. Log the results of both operations.
//  let a = true;
//  let b = false;
//  let c = a && b;
//  console.log(c);
                                     

   













































