
var questions = [
    ['Jakie jest największe jezioro na świecie?', 'Morze Kaspijskie'],
    ['Jak nazywa się najwyższa góra na Ziemi?', 'Mount Everest'],
    ['W którym kraju znajduje się Sahara?', 'Algieria'],
    ['Jakie miasto jest stolicą Japonii?', 'Tokio'],
    ['Jakie jest najdłuższe rzeka na świecie?', 'Nil']
];

var currentQuestionIndex = 0;
var score = 0;


function displayQuestion() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = '';

    const question = questions[currentQuestionIndex];
    const questionText = document.createElement('p');
    questionText.innerText = question[0];

    const answerInput = document.createElement('input');
    answerInput.type = 'text';
    answerInput.placeholder = 'Podaj swoją odpowiedź';

    quizContainer.appendChild(questionText);
    quizContainer.appendChild(answerInput);

    const nextButton = document.getElementById('next-button');
    nextButton.style.display = 'inline';
    nextButton.onclick = function() {
        checkAnswer(answerInput.value);
    };
}


function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    if (answer.trim().toLowerCase() === question[1].toLowerCase()) {
        alert('Prawidłowa odpowiedź!');
        score++;
    } else {
        alert('Błąd. Prawidłowa odpowiedź to ' + question[1]);
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
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
