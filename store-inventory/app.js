class HashTable {
    constructor(size = 50) {
        if (!Number.isInteger(size) || size <= 0) {
            throw new Error("Size must be a positive integer.");
        }
        this.table = new Array(size); // Internal array storage
        this.size = size;
    }

    // Basic hash function for string keys
    _hash(key) {
        if (typeof key !== "string") {
            throw new Error("Key must be a string.");
        }
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.size;
        }
        return hash;
    }

    // Insert or update a key-value pair
    set(key, value) {
        const index = this._hash(key);
        if (!this.table[index]) {
            this.table[index] = [];
        }
        // Check if key already exists and update
        for (let pair of this.table[index]) {
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
        const index = this._hash(key);
        const bucket = this.table[index];
        if (!bucket) return undefined;
        for (let pair of bucket) {
            if (pair[0] === key) {
                return pair[1];
            }
        }
        return undefined;
    }

    // Remove a key-value pair
    remove(key) {
        const index = this._hash(key);
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

    ht.set("apple", 5);
    ht.set("banana", 10);
    ht.set("orange", 7);
    ht.set("banana", 15); // Update value

    console.log("banana:", ht.get("banana")); // 15
    console.log("grape:", ht.get("grape"));   // undefined

    ht.remove("apple");
    console.log("apple:", ht.get("apple"));   // undefined

    console.log("Hash Table contents:");
    ht.display();
} catch (err) {
    console.error("Error:", err.message);
}