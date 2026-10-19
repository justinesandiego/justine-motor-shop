
const shopName = "Justine Motor Shop";
const currentYear = new Date().getFullYear();

let runningTotal = 0;

// Find elements on the page
const shopTitle = document.getElementById("shop-name");
const copyright = document.getElementById("copyright");
const productCountDisplay = document.getElementById("product-count");

// Display the shop name
if (shopTitle) {
    shopTitle.textContent = shopName;
}

// Count the product cards on the current page
const products = document.querySelectorAll(".product-card");
runningTotal = products.length;

// Display the calculated product count
if (productCountDisplay) {
    productCountDisplay.textContent = runningTotal;
}

// Display the dynamic copyright
if (copyright) {
    copyright.textContent = `© ${currentYear} ${shopName}`;
}

// Three labelled console messages
console.log("Shop name:", shopName);
console.log("Current year:", currentYear);
console.log("Products displayed:", runningTotal);


/* MODULE 8.4 - MAKE YOUR SHOP DECIDE */

// 1. Stock status
const stockCount = 5;
const stockStatus = document.getElementById("stock-status");

if (stockCount > 10) {
    stockStatus.textContent = "In stock";
} else if (stockCount >= 1) {
    stockStatus.textContent = "Only a few left";
} else if (stockCount === 0) {
    stockStatus.textContent = "Sold out";
} else {
    stockStatus.textContent = "Stock unavailable";
}


// 2. Free delivery check
const orderTotal = 1200;
const isMember = true;

const qualifiesForFreeDelivery = orderTotal >= 1000 && isMember;
const deliveryFee = qualifiesForFreeDelivery ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

document.getElementById("delivery-result").textContent =
    `Order: ₱${orderTotal} | Delivery: ₱${deliveryFee} | Final total: ₱${finalTotal}`;


// 3. Shop open or closed
const isShopOpen = true;

const shopStatus = isShopOpen ? "Open today" : "Closed today";

document.getElementById("shop-status").textContent = shopStatus;


// Console messages
console.log("Stock count:", stockCount);
console.log("Delivery fee:", deliveryFee);
console.log("Shop status:", shopStatus);


