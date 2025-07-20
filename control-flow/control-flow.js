                           //     control flow

// 1. Write code that checks if the variable `num` is greater than 10. If it is, print "Greater than 10".
// let num = 15; // You can change this value to test
 
/* let num = 15;
   if(num > 10){
           console.log("greater than 10"); // Answer = greater than 10
} */

// 2. Write code that checks if the variable `num` is greater than or equal to 0. If it is, print
// "Non-negative"; otherwise, print "Negative".
// let num = -3; // You can change this value to test 

/* let num = -3;
   if(num >= 0){
          console.log("positive")
}
else{
          console.log("negative")    // Answer = positive
} */

// 3. Write code that checks the variable `score` and prints a grade based on the following criteria:
// - "Excellent" for scores 90 and above
// - "Good" for scores between 70 and 89
// - "Needs Improvement" for scores below 70
// let score = 85; // You can change this value to test

// let score = prompt("Enter the score");
// if(score >= 90){
//    console.log("Excellent");
// }else if(score >= 70 && score <= 89){
//    console.log("good");
// }else{
//    console.log("Need Improvement")
// }

// 4. Write code that uses a `switch` statement to print the name of the day based on the variable
// `day`. Use the following values:
// - 1 for "Monday"
// - 2 for "Tuesday"
// - 3 for "Wednesday"
// - 4 for "Thursday"
// - 5 for "Friday"
// - 6 for "Saturday"
// - 7 for "Sunday"
// let day = 4; // You can change this value to test

/* var day = Number(prompt("Enter the day(1,2,3,4,5,6,7)"));
switch(day){
          case 1:
                    console.log("Monday");
                    break;
          case 2:
                    console.log("Tuesday");
                    break;
          case 3:
                    console.log("wednesday");
                    break;
          case 4:
                    console.log("thursday");
                    break;
          case 5:
                    console.log("friday");
                    break;
          case 6:
                    console.log("saturday");
                    break;
          case 7:
                    console.log("sunday");
                    break;
          default: 
                    console.log("Invalid day");                             

} */


// 5. Write code that checks if the variable `num` is between 10 and 20 (inclusive). Print "In range"
// if it is, otherwise print "Out of range".
// let num = 15; // You can change this value to test

/* let num = 4;
if(num >= 10 && num >=20){
          console.log("In range");
}
else{
          console.log("out of range");
} */

// 6. Write code that checks if the variable `num` is positive. If it is, then check if it is greater than
// 100. Print "Large Positive" if it is greater than 100; otherwise, print "Small Positive".
// let num = 120; // You can change this value to test

/* let num = 120;
if(num > 0)
if(num > 100){
          console.log("big positive");
}else{
          console.log("small negative");  // Answer = big positive
}else{
       
}
 */

// 7.Write code that checks if the variable `num` is even or odd. Print "Even" if it is even, and
// "Odd" if it is odd.
// let num = 7; // You can change this value to test    

// /* let num = 9;
// if(num % 2 === 0){
//           console.log("Even")
// }else{
//           console.log("odd")   // Answer = odd
// } */

// 8. Write code that uses a `switch` statement to print the type of vehicle based on the variable
// `vehicleType`. Use the following values:
// - "car" for "Car"
// - "bike" for "Bike"
// - "truck" for "Truck"
// - "other" for "Other"
// Make sure to include a `default` case for any other value.
// let vehicleType = "plane"; // You can change this value to test

// /* let vehicleType =Number(prompt("Enter the number:(1,2,3,4)"));
// switch(vehicleType){
//    case 1:
//       console.log("Car");
//       break;
//    case 2:
//       console.log("Bike");
//       break;
//    case 3:
//       console.log("Truck");
//       break;
//    case 4:
//       console.log("Other");
//       break;
//    default:
//       console.log("note a valid number");
//       break;
// } */

// // 9.Write code that classifies the age of a person based on the variable `age` and prints:
// // - "Child" for ages less than 13
// // - "Teenager" for ages between 13 and 19
// // - "Adult" for ages 20 and above
// // let age = 16; // You can change this value to test

// // let age = Number(prompt("Enter the value"));

// // if(age <= 13){
// //    console.log("Child");
// // }else if(age >= 13 && age <= 19){
// //    console.log("Teenager");
// // }else{
// //    console.log("Adult");
// // }


// // 10.Write code that uses a `switch` statement to print a message based on the variable `month`.
// // Use the following values:
// // - 1 for "January"
// // - 2 for "February"
// // - 3 for "March"
// // - 4 for "April"
// // - 5 for "May"
// // - 6 for "June"
// // - 7 for "July"
// // - 8 for "August"
// // - 9 for "September"
// // - 10 for "October"
// // - 11 for "November"
// // - 12 for "December"

//  var month = Number(prompt("Enter the day(1,2,3,4,5,6,7,8,9,10,11,12)"));
// switch(month){
//           case 1:
//                     document.write("Jaunary");
//                     break;
//           case 2:
//                     console.log("Fabruary");
//                     break;
//           case 3:
//                     console.log("March");
//                     break;
//           case 4:
//                     console.log("May");
//                     break;           
//           case 5:
//                     console.log("June");
//                     break;
//           case 6:
//                     console.log("July");
//                     break;
//           case 7:
//                     console.log("August");
//                     break;
//           case 8:
//                     console.log("September");
//                     break;
//           case 9:
//                     console.log("October");
//                     break; 
//           case 10:
//                     console.log("Nuvember");
//                     break; 
//           case 11:
//                     console.log("September");
//                     break; 
//           case 12:
//                     console.log("December");
//                     break;                               
                            
//           default: 
//                     console.log("not a valid value");  
// }