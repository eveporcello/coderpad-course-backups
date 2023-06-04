Handle scope in a vacation class
Like our last challenge, we're working with a vacation object, but this time we're using JavaScript's class syntax to make that work.

Your task: Create an Expedition subclass that extends Vacation and includes new properties. Then create a function called createExpedition that takes in the details of the expedition, creates a new expedition, and returns the survival rate.
Class Properties & Methods
Vacation

destination: A string location.

length: A number of days that the vacation should last.

Expedition

survivalRate : A float that describes the survival rate between 0.0 and 1.0.

items: An array of items to bring on the trip.

Inherited from Vacation

destination: A string location

length: A number of days that the vacation should last

Result

survivalRate: The probability of survival as a number between 0.0 and 1.0.

Constraints
The numbers array always contains at least one number.
Each integer can be either positive or negative.
Example 1:
const expDetails = ["Desolation Wilderness", 10, 0.5];
Result: 0.5
Example 2:
const expDetails = ["Crater Lake NP", 5, 0.8];

Result: 0.9
