class Vacation {
  destination;
  length = 0;
  travelers = [];

  constructor(destination, length) {
    this.destination = destination;
    this.length = length;
  }

  addTraveler(name) {
    this.travelers.push(name);
  }
}

class Expedition extends Vacation {
  survivalRate = 0.0;

  constructor(destination, length, survivalRate) {
    super(destination, length);
    this.survivalRate = survivalRate;
  }
}

function createExpedition(details) {
  const exp = new Expedition(...details);
  return exp.survivalRate;
}
const expDetails = ["Desolation Wilderness", 10, 0.5];
console.log(createExpedition(expDetails));
