function activateLightTheme() {
    var cssFile = document.getElementById("cssFile");
    cssFile === null || cssFile === void 0 ? void 0 : cssFile.setAttribute("href", "../css/light_theme.css");
    var indicator = document.getElementById("indicator");
    indicator === null || indicator === void 0 ? void 0 : indicator.innerHTML = "Light Theme Activated";
}
function activateDarkTheme() {
    var cssFile = document.getElementById("cssFile");
    cssFile === null || cssFile === void 0 ? void 0 : cssFile.setAttribute("href", "../css/dark_theme.css");
    var indicator = document.getElementById("indicator");
    indicator === null || indicator === void 0 ? void 0 : indicator.innerHTML = "Dark Theme Activated";
}
