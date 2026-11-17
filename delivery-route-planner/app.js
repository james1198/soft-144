class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addLocation(location) {
    if (this.adjacencyList.has(location)) {
      return false;
    }

    this.adjacencyList.set(location, []);
    return true;
  }

  addRoad(location1, location2) {
    if (
      !this.adjacencyList.has(location1) ||
      !this.adjacencyList.has(location2)
    ) {
      return false;
    }

    const roads1 = this.adjacencyList.get(location1);
    const roads2 = this.adjacencyList.get(location2);

    if (roads1.includes(location2) || roads2.includes(location1)) {
      return false;
    }

    roads1.push(location2);
    roads2.push(location1);

    return true;
  }

  hasLocation(location) {
    return this.adjacencyList.has(location);
  }

  hasRoad(location1, location2) {
    if (
      !this.adjacencyList.has(location1) ||
      !this.adjacencyList.has(location2)
    ) {
      return false;
    }

    return this.adjacencyList.get(location1).includes(location2);
  }

  hadRoad(location1, location2) {
    return this.hasRoad(location1, location2);
  }
}

const deliveryGraph = new Graph();
deliveryGraph.addLocation("Warehouse");
deliveryGraph.addLocation("Downtown");
deliveryGraph.addLocation("Airport");
deliveryGraph.addLocation("North Station");
deliveryGraph.addLocation("Shopping Center");
deliveryGraph.addLocation("University");
deliveryGraph.addLocation("Hospital");
deliveryGraph.addRoad("Warehouse", "Downtown");
deliveryGraph.addRoad("Warehouse", "Airport");
deliveryGraph.addRoad("Downtown", "University");
deliveryGraph.addRoad("Downtown", "Shopping Center");
deliveryGraph.addRoad("Airport", "North Station");
deliveryGraph.addRoad("North Station", "Hospital");
deliveryGraph.addRoad("Shopping Center", "Hospital");
deliveryGraph.addRoad("University", "Hospital");

for (const [location, roads] of deliveryGraph.adjacencyList.entries()) {
  console.log(`${location} is connected to: ${roads.join(", ")}`);
}

console.log(deliveryGraph.hasLocation("Warehouse")); // true
console.log(deliveryGraph.hasLocation("Mall")); // false
console.log(deliveryGraph.hasRoad("Warehouse", "Downtown")); // true