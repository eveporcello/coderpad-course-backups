// A closure gives you access to an outer functions scope from an
// inner function.

// congratulate returns the inner function: createSentence
// This function has access to the sentence var from the congratulate function
// The create sentence function closes over the sentence variable

function congratulate(user) {
  let sentence = "Great job";

  function createSentence() {
    return `${sentence}, ${user}`;
  }

  return createSentence;
}

const firstName = "Jenny";
const congratulations = congratulate(firstName);
const result = congratulations();
console.log(result);
