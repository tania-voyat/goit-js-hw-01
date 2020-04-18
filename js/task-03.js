const ADMIN_PASSWORD = "password";
let message;
const password = prompt("Please enter your password");

if (password === ADMIN_PASSWORD) {
  message = "Welcome!";
} else if (password === null) {
  message = "Canceled by user!";
} else {
  console.log("Access denied, wrong password!");
}

console.log(message);
