
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

