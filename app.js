// CHP # 21-25
// Q # 1
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName + " " + lastName;
// alert("welcome" + " " + fullName);

// Q # 2
// var phoneModel = prompt("your favourite mobile phone");
// var length = phoneModel.length;
// document.write("My favorite phone is:" + " " + phoneModel);
// document.write("</br>")
// document.write("Length of string:" + " " + length)

// Q # 3
// var string = "Pakistani"
// document.write("Index of 'n':" + " " + string.indexOf("n"))

// Q # 4
// var string = "Hello World"
// document.write("Last index of 'l':" + " " + string.lastIndexOf("l"))

// Q # 5
// var string = "Pakistani"
// document.write("Character at Index 3:" + " " + string[3])

// Q # 6
// var firstName = prompt("enter your first name");
// var lastName = prompt("enter your last name");
// var fullName = firstName + " " + lastName;
// alert("welcome" + " " + fullName);

// Q # 7
// var city = "Hyderabad";
// document.write("City: " + city);
// city = city.replace("Hyder", "Islam");
// document.write("<br>")
// document.write("After replacement: " + city);

// Q # 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write(message)
// message = message.replace(/and/g, "&")
// document.write("<br>")
// document.write(message)

// Q # 9
// var string = "472"
// document.write("string: " + string)
// document.write("<br>")
// var number = parseInt(string)
// document.write("number: " + number)

// Q # 10
// var userInput = prompt("write something")
// document.write("User Input: " + userInput)
// document.write("<br>")
// document.write("Upper Case: " + userInput.toUpperCase())

// Q # 11
// var userInput = prompt("write something")
// document.write("User Input: " + userInput)
// document.write("<br>")
// var firstLetter = userInput[0].toUpperCase()
// var otherLetters = userInput.slice(1).toLowerCase()
// var titleCase = firstLetter + otherLetters
// document.write("Title Case: " + titleCase)

// Q # 12
// var num = 35.36;
// document.write(num)
// document.write("<br>")
// var string = num.toString()
// document.write(string)

// // Q # 13
// var chr = "@!,."
// var userName = prompt("enter your name")
// var matchFound = "no"
// for(var i=0; i<=chr.length; i++);
// if(userName === chr[i]){
//     matchFound = "yes"
//     alert("please enter a valid username")
// }
// if(matchFound === "no"){
//     alert("ok")
// }

// // Q # 14
// var bakeryItem = ["cake", "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("search cookies").toLowerCase()
// var match = false
// for(var i=0; i<=bakeryItem.length; i++)
// if(userInput === bakeryItem[i]){
//     match = true
//     document.write(userInput + " is <b>available</b> at index " + i + " in our bakery")
// }
//     if(match === false){
//     document.write("We are sorry. " + userInput + " is <b>not available</b> in our bakery")
// }

// Q # 15
// CANT

// // Q # 16
// var university = "University of Karachi";
// var arr = university.split("")
// var tempArr = [] 
// for(var i=0; i < university.length; i++) {
//     console.log(arr[i])
// tempArr.push(arr[i])
// }
// document.write(tempArr.join(""))

// Q # 17
// var userInput = prompt("type something")
// document.write("User Input: " + userInput)
// document.write("</br>")
// var copy = userInput.slice(-1)
// document.write("Last character of  input: " + copy)

// Q # 18 ?
// var text = "The quick brown fox jumps over the lazy dog"
// text = text.toLowerCase()
// var text1 = text.split(" ")
// for(var i=0; i <= text1.length; i++){
//     if(text1[i] === "the"){
//         document.write(text1.lastIndexOf("the"))
//         break
//     }
// }


// CHP # 26-30

// // Q # 1
// var num = +prompt("enter number")
// document.write("Number: " + num)
// document.write("<br>")
// document.write("round of value: " + Math.round(num))
// document.write("<br>")
// document.write("floor value: " + Math.floor(num))
// document.write("<br>")
// document.write("Ceil value: " + Math.ceil(num))


// Q # 2
// var num = +prompt("enter a negative number")
// document.write("Number: " + num)
// document.write("<br>")
// document.write("round of value: " + Math.round(num))
// document.write("<br>")
// document.write("floor value: " + Math.floor(num))
// document.write("<br>")
// document.write("Ceil value: " + Math.ceil(num))


// Q # 3

// var num = -4
// document.write("The absolute value of " + num + " " + " is " + Math.floor(-num))

// Q # 4
// var num =Math.random() * 5 + 1
// var num1 = Math.round(num)
// document.write("random dice value: " + num1)

// Q # 5
// var num =Math.random() + 1
// var num1 = Math.round(num)
// if(num1 === 1){
//     document.write("random coin value: Tails")
// }
// else{
//     document.write("random coin value: Heads")
// }


// Q # 6
// var num =Math.random() * 99 + 1
// var num1 = Math.round(num)
// document.write("random number between 1 and 100: " + num1)


// Q # 7
// var weight = prompt("enter your weight in kg")
// var integ = parseInt(weight)
// document.write("The weight of user is " + integ + " kilograms")

// Q # 8
// var userNum = +prompt("enter number between 1 to 10")
// var num1 = Math.random() * 9 + 1
// var num = Math.round(num1)
// if(userNum === num){
// document.write("Congratulation")
// }
// else{
//     document.write("Try Again")
// }


// CHP # 30-34

// Q # 1
// var date = new Date()
// document.write(date)

// // Q # 2

// var date = new Date().getMonth()
// if(date === 0){
//     document.write("Current month: January" )
// }
// else if(date === 1){
//     document.write("Current month: February" )
// }
// else if(date === 2){
//     document.write("Current month: March" )
// }
// else if(date === 3){
//     document.write("Current month: April" )
// }
// else if(date === 4){
//     document.write("Current month: May" )
// }

// Q # 3

// var date = new Date().getDay()
// if(date === 0){
//     document.write("Current month: Sunday" )
// }
// else if(date === 1){
//     document.write("Current month: Monday" )
// }
// else if(date === 2){
//     document.write("Current month: Tuesday" )
// }
// else if(date === 3){
//     document.write("Current month: Wednesday")
// }
// else if(date === 4){
//     document.write("Current month: Thursday")
// }

// Q # 4

// var date = new Date().getDay()
// if(date === 0 || 6){
//     document.write("It's Fun day")
// }


// Q # 5

// var date = new Date().getDate()
// if(date <=15){
//     document.write("First fifteen days of month")
// }
// else if(date >=15){
//     document.write("Last days of month")
// }

// Q # 6
// document.write("Current Date: " + new Date());
// document.write("<br>")
// document.write("Elapsed milliseconds since January 1, 1970: " + new Date().getTime())
// document.write("<br>")
// var old = new Date().getTime()
// var min = old / 1000 /60
// var round = Math.round(min)
// document.write("Elapsed minutes since January 1, 1970: " + round)

// // Q # 7
// var time = new Date().getHours()
// if(time < 12){
//     document.write("It's AM")
// }
// else{
//     document.write("It's PM")
// }

// Q # 8
// var time = new Date("dec 31 2020")
// document.write("Later date: " + time)

// Q # 9

// var pass = new Date().getTime("june 18 2015")
// var passDays = pass / 1000/60/60/365
// var passround = Math.round(passDays)
// document.write(passround + " days have passed since 1st Ramadan, 2015")

// Q # 10
// var date = new Date()
// var beg = new Date().getTime("jan 01 2015")
// var min = beg / 1000
// var round = Math.round(min)
// document.write("On reference date " + date + " , " + round + " seconds has passed since beginning of 2015")

// Q # 11
// var date = new Date()
// document.write("current date: " + date)
// date.setHours(19)
// document.write("<br>")
// document.write("1 hours ago, it was " + date)

// Q # 12
// var date = new Date()
// document.write("current date: " + date)
// date.setFullYear(1923)
// document.write("<br>")
// document.write("100 years back, it was " + date)

// Q # 13
// var userAge = +prompt("enter your age")
// var year = new Date().getFullYear()
// var birthYear = year - userAge
// document.write("your age is " + userAge)
// document.write("<br>")
// document.write("your birth year is " + birthYear)

// Q # 14
// var name = "ABC Customer"
// var month = "February"
// var unit = 410
// var chg = 16
// var lateChg = 350
// var netAmount = unit * chg
// var dueChg = netAmount + lateChg 
// document.write("<h1> K-Electric Bill </h1>")
// document.write("<br>")
// document.write("Customer Name: " + name)
// document.write("<br>")
// document.write("Month: " + month)
// document.write("<br>")
// document.write("Number of Units: " + unit)
// document.write("<br>")
// document.write("Charges per Units: " + chg)
// document.write("<br>")
// document.write("<br>")
// document.write("Net Amount Payable (witin Due Date): " + netAmount)
// document.write("<br>")
// document.write("Late payment surcharge: " + lateChg)
// document.write("<br>")
// document.write("Gross Amount Payable (after Due Date): " + dueChg)
// document.write("<br>")




