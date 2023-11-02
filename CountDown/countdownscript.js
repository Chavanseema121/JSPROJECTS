
    const countdownElement = document.getElementById("countdown");
    const messageElement = document.getElementById("message");
    const replayButton = document.getElementById("replayBtn");

    let countdown = 5;

    function startCountdown() {
        countdownElement.textContent = countdown;
        countdown--;

        if (countdown >= 0) {
            setTimeout(startCountdown, 1000);
        } else {
            messageElement.textContent = "Go";
            replayButton.removeAttribute("disabled");
        }
    }

    startCountdown();

    replayButton.addEventListener("click", function() {
        countdown = 5;
        messageElement.textContent = "";
        replayButton.setAttribute("disabled", ture);
        startCountdown();
    });
