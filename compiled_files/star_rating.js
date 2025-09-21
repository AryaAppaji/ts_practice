function changeRating(value) {
    for (var s = 1; s <= 5; s++) {
        if (s <= value) {
            var box = document.getElementById("innerDiv".concat(s));
            box === null || box === void 0 ? void 0 : box.style.backgroundColor = "black";
        }
        else {
            var box = document.getElementById("innerDiv".concat(s));
            box === null || box === void 0 ? void 0 : box.style.backgroundColor = "white";
        }
    }
}
function clearRating() {
    for (var s = 1; s <= 5; s++) {
        var box = document.getElementById("innerDiv".concat(s));
        box === null || box === void 0 ? void 0 : box.style.backgroundColor = "white";
    }
}
