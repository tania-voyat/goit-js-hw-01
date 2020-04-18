let cost;
const country = prompt("Please enter your country!");

switch (country.toLowerCase()) {
  case "китай":
    cost = 100;
    break;

  case "чили":
    cost = 250;
    break;

  case "австралия":
    cost = 170;
    break;

  case "индия":
    cost = 80;
    break;

  case "ямайка":
    cost = 120;
    break;

  default:
    alert("Delivery is not available in your country");
}

console.log(`Shipping to ${country} will cost ${cost} credits`);
