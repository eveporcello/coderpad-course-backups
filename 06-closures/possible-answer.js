function congratulate(user) {
  let sentence = "Great job";

  function createSentence() {
    return `${sentence}, ${user}`;
  }

  return createSentence;
}
