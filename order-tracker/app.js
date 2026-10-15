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

const order1 = {
    orderNumber: 1001,
    customer: "George",
    item: "Keyboard"
};
    const order2 = {
    orderNumber: 1111,
    customer: "Jordan",
    item: "17 cheese wheels"
};
    const order3 = {
    orderNumber: 1374,
    customer: "LeBron",
    item: "a pipebomb"
};
    const order4 = {
    orderNumber: 1539,
    customer: "Goku",
    item: "300 punds of rice"
};
    const order5 = {
    orderNumber: 1987,
    customer: "Springtrap",
    item: "pizza"
};


const orderHistory = new OrderHistoryStack(5);
const orderQueue = new OrderQueue(5);

orderHistory.Add(order1);
orderHistory.Add(order2);
orderHistory.Add(order3);
orderHistory.Add(order4);
orderHistory.Add(order5);

orderQueue.add(order1);
orderQueue.add(order2);
orderQueue.add(order3);
orderQueue.add(order4);
orderQueue.add(order5);

console.log("orderHistory: ", orderHistory);
console.log("Last order in history: ", orderHistory.Check());
console.log("Queue size before removal: ", orderQueue.size());
console.log("Next order to process: ", orderQueue.remove());
console.log("Queue size after removal: ", orderQueue.size());
console.log("Removed from history: ", orderHistory.Remove());