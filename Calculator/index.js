document.addEventListener('DOMContentLoaded', function() {
    const screen = document.querySelector('#screen');
    const keys = document.querySelector('.calculator-keys');
    let currentInput = '';
    let operator = '';
    let previousInput = '';

    keys.addEventListener('click', function(e) {
        const target = e.target;
        const value = target.value;

        if (!target.matches('button')) {
            return;
        }

        switch (value) {
            case '+':
            case '-':
            case '*':
            case '/':
                operator = value;
                previousInput = currentInput;
                currentInput = '';
                break;
            case '=':
                if (operator && previousInput !== '') {
                    currentInput = eval(previousInput + operator + currentInput);
                    operator = '';
                    previousInput = '';
                }
                break;
            case 'all-clear':
                currentInput = '';
                operator = '';
                previousInput = '';
                break;
            case '.':
                if (!currentInput.includes('.')) {
                    currentInput += value;
                }
                break;
            default:
                currentInput += value;
        }

        screen.value = currentInput;
    });
});
