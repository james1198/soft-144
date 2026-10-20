class HashTable {
    constructor(size = 50) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    // Basic hash function for string keys
   hash(key) {
    const strKey = String(key);
    let hash = 0;

    for (let i = 0; i < strKey.length; i++) {
        hash = (hash * 31 + strKey.charCodeAt(i)) >>> 0;
    }

    return hash % this.size;
}
    // Insert or update a key-value pair
    set(key, value) {
        const index = this.hash(key);

        if (!this.table[index]) {
            this.table[index] = [];
        }

        // Check if key already exists and update
        for (const pair of this.table[index]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        // Otherwise, add new pair
        this.table[index].push([key, value]);
    }

    // Retrieve value by key
    get(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) return null;

    for (const pair of bucket) {
        if (pair[0] === key) {
            return pair[1];
        }
    }

    return null;
}
    has(key) {
    const index = this.hash(key);
    const bucket = this.table[index];

    if (!bucket) return false;

    return bucket.some(pair => pair[0] === key);
}

    // Remove a key-value pair
    delete(key) {
        const index = this.hash(key);
        const bucket = this.table[index];

        if (!bucket) return false;

        const pairIndex = bucket.findIndex(pair => pair[0] === key);
        if (pairIndex !== -1) {
            bucket.splice(pairIndex, 1);
            return true;
        }

        return false;
    }

    // Display all key-value pairs
    display() {
        this.table.forEach((bucket, index) => {
            if (bucket && bucket.length > 0) {
                console.log(index, bucket);
            }
        });
    }
}

// Example usage:
try {
    const ht = new HashTable(10);

// Add five products to the inventory
ht.set("101", { name: "Laptop", price: 1200, quantity: 10 });
ht.set("102", { name: "Phone", price: 800, quantity: 15 });
ht.set("103", { name: "Headphones", price: 100, quantity: 25 });
ht.set("104", { name: "Keyboard", price: 50, quantity: 20 });
ht.set("105", { name: "Mouse", price: 25, quantity: 30 });

// Display products
console.log("Laptop:", ht.get("101"));
console.log("Phone:", ht.get("102"));
console.log("Headphones:", ht.get("103"));
console.log("Keyboard:", ht.get("104"));
console.log("Mouse:", ht.get("105"));

// Check whether a product exists
console.log("Laptop exists:", ht.has("101")); // true
console.log("Product 999 exists:", ht.has("999")); // false

// Update a product
ht.set("101", { name: "Laptop", price: 1100, quantity: 8 });
console.log("Updated laptop:", ht.get("101"));

// Delete a product
console.log("Deleted phone:", ht.delete("102")); // true
console.log("Phone after deletion:", ht.get("102")); // null

// Display the remaining inventory
console.log("Inventory contents:");
ht.display();   

    // ProductStore class to manage products
class ProductStore {
    constructor() {
        this.products = new Map(); // Stores key-value pairs
    }

    /**
     * Add a new product or update an existing product
     * @param {string|number} key - Product ID
     * @param {object} value - Product details
     */
    set(key, value) {
        if (key === null || key === undefined) {
            throw new Error("Key cannot be null or undefined.");
        }
        this.products.set(key, value);
    }

    /**
     * Get product by key
     * @param {string|number} key - Product ID
     * @returns {object|null} - Product details or null if not found
     */
    get(key) {
        return this.products.has(key) ? this.products.get(key) : null;
    }

    /**
     * Check if product exists
     * @param {string|number} key - Product ID
     * @returns {boolean} - True if exists, false otherwise
    */
    has(key) {
        return this.products.has(key);
    }

    /**
     * Delete product by key
     * @param {string|number} key - Product ID
     * @returns {boolean} - True if deleted, false if not found
     */
    delete(key) {
        return this.products.delete(key);
    }
}

// Example usage:
const store = new ProductStore();

} catch (err) {
    console.error("Error:", err.message);
}