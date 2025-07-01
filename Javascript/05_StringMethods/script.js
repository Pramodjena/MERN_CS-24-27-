// String Methods

// let str = "Hello World!";
// console.log(str.length);

// let myCollege = "LIT ITM-B";
// console.log("The output length is:", myCollege.length);
// console.log(`The output length is: ${myCollege.length}`);

// let str1 = "LIT";
// let str2 = "ITMA";
// let output = str1 + " " + str2;
// console.log(output);

// let myName = "    Pramod  ";

// let myBankLastFourDigit = "1234";
// let maskedBankAc = myBankLastFourDigit.padStart(16, "*");

// let myPhoneNo = "085";
// let myMaskPhoneNo = myPhoneNo.padStart(10, "*");

// let smile = "😊";

// Task :
// let myname = prompt("Enter your name");
// console.log(myname[0]);
// console.log(myname[myname.length - 1]);

//? task-1 :
// Find out the spaces from both the end

let myName = "    LIT     ";
let actualChar = myName.trim().length; // 3
let totalLength = myName.length; // 12
let startSpace = myName.trimEnd().length; // 7
let endSpace = totalLength - startSpace; // 5
// console.log(actualChar); // 3

//? task-2:
// Find out a special char (@) in a given string

// let email = "litIndia@gmail.com";
// let isPresent = email.includes("@");
// let isPresentHash = email.includes("#");
// console.log(isPresent); // true
// console.log(isPresentHash); // false

let sentence = "I have a pen and a pencil";
// sentence[0] = "U";
// console.log(sentence.includes("pen")); // true
// console.log(sentence.replace("pen", "marker"));

// let lastFour = "9366";
// let maskedAadhar = lastFour.padStart(12, "*");
// console.log(maskedAadhar);

// console.log(sentence.indexOf("a"));
// console.log(sentence.charAt(5));
