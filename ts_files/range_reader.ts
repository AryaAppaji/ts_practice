function readValue() {
    let rangeElement = document.getElementById("rangeInput") as HTMLInputElement | null;
    let rangeValue = document.getElementById("rangeValue");

    if (rangeElement && rangeValue) {
        rangeValue.innerHTML = rangeElement.value;  // use .value, not getAttribute
    }
}
