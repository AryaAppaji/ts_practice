function viewOrHidePassword() {
    var field = document.getElementById("passwordField");
    var btnText = document.getElementById("viewOrHideBtn");
    var field_type = field === null || field === void 0 ? void 0 : field.getAttribute("type");
    if (field_type == "password") {
        field === null || field === void 0 ? void 0 : field.setAttribute("type", "text");
        btnText === null || btnText === void 0 ? void 0 : btnText.innerHTML = "Hide Password";
    }
    else if (field_type == "text") {
        field === null || field === void 0 ? void 0 : field.setAttribute("type", "password");
        btnText === null || btnText === void 0 ? void 0 : btnText.innerHTML = "View Password";
    }
}
