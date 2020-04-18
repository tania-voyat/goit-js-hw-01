let total = 0;

while (true) {
  let input = prompt("Enter a number");

  if (input === null) {
    break;
  }

  input = Number(input);
  total += input;
}

console.log(`Total sum is ${total}`);
