// shop.js

// Import the products array from products.js
const products = require("./products");

// Function to search for a product by name
function findProduct(productName) {
  const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
  
  if (product) {
    console.log("✅ Product found:");
    console.log(`Name: ${product.name}`);
    console.log(`Price: $${product.price}`);
    console.log(`Category: ${product.category}`);
  } else {
    console.log(`❌ Product "${productName}" not found.`);
  }
}

// Test the function with different products
findProduct("Laptop");
findProduct("Book");
findProduct("Shoes"); // This one doesn’t exist
