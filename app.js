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

