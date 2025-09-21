var block = document.getElementById("block");
var x = 0;
var y = 0;
var step = 100;
document.addEventListener("keydown", function (event) {
    switch (event.key) {
        case "ArrowUp":
            y -= step;
            break;
        case "ArrowDown":
            y += step;
            break;
        case "ArrowLeft":
            x -= step;
            break;
        case "ArrowRight":
            x += step;
            break;
    }
    block === null || block === void 0 ? void 0 : block.style.transform = "translate(".concat(x, "px, ").concat(y, "px)");
});
