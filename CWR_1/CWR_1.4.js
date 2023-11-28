// Conditional Statements

// if-else

condition = true;
if (condition) {
    // Code to execute if condition is true
    console.log(true)
} else {
    // Code to execute if condition is false
    console.log(false)
}


//---
// for more complex condition we can use else if ladder

condition1 = false;
condition2 = true;

if (condition1) {
    // Code to execute if condition1 is true
    console.log(true);
} else if (condition2) {
    // Code to execute if condition2 is true
    console.log(true);
} else {
    // Code to execute if neither condition is true
    console.log(false);
}


// for loop

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// switch condition

let day = "Monday";
switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("It's a weekday.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("It's the weekend!");
        break;
    default:
        console.log("Invalid day entered.");
}


// while loop

let x = 10;
while (x > 0) {
    console.log(x);
    x--;
}