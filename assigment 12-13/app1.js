// // Q1

// var num = prompt("enter a alphabets")

// if (num === "a") {
//     alert("97")
// }

// else if (num === "b") {
//     alert("98")
// }

// else if (num === "A") {
//     alert("122")
// }

// else if (num === "B") {
//     alert("145")
// }

// // Q2

// var integers = +prompt("Enter your number")

// if (integers >= -100000 && integers <= -1) {
//     alert("negative number")
// }

// else if (integers >=1 && integers <= 1000000) {
//     alert("positive number")
// }

// else if (integers === 0) {
//     alert("Zero")
// }

// else {
//     alert("please enter your correct number")
// }

// // Q3

// var createPassword = prompt("create a password")

// var confirmPassword = prompt("confirm a password")

// if (createPassword === "") {
//     alert("Please enter yoour password")
// }

// else if (createPassword === confirmPassword) {
//     alert("Correct! The password you entered matches the original password..")
// }

// else{
//     alert("Incorrect password")
// }

// // Q4

// var greeting;

// var hours = +prompt("Enter your hours");

// if(hours <= 18){
//     greeting = "Good Day";
//     alert(greeting)
// }
// else{
//     greeting = "Good Evening"
//     alert(greeting)
// }

// Q5

var time = +prompt("Please Enter your time")

if (time >= 0o00 && time < 1200) {
    alert("Good morning")
}

else if (time >= 1200 && time < 1700) {
    alert("Good Afternoon")
}

else if (time >= 1700 && time < 2100) {
    alert("Good Evening")
}

else if (time >= 2100 && time <= 2359) {
    alert("Good Night")
}