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

history.Add(order1);
history.Add(order2);
history.Add(order3);
history.Add(order4);

console.log(history.size());
console.log(history.isEmpty());
console.log(history.Check  ());
console.log(history.Remove());