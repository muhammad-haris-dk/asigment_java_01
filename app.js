// Q1

var city = prompt("Enter Your City")

if(city === "karachi"){
    alert("Welcome To city of lights");
}

else{
    alert("Sorry..");
}

// Q2

var gender = prompt("Enter Your Gender")

if(gender === "male"){
    alert("Good morning Sir.");
}

else if (gender === "female"){
    alert("Good Morning Ma'am.");
}

else{
    alert("okk....");
}

// Q3

var trafficLights = prompt("Enter Your Signal Lights")

if (trafficLights === "red") {
    alert("Must Stop");
}

else if (trafficLights === "yellow") {
    alert("Ready To Move");
}

else if (trafficLights === "green") {
    alert("Move Now");
}

else{
    alert("Write a only traffic lights colors");
}

// Q4

var fuel = +prompt("enter your current fuel")

if (fuel < 0.25) {
    alert("Please refill your fuel in your car");
}

else{
    alert("please focus your driving");
}

 // Q5

var a = 4;

if (++a === 5) {
    alert("++a === 5 given condition for a is true")
}

var b = 82;

if (b++ === 82) {
    alert("b++ === 83 given condition for b is false")
}

var c = 12;

if (c === 13) {
    alert("condition 2 is true")
}

var materialCost = 20000;

var laborCost = 2000;

var totalCost = materialCost + laborCost;

if (totalCost === laborCost + materialCost) {
    alert("42000")
}

if (true) {
    alert("true")
}

if ("car" < "cat") {
    alert("car is smaller than cat")
}

// Q6

var firstSubject = +prompt("Enter your first subject number")

var secondSubject = +prompt("Enter your second subject number")

var thirdSubject = +prompt("Enter your third subject number")

var totalMarks = +prompt("Enter your total subject marks")

var obtMarks = firstSubject + secondSubject + thirdSubject

var percantage = (obtMarks / totalMarks) * 100;

// var percantage = +prompt("Enter your percantage")



if (percantage >= 80 && percantage <= 100) {
    alert("<b>" + "Marks Sheets" + "<b>" + "<br>" + "<br>" + "Total Marks:" + totalMarks + "<br>" + "Marks Obatined:" + obtMarks + "<br>" + "Percantage:" + percantage + "<br>" + "Grade : A+" + "<br>" + "Remarks : Exellent")
}

else if (percantage >= 70 && percantage <= 80) {
    document.write("<b>" + "Marks Sheets" + "<b>" + "<br>" + "<br>" + "Total Marks:" + totalMarks + "<br>" + "Marks Obatined:" + obtMarks + "<br>" + "Percantage:" + percantage + "<br>" + "Grade : A" + "<br>" + "Remarks : Good")
}

else if (percantage >= 60 && percantage <= 70) {
    document.write("<b>" + "Marks Sheets" + "<b>" + "<br>" + "<br>" + "Total Marks:" + totalMarks + "<br>" + "Marks Obatined:" + obtMarks + "<br>" + "Percantage:" + percantage + "<br>" + "Grade : B" + "<br>" + "Remarks : You need to improve")
}

else if (percantage <= 60) {
    document.write("<b>" + "Marks Sheets" + "<b>" + "<br>" + "<br>" + "Total Marks:" + totalMarks + "<br>" + "Marks Obatined:" + obtMarks + "<br>" + "Percantage:" + percantage + "<br>" + "Grade : Fail" + "<br>" + "Remarks : Sorry")
}

else{
    alert("Please enter your correct marks")
}

// Q7

var game = +prompt("Enter the Secret number")

if (game >=1 && game <= 9) {
    alert("Bingo! Correct")
}

else{
    alert("Close Enough to the correct answer")
}

// Q8

var check = +prompt("Even or odd number cheker machine")

if(check % 2 === 0){
    alert("Even number")
}
else if(check % 3 === 0){
    alert("odd number")
}

else{
    alert("na hi even number hai or na hi odd number hai..")
}

// Q9

var temperature = +prompt("Temperature machine")

if (temperature >= 40) {
    alert("It is to hot outside..")
}

else if (temperature >= 30) {
    alert("The Weather  today is Normal")
}

else if (temperature >= 20) {
    alert("Today's Weather is Cool..")
}

else if (temperature >= 10) {
    alert("OMG! Today's weather is so cool..")
}

else {
    alert("please enter your temperature 10 to 50 ok..")
}

// Q10

var num1 = +prompt("Enter your number")

var opertor = prompt("Enter your opertor")

var num2 = +prompt("Enter your number")

if (opertor === "+") {
    alert(num1 + num2)
}

else if (opertor === "-") {
    alert(num1 - num2)
}

else if (opertor === "/") {
    alert(num1 / num2)
}

else if (opertor === "*") {
    alert(num1 * num2)
}

else{
    alert("Please enter your correct number or character")
}