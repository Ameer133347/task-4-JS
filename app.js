// ==============================
// Products
// ==============================

// Create an array named products
const products = [
    {
        id: 1,
        name: "Laptop",
        category: "Electronics",
        price: 850,
        inStock: true
    },

    {
        id: 2,
        name: "Headphones",
        category: "Electronics",
        price: 120,
        inStock: true
    },

    {
        id: 3,
        name: "Backpack",
        category: "Accessories",
        price: 65,
        inStock: true
    },

    {
        id: 4,
        name: "Notebook",
        category: "Books",
        price: 15,
        inStock: true
    },

    {
        id: 5,
        name: "Smart Watch",
        category: "Electronics",
        price: 200,
        inStock: false
    }
];


// ==============================
// Product List
// ==============================

// Print the first product name
console.log("First product:", products[0].name);

// Print the last product name
console.log(
    "Last product:",
    products[products.length - 1].name
);

// Print the number of products
console.log(
    "Number of products:",
    products.length
);


// Loop over all products
products.forEach(function(product) {

    console.log(
        "Product:",
        product.name,
        "| Price: $" + product.price,
        "| Category:",
        product.category
    );

});


// Display products in HTML
const productList = document.getElementById("productList");

products.forEach(function(product) {

    const paragraph = document.createElement("p");

    paragraph.textContent =
        "Product: " + product.name +
        " | Price: $" + product.price +
        " | Category: " + product.category;

    productList.appendChild(paragraph);

});


// ==============================
// Selected Filters
// ==============================

// Create a Set named selectedCategories
const selectedCategories = new Set([
    "Electronics",
    "Books",
    "Accessories"
]);


// Add a category
selectedCategories.add("Sports");


// Print the size
console.log(
    "Number of selected categories:",
    selectedCategories.size
);


// Check whether a category is selected
console.log(
    "Is Electronics selected?",
    selectedCategories.has("Electronics")
);


// Display selected filters
const filters = document.getElementById("filters");

filters.innerHTML = `
    <p>
        Selected categories:
        ${Array.from(selectedCategories).join(", ")}
    </p>

    <p>
        Number of selected categories:
        ${selectedCategories.size}
    </p>

    <p>
        Is Electronics selected?
        ${selectedCategories.has("Electronics")}
    </p>
`;


// ==============================
// Current User
// ==============================

// Create an object named currentUser
const currentUser = {

    id: 101,

    name: "Ameer",

    email: "ameer@example.com",

    address: {
        city: "Bucharest",
        street: "Main Street",
        country: "Romania"
    }

};


// Read the city from the nested object
console.log(
    "User city:",
    currentUser.address.city
);


// Display current user
const user = document.getElementById("user");

user.innerHTML = `

    <p>ID: ${currentUser.id}</p>

    <p>Name: ${currentUser.name}</p>

    <p>Email: ${currentUser.email}</p>

    <p>City: ${currentUser.address.city}</p>

`;


// ==============================
// Shopping Cart Quantities
// ==============================

// Create a Map named cartQuantities
const cartQuantities = new Map([

    [1, 2],

    [2, 1],

    [3, 3]

]);


// Use get() to read a quantity
console.log(
    "Quantity for product ID 1:",
    cartQuantities.get(1)
);


// Check whether a product ID exists
console.log(
    "Does product ID 2 exist?",
    cartQuantities.has(2)
);


// Read the Map size
console.log(
    "Cart Map size:",
    cartQuantities.size
);


// Display cart information
const cart = document.getElementById("cart");

cart.innerHTML = `

    <p>
        Quantity for product ID 1:
        ${cartQuantities.get(1)}
    </p>

    <p>
        Does product ID 2 exist?
        ${cartQuantities.has(2)}
    </p>

    <p>
        Cart Map size:
        ${cartQuantities.size}
    </p>

`;


// ==============================
// Cart Total
// ==============================

function calculateCartTotal(products, cartQuantities) {

    let total = 0;


    // Loop over products
    for (const product of products) {

        // Get quantity from the Map
        const quantity =
            cartQuantities.get(product.id) || 0;


        // Add price × quantity
        total += product.price * quantity;

    }


    // Return the final total
    return total;
}


// Calculate cart total
const cartTotal =
    calculateCartTotal(products, cartQuantities);


// Print the final total
console.log(
    "Cart total:",
    cartTotal
);


// Display the total
document.getElementById("total").textContent =
    "Cart total: $" + cartTotal;