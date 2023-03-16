// Define the store's inventory as an object with item names and prices in USD
const inventory = {
    "apple": 1.99,
    "banana": 0.99,
    "orange": 2.49,
    "grape": 3.99,
    "watermelon": 5.99
  };
  
  // Convert the prices from USD to INR using a map() function
  const exchangeRate = 80;
  const inventoryInRupees = Object.entries(inventory).map(([item, price]) => ({
    item,
    priceInRupees: price * exchangeRate
  }));
  
  // Print the new inventory with prices in INR
  console.log(inventoryInRupees);
  