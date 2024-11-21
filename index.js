// IF STATEMENT
let a = 2;
if (a % 2 == 0) {
    console.log("Result : Even number");
}

// IF-ELSE STATEMENT
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    document.getElementById("demo2").innerHTML = "You are not eligible to vote.";
}
// IF-ELSE-IF STATEMENT
const marks = 55;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 50) {
    console.log("Grade C");
} else {
    document.getElementById("demo3").innerHTML = "FAIL";
}

// NESTED IF
let year = 2000;
if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(" Leap year.");
        } else {
            console.log(" Not a leap year.");
        }
    } else {
        console.log("Leap year.");
    }
} else {
    console.log("Not a leap year.");
}

// SWITCH STATEMENT
let dayNumber = 5;
let resultText = "";

switch (dayNumber) {
    case 1:
        resultText = "Sunday";
        break;
    case 2:
        resultText = "Monday";
        break;
    case 3:
        resultText = "Tuesday";
        break;
    case 4:
        resultText = "Wednesday";
        break;
    case 5:
        resultText = "Thursday";
        break;
    case 6:
        resultText = "Friday";
        break;
    case 7:
        resultText = "Saturday";
        break;
    default:
        resultText = "Invalid input. Please enter a number between 1 and 7.";
}
console.log(resultText);
let num = 55;
let result = "";

switch (true) {
    case (marks >= 90):
        result = "Grade A";
        break;
    case (marks >= 75):
        result = "Grade B";
        break;
    case (marks >= 50):
        result = "Grade C";
        break;
    default:
        result = "FAIL";
}

console.log(result);

// FOR LOOP
let output = "";
for (let i = 1; i <= 5; i++) {
    output += i ;
}
console.log(output);

// FOR-OF

const fruits = ["Apple", "Banana", "Cherry", "Date"];
      let result1 = "";
      for (let fruit of fruits) {
        result1 += fruit ;  
      }
      console.log(result1); 

// FOR IN
      const person = { name: "John", age: 30, city: "New York" };
      let result2 = "";
      for (let key in person) {
        result2 += key + ": " + person[key] ; 
      }
      console.log(result2); 

//   TRY-CATCH
    let c = 30;
        let result3 = "";
        try {
            if (c % 2 === 0) {
                result3 = c + " is an Even number";
            }
        } catch (error) {
            result3 = "Error: " + error.message;
        }
        console.log( result3); 

    // TERNARY OPERATION
        let b = 31; 
        let result4 = "";
        result4 = (b%2 === 0) ? b + " is an Even number" : b + " is an Odd number";
        console.log(result4);
