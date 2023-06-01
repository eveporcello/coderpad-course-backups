/**
 * Instructor Notes:
 * =================
 * Write test code that verifies the learners proposed answer
 * You can write one or more test cases.
 * Add test code for the learner here.
 *
 * Only the lines of code between DISPLAY_BEGIN and DISPLAY_END
 * are shown to the learner. The learner can change the visible
 * code to try different test cases.
 *
 * Write your setup and testing code outside the display area.
 * Use console.log(...) to display text.
 */

/* Keep the following section flush left for correct display to learner. */

// ##DISPLAY_BEGIN##
// This is how your code will be called.
// Your answer should be the largest value in the numbers array.
// You can edit this code to try different testing cases.
let petArray = [
  { id: "C-6", name: "Buddy", category: "CAT" },
  { id: "D-2", name: "Archy", category: "DOG" },
  { id: "D-8", name: "Pax", category: "DOG" },
  { id: "D-9", name: "Lucie", category: "DOG" },
  { id: "R-1", name: "Pip", category: "RABBIT" },
  { id: "C-4", name: "Beebee", category: "CAT" },
  { id: "R-5", name: "Peep", category: "RABBIT" },
  { id: "C-7", name: "Mini", category: "CAT" },
  {
    id: "D-7",
    name: "Rainier McCheddarton",
    category: "DOG",
  },
  { id: "D-5", name: "Canela", category: "DOG" },
  { id: "S-4", name: "Pluto", category: "STINGRAY" },
  { id: "D-4", name: "Luna", category: "DOG" },
  { id: "S-1", name: "Lazer", category: "STINGRAY" },
  { id: "C-2", name: "Jungle", category: "CAT" },
  { id: "R-2", name: "Sweetums", category: "RABBIT" },
  { id: "D-3", name: "Otis", category: "DOG" },
  { id: "R-3", name: "Jerry", category: "RABBIT" },
  { id: "C-1", name: "Biscuit", category: "CAT" },
  { id: "C-3", name: "Benji", category: "CAT" },
  { id: "C-5", name: "Pillow", category: "CAT" },
  { id: "D-6", name: "Mehla", category: "DOG" },
  { id: "D-1", name: "Danton", category: "DOG" },
  { id: "S-3", name: "Steve", category: "STINGRAY" },
  { id: "S-2", name: "Switchblade", category: "STINGRAY" },
  { id: "R-4", name: "Jason", category: "RABBIT" },
];
const result = countCats(petArray);
//##DISPLAY_END##

// The rest of your code is invisible to the learner.

/**
 * -------------------------------------
 * MESSAGE, TEST, AND VALIDATION SECTION
 * -------------------------------------
 */

// Return the correct result. This code is invisible to the learner.

const getCorrectResult = 7;

// Display messages

// Hints are specific for your course and can be edited.
// Break long hints at 50 characters and insert  line feeds.
const hints = [
  "Create a function ",
  "Try the Math.max() method.",
  "JavaScript typically has built-in global methods \nfor common tasks like math operations.",
];

// Use this divider to separate console messages
// ** Do not change these strings! **
const divider = "\n--- -- -- -- -- -- -- -- -- -- -- --";
const indent = "* ";
//

/**
 * ###########################################
 * Do not change the displayMessage() function
 * ###########################################
 * Displays messages depending on whether the
 * learner's result matches the correct result.
 *
 * @param {boolean} correctResult - did the learner pass the test?
 * @param {string} learnerResult - the learner's result
 * @param {string} correctResult - the correct result
 */
const displayMessage = (
  testPass,
  learnerResult,
  correctResult
) => {
  const promptForShowAnswer =
    "Set 'showExpectedResult' to 'true' to see the correct value.";
  const promptForShowHints =
    "Set 'showHints' to 'true' to see a hint.";

  const successMessages = [
    "You did it! This result is exactly right. ",
    "Another one solved!",
    "Correct",
    "Well done! You reached the expected result.",
    "That's right!",
    "Great work! You got the right answer.",
    "Correct! Marvelous work.",
    "That's it! You're getting good at this.",
    "Bravo! This is the correct answer.",
  ];

  const failMessages = [
    "You didn't get it right this time. \nReady to try again?",
    "Hmm, that's not quite right. \nTry taking another look",
    "Incorrect. Try again",
    "That's not the expected result. ",
    "Something isn't working. ",
    "Whoops, that's not it! Consider revisiting the question. ",
    "You didn't get the correct answer this time. \nTime for another try.",
    "Incorrect. Revisit the question ",
  ];

  // Get random item from the supplied array
  function randMessage(messageArray) {
    return messageArray[
      Math.floor(Math.random() * messageArray.length)
    ];
  }

  // Display success/fail message
  if (testPass) {
    console.log(randMessage(successMessages));
  } else {
    console.log(randMessage(failMessages));
  }

  // Display learner result
  console.log(`Your code returned:`);
  console.log(learnerResult);
  console.log(divider);

  // Display expected result and hints
  if (!testPass) {
    console.log("Need help?");

    // Show expected answer
    if (showExpectedResult) {
      console.log(
        `${indent}Expected result: ${correctResult}`
      );
    } else {
      console.log(`${indent}${promptForShowAnswer}`);
    }

    // Show hints
    if (showHints) {
      console.log(`${indent}Hint: ${randMessage(hints)}`);
    } else {
      console.log(`${indent}${promptForShowHints}`);
    }
  }
};

// Simple assert function for testing
function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  } else {
    console.log(message);
  }
}

// Validation tests

function testCatList(petArray) {
  const byCategory = (category) => (pet) =>
    pet.category === category;
  return petArray.filter(byCategory("CAT")).length;
}

// Loop through tests, run each one, and display results.
function runAllTests() {
  const tests = [
    {
      test: result === getCorrectResult,
      message: "Output matches test case.",
    },
  ];

  let testsPassed = 0;
  let totalTests = tests.length;

  tests.forEach(({ test, message }) => {
    try {
      assert(test, `✓ Test passed: ${message}`);
      testsPassed++;
    } catch (error) {
      console.log(`✕ Test failed: ${message}`);
    }
  });

  console.log(
    `\nTests passed: ${testsPassed} of ${totalTests}`
  );

  if (testsPassed === 0) {
    console.log("> No tests passed");
    console.log();
    displayMessage(false, result, getCorrectResult);
  } else if (testsPassed === totalTests) {
    console.log("> All tests passed");
    console.log();
    displayMessage(true, result, getCorrectResult);
  } else {
    console.log("> Some tests passed");
    console.log();
    displayMessage(false, result, getCorrectResult);
  }
}

runAllTests();
