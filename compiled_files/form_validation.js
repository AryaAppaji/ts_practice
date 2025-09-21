function validateForm(event) {
    // Get form values
    var name = document.forms["demoForm"]["name"].value.trim();
    var email = document.forms["demoForm"]["email"].value.trim();
    var password = document.forms["demoForm"]["password"].value.trim();
    var dob = document.forms["demoForm"]["dob"].value.trim();
    // Get error spans
    var error1 = document.getElementById("error1");
    var error2 = document.getElementById("error2");
    var error3 = document.getElementById("error3");
    var error4 = document.getElementById("error4");
    var hasError = false;
    // helper to show error
    var showError = function (el, msg) {
        el.innerHTML = msg;
        el.style.color = "red";
        el.removeAttribute("hidden");
        setTimeout(function () {
            el.innerHTML = "";
            el.setAttribute("hidden", "true");
        }, 2000);
    };
    // Name validation
    if (!name) {
        showError(error1, "Name is required");
        hasError = true;
    }
    // Email validation
    if (!email) {
        showError(error2, "Email is required");
        hasError = true;
    }
    // Password validation
    if (!password) {
        showError(error3, "Password is required");
        hasError = true;
    }
    // DOB validation
    if (!dob) {
        showError(error4, "DOB is required");
        hasError = true;
    }
    else {
        var todaysDate = new Date();
        var registerDob = new Date(dob);
        var currentYear = todaysDate.getFullYear();
        var registerYear = registerDob.getFullYear();
        var above10 = (currentYear - registerYear) > 10;
        if (!above10) {
            showError(error4, "The user must be at least 10 years old to register");
            hasError = true;
        }
    }
    // ❌ prevent submission if there are errors
    if (hasError) {
        event.preventDefault();
        return false;
    }
    // ✅ allow submission if no errors
    return true;
}
