function activateLightTheme(){
    var cssFile = document.getElementById("cssFile");
    cssFile?.setAttribute("href", "../css/light_theme.css");

    var indicator = document.getElementById("indicator");
    indicator?.innerHTML = "Light Theme Activated";
}

function activateDarkTheme(){
    var cssFile = document.getElementById("cssFile");
    cssFile?.setAttribute("href", "../css/dark_theme.css");

    var indicator = document.getElementById("indicator");
    indicator?.innerHTML = "Dark Theme Activated";
}