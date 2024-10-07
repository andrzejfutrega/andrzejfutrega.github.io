function displayQuestion() {

    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const question = questions[q];
    const questionText = document.createElement('p');
    questionText.innerText = question[0];

    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.placeholder = 'Podaj swoją odpowiedź';

    quizContainer.appendChild(questionText);
    quizContainer.appendChild(answerInput);

    const nextButton = document.getElementById('next-button');
    nextButton.onclick = function() {
        testQuestion(answerInput.value);
    };
}
function testQuestion(answer){
    const question = questions[q];
    if (answer.trim().toLowerCase() === question[1].toLowerCase()){
        alert('Prawidłowa odpowiedź!');
        score++;
    }
    else {
        alert('Błąd. Prawidłowa odpowiedź to ' + question[1]);
    }
    q++;
    if (q < questions.length) {
        displayQuestion();
    } else {
        showResult();
    }
}
function showResult() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const resultText = document.createElement('p');
    resultText.innerText = 'Twój wynik to: ' + score + '/' + questions.length;
    quizContainer.appendChild(resultText);

    const submitButton = document.getElementById('submit-button');
    submitButton.style.display = 'none';
}

displayQuestion();