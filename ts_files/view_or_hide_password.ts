function viewOrHidePassword(){
    var field = document.getElementById("passwordField");
    var btnText = document.getElementById("viewOrHideBtn");

    var field_type: String = field?.getAttribute("type");

    if(field_type == "password"){
        field?.setAttribute("type", "text");
        btnText?.innerHTML = "Hide Password";
    }

    else if(field_type == "text"){
        field?.setAttribute("type", "password");
        btnText?.innerHTML = "View Password";
    }
}