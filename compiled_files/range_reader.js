function readValue() {
    var rangeElement = document.getElementById("rangeInput");
    var rangeValue = document.getElementById("rangeValue");
    if (rangeElement && rangeValue) {
        rangeValue.innerHTML = rangeElement.value; // use .value, not getAttribute
    }
}
