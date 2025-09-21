function validateForm(event: Event): boolean {
    // Get form values
    const name = (document.forms["demoForm"]["name"] as HTMLInputElement).value.trim();
    const email = (document.forms["demoForm"]["email"] as HTMLInputElement).value.trim();
    const password = (document.forms["demoForm"]["password"] as HTMLInputElement).value.trim();
    const dob = (document.forms["demoForm"]["dob"] as HTMLInputElement).value.trim();

    // Get error spans
    const error1 = document.getElementById("error1") as HTMLSpanElement;
    const error2 = document.getElementById("error2") as HTMLSpanElement;
    const error3 = document.getElementById("error3") as HTMLSpanElement;
    const error4 = document.getElementById("error4") as HTMLSpanElement;

    let hasError = false;

    // helper to show error
    const showError = (el: HTMLSpanElement, msg: string) => {
        el.innerHTML = msg;
        el.style.color = "red";
        el.removeAttribute("hidden");

        setTimeout(() => {
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
    } else {
        const todaysDate = new Date();
        const registerDob = new Date(dob);

        const currentYear = todaysDate.getFullYear();
        const registerYear = registerDob.getFullYear();

        const above10 = (currentYear - registerYear) > 10;

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
