
    const display = document.getElementById("display");

    document.querySelectorAll(".digit").forEach(digitButton => {
        digitButton.addEventListener("click", function() {
            display.value += digitButton.textContent;
        });
    });

    document.querySelectorAll(".operation").forEach(operationButton => {
        operationButton.addEventListener("click", function() {
            display.value += operationButton.textContent;
        });
    });

    document.getElementById("btn-equals").addEventListener("click", function() {
        const inputValue = display.value;
        try {
            const result = eval(inputValue); // Using eval for simplicity
            display.value = result;
        } catch (error) {
            display.value = 'Error';
        }
    });

    document.getElementById("btn-clear").addEventListener("click", function() {
        display.value = '';
    });

