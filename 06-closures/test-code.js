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
const firstName = "Jenny";
const congratulations = congratulate(firstName);
const result = congratulations();
//##DISPLAY_END##

// The rest of your code is invisible to the learner.

/**
 * -------------------------------------
 * MESSAGE, TEST, AND VALIDATION SECTION
 * -------------------------------------
 */

// Return the correct result. This code is invisible to the learner.
const constructCongratulation = congratulate(firstName);
const getCorrectResult = constructCongratulation();

// Display messages

// Hints are specific for your course and can be edited.
// Break long hints at 50 characters and insert  line feeds.
const hints = [
  "Set a value for sentence inside the congratulate function.",
  "Build the sentence inside of the create sentence function",
  "Create variable that holds string Good job or Nice work",
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
