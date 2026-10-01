console.log("Order tracker app started");

class OrderHistoryStack {
    constructor() {
        this.orders = [];
    }

    push(order) {
        this.orders.push(order);
    }

    pop () {
        return this.orders.pop();

    }

    peek() {  
        return this.orders[this.orders.length - 1];
    }

    size() {
        return this.orders.length;
    }

    isEmpty() {
        return this.orders.length === 0;
    }
}


class OrderQueue {  


}

const order1 = {
    orderNumber: 1987,
    customer: "Jordan",
    item: "32 racoons"
};

const order2 = {
    orderNumber: 2794,
    customer: "joe",
    item: "lucky charms"
};

const order3 = {
    orderNumber: 7230,
    customer: "blake",
    item: "a bomb"
};

const order4 = {
    orderNumber: 400,
    customer: "snoop dogg",
    item: "17 assorted cheese cakes"
};

const history = new OrderHistoryStack();

history.push(order1);
history.push(order2);
history.push(order3);
history.push(order4);

console.log(history.size());
console.log(history.isEmpty());
console.log(history.peek());
console.log(history.pop());