function incCount() {
    var countElem = document.getElementById("count");
    if (countElem) {
        var current = Number(countElem.innerHTML);
        current++; // increment
        countElem.innerHTML = current.toString();
    }
}
function decCount() {
    var countElem = document.getElementById("count");
    var decBtn = document.getElementById("decBtn");
    if (countElem) {
        var current = Number(countElem.innerHTML);
        current--; // decrement
        if (current == 0) {
            decBtn === null || decBtn === void 0 ? void 0 : decBtn.setAttribute("type", "disabled");
        }
        else {
            countElem.innerHTML = current.toString();
            decBtn === null || decBtn === void 0 ? void 0 : decBtn.removeAttribute("type");
        }
    }
}
function resetCount() {
    var countElem = document.getElementById("count");
    if (countElem) {
        countElem.innerHTML = "0";
    }
}
