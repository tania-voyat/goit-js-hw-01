const credits = 23580;
const pricePerDroid = 3000;
const userOrder = prompt("How many droids would you like to buy?");
const totalPrice = Number(userOrder) * pricePerDroid;
const balance = credits - totalPrice;
let message;

if (userOrder === null) {
  message = "Canceled by user!";
} else if (totalPrice > credits) {
  message = "Insufficient funds";
} else {
  message = `You have ordered ${userOrder} droids, you have ${balance} credits left`;
}

console.log(message);
