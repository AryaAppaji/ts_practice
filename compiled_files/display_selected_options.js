var optionBox = document.getElementById("optionBox");
var selectedOptionsList = document.getElementById("selectedOptions");
function getDropdownValue() {
    selectedOptionsList.innerHTML = ""; // Clear existing list
    Array.from(optionBox.selectedOptions).forEach(function (opt) {
        var li = document.createElement("li");
        li.textContent = opt.text;
        // Create the remove button
        var removeBtn = document.createElement("span");
        removeBtn.textContent = "x";
        // On click -> deselect in dropdown + remove from list
        removeBtn.onclick = function () {
            opt.selected = false; // deselect in dropdown
            li.remove(); // remove from list
        };
        li.appendChild(removeBtn);
        selectedOptionsList.appendChild(li);
    });
}
