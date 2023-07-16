
let corrects = 0;
let uncorrects = 0;

const operations = ['+', '-', '*'];
let currentOperationIndex = Math.floor(Math.random() * operations.length);
let operationMix = true;

randomNumbers();

function randomNumbers() {
    const max = +document.getElementById('max').value;
    const min = +document.getElementById('min').value;
    const firstRandomNumber = min + Math.floor(Math.random() * (max - min));
    const secondRandomNumber = min + Math.floor(Math.random() * (max - min));
    document.getElementById('first').value = firstRandomNumber;
    document.getElementById('second').value = secondRandomNumber;
}

function check() {
    const answerInput = document.getElementById('answer');
    const first = +document.getElementById('first').value;
    const second = +document.getElementById('second').value;
    const answer = answerInput.value;
    let correctAnswer;
    switch (operations[currentOperationIndex]) {
        case '+':
            correctAnswer = first + second
            break;

        case '-':
            correctAnswer = first - second
            break;

        case '*':
            correctAnswer = first * second
            break;
        default:
            break;
    }
    if (answer == correctAnswer) {
        answerInput.style.background = 'green';
        corrects++;
        document.getElementById('correct').innerText = corrects;
    } else {
        uncorrects++;
        document.getElementById('uncorrect').innerText = uncorrects;
        answerInput.classList.add('uncorrect');
    }
}

function refresh() {
    const answerInput = document.getElementById('answer');
    randomNumbers();
    answerInput.value = '';
    answerInput.classList.remove('uncorrect');

    if (operationMix) {
        currentOperationIndex = Math.floor(Math.random() * operations.length);
    }
    document.getElementById('operation').innerText = operations[currentOperationIndex]
}

function changeOperation(operation) {
    if (operationMix) {
        currentOperationIndex = (currentOperationIndex + 1) % operations.length;
    }
    operation.innerText = operations[currentOperationIndex];
}

function chooseOperationMixOrNot(btn, isMix, operationIndex) {
    if (!isMix) {
        currentOperationIndex = operationIndex;
    }
    operationMix = isMix;
    document.querySelector('.btn-opr.active').classList.remove('active')
    btn.classList.add('active');
    refresh();
}