var signalBox = document.getElementById("signalBox");
var timer = document.getElementById("timer");
var redLight = document.getElementById("redLight");
var greenLight = document.getElementById("greenLight");
var yellowLight = document.getElementById("yellowLight");
signalBox.style.height = "80vh";
signalBox.style.width = "30vw";
signalBox.style.backgroundColor = "black";
signalBox.style.display = "flex";
signalBox.style.flexDirection = "column";
signalBox.style.justifyContent = "center";
signalBox.style.alignItems = "center";
signalBox.style.margin = "10px";
timer.style.backgroundColor = "grey";
timer.style.width = "50%";
timer.style.height = "50%";
timer.style.margin = "10px";
redLight.style.backgroundColor = "grey";
redLight.style.width = "30%";
redLight.style.height = "50%";
redLight.style.margin = "10px";
redLight.style.borderRadius = "50%";
greenLight.style.backgroundColor = "grey";
greenLight.style.width = "30%";
greenLight.style.height = "50%";
greenLight.style.margin = "10px";
greenLight.style.borderRadius = "50%";
yellowLight.style.backgroundColor = "grey";
yellowLight.style.width = "30%";
yellowLight.style.height = "50%";
yellowLight.style.margin = "10px";
yellowLight.style.borderRadius = "50%";
// ---------------- Traffic Logic ----------------
var currentSignalIndex = 0;
var timeCounter = 30;
var countdownInterval;
var blinkInterval;
function updateLights() {
    redLight.style.backgroundColor = "grey";
    greenLight.style.backgroundColor = "grey";
    yellowLight.style.backgroundColor = "grey";
    switch (currentSignalIndex) {
        case 0:
            redLight.style.backgroundColor = "red";
            break;
        case 1:
            greenLight.style.backgroundColor = "green";
            break;
    }
}
function startCountdown() {
    timeCounter = 30;
    updateLights();
    countdownInterval = window.setInterval(function () {
        timeCounter--;
        if (timer) {
            var counterText = String(timeCounter);
            timer.innerHTML = "<p style=\"font-size:40px; color: white\">".concat(counterText, "<p>");
        }
        // when 3 seconds left → stop countdown and start blinking yellow
        if (timeCounter === 3) {
            clearInterval(countdownInterval);
            startYellowBlink();
        }
    }, 1000);
}
function startYellowBlink() {
    var blinkTime = 3;
    var isYellowOn = false;
    blinkInterval = window.setInterval(function () {
        isYellowOn = !isYellowOn;
        yellowLight.style.backgroundColor = isYellowOn ? "yellow" : "grey";
        if (timer) {
            var counterText = String(blinkTime);
            timer.innerHTML = "<p style=\"font-size:40px; color: white\">".concat(counterText, "<p>");
        }
        blinkTime--;
        if (blinkTime < 0) {
            clearInterval(blinkInterval);
            nextSignal();
        }
    }, 1000);
}
function nextSignal() {
    currentSignalIndex++;
    if (currentSignalIndex > 1) { // only red(0) and green(1) are steady
        currentSignalIndex = 0;
    }
    startCountdown();
}
// Start the cycle
startCountdown();
