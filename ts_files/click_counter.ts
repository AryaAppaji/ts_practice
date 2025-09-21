function incCount() {
    var countElem = document.getElementById("count");
    if (countElem) {
        let current = Number(countElem.innerHTML);
        current++; // increment
        countElem.innerHTML = current.toString();
    }
}

function decCount() {
    var countElem = document.getElementById("count");
    let decBtn = document.getElementById("decBtn");
    if (countElem) {
        let current = Number(countElem.innerHTML);
        current--; // decrement
        if(current == 0){
            decBtn?.setAttribute("type", "disabled");
        }
        else{
            countElem.innerHTML = current.toString();
            decBtn?.removeAttribute("type");
        }
    }
}

function resetCount() {
    var countElem = document.getElementById("count");
    if (countElem) {
        countElem.innerHTML = "0";
    }
}
