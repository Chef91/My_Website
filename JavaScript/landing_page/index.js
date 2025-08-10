

// JavaScript Clock - Greeter
const hour = new Date().getHours();
let greeting;

if (hour < 16)  {
  greeting = "Good Day!"
} else  {
  greeting = "Good Evening!"
}

document.getElementById("nav-time").innerHTML = greeting;