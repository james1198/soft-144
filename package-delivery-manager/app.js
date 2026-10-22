const packages = [
    {
        trackingNumber: "PKG1001",
        customer: "Jordan Lee",
        address: "120 Pine Street",
        priority: 2
    },
    {
        trackingNumber: "PKG1002",
        customer: "Taylor Smith",
        address: "45 Oak Avenue",
        priority: 1
    },
    {
        trackingNumber: "PKG1003",
        customer: "Son Goku",
        address: "800 River Road",
        priority: 3
    },
    {
        trackingNumber: "PKG1004",
        customer: "Morgan Davis",
        address: "800 River Road",
        priority: 3
    },
    {
        trackingNumber: "PKG1005",
        customer: "Bruce Lee",
        address: "800 River Road",
        priority: 3
    },
    {
        trackingNumber: "PKG1006",
        customer: "Bruce Wayne",
        address: "800 River Road",
        priority: 3
    },
    {
        trackingNumber: "PKG1007",
        customer: "Monkey Man",
        address: "800 River Road",
        priority: 3
    },
    {
        trackingNumber: "PKG1008",
        customer: "Lebron James",
        address: "800 River Road",
        priority: 3
    }
];

function linearSearch(array, target) {
    for (let i = 0; i < array.length; i++) {
        if (array[i].trackingNumber === target) {
            return array[i];
        }
    }
    return null;
}


const result = linearSearch(packages, "PKG1002");
console.log(result);