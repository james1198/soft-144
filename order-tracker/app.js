console.log("Order tracker app started");

class OrderHistoryStack {
    constructor() {
        this.items = [];
    }

    Add(order) {
        this.items.push(order);
    }

    Remove() {
        return this.items.pop();

    }

    Check  () {  
        const index = this.items.length - 1;
        console.log("index: ", index);
        return this.items[index];
    }

    size() {
        return this.items.length;
    }

    isEmpty() {
        return this.items.length === 0;
    }
}


class OrderQueue {  
    constructor(capacity) {
        if (capacity <= 0 || !Number.isInteger(capacity)) {
            throw new Error("Capacity must be a positive integer");
        }
        this.capacity = capacity;
        this.items = new Array(capacity);
        this.head = 0;
        this.tail = 0;
        this.count = 0;
    }

    add(order) {
        if (this.isFull()) {
            throw new Error("Queue is full");
        }
        this.items[this.tail] = order;
        const nextTail = (this.tail + 1) % this.capacity;
        console.log('nextTail', nextTail);
        this.tail = nextTail;
        this.count++;
    }


    remove() {
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }
        const order = this.items[this.head];
        this.items[this.head] = undefined;
        const nextHead = (this.head + 1) % this.capacity;
        console.log('nextHead', nextHead);
        this.head = nextHead;
        this.count--;
        return order;
    }


    isFull() {
        return this.count === this.capacity;
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }

}
const orderHistory = new OrderHistoryStack();
console.log("orderHistory: ", orderHistory);
const orderQueue = new OrderQueue(5);
console.log("orderQueue: ", orderQueue);