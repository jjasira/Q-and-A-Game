const data = fetch("https://opentdb.com/api.php?amount=1&category=18");
data.then(function (response) {
  response.json().then((responseData) => {
    const question = document.createElement("h2");
    question.innerHTML = responseData.results[0].question;
    document.body.appendChild(question);

    const multipleChoice = document.createElement("div");
    const choices = responseData.results[0].incorrect_answers;
    const myChoices = choices.push(responseData.results[0].correct_answer);

    for (let i = 0; i < myChoices.length; i++) {
      const choice = document.createElement("p");
      choice.innerHTML = myChoices[i];
      multipleChoice.appendChild(choice);
    }
    document.body.appendChild(multipleChoice);
    setTimeout(() => {
      const correctAnswer = document.createElement("p");
      correctAnswer.innerHTML = `The Correct Answer: ${responseData.results[0].correct_answer}`;
      document.body.appendChild(correctAnswer);
    }, 2000);
  });
});
