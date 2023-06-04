// JavaScript code​​​​​​‌​‌​​​‌​​‌​​​​‌​​​​‌​​‌​​ below
const showExpectedResult = false;
const showHints = false;

function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
  this.travelers = [];
}

// Use the prototype to add a method to the
// Vacation function called addTraveler
Vacation.prototype.addTraveler = function (name) {
  this.travelers.push(name);
};

function createVacation(location, length) {
  const desoTrip = new Vacation(location, length);
  desoTrip.addTraveler("Alex");
  return desoTrip.travelers[0];
}

// Call the createVacation function with a location and length

createVacation("Desolation Wilderness", 10);
