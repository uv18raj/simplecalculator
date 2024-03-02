let result = document.getElementById('result');

function appendToResult(value) {
    if (result.textContent === '0') {
        result.textContent = value;
    } else {
        result.textContent += value;
    }
}

function clearResult() {
    result.textContent = '0';
}

function calculateResult() {
    try {
        result.textContent = eval(result.textContent);
    } catch (error) {
        result.textContent = 'Error';
    }
}